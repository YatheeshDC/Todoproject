const mongoose = require('mongoose');

const todoItemSchema = new mongoose.Schema({
  name: { type: String, required: true }
});

const todoListSchema = new mongoose.Schema({
  name: { type: String, required: true },
  items: [todoItemSchema]
});

module.exports = mongoose.model('TodoList', todoListSchema);