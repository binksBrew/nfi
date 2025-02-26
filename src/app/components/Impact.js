"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const Impact = () => {
  const [farmers, setFarmers] = useState(0);
  const [residueFree, setResidueFree] = useState(0);
  const [incomeGrowth, setIncomeGrowth] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  const startCounting = useCallback(() => {
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
    }, 3000);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          startCounting();
        }
      },
      { threshold: 0.5 }
    );

    const currentRef = sectionRef.current; // Store a stable reference

    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [hasAnimated, startCounting]);

  return (
    <section ref={sectionRef} className="relative py-20 px-6 bg-white">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-100 via-white to-gray-200"></div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-semibold text-blue-900 mb-12">Our Impact</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="text-center">
            <h3 className="text-5xl font-bold text-blue-900">{farmers}+</h3>
            <p className="text-gray-700 text-lg">Farmers Supported</p>
            <p className="text-gray-500">Providing access to resources and expertise.</p>
          </div>

          <div className="text-center">
            <h3 className="text-5xl font-bold text-blue-900">{residueFree}%</h3>
            <p className="text-gray-700 text-lg">Residue-Free</p>
            <p className="text-gray-500">Ensuring the highest quality and safety.</p>
          </div>

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
