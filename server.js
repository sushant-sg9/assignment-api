const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const assignmentRoutes = require('./routes/assignments');

dotenv.config();
const app = express();
const PORT = 5000;

app.use(express.json());

mongoose.connect('mongodb+srv://sushantghadge2016:lKgKau9V6xNjONgB@cluster0.lbgska9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.error('MongoDB connection error:', err));

app.use('/api', assignmentRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
