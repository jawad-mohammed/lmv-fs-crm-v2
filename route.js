const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const jwtAuthorize = require('./utils/jwtAuthorize')

const pool = require('./db')

//@post req
router.post('/lmv/register',async(req,res)=>{
//checkes in database for existing user
// const verifyCustomer = await pool.query(`select * from crm_fs_addemployeee where Employeeid=$1`,
// [req.body.Employeeid]) 
//if not exists 
//if (verifyCustomer.rows.length > 0) return res.json('user already exists please try another one')
//if not exists then make user to register the account



    const registerUser = await pool.query(`insert into crm_fs_addemployeee(
        Employeeid,
        userName, 
        MNumber,
        email,
        AlternateNo,
        PanCard,
        AdharCard,
        Status,
        BankName,
        AccountNo,
        IFSCCODE,
        BankBranch,
        Address,
        AAddress,
        Pincode,
        state,
        district,
        city,
        designation,
        AssignedManager,
        companylocation,
        CBankBranch)

    values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22) returning *`,
    [req.body.Employeeid,
        req.body.userName,
        req.body.MNumber,
        req.body.email,
        req.body.AlternateNo,
        req.body.PanCard,
        req.body.AdharCard,
        req.body.Status,
        req.body.BankName,
        req.body.AccountNo,
        req.body.IFSCCODE,
        req.body.BankBranch,
        req.body.Address,
        req.body.AAddress,
        req.body.Pincode,
        req.body.state,
        req.body.district,
        req.body.city,
        req.body.designation,
        req.body.AssignedManager,
        req.body.companylocation,
        req.body.CBankBranch
    ])
// const jwtToken = jwtAuthorize(registerUser.rows[0].customerid)
//  res.json(jwtToken)
res.json(registerUser.rows)


   
})




//@returning user 
//login route
router.post('/lmv/login',async(req,res)=>{

// user must be stored in database and it verifies with EMPLOYEEID && should match within database 
const checkUser = await pool.query(`select * from crm_fs_addemployeee where employeeid =$1`,[req.body.Employeeid])
//if not matches throw error

 if(checkUser.rows.length === 0) return res.json({message:`user not exists`})

//     //get the user mobile  and verify in database comapre user mobile no with database mobile no
   // const validNumber = await bcrypt.compare(req.body.MNumber,checkUser.rows[0].mnumber)

//   //it verifies the otp with node generated otp
   const val = Math.floor(1000 + Math.random() * 9000);
    console.log(val);
     res.json(val)
// const verifyToken = (req.body.token=== 123)
// if(!verifyToken) return res.json('its false token')

        
//         const jwtToken = jwtAuthorize(checkUser.rows[0].userid)
//      return res.json({myJwtToken:jwtToken})



})



//@get req
router.get('/lmv', async(req,res)=>{
    const getAlUsers = await pool.query(`select * from crm_fs_addemployeee`)
    res.json(getAlUsers.rows)
})
//@get by id 
router.get('/lmv/:employeeid', async(req,res)=>{
    // "employeeid": "12452",
    const {employeeid} = req.params
    const getAlUsers = await pool.query(`select * from crm_fs_addemployeee where employeeid= $1`,[employeeid])
    res.json(getAlUsers.rows[0])
})



//post otp 
router.post('/lmv/otp', async(req,res)=>{
    //   //it verifies the otp with node generated otp
   const val = Math.floor(1000 + Math.random() * 9000);
   console.log(val);
    res.json({otp:val})
// const verifyToken = (req.body.token=== 123)
// if(!verifyToken) return res.json('its false token')
})

//post req
router.post('/emp/designation',async(req,res)=>{
    const addDesignation = await pool.query(`insert into crm_fs_addemployeee(designation)values($1)returning *`,[req.body.searchInput])
    res.json(addDesignation.rows)
 console.log(req.body);
})

//@ update user
router.put('/lmv/empid/:id',async(req,res)=>{
    const {id} = req.params
const updateUser = await pool.query(`update crm_fs_addemployeee set designation=$1 where id=$2`,[req.body.designation, id])
res.json('updated')
console.log(req.body);
})


//delete user
router.delete('/lmv/:id',async(req,res)=>{
    const {id} = req.params
    const deleteUser = await pool.query(`delete  from crm_fs_addemployeee where id = $1`,[id])
    res.json('deleted')

})


module.exports = router


// router.delete('/employee/:id',async(req,res)=>{
//     const {id} = req.params
//     const deleteEmp = await pool.query(`delete from developer where user_id=$1`,[id])
//     res.json('deleted')