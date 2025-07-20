import React, { useState } from 'react';
import MentorCard from '../components/MentorCard';

const mentors = [{
  name: "Kala Philo",
  avatar: "/avatars/default-avatar.png",
  expertise: ["Blockchain", "Web3"],
  bio: "Blockchain strategist mentoring on Web3 ecosystems and community building.",
  linkedin: "https://www.linkedin.com/in/kalaphilo"
},
{
  name: "Adam Davies",
  avatar: "/avatars/default-avatar.png",
  expertise: ["Web Development", "Node.js"],
  bio: "Helping devs launch projects with scalable web stacks.",
  linkedin: "https://www.linkedin.com/in/adamdavieswebdev/"
},
{
  name: "Giuseppe De Luca",
  avatar: "/avatars/default-avatar.png",
  expertise: ["Blockchain", "Smart Contracts"],
  bio: "Mentoring in Ethereum smart contract development and decentralized identity.",
  linkedin: "https://www.linkedin.com/in/giupi-deluca"
},
{
  name: "Illia Meserenko",
  avatar: "/avatars/default-avatar.png",
  expertise: ["Web Development", "React"],
  bio: "Helping developers become professionals with modern web skills.",
  linkedin: "https://www.linkedin.com/in/illia-meserenko-90014a274/"
},
{
  name: "Sameer Nigam",
  avatar: "/avatars/sameer.png",
  expertise: ["AI", "NLP", "LLMs"],
  bio: "AI builder and mentor focused on LLMs and GenAI space.",
  linkedin: "https://www.linkedin.com/in/aiwithsameer"
},
{
  name: "Rushendra Sidibomma",
  avatar: "/avatars/rushendra.png",
  expertise: ["AI", "ML", "Deep Learning"],
  bio: "AI researcher and mentor dedicated to building smart, scalable systems.",
  linkedin: "https://www.linkedin.com/in/rushendra-sidibomma/"
},
{
  name: "Andre Gomez",
  avatar: "/avatars/default-avatar.png",
  expertise: ["Blockchain", "Smart Contracts", "Web3"],
  bio: "Blockchain engineer focused on DeFi and secure contract systems.",
  linkedin: "https://www.linkedin.com/in/andre-gomez-blockchain"
},
{
  name: "Aaron Borsay",
  avatar: "/avatars/default-avatar.png",
  expertise: ["Web Development", "JavaScript"],
  bio: "Mentor focused on frontend frameworks and building clean UI.",
  linkedin: "https://www.linkedin.com/in/aborsay/"
},
{
  name: "Nichole Harrison",
  avatar: "/avatars/default-avatar.png",
  expertise: ["Web Development", "Frontend"],
  bio: "Helping developers grow through hands-on mentorship and feedback.",
  linkedin: "https://www.linkedin.com/in/nicholeharrison1985/"
},
{
  name: "Rakesh Patel",
  avatar: "/avatars/default-avatar.png",
  expertise: ["Blockchain", "Crypto", "Decentralized Apps"],
  bio: "Web3 advocate and blockchain mentor working on innovative crypto solutions.",
  linkedin: "https://www.linkedin.com/in/rakesh-kumar-patel"
},
{
  name: "Pratik Desai",
  avatar: "/avatars/pratik.png",
  expertise: ["AI", "IoT", "Healthcare AI"],
  bio: "Founder at KissanAI, building AI-powered solutions for agriculture.",
  linkedin: "https://www.linkedin.com/in/pratik-desai-11074412a/"
},
{
  name: "Mohammad H. Rafiei, Ph.D.",
  avatar: "/avatars/mohammad.png",
  expertise: ["AI", "Computer Vision", "PhD"],
  bio: "Ph.D. in AI, mentor in ML research and CV applications.",
  linkedin: "https://www.linkedin.com/in/mhrafiei"
},
{
  name: "Gaurav Sharma",
  avatar: "/avatars/gaurav.png",
  expertise: ["AI", "NLP", "Prompt Engineering"],
  bio: "AI mentor working on GenAI and NLP-powered education tools.",
  linkedin: "https://www.linkedin.com/in/gauravsharma300"
},
{
  name: "Enjilla Eman",
  avatar: "/avatars/default-avatar.png",
  expertise: ["Blockchain", "Web3", "DAOs"],
  bio: "Web3 mentor focused on building decentralized governance systems.",
  linkedin: "https://www.linkedin.com/in/enjilla-eman-634b9a139"
},
{
  name: "Manish Mazumder",
  avatar: "/avatars/manish.png",
  expertise: ["AI", "Data Engineering"],
  bio: "AI technologist and speaker, focusing on scalable AI applications.",
  linkedin: "https://www.linkedin.com/in/manishmazumder"
}];
const projects = [/* ... your projects list as you provided ... */
  {
    title: "AI Resume Analyzer",
    description: "An AI-powered resume parser and job matcher.",
    techStack: ["React", "Node.js", "MongoDB", "OpenAI API"],
    tags: ["AI", "Resume", "Job Matching"],
    github: "https://github.com/yourusername/ai-resume-analyzer",
  },
  {
    title: "Blood Donation Forecast",
    description: "Predictive analytics tool for blood donation needs.",
    techStack: ["Python", "Flask", "ML", "Pandas"],
    tags: ["Forecasting", "Health", "ML"],
    github: "https://github.com/yourusername/blood-donation-forecast",
  },
  {
    title: "Gaming Hub",
    description: "One-stop destination to discover and play games.",
    techStack: ["React", "Tailwind", "Node.js"],
    tags: ["Games", "Frontend", "Platform"],
  },
  {
    title: "Black Friday Sales Prediction",
    description: "Forecast future sales using historical datasets.",
    techStack: ["XGBoost", "Python", "Jupyter"],
    tags: ["Sales", "ML", "Prediction"],
  },
  {
    title: "Chess.com Clone",
    description: "Frontend clone of the famous Chess.com site.",
    techStack: ["HTML", "CSS", "JavaScript", "React"],
    tags: ["Chess", "Frontend", "Clone"],
  },
  {
    title: "Task Manager App",
    description: "Manage daily tasks with a simple task board.",
    techStack: ["React", "LocalStorage"],
    tags: ["Productivity", "Tasks", "React"],
  },
  {
    title: "EduConnect",
    description: "Connect mentors and learners in one platform.",
    techStack: ["React", "Express", "MongoDB"],
    tags: ["EdTech", "Mentorship", "Platform"],
  },
  {
    title: "Smart Parking System",
    description: "Automated system using OCR for parking slots.",
    techStack: ["Python", "OpenCV", "IoT"],
    tags: ["IoT", "Smart City", "OCR"],
  },
  {
    title: "Virtual Study Room",
    description: "Collaborative video + whiteboard study platform.",
    techStack: ["React", "WebRTC", "Socket.IO"],
    tags: ["Collaboration", "Study", "EdTech"],
  },
  {
    title: "Hackathon Hub",
    description: "Discover & join hackathons with a team.",
    techStack: ["MERN", "Tailwind"],
    tags: ["Hackathon", "Team", "Platform"],
  },
  {
    title: "DevMatch",
    description: "Connect developers based on skills and goals.",
    techStack: ["React", "Firebase"],
    tags: ["Networking", "Matchmaking", "Dev"],
  },
  {
    title: "Daily Quote Generator",
    description: "Shows a new motivational quote each day.",
    techStack: ["React", "API"],
    tags: ["Quotes", "API", "Motivation"],
  },
  {
    title: "Budget Tracker",
    description: "Track income and expenses easily.",
    techStack: ["React", "Chart.js"],
    tags: ["Finance", "Tracking", "Charts"],
  },
  {
    title: "AI Chatbot",
    description: "Smart chatbot for customer queries.",
    techStack: ["Dialogflow", "React"],
    tags: ["Chatbot", "AI", "Support"],
  },
  {
    title: "Fitness Tracker",
    description: "Monitor workouts and calories.",
    techStack: ["React Native", "Firebase"],
    tags: ["Fitness", "Health", "Mobile"],
  },
  {
    title: "News Aggregator",
    description: "Aggregates top news from various sources.",
    techStack: ["React", "NewsAPI"],
    tags: ["News", "Aggregator"],
  },
  {
    title: "Portfolio Generator",
    description: "Generate your personal developer portfolio.",
    techStack: ["React", "Tailwind"],
    tags: ["Portfolio", "Resume"],
  },
  {
    title: "Voice Notes App",
    description: "Record and save voice notes quickly.",
    techStack: ["React", "Web Audio API"],
    tags: ["Notes", "Audio"],
  },
];

const projectConnectLinks = [
  "https://qxresearch.github.io/qxresearch-event-1",
  "https://shsarv.github.io/Machine-Learning-Projects/",
  "https://keshavgbpecdelhi.github.io/Web-Development/",
  "https://web-dev-project-kart-ixmeetfke-khushi-purwar.vercel.app",
];

// Assign unique project links
const assignConnectUrls = (projects, links) => {
  const result = [];
  let lastUsed = -1;

  for (let i = 0; i < projects.length; i++) {
    let index = (i + 1) % links.length;
    if (index === lastUsed) index = (index + 1) % links.length;
    lastUsed = index;

    result.push({ ...projects[i], connectUrl: links[index] });
  }

  return result;
};

const Discover = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleMentorsCount, setVisibleMentorsCount] = useState(9);
  const [visibleProjectsCount, setVisibleProjectsCount] = useState(9);
  const [showType, setShowType] = useState("mentors"); // NEW STATE

  const filteredMentors = mentors.filter(
    (mentor) =>
      mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mentor.expertise.some((skill) =>
        skill.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

  const filteredProjects = assignConnectUrls(
    projects.filter((project) =>
      project.title.toLowerCase().includes(searchQuery.toLowerCase())
    ),
    projectConnectLinks
  );

  const visibleMentors = filteredMentors.slice(0, visibleMentorsCount);
  const visibleProjects = filteredProjects.slice(0, visibleProjectsCount);

  const toggleMentors = () =>
    setVisibleMentorsCount(
      visibleMentorsCount + 9 <= filteredMentors.length ? visibleMentorsCount + 9 : 9
    );

  const toggleProjects = () =>
    setVisibleProjectsCount(
      visibleProjectsCount + 9 <= filteredProjects.length ? visibleProjectsCount + 9 : 9
    );

  return (
    <div
      className="min-h-screen w-full"
      style={{
        background: 'linear-gradient(to bottom right, #0f2027, #203a43, #2c5364)',
      }}
    >
      <div className="px-4 py-8">
        <div className="flex justify-between items-center flex-wrap gap-4 mb-6">
          <h1 className="text-3xl font-bold text-white">Discover</h1>

          <div className="flex items-center gap-3">
            <input
              type="text"
              placeholder={`Search ${showType === 'mentors' ? 'mentors' : 'projects'}...`}
              className="border border-gray-300 rounded-lg px-4 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setVisibleMentorsCount(9);
                setVisibleProjectsCount(9);
              }}
            />
            <button
              onClick={() => setShowType((prev) => (prev === 'mentors' ? 'projects' : 'mentors'))}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition"
            >
              Show {showType === 'mentors' ? 'Projects' : 'Mentors'}
            </button>
          </div>
        </div>

        {/* MENTORS SECTION */}
        {showType === "mentors" && (
          <>
            <h2 className="text-2xl text-white font-semibold mb-4">Mentors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {visibleMentors.map((mentor, index) => (
                <div key={index} className="transform transition duration-300 hover:scale-105">
                  <MentorCard mentor={mentor} />
                </div>
              ))}
              {visibleMentors.length === 0 && (
                <p className="text-gray-300 col-span-full text-center">No mentors found.</p>
              )}
            </div>
            {filteredMentors.length > 9 && (
              <div className="flex justify-center mt-6">
                <button
                  onClick={toggleMentors}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition-all duration-300"
                >
                  {visibleMentorsCount < filteredMentors.length ? 'Show More Mentors' : 'Show Less Mentors'}
                </button>
              </div>
            )}
          </>
        )}

        {/* PROJECTS SECTION */}
        {showType === "projects" && (
          <>
            <h2 className="text-2xl text-white font-semibold mb-4">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {visibleProjects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow p-5 h-full flex flex-col justify-between"
                >
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
                        {project.techStack.map((tech, i) => (
                          <li
                            key={i}
                            className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs"
                          >
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4">
                    <a
                      href={project.connectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition"
                    >
                      Show
                    </a>
                  </div>
                </div>
              ))}
            </div>
            {filteredProjects.length > 9 && (
              <div className="flex justify-center mt-6">
                <button
                  onClick={toggleProjects}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition-all duration-300"
                >
                  {visibleProjectsCount < filteredProjects.length ? 'Show More Projects' : 'Show Less Projects'}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Discover;