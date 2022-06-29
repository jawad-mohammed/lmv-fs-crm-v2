const JWT = require('jsonwebtoken')
require('dotenv').config()

function jwtAuthorize(customerid){
const payload ={
    user:{
        id:customerid
    }

}
return JWT.sign(payload,process.env.jwtsecret,{expiresIn:'1hr'})
}

module.exports = jwtAuthorize