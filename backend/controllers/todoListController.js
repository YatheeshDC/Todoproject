const TodoList = require('../models/TodoList');

// Create a new todo list
exports.createList = async (req, res) => {
  try {
    const newList = new TodoList({
      name: req.body.name,
      userId: req.user.id, // Assuming you have authentication middleware
    });
    const savedList = await newList.save();
    res.status(201).json(savedList);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all todo lists for a user
exports.getAllLists = async (req, res) => {
  try {
    const lists = await TodoList.find({ userId: req.user.id });
    res.json(lists);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a specific todo list by ID
exports.getListById = async (req, res) => {
  try {
    const list = await TodoList.findById(req.params.id);
    res.json(list);
  } catch (err) {
    res.status(404).json({ message: 'Todo list not found' });
  }
};

// Update a todo list by ID
exports.updateList = async (req, res) => {
  try {
    const updatedList = await TodoList.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedList);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a todo list by ID
exports.deleteList = async (req, res) => {
  try {
    await TodoList.findByIdAndDelete(req.params.id);
    res.json({ message: 'Todo list deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
