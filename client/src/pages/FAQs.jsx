import React, { useState } from "react";

const faqs = [
  {
    question: "What is CollabEdTech?",
    answer:
      "CollabEdTech is a platform designed to connect learners, builders, and mentors to collaborate on educational and innovative projects.",
  },
  {
    question: "How do I join a team?",
    answer:
      "You can browse ongoing projects and send a join request, or connect with users and form a team from your dashboard.",
  },
  {
    question: "Is this platform free to use?",
    answer:
      "Yes, CollabEdTech is completely free for learners, mentors, and builders.",
  },
  {
    question: "How do I find a mentor?",
    answer:
      "Visit the Mentors section, filter by skills or domain, and request mentorship by sending a message or invite.",
  },
  {
    question: "Can I showcase my completed project?",
    answer:
      "Absolutely! Once your project is complete, you can submit it to the Project Showcase for visibility and feedback.",
  },
  {
    question: "How can I become a mentor?",
    answer:
      "If you have relevant experience, you can register as a mentor during signup or update your role in your profile settings.",
  },
  {
    question: "Are there any upcoming hackathons?",
    answer:
      "Yes, we frequently post new hackathons in the Discover section. Keep an eye out or subscribe to notifications!",
  },
  {
    question: "What technologies can I use on this platform?",
    answer:
      "Any tech stack you're comfortable with! CollabEdTech is tech-agnostic and focuses on collaboration and learning.",
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 mt-8 mb-4 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
        Frequently Asked Questions
      </h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-md p-4 transition duration-200">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left text-lg font-medium flex justify-between items-center text-gray-800"
            >
              {faq.question}
              <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && (
              <p className="mt-3 text-gray-600 transition-all duration-200 ease-in-out">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
