import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import SectionTransition from "@/components/SectionTransition";
import ClientGeometricBackground from "@/components/ClientGeometricBackground";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main
      className="relative min-h-screen overflow-x-hidden"
      style={{ background: "#f8f9fc" }}
    >
      <ClientGeometricBackground />
      <Navbar />

      <Hero />

      <SectionTransition variant="dots" />
      <About />

      <SectionTransition variant="slash" />
      <Skills />

      <SectionTransition variant="dots" />
      <Experience />

      <SectionTransition variant="slash" />
      <Projects />

      <SectionTransition variant="line" />
      <div className="pb-24 md:pb-0">
        <Contact />
      </div>
    </main>
  );
}
