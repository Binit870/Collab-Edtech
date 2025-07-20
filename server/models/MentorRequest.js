import mongoose from 'mongoose';

const mentorRequestSchema = new mongoose.Schema({
  mentee: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  mentor: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  message: String,
  status: { type: String, enum: ['pending', 'accepted', 'rejected'], default: 'pending' }
}, { timestamps: true });

const MentorRequest = mongoose.model('MentorRequest', mentorRequestSchema);
export default MentorRequest;
