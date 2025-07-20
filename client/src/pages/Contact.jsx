import React from "react";

const Contact = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 mt-10 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-blue-600 text-center mb-6">Contact Us</h1>
      
      <p className="text-gray-700 mb-4 text-center">
        Have questions, suggestions, or need support? Feel free to reach out to us through the contact details below.
      </p>

      <div className="space-y-4 text-gray-800 text-lg">
        <p><strong>Email:</strong> support@collabedtech.com</p>
        <p><strong>Phone:</strong> +91 98765 43210</p>
        <p><strong>Office Address:</strong> 2nd Floor, Tech Valley Plaza, Innovation Road, Bengaluru, India - 560001</p>
        <p><strong>Support Hours:</strong> Monday to Friday, 9 AM - 6 PM IST</p>
      </div>

      <div className="mt-6 text-center">
        <p className="text-gray-600">We'll do our best to respond within 24-48 hours.</p>
      </div>
    </div>
  );
};

export default Contact;
