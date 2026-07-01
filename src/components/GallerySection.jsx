import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Image, Video, X, ChevronLeft, ChevronRight, Sparkles, Filter } from 'lucide-react';
import { galleryData, galleryCategories } from '../data/galleryData';

const InstagramIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function GallerySection() {
  const [items] = useState(galleryData);
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Filter items based on active category
  const filteredItems = activeCategory === 'All'
    ? items
    : activeCategory === 'Videos'
    ? items.filter(item => item.type === 'video' || item.category === 'Videos')
    : items.filter(item => item.type === 'photo' || item.category === 'Photos');

  // Handle category filter switch with brief skeleton simulation for premium UX
  const handleCategoryChange = (cat) => {
    if (cat === activeCategory) return;
    setIsLoading(true);
    setActiveCategory(cat);
    setTimeout(() => {
      setIsLoading(false);
    }, 350);
  };

  // Handle next/prev in lightbox
  const handleNext = (e) => {
    e?.stopPropagation();
    if (!selectedItem) return;
    const currentIndex = filteredItems.findIndex(i => i.id === selectedItem.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedItem(filteredItems[nextIndex]);
  };

  const handlePrev = (e) => {
    e?.stopPropagation();
    if (!selectedItem) return;
    const currentIndex = filteredItems.findIndex(i => i.id === selectedItem.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedItem(filteredItems[prevIndex]);
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
  }, [selectedItem, filteredItems]);

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

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar border-b border-white/10">
          <Filter className="w-4 h-4 text-amber-400 flex-shrink-0 mr-1" />
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => handleCategoryChange(cat)}
              className={`px-5 py-2.5 rounded-xl font-bold text-sm whitespace-nowrap transition-all duration-300 cursor-pointer touch-manipulation ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg shadow-red-600/30 ring-2 ring-red-400/30'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/5'
              }`}
            >
              {cat}
              <span className="ml-2 text-xs opacity-75 px-1.5 py-0.5 rounded-full bg-black/20">
                {cat === 'All'
                  ? items.length
                  : cat === 'Videos'
                  ? items.filter(i => i.type === 'video' || i.category === 'Videos').length
                  : items.filter(i => i.type === 'photo' || i.category === 'Photos').length}
              </span>
            </button>
          ))}
        </div>

        {/* Masonry Grid / Loading Skeleton */}
        {isLoading ? (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {[1, 2, 3, 4, 5, 6].map((skel) => (
              <div key={skel} className="bg-white/5 border border-white/10 rounded-2xl h-64 sm:h-80 animate-pulse break-inside-avoid" />
            ))}
          </div>
        ) : (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            <AnimatePresence>
              {filteredItems.map((item) => (
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

                    {/* Category & Type Badge */}
                    <div className="absolute top-4 left-4 flex items-center gap-2 pointer-events-none">
                      <span className="bg-slate-900/80 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-amber-400 shadow">
                        {item.category}
                      </span>
                      {item.type === 'video' ? (
                        <span className="bg-red-600/90 text-white px-2 py-0.5 rounded-md text-[10px] font-bold uppercase flex items-center gap-1 shadow">
                          <Video className="w-3 h-3" /> Video
                        </span>
                      ) : (
                        <span className="bg-black/60 text-slate-200 px-2 py-0.5 rounded-md text-[10px] font-bold uppercase flex items-center gap-1">
                          <Image className="w-3 h-3" /> Photo
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Hover Glass Banner */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-5 pt-10 translate-y-2 group-hover:translate-y-0 transition-transform">
                    <h3 className="font-extrabold text-lg text-white font-['Outfit'] leading-snug line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-slate-300 text-xs mt-1 line-clamp-2">
                      {item.description}
                    </p>

                    <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/10">
                      <span className="text-[11px] font-semibold text-amber-400 group-hover:underline flex items-center gap-1">
                        View Fullbox →
                      </span>
                      {item.instagramUrl && (
                        <a
                          href={item.instagramUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-xs font-bold text-pink-400 hover:text-pink-300 flex items-center gap-1 bg-white/10 px-2 py-1 rounded-md hover:bg-white/20 transition-colors"
                        >
                          <InstagramIcon className="w-3.5 h-3.5" />
                          <span>Instagram</span>
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

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
                <div className="w-full p-6 bg-slate-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="bg-amber-500/20 text-amber-400 px-2.5 py-0.5 rounded text-xs font-bold uppercase tracking-wider border border-amber-500/30">
                        {selectedItem.category}
                      </span>
                      <span className="text-slate-400 text-xs"> Club 96 Official Media</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-white font-['Outfit']">
                      {selectedItem.title}
                    </h3>
                    <p className="text-slate-300 text-sm mt-1 max-w-2xl">
                      {selectedItem.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
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
