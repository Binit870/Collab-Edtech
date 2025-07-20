import User from '../models/User.js';

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().populate('projects');
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate('projects');
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
