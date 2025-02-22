"use client";

import { useState, useEffect, useRef } from "react";

const Impact = () => {
  // Number states
  const [farmers, setFarmers] = useState(0);
  const [residueFree, setResidueFree] = useState(0);
  const [incomeGrowth, setIncomeGrowth] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false); // Prevents multiple triggers

  const sectionRef = useRef(null);

  // Function to animate numbers
  const startCounting = () => {
    let intervalFarmers = setInterval(() => {
      setFarmers((prev) => (prev < 50 ? prev + 1 : 50));
    }, 20);

    let intervalResidueFree = setInterval(() => {
      setResidueFree((prev) => (prev < 99 ? prev + 1 : 99));
    }, 15);

    let intervalIncomeGrowth = setInterval(() => {
      setIncomeGrowth((prev) => (prev < 30 ? prev + 1 : 30));
    }, 30);

    setTimeout(() => {
      clearInterval(intervalFarmers);
      clearInterval(intervalResidueFree);
      clearInterval(intervalIncomeGrowth);
    }, 3000); // Stop intervals after 3 seconds
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          startCounting();
          setHasAnimated(true); // Prevents re-triggering
        }
      },
      { threshold: 0.5 } // Starts animation when 50% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="relative py-20 px-6 bg-white">
      {/* ✅ Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-100 via-white to-gray-200"></div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* ✅ Section Title */}
        <h2 className="text-4xl font-semibold text-blue-900 mb-12">Our Impact</h2>

        {/* ✅ Impact Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* ✅ Farmers Supported */}
          <div className="text-center">
            <h3 className="text-5xl font-bold text-blue-900">{farmers}+</h3>
            <p className="text-gray-700 text-lg">Farmers Supported</p>
            <p className="text-gray-500">Providing access to resources and expertise.</p>
          </div>

          {/* ✅ Residue-Free */}
          <div className="text-center">
            <h3 className="text-5xl font-bold text-blue-900">{residueFree}%</h3>
            <p className="text-gray-700 text-lg">Residue-Free</p>
            <p className="text-gray-500">Ensuring the highest quality and safety.</p>
          </div>

          {/* ✅ Income Growth */}
          <div className="text-center">
            <h3 className="text-5xl font-bold text-blue-900">{incomeGrowth}%</h3>
            <p className="text-gray-700 text-lg">Income Growth</p>
            <p className="text-gray-500">Empowering farmers through fair trade practices.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
