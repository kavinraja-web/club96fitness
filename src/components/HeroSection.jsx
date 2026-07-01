import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Trophy, Star, ShieldCheck, Dumbbell, Sparkles } from 'lucide-react';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      image: '/assets/club96img.jpeg',
      tag: 'Club 96 Arena',
      title: 'Pro Gym Equipment & Ambience',
      desc: 'State-of-the-art machines in Kovilpatti'
    },
    {
      image: '/assets/club961.png',
      tag: 'Free Weights Zone',
      title: 'Calibrated Dumbbells & Benches',
      desc: 'Heavy-duty training gear for serious results'
    },
    {
      image: '/assets/club9622.jpeg',
      tag: 'Biomechanics Floor',
      title: 'Ergonomic Cable & Lat Stations',
      desc: 'Smooth precision engineering for muscle isolation'
    },
    {
      image: '/assets/club963.jpeg',
      tag: 'Strength Station',
      title: 'Multi-Station Leg Press Arena',
      desc: 'Built for elite bodybuilders and athletes'
    },
    {
      image: '/assets/club964.jpeg',
      tag: 'Cardio & Conditioning',
      title: 'High-Intensity Cardio Floor',
      desc: 'Max calorie burn and endurance workouts'
    },
    {
      image: '/assets/club965.jpeg',
      tag: 'Pro Machines',
      title: 'Plate-Loaded Chest & Shoulder Press',
      desc: 'Optimal muscle development under expert care'
    }
  ];

  // Auto slide interval every 4.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100 py-12 sm:py-20 lg:py-24">
      {/* Subtle Background Glow Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">

            {/* Award Banner Pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-200 shadow-sm"
            >
              <Trophy className="w-4 h-4 text-amber-600 animate-pulse" />
              <span className="text-xs sm:text-sm font-bold tracking-wide text-red-700">
                KOVILPATTI'S PREMIER AWARD-WINNING GYM
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1]"
            >
              Transform Your <span className="text-red-gradient">Body.</span> <br />
              Transform Your <span className="text-gold-gradient">Life.</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-600 font-normal max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Stronger Every Day with Professional Training, Modern Equipment & Proven Results. Join the most supportive fitness community in Kovilpatti.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <a
                href="#plans"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 font-bold text-lg text-white bg-gradient-to-r from-red-600 via-red-700 to-red-800 rounded-2xl shadow-xl shadow-red-600/30 hover:shadow-red-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all group duration-200"
              >
                <span>Join Now</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 font-bold text-lg text-slate-800 bg-white border-2 border-slate-200 rounded-2xl shadow-sm hover:border-red-600 hover:text-red-600 hover:bg-red-50/50 transition-all duration-200"
              >
                <span>Contact Us</span>
              </a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-3 gap-3 pt-6 border-t border-slate-200 max-w-lg mx-auto lg:mx-0"
            >
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-1">
                  4x <Trophy className="w-4 h-4 text-amber-500 inline" />
                </span>
                <span className="text-xs font-semibold text-slate-500">Mr. Tamil Nadu Winner</span>
              </div>
              <div className="flex flex-col items-center lg:items-start border-l border-slate-200 pl-3">
                <span className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-1">
                  3x <Sparkles className="w-4 h-4 text-red-600 inline" />
                </span>
                <span className="text-xs font-semibold text-slate-500">South Indian Winner</span>
              </div>
              <a
                href="https://share.google/uh0K2aqBq9wnwz8DX"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center lg:items-start border-l border-slate-200 pl-3 group hover:opacity-80 transition-opacity"
              >
                <span className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-1">
                  4.9 <Star className="w-4 h-4 text-amber-500 fill-amber-500 inline group-hover:scale-110 transition-transform" />
                </span>
                <span className="text-xs font-semibold text-red-600 underline">Google Reviews</span>
              </a>
            </motion.div>

          </div>

          {/* Right Visual Column (Luxury Auto-Changing Showcase) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Main Image Container */}
            <div className="relative mx-auto max-w-md lg:max-w-none">

              {/* Decorative Gold & Red Border Glow */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-red-600 via-amber-500 to-red-600 rounded-3xl opacity-30 blur-xl animate-pulse-slow" />

              <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-2xl bg-slate-900 h-[450px] sm:h-[520px]">

                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, scale: 1.08 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <img
                      src={heroSlides[currentSlide].image}
                      alt={heroSlides[currentSlide].title}
                      className="w-full h-full object-cover"
                    />
                    {/* Overlay Gradient for readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

                    <div className="absolute bottom-14 left-6 right-6 text-white z-10">
                      <span className="px-3 py-1 bg-red-600 font-bold text-xs rounded-full uppercase tracking-wider inline-block">
                        {heroSlides[currentSlide].tag}
                      </span>
                      <h3 className="text-2xl font-extrabold mt-2 font-['Outfit'] leading-tight">
                        {heroSlides[currentSlide].title}
                      </h3>
                      <p className="text-sm text-slate-300 mt-1">
                        {heroSlides[currentSlide].desc}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Interactive Toggle Dots / Pills inside image frame */}
                <div className="absolute bottom-4 left-6 right-6 z-20 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    {heroSlides.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`h-2 rounded-full transition-all duration-300 ${currentSlide === idx
                            ? 'w-8 bg-amber-400 shadow-md'
                            : 'w-2 bg-white/50 hover:bg-white'
                          }`}
                        aria-label={`Switch to image ${idx + 1}`}
                      />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-white/80 bg-slate-900/60 px-2.5 py-1 rounded-full backdrop-blur-sm">
                    {currentSlide + 1} / {heroSlides.length}
                  </span>
                </div>

              </div>

              {/* Floating Glass Badge 1: Top Trainer */}
              <div className="absolute -top-6 -left-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 hidden sm:flex animate-float z-30">
                <div className="p-3 bg-red-100 text-red-600 rounded-xl font-bold">
                  <Dumbbell className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase">Expert Guidance</div>
                  <div className="text-sm font-extrabold text-slate-900">Personalized Training</div>
                </div>
              </div>

              {/* Floating Glass Badge 2: Verified Review */}
              <div className="absolute -bottom-6 -right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 hidden sm:flex animate-float z-30" style={{ animationDelay: '2s' }}>
                <div className="p-3 bg-amber-100 text-amber-600 rounded-xl">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase">Member Satisfaction</div>
                  <div className="text-sm font-extrabold text-slate-900 flex items-center gap-1">
                    <span>100% Results Oriented</span>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
