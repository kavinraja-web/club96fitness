import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, CheckCircle, MessageSquareQuote, ThumbsUp } from 'lucide-react';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      id: 1,
      author: 'david akash',
      localGuide: '3 reviews',
      rating: 5,
      date: '3 weeks ago',
      text: 'Club 96 Fitness on Mandithoppu Road in Kovilpatti is highly regarded as an exceptional, premium gym facility that stands out for its immaculate cleanliness, top-notch equipment, and highly welcoming, inclusive environment. Members consistently praise the knowledgeable and approachable trainers who deliver personalized workout routines, lifestyle assessments, and dynamic training sessions that range from traditional bodybuilding to high-energy group activities like CrossFit and Zumba. With highly flexible scheduling options and multiple budget-friendly packages, the gym maintains a vibrant, motivating atmosphere that supports all fitness levels—making it a top recommended choice for anyone looking to comfortably and effectively elevate their health and fitness journey.',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150',
    },
    {
      id: 2,
      author: 'S MARIVIGNESH',
      localGuide: '2 reviews',
      rating: 5,
      date: '4 weeks ago',
      text: '"My gym experience has been positive and motivating. Regular workouts have helped me improve my strength, fitness, discipline, and confidence. The gym environment encourages me to stay consistent and work toward my health goals." friendly type of gym coach💪👑 …',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
    },
    {
      id: 3,
      author: 'Mani Kandan',
      localGuide: '1 review',
      rating: 5,
      date: '4 months ago',
      text: 'This gym is absolutely amazing with great ambience — neat and clean. Equipments are well maintained and loads your muscles perfectly. The training anf mentoring also looks great. Can see the markable results in very few weeks. Highly recommended.',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150',
    },
    {
      id: 4,
      author: 'Indhu mathi',
      localGuide: '1 review',
      rating: 5,
      date: '2 months ago',
      text: 'Very neat and well-maintained gym. The trainer gives personal attention to everyone and continuously monitors our performance. He provides regular feedback and immediately corrects our posture if we do any exercise in the wrong position. This makes the workouts safe and effective. Highly recommended for anyone looking for a good gym!',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150',
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section id="reviews" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 text-amber-800 font-bold text-xs uppercase tracking-widest mb-4 border border-amber-200">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>Member Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Loved by Kovilpatti. <br />
            Verified on <span className="text-red-gradient">Google Reviews</span>
          </h2>
        </div>

        {/* Official Google Summary Banner */}
        <div className="max-w-4xl mx-auto mb-16 bg-slate-50 border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            {/* Google G Logo Badge */}
            <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center font-extrabold text-2xl border border-slate-100 flex-shrink-0">
              <span className="text-blue-600">G</span>
              <span className="text-red-500">o</span>
              <span className="text-amber-500">o</span>
              <span className="text-blue-600">g</span>
              <span className="text-emerald-600">l</span>
              <span className="text-red-500">e</span>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="text-3xl sm:text-4xl font-black font-['Outfit'] text-slate-900">4.9</span>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
              <p className="text-xs sm:text-sm font-bold text-slate-600 mt-1 flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-600" /> Based on 150+ Verified Public Google Reviews
              </p>
            </div>
          </div>

          <a
            href="https://share.google/uh0K2aqBq9wnwz8DX"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 bg-white hover:bg-slate-100 text-slate-800 font-bold text-sm rounded-xl border border-slate-300 shadow-sm transition-colors whitespace-nowrap flex items-center gap-2"
          >
            <ThumbsUp className="w-4 h-4 text-red-600" />
            <span>Write a Google Review</span>
          </a>
        </div>

        {/* Review Cards Grid / Slider Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <img
                      src={review.avatar}
                      alt={review.author}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-red-600/30"
                    />
                    <div>
                      <h4 className="font-extrabold text-slate-900 font-['Outfit'] text-base flex items-center gap-1.5">
                        {review.author}
                        <CheckCircle className="w-4 h-4 text-blue-600 fill-blue-50" />
                      </h4>
                      <span className="text-xs text-slate-500 font-medium">{review.localGuide}</span>
                    </div>
                  </div>

                  <div className="flex flex-col items-end">
                    <div className="flex text-amber-400">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] text-slate-400 mt-0.5">{review.date}</span>
                  </div>
                </div>

                <p className="text-slate-700 text-base leading-relaxed">
                  "{review.text}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-slate-400">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" /> Verified Google Feedback
                </span>
                <span className="text-red-600 font-semibold">Club 96 Member</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
