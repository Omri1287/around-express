const  mongoose = require('mongoose');
const validator = require('validator');
//for commit reasons

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: 2,
    maxlength: 30,
    required: true
  },
  about: {
    type: String,
    minLength: 2,
    maxlength: 30,
    required: true
  },
  avatar: {
    type: String,
    required: true,
    validate: {
      validator: (v) => validator.isURL(v, [{ allow_underscores: true }]),
    },
  },
});

module.exports = mongoose.model('user', userSchema);