const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  id: String,
  fullName: String,
  firstName: String,
  lastName: String,
  picture: String,
  email: String,
  emailVerified: Boolean,
  locale: String
});

mongoose.model('users', userSchema);
