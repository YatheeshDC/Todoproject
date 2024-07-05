const express = require('express');
const router = express.Router();
const TodoList = require('../models/TodoList');

// Get all todo lists
router.get('/', async (req, res) => {
  try {
    const todoLists = await TodoList.find();
    res.json(todoLists);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new todo list
router.post('/', async (req, res) => {
  const todoList = new TodoList({
    name: req.body.name,
    items: req.body.items || []
  });

  try {
    const newTodoList = await todoList.save();
    res.status(201).json(newTodoList);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a todo list
router.patch('/:id', async (req, res) => {
  try {
    const todoList = await TodoList.findById(req.params.id);
    if (!todoList) {
      return res.status(404).json({ message: 'Todo list not found' });
    }

    if (req.body.name) {
      todoList.name = req.body.name;
    }
    if (req.body.items) {
      todoList.items = req.body.items;
    }

    const updatedTodoList = await todoList.save();
    res.json(updatedTodoList);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a todo list
router.delete('/:id', async (req, res) => {
  try {
    const todoList = await TodoList.findById(req.params.id);
    if (!todoList) {
      return res.status(404).json({ message: 'Todo list not found' });
    }

    await todoList.remove();
    res.json({ message: 'Todo list deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// DELETE todo list by ID
router.delete('/api/todolists/:id', async (req, res) => {
  try {
    const todoList = await TodoList.findByIdAndDelete(req.params.id);
    if (!todoList) {
      return res.status(404).json({ message: 'Todo list not found' });
    }
    res.status(200).json({ message: 'Todo list deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

module.exports = router;