const express = require('express');
const router = express.Router();
const TodoList = require('../models/TodoList');

// POST /api/todolists - Create a new todo list
router.post('/todolists', async (req, res) => {
  try {
    const { name } = req.body;
    const newList = new TodoList({ name });
    await newList.save();
    res.status(201).json(newList);
  } catch (error) {
    console.error('Error creating todo list:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
