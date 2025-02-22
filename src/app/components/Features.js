import Image from "next/image";

const features = [
  {
    id: 1,
    title: "8-Hour Post-Harvest Delivery",
    description: "Ensuring freshness and quality by swiftly transporting grapes from our farms to processing facilities.",
    image: "/img1.png",
  },
  {
    id: 2,
    title: "European Standards",
    description: "Meeting stringent European regulations for residue-free produce and safety protocols.",
    image: "/img2.png",
  },
  {
    id: 3,
    title: "Premium Quality",
    description: "Delivering exceptional flavor, texture, and appearance for a superior consumer experience.",
    image: "/img3.png",
  },
  {
    id: 4,
    title: "Doorstep Delivery",
    description: "Directly reaching our customers, providing seamless and reliable distribution channels.",
    image: "/img4.png",
  },
];

const Features = () => {
  return (
    <section className="relative py-20 px-6 text-white">
      {/* ✅ Parallax Background */}
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/heroGrapes.png')" }}
      ></div>

      {/* ✅ Black Gradient Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Title */}
        {/* <h2 className="text-5xl font-extrabold text-center mb-12 text-white tracking-wide"> */}
        <h2 className="text-5xl font-semibold text-center mb-10 text-white leading-snug">

          Elevating Grapes: Cultivation & Export Excellence
        </h2>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {features.map((feature) => (
            <div key={feature.id} className="flex flex-col items-center p-6 bg-white bg-opacity-25 backdrop-blur-xl rounded-lg shadow-xl transition transform hover:scale-105">
              {/* Feature Image (Increased Size & Added Border) */}
              <div className="relative w-48 h-48 mb-4 border-4 border-white rounded-lg overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>

              {/* Feature Title & Description */}
              <h3 className="text-2xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-200 text-base leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
