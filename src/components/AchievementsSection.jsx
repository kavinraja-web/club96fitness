import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Star, Flame, Sparkles, ShieldCheck } from 'lucide-react';

export default function AchievementsSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-red-950 to-slate-900 text-white relative overflow-hidden">
      {/* Decorative ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 font-bold text-xs uppercase tracking-widest mb-4">
            <Trophy className="w-3.5 h-3.5" />
            <span>Legacy of Champions</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-['Outfit'] tracking-tight">
            Unrivaled <span className="text-gold-gradient">Pedigree & Awards</span>
          </h2>
          <p className="text-slate-300 mt-4 text-base sm:text-lg">
            Club 96 Fitness is Kovilpatti's most decorated bodybuilding and fitness institution, producing state and national champions year after year.
          </p>
        </div>

        {/* 2 Major Award Badges */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-amber-500/15 via-amber-500/10 to-transparent border-2 border-amber-500/40 rounded-3xl p-8 sm:p-10 flex items-center gap-6 shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-amber-500/10 rounded-full blur-2xl group-hover:scale-125 transition-transform" />

            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 shadow-xl flex-shrink-0 transform group-hover:rotate-6 transition-transform">
              <Trophy className="w-10 h-10 sm:w-12 sm:h-12" />
            </div>

            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 font-bold text-xs uppercase tracking-widest mb-2">
                🏆 Prestige Title
              </div>
              <h3 className="text-2xl sm:text-3xl font-black font-['Outfit'] text-white">
                4-Time Mr. Tamil Nadu Award Winner
              </h3>
              <p className="text-slate-300 text-sm mt-2">
                Demonstrating peerless knowledge of muscle anatomy, stage prep, and nutrition protocols.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-r from-red-600/15 via-red-600/10 to-transparent border-2 border-red-500/40 rounded-3xl p-8 sm:p-10 flex items-center gap-6 shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-red-600/10 rounded-full blur-2xl group-hover:scale-125 transition-transform" />

            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center text-white shadow-xl flex-shrink-0 transform group-hover:rotate-6 transition-transform">
              <Award className="w-10 h-10 sm:w-12 sm:h-12" />
            </div>

            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-red-500/20 text-red-300 font-bold text-xs uppercase tracking-widest mb-2">
                🏆 South India Honor
              </div>
              <h3 className="text-2xl sm:text-3xl font-black font-['Outfit'] text-white">
                3-Time South Indian Award Winner
              </h3>
              <p className="text-slate-300 text-sm mt-2">
                Recognized across South India for elite athletic conditioning and physique perfection.
              </p>
            </div>
          </motion.div>

        </div>

        {/* Animated Counter Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-7 text-center hover:bg-white/10 transition-colors">
            <div className="text-4xl sm:text-6xl font-black font-['Outfit'] text-amber-400">
              1,000<span className="text-red-500">+</span>
            </div>
            <div className="text-slate-300 font-bold text-sm sm:text-base mt-2">Active Transformations</div>
            <div className="text-xs text-slate-400 mt-1">In Kovilpatti & surrounding towns</div>
          </div>

          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-7 text-center hover:bg-white/10 transition-colors">
            <div className="text-4xl sm:text-6xl font-black font-['Outfit'] text-white">
              15<span className="text-amber-400">+</span>
            </div>
            <div className="text-slate-300 font-bold text-sm sm:text-base mt-2">Years of Excellence</div>
            <div className="text-xs text-slate-400 mt-1">Proven track record since founding</div>
          </div>

          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-7 text-center hover:bg-white/10 transition-colors">
            <div className="text-4xl sm:text-6xl font-black font-['Outfit'] text-red-500">
              50<span className="text-amber-400">+</span>
            </div>
            <div className="text-slate-300 font-bold text-sm sm:text-base mt-2">Medals & Trophies</div>
            <div className="text-xs text-slate-400 mt-1">State & National championships</div>
          </div>

          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-7 text-center hover:bg-white/10 transition-colors">
            <div className="text-4xl sm:text-6xl font-black font-['Outfit'] text-emerald-400">
              4.9<span className="text-amber-400">★</span>
            </div>
            <div className="text-slate-300 font-bold text-sm sm:text-base mt-2">Google Star Rating</div>
            <div className="text-xs text-slate-400 mt-1">Verified Google member reviews</div>
          </div>

        </div>

      </div>
    </section>
  );
}
