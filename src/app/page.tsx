import EventAnnouncements from "@/components/home-sections/Event-announcements";
import Footer from "@/components/home-sections/Footer";
import { HeroSection } from "@/components/home-sections/Hero-section"
import ImageCarousel from "@/components/home-sections/ImageCrosuel"
import QuoteSection from "@/components/home-sections/Quote-section"


export default function Home() {
  return (
<>
   <HeroSection/>
      <QuoteSection/>
      <ImageCarousel/>
      <EventAnnouncements/>
      <Footer/>
  
</>
  );
}
