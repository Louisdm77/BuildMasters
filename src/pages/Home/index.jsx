import React from "react";
import AnimatedSection from "../../components/AnimatedSection";
import ProjectCard from "../../components/ProjectCard";
import TestimonialCard from "../../components/TestimonialCard";

const Home = () => {
  return (
    <div className="pt-20 bg-slate-50">
      {/* Hero Section */}
      <AnimatedSection animation="fadeInUp">
        <div className="bg-slate-800 text-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-wide">
                Building Tomorrow, Today
              </h1>
              <p className="mt-4 text-lg sm:text-xl text-slate-300 max-w-md mx-auto md:mx-0">
                BuildMasters combines innovation, precision, and sustainability
                to create structures that stand the test of time.
              </p>
              <button className="mt-8 px-8 py-3 bg-teal-600 text-white font-semibold rounded-md hover:bg-teal-700 hover:shadow-lg transition duration-300">
                Request a Quote
              </button>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
                alt="Modern Construction Site"
                className="w-full h-80 md:h-[450px] object-cover rounded-md shadow-lg transform hover:-translate-y-2 transition duration-300"
              />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Highlights Section */}
      <AnimatedSection animation="slideInLeft">
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-12">
              Why Choose BuildMasters?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="bg-slate-50 p-6 rounded-md shadow-md hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-semibold text-teal-600">Expertise</h3>
                <p className="mt-2 text-slate-600">
                  15+ years of industry-leading experience.
                </p>
              </div>
              <div className="bg-slate-50 p-6 rounded-md shadow-md hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-semibold text-teal-600">
                  Sustainability
                </h3>
                <p className="mt-2 text-slate-600">
                  Eco-friendly materials and practices.
                </p>
              </div>
              <div className="bg-slate-50 p-6 rounded-md shadow-md hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-semibold text-teal-600">
                  Precision
                </h3>
                <p className="mt-2 text-slate-600">
                  Meticulous attention to every detail.
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Featured Projects */}
      <AnimatedSection animation="zoomIn">
        <div className="py-20 bg-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-12">
              Our Signature Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ProjectCard
                title="Skyline Towers"
                description="A 50-story residential masterpiece in downtown."
                image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
                className="bg-white rounded-md shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300"
                imageClassName="w-full h-56 object-cover rounded-t-md"
                contentClassName="p-5"
              />
              <ProjectCard
                title="GreenBridge"
                description="An eco-friendly pedestrian bridge spanning 200 meters."
                image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
                className="bg-white rounded-md shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300"
                imageClassName="w-full h-56 object-cover rounded-t-md"
                contentClassName="p-5"
              />
              <ProjectCard
                title="Tech Campus"
                description="A cutting-edge office complex for innovation."
                image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
                className="bg-white rounded-md shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300"
                imageClassName="w-full h-56 object-cover rounded-t-md"
                contentClassName="p-5"
              />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Testimonials */}
      <AnimatedSection animation="bounceInUp">
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-12">
              What Our Clients Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <TestimonialCard
                quote="BuildMasters turned our vision into reality with flawless execution."
                author="Jane Doe"
                role="CEO, Skyline Inc."
                className="bg-slate-50 p-6 rounded-md shadow-md hover:shadow-lg transition duration-300"
              />
              <TestimonialCard
                quote="Their commitment to sustainability is unmatched in the industry."
                author="John Smith"
                role="Project Manager, GreenCorp"
                className="bg-slate-50 p-6 rounded-md shadow-md hover:shadow-lg transition duration-300"
              />
              <TestimonialCard
                quote="A reliable partner for complex projects—highly recommended!"
                author="Emily Brown"
                role="Architect, TechWorks"
                className="bg-slate-50 p-6 rounded-md shadow-md hover:shadow-lg transition duration-300"
              />
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Home;