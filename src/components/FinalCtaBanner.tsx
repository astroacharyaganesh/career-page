import React from 'react';
import {
  Calendar,
  MessageCircle,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Lock
} from 'lucide-react';

interface FinalCtaBannerProps {
  onOpenBooking: () => void;
  onOpenWhatsApp: () => void;
}

export const FinalCtaBanner: React.FC<FinalCtaBannerProps> = ({ onOpenBooking, onOpenWhatsApp }) => {
  return (
    <section id="final-cta" className="py-24 relative overflow-hidden bg-[#070A14]">
      {/* Radiant ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-gradient-to-r from-amber-500/10 via-violet-600/15 to-indigo-600/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* The Luxury Hero Banner Box */}
        <div className="relative rounded-3xl p-8 sm:p-14 lg:p-16 bg-gradient-to-b from-slate-900/95 via-[#0B1020] to-slate-900/95 border-2 border-amber-400/40 shadow-2xl shadow-black/80 backdrop-blur-2xl overflow-hidden text-center space-y-8">
          
          {/* Subtle cosmic circle decorations */}
          <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full border border-white/[0.04] pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full border border-amber-500/[0.05] pointer-events-none" />

          {/* Limited Slots Live Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono-code font-bold text-emerald-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>STRICT LIMIT: 5 MANUAL CHARTS PER DAY</span>
          </div>

          {/* Headline */}
          <div className="space-y-4 max-w-3xl mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              Stop Navigating Your Career Blindly. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-100 to-violet-300">
                Unlock Your D10 Cosmic Timing Today.
              </span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Book a 1-on-1 confidential consultation with Acharya Ganesh. Identify the exact calendar window to switch jobs, achieve executive promotion, and unlock your natural wealth yogas.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              id="final-cta-book-btn"
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-9 py-4 rounded-full font-bold text-sm sm:text-base text-slate-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200 shadow-2xl shadow-amber-500/30 hover:shadow-amber-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <Calendar className="w-5 h-5 text-slate-950" />
              <span>Book 1-on-1 Consultation</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </button>

            <button
              id="final-cta-whatsapp-btn"
              onClick={onOpenWhatsApp}
              className="w-full sm:w-auto px-7 py-4 rounded-full font-semibold text-sm sm:text-base text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 text-emerald-400" />
              <span>Direct WhatsApp Inquiry</span>
            </button>
          </div>

          {/* Trust Guarantees */}
          <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-center gap-y-3 gap-x-8 text-xs text-slate-400">
            <div className="flex items-center gap-1.5">
              <Lock className="w-4 h-4 text-amber-400" />
              <span>100% Non-Disclosure Confidentiality</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Includes 25-Page PDF & HD Recording</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-violet-400" />
              <span>14-Day Post-Session WhatsApp Access</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
