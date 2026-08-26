import React from 'react';
import studentImg from '../assets/images/career_stage_student_1787736478837.jpg';
import stairsImg from '../assets/images/career_stage_stairs_1787736495503.jpg';
import executiveImg from '../assets/images/career_stage_executive_1787736510021.jpg';
import {
  Users,
  ShieldCheck,
  Star,
  Tv,
  Award,
  ArrowRight,
  HelpCircle,
  CheckCircle2,
  Calendar,
  Sparkles,
  User,
  GraduationCap,
  Briefcase,
  Trophy,
  Building2,
  Crown,
  Rocket
} from 'lucide-react';

interface VedicCareerStagesProps {
  onOpenBooking: (tier?: any) => void;
}

export const VedicCareerStages: React.FC<VedicCareerStagesProps> = ({ onOpenBooking }) => {
  const stageCards = [
    {
      id: 'stage-01',
      step: 'STAGE 01',
      stageName: 'Early Career &\nCollege',
      badge: 'STUDENTS & GRADUATES',
      image: studentImg,
      themeColor: 'blue',
      topNodeColor: 'bg-blue-400 border-blue-300 shadow-[0_0_12px_#38bdf8]',
      cardBg: 'bg-[#091122]/95 border-blue-500/50 shadow-[0_0_35px_rgba(56,189,248,0.12)]',
      badgeStyle: 'text-blue-300 bg-blue-950/70 border-blue-500/40',
      audienceBadge: 'bg-blue-950/80 border-blue-500/40 text-blue-200',
      title: 'Career Path & Suitable Profession Analysis',
      subtitle: 'Identify Your Natural Karmic Blueprint & Core Strengths',
      subColor: 'text-sky-400',
      description:
        'Discover ideal academic streams, natural talents, and whether government service (UPSC/PCS) or private corporate aligns with your planetary combinations.',
      headingResolvedColor: 'text-sky-400',
      checkColor: 'text-sky-400',
      points: [
        'Ideal vocational sectors: Tech, Finance, Civil Services, or Creative',
        'Government job feasibility vs. High-growth private corporate track',
        'Higher education choices: Specialized Master’s, MBA, or Overseas Studies',
        'Auspicious timing for placements, first offers, and competitive exam success'
      ],
      perfectForLabel: 'text-sky-400',
      perfectForItems: [
        { label: 'Students', icon: User },
        { label: 'Freshers', icon: GraduationCap },
        { label: 'Graduates', icon: Award },
        { label: 'UPSC Aspirants', icon: Building2 }
      ],
      btnGradient:
        'bg-gradient-to-r from-cyan-500 via-blue-600 to-blue-700 hover:from-cyan-400 hover:to-blue-600 text-white shadow-lg shadow-blue-500/25 border border-cyan-400/30',
      tier: 'foundation',
      highlight: false
    },
    {
      id: 'stage-02',
      step: 'STAGE 02',
      stageName: 'Mid-Level &\nAcceleration',
      badge: 'MID-LEVEL PROFESSIONALS',
      image: stairsImg,
      themeColor: 'purple',
      topNodeColor: 'bg-fuchsia-400 border-fuchsia-300 shadow-[0_0_15px_#e879f9]',
      cardBg: 'bg-[#140b22]/95 border-fuchsia-500/70 shadow-[0_0_40px_rgba(217,70,239,0.22)] ring-1 ring-fuchsia-500/30',
      badgeStyle: 'text-fuchsia-300 bg-fuchsia-950/70 border-fuchsia-500/40',
      audienceBadge: 'bg-fuchsia-950/80 border-fuchsia-500/40 text-fuchsia-200',
      title: 'Job Switch, Appraisal & Workplace Politics',
      subtitle: 'Navigate Critical Career Crossroads & Compensation Hikes',
      subColor: 'text-fuchsia-400',
      description:
        'Pinpoint exact Dasha transition windows to switch jobs, negotiate substantial salary hikes, overcome toxic managers, and avoid career stagnation traps.',
      headingResolvedColor: 'text-fuchsia-400',
      checkColor: 'text-fuchsia-400',
      points: [
        'Precise timing (month & year) for job change & new offer letters',
        'Appraisal negotiation potential & equity/salary maximization',
        'Protection against sudden layoffs during malefic planetary transits',
        'Resolution strategies for toxic office politics and conflicts'
      ],
      perfectForLabel: 'text-fuchsia-400',
      perfectForItems: [
        { label: 'Employees', icon: User },
        { label: 'Managers', icon: Briefcase },
        { label: 'Team Leads', icon: Users },
        { label: 'Professionals', icon: Trophy }
      ],
      btnGradient:
        'bg-gradient-to-r from-fuchsia-600 via-pink-600 to-rose-600 hover:from-fuchsia-500 hover:to-pink-500 text-white shadow-lg shadow-fuchsia-500/30 border border-pink-400/40',
      tier: 'executive',
      highlight: true
    },
    {
      id: 'stage-03',
      step: 'STAGE 03',
      stageName: 'Executive &\nBusiness Growth',
      badge: 'SENIOR LEADERS & FOUNDERS',
      image: executiveImg,
      themeColor: 'amber',
      topNodeColor: 'bg-amber-400 border-amber-300 shadow-[0_0_12px_#fbbf24]',
      cardBg: 'bg-[#181208]/95 border-amber-500/50 shadow-[0_0_35px_rgba(245,158,11,0.15)]',
      badgeStyle: 'text-amber-300 bg-amber-950/70 border-amber-500/40',
      audienceBadge: 'bg-amber-950/80 border-amber-500/40 text-amber-200',
      title: 'Promotions, Salary Growth & Leadership Prospects',
      subtitle: 'Achieve C-Suite Elevation, Global Mobility & Business Success',
      subColor: 'text-amber-400',
      description:
        'Unlock C-suite elevation, international relocation, or transition securely from corporate employment into high-potential entrepreneurship.',
      headingResolvedColor: 'text-amber-400',
      checkColor: 'text-amber-400',
      points: [
        'Timing for VP, Director, and Partner elevation via D10 Dashamsha',
        'Feasibility & auspicious timing to launch or expand business venture',
        'Global mobility: International transfer, settlement & overseas opportunities',
        'Maintaining work-life balance & sustained reputation'
      ],
      perfectForLabel: 'text-amber-400',
      perfectForItems: [
        { label: 'Executives', icon: Users },
        { label: 'Business Owners', icon: Building2 },
        { label: 'CEOs', icon: Crown },
        { label: 'Founders', icon: Rocket }
      ],
      btnGradient:
        'bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-stone-950 shadow-lg shadow-amber-500/25 border border-yellow-300/40 font-black',
      tier: 'strategic',
      highlight: false
    }
  ];

  return (
    <section
      id="career-stages-guidance"
      className="py-12 sm:py-16 bg-[#050811] text-white border-y border-stone-800/80 relative overflow-hidden"
    >
      {/* Background Cosmic Starfield Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-indigo-900/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-[44px] font-bold text-white tracking-tight leading-tight">
            Vedic Career Guidance for <span className="text-amber-400">Every Stage</span>
          </h2>
          <p className="text-sm sm:text-base text-stone-300/90 font-normal mt-2.5 max-w-2xl mx-auto">
            Personalized astrology solutions to help you make the right career moves at the right time.
          </p>
        </div>

        {/* 3 Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8 items-stretch mb-12">
          {stageCards.map((card) => {
            return (
              <div
                key={card.id}
                className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative border ${card.cardBg} backdrop-blur-md hover:-translate-y-1`}
              >
                {/* Top Node Indicator */}
                <div
                  className={`absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 ${card.topNodeColor} z-20`}
                />

                {/* Popular Floating Tag if highlight */}
                {card.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-600 to-purple-600 text-white font-extrabold text-[11px] uppercase tracking-wider shadow-lg shadow-fuchsia-950/60 flex items-center gap-1 z-30 whitespace-nowrap">
                    <Sparkles className="w-3.5 h-3.5 text-pink-200 fill-pink-200" />
                    <span>MOST POPULAR</span>
                  </div>
                )}

                <div>
                  {/* Top Split: Title/Stage Info on Left & Cosmic Illustration on Right */}
                  <div className="flex items-start justify-between gap-3 pb-5 mb-5 border-b border-stone-800/80">
                    <div className="space-y-2 flex-1">
                      {/* Step Tag */}
                      <span
                        className={`inline-block text-[11px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded border ${card.badgeStyle}`}
                      >
                        {card.step}
                      </span>

                      {/* Stage Name */}
                      <h3 className="font-serif-display text-xl sm:text-[22px] font-bold text-white leading-tight whitespace-pre-line">
                        {card.stageName}
                      </h3>

                      {/* Audience Badge */}
                      <div
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${card.audienceBadge}`}
                      >
                        <User className="w-3 h-3 flex-shrink-0" />
                        <span>{card.badge}</span>
                      </div>
                    </div>

                    {/* Artwork Graphic Frame */}
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden flex-shrink-0 border border-white/10 shadow-lg relative bg-black/40">
                      <img
                        src={card.image}
                        alt={card.stageName}
                        className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                    </div>
                  </div>

                  {/* Card Main Title & Subtitle */}
                  <div className="space-y-1 mb-3">
                    <h4 className="font-serif-display text-lg sm:text-[19px] font-bold text-white leading-snug">
                      {card.title}
                    </h4>
                    <p className={`text-xs font-semibold ${card.subColor}`}>
                      {card.subtitle}
                    </p>
                  </div>

                  {/* Paragraph Description */}
                  <p className="text-xs text-stone-300/85 leading-relaxed font-normal mb-5">
                    {card.description}
                  </p>

                  {/* Key Questions Resolved Checklist */}
                  <div className="space-y-2.5 mb-6">
                    <div
                      className={`text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5 ${card.headingResolvedColor}`}
                    >
                      <HelpCircle className="w-3.5 h-3.5" />
                      <span>KEY QUESTIONS RESOLVED:</span>
                    </div>

                    <div className="space-y-2">
                      {card.points.map((pt, pIdx) => (
                        <div
                          key={pIdx}
                          className="flex items-start gap-2 text-xs text-stone-300 leading-relaxed"
                        >
                          <CheckCircle2
                            className={`w-4 h-4 ${card.checkColor} flex-shrink-0 mt-0.5 fill-current/20`}
                          />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Perfect For Sub-Section with Dotted Divider */}
                  <div className="pt-3 pb-4">
                    <div className="relative flex py-2 items-center">
                      <div className="flex-grow border-t border-dotted border-stone-700/80"></div>
                      <span
                        className={`flex-shrink mx-3 text-[10px] font-bold uppercase tracking-wider ${card.perfectForLabel}`}
                      >
                        Perfect For
                      </span>
                      <div className="flex-grow border-t border-dotted border-stone-700/80"></div>
                    </div>

                    {/* Persona Icons */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2">
                      {card.perfectForItems.map((item, iIdx) => {
                        const ItemIcon = item.icon;
                        return (
                          <div
                            key={iIdx}
                            className="flex items-center justify-center gap-1 px-1.5 py-1 rounded-lg bg-white/[0.04] border border-white/5 text-[10px] text-stone-300 text-center font-medium"
                          >
                            <ItemIcon className="w-3 h-3 text-stone-400 flex-shrink-0" />
                            <span className="truncate">{item.label}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Bottom CTA Button */}
                <div className="pt-4 border-t border-stone-800/80">
                  <button
                    type="button"
                    onClick={() => onOpenBooking(card.tier)}
                    className={`w-full py-3 px-4 rounded-xl font-bold text-xs tracking-wider uppercase active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer ${card.btnGradient}`}
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Explore &amp; Book Consultation</span>
                    <ArrowRight className="w-4 h-4 ml-0.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Trust & Stats Ribbon */}
        <div className="bg-[#09101E]/90 border border-stone-800/90 rounded-2xl p-4 sm:p-5 shadow-2xl backdrop-blur-md">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-2 divide-y md:divide-y-0 md:divide-x divide-stone-800/80">
            
            {/* Stat 1: 50,000+ Happy Clients */}
            <div className="flex items-center gap-3 justify-center pt-2 md:pt-0">
              <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shadow-sm flex-shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="font-serif-display text-lg sm:text-xl font-bold text-white leading-none">
                  50,000+
                </div>
                <div className="text-[11px] text-stone-400 font-medium mt-1">
                  Happy Clients
                </div>
              </div>
            </div>

            {/* Stat 2: 98% Accuracy & Trust */}
            <div className="flex items-center gap-3 justify-center pt-2 md:pt-0">
              <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shadow-sm flex-shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="font-serif-display text-lg sm:text-xl font-bold text-white leading-none">
                  98%
                </div>
                <div className="text-[11px] text-stone-400 font-medium mt-1">
                  Accuracy &amp; Trust
                </div>
              </div>
            </div>

            {/* Stat 3: 4.9/5 Google Rating */}
            <div className="flex items-center gap-3 justify-center pt-2 md:pt-0">
              <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shadow-sm flex-shrink-0">
                <Star className="w-5 h-5 fill-amber-400" />
              </div>
              <div className="text-left">
                <div className="font-serif-display text-lg sm:text-xl font-bold text-white leading-none">
                  4.9/5
                </div>
                <div className="text-[11px] text-stone-400 font-medium mt-1">
                  Google Rating
                </div>
              </div>
            </div>

            {/* Stat 4: 10K+ TV Shows & Media */}
            <div className="flex items-center gap-3 justify-center pt-2 md:pt-0">
              <div className="w-11 h-11 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shadow-sm flex-shrink-0">
                <Tv className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="font-serif-display text-lg sm:text-xl font-bold text-white leading-none">
                  10K+
                </div>
                <div className="text-[11px] text-stone-400 font-medium mt-1">
                  TV Shows &amp; Media
                </div>
              </div>
            </div>

            {/* Stat 5: 17+ Years Experience */}
            <div className="flex items-center gap-3 justify-center pt-2 md:pt-0 col-span-2 md:col-span-1">
              <div className="w-11 h-11 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 shadow-sm flex-shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="font-serif-display text-lg sm:text-xl font-bold text-white leading-none">
                  17+
                </div>
                <div className="text-[11px] text-stone-400 font-medium mt-1">
                  Years Experience
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
