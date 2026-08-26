import React from 'react';
import {
  GraduationCap,
  Briefcase,
  Trophy,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

interface VedicCareerStagesProps {
  onOpenBooking: (tier?: any) => void;
}

export const VedicCareerStages: React.FC<VedicCareerStagesProps> = ({ onOpenBooking }) => {
  const stageCards = [
    {
      icon: GraduationCap,
      badge: 'STUDENTS & EARLY PROFESSIONALS',
      title: 'Career Path & Suitable Profession Analysis',
      description:
        'Identify natural karmic talents, ideal academic streams, and whether government or private corporate matches your birth chart.',
      points: [
        'Identification of ideal career sector (Tech, Finance, Law, Civil Services, Creative)',
        'Government job feasibility (UPSC / State PCS / PSU) vs Private corporate track',
        'Guidance on higher studies abroad vs domestic MBA / MS specialization',
        'Auspicious timing for campus placements, first job offers, and internships'
      ],
      btnText: 'SCHEDULE CAREER ENTRY READING',
      tier: 'foundation'
    },
    {
      icon: Briefcase,
      badge: 'MID-LEVEL PROFESSIONALS',
      title: 'Job Change, Employment & Competition Analysis',
      description:
        'Pinpoint precise Dasha transitions to switch companies, negotiate substantial compensation hikes, and avoid bad transitions.',
      points: [
        'Precise timing (month & year) for submitting resignations and joining new firms',
        'Analysis of job stability vs sudden layoff risks during malefic transits',
        'Salary increment potential & stock options (11th & 2nd house activation)',
        'Overcoming toxic workplace politics, difficult managers, and promotion stalls'
      ],
      btnText: 'ANALYZE JOB SWITCH TIMING',
      tier: 'executive'
    },
    {
      icon: Trophy,
      badge: 'SENIOR LEADERS & ENTREPRENEURS',
      title: 'Promotions, Salary Growth & Recognition Prospects',
      description:
        'Unlock C-suite elevation, board appointments, international relocation, or transition smoothly into high-growth entrepreneurship.',
      points: [
        'Timing for Director, VP, and Partner promotions with D10 Dashamsha mapping',
        'Feasibility of launching your own startup / venture vs staying in corporate',
        'Foreign visa approval, green card timelines, and international deputations',
        'Remedies for maintaining authority, reputation (Kirti), and business cash flow'
      ],
      btnText: 'CONSULT ON LEADERSHIP & BUSINESS',
      tier: 'strategic'
    }
  ];

  return (
    <section
      id="career-stages-guidance"
      className="py-16 lg:py-24 bg-[#FBF7F2] text-stone-800 relative overflow-hidden border-b border-[#E9DACB]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#23120A] tracking-tight leading-[1.2]">
            Vedic Career Guidance for Every Stage of Your Professional Journey
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-stone-600 font-normal leading-relaxed">
            From choosing a suitable profession to navigating job transitions, promotions, or foreign career moves, Vedic Astrology provides precision timing for every career milestone.
          </p>
        </div>

        {/* 3 Career Stage Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
          {stageCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-[#EADBCA] p-6 sm:p-7 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Top Row: Icon and Badge */}
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <div className="w-11 h-11 rounded-xl bg-[#F6EFE6] border border-[#E8D6C3] flex items-center justify-center text-[#6B2E13] flex-shrink-0">
                      <Icon className="w-5 h-5 stroke-[1.8]" />
                    </div>

                    <span className="px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-bold tracking-wider uppercase bg-[#F6EFE6] text-[#7A3617] border border-[#E5D2BE] whitespace-nowrap">
                      {card.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif-display text-lg sm:text-xl font-bold text-[#23120A] leading-snug mb-3">
                    {card.title}
                  </h3>

                  {/* Subtitle / Intro */}
                  <p className="text-xs sm:text-[13px] text-stone-600 leading-relaxed font-normal mb-5">
                    {card.description}
                  </p>

                  {/* Points with checkmarks */}
                  <div className="space-y-3 pt-4 border-t border-stone-100">
                    {card.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5 text-xs text-stone-700 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-[#B87A38] flex-shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Button */}
                <div className="pt-6 mt-6 border-t border-stone-100">
                  <button
                    type="button"
                    onClick={() => onOpenBooking(card.tier)}
                    className="w-full py-3 px-4 rounded-xl font-bold text-[11px] sm:text-xs tracking-wider uppercase text-[#542510] bg-[#F5ECE1] hover:bg-[#EBDCC9] border border-[#DFCBB5] active:scale-[0.99] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>{card.btnText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
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
