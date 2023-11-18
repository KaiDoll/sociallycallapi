const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      // match: [/^([\w_.-]+)@([\w]+)\.\w{2,6}$/, "Please enter a valid email"], //validate email using regex
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId, 
        ref: 'Thought',
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
})
const User = model('User', userSchema);

module.exports = User;
