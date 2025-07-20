import React from "react";

const Privacy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 mt-8 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Privacy Policy</h1>
      <p className="text-gray-700 mb-4">
        At CollabEdTech, we value your privacy and are committed to protecting your personal information.
      </p>

      <h2 className="text-xl font-semibold text-gray-800 mt-4 mb-2">Information We Collect</h2>
      <p className="text-gray-700 mb-4">
        We collect information you provide during registration, profile creation, project submissions, and messages.
      </p>

      <h2 className="text-xl font-semibold text-gray-800 mt-4 mb-2">How We Use It</h2>
      <p className="text-gray-700 mb-4">
        We use your data to connect you with teams, mentors, and opportunities on our platform. We never sell your data.
      </p>

      <h2 className="text-xl font-semibold text-gray-800 mt-4 mb-2">Your Rights</h2>
      <p className="text-gray-700 mb-4">
        You may update, export, or delete your data at any time by accessing your profile settings or contacting support.
      </p>

      <h2 className="text-xl font-semibold text-gray-800 mt-4 mb-2">Contact</h2>
      <p className="text-gray-700">
        If you have any questions about this policy, reach out at: <strong>support@collabedtech.com</strong>
      </p>
    </div>
  );
};

export default Privacy;
