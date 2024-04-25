const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const signupSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      unique: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    }
  });
  const Signup = mongoose.model('employeeSignup', signupSchema);
  module.exports = Signup;