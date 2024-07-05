const TodoItem = require('../models/TodoItem');

// Create a new todo item
exports.createItem = async (req, res) => {
  try {
    const newItem = new TodoItem({
      name: req.body.name,
      listId: req.body.listId,
      completed: req.body.completed || false,
    });
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all todo items for a list
exports.getItemsByListId = async (req, res) => {
  try {
    const items = await TodoItem.find({ listId: req.params.listId });
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a specific todo item by ID
exports.getItemById = async (req, res) => {
  try {
    const item = await TodoItem.findById(req.params.id);
    res.json(item);
  } catch (err) {
    res.status(404).json({ message: 'Todo item not found' });
  }
};

// Update a todo item by ID
exports.updateItem = async (req, res) => {
  try {
    const updatedItem = await TodoItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedItem);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a todo item by ID
exports.deleteItem = async (req, res) => {
  try {
    await TodoItem.findByIdAndDelete(req.params.id);
    res.json({ message: 'Todo item deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
