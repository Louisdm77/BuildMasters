import React, { useRef, useEffect, useState } from "react";

const AnimatedSection = ({ children, animation = "fadeInUp" }) => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`w-full ${
        isVisible
          ? `animate__animated animate__${animation} animate__delay-500ms`
          : ""
      }`}
    >
      {children}
    </section>
  );
};

export default AnimatedSection;
