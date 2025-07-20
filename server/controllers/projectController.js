import Project from "../models/Project.js";

// GET all projects
export const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find(); // fetch from MongoDB
    res.status(200).json({ projects });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch projects" });
  }
};

// POST create new project
export const createProject = async (req, res) => {
  try {
    const { name, members } = req.body;
    const newProject = new Project({ name, members });
    await newProject.save();
    res.status(201).json(newProject);
  } catch (error) {
    res.status(400).json({ error: "Error creating project" });
  }
};
