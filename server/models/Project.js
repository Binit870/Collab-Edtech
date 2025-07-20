import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  members: [String],
  skills: [String], // optional, if you want skill-based filtering
});

export default mongoose.model("Project", projectSchema);
