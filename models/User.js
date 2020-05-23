const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  _id: String,
  /**
   * Why do I need the above property?  It isn't referenced anywhere in the course content but if I don't have it
   * then I experience a fatal error.  I have an outstanding question and I hope that I can get this issue resolved.
   *
   * https://www.udemy.com/course/node-with-react-fullstack-web-development/learn/lecture/7603052#questions/10343686
   */
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