const mongoose = require("mongoose");
const TaskScheme = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    phoneNo: { type: Number, required: true },
    notes: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

const Task = mongoose.model("Task", TaskScheme);

module.exports = Task;