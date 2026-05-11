import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";
import ChatWidget from "@/components/ChatWidget";

export default function Home() {
  return (
    <main>
      <Hero />
      <Skills />
      <Projects />
      <Timeline />
      <Contact />
      <ChatWidget />
    </main>
  );
}
