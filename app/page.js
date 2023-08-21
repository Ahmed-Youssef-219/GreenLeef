import Hero from '@components/Hero';
import About from '@components/About';
import Services from '@components/Services';
import Testimonials from '@components/Testimonials';
import Gallery from '@components/Gallery';
import Contact from '@components/Contact';
import Footer from '@components/Footer';
export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  )
}
