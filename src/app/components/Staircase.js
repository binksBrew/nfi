// "use client";

// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const steps = [
//   {
//     id: 1,
//     title: "Harvesting in Nashik",
//     description: "Grapes are carefully hand-picked at peak ripeness from our Nashik farms.",
//   },
//   {
//     id: 2,
//     title: "Quality Inspection",
//     description: "Each batch undergoes rigorous quality checks to ensure they meet our standards.",
//   },
//   {
//     id: 3,
//     title: "Careful Packaging",
//     description: "Grapes are packaged with care to maintain freshness during transit.",
//   },
//   {
//     id: 4,
//     title: "Delivered to Your Doorstep",
//     description: "Enjoy fresh, residue-free grapes delivered directly to you.",
//   },
// ];

// const Staircase = () => {
//   useEffect(() => {
//     AOS.init({ duration: 800, once: true }); // ✅ Initialize AOS
//   }, []);

//   return (
//     <section className="relative py-16 px-6 text-white">
//       {/* ✅ Parallax Background */}
//       <div
//         className="absolute inset-0 bg-fixed bg-cover bg-center"
//         style={{ backgroundImage: "url('/staircase.png')" }}
//       ></div>

//       {/* ✅ Gradient Overlay for Better Readability */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/10"></div>

//       <div className="relative z-10 max-w-5xl mx-auto">
//         {/* ✅ Section Title */}
//         <h2 className="text-4xl font-semibold text-left mb-8 text-white" data-aos="fade-down">
//           From <span className="text-blue-400">Nashik</span> Farms to Your Doorstep
//         </h2>

//         {/* ✅ Steps Grid (Staircase Effect) */}
//         <div className="flex flex-col space-y-6">
//           {steps.map((step, index) => (
//             <div
//               key={step.id}
//               className={`flex items-center bg-white bg-opacity-90 rounded-lg p-6 shadow-lg transition-transform duration-300 hover:scale-105 ${
//                 index % 2 === 0 ? "ml-0 w-4/5" : "ml-10 w-full"
//               }`}
//               data-aos="fade-up"
//             >
//               {/* ✅ Step Number */}
//               <div className="w-14 h-14 flex items-center justify-center bg-blue-500 text-white text-2xl font-bold rounded-lg shadow-md">
//                 {step.id}
//               </div>

//               {/* ✅ Step Content */}
//               <div className="ml-6 text-gray-900">
//                 <h3 className="text-lg font-semibold">{step.title}</h3>
//                 <p className="text-gray-700">{step.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Staircase;














"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const steps = [
  {
    id: 1,
    title: "Harvesting in Nashik",
    description: "Grapes are carefully hand-picked at peak ripeness from our Nashik farms.",
  },
  {
    id: 2,
    title: "Quality Inspection",
    description: "Each batch undergoes rigorous quality checks to ensure they meet our standards.",
  },
  {
    id: 3,
    title: "Careful Packaging",
    description: "Grapes are packaged with care to maintain freshness during transit.",
  },
  {
    id: 4,
    title: "Delivered to Your Doorstep",
    description: "Enjoy fresh, residue-free grapes delivered directly to you.",
  },
];

const Staircase = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true }); // ✅ Initialize AOS
  }, []);

  return (
    <section className="relative py-16 px-6 text-white">
      {/* ✅ Parallax Background */}
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/staircase.png')" }}
      ></div>

      {/* ✅ Gradient Overlay for Better Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/10"></div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* ✅ Section Title */}
        <h2 className="text-5xl font-semibold text-left mb-8 text-white" data-aos="fade-down">
          From <span className="text-blue-400">Nashik</span> Farms to Your Doorstep
        </h2>

        {/* ✅ Steps in a Single Line (Same Width) */}
        <div className="flex flex-col space-y-6 max-w-3xl mx-auto">
          {steps.map((step) => (
            <div
              key={step.id}
              className="flex items-center bg-white bg-opacity-90 rounded-lg p-6 shadow-lg transition-transform duration-300 hover:scale-105 w-full"
              data-aos="fade-up"
            >
              {/* ✅ Step Number */}
              <div className="w-14 h-14 flex items-center justify-center bg-blue-500 text-white text-2xl font-bold rounded-lg shadow-md">
                {step.id}
              </div>

              {/* ✅ Step Content */}
              <div className="ml-6 text-gray-900">
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Staircase;
