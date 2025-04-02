import React from "react";
import AnimatedSection from "../../components/AnimatedSection";

const Services = () => {
  return (
    <div className="pt-20 bg-gray-100 min-h-screen">
      <AnimatedSection animation="zoomIn">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive construction solutions tailored to your needs.
          </p>
        </div>
      </AnimatedSection>
      <AnimatedSection animation="fadeInUp">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "Residential Construction",
                desc: "Custom homes, multi-family units, and renovations with a focus on quality and comfort.",
              },
              {
                title: "Commercial Construction",
                desc: "Offices, retail spaces, and industrial facilities built for efficiency and durability.",
              },
              {
                title: "Infrastructure Projects",
                desc: "Bridges, roads, and public works designed for longevity and safety.",
              },
              {
                title: "Sustainable Building",
                desc: "Eco-friendly designs using green materials and energy-efficient systems.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              >
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h2>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Services;
