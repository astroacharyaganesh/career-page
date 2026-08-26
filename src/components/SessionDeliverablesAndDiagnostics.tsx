import React, { useState } from 'react';
import expertPhoto from '../assets/images/regenerated_image_1787726256429.png';
import posterImage from '../assets/images/career_astrology_poster_1787726633623.jpg';
import consultationSessionImg from '../assets/images/regenerated_image_1787737199403.jpg';
import careerBannerLeftImg from '../assets/images/regenerated_image_1787737100926.webp';
import {
  Sparkles,
  Compass,
  Globe,
  Briefcase,
  ShieldAlert,
  Calendar,
  TrendingUp,
  Home,
  Eye,
  Pause,
  Play,
  CheckCircle2,
  ArrowRight,
  Star,
  PlayCircle
} from 'lucide-react';

interface SessionDeliverablesAndDiagnosticsProps {
  onOpenBooking: (tier?: any) => void;
  onWatchIntro?: () => void;
}

export const SessionDeliverablesAndDiagnostics: React.FC<SessionDeliverablesAndDiagnosticsProps> = ({
  onOpenBooking,
  onWatchIntro
}) => {
  const [isWheelSpinning, setIsWheelSpinning] = useState(true);
  const [selectedNode, setSelectedNode] = useState<number>(0);

  // 8 Session Deliverables matching user's uploaded screenshots
  const deliverables = [
    {
      badge: 'COMBATTING OFFICE...',
      title: 'Career Challenges & Workplace Remedies',
      icon: ShieldAlert
    },
    {
      badge: '9TH & 12TH HOUSE ...',
      title: 'Foreign Settlement & Global Mobility',
      icon: Globe
    },
    {
      badge: '7TH, 3RD & 10TH HO...',
      title: 'Business vs Job Feasibility',
      icon: Briefcase
    },
    {
      badge: 'LONG-TERM 5-TO-10...',
      title: 'Personalized Career Roadmap',
      icon: Compass
    },
    {
      badge: 'VIMSHOTTARI DASH...',
      title: 'Job Change Timing',
      icon: Calendar
    },
    {
      badge: 'C-SUITE & LEADERSH...',
      title: 'Promotion & Appraisal Prospects',
      icon: TrendingUp
    },
    {
      badge: 'WORKSTATION & CA...',
      title: 'Accurate Professional Vastu',
      icon: Home
    },
    {
      badge: 'MICROSCOPIC DIVISI...',
      title: 'D10 & 10th House Analysis',
      icon: Eye
    }
  ];

  // 8 Kundli Wheel Orbital Nodes exactly matching user's screenshot
  const wheelNodes = [
    {
      id: 0,
      title: '10th House',
      subtitle: 'Career & Reputation',
      position: 'top', // 12 o'clock
      angleDeg: 0,
      description:
        'Governs Karma Bhava, public standing, executive leadership ceiling, and professional status in society.',
      insight: 'Reveals dominant career field & recognition from superiors.'
    },
    {
      id: 1,
      title: 'Promotion',
      subtitle: '& Growth',
      position: 'top-right', // 1:30
      angleDeg: 45,
      description:
        'Analyzed through the 10th Lord Dasha and 11th House of Gains, pinpointing exact corporate promotion windows.',
      insight: 'Indicates corporate ladder leaps and leadership elevation.'
    },
    {
      id: 2,
      title: 'Jupiter',
      subtitle: 'Wisdom & Success',
      position: 'right', // 3 o'clock
      angleDeg: 90,
      description:
        'The supreme benefic planet bringing expansive wisdom, high-level advisory roles, and financial prosperity.',
      insight: 'Guides ethical enterprise, teaching, advisory, and major breakthroughs.'
    },
    {
      id: 3,
      title: 'Business',
      subtitle: 'Potential',
      position: 'bottom-right', // 4:30
      angleDeg: 135,
      description:
        'Evaluated through 7th House of Partnerships, 3rd House of Enterprise, and Mercury-Sun planetary alignment.',
      insight: 'Determines whether independent venture or partnership will succeed.'
    },
    {
      id: 4,
      title: 'Salary',
      subtitle: '& Prosperity',
      position: 'bottom', // 6 o'clock
      angleDeg: 180,
      description:
        'Governed by the 2nd House (accumulated wealth) & 11th House (income streams), unlocking ESOPs and cash flow.',
      insight: 'Maps highest compensation appraisal cycles & investment windfalls.'
    },
    {
      id: 5,
      title: 'Government',
      subtitle: 'Job',
      position: 'bottom-left', // 7:30
      angleDeg: 225,
      description:
        'Assessed through Sun (Digbala strength), Mars in 10th House, and Amatyakaraka placement for PSU/UPSC success.',
      insight: 'Evaluates public service exam clearance & administrative authority.'
    },
    {
      id: 6,
      title: 'Saturn',
      subtitle: 'Discipline & Hard Work',
      position: 'left', // 9 o'clock
      angleDeg: 270,
      description:
        'The cosmic Karaka of Karma, rewarding perseverance, long-term mastery, corporate grit, and enduring stability.',
      insight: 'Transforms career friction into unshakeable long-term authority.'
    },
    {
      id: 7,
      title: 'D10 Chart',
      subtitle: 'Career Strength',
      position: 'top-left', // 10:30
      angleDeg: 315,
      description:
        'The Dashamsha divisional chart, micro-analyzing the hidden karmic engine behind your vocational destiny.',
      insight: 'The ultimate astrological blueprint for career trajectory clarity.'
    }
  ];

  const handleWatchSuccessStories = () => {
    if (onWatchIntro) {
      onWatchIntro();
    } else {
      const testimonialsElem = document.getElementById('testimonials-section') || document.getElementById('vedic-testimonials');
      if (testimonialsElem) {
        testimonialsElem.scrollIntoView({ behavior: 'smooth' });
      } else {
        onOpenBooking('executive');
      }
    }
  };

  return (
    <section
      id="session-deliverables"
      className="py-7 sm:py-9 bg-[#FAF5EE] text-stone-800 relative overflow-hidden border-b border-[#E7D6C5]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header Block matching screenshot */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#E8DAC9] border border-[#D9C4AD] text-xs font-semibold text-[#6B2E13] mb-2.5 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#6B2E13]" />
            <span className="uppercase tracking-wider">SESSION DELIVERABLES &amp; IN-DEPTH INSIGHTS</span>
          </div>

          {/* Display Heading */}
          <h2 className="font-serif-display text-2xl sm:text-3xl lg:text-[38px] font-bold text-[#23120A] tracking-tight leading-[1.2]">
            What You'll Receive in Your Career Astrology Session
          </h2>

          {/* Subtitle */}
          <p className="mt-2 text-xs sm:text-sm text-stone-700 font-normal leading-relaxed">
            A transparent, actionable consultation experience with complete clarity on your career roadmap, auspicious periods, and remedies.
          </p>

        </div>

        {/* Rolling Horizontal Carousel / Deliverables Row (Infinite right to left continuous rolling) */}
        <div className="relative mb-8 sm:mb-10 overflow-hidden py-2 -mx-4 sm:-mx-6 lg:-mx-8">
          {/* Gradient Edge Masks for Smooth Edge Fade */}
          <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#FAF5EE] via-[#FAF5EE]/90 to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#FAF5EE] via-[#FAF5EE]/90 to-transparent z-10 pointer-events-none" />

          {/* Continuous Infinite Marquee Track (Right to Left) */}
          <div className="flex gap-5 w-max animate-marquee hover:[animation-play-state:paused]">
            {[...deliverables, ...deliverables].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="flex-shrink-0 w-[290px] sm:w-[320px] h-[142px] sm:h-[152px] rounded-[22px] bg-white border-2 border-[#E9DACB] p-5 sm:p-6 shadow-sm hover:shadow-md hover:border-[#B87A38] transition-all flex flex-col justify-between"
                >
                  {/* Top Row: Circular Icon on Left & Pill Badge on Right */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="w-11 h-11 rounded-full bg-[#FAF0E2] border border-[#ECD9C5] flex items-center justify-center text-[#7A3617] flex-shrink-0 shadow-sm">
                      <Icon className="w-5 h-5 stroke-[1.9]" />
                    </div>

                    <span className="px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-bold tracking-wider uppercase bg-[#FAF0E2] text-[#7A3617] border border-[#ECD9C5] truncate">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="font-serif-display text-lg sm:text-[19px] font-bold text-[#23120A] leading-snug truncate">
                    {item.title}
                  </h4>
                </div>
              );
            })}
          </div>
        </div>

        {/* =========================================================================
            DEEP VEDIC CAREER DIAGNOSTICS & SACRED KUNDLI WHEEL SECTION
            MATCHING USER SCREENSHOT PRECISELY
            ========================================================================= */}
        <div
          id="sacred-kundli-wheel"
          className="rounded-3xl bg-[#070B18] border border-amber-500/20 p-6 sm:p-10 lg:p-14 text-white shadow-2xl relative overflow-hidden"
          style={{
            background: 'radial-gradient(ellipse at 80% 50%, #151A38 0%, #080C1B 50%, #040711 100%)'
          }}
        >
          {/* Starry Night Sky Dust & Nebula Glows */}
          <div className="absolute inset-0 opacity-40 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />
          <div className="absolute top-10 right-10 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-1/3 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          {/* Mountain Silhouette Ridge at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none opacity-45 overflow-hidden">
            <svg
              viewBox="0 0 1200 200"
              preserveAspectRatio="none"
              className="w-full h-full fill-[#04060E]"
            >
              <path d="M0,200 L0,110 L150,150 L320,80 L480,140 L650,60 L820,130 L980,70 L1120,120 L1200,90 L1200,200 Z" />
              <path
                d="M0,200 L0,140 L180,170 L360,110 L540,165 L720,100 L900,155 L1080,115 L1200,140 L1200,200 Z"
                opacity="0.6"
              />
            </svg>
          </div>

          {/* Main Grid: Left Value Proposition & Right Cosmic Kundli Astrolabe Wheel */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center relative z-10">
            
            {/* ================= LEFT COLUMN: BANNER IMAGE ================= */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div
                onClick={() => onOpenBooking('executive')}
                className="group relative rounded-3xl overflow-hidden border-2 border-amber-500/40 bg-black/50 shadow-2xl shadow-amber-950/40 cursor-pointer transition-all duration-300 hover:border-amber-400 hover:scale-[1.01]"
              >
                {/* Banner Image */}
                <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden">
                  <img
                    src={careerBannerLeftImg}
                    alt="Vedic Career Astrology Guidance Banner"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-[0.95]"
                  />
                  {/* Subtle Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090C18] via-transparent to-transparent opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#090C18]/40 via-transparent to-transparent opacity-60" />
                </div>

                {/* Floating Bottom Badge */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between p-3 rounded-2xl bg-[#11172E]/90 backdrop-blur-md border border-amber-500/30 text-xs shadow-lg">
                  <div className="flex items-center gap-2 text-amber-200 font-semibold">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span>Personalized Vedic Career Blueprint</span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-400 uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                    <span>Consult Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>

            {/* ================= RIGHT COLUMN: INTERACTIVE KUNDLI ASTROLABE WHEEL ================= */}
            <div className="lg:col-span-7 relative flex items-center justify-center min-h-[480px] sm:min-h-[540px]">
              
              {/* Outer Cosmic Radial Rings & Concentric Astrolabe */}
              <div className="relative w-[340px] h-[340px] sm:w-[440px] sm:h-[440px] flex items-center justify-center">
                
                {/* Outer Golden Dash Orbit Ring */}
                <div className="absolute inset-0 rounded-full border border-amber-400/20" />
                <div className="absolute inset-4 rounded-full border border-dashed border-amber-400/30 animate-spin-slow" />
                <div className="absolute inset-10 rounded-full border border-amber-400/15" />
                <div className="absolute inset-16 rounded-full border border-amber-400/25" />

                {/* Spinning Astrolabe Dial */}
                <div
                  className={`absolute inset-8 rounded-full border border-amber-500/30 flex items-center justify-center transition-all ${
                    isWheelSpinning ? 'animate-spin' : ''
                  }`}
                  style={{ animationDuration: '90s' }}
                >
                  {/* 12 Divisional House Spokes */}
                  {[...Array(12)].map((_, i) => {
                    const angle = i * 30;
                    return (
                      <div
                        key={i}
                        className="absolute top-1/2 left-1/2 w-full h-px bg-gradient-to-r from-transparent via-amber-400/25 to-transparent -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                        style={{ transform: `translate(-50%, -50%) rotate(${angle}deg)` }}
                      />
                    );
                  })}

                  {/* 12 Zodiac Constellation Symbols along the rim */}
                  {['♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓'].map((symbol, idx) => {
                    const angle = idx * 30;
                    return (
                      <div
                        key={idx}
                        className="absolute text-xs sm:text-sm font-serif text-amber-300/60 select-none"
                        style={{
                          transform: `rotate(${angle}deg) translateY(-145px)`
                        }}
                      >
                        {symbol}
                      </div>
                    );
                  })}
                </div>

                {/* Radiant Solar Banner Hub Center */}
                <div className="relative z-10 w-40 h-40 sm:w-48 sm:h-48 rounded-2xl sm:rounded-3xl flex items-center justify-center pointer-events-auto">
                  {/* Solar Flare Corona Glow */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-300 rounded-3xl blur-xl opacity-75 animate-pulse" />
                  
                  {/* Golden Banner Frame */}
                  <div
                    onClick={() => onOpenBooking('executive')}
                    className="relative w-full h-full rounded-2xl sm:rounded-3xl p-1 bg-gradient-to-br from-[#FFFBEB] via-[#FBBF24] to-[#B45309] flex flex-col items-center justify-center shadow-[0_0_40px_rgba(245,158,11,0.9)] border-2 border-amber-300 overflow-hidden cursor-pointer group transition-transform duration-300 hover:scale-105"
                  >
                    <div className="w-full h-full rounded-[14px] sm:rounded-[22px] overflow-hidden bg-[#1A0D08] relative">
                      <img
                        src={consultationSessionImg}
                        alt="Acharya Ganesh Career Astrology Consultation Session"
                        className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500"
                      />
                      
                      {/* Gradient Dark/Gold Overlay for text legibility */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#23120A]/85 via-transparent to-black/20 pointer-events-none" />

                      {/* Golden Banner Badge on Center Hub */}
                      <div className="absolute bottom-2 left-2 right-2 px-2 py-1 rounded-lg bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 border border-amber-200/80 shadow-md flex items-center justify-center gap-1">
                        <Sparkles className="w-3 h-3 text-amber-950 fill-amber-950 flex-shrink-0 animate-spin-slow" />
                        <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider text-amber-950 whitespace-nowrap">
                          1-on-1 Consultation
                        </span>
                      </div>
                    </div>

                    {/* Mini sacred sparkle badge at top-right */}
                    <div className="absolute top-1.5 right-1.5 w-6 h-6 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 border border-white flex items-center justify-center shadow-md">
                      <Sparkles className="w-3.5 h-3.5 text-stone-950 fill-amber-100" />
                    </div>
                  </div>
                </div>

                {/* Wheel Spin Pause Toggle in bottom right */}
                <button
                  type="button"
                  onClick={() => setIsWheelSpinning(!isWheelSpinning)}
                  className="absolute bottom-2 right-2 z-20 px-2.5 py-1 rounded-lg bg-[#141A33]/90 hover:bg-[#1C254A] border border-amber-500/30 text-[10px] font-semibold text-amber-200 flex items-center gap-1 backdrop-blur-sm transition-all shadow-md cursor-pointer"
                >
                  {isWheelSpinning ? (
                    <>
                      <Pause className="w-3 h-3 text-amber-400" />
                      <span>Pause Rotation</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3 h-3 text-amber-400" />
                      <span>Spin Wheel</span>
                    </>
                  )}
                </button>

                {/* =========================================================================
                    8 FLOATING INTERACTIVE CAPSULE BADGES AROUND THE KUNDLI WHEEL
                    Exact placement corresponding to user's screenshot
                    ========================================================================= */}

                {/* 1. TOP (12 o'clock) -> 10th House: Career & Reputation */}
                <div className="absolute -top-3 sm:-top-5 left-1/2 -translate-x-1/2 z-20">
                  <WheelCapsuleBadge
                    node={wheelNodes[0]}
                    isSelected={selectedNode === 0}
                    onSelect={() => setSelectedNode(0)}
                  />
                </div>

                {/* 2. TOP-RIGHT (1:30) -> Promotion & Growth */}
                <div className="absolute top-6 sm:top-8 -right-2 sm:-right-6 z-20">
                  <WheelCapsuleBadge
                    node={wheelNodes[1]}
                    isSelected={selectedNode === 1}
                    onSelect={() => setSelectedNode(1)}
                  />
                </div>

                {/* 3. RIGHT (3 o'clock) -> Jupiter: Wisdom & Success */}
                <div className="absolute top-1/2 -right-4 sm:-right-10 -translate-y-1/2 z-20">
                  <WheelCapsuleBadge
                    node={wheelNodes[2]}
                    isSelected={selectedNode === 2}
                    onSelect={() => setSelectedNode(2)}
                  />
                </div>

                {/* 4. BOTTOM-RIGHT (4:30) -> Business Potential */}
                <div className="absolute bottom-6 sm:bottom-8 -right-2 sm:-right-4 z-20">
                  <WheelCapsuleBadge
                    node={wheelNodes[3]}
                    isSelected={selectedNode === 3}
                    onSelect={() => setSelectedNode(3)}
                  />
                </div>

                {/* 5. BOTTOM (6 o'clock) -> Salary & Prosperity */}
                <div className="absolute -bottom-3 sm:-bottom-5 left-1/2 -translate-x-1/2 z-20">
                  <WheelCapsuleBadge
                    node={wheelNodes[4]}
                    isSelected={selectedNode === 4}
                    onSelect={() => setSelectedNode(4)}
                  />
                </div>

                {/* 6. BOTTOM-LEFT (7:30) -> Government Job */}
                <div className="absolute bottom-6 sm:bottom-8 -left-2 sm:-left-4 z-20">
                  <WheelCapsuleBadge
                    node={wheelNodes[5]}
                    isSelected={selectedNode === 5}
                    onSelect={() => setSelectedNode(5)}
                  />
                </div>

                {/* 7. LEFT (9 o'clock) -> Saturn: Discipline & Hard Work */}
                <div className="absolute top-1/2 -left-4 sm:-left-10 -translate-y-1/2 z-20">
                  <WheelCapsuleBadge
                    node={wheelNodes[6]}
                    isSelected={selectedNode === 6}
                    onSelect={() => setSelectedNode(6)}
                  />
                </div>

                {/* 8. TOP-LEFT (10:30) -> D10 Chart: Career Strength */}
                <div className="absolute top-6 sm:top-8 -left-2 sm:-left-6 z-20">
                  <WheelCapsuleBadge
                    node={wheelNodes[7]}
                    isSelected={selectedNode === 7}
                    onSelect={() => setSelectedNode(7)}
                  />
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

// Reusable Capsule Badge Component for the 8 Astrological Positions
interface WheelCapsuleBadgeProps {
  node: {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    insight: string;
  };
  isSelected: boolean;
  onSelect: () => void;
}

const WheelCapsuleBadge: React.FC<WheelCapsuleBadgeProps> = ({ node, isSelected, onSelect }) => {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-2xl sm:rounded-full transition-all duration-300 flex flex-col items-center justify-center text-center cursor-pointer backdrop-blur-md shadow-lg ${
        isSelected
          ? 'bg-[#182046]/95 border-2 border-amber-300 text-white shadow-amber-500/30 scale-105 ring-2 ring-amber-400/40'
          : 'bg-[#0E142C]/85 border border-[#2E3B68] text-slate-200 hover:bg-[#161F42] hover:border-amber-400/60 hover:scale-102'
      }`}
      style={{
        minWidth: '105px',
        maxWidth: '150px'
      }}
    >
      <span className={`text-xs sm:text-[13px] font-bold leading-tight ${isSelected ? 'text-amber-300' : 'text-amber-200'}`}>
        {node.title}
      </span>
      <span className="text-[10px] sm:text-[11px] text-slate-300 font-medium leading-tight">
        {node.subtitle}
      </span>
    </button>
  );
};

