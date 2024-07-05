const mongoose = require('mongoose');

const todoItemSchema = new mongoose.Schema({
  text: { type: String, required: true },
  completed: { type: Boolean, default: false }
});

const TodoItem = mongoose.model('TodoItem', todoItemSchema);

module.exports = TodoItem;
