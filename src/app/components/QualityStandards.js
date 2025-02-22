const features = [
    {
      title: "European Standards",
      description:
        "Meet stringent European regulations for residue-free produce and safety protocols.",
      icon: (
        <svg
          className="w-10 h-10 text-blue-600"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v18m9-9H3"
          />
        </svg>
      ),
    },
    {
      title: "Large Size",
      description:
        "Flame Seedless grapes are known for their large, plump berries, bursting with flavor.",
      icon: (
        <svg
          className="w-10 h-10 text-blue-600"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      ),
    },
    {
      title: "Naturally Sweet",
      description:
        "These grapes offer a perfect balance of sweetness and tartness, with a crisp texture that makes them a delightful snack.",
      icon: (
        <svg
          className="w-10 h-10 text-blue-600"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 2a10 10 0 100 20 10 10 0 000-20z"
          />
        </svg>
      ),
    },
    {
      title: "100% Residue-Free",
      description:
        "Cultivated using precision farming techniques and sustainable practices to ensure the highest quality, residue-free produce.",
      icon: (
        <svg
          className="w-10 h-10 text-blue-600"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 10h11m-7 4h7"
          />
        </svg>
      ),
    },
  ];
  
  const QualityStandards = () => {
    return (
      <section className="relative py-16 text-white">
        {/* ✅ Parallax Background */}
        <div
          className="absolute inset-0 bg-fixed bg-cover bg-center"
          style={{ backgroundImage: "url('/standards.png')" }}
        ></div>
  
        {/* ✅ Black Overlay for Readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
  
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          {/* ✅ Section Title */}
          <h2 className="text-4xl font-bold text-white mb-10">
            Certified <span className="text-blue-400">Quality</span> & Standards
          </h2>
  
          {/* ✅ Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                {feature.icon}
                <h3 className="text-lg font-semibold text-white mt-4">
                  {feature.title}
                </h3>
                <p className="text-gray-200 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default QualityStandards;
  