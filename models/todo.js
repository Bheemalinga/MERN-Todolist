const mongoose = require("mongoose");

const TodoSchema = new Schema({
  action: {
    type: String,
    required: [true, "Text field is required"],
  },
});

// ceating a model for Todo
const Todo = mongoose.model("todo", TodoSchema);

module.exports = Todo;
