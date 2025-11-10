const express = require('express');

const app = express();
const connectDB = require('./config/db');

// Connect to the database
connectDB();
module.exports = app;