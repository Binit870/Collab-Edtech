import MentorRequest from '../models/MentorRequest.js';

export const requestMentor = async (req, res) => {
  try {
    const { mentee, mentor, message } = req.body;
    const newRequest = await MentorRequest.create({ mentee, mentor, message });
    res.status(201).json(newRequest);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getMentorRequests = async (req, res) => {
  try {
    const mentorId = req.params.mentorId;
    const requests = await MentorRequest.find({ mentor: mentorId }).populate('mentee');
    res.status(200).json(requests);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
