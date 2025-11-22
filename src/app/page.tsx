import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

import HeroSection from "@/components/sections/hero-section/hero-section";
import AboutSection from "@/components/sections/about-section/about-section";
import StoreSection from "@/components/sections/store-section/store-section";
import EventSection from "@/components/sections/event-section/event-section";
import CommunitySection from "@/components/sections/community-section/community-section";
import FAQSection from "@/components/sections/faq-section/faq-section";
import ContactSection from "@/components/sections/contact-section/contact-section";



export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <StoreSection />
      <EventSection />
      <CommunitySection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </>
  );
}
