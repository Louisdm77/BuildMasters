import React from "react";
import AnimatedSection from "../../components/AnimatedSection";

const Products = () => {
  return (
    <div className="pt-20 bg-gray-100 min-h-screen">
      <AnimatedSection animation="slideInUp">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Products
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            High-quality construction materials and equipment for every project.
          </p>
        </div>
      </AnimatedSection>
      <AnimatedSection animation="bounceInUp">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Concrete Mixers", price: "$5,000", desc: "Heavy-duty mixers for all scales." },
              { name: "Steel Beams", price: "$200/unit", desc: "Durable beams for structural integrity." },
              { name: "Safety Gear", price: "$50/set", desc: "Protective equipment for all crews." },
              { name: "Modular Panels", price: "$1,000", desc: "Pre-fab panels for fast builds." },
            ].map((product, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-2">{product.price}</p>
                <p className="text-gray-600 mb-4">{product.desc}</p>
                <button className="px-6 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition duration-300">
                  Inquire Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Products;