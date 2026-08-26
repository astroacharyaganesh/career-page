import React, { useState, useEffect, useRef } from 'react';
import {
  Sparkles,
  Compass,
  Globe,
  Briefcase,
  ShieldAlert,
  Calendar,
  Award,
  TrendingUp,
  RotateCw,
  Pause,
  Play,
  Eye,
  CheckCircle2,
  ChevronRight,
  X,
  FileText,
  Zap,
  Layers,
  Clock
} from 'lucide-react';

interface SessionDeliverablesAndDiagnosticsProps {
  onOpenBooking: (tier?: any) => void;
}

export const SessionDeliverablesAndDiagnostics: React.FC<SessionDeliverablesAndDiagnosticsProps> = ({
  onOpenBooking
}) => {
  const [isWheelSpinning, setIsWheelSpinning] = useState(true);
  const [activeDimension, setActiveDimension] = useState(0);
  const [showReportPreviewModal, setShowReportPreviewModal] = useState(false);
  const [isHoveredMarquee, setIsHoveredMarquee] = useState(false);
  const marqueeRef = useRef<HTMLDivElement>(null);

  // 8 Session Deliverables matching screenshot
  const deliverables = [
    {
      badge: 'COMBATTING OFFICE...',
      title: 'Career Challenges & Workplace Remedies',
      icon: ShieldAlert,
      desc: 'Defusing office politics, hostile management, and removing hidden career roadblocks with targeted Graha Shanti.'
    },
    {
      badge: '9TH & 12TH HOUSE...',
      title: 'Foreign Settlement & Global Mobility',
      icon: Globe,
      desc: 'Accurate visa approval timing, international relocation feasibility, and overseas job settlement windows.'
    },
    {
      badge: '7TH, 3RD & 10TH H...',
      title: 'Business vs Job Feasibility',
      icon: Briefcase,
      desc: 'Clear distinction between entrepreneurial potential, startup viability, and corporate security.'
    },
    {
      badge: 'LONG-TERM 5-TO-10...',
      title: 'Personalized Career Roadmap',
      icon: Compass,
      desc: 'A comprehensive 5-to-10 year strategic trajectory mapped with planetary Mahadasha & Antardasha milestones.'
    },
    {
      badge: 'TIMING TRANSITIONS',
      title: 'Job Change & Appraisal Timing',
      icon: Calendar,
      desc: 'Pinpointing the exact 60-day calendar window to submit resignations and negotiate optimal salary packages.'
    },
    {
      badge: 'D10 DASHAMSHA',
      title: 'Leadership & Executive Authority Matrix',
      icon: Award,
      desc: 'Identifying C-suite promotion windows, director-level elevation, and organizational reputation (Kirti).'
    },
    {
      badge: 'DHANA YOGAS',
      title: 'Salary Growth & Wealth Activation',
      icon: TrendingUp,
      desc: 'Unlocking 2nd (wealth) and 11th (gains) houses for stock options (ESOPs), bonus jumps, and dual revenue.'
    },
    {
      badge: 'CERTIFIED UPAAY',
      title: 'Scientific Vedic Gemstones & Mantra Protocol',
      icon: Sparkles,
      desc: 'Prescription of genuine natural gemstones, specific carat weights, energization timings, and Beej mantras.'
    }
  ];

  // 4 Core Dimensions analyzed in the chart
  const dimensions = [
    {
      tag: 'Vocation & Power',
      title: '10th House Karma Matrix',
      subtitle: 'Reveals your leadership ceiling, high-growth sectors (Tech, Govt, Corporate), and inherent professional authority.',
      bulletList: [
        'Identification of Amatyakaraka & 10th Lord placement',
        'Sun & Mars leadership strength (Digbala alignment)',
        'Dominant career archetypes: Executive vs Specialist'
      ],
      metricLabel: 'CAREER PATH ACCURACY',
      metricValue: '98.4%'
    },
    {
      tag: 'Divisional Strength',
      title: 'D10 Dashamsha Blueprint',
      subtitle: 'The micro-harmonic divisional chart that separates job stability from explosive promotion cycles and business success.',
      bulletList: [
        'Evaluation of 6th vs 7th vs 10th house strength in D10',
        'Executive promotion timing and corporate status elevation',
        'Distinguishing temporary stagnation from structural misalignment'
      ],
      metricLabel: 'D10 HARMONIC PRECISION',
      metricValue: '99.1%'
    },
    {
      tag: 'Planetary Transits',
      title: 'Vimshottari Dasha Map',
      subtitle: '120-year planetary timeline cross-referenced with Gochar (transits) of Saturn, Jupiter, Rahu, and Ketu.',
      bulletList: [
        'Exact month & year for career jump or new offer letter',
        'Safe exit timelines to avoid malefic transition traps',
        'Auspicious dates for contracts, appraisals, and visas'
      ],
      metricLabel: 'TIMING WINDOW CLARITY',
      metricValue: '97.8%'
    },
    {
      tag: 'Energization & Upaay',
      title: 'Vedic Remedies & Yantras',
      subtitle: 'Zero superstition, purely scientific resonance protocols to clear planetary afflictions and accelerate milestones.',
      bulletList: [
        'Certified natural untreated gemstone recommendations',
        'Vedic sound vibration Beej mantras for mental focus',
        'Specific behavioral and lifestyle alignment practices'
      ],
      metricLabel: 'REMEDIAL COMPLIANCE RATE',
      metricValue: '96.5%'
    }
  ];

  const zodiacSigns = [
    'ARIES', 'TAURUS', 'GEMINI', 'CANCER',
    'LEO', 'VIRGO', 'LIBRA', 'SCORPIO',
    'SAGITTARIUS', 'CAPRICORN', 'AQUARIUS', 'PISCES'
  ];

  return (
    <section
      id="session-deliverables"
      className="py-16 lg:py-24 bg-[#FAF5EE] text-stone-800 relative overflow-hidden border-b border-[#E7D6C5]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header Block matching screenshot */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#E8DAC9] border border-[#D9C4AD] text-xs font-semibold text-[#6B2E13] mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#6B2E13]" />
            <span className="uppercase tracking-wider">SESSION DELIVERABLES & IN-DEPTH INSIGHTS</span>
          </div>

          {/* Display Heading */}
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#23120A] tracking-tight leading-[1.2]">
            What You'll Receive in Your Career Astrology Session
          </h2>

          {/* Subtitle */}
          <p className="mt-3.5 text-sm sm:text-base text-stone-700 font-normal leading-relaxed">
            A transparent, actionable consultation experience with complete clarity on your career roadmap, auspicious periods, and remedies.
          </p>

          {/* Motion Notice Tag */}
          <div className="mt-5 inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EFE3D3] border border-[#DFCBB7] text-[11px] font-medium text-stone-700">
            <span className="w-2 h-2 rounded-full bg-amber-600 animate-pulse" />
            <span>8 Comprehensive Session Deliverables • Continuous Rolling Motion (Hover or Tap to Pause)</span>
          </div>

        </div>

        {/* Rolling Horizontal Carousel / Deliverables Row */}
        <div
          className="relative mb-16 overflow-hidden py-3"
          onMouseEnter={() => setIsHoveredMarquee(true)}
          onMouseLeave={() => setIsHoveredMarquee(false)}
        >
          {/* Gradient Edge Masks */}
          <div className="absolute top-0 bottom-0 left-0 w-12 bg-gradient-to-r from-[#FAF5EE] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-12 bg-gradient-to-l from-[#FAF5EE] to-transparent z-10 pointer-events-none" />

          <div
            ref={marqueeRef}
            className={`flex gap-5 overflow-x-auto pb-4 no-scrollbar scroll-smooth ${
              isHoveredMarquee ? '' : ''
            }`}
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {deliverables.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="flex-shrink-0 w-[270px] sm:w-[300px] rounded-2xl bg-white border border-[#E8DACB] p-5 sm:p-6 shadow-sm hover:shadow-md hover:border-[#D0B293] transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Top Row: Icon and Tag */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-[#F6EFE6] border border-[#E9DACB] flex items-center justify-center text-[#6B2E13] group-hover:scale-105 transition-transform">
                        <Icon className="w-5 h-5 stroke-[1.8]" />
                      </div>

                      <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold tracking-wider uppercase bg-[#F6EFE6] text-[#7A3617] border border-[#E5D2BE]">
                        {item.badge}
                      </span>
                    </div>

                    {/* Title */}
                    <h4 className="font-serif-display text-[15px] sm:text-base font-bold text-[#23120A] leading-snug mb-2 group-hover:text-[#6B2E13] transition-colors">
                      {item.title}
                    </h4>

                    {/* Description */}
                    <p className="text-xs text-stone-600 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Deep Vedic Career Diagnostics & Sacred Kundli Wheel (Dark Obsidian Container) */}
        <div className="rounded-3xl bg-[#1D0E07] border border-amber-800/40 p-6 sm:p-10 lg:p-12 text-amber-50 shadow-2xl relative overflow-hidden">
          
          {/* Background Astro Radial Glow and Starlight */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-600/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-orange-700/15 rounded-full blur-3xl pointer-events-none" />

          {/* Header Row of the Diagnostics Container */}
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-10 relative z-10">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/80 border border-amber-700/50 text-xs font-semibold text-amber-300 mb-3 shadow-inner">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span>Deep Vedic Career Diagnostics & Kundli Reading</span>
              </div>

              <h3 className="font-serif-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-snug">
                Decode Your True Calling Through the Sacred Kundli Wheel
              </h3>

              <p className="mt-3 text-xs sm:text-sm text-amber-100/75 leading-relaxed font-normal">
                Your birth chart is an astronomical compass. Gain definitive answers on career growth, promotion timelines, job transitions, and authentic Vedic remedies.
              </p>
            </div>

            {/* Wheel Control Button */}
            <div className="flex items-center gap-3 self-start">
              <button
                type="button"
                onClick={() => setIsWheelSpinning(!isWheelSpinning)}
                className="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-[#33180D] hover:bg-[#442112] text-amber-200 border border-amber-700/40 flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
              >
                {isWheelSpinning ? (
                  <>
                    <Pause className="w-3.5 h-3.5 text-amber-400" />
                    <span>Pause Wheel</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 text-amber-400" />
                    <span>Spin Wheel</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Section: Dimension Navigator Tabs */}
          <div className="mb-8 relative z-10">
            <div className="text-[11px] font-bold uppercase tracking-wider text-amber-400/90 mb-3 flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5" />
              <span>EXPLORE CORE DIMENSIONS ANALYZED IN YOUR CHART:</span>
            </div>

            {/* 4 Dimension Selection Tabs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {dimensions.map((dim, idx) => {
                const isSelected = activeDimension === idx;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveDimension(idx)}
                    className={`p-3 sm:p-3.5 rounded-xl text-left transition-all border cursor-pointer ${
                      isSelected
                        ? 'bg-[#3D1D10] border-amber-400 text-white shadow-lg shadow-amber-950/50 scale-[1.02]'
                        : 'bg-[#261208]/70 border-amber-900/40 text-amber-200/70 hover:bg-[#30160A] hover:text-amber-100'
                    }`}
                  >
                    <div className="text-[10px] font-bold uppercase tracking-wider text-amber-400">
                      {dim.tag}
                    </div>
                    <div className="text-xs sm:text-[13px] font-semibold mt-0.5 truncate text-white">
                      {dim.title}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Split Content: Left Detailed Dimension Card & Right Sacred Kundli Wheel Graphic */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Dimension Detail (7 cols) */}
            <div className="lg:col-span-7 bg-[#2A140A]/90 rounded-2xl border border-amber-700/40 p-6 sm:p-8 flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-400 text-[#1A0C06]">
                    {dimensions[activeDimension].tag}
                  </span>
                  <h4 className="font-serif-display text-lg sm:text-xl font-bold text-white">
                    {dimensions[activeDimension].title}
                  </h4>
                </div>

                <p className="text-xs sm:text-sm text-amber-100/80 leading-relaxed mb-6 font-normal">
                  {dimensions[activeDimension].subtitle}
                </p>

                {/* Bullets */}
                <div className="space-y-2.5 pt-4 border-t border-amber-900/40 mb-6">
                  {dimensions[activeDimension].bulletList.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5 text-xs text-amber-200/90">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Stat Block & Action */}
              <div className="pt-4 border-t border-amber-900/40 flex items-center justify-between gap-4">
                <div>
                  <div className="font-serif-display text-2xl sm:text-3xl font-bold text-amber-300">
                    {dimensions[activeDimension].metricValue}
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-amber-400/80">
                    {dimensions[activeDimension].metricLabel}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => onOpenBooking('executive')}
                  className="px-5 py-2.5 rounded-xl font-bold text-xs bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-[#1D0E07] shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Book Consultation Slot</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>

            {/* Right Graphic: Sacred Kundli Rotating Astrological Wheel + Consultation Image Preview (5 cols) */}
            <div className="lg:col-span-5 relative flex items-center justify-center min-h-[320px]">
              
              {/* Rotating Astrological Zodiac Wheel SVG */}
              <div
                className={`absolute w-72 h-72 sm:w-80 sm:h-80 rounded-full border border-amber-500/20 flex items-center justify-center pointer-events-none transition-all ${
                  isWheelSpinning ? 'animate-spin' : ''
                }`}
                style={{ animationDuration: '60s' }}
              >
                {/* Concentric rings */}
                <div className="absolute inset-4 rounded-full border border-amber-400/15" />
                <div className="absolute inset-10 rounded-full border border-dashed border-amber-400/25" />
                <div className="absolute inset-16 rounded-full border border-amber-400/15" />

                {/* Zodiac signs around the perimeter */}
                {zodiacSigns.map((sign, sIdx) => {
                  const angle = (sIdx * 360) / 12;
                  return (
                    <div
                      key={sign}
                      className="absolute text-[8px] font-bold tracking-widest text-amber-400/40"
                      style={{
                        transform: `rotate(${angle}deg) translateY(-120px)`
                      }}
                    >
                      {sign}
                    </div>
                  );
                })}
              </div>

              {/* Consultation Photo Card with Gold Border & Hover Modal Trigger */}
              <div
                onClick={() => setShowReportPreviewModal(true)}
                className="relative z-10 rounded-2xl overflow-hidden border-2 border-amber-400/80 shadow-2xl bg-[#2A140A] group cursor-pointer hover:border-amber-300 transition-all transform hover:scale-[1.02]"
              >
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
                    alt="Acharya Ganesh Live Vedic Career Consultation"
                    className="w-full h-56 sm:h-64 object-cover object-center group-hover:opacity-95 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1D0E07] via-transparent to-black/20" />
                </div>

                <div className="p-3.5 bg-[#261208] text-center border-t border-amber-800/40 flex items-center justify-center gap-2 text-xs font-semibold text-amber-200 group-hover:text-white">
                  <Eye className="w-4 h-4 text-amber-400" />
                  <span>Click image to preview 4 chapters report</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* 4-Chapter Report Preview Modal */}
      {showReportPreviewModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-2xl rounded-2xl bg-[#1D0E07] border border-amber-600/50 p-6 sm:p-8 text-amber-50 shadow-2xl">
            
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setShowReportPreviewModal(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-amber-950/80 border border-amber-700/50 text-amber-300 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold">
                <FileText className="w-3.5 h-3.5 text-amber-400" />
                <span>25-PAGE CONFIDENTIAL REPORT PREVIEW</span>
              </div>

              <h3 className="font-serif-display text-2xl font-bold text-white">
                Vedic Career Horoscope & Strategic Blueprint
              </h3>

              <p className="text-xs sm:text-sm text-amber-200/80 leading-relaxed font-normal">
                Every consultation includes permanent access to your confidential report structured across 4 rigorous diagnostic chapters:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="p-3.5 rounded-xl bg-[#2E150A] border border-amber-800/40">
                  <div className="text-xs font-bold text-amber-400">Chapter 1: Karmic Foundation</div>
                  <div className="text-[11px] text-amber-200/70 mt-1">D1 Ascendant, Moon sign, and 10th Lord core planetary disposition.</div>
                </div>
                <div className="p-3.5 rounded-xl bg-[#2E150A] border border-amber-800/40">
                  <div className="text-xs font-bold text-amber-400">Chapter 2: D10 Dashamsha Analysis</div>
                  <div className="text-[11px] text-amber-200/70 mt-1">Executive elevation, job vs business viability, and industry domain.</div>
                </div>
                <div className="p-3.5 rounded-xl bg-[#2E150A] border border-amber-800/40">
                  <div className="text-xs font-bold text-amber-400">Chapter 3: 36-Month Opportunity Clock</div>
                  <div className="text-[11px] text-amber-200/70 mt-1">Month-by-month Dasha and transit windows for job switch, appraisal, and visas.</div>
                </div>
                <div className="p-3.5 rounded-xl bg-[#2E150A] border border-amber-800/40">
                  <div className="text-xs font-bold text-amber-400">Chapter 4: Vedic Remedial Protocol</div>
                  <div className="text-[11px] text-amber-200/70 mt-1">Certified gemstones, energization dates, Beej mantras, and behavioral upaay.</div>
                </div>
              </div>

              <div className="pt-4 mt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setShowReportPreviewModal(false);
                    onOpenBooking('executive');
                  }}
                  className="px-5 py-2.5 rounded-xl font-bold text-xs bg-amber-400 hover:bg-amber-300 text-[#1D0E07] shadow-md transition-all cursor-pointer"
                >
                  Book Session & Get Your Report
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
};
