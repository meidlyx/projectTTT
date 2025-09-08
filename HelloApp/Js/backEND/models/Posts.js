import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  device: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  problem: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

export default mongoose.model('Post', PostSchema);
