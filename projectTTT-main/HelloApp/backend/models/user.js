import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  fullname: {
    type: String,
    required: true,
  },
  PasswordHash: {
    type: String,
    required: true,
  },
});

export default mongoose.model('User', UserSchema);
