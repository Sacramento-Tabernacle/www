import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Pastors from "@/components/sections/Pastors";
import Events from "@/components/sections/Events";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Pastors />
        <Events />
      </main>
      <Footer />
    </>
  );
}
