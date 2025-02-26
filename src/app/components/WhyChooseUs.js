"use client";

import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const reasons = [
  {
    id: 1,
    title: "Precision Monitoring for Quality Assurance",
    description: "Data-driven strategies ensure premium quality.",
  },
  {
    id: 2,
    title: "Strict Residue Level Compliance",
    description: "Advanced testing ensures food safety and compliance.",
  },
  {
    id: 3,
    title: "Sustainable & Farmer-Centric Approach",
    description: "Eco-friendly methods benefit farmers and the environment.",
  },
  {
    id: 4,
    title: "End-to-End Farmer Partnership",
    description: "Comprehensive support, from soil health to export logistics.",
  },
];

const WhyChooseUs = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div data-aos="fade-right">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Us?</h2>
          <p className="text-gray-600 mb-8">
            We&apos;re dedicated to providing the highest quality grapes, sourced sustainably and responsibly.
          </p>

          <div className="space-y-6">
            {reasons.map((item) => (
              <div key={item.id} className="flex items-start space-x-4" data-aos="fade-up">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-500 text-white text-lg font-bold rounded-full shadow-md">
                  {item.id}
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center" data-aos="fade-left">
          <Image
            src="/aperson.png"
            alt="Illustration"
            width={400}
            height={500}
            priority
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
