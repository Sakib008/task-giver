const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: [true, "Email must be unique"],
      lowercase: [true, "Email must be lowercase"],
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"]
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [8, "Password must be at least 8 characters long"],
      maxlength: [20, "Password must be at most 20 characters long"],
    },
    phone: {
      type: Number,
      required: true,
    },
    varificationCode: {
      type: String,
      required: true,
    },
    verifyCodeExpiry : {
      type: Date,
      required: true,
      default: Date.now() 
    },
    isVarified: {
      type: Boolean,
      default: false,
    },
    task: [{type: mongoose.Schema.Types.ObjectId, ref: 'Task'}],
    agent: [{type: mongoose.Schema.Types.ObjectId, ref: 'Agent'}],
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
