import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['learner', 'mentor'],
    default: 'learner',
  },
  skills: {
    type: [String],
    default: [], // Start with an empty list of skills
  }
}, { timestamps: true });

export default mongoose.model('User', userSchema);
