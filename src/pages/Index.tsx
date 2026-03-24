import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MenuSection from "@/components/MenuSection";
import OrderingPreviewSection from "@/components/OrderingPreviewSection";
import AboutPreviewSection from "@/components/AboutPreviewSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <MenuSection />
      <OrderingPreviewSection />
      <AboutPreviewSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
