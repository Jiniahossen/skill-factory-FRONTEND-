import Feature from "../Components/Feature/Feature";
import Hero from "../Components/Hero/Hero";
import Navbar from "../Components/Navbar/Navbar";
import Overview from "../Components/Overview/Overview";
import Pricing from "../Components/Pricing/Pricing";

export default function Home() {
  return (
    <div className="max-w-[1400px] mx-auto">
      <Navbar />
      <Hero />
      <Overview />
      <Feature />
      <Pricing />
    </div>
  );
}
