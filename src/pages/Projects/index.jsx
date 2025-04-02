import React from "react";
import AnimatedSection from "../../components/AnimatedSection";
import ProjectCard from "../../components/ProjectCard";

const Projects = () => {
  return (
    <div className="pt-20 bg-gray-100 min-h-screen">
      <AnimatedSection animation="fadeInUp">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Projects
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of our expertise across residential, commercial, and
            infrastructure works.
          </p>
        </div>
      </AnimatedSection>
      <AnimatedSection animation="zoomIn">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Skyline Towers",
                description: "A 50-story residential masterpiece in downtown.",
                image:
                  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
              },
              {
                title: "GreenBridge",
                description:
                  "An eco-friendly pedestrian bridge spanning 200 meters.",
                image:
                  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
              },
              {
                title: "Tech Campus",
                description: "A cutting-edge office complex for innovation.",
                image:
                  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
              },
              {
                title: "Eco Village",
                description: "Sustainable housing with solar-powered units.",
                image:
                  "https://i.pinimg.com/736x/6e/fd/db/6efddb27b1a3bbb6ff1e40bb99cd221d.jpg",
              },
              {
                title: "City Plaza",
                description: "A mixed-use development with retail and offices.",
                image:
                  "https://i.pinimg.com/736x/3a/cf/be/3acfbe1aaf0324050da301ee2b1ce528.jpg",
              },
              {
                title: "Highway 101",
                description: "A 50-mile infrastructure upgrade.",
                image:
                  "https://i.pinimg.com/736x/fc/f1/53/fcf15333772006cb396b5320b5f2ee57.jpg",
              },
            ].map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Projects;
