import Image from "next/image";

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
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* ✅ Left Column - Text Content */}
        <div>
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">
            Why Choose Us?
          </h2>
          <p className="text-gray-600 mb-6">
            We're dedicated to providing the highest quality grapes, sourced
            sustainably and responsibly.
          </p>

          {/* ✅ List of Reasons */}
          <div className="space-y-4">
            {reasons.map((item) => (
              <div key={item.id} className="flex items-start">
                <div className="w-10 h-10 flex items-center justify-center bg-gray-200 text-gray-900 text-lg font-bold rounded-lg shadow-md">
                  {item.id}
                </div>
                <div className="ml-4">
                  {/* <h3 className="text-lg font-semibold">{item.title}</h3> */}
                  <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ✅ Right Column - Image */}
        <div className="flex justify-center">
          <Image
            src="/aperson.png"
            alt="Illustration"
            width={400}
            height={500}
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
