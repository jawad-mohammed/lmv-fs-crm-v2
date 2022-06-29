const express = require('express')
const app = express()
app.use(express.json())
app.use('/',require('./route'))







app.listen(8000,()=>console.log(`server is listening on 8000`))