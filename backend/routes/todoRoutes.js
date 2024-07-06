




const express = require('express');
const router = express.Router();
const TodoList = require('../models/TodoList'); // Adjust path as needed

// GET all todo lists
router.get('/', async (req, res) => {
  try {
    const todoLists = await TodoList.find();
    res.json(todoLists);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

// POST a new todo list
router.post('/', async (req, res) => {
  const todoList = new TodoList({
    name: req.body.name,
    items: []
  });

  try {
    const newTodoList = await todoList.save();
    res.status(201).json(newTodoList);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

// DELETE a todo list by ID
router.delete('/:id', async (req, res) => {
  try {
    const result = await TodoList.findByIdAndDelete(req.params.id);
    if (!result) {
      return res.status(404).send({ message: 'Todo list not found' });
    }
    res.send({ message: 'Todo list removed successfully' });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

// PATCH (update) a todo list by ID
router.patch('/:id', async (req, res) => {
  try {
    const updatedTodoList = await TodoList.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedTodoList) {
      return res.status(404).send({ message: 'Todo list not found' });
    }
    res.json(updatedTodoList);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

module.exports = router;
