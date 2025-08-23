import mongoose from "mongoose";
const {Task} = require("./task")

const AgentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: [true, "Email must be unique"],
      lowercase: [true, "Email must be lowercase"],
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"]
    },
    phone: { type: Number, required: true },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [8, "Password must be at least 8 characters long"],
      maxlength: [20, "Password must be at most 20 characters long"],
    },
    task: [Task],
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

const Agent = mongoose.model("Agent", AgentSchema);

module.exports = Agent;
