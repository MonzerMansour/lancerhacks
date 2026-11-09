import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Schedule from "@/components/Schedule";
import FAQ from "@/components/FAQ";
import Newsletter from "@/components/Newsletter";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Schedule />
      <FAQ />
      <Newsletter />
      <Team />
      <Footer />
    </div>
  );
};

export default Index;
