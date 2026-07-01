import React from 'react';

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href="https://wa.me/919962224307?text=Hi%20Club%2096%20Fitness!%20I%20would%20like%20to%20know%20more%20about%20your%20gym%20timings%20and%20plans."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative flex items-center justify-center cursor-pointer transform hover:scale-110 active:scale-95 transition-all duration-300"
      >

        <img
          src="/assets/whatsappbotlogo.gif"
          alt="WhatsApp Bot"
          className="w-16 h-16 object-cover border border-black-500 rounded-full"
        />

        {/* Tooltip Label */}
        <span className="absolute right-full mr-3 px-3 py-1.5 bg-slate-900 text-white text-xs font-bold rounded-xl whitespace-nowrap shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          💬 Chat with Club 96 Trainer
        </span>

        {/* Pulse Ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500 opacity-75 animate-ping -z-10" />
      </a>
    </div>
  );
}
