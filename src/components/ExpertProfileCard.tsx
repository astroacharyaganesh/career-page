import React from 'react';
import expertPhoto from '../assets/images/regenerated_image_1787726256429.png';
import {
  Tv,
  Users,
  Award,
  Star,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Calendar
} from 'lucide-react';

interface ExpertProfileCardProps {
  onOpenBooking?: () => void;
}

export const ExpertProfileCard: React.FC<ExpertProfileCardProps> = ({ onOpenBooking }) => {
  return (
    <section id="expert-profile" className="relative -mt-6 lg:-mt-10 mb-12 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Outer Glow & Gradient Container */}
      <div className="relative rounded-3xl bg-[#0c071e]/95 backdrop-blur-2xl border border-violet-500/25 p-6 sm:p-8 lg:p-10 shadow-2xl shadow-black/80 overflow-hidden">
        
        {/* Ambient background glows */}
        <div className="absolute -top-24 -left-24 w-80 h-80 bg-violet-600/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
          
          {/* ================= LEFT SECTION: Profile & Credentials ================= */}
          <div className="lg:col-span-5 flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
            
            {/* Avatar with Circular Badge */}
            <div className="relative flex-shrink-0">
              <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full p-1 bg-gradient-to-tr from-amber-400 via-violet-500 to-amber-200 shadow-xl shadow-violet-950/60">
                <div className="w-full h-full rounded-full overflow-hidden bg-[#d8ab6b] border-2 border-slate-900 flex items-center justify-center">
                  <img
                    src={expertPhoto}
                    alt="Hanish Bagga (Acharya Ganesh)"
                    className="w-full h-full object-cover object-top scale-105"
                  />
                </div>
              </div>

              {/* Verified Shield Badge Floating on Avatar */}
              <div className="absolute -bottom-1 -right-1 w-9 h-9 rounded-xl bg-gradient-to-tr from-violet-700 to-indigo-600 border-2 border-[#0c071e] flex items-center justify-center shadow-lg text-amber-300">
                <ShieldCheck className="w-5 h-5" />
              </div>
            </div>

            {/* Expert Info & Highlights */}
            <div className="space-y-3">
              <div>
                <span className="text-[11px] font-mono-code uppercase font-bold tracking-widest text-amber-400">
                  EXPERT
                </span>
                <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight mt-0.5">
                  Hanish Bagga
                </h2>
                <p className="text-xs sm:text-sm font-semibold text-amber-300 mt-0.5">
                  ( Acharya Ganesh )
                </p>
                <p className="text-xs text-slate-300 font-medium mt-1">
                  Celebrity Vedic Astrologer &amp; Vastu Shastra Mentor
                </p>
              </div>

              {/* Available Today Green Pill */}
              <div className="pt-2 flex justify-center sm:justify-start">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs font-semibold shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Available Today</span>
                </div>
              </div>
            </div>

          </div>

          {/* ================= MIDDLE SECTION: 2x2 Stats Grid ================= */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-3.5">
            
            {/* Stat 1: 10K+ TV Shows */}
            <div className="p-4 rounded-2xl bg-[#170e38]/80 border border-violet-500/20 hover:border-violet-400/40 transition-all flex items-center gap-3.5 shadow-md">
              <div className="w-11 h-11 rounded-xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400 flex-shrink-0">
                <Tv className="w-5 h-5" />
              </div>
              <div>
                <div className="font-display text-lg sm:text-xl font-extrabold text-white">
                  10K+
                </div>
                <div className="text-[11px] text-slate-300 font-medium leading-tight">
                  TV Shows &amp; Media
                </div>
              </div>
            </div>

            {/* Stat 2: 50,000+ Happy Clients */}
            <div className="p-4 rounded-2xl bg-[#170e38]/80 border border-violet-500/20 hover:border-violet-400/40 transition-all flex items-center gap-3.5 shadow-md">
              <div className="w-11 h-11 rounded-xl bg-violet-500/10 border border-violet-500/30 flex items-center justify-center text-violet-400 flex-shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <div className="font-display text-lg sm:text-xl font-extrabold text-white">
                  50,000+
                </div>
                <div className="text-[11px] text-slate-300 font-medium leading-tight">
                  Happy Clients
                </div>
              </div>
            </div>

            {/* Stat 3: 98% Accuracy & Trust */}
            <div className="p-4 rounded-2xl bg-[#170e38]/80 border border-violet-500/20 hover:border-violet-400/40 transition-all flex items-center gap-3.5 shadow-md">
              <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 flex-shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <div className="font-display text-lg sm:text-xl font-extrabold text-white">
                  98%
                </div>
                <div className="text-[11px] text-slate-300 font-medium leading-tight">
                  Accuracy &amp; Trust
                </div>
              </div>
            </div>

            {/* Stat 4: 4.9/5 Google Rating */}
            <div className="p-4 rounded-2xl bg-[#170e38]/80 border border-violet-500/20 hover:border-violet-400/40 transition-all flex items-center gap-3.5 shadow-md">
              <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 flex-shrink-0">
                <Star className="w-5 h-5 fill-emerald-400" />
              </div>
              <div>
                <div className="font-display text-lg sm:text-xl font-extrabold text-white">
                  4.9/5
                </div>
                <div className="text-[11px] text-slate-300 font-medium leading-tight">
                  Google Rating
                </div>
              </div>
            </div>

          </div>

          {/* ================= RIGHT SECTION: 17+ Years & Consultation Highlights ================= */}
          <div className="lg:col-span-3 space-y-4">
            
            {/* Stat 5: 17+ Years Experience Card */}
            <div className="p-4 rounded-2xl bg-[#170e38]/80 border border-violet-500/20 hover:border-violet-400/40 transition-all flex items-center gap-3.5 shadow-md">
              <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-300 flex-shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <div className="font-display text-lg sm:text-xl font-extrabold text-white">
                  17+
                </div>
                <div className="text-[11px] text-slate-300 font-medium leading-tight">
                  Years Experience
                </div>
              </div>
            </div>

            {/* 3 Value Pillars */}
            <div className="space-y-2.5 pt-1 text-xs text-slate-200">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span className="font-medium text-slate-100">1-on-1 Private Consultation</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span className="font-medium text-slate-100">No Generic Software Reports</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span className="font-medium text-slate-100">
                  <strong className="text-amber-300 font-bold">Practical Vedic</strong> Guidance
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
