const Pool = require("pg").Pool;

const pool = new  Pool({
    user:'postgres',
    host:'localhost',
    database:'lmvCustomerForm',
    password:'@Ravind95',
    port:'5432'
})

module.exports = pool