
const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const jwtAuthorize = require('./utils/jwtAuthorize')


const pool = require('./db')




router.get('/lmv',async(req,res)=>{
    try {
        const getAllUsers = await pool.query(`select * from lmvcustomerform`)
        res.json(getAllUsers.rows)
    } catch (error) {
        console.log(error);
    }
})


router.get('/lmv/:id',async(req,res)=>{
    try {
        const {id} = req.params
        const getAllUsers = await pool.query(`select * from lmvcustomerform where id=$1`,[id])
        res.json(getAllUsers.rows)
    } catch (error) {
        console.log(error);
    }
})


//post req with jwt token 
router.post('/lmv/register',async(req,res)=>{
    try {
//verifi in detabase whether user exists 
const verifyUser = await pool.query(`select * from lmvcustomerform where user_mobilenum=$1`,[req.body.MobileNum])
if(verifyUser.rows.length>0) return res.json('user already exists create with different number') 

//hashing password before string in database
const salt = await bcrypt.genSalt(10)
const hashedPassword = await bcrypt.hash(req.body.Password,salt)

//storing in database 
        const newUser = await pool.query(`insert into lmvcustomerform(
            user_name,user_passwword,user_mobilenum,user_adhar,alternate_num,user_bank,user_bank_Account,
            user_designation,user_location,user_branch,user_state,assigned_manager,user_address)
            values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13) returning * `,
                [ req.body.Name,hashedPassword,req.body.MobileNum,req.body.Adhar,req.body.AlternateNum,
                    req.body.BankName,req.body.BankAccount,req.body.Designation,
                    req.body.Location,req.body.Branch,req.body.State,req.body.AssignedManager,req.body.Address])

   const jwtToken = jwtAuthorize(newUser.rows[0].customerid)
   return res.json({jwtToken})
                    

    } catch (error) {
        console.log(error);
    }
})


//jwt token for returnning user 
router.post('/lmv/login',async(req,res)=>{
    try {
        //user mus be in database if not exists then throw error
const verifyUser = await pool.query(`select * from lmvcustomerform where user_mobilenum = $1`,[req.body.MobileNum])
if(verifyUser.rows.length === 0) return res.json('user does not exists in our records')

//comparing user entered password with existing database password
const userEnteredPassword = await bcrypt.compare(req.body.Password,verifyUser.rows[0].user_passwword)

//condition if password is incorrect throw error otherwise return jwt token

if(!userEnteredPassword) return res.json('password in incorrect')

//provide jwt token

const jwtToken = jwtAuthorize(verifyUser.rows[0].customerid)
return res.json({jwtToken})



    } catch (error) {
        console.log(error);
    }
})










router.put('/lmv/:user_id',async(req,res)=>{
    try {
        const {user_id} = req.params
        const updateUser = await pool.query(`update lmvcustomerform set 
        user_name=$1,user_mobilenum=$2,user_adhar=$3,alternate_num=$4,user_bank=$5,user_bank_Account=$6,
        user_designation=$7,user_location=$8,user_branch=$9,user_state=$10,assigned_manager=$11,user_address=$12 where user_id =$13`,
        [ req.body.Name,req.body.MobileNum,req.body.Adhar,req.body.AlternateNum,
            req.body.BankName,req.body.BankAccount,req.body.Designation,
            req.body.Location,req.body.Branch,req.body.State,req.body.AssignedManager,req.body.Address,user_id])
    res.json('updated')
    
        } catch (error) {
        console.log(error);
    }
})



router.delete('/lmv/:user_id',async(req,res)=>{
    try {
        const {user_id} = req.params
        const deleteCustomer = await pool.query(`delete from lmvcustomerform where user_id=$1`,[user_id])
        res.json('deleted')
    } catch (error) {
        console.log(error);
    }
})






module.exports = router