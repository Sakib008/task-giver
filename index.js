const express = require('express')
const app = express();

app.get("/",(req,res)=>{
    res.send("Hello agent task app is working fine")
})
const PORT = process.env.PORT || 3003
app.listen(PORT,()=>{
    console.log("Server is Running on PORT : ",PORT)
})