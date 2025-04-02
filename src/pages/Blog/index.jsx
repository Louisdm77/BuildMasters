import React from "react";
import AnimatedSection from "../../components/AnimatedSection";

const Blog = () => {
  return (
    <div className="pt-20 bg-gray-100 min-h-screen">
      <AnimatedSection animation="zoomIn">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Industry Insights
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest trends and tips from BuildMasters.
          </p>
        </div>
      </AnimatedSection>
      <AnimatedSection animation="fadeInUp">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "The Future of Sustainable Construction",
                excerpt: "Exploring eco-friendly materials and methods shaping the industry.",
              },
              {
                title: "Top 5 Tips for Project Management",
                excerpt: "How to keep your construction project on time and budget.",
              },
              {
                title: "Innovations in Infrastructure",
                excerpt: "New technologies revolutionizing roads and bridges.",
              },
            ].map((post, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">{post.title}</h2>
                <p className="text-gray-600">{post.excerpt}</p>
                <button className="mt-4 text-yellow-500 hover:text-yellow-600 transition duration-300">
                  Read More
                </button>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Blog;