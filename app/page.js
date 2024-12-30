import Hero from "./components/Hero";
import SubHero from "./components/SubHero";
import Services from "./components/Services.js";
import Works from "./components/Works.js";
import About from "./components/About.js";
import WhyUs from "./components/WhyUs.js";
import Testimonials from "./components/Testimonials.js";
import Contact from "./components/Contact.js";
import Footer from "./components/Footer.js";
import Gallery from "./components/Gallery.js";
import LenisScroll from "./components/LenisScroll.js";
import LoadingScreen from "./components/LoadingScreen.js";
import FAQ from "./components/FAQ.js";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <LenisScroll />
      <Hero />
      <SubHero />
      <Services />
      <Works />
      <About />
      <WhyUs />
      <Testimonials />
      <FAQ />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}
