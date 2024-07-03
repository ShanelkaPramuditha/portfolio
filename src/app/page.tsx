import NavBar from '@/components/NavBar/nav-bar';
import Footer from '@/components/Footer/Footer';

import Hero from '@/components/Hero/hero';
import About from '@/components/About/about';
import Skills from '@/components/Skills/skills';
import MaintenanceMode from '@/components/MaintenanceMode/maintenance-mode';
import ScrollToTop from '@/components/ScrollToTop/scroll-to-top';
import Contact from '@/components/Contact/contact';
import Divider from '@/components/Divider/divider';
import Projects from '@/components/Projects/projects';

export default function Home() {
  return (
    <main>
      <NavBar />

      <Hero />
      <Divider />
      <About />
      <Divider />
      {/* <Skills /> */}
      <Projects />
      <Divider />
      <Contact />
      <Divider />
      <MaintenanceMode />
      <ScrollToTop />
      <Footer />
    </main>
  );
}
