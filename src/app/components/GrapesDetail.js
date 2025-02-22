"use client";

import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const grapeDetails = [
  {
    id: 1,
    title: "Large, Juicy Berries",
    description: "Flame Seedless grapes are known for their large, plump berries, bursting with flavor.",
    image: "/grapesDetail1.png",
  },
  {
    id: 2,
    title: "Sweet and Crisp",
    description: "These grapes offer a perfect balance of sweetness and tartness, with a crisp texture that makes them a delightful snack.",
    image: "/grapesDetail2.png",
  },
  {
    id: 3,
    title: "Rich Red Color",
    description: "Their deep red color adds a touch of vibrancy to any fruit platter or snack.",
    image: "/grapesDetail3.png",
  },
];

const GrapesDetail = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true }); // ✅ Initialize AOS
  }, []);

  return (
    <section className="py-16 px-6 bg-white">
      {/* ✅ Section Title */}
      <h2 className="text-4xl font-semibold text-center mb-10 text-blue-900" data-aos="fade-down">
        Grape Characteristics
      </h2>

      {/* ✅ Feature Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center">
        {grapeDetails.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center"
            data-aos="fade-up"
          >
            {/* ✅ Feature Image with Subtle Hover Effect */}
            <div className="relative w-80 h-56 mb-4 overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105">
              <Image
                src={item.image}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>

            {/* ✅ Title & Description */}
            <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
            <p className="text-gray-700 max-w-xs">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GrapesDetail;
