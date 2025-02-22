import Link from "next/link";

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center h-[70vh] flex flex-col justify-center px-8 md:px-16"
      style={{ backgroundImage: "url('/heroGrapes.png')" }}
    >
      {/* Black gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 text-white max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Elevating Grapes: Cultivation & Export Excellence
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Delivering premium-quality, residue-free grapes through precision
          farming and sustainable practices. Trusted by farmers, preferred by
          global markets.
        </p>
        <Link href="/contact">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-lg">
            Connect With Us
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
