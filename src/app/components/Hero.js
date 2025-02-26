"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion"; // ✅ Import Framer Motion
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const words = ["Cultivation", "Export Excellence"];

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });

    const interval = setInterval(() => {
      setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000); // ✅ Switch words every 3 seconds (increased for better effect)

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative bg-cover bg-center h-[70vh] flex flex-col justify-center px-8 md:px-16"
      style={{ backgroundImage: "url('/heroGrapes.png')" }}
    >
      {/* ✅ Black gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>

      {/* ✅ Hero Content (Subtle Animation) */}
      <div className="relative z-10 text-white max-w-2xl" data-aos="fade-in">
        <h1
          className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Elevating Grapes:{" "}
          <AnimatePresence mode="wait">
            <motion.span
              key={wordIndex} // ✅ Key ensures smooth transition
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="inline-block"
            >
              {words[wordIndex]}
            </motion.span>
          </AnimatePresence>
        </h1>
        <p className="text-xl md:text-2xl mb-6" data-aos="fade-up" data-aos-delay="200">
          Delivering premium-quality, residue-free grapes through precision
          farming and sustainable practices. Trusted by farmers, preferred by
          global markets.
        </p>

        {/* ✅ Contact Button (Navigates to Contact Page) */}
        <Link href="/contact">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-lg transition duration-200">
            Connect With Us
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
