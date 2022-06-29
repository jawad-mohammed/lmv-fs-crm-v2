
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const fast2sms = require('fast-two-sms')
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.post('/sendmessage',(req,res)=>{
    console.log(req.body.message);
    console.log(req.body.number);
    sendMessage(req.body.message,req.body.number,res)
})

 function sendMessage(message,number,res){

    var options ={
    authorization :"uffQpCY53qmnoqKAy3rIHuHyeUcp9As0CJUXOZRaDcHz7dM1pVdLsjCsqAyR",
    message:message,
    numbers:[number]
}

fast2sms.sendMessage(options)
.then((response)=>{
res.send('sms  otp sent successfully')
})
.catch((error)=>{
res.send('error')
})

}









app.listen(8000,()=>console.log(`server listening on 8000`))