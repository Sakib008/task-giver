require('dotenv').config();
const express = require('express')
const initializeDatabase = require('./db/db.connect')
const resendRoute = require('./routes/resend.route');


const app = express();
app.use(express.json());
initializeDatabase();


app.get("/",(req,res)=>{
    res.send("Hello agent task app is working fine")
})
app.use("/api/v1/resend",resendRoute)
const PORT = process.env.PORT || 3003
app.listen(PORT,()=>{
    console.log("Server is Running on PORT : ",PORT)
})