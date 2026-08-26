import React from 'react';
import posterImage from '../assets/images/career_astrology_poster_1787726633623.jpg';
import {
  Sparkles,
  Compass,
  Layers,
  Clock,
  ShieldCheck,
  Calendar,
  MessageCircle,
  ArrowRight,
  TrendingUp,
  CheckCircle2
} from 'lucide-react';

interface UnderstandingCareerAstrologyProps {
  onOpenBooking: (tier?: any) => void;
}

export const UnderstandingCareerAstrology: React.FC<UnderstandingCareerAstrologyProps> = ({ onOpenBooking }) => {
  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      'Namaste Acharya Ganesh, I would like to inquire about Career Astrology by Date of Birth and D10 Dashamsha analysis.'
    );
    window.open(`https://wa.me/917300004325?text=${text}`, '_blank');
  };

  return (
    <section id="understanding-career-astrology" className="pt-8 sm:pt-10 lg:pt-12 pb-4 sm:pb-6 lg:pb-6 bg-[#FAF7F2] text-stone-800 relative overflow-hidden border-b border-stone-200">
      
      {/* Subtle background geometry patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Centered Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#f6eee5] border border-[#e7d7c8] text-xs font-semibold text-[#6b2e13] mb-2.5 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#6b2e13]" />
            <span>Vedic Career Astrology Insights</span>
          </div>

          {/* Display Heading */}
          <h2 className="font-serif-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#23120a] tracking-tight leading-[1.2]">
            Understanding Career Astrology by Date of Birth
          </h2>

          {/* Subtitle */}
          <p className="mt-2 text-xs sm:text-sm text-stone-600 font-normal leading-relaxed">
            Bridging ancient Vedic wisdom with modern career dilemmas to give you actionable clarity.
          </p>

        </div>

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
          
          {/* ================= LEFT COLUMN ================= */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5">
            
            {/* Paragraphs */}
            <div className="text-xs sm:text-sm text-stone-700 leading-relaxed">
              <p>
                Career astrology uses your exact date, time, and place of birth to evaluate your{' '}
                <strong className="font-bold text-stone-950">10th House (Karma Bhava)</strong>, governing
                planets, and current{' '}
                <strong className="font-bold text-stone-950">Mahadasha &amp; Antardasha cycles</strong>.
              </p>
            </div>

            {/* 2x2 Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5 pt-1">
              
              {/* Card 1: 10th House */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-[#FCF9F5] border border-[#ECDCCB] hover:border-[#D8BF9F] transition-all flex items-start gap-3 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-[#F1E5D5] flex items-center justify-center text-[#6B2E13] flex-shrink-0 mt-0.5">
                  <Compass className="w-4 h-4" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="font-bold text-stone-900 text-xs sm:text-[13px]">
                    10th House (Karma Bhava)
                  </h4>
                  <p className="text-[11px] sm:text-xs text-stone-600 leading-relaxed font-normal">
                    Reveals your natural vocation, authority, executive power, and leadership potential.
                  </p>
                </div>
              </div>

              {/* Card 2: Dashamsha (D10) Chart */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-[#FCF9F5] border border-[#ECDCCB] hover:border-[#D8BF9F] transition-all flex items-start gap-3 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-[#F1E5D5] flex items-center justify-center text-[#6B2E13] flex-shrink-0 mt-0.5">
                  <Layers className="w-4 h-4" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="font-bold text-stone-900 text-xs sm:text-[13px]">
                    Dashamsha (D10) Chart
                  </h4>
                  <p className="text-[11px] sm:text-xs text-stone-600 leading-relaxed font-normal">
                    Pinpoints career stability, promotions, recognition, and job vs business alignment.
                  </p>
                </div>
              </div>

              {/* Card 3: Dasha & Planetary Timing */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-[#FCF9F5] border border-[#ECDCCB] hover:border-[#D8BF9F] transition-all flex items-start gap-3 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-[#F1E5D5] flex items-center justify-center text-[#6B2E13] flex-shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="font-bold text-stone-900 text-xs sm:text-[13px]">
                    Dasha &amp; Planetary Timing
                  </h4>
                  <p className="text-[11px] sm:text-xs text-stone-600 leading-relaxed font-normal">
                    Identifies auspicious windows for job change, appraisals, business expansion, and relocation.
                  </p>
                </div>
              </div>

              {/* Card 4: Practical Vedic Remedies */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-[#FCF9F5] border border-[#ECDCCB] hover:border-[#D8BF9F] transition-all flex items-start gap-3 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-[#F1E5D5] flex items-center justify-center text-[#6B2E13] flex-shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="font-bold text-stone-900 text-xs sm:text-[13px]">
                    Practical Vedic Remedies
                  </h4>
                  <p className="text-[11px] sm:text-xs text-stone-600 leading-relaxed font-normal">
                    Targeted gemstones, mantras, and remedies to remove roadblocks after comprehensive chart analysis.
                  </p>
                </div>
              </div>

            </div>

            {/* CTA Buttons Row */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => onOpenBooking('executive')}
                className="px-5 py-2.5 sm:py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#6b2e13] hover:bg-[#54230d] active:scale-[0.99] transition-all shadow-md shadow-amber-950/20 flex items-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-amber-200" />
                <span>Book 1-on-1 Analysis</span>
                <ArrowRight className="w-4 h-4 text-amber-200" />
              </button>

              <button
                type="button"
                onClick={handleWhatsApp}
                className="px-5 py-2.5 sm:py-3 rounded-xl font-bold text-xs sm:text-sm text-stone-800 bg-white hover:bg-stone-50 border border-stone-300 transition-all shadow-sm flex items-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-emerald-500 fill-emerald-500" />
                <span>Ask via WhatsApp</span>
              </button>
            </div>

          </div>

          {/* ================= RIGHT COLUMN (SINGLE POSTER IMAGE CROPPED TO CONTENT HEIGHT) ================= */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-end h-full">
            <div className="relative w-full max-w-[420px] h-[340px] sm:h-[370px] lg:h-full lg:min-h-[350px] lg:max-h-[370px] rounded-3xl overflow-hidden shadow-xl shadow-stone-900/20 border-2 border-[#EADBCA] bg-[#FAF6F0] group">
              {/* Single Consolidated Career Astrology Poster Image cropped to content */}
              <img
                src={posterImage}
                alt="Career Astrology - Discover the Right Path, Timing & Growth with Acharya Ganesh"
                className="w-full h-full object-cover object-top block group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                onClick={() => onOpenBooking('executive')}
              />

              {/* Subtle bottom gradient & top golden sheen border overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#23120A]/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-amber-900/10 pointer-events-none" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
