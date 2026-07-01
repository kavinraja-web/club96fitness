import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Eye, X, CheckCircle2 } from 'lucide-react';

export default function AnimatedPhotoToggle() {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const categories = ['All', 'Strength Arena', 'Pro Equipment', 'Cardio & Conditioning'];

  const photos = [
    {
      id: 1,
      title: 'Heavy Duty Dumbbell Rack & Free Weights',
      category: 'Strength Arena',
      image: '/assets/club961.png',
      desc: 'Top-tier calibrated dumbbells and ergonomic workout benches for maximum muscle isolation.',
    },
    {
      id: 2,
      title: 'Ergonomic Lat Pulldown & Cable Station',
      category: 'Pro Equipment',
      image: '/assets/club9622.jpeg',
      desc: 'Smooth biomechanical motion machines engineered for safety and precision back training.',
    },
    {
      id: 3,
      title: 'Multi-Station Gym & Leg Press Arena',
      category: 'Pro Equipment',
      image: '/assets/club966.jpeg',
      desc: 'Heavy-duty commercial leg press and smith machines built for elite bodybuilders.',
    },
    {
      id: 4,
      title: 'High-Intensity Cardio & Conditioning Zone',
      category: 'Cardio & Conditioning',
      image: '/assets/club964.jpeg',
      desc: 'Spacious training area optimized for fat burn, endurance, and CrossFit functional workouts.',
    },
    {
      id: 5,
      title: 'Professional Chest & Shoulder Press Machines',
      category: 'Strength Arena',
      image: '/assets/club965.jpeg',
      desc: 'Advanced plate-loaded strength stations ensuring optimal muscle development.',
    },
    {
      id: 6,
      title: 'Club 96 Complete Interior Overview',
      category: 'Pro Equipment',
      image: '/assets/club96img.jpeg',
      desc: 'Clean, hygienic, well-ventilated space equipped with modern sound system and lighting.',
    },
  ];

  const filteredPhotos = activeTab === 'All'
    ? photos
    : photos.filter((p) => p.category === activeTab);

  return (
    <section id="showcase" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-700 font-bold text-xs uppercase tracking-widest mb-4 border border-amber-200">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Photo Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Explore <span className="text-red-gradient">Club 96</span> Arena
          </h2>
          <p className="text-slate-600 mt-4 text-base sm:text-lg">
            Toggle between training zones to see our state-of-the-art equipment and luxurious environment in Kovilpatti.
          </p>
        </div>

        {/* Toggle Pills / Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`relative px-6 py-3 rounded-2xl font-bold text-sm transition-all duration-300 ${activeTab === cat
                ? 'text-white shadow-lg shadow-red-500/25'
                : 'text-slate-600 bg-slate-100 hover:bg-slate-200 hover:text-slate-900'
                }`}
            >
              {activeTab === cat && (
                <motion.div
                  layoutId="activeTabPill"
                  className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </div>

        {/* Animated Photo Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredPhotos.map((photo) => (
              <motion.div
                key={photo.id}
                layout
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedPhoto(photo)}
                className="group relative rounded-3xl overflow-hidden bg-slate-100 border border-slate-200 shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col"
              >
                <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Category Tag */}
                  <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-md text-red-600 font-bold text-xs rounded-full shadow-sm">
                    {photo.category}
                  </span>

                  {/* Hover Zoom Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
                      <Eye className="w-6 h-6" />
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-extrabold text-lg sm:text-xl font-['Outfit'] leading-tight">
                      {photo.title}
                    </h3>
                  </div>
                </div>

                <div className="p-5 bg-white flex-1 flex flex-col justify-between">
                  <p className="text-sm text-slate-600 line-clamp-2">
                    {photo.desc}
                  </p>
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-red-600">
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-500" /> Professional Standard
                    </span>
                    <span className="underline group-hover:translate-x-1 transition-transform inline-block">Click to Enlarge &rarr;</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Fullscreen Photo Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl overflow-hidden max-w-3xl w-full shadow-2xl relative border border-slate-200"
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-slate-900/70 text-white hover:bg-red-600 transition-colors shadow-lg"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative max-h-[60vh] overflow-hidden bg-slate-900">
                <img
                  src={selectedPhoto.image}
                  alt={selectedPhoto.title}
                  className="w-full h-full object-contain max-h-[60vh]"
                />
              </div>

              <div className="p-6 sm:p-8">
                <span className="px-3 py-1 bg-red-100 text-red-700 font-bold text-xs rounded-full uppercase tracking-wider">
                  {selectedPhoto.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2 font-['Outfit']">
                  {selectedPhoto.title}
                </h3>
                <p className="text-slate-600 mt-3 text-base">
                  {selectedPhoto.desc}
                </p>
                <div className="mt-6 pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
                  <span className="text-sm font-semibold text-slate-500">📍 Available at Club 96 Fitness, Kovilpatti</span>
                  <a
                    href="https://wa.me/919962224307?text=Hi%20Club%2096%2C%20I%20saw%20your%20gym%20photos%20on%20the%20website%20and%20want%20to%20join!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl shadow-md transition-colors text-sm"
                  >
                    Inquire on WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
