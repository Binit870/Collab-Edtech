import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import axios from "axios";

const Collab = () => {
  const { user } = useAuth();

  const [searchTerm, setSearchTerm] = useState("");
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newProjectName, setNewProjectName] = useState("");
  const [members, setMembers] = useState([""]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [userProjects, setUserProjects] = useState([]);
  const [showMyProjects, setShowMyProjects] = useState(false);
  const [projects, setProjects] = useState([]);

  // Fetch all projects from the backend
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get("/api/projects"); // Adjust to your backend route
        setProjects(res.data.projects); // adjust depending on your response structure
      } catch (err) {
        console.error("Error fetching projects:", err);
      }
    };

    fetchProjects();
  }, []);

  const handleSearch = () => {
    const term = searchTerm.toLowerCase();
    if (!Array.isArray(projects)) {
      console.error("Projects is not an array:", projects);
      return;
    }

    const matched = projects.filter((project) =>
      project.skills?.some((skill) => skill.toLowerCase().includes(term))
    );

    setFilteredProjects(matched);
    setShowCreateForm(matched.length === 0 && term !== "");
    setShowMyProjects(false);
  };

  const handleAddMemberField = () => {
    setMembers([...members, ""]);
  };

  const handleMemberChange = (index, value) => {
    const updated = [...members];
    updated[index] = value;
    setMembers(updated);
  };

  const handleCreateProject = async () => {
    const project = {
      name: newProjectName,
      members: members.filter((m) => m.trim() !== ""),
    };

    try {
      const res = await axios.post("/api/projects", project);
      setUserProjects([...userProjects, res.data]);
      alert("Project created successfully!");
      setNewProjectName("");
      setMembers([""]);
      setShowCreateForm(false);
      setSearchTerm("");
      setFilteredProjects([]);
    } catch (err) {
      console.error("Error creating project:", err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-purple-700 via-purple-500 to-purple-300">
      <div className="w-full max-w-5xl bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-2xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-white">
          Collaborate on Projects
        </h2>

        {/* Search bar + buttons */}
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search skills (e.g., webdev)"
            className="flex-1 min-w-[200px] border border-gray-300 rounded px-4 py-2"
          />
          <button
            onClick={handleSearch}
            className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
          >
            🔍 Search
          </button>
          <button
            onClick={() => alert("Mentor search coming soon!")}
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
          >
            🎓 Find Mentors
          </button>
          <button
            onClick={() => {
              setShowCreateForm(true);
              setFilteredProjects([]);
              setSearchTerm("");
              setShowMyProjects(false);
            }}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            + Create Project
          </button>
          <button
            onClick={() => {
              setShowMyProjects(!showMyProjects);
              setShowCreateForm(false);
              setFilteredProjects([]);
              setSearchTerm("");
            }}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            My Projects
          </button>
        </div>

        {/* Matching Projects */}
        {filteredProjects.length > 0 && (
          <div className="space-y-4 mb-6">
            {filteredProjects.map((project) => {
              const matchedSkills =
                user?.skills?.filter((skill) =>
                  project.skills?.includes(skill.toLowerCase())
                ) || [];

              return (
                <div
                  key={project._id}
                  className="bg-white/10 p-4 shadow-md rounded-lg border border-white/10 flex justify-between items-center"
                >
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {project.name}
                    </h3>
                    <p className="text-sm text-gray-200">
                      Skills: {project.skills?.join(", ")}
                    </p>
                    {matchedSkills.length > 0 && (
                      <p className="text-green-400 font-semibold mt-1">
                        ✅ You can collaborate with them
                      </p>
                    )}
                  </div>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                    Collaborate
                  </button>
                </div>
              );
            })}
          </div>
        )}

        {/* My Projects Section */}
        {showMyProjects && (
          <div className="mb-6 space-y-4">
            <h3 className="text-xl font-semibold mb-2 text-white">
              My Created Projects:
            </h3>
            {userProjects.length === 0 ? (
              <p className="text-gray-200">
                You haven't created any projects yet.
              </p>
            ) : (
              userProjects.map((project) => (
                <div
                  key={project._id}
                  className="bg-white/10 p-4 shadow-md rounded-lg border border-white/10"
                >
                  <h4 className="text-lg font-semibold text-white">
                    {project.name}
                  </h4>
                  <p className="text-sm text-gray-200">
                    Members: {project.members?.join(", ")}
                  </p>
                </div>
              ))
            )}
          </div>
        )}

        {/* Create Project Form */}
        {showCreateForm && (
          <div className="mb-6 bg-white/10 p-4 rounded-lg shadow-md border border-white/10">
            <h3 className="text-lg font-semibold mb-3 text-white">
              Create New Project:
            </h3>
            <input
              type="text"
              placeholder="Project Name"
              value={newProjectName}
              onChange={(e) => setNewProjectName(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 rounded mb-3"
            />

            {members.map((member, idx) => (
              <input
                key={idx}
                type="text"
                placeholder={`Member ${idx + 1}`}
                value={member}
                onChange={(e) => handleMemberChange(idx, e.target.value)}
                className="w-full border border-gray-300 px-3 py-2 rounded mb-2"
              />
            ))}

            <button
              onClick={handleAddMemberField}
              className="mb-3 bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
            >
              + Add Member
            </button>

            <br />
            <button
              onClick={handleCreateProject}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Submit Project
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Collab;
