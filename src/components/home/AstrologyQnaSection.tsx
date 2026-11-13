import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, X } from 'lucide-react';
import {
  ASTROLOGY_QNA_CATEGORIES,
  ASTROLOGY_QNA_ITEMS,
  AstrologyQnaCategory
} from '../../data/homePageData';

interface AstrologyQnaSectionProps {
  onOpenBooking?: () => void;
}

const ROTATE_INTERVAL_MS = 10000;

const ZODIAC_GLYPHS = [
  '♈\uFE0E',
  '♉\uFE0E',
  '♊\uFE0E',
  '♋\uFE0E',
  '♌\uFE0E',
  '♍\uFE0E',
  '♎\uFE0E',
  '♏\uFE0E',
  '♐\uFE0E',
  '♑\uFE0E',
  '♒\uFE0E',
  '♓\uFE0E'
];

interface VedicChakraEmblemProps {
  className?: string;
  compact?: boolean;
}

const VedicChakraEmblem: React.FC<VedicChakraEmblemProps> = ({ className = '', compact = false }) => {
  const rimId = compact ? 'chakraRimGlowMobile' : 'chakraRimGlowDesktop';
  const strokeId = compact ? 'chakraGoldStrokeMobile' : 'chakraGoldStrokeDesktop';
  const haloId = compact ? 'chakraInnerHaloMobile' : 'chakraInnerHaloDesktop';

  return (
    <div className={`relative shrink-0 select-none ${className}`} aria-hidden="true">
      {/* Subtle Warm Ambient Golden Halo Behind the Astrolabe */}
      <div className="pointer-events-none absolute -inset-3 rounded-full bg-[radial-gradient(circle,rgba(232,175,92,0.34)_0%,rgba(232,175,92,0.08)_55%,transparent_75%)] blur-md" />

      {/* Outer Clockwise Rolling Zodiac Wheel */}
      <svg
        viewBox="0 0 280 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative h-full w-full qna-chakra-roll drop-shadow-[0_6px_14px_rgba(112,56,20,0.22)]"
      >
        <defs>
          <radialGradient id={rimId} cx="50%" cy="50%" r="50%">
            <stop offset="56%" stopColor="#fff8eb" stopOpacity="0" />
            <stop offset="70%" stopColor="#fae4be" stopOpacity="0.92" />
            <stop offset="94%" stopColor="#eec27d" stopOpacity="0.98" />
            <stop offset="100%" stopColor="#be7a28" stopOpacity="1" />
          </radialGradient>
          <linearGradient id={strokeId} x1="0" y1="0" x2="280" y2="280" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#b06a1d" />
            <stop offset="50%" stopColor="#eab354" />
            <stop offset="100%" stopColor="#854710" />
          </linearGradient>
        </defs>

        {/* Outer Brass Rim & Zodiac Annular Band */}
        <circle cx="140" cy="140" r="135" fill={`url(#${rimId})`} stroke={`url(#${strokeId})`} strokeWidth="2.6" />
        <circle cx="140" cy="140" r="127" stroke="#965419" strokeWidth="1" strokeDasharray="2.5 3.5" />
        <circle cx="140" cy="140" r="86" fill="#fffaf2" fillOpacity="0.72" stroke={`url(#${strokeId})`} strokeWidth="2.2" />

        {/* Degree Tick Marks around Outer Bezel */}
        {!compact &&
          Array.from({ length: 72 }).map((_, idx) => {
            const angle = (idx * 5 * Math.PI) / 180;
            const inner = idx % 6 === 0 ? 127 : 130.5;
            return (
              <line
                key={`tick-${idx}`}
                x1={140 + Math.cos(angle) * inner}
                y1={140 + Math.sin(angle) * inner}
                x2={140 + Math.cos(angle) * 135}
                y2={140 + Math.sin(angle) * 135}
                stroke="#854612"
                strokeWidth={idx % 6 === 0 ? '1.4' : '0.7'}
              />
            );
          })}

        {/* 12 Zodiac House Spokes & Luminous Highlighted Zodiac Plaques */}
        {ZODIAC_GLYPHS.map((glyph, idx) => {
          const spokeAngle = (idx * 30 * Math.PI) / 180;
          const labelAngle = ((idx * 30 + 15) * Math.PI) / 180;
          const lx = 140 + Math.cos(labelAngle) * 106.5;
          const ly = 140 + Math.sin(labelAngle) * 106.5;
          const starX = 140 + Math.cos(spokeAngle) * 80;
          const starY = 140 + Math.sin(spokeAngle) * 80;

          return (
            <g key={idx}>
              <line
                x1={140 + Math.cos(spokeAngle) * 85}
                y1={140 + Math.sin(spokeAngle) * 85}
                x2={140 + Math.cos(spokeAngle) * 135}
                y2={140 + Math.sin(spokeAngle) * 135}
                stroke="#925016"
                strokeWidth="1.4"
              />
              <circle cx={starX} cy={starY} r="2.2" fill="#cf8a2e" />

              {/* Highlighted Cream-Gold Medallion Plaque for Zodiac Sign */}
              <circle
                cx={lx}
                cy={ly}
                r={compact ? 17.5 : 15}
                fill="#fffdf8"
                stroke="#c9852f"
                strokeWidth={compact ? '1.9' : '1.6'}
              />
              <circle
                cx={lx}
                cy={ly}
                r={compact ? 14.5 : 12.4}
                stroke="#f3cf90"
                strokeWidth="0.7"
              />
              <text
                x={lx}
                y={ly}
                fill="#6b0d11"
                fontSize={compact ? '20' : '16.5'}
                fontWeight="700"
                textAnchor="middle"
                dominantBaseline="central"
                transform={`rotate(${idx * 30 + 105}, ${lx}, ${ly})`}
              >
                {glyph}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Inner Counter-Rotating Sacred Geometry Nakshatra Ring */}
      <svg
        viewBox="0 0 280 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="pointer-events-none absolute inset-0 h-full w-full qna-chakra-counter-roll"
      >
        <defs>
          <linearGradient id={haloId} x1="56" y1="56" x2="224" y2="224" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#d99a38" />
            <stop offset="50%" stopColor="#9d5717" />
            <stop offset="100%" stopColor="#e8ba62" />
          </linearGradient>
        </defs>
        <circle cx="140" cy="140" r="82" stroke={`url(#${haloId})`} strokeWidth="1.15" strokeDasharray="3 4" />
        {/* 12-Point Interlaced Sacred Lotus Star */}
        {Array.from({ length: 12 }).map((_, idx) => {
          const angle = (idx * 30 * Math.PI) / 180;
          const x = 140 + Math.cos(angle) * 80;
          const y = 140 + Math.sin(angle) * 80;
          return <circle key={`nak-${idx}`} cx={x} cy={y} r="1.8" fill="#c47e27" />;
        })}
        <rect
          x="87"
          y="87"
          width="106"
          height="106"
          stroke={`url(#${haloId})`}
          strokeWidth="1"
          strokeOpacity="0.65"
          transform="rotate(0 140 140)"
        />
        <rect
          x="87"
          y="87"
          width="106"
          height="106"
          stroke={`url(#${haloId})`}
          strokeWidth="1"
          strokeOpacity="0.65"
          transform="rotate(45 140 140)"
        />
      </svg>

      {/* Stationary Center Medallion Holding Official Acharya Ganesh Logo */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full bg-gradient-to-b from-[#fffdf8] to-[#fdf1db] border-2 border-[#cf8f37] ring-2 ring-[#f3d398]/70 shadow-[0_0_22px_rgba(181,101,29,0.36),inset_0_0_8px_rgba(232,186,98,0.4)] ${
          compact ? 'h-[58%] w-[58%] p-[2px]' : 'h-[56%] w-[56%] p-0.5'
        }`}
      >
        <img
          src="/ag-images/logo.webp"
          alt="Acharya Ganesh"
          className="h-full w-full object-contain scale-[1.06] drop-shadow-[0_1px_2px_rgba(93,46,10,0.2)]"
        />
      </div>
    </div>
  );
};

export const AstrologyQnaSection: React.FC<AstrologyQnaSectionProps> = ({ onOpenBooking }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMoreModalOpen, setIsMoreModalOpen] = useState(false);
  const [modalCategory, setModalCategory] = useState<AstrologyQnaCategory | 'All'>('All');

  const totalItems = ASTROLOGY_QNA_ITEMS.length;
  const currentItem = ASTROLOGY_QNA_ITEMS[activeIndex] || ASTROLOGY_QNA_ITEMS[0];

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    if (typeof IntersectionObserver === 'undefined') {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isPaused || isMoreModalOpen || totalItems <= 1) return;

    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalItems);
    }, ROTATE_INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, [activeIndex, isPaused, isMoreModalOpen, totalItems]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % totalItems);
  };

  const modalItems =
    modalCategory === 'All'
      ? ASTROLOGY_QNA_ITEMS
      : ASTROLOGY_QNA_ITEMS.filter((item) => item.category === modalCategory);

  return (
    <section
      ref={sectionRef}
      id="astrology-qna"
      aria-label="Do You Know Astrology Insights"
      className="w-full bg-background py-2.5 sm:py-4"
    >
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        <article
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
          className="group relative w-full overflow-hidden rounded-2xl border border-[#d6ab72] bg-gradient-to-br from-[#f3d8b4] via-[#fdf4e6] to-[#efd1aa] shadow-[0_16px_38px_-16px_rgba(92,42,14,0.24),0_4px_12px_-4px_rgba(181,101,29,0.12)] transition-shadow duration-300 hover:shadow-[0_20px_46px_-14px_rgba(92,42,14,0.3)]"
        >
          {/* Warm Illuminated Center Luminance + Soft Celestial Ambient Glows */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_78%_88%_at_50%_40%,rgba(255,253,248,0.95)_0%,rgba(253,243,227,0.66)_58%,rgba(227,183,130,0.38)_100%)]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 h-40 w-[480px] rounded-full bg-[#ffe6b8]/45 blur-3xl"
          />

          {/* Subtle Inner Manuscript Filigree Double Frame */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-[6px] rounded-[11px] border border-[#d4a15e]/35"
          />

          {/* Subtle Celestial Constellation Arcs & Twinkling Star Points */}
          <svg
            aria-hidden="true"
            viewBox="0 0 1200 260"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.26] text-[#b4742a]"
            fill="none"
          >
            <path d="M180 36 Q 600 -14 1020 36" stroke="currentColor" strokeWidth="0.7" strokeDasharray="3 5" />
            <path d="M220 228 Q 600 270 980 228" stroke="currentColor" strokeWidth="0.7" strokeDasharray="3 5" />
            <circle cx="320" cy="40" r="1.5" fill="currentColor" />
            <circle cx="885" cy="46" r="1.5" fill="currentColor" />
            <circle cx="290" cy="222" r="1.4" fill="currentColor" />
            <circle cx="910" cy="218" r="1.4" fill="currentColor" />
          </svg>

          {/* Twinkling 4-Point Celestial Sparkles */}
          <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            className="pointer-events-none hidden md:block absolute top-4 left-[27%] h-3 w-3 text-[#d19035] qna-star-twinkle"
            fill="currentColor"
          >
            <path d="M10 0L12.1 7.9L20 10L12.1 12.1L10 20L7.9 12.1L0 10L7.9 7.9L10 0Z" />
          </svg>
          <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            style={{ animationDelay: '1.8s' }}
            className="pointer-events-none hidden md:block absolute top-5 right-[26%] h-2.5 w-2.5 text-[#c9842c] qna-star-twinkle"
            fill="currentColor"
          >
            <path d="M10 0L12.1 7.9L20 10L12.1 12.1L10 20L7.9 12.1L0 10L7.9 7.9L10 0Z" />
          </svg>

          {/* Metallic Gold Top-Left & Bottom-Right Bevel Brackets */}
          <svg
            aria-hidden="true"
            viewBox="0 0 64 64"
            className="pointer-events-none absolute top-0 left-0 z-20 h-8 w-8 sm:h-10 sm:w-10"
            fill="none"
          >
            <defs>
              <linearGradient id="goldCornerTL" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#fff5c4" />
                <stop offset="40%" stopColor="#d99a38" />
                <stop offset="75%" stopColor="#945611" />
                <stop offset="100%" stopColor="#e8ba62" />
              </linearGradient>
            </defs>
            <path d="M1 46 C1 18 14 1 46 1 L46 5 C17 5 5 17 5 46 Z" fill="url(#goldCornerTL)" />
          </svg>

          <svg
            aria-hidden="true"
            viewBox="0 0 64 64"
            className="pointer-events-none absolute bottom-0 right-0 z-20 h-8 w-8 sm:h-10 sm:w-10"
            fill="none"
          >
            <defs>
              <linearGradient id="goldCornerBR" x1="64" y1="64" x2="0" y2="0" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#fff5c4" />
                <stop offset="40%" stopColor="#d99a38" />
                <stop offset="75%" stopColor="#945611" />
                <stop offset="100%" stopColor="#e8ba62" />
              </linearGradient>
            </defs>
            <path d="M63 18 C63 46 50 63 18 63 L18 59 C47 59 59 47 59 18 Z" fill="url(#goldCornerBR)" />
          </svg>

          {/* DESKTOP LEFT & RIGHT SIDE NAVIGATION ARROWS */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous astrology question"
            className="hidden md:inline-flex absolute left-2.5 lg:left-4 top-1/2 -translate-y-1/2 z-30 h-8 w-8 lg:h-9 lg:w-9 items-center justify-center rounded-full border border-[#d6aa72] bg-gradient-to-b from-[#fffdf7]/95 to-[#f3dcba]/95 backdrop-blur-2xs text-[#6d1414] shadow-[0_6px_16px_-4px_rgba(92,42,14,0.25),inset_0_1px_0_rgba(255,255,255,0.9)] hover:scale-105 hover:border-[#b97728] hover:from-[#fff9eb] hover:to-[#ecc792] active:scale-95 transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6d1414]"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next astrology question"
            className="hidden md:inline-flex absolute right-2.5 lg:right-4 top-1/2 -translate-y-1/2 z-30 h-8 w-8 lg:h-9 lg:w-9 items-center justify-center rounded-full border border-[#d6aa72] bg-gradient-to-b from-[#fffdf7]/95 to-[#f3dcba]/95 backdrop-blur-2xs text-[#6d1414] shadow-[0_6px_16px_-4px_rgba(92,42,14,0.25),inset_0_1px_0_rgba(255,255,255,0.9)] hover:scale-105 hover:border-[#b97728] hover:from-[#fff9eb] hover:to-[#ecc792] active:scale-95 transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6d1414]"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* DESKTOP LEFT DUAL-ROTATING CHAKRA WITH CENTER ACHARYA GANESH LOGO & HIGHLIGHTED ZODIAC SIGNS */}
          <div className="pointer-events-none hidden md:flex items-center justify-center absolute left-13 lg:left-16 top-1/2 -translate-y-1/2 z-10">
            <VedicChakraEmblem className="h-36 w-36 lg:h-44 lg:w-44" />
          </div>

          {/* DESKTOP RIGHT SIDE VEDIC KUNDLI CHART ETCHING & BRASS ARMILLARY SPHERE */}
          <div
            aria-hidden="true"
            className="pointer-events-none hidden md:block absolute right-12 lg:right-16 bottom-0 z-10 h-32 w-32 lg:h-38 lg:w-38 select-none"
          >
            {/* Warm Golden Aura Behind Armillary Sphere */}
            <div className="pointer-events-none absolute right-2 bottom-3 h-24 w-24 rounded-full bg-[radial-gradient(circle,rgba(232,175,92,0.32)_0%,transparent_72%)] blur-lg" />

            <svg viewBox="0 0 210 185" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative h-full w-full">
              <defs>
                <linearGradient id="brassMain" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#fff2c2" />
                  <stop offset="42%" stopColor="#d49537" />
                  <stop offset="80%" stopColor="#894f12" />
                  <stop offset="100%" stopColor="#bc7a26" />
                </linearGradient>
              </defs>

              {/* Tilted North-Indian Kundli Diamond Chart */}
              <g transform="translate(86, 10) rotate(5)" opacity="0.38" stroke="#9e652b" strokeWidth="1.05">
                <rect x="6" y="6" width="102" height="102" />
                <line x1="6" y1="6" x2="108" y2="108" />
                <line x1="108" y1="6" x2="6" y2="108" />
                <polygon points="57,6 108,57 57,108 6,57" />
              </g>

              <ellipse cx="144" cy="172" rx="34" ry="7" fill="#703814" fillOpacity="0.22" />

              <g transform="translate(92, 36)">
                <ellipse cx="52" cy="130" rx="24" ry="5.5" fill="url(#brassMain)" />
                <path d="M35 129 C38 119 46 116 52 116 C58 116 66 119 69 129 Z" fill="url(#brassMain)" />
                <rect x="49" y="96" width="6" height="22" fill="url(#brassMain)" />
                <ellipse cx="52" cy="107" rx="7" ry="3.2" fill="#f7d687" />

                <circle cx="52" cy="54" r="42" stroke="url(#brassMain)" strokeWidth="4.2" />
                <circle cx="52" cy="54" r="35" stroke="#8d5314" strokeWidth="1.2" strokeDasharray="3 2" />
                <ellipse cx="52" cy="54" rx="40" ry="15" transform="rotate(-24 52 54)" stroke="url(#brassMain)" strokeWidth="3" />
                <ellipse cx="52" cy="54" rx="40" ry="15" transform="rotate(32 52 54)" stroke="url(#brassMain)" strokeWidth="2.6" />
                <ellipse cx="52" cy="54" rx="16" ry="38" transform="rotate(-12 52 54)" stroke="url(#brassMain)" strokeWidth="2.2" />
                <line x1="28" y1="16" x2="76" y2="92" stroke="url(#brassMain)" strokeWidth="2.4" />
                <circle cx="52" cy="54" r="7" fill="url(#brassMain)" />
                <circle cx="50" cy="52" r="2.2" fill="#fff7d1" />
                <circle cx="52" cy="9" r="3.5" fill="url(#brassMain)" />
              </g>
            </svg>
          </div>

          {/* MAIN CONTENT COLUMN */}
          <div className="relative z-10 w-full px-4 py-3.5 sm:px-6 sm:py-4.5 md:pl-[212px] md:pr-[192px] lg:pl-[268px] lg:pr-[242px]">
            {/* MOBILE HEADER ROW: Circular Dual-Rolling Chakra + Enlarged DO YOU KNOW? Pill */}
            <div className="flex md:hidden items-center gap-3 pb-2.5 border-b border-[#d9b88c]/65">
              <VedicChakraEmblem className="h-18 w-18 sm:h-20 sm:w-20" compact />

              <div className="flex-1 min-w-0 flex items-center">
                <div
                  className={`inline-flex items-center gap-2 rounded-full border border-[#d49d4b] bg-gradient-to-b from-[#fff8e6] via-[#fbe4ba] to-[#f1c781] px-3.5 py-1.5 shadow-[0_6px_14px_-4px_rgba(148,86,17,0.34),inset_0_1px_0_rgba(255,255,255,0.92)] ${
                    isInView ? 'qna-drop-in' : 'opacity-0 -translate-y-5'
                  }`}
                >
                  <span className="inline-flex h-4.5 w-4.5 items-center justify-center rounded-full bg-gradient-to-br from-[#eab55f] to-[#b06d1d] text-[#5c1111] shadow-inner shrink-0">
                    <svg viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor" aria-hidden="true">
                      <path d="M12 1.5L14.4 9.6L22.5 12L14.4 14.4L12 22.5L9.6 14.4L1.5 12L9.6 9.6L12 1.5Z" />
                    </svg>
                  </span>
                  <span className="text-[14px] sm:text-[15px] font-extrabold uppercase tracking-[0.14em] text-[#6a1014] whitespace-nowrap">
                    DO YOU KNOW?
                  </span>
                </div>
              </div>
            </div>

            {/* DESKTOP TOP BAR: Centered Prominent DO YOU KNOW? Pill Flanked by Delicate Gold Hairlines */}
            <div className="hidden md:flex items-center justify-center gap-4">
              <div aria-hidden="true" className="flex items-center flex-1 max-w-[140px] justify-end">
                <span className="h-px flex-1 bg-gradient-to-l from-[#d4973c]/85 to-transparent" />
                <svg viewBox="0 0 20 20" className="h-3.5 w-3.5 text-[#d4973c] shrink-0" fill="currentColor">
                  <path d="M10 0L12.1 7.9L20 10L12.1 12.1L10 20L7.9 12.1L0 10L7.9 7.9L10 0Z" />
                </svg>
              </div>

              <div
                className={`inline-flex items-center gap-2 rounded-full border border-[#d49d4b] bg-gradient-to-b from-[#fff8e6] via-[#fbe4ba] to-[#f1c781] px-4.5 py-1.5 shadow-[0_6px_16px_-4px_rgba(148,86,17,0.34),inset_0_1px_0_rgba(255,255,255,0.92)] ${
                  isInView ? 'qna-drop-in' : 'opacity-0 -translate-y-5'
                }`}
              >
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-[#eab55f] to-[#b06d1d] text-[#5c1111] shadow-inner shrink-0">
                  <svg viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor" aria-hidden="true">
                    <path d="M12 1.5L14.4 9.6L22.5 12L14.4 14.4L12 22.5L9.6 14.4L1.5 12L9.6 9.6L12 1.5Z" />
                  </svg>
                </span>
                <span className="text-[14px] lg:text-[15px] font-extrabold uppercase tracking-[0.16em] text-[#6a1014] whitespace-nowrap">
                  DO YOU KNOW?
                </span>
              </div>

              <div aria-hidden="true" className="flex items-center flex-1 max-w-[140px]">
                <svg viewBox="0 0 20 20" className="h-3.5 w-3.5 text-[#d4973c] shrink-0" fill="currentColor">
                  <path d="M10 0L12.1 7.9L20 10L12.1 12.1L10 20L7.9 12.1L0 10L7.9 7.9L10 0Z" />
                </svg>
                <span className="h-px flex-1 bg-gradient-to-r from-[#d4973c]/85 to-transparent" />
              </div>
            </div>

            {/* Question & Compact 2-Line Illuminated Answer with Mobile Left/Right Navigation Arrows */}
            <div className="relative mt-2.5 sm:mt-3">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous astrology question"
                className="md:hidden absolute -left-2 top-1/2 -translate-y-1/2 z-20 inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#d6aa72] bg-gradient-to-b from-[#fffdf7]/95 to-[#f3dcba]/95 text-[#6d1414] shadow-[0_4px_12px_-2px_rgba(92,42,14,0.25),inset_0_1px_0_rgba(255,255,255,0.9)] active:scale-95 transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6d1414]"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={handleNext}
                aria-label="Next astrology question"
                className="md:hidden absolute -right-2 top-1/2 -translate-y-1/2 z-20 inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#d6aa72] bg-gradient-to-b from-[#fffdf7]/95 to-[#f3dcba]/95 text-[#6d1414] shadow-[0_4px_12px_-2px_rgba(92,42,14,0.25),inset_0_1px_0_rgba(255,255,255,0.9)] active:scale-95 transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6d1414]"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              <div key={currentItem.id} className="qna-fade-slide px-8 sm:px-9 md:px-0 space-y-2">
                <h2 className="font-serif-display text-[1.15rem] sm:text-[1.42rem] lg:text-[1.56rem] font-bold text-[#610b0f] leading-[1.22] tracking-[-0.012em] drop-shadow-[0_1px_0_rgba(255,255,255,0.75)]">
                  {currentItem.question}
                </h2>

                <div className="rounded-xl border border-[#e3c396]/85 border-l-[3px] border-l-[#b5651d] bg-white/68 backdrop-blur-xs px-3.5 py-2 sm:px-4.5 sm:py-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.92),0_8px_18px_-10px_rgba(93,46,10,0.14)]">
                  <p className="text-[13px] sm:text-[14.5px] text-[#2c1e14] leading-[1.45] font-normal">
                    {currentItem.answer}
                  </p>
                </div>
              </div>
            </div>

            {/* Subtle Horizontal Tan Divider */}
            <div
              aria-hidden="true"
              className="mt-3 h-px w-full bg-gradient-to-r from-[#d2aa77]/65 via-[#cfa46e]/80 to-transparent"
            />

            {/* Bottom Controls Row: Step Indicators + Luminous Maroon-Gold CTA Button */}
            <div className="mt-2.5 sm:mt-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5 sm:gap-4">
              <div className="flex items-center justify-center sm:justify-start gap-2" role="tablist" aria-label="Astrology Q&A Slides">
                {ASTROLOGY_QNA_ITEMS.map((item, idx) => {
                  const isCurrent = idx === activeIndex;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      role="tab"
                      aria-selected={isCurrent}
                      aria-label={`View question ${idx + 1}: ${item.question}`}
                      onClick={() => setActiveIndex(idx)}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        isCurrent
                          ? 'w-8 bg-gradient-to-r from-[#7c1519] via-[#a3282c] to-[#c97e32] shadow-[0_1px_6px_rgba(124,21,25,0.4)]'
                          : 'w-2 bg-[#d5b793] hover:bg-[#b58754]'
                      }`}
                    />
                  );
                })}
              </div>

              <button
                type="button"
                onClick={() => {
                  setModalCategory('All');
                  setIsMoreModalOpen(true);
                }}
                className="group/cta relative overflow-hidden inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-[#d8a65a] bg-gradient-to-b from-[#9b2428] via-[#761317] to-[#520a0d] hover:from-[#ac2a2f] hover:to-[#630d11] px-4.5 py-2 text-xs sm:text-[13px] font-semibold text-white shadow-[0_8px_18px_-6px_rgba(86,11,14,0.58),inset_0_1px_0_rgba(255,224,185,0.42)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer whitespace-nowrap"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 -translate-x-full group-hover/cta:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                />
                <span className="relative">Explore More Astrology Questions →</span>
              </button>
            </div>
          </div>

          {/* 10-second auto-advance progress bar along bottom edge */}
          {!isPaused && !isMoreModalOpen && (
            <div className="relative z-10 h-[3.5px] w-full bg-[#e3c6a0]/65 overflow-hidden" aria-hidden="true">
              <div
                key={`progress-${activeIndex}`}
                className="qna-progress-bar h-full w-full bg-gradient-to-r from-[#7c1519] via-[#d38b37] to-[#7c1519]"
              />
            </div>
          )}
        </article>
      </div>

      {/* Quick Q&A Explorer Modal */}
      {isMoreModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 p-4 backdrop-blur-xs"
          onClick={() => setIsMoreModalOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="more-qna-modal-title"
            className="w-full max-w-2xl max-h-[85vh] flex flex-col rounded-2xl bg-background border border-border shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-5 py-4 bg-muted border-b border-border flex items-center justify-between gap-4">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#7c1519]">
                  DO YOU KNOW?
                </p>
                <h3
                  id="more-qna-modal-title"
                  className="font-display text-lg sm:text-xl font-bold text-heading"
                >
                  Quick Vedic Astrology Answers
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsMoreModalOpen(false)}
                aria-label="Close Q&A Explorer"
                className="p-2 rounded-full bg-card border border-border text-heading hover:bg-secondary/40 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="px-5 py-3 bg-card border-b border-border flex items-center gap-2 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {(['All', ...ASTROLOGY_QNA_CATEGORIES] as const).map((cat) => {
                const active = modalCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setModalCategory(cat)}
                    className={`shrink-0 rounded-full px-3.5 py-1.5 text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                      active
                        ? 'bg-[#7c1519] text-white'
                        : 'bg-muted text-heading border border-border hover:border-primary/40'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            <div className="flex-1 overflow-y-auto p-5 space-y-3.5">
              {modalItems.map((item) => (
                <div
                  key={item.id}
                  className="rounded-xl bg-muted border border-border p-4 space-y-1.5"
                >
                  <div className="flex items-center justify-between gap-2 text-[11px] font-semibold uppercase tracking-wider text-[#7c1519]">
                    <span>DO YOU KNOW?</span>
                    <span className="text-muted-foreground">{item.category}</span>
                  </div>
                  <h4 className="font-display text-base font-bold text-heading">
                    {item.question}
                  </h4>
                  <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed">
                    {item.detailedAnswer || item.answer}
                  </p>
                </div>
              ))}
            </div>

            {onOpenBooking && (
              <div className="px-5 py-3.5 bg-muted border-t border-border flex items-center justify-between gap-3">
                <span className="text-xs text-muted-foreground">
                  Want answers specific to your own Kundli?
                </span>
                <button
                  type="button"
                  onClick={() => {
                    setIsMoreModalOpen(false);
                    onOpenBooking();
                  }}
                  className="inline-flex items-center gap-1.5 rounded-full bg-[#7c1519] hover:bg-[#611014] text-white px-4 py-2 text-xs font-semibold whitespace-nowrap cursor-pointer"
                >
                  <span>Book A Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
