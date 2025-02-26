"use client";

import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const images = [
  "/gallery1.png",
  "/gallery2.png",
  "/gallery3.png",
  "/gallery4.png",
  "/gallery5.png",
];

const Gallery = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true }); // ✅ Initialize AOS
  }, []);

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* ✅ Section Title */}
        <h2 className="text-4xl font-semibold text-gray-900 text-left mb-8" data-aos="fade-down">
          From Farm to Your Doorstep: A Fresh Grape Story
        </h2>

        {/* ✅ Image Grid (Top Row - 3 Images) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.slice(0, 3).map((src, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105" data-aos="fade-up">
              <Image
                src={src}
                alt={`Gallery Image ${index + 1}`}
                width={400}
                height={300}
                className="object-cover w-full h-60 rounded-lg"
              />
            </div>
          ))}
        </div>

        {/* ✅ Second Row (2 Images) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          {images.slice(3, 5).map((src, index) => (
            <div key={index + 3} className="overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105" data-aos="fade-up">
              <Image
                src={src}
                alt={`Gallery Image ${index + 4}`}
                width={500}
                height={350}
                className="object-cover w-full h-72 rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
