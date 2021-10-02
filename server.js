const express = require('express')
const app = express()


app.get('/',(req,res)=>{

res.send('API Running')

})


app.listen(5000,(req,res)=>{

 
    console.log(`Server started on Port 5000`)

})
