


const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
 const todoRoutes = require('./routes/todoRoutes')
const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/api/todolists', todoRoutes);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/ansr', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to MongoDB'));
app.use('/api/auth', require('./routes/auth'));
app.listen(port, () => console.log(`Server running on port ${port}`));




// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(cors());
// app.use(bodyParser.json());

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/ansr', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }).then(() => {
//   console.log('Connected to MongoDB');
// }).catch((err) => {
//   console.error('Error connecting to MongoDB:', err);
// });

// // Auth route
// app.use('/api/auth', require('./routes/auth'));

// // Start server
// app.listen(PORT, () => {
//   console.log(`Server is running on port: ${PORT}`);
// });
