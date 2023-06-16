import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  name: {
    type: String,
  },
  hobby: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

 

const User = model('User', userSchema, 'user');

 

export { User };