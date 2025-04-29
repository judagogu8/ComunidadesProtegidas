import { useState } from 'react';
import Header from '../organisms/Header';
import HeroSection from '../organisms/HeroSection';
import FeaturesSection from '../organisms/FeaturesSection';
import HowItWorksSection from '../organisms/HowItWorksSection';
import TestimonialsSection from '../organisms/TestimonialsSection';
import ContactSection from '../organisms/ContactSection';
import Footer from '../organisms/Footer';

function Home() {
  const [activeTab, setActiveTab] = useState('inicio');
  const [isNavOpen, setIsNavOpen] = useState(false);

  const scrollToSection = (sectionId, tabName) => {
    setActiveTab(tabName);
    setIsNavOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      const headerOffset = document.querySelector('.header').offsetHeight;
      const elementPosition = section.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - headerOffset,
        behavior: 'smooth'
      });
    }
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="app-container">
      <Header
        activeTab={activeTab}
        scrollToSection={scrollToSection}
        isNavOpen={isNavOpen}
        toggleNav={toggleNav}
      />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}

export default Home;