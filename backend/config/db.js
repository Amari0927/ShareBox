const mongoose = require('mongoose');
require('dotenv').config();

const DB_URI = process.env.DB_URI;

mongoose.set("strictQuery", false);

async function connectDB() {
    try {
    mongoose.connect(DB_URI);
    console.log("Database connected successfully");
    } catch (error) {
        console.error("Failed to connect to MongoDB:", err);
        process.exit(1)
    }
}


module.exports = connectDB;