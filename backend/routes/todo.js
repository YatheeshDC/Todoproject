// const express = require('express');
// const router = express.Router();
// const TodoList = require('../models/TodoList'); // Assuming Mongoose model for TodoList

// // POST /api/todolists - Create a new todo list
// router.post('/todolists', async (req, res) => {
//   try {
//     const { name } = req.body;
//     const newList = await TodoList.create({ name }); // Create new document in MongoDB
//     res.status(201).json(newList); // Respond with created document
//   } catch (error) {
//     console.error('Error creating todo list:', error);
//     res.status(500).json({ error: 'Server error' }); // Handle server error
//   }
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const TodoList = require('../models/TodoList'); // Assuming Mongoose model for TodoList

// POST /api/todolists - Create a new todo list
router.post('/todolists', async (req, res) => {
  try {
    const { name } = req.body;
    const newList = await TodoList.create({ name }); // Create new document in MongoDB
    res.status(201).json(newList); // Respond with created document
  } catch (error) {
    console.error('Error creating todo list:', error);
    res.status(500).json({ error: 'Server error' }); // Handle server error
  }
});

module.exports = router;

