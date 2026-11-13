import React, { useState, useEffect } from 'react';
import { MessageCircle, Calendar, ArrowUp } from 'lucide-react';

interface FloatingControlsProps {
  onOpenBooking: () => void;
  whatsappHref?: string;
}

export const FloatingControls: React.FC<FloatingControlsProps> = ({
  onOpenBooking,
  whatsappHref = 'https://wa.me/917300004325?text=Namaste%20Acharya%20Ganesh%2C%20I%20would%20like%20to%20book%20a%20consultation.'
}) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(document.documentElement.scrollTop > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2.5 pointer-events-auto">
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          className="p-2.5 rounded-full bg-card border border-border text-heading shadow-md hover:bg-muted transition-all cursor-pointer"
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
        className="flex items-center gap-2 p-3 sm:px-4 sm:py-2.5 rounded-full bg-[#25D366] hover:bg-[#1fb858] text-white font-semibold text-xs shadow-lg transition-transform hover:scale-105"
      >
        <MessageCircle className="w-5 h-5 fill-white" />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>

      <button
        id="floating-book-btn"
        type="button"
        onClick={onOpenBooking}
        aria-label="Book A Consultation"
        className="hidden sm:flex items-center gap-2 px-5 py-3 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-xs sm:text-sm shadow-xl border border-secondary/30 transition-all hover:scale-105 active:scale-95 cursor-pointer"
      >
        <Calendar className="w-4 h-4" />
        <span>Book A Consultation</span>
      </button>
    </div>
  );
};
