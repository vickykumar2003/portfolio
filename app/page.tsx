import About from '@/components/About';
import ContactMe from '@/components/ContactMe';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Project from '@/components/Project';
import Skills from '@/components/Skills';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Project />
        <ContactMe />
      </main>
      <Footer />
    </>
  );
}
