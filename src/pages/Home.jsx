

import HeroSection from '@/components/site-web/HeroSection';
import FeaturesSection from '@/components/site-web/FeaturesSection';
import DemoSection from '@/components/site-web/DemoSection';
import TestimonialsSection from '@/components/site-web/TestimonialsSection';
import FaqSection from "@/components/site-web/FaqSection";

const Home = () => {


 

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Features */}
      <FeaturesSection />

      {/* Demo Section */}
     <DemoSection />

      {/* Testimonials */}
      <TestimonialsSection />



      {/* FAQ & Contact */}
      <FaqSection />
    </div>
  );
};

export default Home;