import React from 'react';
import {
  GraduationCap,
  Briefcase,
  Trophy,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Compass
} from 'lucide-react';

interface VedicCareerStagesProps {
  onOpenBooking: (tier?: any) => void;
}

export const VedicCareerStages: React.FC<VedicCareerStagesProps> = ({ onOpenBooking }) => {
  const stageCards = [
    {
      step: 'STAGE 01',
      stageName: 'Early Career & College',
      icon: GraduationCap,
      badge: 'STUDENTS & GRADUATES',
      title: 'Career Path & Suitable Profession Analysis',
      subtitle: 'Identify Your Natural Karmic Blueprint & Core Strengths',
      description:
        'Discover ideal academic streams, natural talents, and whether government service (UPSC/PCS) or private corporate aligns with your planetary combinations.',
      points: [
        'Ideal vocational sectors: Tech, Finance, Civil Services, or Creative',
        'Government job feasibility vs. High-growth private corporate track',
        'Higher education choices: Specialized Master’s, MBA, or Overseas Studies',
        'Auspicious timing for placements, first offers, and internships'
      ],
      remedyFocus: 'Mercury & Saraswati alignment for mental clarity, competitive edge, and interview confidence.',
      btnText: 'Book Early Career Reading',
      tier: 'foundation',
      highlight: false
    },
    {
      step: 'STAGE 02',
      stageName: 'Mid-Level & Acceleration',
      icon: Briefcase,
      badge: 'MID-LEVEL PROFESSIONALS',
      title: 'Job Switch, Appraisal & Workplace Politics',
      subtitle: 'Navigate Critical Career Crossroads & Compensation Hikes',
      description:
        'Pinpoint exact Dasha transition windows to switch jobs, negotiate substantial salary hikes, overcome toxic managers, and avoid career stagnation traps.',
      points: [
        'Precise timing (month & year) for job change & new offer letters',
        'Appraisal negotiation potential & equity/salary maximization',
        'Protection against sudden layoffs during malefic planetary transits',
        'Resolution strategies for toxic office politics and delayed promotions'
      ],
      remedyFocus: 'Saturn & Sun propitiation for professional stability, executive favor, and smooth transitions.',
      btnText: 'Book Mid-Career Analysis',
      tier: 'executive',
      highlight: true
    },
    {
      step: 'STAGE 03',
      stageName: 'Executive & Business Growth',
      icon: Trophy,
      badge: 'SENIOR LEADERS & FOUNDERS',
      title: 'Promotions, Salary Growth & Leadership Prospects',
      subtitle: 'Achieve C-Suite Elevation, Global Mobility & Business Success',
      description:
        'Unlock C-suite elevation, international relocation, or transition securely from corporate employment into high-potential entrepreneurship.',
      points: [
        'Timing for VP, Director, and Partner elevation via D10 Dashamsha',
        'Feasibility & auspicious timing to launch a startup or venture',
        'Global mobility: International relocation, visas, and overseas opportunities',
        'Maintaining corporate authority, market reputation (Kirti), and revenue flow'
      ],
      remedyFocus: 'Jupiter & 10th Lord empowerment for long-term wealth, authority, and industry stature.',
      btnText: 'Book Executive Session',
      tier: 'strategic',
      highlight: false
    }
  ];

  return (
    <section
      id="career-stages-guidance"
      className="py-7 sm:py-9 bg-[#FBF7F2] text-stone-800 border-b border-[#E9DACB] relative overflow-hidden"
    >
      {/* Background Sacred Geometric Pattern */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #6B2E13 1px, transparent 1px)',
          backgroundSize: '28px 28px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#EFE3D3] border border-[#DFCBB7] text-xs font-semibold text-[#6B2E13] mb-2.5 shadow-sm">
            <Compass className="w-3.5 h-3.5 text-[#B87A38]" />
            <span className="uppercase tracking-wider">LIFETIME VEDIC CAREER ROADMAP</span>
          </div>

          <h2 className="font-serif-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#23120A] tracking-tight leading-tight">
            Vedic Career Guidance for Every Stage
          </h2>
        </div>

        {/* 3-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {stageCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative bg-white border ${
                  card.highlight
                    ? 'border-amber-500/80 shadow-xl shadow-amber-950/10 ring-2 ring-amber-400/30 -translate-y-1'
                    : 'border-[#EADBCA] shadow-md hover:shadow-lg hover:border-amber-400/50'
                }`}
              >
                {/* Popular Stage Tag if highlight */}
                {card.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold text-[10px] uppercase tracking-wider shadow-md flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-amber-200" />
                    <span>Most Popular Consultation</span>
                  </div>
                )}

                <div>
                  {/* Top Header Row */}
                  <div className="flex items-center justify-between gap-3 pb-4 mb-4 border-b border-[#F0E4D6]">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-2xl bg-[#F6EFE6] border border-[#E8D6C3] flex items-center justify-center text-[#6B2E13] shadow-sm flex-shrink-0">
                        <Icon className="w-5 h-5 stroke-[1.8]" />
                      </div>
                      <div>
                        <span className="font-mono-code text-[11px] font-bold text-[#9C5A24] tracking-wider uppercase block">
                          {card.step}
                        </span>
                        <span className="text-xs font-bold text-stone-800">
                          {card.stageName}
                        </span>
                      </div>
                    </div>

                    <span className="px-2.5 py-1 rounded-md text-[9px] font-bold uppercase tracking-wider bg-[#F3E5D4] text-[#6B2E13] border border-[#E6D1BB]">
                      {card.badge}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-serif-display text-lg sm:text-xl font-bold text-[#23120A] leading-snug mb-1">
                    {card.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#8A491D] mb-3">
                    {card.subtitle}
                  </p>

                  <p className="text-xs text-stone-600 leading-relaxed font-normal mb-5">
                    {card.description}
                  </p>

                  {/* What is resolved checklist */}
                  <div className="space-y-2 mb-5">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#6B2E13] flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                      <span>Key Questions Resolved:</span>
                    </div>
                    {card.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs text-stone-700 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0 mt-1.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA Button */}
                <div className="pt-4 border-t border-[#F0E4D6]">
                  <button
                    type="button"
                    onClick={() => onOpenBooking(card.tier)}
                    className={`w-full py-3 px-4 rounded-xl font-bold text-xs tracking-wider uppercase active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm ${
                      card.highlight
                        ? 'text-amber-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-200 border border-amber-500/40 shadow-amber-900/10'
                        : 'text-[#3D1A0C] bg-[#F4E6D6] hover:bg-[#EAD9C6] border border-[#DFCBB5]'
                    }`}
                  >
                    <span>{card.btnText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};


