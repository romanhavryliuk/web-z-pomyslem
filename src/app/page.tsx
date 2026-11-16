import { About } from '@/components/About';
import { AuditBand } from '@/components/AuditBand';
import { Contact } from '@/components/Contact';
import { Faq } from '@/components/Faq';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Process } from '@/components/Process';
import { Projects } from '@/components/Projects';
import { Services } from '@/components/Services';
import { TrustBar } from '@/components/TrustBar';

export default function Home() {
  return (
    <>
      <Header />
      <main id="tresc">
        <Hero />
        <TrustBar />
        <Services />
        <Projects />
        <AuditBand />
        <Process />
        <About />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
