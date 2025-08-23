require('dotenv').config();
const mongoose = require('mongoose');
const initializeDatabase = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log("Database connected successfully:", conn.connection.host);
    } catch (error) {
        console.error("Database connection error:", error.response?.message || error.message || error);
    }
}

module.exports = initializeDatabase;

