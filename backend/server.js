// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/product');

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
// app.use('/api', require('./routes/authRoutes'));


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.listen(5000, '0.0.0.0', () => console.log('Server running on port 5000'));
