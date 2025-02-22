// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import ContactUs from "./ContactUs"; // Import the Contact Form

// const Hero = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   useEffect(() => {
//     AOS.init({ duration: 800, easing: "ease-in-out", once: true }); // ✅ Subtle animation settings
//   }, []);

//   return (
//     <>
//       <section
//         className="relative bg-cover bg-center h-[70vh] flex flex-col justify-center px-8 md:px-16"
//         style={{ backgroundImage: "url('/heroGrapes.png')" }}
//       >
//         {/* ✅ Black gradient overlay */}
//         <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>

//         {/* ✅ Hero Content (Subtle Animation) */}
//         <div className="relative z-10 text-white max-w-2xl" data-aos="fade-in">
//           <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" data-aos="fade-up" data-aos-delay="100">
//             Elevating Grapes: Cultivation & Export Excellence
//           </h1>
//           <p className="text-lg md:text-xl mb-6" data-aos="fade-up" data-aos-delay="200">
//             Delivering premium-quality, residue-free grapes through precision
//             farming and sustainable practices. Trusted by farmers, preferred by
//             global markets.
//           </p>

//           {/* ✅ Contact Button (Subtle Hover) */}
//           <button
//             onClick={() => setIsModalOpen(true)}
//             className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-lg transition duration-200"
//           >
//             Connect With Us
//           </button>
//         </div>
//       </section>

//       {/* ✅ Contact Form Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300 ease-in-out">
//           <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative transform transition-transform duration-300 ease-in-out scale-95">
//             {/* ✅ Close Button */}
//             <button
//               onClick={() => setIsModalOpen(false)}
//               className="absolute top-2 right-3 text-gray-600 hover:text-gray-900 text-xl"
//             >
//               &times;
//             </button>

//             {/* ✅ Render Contact Form */}
//             <ContactUs />
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Hero;
















"use client";

import { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true }); // ✅ Subtle animation settings
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
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" data-aos="fade-up" data-aos-delay="100">
          Elevating Grapes: Cultivation & Export Excellence
        </h1>
        <p className="text-lg md:text-xl mb-6" data-aos="fade-up" data-aos-delay="200">
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
