import React from "react";
import AnimatedSection from "../../components/AnimatedSection";

const About = () => {
  return (
    <div className="pt-20 bg-gray-100 min-h-screen">
      <AnimatedSection animation="fadeInRight">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
              alt="About BuildMasters"
              className="w-full h-96 md:h-[500px] object-cover rounded-lg shadow-2xl"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left md:ml-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About BuildMasters
            </h1>
            <p className="text-lg text-gray-600 max-w-md mx-auto md:mx-0">
              Founded in 2010, BuildMasters is a leader in construction,
              blending decades of expertise with a passion for innovation. We’re
              committed to delivering projects that exceed expectations while
              prioritizing sustainability and community impact.
            </p>
          </div>
        </div>
      </AnimatedSection>
      <AnimatedSection animation="slideInUp">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Our Mission & Vision
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Mission
              </h3>
              <p className="text-gray-600">
                To construct safe, sustainable, and inspiring spaces that
                enhance lives and communities.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Vision
              </h3>
              <p className="text-gray-600">
                To redefine construction through innovation, setting new
                standards for excellence worldwide.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default About;
