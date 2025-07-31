import React from "react";

export default function ProjectCard({ project }) {
  return (
    // Card container with a new dark background
    <div className="bg-cyan-800 rounded-xl shadow-md p-5 h-full flex flex-col justify-between transition hover:shadow-lg hover:shadow-indigo-500/20"> {/* CHANGED */}
      <div>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl font-bold text-indigo-200 hover:underline" // CHANGED
        >
          {project.title}
        </a>
        <p className="text-slate-300 mt-2">{project.description}</p> {/* CHANGED */}
        <div className="mt-3">
          <p className="text-sm text-slate-300 font-semibold">Tech Stack:</p> {/* CHANGED */}
          <ul className="flex flex-wrap gap-2 mt-1">
            {project.techStack.map((tech, index) => (
              <li
                key={index}
                className="bg-indigo-900/70 text-indigo-300 px-2 py-1 rounded text-xs" // CHANGED
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag, index) => (
          <span
            key={index}
            className="bg-slate-700 text-slate-300 px-2 py-1 rounded-full text-xs" // CHANGED
          >
            {tag}
          </span>
        ))}
      </div>

      {/* --- ACTION BUTTONS (No changes needed here) --- */}
      <div className="mt-4 flex justify-end items-center gap-3">
        {/* Show Button */}
        <a
          href={project.connectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-emerald-700 transition"
        >
          Show
        </a>
        {/* Join Button */}
        <a
          href={project.connectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-700 transition"
        >
          Join Project
        </a>
      </div>
    </div>
  );
}