import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Award, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Showcase', href: '#showcase' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Plans', href: '#plans' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  // Helper for smooth navigation on mobile & desktop
  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    if (href.startsWith('#')) {
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);
      if (element) {
        setTimeout(() => {
          const headerOffset = 85;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }, 50);
      }
    }
  };

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-slate-900 via-red-950 to-slate-900 text-white text-xs sm:text-sm py-2 px-4 shadow-inner">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2 font-medium">
            <span className="bg-amber-500 text-slate-950 font-bold px-2 py-0.5 rounded text-[11px] uppercase tracking-wider">Top Rated</span>
            <span>🏆 4-Time Mr. Tamil Nadu & 3-Time South Indian Award Winner Gym in Kovilpatti</span>
          </div>
          <div className="flex items-center gap-4 hidden md:flex">
            <a href="https://share.google/uh0K2aqBq9wnwz8DX" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-amber-400 font-semibold hover:underline">
              <Star className="w-4 h-4 fill-amber-400" />
              <span>4.9 ★★★★★ Verified Google Reviews</span>
            </a>
            <a href="tel:+919962224307" className="flex items-center gap-1.5 hover:text-red-400 transition-colors">
              <Phone className="w-3.5 h-3.5 text-red-500" />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/80'
            : 'bg-white/85 backdrop-blur-sm border-b border-slate-200/50'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-3 group touch-manipulation cursor-pointer"
            >
              <div className="relative">
                <img
                  src="/assets/club96logo.jpeg"
                  alt="Club 96 Fitness Logo"
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl object-cover ring-2 ring-red-600/30 group-hover:ring-red-600 transition-all shadow-md"
                />
                <div className="absolute -bottom-1 -right-1 bg-amber-500 rounded-full p-0.5 shadow">
                  <Award className="w-3 h-3 text-white" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl sm:text-2xl tracking-tight font-['Outfit'] text-slate-900 leading-none">
                  CLUB <span className="text-red-600">96</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-amber-600 mt-0.5">
                  LUXURY FITNESS • KOVILPATTI
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-red-600 hover:bg-red-50/70 rounded-lg transition-all duration-200 cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href="#plans"
                onClick={(e) => handleNavClick(e, '#plans')}
                className="relative inline-flex items-center justify-center px-6 py-2.5 overflow-hidden font-bold text-white rounded-xl shadow-lg bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-red-500/25 cursor-pointer touch-manipulation"
              >
                <span>Join Now</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-2.5">
              <a
                href="#plans"
                onClick={(e) => handleNavClick(e, '#plans')}
                className="px-3.5 py-2 text-xs font-bold text-white bg-red-600 hover:bg-red-700 rounded-lg shadow cursor-pointer touch-manipulation active:scale-95 transition-transform"
              >
                Join Now
              </a>
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2.5 rounded-xl text-slate-800 hover:text-red-600 bg-slate-100 hover:bg-slate-200 transition-all focus:outline-none cursor-pointer touch-manipulation active:scale-95"
                aria-label="Toggle Navigation Menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden bg-white border-b border-slate-200 overflow-hidden shadow-2xl"
            >
              <div className="px-4 pt-2 pb-6 space-y-1.5 max-w-7xl mx-auto">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="block px-4 py-3.5 text-base font-bold text-slate-800 hover:text-red-600 hover:bg-red-50 rounded-xl transition-colors cursor-pointer touch-manipulation active:bg-red-100"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="pt-4 mt-2 border-t border-slate-100 flex flex-col gap-3">
                  <a
                    href="tel:+919962224307"
                    className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold text-white bg-slate-900 rounded-xl shadow cursor-pointer touch-manipulation"
                  >
                    <Phone className="w-4 h-4 text-red-500" />
                    <span>Call Gym Directly: +91 99622 24307</span>
                  </a>
                  <div className="flex items-center justify-center gap-2 px-4 text-xs font-bold text-amber-600">
                    <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                    <span>Rated 4.9 ★★★★★ on Google Reviews</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
