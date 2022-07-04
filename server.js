const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())
app.use('/',require('./route'))



app.get('/',(req,res)=>{
res.send('hello')
})



app.listen(8000,()=>console.log(`server is listening on 8000`))