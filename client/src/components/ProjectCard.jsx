import React from "react";

export default function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-lg shadow p-5 h-full flex flex-col justify-between">
      <div>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl font-semibold text-blue-600 hover:underline"
        >
          {project.title}
        </a>
        <p className="text-gray-700 mt-2">{project.description}</p>
        <div className="mt-3">
          <p className="text-sm text-gray-600 font-medium">Tech Stack:</p>
          <ul className="flex flex-wrap gap-2 mt-1">
            {project.techStack.map((tech, index) => (
              <li
                key={index}
                className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs"
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
            className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-xs"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Show Button */}
      <div className="mt-4 flex justify-end">
        <a
          href={project.connectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:opacity-90 transition"
        >
          Show
        </a>
      </div>
    </div>
  );
}
