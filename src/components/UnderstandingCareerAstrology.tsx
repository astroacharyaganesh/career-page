import React, { useState } from 'react';
import {
  Sparkles,
  Compass,
  Layers,
  Clock,
  ShieldCheck,
  Calendar,
  MessageCircle,
  ArrowRight,
  ImageIcon,
  TrendingUp,
  CheckCircle2
} from 'lucide-react';

interface UnderstandingCareerAstrologyProps {
  onOpenBooking: (tier?: any) => void;
}

export const UnderstandingCareerAstrology: React.FC<UnderstandingCareerAstrologyProps> = ({ onOpenBooking }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const posters = [
    {
      title: 'CAREER ASTROLOGY',
      subtitle: 'Discover the Right Path, Timing & Growth',
      guruImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600',
    },
    {
      title: 'D10 DASHAMSHA SECRETS',
      subtitle: 'Executive Authority & Karma Alignment',
      guruImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600',
    }
  ];

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      'Namaste Acharya Ganesh, I would like to inquire about Career Astrology by Date of Birth and D10 Dashamsha analysis.'
    );
    window.open(`https://wa.me/917300004325?text=${text}`, '_blank');
  };

  return (
    <section id="understanding-career-astrology" className="py-16 lg:py-24 bg-[#FAF7F2] text-stone-800 relative overflow-hidden border-b border-stone-200">
      
      {/* Subtle background geometry patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Centered Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#f6eee5] border border-[#e7d7c8] text-xs font-semibold text-[#6b2e13] mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#6b2e13]" />
            <span>Vedic Career Astrology Insights</span>
          </div>

          {/* Display Heading */}
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#23120a] tracking-tight leading-[1.2]">
            Understanding Career Astrology by Date of Birth
          </h2>

          {/* Subtitle */}
          <p className="mt-3 text-sm sm:text-base text-stone-600 font-normal leading-relaxed">
            Bridging ancient Vedic wisdom with modern career dilemmas to give you actionable clarity.
          </p>

        </div>

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* ================= LEFT COLUMN ================= */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Paragraphs */}
            <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
              <p>
                Career astrology uses your exact date, time, and place of birth to evaluate your{' '}
                <strong className="font-bold text-stone-950">10th House (Karma Bhava)</strong>, governing
                planets, and current{' '}
                <strong className="font-bold text-stone-950">Mahadasha &amp; Antardasha cycles</strong>.
              </p>
              <p>
                Rather than relying on vague sun-sign predictions, genuine Vedic astrology analyzes the
                micro-strengths of the Dashamsha (D10) divisional chart to uncover whether service,
                independent profession, government role, or entrepreneurship is best suited for your
                planetary combinations.
              </p>
            </div>

            {/* 2x2 Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              
              {/* Card 1: 10th House */}
              <div className="p-4 rounded-xl bg-[#FCF9F5] border border-[#ECDCCB] hover:border-[#D8BF9F] transition-all flex items-start gap-3.5 shadow-sm">
                <div className="w-9 h-9 rounded-lg bg-[#F1E5D5] flex items-center justify-center text-[#6B2E13] flex-shrink-0 mt-0.5">
                  <Compass className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-stone-900 text-xs sm:text-[13px]">
                    10th House (Karma Bhava)
                  </h4>
                  <p className="text-[11px] sm:text-xs text-stone-600 leading-relaxed font-normal">
                    Reveals your natural vocation, authority, executive power, and leadership potential.
                  </p>
                </div>
              </div>

              {/* Card 2: Dashamsha (D10) Chart */}
              <div className="p-4 rounded-xl bg-[#FCF9F5] border border-[#ECDCCB] hover:border-[#D8BF9F] transition-all flex items-start gap-3.5 shadow-sm">
                <div className="w-9 h-9 rounded-lg bg-[#F1E5D5] flex items-center justify-center text-[#6B2E13] flex-shrink-0 mt-0.5">
                  <Layers className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-stone-900 text-xs sm:text-[13px]">
                    Dashamsha (D10) Chart
                  </h4>
                  <p className="text-[11px] sm:text-xs text-stone-600 leading-relaxed font-normal">
                    Pinpoints career stability, promotions, recognition, and job vs business alignment.
                  </p>
                </div>
              </div>

              {/* Card 3: Dasha & Planetary Timing */}
              <div className="p-4 rounded-xl bg-[#FCF9F5] border border-[#ECDCCB] hover:border-[#D8BF9F] transition-all flex items-start gap-3.5 shadow-sm">
                <div className="w-9 h-9 rounded-lg bg-[#F1E5D5] flex items-center justify-center text-[#6B2E13] flex-shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-stone-900 text-xs sm:text-[13px]">
                    Dasha &amp; Planetary Timing
                  </h4>
                  <p className="text-[11px] sm:text-xs text-stone-600 leading-relaxed font-normal">
                    Identifies auspicious windows for job change, appraisals, business expansion, and relocation.
                  </p>
                </div>
              </div>

              {/* Card 4: Practical Vedic Remedies */}
              <div className="p-4 rounded-xl bg-[#FCF9F5] border border-[#ECDCCB] hover:border-[#D8BF9F] transition-all flex items-start gap-3.5 shadow-sm">
                <div className="w-9 h-9 rounded-lg bg-[#F1E5D5] flex items-center justify-center text-[#6B2E13] flex-shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="space-y-1">
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
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <button
                type="button"
                onClick={() => onOpenBooking('executive')}
                className="px-5 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#6b2e13] hover:bg-[#54230d] active:scale-[0.99] transition-all shadow-md shadow-amber-950/20 flex items-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-amber-200" />
                <span>Book 1-on-1 Analysis</span>
                <ArrowRight className="w-4 h-4 text-amber-200" />
              </button>

              <button
                type="button"
                onClick={handleWhatsApp}
                className="px-5 py-3 rounded-xl font-bold text-xs sm:text-sm text-stone-800 bg-white hover:bg-stone-50 border border-stone-300 transition-all shadow-sm flex items-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-emerald-500 fill-emerald-500" />
                <span>Ask via WhatsApp</span>
              </button>
            </div>

          </div>

          {/* ================= RIGHT COLUMN (POSTER CARD) ================= */}
          <div className="lg:col-span-5 w-full flex justify-center">
            
            <div className="relative w-full max-w-[460px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-stone-900/20 border-2 border-[#ecdccb] bg-gradient-to-b from-[#f5e9da] via-[#eedbc5] to-[#dec2a5] flex flex-col justify-between p-6 sm:p-7">
              
              {/* Change Image Button in Top Right */}
              <div className="absolute top-4 right-4 z-20">
                <button
                  type="button"
                  onClick={() => setImageIndex((prev) => (prev + 1) % posters.length)}
                  className="px-3 py-1.5 rounded-lg bg-stone-900/85 hover:bg-stone-900 text-stone-100 text-[11px] font-medium flex items-center gap-1.5 backdrop-blur-sm transition-all shadow-md cursor-pointer"
                >
                  <ImageIcon className="w-3.5 h-3.5 text-amber-300" />
                  <span>Change Image</span>
                </button>
              </div>

              {/* Background Atmospheric Layers */}
              {/* Cosmic Spiral Galaxy in Top Left */}
              <div className="absolute -top-10 -left-10 w-64 h-64 opacity-40 pointer-events-none">
                <svg viewBox="0 0 200 200" className="w-full h-full stroke-amber-800/60 fill-none animate-spin-slow">
                  <circle cx="100" cy="100" r="80" strokeDasharray="6,6" />
                  <circle cx="100" cy="100" r="60" strokeDasharray="4,4" />
                  <circle cx="100" cy="100" r="40" strokeDasharray="2,2" />
                  <circle cx="100" cy="100" r="20" />
                </svg>
              </div>

              {/* North Indian Kundali Chart Diamond Vector Overlay in Upper Right */}
              <div className="absolute top-10 right-4 w-44 h-44 opacity-35 pointer-events-none">
                <svg viewBox="0 0 100 100" className="w-full h-full stroke-[#6b2e13] fill-none" strokeWidth="0.8">
                  {/* Outer Square */}
                  <rect x="2" y="2" width="96" height="96" />
                  {/* Inner Diamond */}
                  <polygon points="50,2 98,50 50,98 2,50" />
                  {/* Diagonals */}
                  <line x1="2" y1="2" x2="98" y2="98" />
                  <line x1="98" y1="2" x2="2" y2="98" />
                  {/* House numbers in subtle script */}
                  <text x="50" y="32" fontSize="5" fill="#6b2e13" textAnchor="middle">1</text>
                  <text x="32" y="22" fontSize="5" fill="#6b2e13" textAnchor="middle">2</text>
                  <text x="18" y="36" fontSize="5" fill="#6b2e13" textAnchor="middle">3</text>
                  <text x="32" y="50" fontSize="5" fill="#6b2e13" textAnchor="middle">4</text>
                  <text x="18" y="66" fontSize="5" fill="#6b2e13" textAnchor="middle">5</text>
                  <text x="32" y="80" fontSize="5" fill="#6b2e13" textAnchor="middle">6</text>
                  <text x="50" y="68" fontSize="5" fill="#6b2e13" textAnchor="middle">7</text>
                  <text x="68" y="80" fontSize="5" fill="#6b2e13" textAnchor="middle">8</text>
                  <text x="82" y="66" fontSize="5" fill="#6b2e13" textAnchor="middle">9</text>
                  <text x="68" y="50" fontSize="5" fill="#6b2e13" textAnchor="middle">10</text>
                  <text x="82" y="36" fontSize="5" fill="#6b2e13" textAnchor="middle">11</text>
                  <text x="68" y="22" fontSize="5" fill="#6b2e13" textAnchor="middle">12</text>
                </svg>
              </div>

              {/* Zodiac Constellation Glyphs in background */}
              <div className="absolute top-1/2 left-6 text-[#7a3b1a]/25 text-lg font-serif pointer-events-none select-none">
                ♉ ♊ ♋ ♌ ♍
              </div>
              <div className="absolute top-1/3 right-10 text-[#7a3b1a]/25 text-lg font-serif pointer-events-none select-none">
                ♎ ♏ ♐ ♑
              </div>

              {/* Golden Staircase to City Sky and Walking Silhouette in Mid-Left */}
              <div className="absolute left-6 bottom-24 w-40 h-52 pointer-events-none opacity-85">
                <svg viewBox="0 0 160 200" className="w-full h-full fill-none">
                  {/* Modern City Skyline Background */}
                  <rect x="60" y="50" width="18" height="90" fill="#a4784a" opacity="0.3" />
                  <rect x="80" y="30" width="22" height="110" fill="#a4784a" opacity="0.4" />
                  <rect x="104" y="60" width="20" height="80" fill="#a4784a" opacity="0.3" />
                  <polygon points="91,15 80,30 102,30" fill="#a4784a" opacity="0.5" />

                  {/* Golden Ascending Stairs */}
                  <path
                    d="M10 180 L30 180 L30 160 L50 160 L50 140 L70 140 L70 120 L90 120 L90 100 L110 100"
                    stroke="#b37f40"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  {/* Upward Career Growth Arrow */}
                  <path
                    d="M15 185 Q 60 170 120 70"
                    stroke="#c68a35"
                    strokeWidth="2.5"
                    strokeDasharray="4,4"
                  />
                  <polygon points="120,64 125,75 114,75" fill="#c68a35" />

                  {/* Ascending Professional Silhouette */}
                  <circle cx="70" cy="100" r="3.5" fill="#2d160c" />
                  <path d="M68 104 L72 104 L74 116 L66 116 Z" fill="#2d160c" />
                  <line x1="68" y1="116" x2="66" y2="124" stroke="#2d160c" strokeWidth="2" />
                  <line x1="72" y1="116" x2="74" y2="124" stroke="#2d160c" strokeWidth="2" />
                </svg>
              </div>

              {/* Poster Heading */}
              <div className="relative z-10 space-y-1">
                <h3 className="font-serif-display text-2xl sm:text-3xl font-extrabold text-[#381607] tracking-tight">
                  {posters[imageIndex].title}
                </h3>
                <p className="text-xs sm:text-[13px] font-semibold text-[#733516] max-w-[240px]">
                  {posters[imageIndex].subtitle}
                </p>
              </div>

              {/* Acharya Ganesh Portrait with Namaste Pose on Bottom Right */}
              <div className="relative z-10 self-end mt-auto pt-6 flex flex-col items-center">
                <div className="relative w-44 sm:w-52 h-48 sm:h-56">
                  {/* Glowing background halo */}
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-300/60 to-transparent rounded-full blur-xl pointer-events-none" />
                  
                  {/* Guru Image in Authentic Traditional Attire */}
                  <img
                    src={posters[imageIndex].guruImage}
                    alt="Acharya Ganesh (Hanish Bagga)"
                    className="w-full h-full object-cover object-top rounded-2xl drop-shadow-2xl"
                  />

                  {/* Sacred Namaste Overlaid Badge */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#381607]/90 text-amber-200 text-[10px] font-bold border border-amber-500/30 whitespace-nowrap shadow-lg backdrop-blur-sm">
                    Acharya Ganesh
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
