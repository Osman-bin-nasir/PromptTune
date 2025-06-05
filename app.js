require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose')
const path = require('path');
const connectDB = require('./config/db');

const app= express();

// database connection
connectDB();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});