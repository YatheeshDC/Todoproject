

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const todoRoutes = require('./routes/todoRoutes'); // Adjust path as needed
const authRoutes = require('./routes/auth'); // Assuming you have an auth route

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/api/todolists', todoRoutes);
app.use('/api/auth', authRoutes); // Assuming you have an auth route

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/ansr', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', (error) => console.error('MongoDB connection error:', error));
db.once('open', () => console.log('Connected to MongoDB'));

// Start the server
app.listen(port, () => console.log(`Server running on port ${port}`));
