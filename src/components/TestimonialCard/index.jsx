import React from "react";

const TestimonialCard = ({ quote, author, role }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
      <p className="text-gray-700 italic mb-4">"{quote}"</p>
      <p className="text-gray-900 font-semibold">{author}</p>
      <p className="text-gray-600 text-sm">{role}</p>
    </div>
  );
};

export default TestimonialCard;