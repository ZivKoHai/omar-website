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
import Process from "./components/Process.js";

export const metadata = {
  title: "עומר תעשיות עץ - פתרונות עץ בהתאמה אישית",
  description:
    'עומר תעשיות עץ בע"מ מספקים רהיטים, פרויקטים בהתאמה אישית ופתרונות עץ איכותיים בעיצוב מדויק ובגימור מושלם.',

  keywords:
    "עומר תעשיות עץ, נגרות בהתאמה אישית, ריהוט עץ איכותי, פתרונות עץ, עיצוב פנים, עבודות עץ, תכנון עץ, מטבחים מעוצבים, דלתות עץ, נגר מקצועי",

  author: 'עומר תעשיות עץ בע"מ',
  robots: "index, follow",
  icons: {
    icon: "/omar-favicon-dark.svg",
    apple: "/omar-favicon-dark.svg",
  },

  openGraph: {
    type: "website",
    url: "https://omarwoodshop.co.il/",
    title: "עומר תעשיות עץ - עבודות עץ איכותיות בהתאמה אישית",
    description:
      'נגרות מקצועית ופרויקטים מעוצבים בעץ לכל חלק בבית. עומר תעשיות עץ בע"מ מתמחים ביצירה מדויקת ואיכותית בעבודות עץ.',
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "עומר תעשיות עץ - רהיטים בהתאמה אישית",
      },
    ],
    locale: "he_IL",
    siteName: "עומר תעשיות עץ",
  },

  twitter: {
    card: "summary_large_image",
    site: "https://omarwoodshop.co.il/",
    creator: "@omarwoodshop",
    title: "עומר תעשיות עץ - פתרונות עץ מקצועיים",
    description:
      "רהיטים בעיצוב אישי, פתרונות נגרות, ועבודות עץ איכותיות לכל פרויקט.",
    images: ["/og-image.png"],
  },
};

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
      <Process />
      <WhyUs />
      <Testimonials />
      <Gallery />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}
