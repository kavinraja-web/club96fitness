import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AnimatedPhotoToggle from './components/AnimatedPhotoToggle';
import AboutSection from './components/AboutSection';
import AchievementsSection from './components/AchievementsSection';
import ServicesSection from './components/ServicesSection';
import PlansSection from './components/PlansSection';
import GallerySection from './components/GallerySection';
import BmiCalculator from './components/BmiCalculator';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans flex flex-col selection:bg-red-600 selection:text-white overflow-x-hidden relative w-full">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <AnimatedPhotoToggle />
        <AboutSection />
        <AchievementsSection />
        <ServicesSection />
        <PlansSection />
        <GallerySection />
        <BmiCalculator />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
