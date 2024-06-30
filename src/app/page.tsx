import NavBar from '@/components/NavBar/nav-bar';
import Footer from '@/components/Footer/Footer';

import Hero from '@/components/Hero/hero';
import About from '@/components/About/about';
import Skills from '@/components/Skills/skills';
import MaintenanceMode from '@/components/MaintenanceMode/maintenance-mode';
import ScrollToTop from '@/components/ScrollToTop/scroll-to-top';

export default function Home() {
  return (
    <main>
      <NavBar />

      <Hero />
      <About />
      {/* <Skills /> */}
      <MaintenanceMode />
      <ScrollToTop />
      <Footer />
    </main>
  );
}
