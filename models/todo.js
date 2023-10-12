const mongoose = require("mongoose");
const Schema = mongoose.Schema; // Importing the Schema class from Mongoose

const TodoSchema = new Schema({
  action: {
    type: String,
    required: [true, "Text field is required"],
  },
});

// ceating a model for Todo
const Todo = mongoose.model("todo", TodoSchema);

module.exports = Todo;
