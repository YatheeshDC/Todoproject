const express = require('express');
const router = express.Router();
const TodoItem = require('../models/TodoItem');

// Create a new todo item
router.post('/', async (req, res) => {
  try {
    const newItem = await TodoItem.create(req.body);
    res.status(201).json(newItem);
  } catch (err) {
    console.error('Error creating todo item:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Read all todo items
router.get('/', async (req, res) => {
  try {
    const items = await TodoItem.find();
    res.json(items);
  } catch (err) {
    console.error('Error fetching todo items:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Update a todo item
router.put('/:id', async (req, res) => {
  try {
    const updatedItem = await TodoItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedItem);
  } catch (err) {
    console.error('Error updating todo item:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Delete a todo item
router.delete('/:id', async (req, res) => {
  try {
    await TodoItem.findByIdAndDelete(req.params.id);
    res.json({ message: 'Todo item deleted successfully' });
  } catch (err) {
    console.error('Error deleting todo item:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
