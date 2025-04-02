import React from "react";
import AnimatedSection from "../../components/AnimatedSection";

const FAQ = () => {
  return (
    <div className="pt-20 bg-gray-100 min-h-screen">
      <AnimatedSection animation="fadeInUp">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Answers to common questions about BuildMasters’ services and
            processes.
          </p>
        </div>
      </AnimatedSection>
      <AnimatedSection animation="slideInUp">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="space-y-8">
            {[
              {
                q: "What types of projects do you handle?",
                a: "We specialize in residential, commercial, infrastructure, and sustainable construction projects of all sizes.",
              },
              {
                q: "How long does a typical project take?",
                a: "Timelines vary by scope—small renovations may take weeks, while large builds can span months. Contact us for a detailed estimate.",
              },
              {
                q: "Do you offer eco-friendly options?",
                a: "Yes, sustainability is core to our mission. We use green materials and energy-efficient designs.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  {faq.q}
                </h2>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default FAQ;
