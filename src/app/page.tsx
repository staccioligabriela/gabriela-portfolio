import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WorkList from "@/components/WorkList";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { validateContent } from "@/lib/validateContent";

export default function Home() {
  validateContent();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <WorkList />
        <About />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
