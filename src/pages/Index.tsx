import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Timeline from "@/components/sections/Timeline";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import Chatbot from "@/components/features/Chatbot";
import Mascot from "@/components/features/Mascot";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Timeline />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <Chatbot />
      <Mascot />
    </div>
  );
};

export default Index;
