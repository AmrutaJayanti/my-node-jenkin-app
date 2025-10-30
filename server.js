const express = require('express')
const app = express()

const PORT = 3000

app.get('/',(req,res) {
   res.send("A simple Nodejs Application") })
   
   
app.listen(PORT, () => {
console.log("Server started running on 3000")})


   

   
   

