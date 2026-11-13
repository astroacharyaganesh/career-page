import React, { useState, useEffect } from 'react';
import { MessageCircle, Calendar, ArrowUp } from 'lucide-react';

interface FloatingControlsProps {
  onOpenBooking: () => void;
  whatsappHref?: string;
}

export const FloatingControls: React.FC<FloatingControlsProps> = ({
  onOpenBooking,
  whatsappHref = 'https://wa.me/917300004325?text=Namaste%20Acharya%20Ganesh%2C%20I%20would%20like%20to%20book%20a%201-on-1%20Vedic%20astrology%20consultation.'
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = windowHeight > 0 ? (totalScroll / windowHeight) * 100 : 0;
      setScrollProgress(progress);
      setShowScrollTop(totalScroll > 400);
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
      <div className="fixed top-0 left-0 right-0 h-1 bg-transparent z-50 pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-[#8B3E18] via-amber-500 to-amber-300 transition-all duration-100"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
        {showScrollTop && (
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="p-3 rounded-full bg-[#2e1104]/95 hover:bg-[#3A180B] border border-amber-500/30 text-amber-100 shadow-xl transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

        <a
          id="floating-whatsapp-btn"
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="flex items-center gap-2 p-3.5 sm:px-4 sm:py-3 rounded-full bg-[#10b981] hover:bg-[#059669] text-white font-bold text-xs shadow-xl border border-emerald-400/40 transition-colors"
        >
          <MessageCircle className="w-5 h-5 fill-white" />
          <span className="hidden sm:inline">Chat on WhatsApp</span>
        </a>

        <button
          id="floating-book-btn"
          type="button"
          onClick={onOpenBooking}
          className="flex items-center gap-2 px-5 py-3.5 rounded-full bg-gradient-to-r from-amber-300 via-amber-200 to-amber-300 text-[#2e1104] font-bold text-xs sm:text-sm shadow-2xl border border-amber-300 hover:brightness-105 active:scale-95 transition-all cursor-pointer"
        >
          <Calendar className="w-4 h-4 text-[#2e1104]" />
          <span>Book a consultation</span>
        </button>
      </div>
    </>
  );
};
