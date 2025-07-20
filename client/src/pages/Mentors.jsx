import React, { useState } from "react";
import MentorCard from "../components/MentorCard";

const mentorsList = [
  {
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
  }
];




const Mentors = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(9);

  const filteredMentors = mentorsList.filter(
    (mentor) =>
      mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mentor.expertise.some((skill) =>
        skill.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

  const visibleMentors = filteredMentors.slice(0, visibleCount);
  const canShowMore = visibleCount < filteredMentors.length;

  const handleToggle = () => {
    if (canShowMore) {
      setVisibleCount(visibleCount + 9);
    } else {
      setVisibleCount(9);
    }
  };

  return (
    <div
      className="min-h-screen w-full"
      style={{
        background: "linear-gradient(to bottom right, #0f2027, #203a43, #2c5364)",
      }}
    >
      <div className="px-4 py-8">
        <div className="flex justify-between items-center flex-wrap mb-6">
          <h1 className="text-3xl font-bold text-white mb-4 sm:mb-0">
            Find Your Mentor
          </h1>
          <input
            type="text"
            placeholder="Find mentors..."
            className="border border-gray-300 rounded-lg px-4 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setVisibleCount(9); // reset when searching
            }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleMentors.map((mentor, index) => (
            <div
              key={index}
              className="transform transition duration-300 hover:scale-105"
            >
              <MentorCard mentor={mentor} />
            </div>
          ))}
          {visibleMentors.length === 0 && (
            <p className="text-gray-300 col-span-full text-center">No mentors found.</p>
          )}
        </div>

        {filteredMentors.length > 9 && (
          <div className="flex justify-center mt-10">
            <button
              onClick={handleToggle}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition-all duration-300"
            >
              {canShowMore ? "Show more" : "Show less"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Mentors;