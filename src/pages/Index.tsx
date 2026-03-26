import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EventsSection from "@/components/EventsSection";
import ScheduleSection from "@/components/ScheduleSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WebCursorEffect from "@/components/WebCursorEffect";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <WebCursorEffect />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <EventsSection />
      <ScheduleSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
