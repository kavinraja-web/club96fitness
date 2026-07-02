import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { galleryData } from '../data/galleryData';

const InstagramIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function GallerySection() {
  const items = galleryData;
  const [selectedItem, setSelectedItem] = useState(null);

  // Handle next/prev in lightbox
  const handleNext = (e) => {
    e?.stopPropagation();
    if (!selectedItem) return;
    const currentIndex = items.findIndex(i => i.id === selectedItem.id);
    const nextIndex = (currentIndex + 1) % items.length;
    setSelectedItem(items[nextIndex]);
  };

  const handlePrev = (e) => {
    e?.stopPropagation();
    if (!selectedItem) return;
    const currentIndex = items.findIndex(i => i.id === selectedItem.id);
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    setSelectedItem(items[prevIndex]);
  };

  // Handle keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedItem) return;
      if (e.key === 'Escape') setSelectedItem(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItem, items]);

  return (
    <section id="gallery" className="py-24 bg-gradient-to-br from-slate-900 via-red-950 to-slate-900 text-white relative overflow-hidden">
      {/* Decorative ambient lighting */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-red-600/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-amber-500/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/20 text-red-400 border border-red-500/30 font-bold text-xs uppercase tracking-widest mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Visual Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-['Outfit'] tracking-tight">
              Club 96 <span className="text-gold-gradient">Dynamic Gallery</span>
            </h2>
            <p className="text-slate-300 mt-3 text-base sm:text-lg">
              Experience the energy of Kovilpatti&apos;s luxury gym — from elite heavyweight workouts and championship stages to life-changing member transformations.
            </p>
          </div>

          {/* Action Button */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/club96_fitness?igsh=ZDB0M2F2NTNnbjY4"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:opacity-95 text-white font-bold text-sm shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer touch-manipulation"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>Follow on Instagram</span>
            </a>
          </div>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 mt-8">
          <AnimatePresence>
            {items.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35 }}
                  onClick={() => setSelectedItem(item)}
                  className="break-inside-avoid relative group rounded-2xl overflow-hidden bg-slate-800/60 border border-white/10 shadow-xl cursor-pointer hover:border-red-500/60 transition-all duration-300 touch-manipulation"
                >
                  {/* Media Preview */}
                  <div className="relative overflow-hidden w-full max-h-[480px]">
                    <img
                      src={item.thumbnail || item.src}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Video Play Button Overlay */}
                    {item.type === 'video' && (
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center pointer-events-none">
                        <div className="w-16 h-16 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-2xl shadow-red-600/60 group-hover:scale-110 group-hover:bg-red-600 transition-all">
                          <Play className="w-7 h-7 fill-white ml-1" />
                        </div>
                        {item.duration && (
                          <span className="absolute top-4 right-4 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-md text-xs font-bold font-mono tracking-wider text-white border border-white/10">
                            {item.duration}
                          </span>
                        )}
                      </div>
                    )}


                  </div>

                  {/* Hover Glass Banner */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-between">
                    <span className="text-xs font-semibold text-amber-400 flex items-center gap-1">
                      View Fullbox →
                    </span>
                    {item.instagramUrl && (
                      <a
                        href={item.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-xs font-bold text-pink-400 hover:text-pink-300 flex items-center gap-1 bg-white/10 px-2.5 py-1 rounded-md hover:bg-white/20 transition-colors"
                      >
                        <InstagramIcon className="w-3.5 h-3.5" />
                        <span>Instagram</span>
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 lg:p-10"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="absolute top-6 right-6 z-50 bg-white/10 hover:bg-red-600 text-white p-3 rounded-full transition-colors border border-white/20 shadow-2xl cursor-pointer touch-manipulation"
                aria-label="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Prev Arrow */}
              <button
                type="button"
                onClick={handlePrev}
                className="absolute left-4 sm:left-8 z-50 bg-white/10 hover:bg-red-600 text-white p-3 rounded-full transition-colors border border-white/20 shadow-2xl cursor-pointer touch-manipulation"
                aria-label="Previous Item"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next Arrow */}
              <button
                type="button"
                onClick={handleNext}
                className="absolute right-4 sm:right-8 z-50 bg-white/10 hover:bg-red-600 text-white p-3 rounded-full transition-colors border border-white/20 shadow-2xl cursor-pointer touch-manipulation"
                aria-label="Next Item"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Media Container */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center bg-slate-900/90 border border-white/15 rounded-3xl overflow-hidden shadow-2xl"
              >
                <div className="w-full flex items-center justify-center bg-black/50 max-h-[70vh] overflow-hidden">
                  {selectedItem.type === 'video' ? (
                    <video
                      src={selectedItem.src}
                      controls
                      autoPlay
                      className="max-h-[70vh] w-full object-contain"
                    />
                  ) : (
                    <img
                      src={selectedItem.src}
                      alt={selectedItem.title}
                      className="max-h-[70vh] w-full object-contain"
                    />
                  )}
                </div>

                {/* Lightbox Footer Info */}
                <div className="w-full p-6 bg-slate-900 flex items-center justify-between gap-4 border-t border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="text-amber-400 font-bold uppercase tracking-wider text-xs">Club 96 Official Media</span>
                  </div>

                  <div className="flex items-center gap-3">
                    {selectedItem.instagramUrl && (
                      <a
                        href={selectedItem.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:opacity-95 font-bold text-white text-sm shadow-lg transition-transform hover:scale-105 cursor-pointer touch-manipulation"
                      >
                        <InstagramIcon className="w-4 h-4" />
                        <span>Open in Instagram</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
