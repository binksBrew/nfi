import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Carts from "./components/Carts";
import Features from "./components/Features";
import GrapesDetail from "./components/GrapesDetail";
import Staircase from "./components/Staircase";
import Gallery from "./components/Gallery";
import QualityStandards from "./components/QualityStandards";
import WhyChooseUs from "./components/WhyChooseUs";
import Impact from "./components/Impact";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Carts />
      <Features />
      <GrapesDetail />
      <Staircase />
      <Gallery />
      <QualityStandards />
      <WhyChooseUs />
      <Impact />
    </div>
  );
}
