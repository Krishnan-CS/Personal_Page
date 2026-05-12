import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import AboutMe from "@/components/AboutMe";
// import ChatWidget from "@/components/ChatWidget";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <AboutMe />
      {/* <ChatWidget /> */}
    </main>
  );
}
