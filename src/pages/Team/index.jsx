import React from "react";
import AnimatedSection from "../../components/AnimatedSection";
import TeamCard from "../../components/TeamCard";

const Team = () => {
  return (
    <div className="pt-20 bg-gray-100 min-h-screen">
      <AnimatedSection animation="fadeInUp">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Team
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the experts driving BuildMasters’ success.
          </p>
        </div>
      </AnimatedSection>
      <AnimatedSection animation="slideInUp">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Michael Carter",
                role: "CEO & Founder",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
              },
              {
                name: "Sarah Lee",
                role: "Chief Architect",
                image: "https://i.pinimg.com/236x/44/09/e5/4409e5fa8f934f8f9a6b2cc344e1bdcf.jpg",
              },
              {
                name: "James Patel",
                role: "Project Manager",
                image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
              },
              {
                name: "Emily Chen",
                role: "Sustainability Lead",
                image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
              },
            ].map((member, index) => (
              <TeamCard key={index} {...member} />
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Team;