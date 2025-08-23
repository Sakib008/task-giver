require('dotenv').config();
const express = require('express')
const initializeDatabase = require('./db/db.connect')

const app = express();
initializeDatabase();

app.get("/",(req,res)=>{
    res.send("Hello agent task app is working fine")
})
const PORT = process.env.PORT || 3003
app.listen(PORT,()=>{
    console.log("Server is Running on PORT : ",PORT)
})