import React, { useState, useEffect } from 'react';
import { MessageCircle, Calendar, ArrowUp, Sparkles } from 'lucide-react';

interface FloatingControlsProps {
  onOpenBooking: () => void;
  onOpenWhatsApp: () => void;
}

export const FloatingControls: React.FC<FloatingControlsProps> = ({
  onOpenBooking,
  onOpenWhatsApp
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${(totalScroll / windowHeight) * 100}`;
      setScrollProgress(Number(scroll));

      if (totalScroll > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* 1. Viewport Top Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-transparent z-50 pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-amber-400 via-violet-500 to-emerald-400 transition-all duration-100 shadow-[0_0_10px_rgba(245,158,11,0.8)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* 2. Floating Action Controls on Bottom Right */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
        
        {/* Back to Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="p-3 rounded-full bg-[#0B1020]/90 hover:bg-slate-800 border border-white/[0.15] text-slate-300 hover:text-white shadow-xl backdrop-blur-md transition-all hover:scale-110 active:scale-95 cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

        {/* WhatsApp Quick Connect Floating Button */}
        <button
          id="floating-whatsapp-btn"
          onClick={onOpenWhatsApp}
          aria-label="Chat with Astrological Coordinator on WhatsApp"
          className="group flex items-center gap-2 p-3.5 sm:px-4 sm:py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-2xl shadow-emerald-600/40 hover:shadow-emerald-600/60 border border-emerald-400/40 hover:scale-105 active:scale-95 transition-all cursor-pointer"
        >
          <MessageCircle className="w-5 h-5 fill-white" />
          <span className="hidden sm:inline">WhatsApp Chat</span>
        </button>

        {/* Sticky Primary Consultation Pill */}
        <button
          id="floating-book-btn"
          onClick={onOpenBooking}
          className="group flex items-center gap-2 px-5 py-3.5 rounded-full bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 text-slate-950 font-black text-xs sm:text-sm shadow-2xl shadow-amber-500/40 hover:shadow-amber-500/60 hover:scale-105 active:scale-95 transition-all cursor-pointer border border-amber-300"
        >
          <Calendar className="w-4 h-4 text-slate-950" />
          <span>Book Consultation</span>
          <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping" />
        </button>

      </div>
    </>
  );
};
