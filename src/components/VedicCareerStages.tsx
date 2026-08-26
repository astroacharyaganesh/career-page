import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react';
import {
  GraduationCap,
  Briefcase,
  Trophy,
  Landmark,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Compass,
  Star,
  BookOpen,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

interface VedicCareerStagesProps {
  onOpenBooking: (tier?: any) => void;
}

export const VedicCareerStages: React.FC<VedicCareerStagesProps> = ({ onOpenBooking }) => {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [direction, setDirection] = useState<number>(1); // 1 = flip forward, -1 = flip back
  const containerRef = useRef<HTMLDivElement>(null);

  const stageCards = [
    {
      step: 'STAGE 01',
      stageName: 'Early Career & Academic Foundations',
      icon: GraduationCap,
      badge: 'STUDENTS & GRADUATES',
      title: 'Career Path & Suitable Profession Analysis',
      subtitle: 'Identify Your Natural Karmic Blueprint & Core Strengths',
      metaLabel: 'Early Phase is Influenced by Mercury, Moon & 5th House of Education',
      description:
        'Discover ideal academic streams, natural talents, and whether government competitive exams (UPSC/State PSC) or private corporate aligns with your planetary combinations.',
      points: [
        'Ideal vocational sectors: Technology, Finance, Civil Services, or Creative',
        'Government job feasibility vs. High-growth private corporate career track',
        'Higher education choices: Specialized Master’s, MBA, or Overseas Studies',
        'Auspicious timing for campus placements, first job offers, and internships'
      ],
      remedyFocus: 'Mercury & Saraswati alignment for razor-sharp intellect, competitive exam success, and interview confidence.',
      btnText: 'Book Early Career Reading',
      tier: 'foundation',
      highlight: false
    },
    {
      step: 'STAGE 02',
      stageName: 'Mid-Level & Career Acceleration',
      icon: Briefcase,
      badge: 'MID-LEVEL PROFESSIONALS',
      title: 'Job Switch, Appraisal & Workplace Dynamics',
      subtitle: 'Navigate Critical Career Crossroads & Compensation Hikes',
      metaLabel: 'Mid-Career is Driven by Saturn, Sun & 10th House Dasha Transitions',
      description:
        'Pinpoint exact Dasha transition windows to switch jobs, negotiate substantial salary hikes, overcome toxic managers, and avoid career stagnation traps.',
      points: [
        'Precise timing (month & year) for job change & evaluating new offer letters',
        'Appraisal negotiation potential & equity/salary maximization strategies',
        'Protection against sudden layoffs during malefic planetary transit cycles',
        'Resolution strategies for toxic office politics and delayed promotions'
      ],
      remedyFocus: 'Saturn & Sun propitiation for professional stability, executive favor, and smooth career transitions.',
      btnText: 'Book Mid-Career Analysis',
      tier: 'executive',
      highlight: true
    },
    {
      step: 'STAGE 03',
      stageName: 'Executive & Business Growth',
      icon: Trophy,
      badge: 'SENIOR LEADERS & FOUNDERS',
      title: 'Promotions, Leadership Prospects & Global Mobility',
      subtitle: 'Achieve C-Suite Elevation, Global Mobility & Business Success',
      metaLabel: 'Leadership Phase is Governed by Jupiter, Mars & D10 Dashamsha Authority',
      description:
        'Unlock C-suite elevation, international relocation, or transition securely from corporate employment into high-potential entrepreneurship.',
      points: [
        'Timing for VP, Director, and Partner elevation through D10 Dashamsha analysis',
        'Feasibility & auspicious muhurat to launch a startup, venture, or partnership',
        'Global mobility: International relocation, visas, and overseas opportunities',
        'Maintaining corporate authority, market reputation (Kirti), and sustained cash flow'
      ],
      remedyFocus: 'Jupiter & 10th Lord empowerment for long-term wealth, authority, and industry stature.',
      btnText: 'Book Executive Session',
      tier: 'strategic',
      highlight: false
    },
    {
      step: 'STAGE 04',
      stageName: 'Wealth Legacy & Advisory Roles',
      icon: Landmark,
      badge: 'SEASONED LEADERS & CONSULTANTS',
      title: 'Second Innings, Board Advisory & Wealth Preservation',
      subtitle: 'Transition to Board Advisory, Angel Investing & Mentorship',
      metaLabel: 'Legacy Phase is Guided by 9th & 11th House Dharma & Karma Fruition',
      description:
        'Structure your professional second innings with advisory positions, board seats, independent consulting, and multi-generational wealth preservation.',
      points: [
        'Transition roadmap from full-time executive operational roles to independent advisory',
        'Optimal sectors for angel investing, board positions, and family office ventures',
        'Karma realignment to share accumulated wisdom and mentor the next generation',
        'Planetary safeguards for long-term capital preservation and asset security'
      ],
      remedyFocus: 'Ketu & 9th House Dharma alignment for purposeful legacy, inner peace, and philanthropic impact.',
      btnText: 'Book Legacy & Advisory Reading',
      tier: 'strategic',
      highlight: false
    }
  ];

  const totalPages = stageCards.length;

  // Scroll tracking to trigger page flips automatically while scrolling through the section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    // Map 0 -> 1 progress into 0 -> totalPages - 1
    const newIdx = Math.min(totalPages - 1, Math.max(0, Math.floor(latest * totalPages * 0.999)));
    if (newIdx !== activeIdx) {
      setDirection(newIdx > activeIdx ? 1 : -1);
      setActiveIdx(newIdx);
    }
  });

  const goToPage = (newIdx: number) => {
    if (newIdx < 0 || newIdx >= totalPages || newIdx === activeIdx) return;
    setDirection(newIdx > activeIdx ? 1 : -1);
    setActiveIdx(newIdx);
  };

  const handleNext = () => {
    if (activeIdx < totalPages - 1) {
      setDirection(1);
      setActiveIdx(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (activeIdx > 0) {
      setDirection(-1);
      setActiveIdx(prev => prev - 1);
    }
  };

  // 3D Realistic Book Paper Flip Variants
  const bookPageVariants = {
    initial: (dir: number) => ({
      rotateY: dir > 0 ? 85 : -85,
      opacity: 0,
      scale: 0.96,
      x: dir > 0 ? 30 : -30,
      transformOrigin: dir > 0 ? 'left center' : 'right center',
      boxShadow: dir > 0 
        ? '-20px 20px 40px rgba(45, 20, 10, 0.3)' 
        : '20px 20px 40px rgba(45, 20, 10, 0.3)'
    }),
    animate: {
      rotateY: 0,
      opacity: 1,
      scale: 1,
      x: 0,
      transformOrigin: 'left center',
      boxShadow: '0 20px 45px -10px rgba(45, 20, 10, 0.15), 0 2px 10px rgba(0,0,0,0.06)',
      transition: {
        duration: 0.65,
        ease: [0.25, 1, 0.5, 1]
      }
    },
    exit: (dir: number) => ({
      rotateY: dir > 0 ? -85 : 85,
      opacity: 0,
      scale: 0.96,
      x: dir > 0 ? -30 : 30,
      transformOrigin: dir > 0 ? 'left center' : 'right center',
      boxShadow: dir > 0 
        ? '20px 20px 40px rgba(45, 20, 10, 0.25)' 
        : '-20px 20px 40px rgba(45, 20, 10, 0.25)',
      transition: {
        duration: 0.5,
        ease: [0.25, 1, 0.5, 1]
      }
    })
  };

  const currentCard = stageCards[activeIdx];
  const Icon = currentCard.icon;

  return (
    <section
      id="career-stages-guidance"
      ref={containerRef}
      className="relative bg-[#FBF7F2] text-stone-800 border-b border-[#E9DACB] overflow-visible"
      style={{ minHeight: '220vh' }}
    >
      {/* Background Sacred Geometric Pattern */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #6B2E13 1px, transparent 1px)',
          backgroundSize: '28px 28px'
        }}
      />

      {/* Sticky Book Showcase Container */}
      <div className="sticky top-16 sm:top-20 z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 flex flex-col justify-center">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-4 sm:mb-6">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#EFE3D3] border border-[#DFCBB7] text-xs font-semibold text-[#6B2E13] mb-2 shadow-sm">
            <BookOpen className="w-3.5 h-3.5 text-[#B87A38]" />
            <span className="uppercase tracking-wider">VEDIC CAREER GRANTH • 4 LIFE STAGES</span>
          </div>

          <h2 className="font-serif-display text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#23120A] tracking-tight leading-tight mb-1.5">
            Vedic Career Guidance for Every Stage
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 max-w-2xl mx-auto">
            Scroll or turn the pages to explore customized astrological roadmaps formulated for each career phase.
          </p>
        </div>

        {/* Interactive Book Chapter Tabs */}
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-4 sm:mb-5 overflow-x-auto py-1 scrollbar-none">
          {stageCards.map((card, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => goToPage(idx)}
              className={`px-3 sm:px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-wide transition-all duration-300 flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                activeIdx === idx
                  ? 'bg-[#6B2E13] text-amber-100 shadow-md ring-2 ring-amber-500/40 scale-105'
                  : 'bg-[#EFE3D3]/70 text-stone-700 hover:bg-[#EAE0D2] border border-[#DFCBB7]'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span>{card.step}</span>
              <span className="hidden md:inline font-normal opacity-90">({card.stageName.split('&')[0].trim()})</span>
            </button>
          ))}
        </div>

        {/* 3D Book Stage Wrapper with Perspective */}
        <div
          className="relative w-full max-w-4xl mx-auto"
          style={{ perspective: '1400px' }}
        >
          {/* Subtle Book Spine & Sacred Book Base Shadow */}
          <div className="absolute -inset-2 sm:-inset-3 bg-gradient-to-b from-[#E7D6C3] to-[#D9C4AE] rounded-3xl -z-10 shadow-xl opacity-60 border border-[#D5BFA7]" />
          
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeIdx}
              custom={direction}
              variants={bookPageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className={`relative rounded-3xl p-5 sm:p-7 lg:p-8 bg-[#FCF9F5] border-2 transition-all duration-300 overflow-hidden ${
                currentCard.highlight
                  ? 'border-amber-500/70 ring-1 ring-amber-400/40'
                  : 'border-[#E3D2C0]'
              }`}
              style={{
                transformStyle: 'preserve-3d',
                backfaceVisibility: 'hidden'
              }}
            >
              {/* Sacred Book Spine Strip on the Left edge */}
              <div className="absolute top-0 bottom-0 left-0 w-3.5 bg-gradient-to-r from-[#5B250E] via-[#853C1A] to-transparent opacity-90 pointer-events-none rounded-l-3xl" />
              <div className="absolute top-3 bottom-3 left-2.5 w-[1px] bg-amber-200/50 pointer-events-none" />

              {/* Decorative Subtle Paper Grain Texture / Watermark */}
              <div
                className="absolute inset-0 opacity-[0.025] pointer-events-none"
                style={{
                  backgroundImage: 'radial-gradient(circle, #23120A 1px, transparent 1px)',
                  backgroundSize: '16px 16px'
                }}
              />

              {/* Top Page Header: Step, Stage Title & Page Counter */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3.5 mb-4 border-b border-[#EFE1D1] pl-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#F6EDE2] border border-[#E4D1BD] flex items-center justify-center text-[#6B2E13] shadow-sm flex-shrink-0">
                    <Icon className="w-5 h-5 stroke-[1.8]" />
                  </div>
                  <div>
                    <span className="font-mono-code text-[11px] font-bold text-[#9C5A24] tracking-wider uppercase block">
                      {currentCard.step} • {currentCard.badge}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-stone-800">
                      {currentCard.stageName}
                    </span>
                  </div>
                </div>

                {/* Page Corner Indicator & Popular Highlight */}
                <div className="flex items-center gap-2">
                  {currentCard.highlight && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold text-[10px] uppercase tracking-wider shadow-sm">
                      <Sparkles className="w-3 h-3 text-amber-200" />
                      <span>Most Popular</span>
                    </span>
                  )}
                  <span className="px-2.5 py-1 rounded-lg text-[11px] font-mono-code font-bold bg-[#EFE3D3] text-[#6B2E13] border border-[#DFCBB7]">
                    Page {activeIdx + 1} of {totalPages}
                  </span>
                </div>
              </div>

              {/* Main Card Content (2 Columns) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-start pl-3">
                
                {/* Left Column: Heading & Subtitle & Description */}
                <div className="lg:col-span-6 space-y-3">
                  <div>
                    <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-[#23120A] leading-snug">
                      {currentCard.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-[#8A491D] mt-1">
                      {currentCard.subtitle}
                    </p>
                  </div>

                  <p className="text-xs text-stone-600 leading-relaxed font-normal">
                    {currentCard.description}
                  </p>

                  <div className="p-3 rounded-xl bg-[#F6EEE3] border border-[#EBDCCB] text-[11px] text-[#6B2E13] flex items-start gap-2">
                    <Star className="w-3.5 h-3.5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold block mb-0.5">Planetary Remedy Focus:</span>
                      <span className="text-stone-600 leading-relaxed">{currentCard.remedyFocus}</span>
                    </div>
                  </div>
                </div>

                {/* Right Column: Resolution Checklist & CTA */}
                <div className="lg:col-span-6 flex flex-col justify-between h-full bg-[#F7EFE4] rounded-2xl p-4 sm:p-5 border border-[#E9DAC9]">
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#6B2E13] flex items-center gap-1.5 mb-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Key Areas Analyzed &amp; Resolved:</span>
                    </div>

                    <div className="space-y-2">
                      {currentCard.points.map((pt, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2 text-xs text-stone-700 leading-relaxed">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action Button inside card */}
                  <div className="pt-3.5 mt-3.5 border-t border-[#E4D2C0]">
                    <button
                      type="button"
                      onClick={() => onOpenBooking(currentCard.tier)}
                      className={`w-full py-2.5 px-4 rounded-xl font-bold text-xs tracking-wider uppercase active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm ${
                        currentCard.highlight
                          ? 'text-amber-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-200 border border-amber-500/40 shadow-amber-900/10'
                          : 'text-[#3D1A0C] bg-[#EDE0CF] hover:bg-[#E2D2BF] border border-[#D8C4AD]'
                      }`}
                    >
                      <span>{currentCard.btnText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                </div>

              </div>

              {/* Bottom Page Navigation Controls */}
              <div className="flex items-center justify-between pt-4 mt-4 border-t border-[#EFE1D1] pl-3">
                <button
                  type="button"
                  onClick={handlePrev}
                  disabled={activeIdx === 0}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    activeIdx === 0
                      ? 'opacity-40 text-stone-400 cursor-not-allowed'
                      : 'text-[#6B2E13] hover:bg-[#EFE3D3] border border-[#DFCBB7]'
                  }`}
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous Stage</span>
                </button>

                {/* Progress Dots */}
                <div className="flex items-center gap-1.5">
                  {stageCards.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => goToPage(i)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        activeIdx === i
                          ? 'bg-[#6B2E13] w-6'
                          : 'bg-[#DFCBB7] hover:bg-[#C9B39C]'
                      }`}
                      aria-label={`Go to stage ${i + 1}`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={handleNext}
                  disabled={activeIdx === totalPages - 1}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    activeIdx === totalPages - 1
                      ? 'opacity-40 text-stone-400 cursor-not-allowed'
                      : 'text-[#6B2E13] bg-[#EFE3D3] hover:bg-[#E5D7C5] border border-[#DFCBB7] shadow-sm'
                  }`}
                >
                  <span>Next Stage</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};




