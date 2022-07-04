
const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const jwtAuthorize = require('./utils/jwtAuthorize')


const pool = require('./db')

router.post('/register',(req,res)=>{
    const registerUser = await pool.query(`insert into lmvcustomerform(
        emp_id,emp_name,mobile,email,alternate_mobile,pan_card,adhar_card,status,bank_details,bank_name,
        account_no,ifsc_code,branch_name,address_one,address_two,pin_code,state,district,city,company,
        designation,assigned_manager,location,branch)
    values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$14,$16,$17,$18,$19,$20,$21,$22,$23,$24) returning *`,
    [req.body.emp_id,
        req.body.emp_name,
        req.body.mobile,
        req.body.email,
        req.body.alternate_mobile,
        req.body.pan_card,
        req.body.adhar_card,
        req.body.status,
        req.body.bank_details,
        req.body.bank_name,
        req.body.account_no,
        req.body.ifsc_code,
        req.body.branch_name,
        req.body.address_one,
        req.body.address_two,
        req.body.pin_code,
        req.body.state,
        req.body.district,
        req.body.city,
        req.body.company,
        req.body.designation,
        req.body.assigned_manager,
        req.body.location,
        req.body.branch
    
    ])

    res.json(registerUser.rows)
})


router.get('/get', async(req,res)=>{
    const getAlUsers = await pool.query(`select * from lmvcustomerform`)
    res.json(getAlUsers.rows)
})







module.exports = router
