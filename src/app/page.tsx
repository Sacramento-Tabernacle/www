import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Vision from "@/components/sections/Vision";
import Pastors from "@/components/sections/Pastors";
import JoinTeam from "@/components/sections/JoinTeam";
import CoreValues from "@/components/sections/CoreValues";
import FAQ from "@/components/sections/FAQ";
import Marquee from "@/components/sections/Marquee";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Vision />
        <Pastors />
        <JoinTeam />
        <CoreValues />
        <FAQ />
        <Marquee />
      </main>
      <Footer />
    </>
  );
}
