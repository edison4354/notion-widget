const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema for todo
const TodoSchema = new Schema({
  color: { type: String, required: true},
  colorOne: { type: String, required: true},
});

// Create model for todo
const Todo = mongoose.model('todo', TodoSchema);

module.exports = Todo;