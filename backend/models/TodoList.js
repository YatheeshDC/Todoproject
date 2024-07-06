

const mongoose = require('mongoose');

const todoListSchema = new mongoose.Schema({
  name: { type: String, required: true },
  items: [{ name: String }],
});

module.exports = mongoose.model('TodoList', todoListSchema);

