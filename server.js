const express = require('express')
const app = express()


app.get('/',(req,res)=>{

res.send('API IS RUNNIN')

})


app.listen(5000,(req,res)=>{

 
    console.log(`Server started on Port 5000`)

})