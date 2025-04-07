// src/components/Testimonials.js
import React from 'react';

const Testimonials = () => {
  const reviews = [
    {
      name: "Ravi Sharma",
      role: "Mentor - CodeCamp",
      feedback: "Ganesh is a hardworking and passionate developer. His React projects are impressive!",
    },
    {
      name: "Priya Mehta",
      role: "Teammate",
      feedback: "Working with Ganesh was smooth and efficient. He’s a great team player!",
    },
  ];

  return (
    <section className="bg-gray-100 py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Testimonials 💬</h2>
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {reviews.map((review, index) => (
          <div key={index} className="bg-white shadow-md rounded-2xl p-6">
            <p className="text-gray-600 italic">"{review.feedback}"</p>
            <h4 className="mt-4 font-semibold">{review.name}</h4>
            <span className="text-sm text-gray-500">{review.role}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
