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
      <div className="pointer-events-none absolute -inset-3 rounded-full bg-[radial-gradient(circle,rgba(245,196,95,0.38)_0%,rgba(232,175,92,0.1)_55%,transparent_75%)] blur-md" />

      {/* Outer Clockwise Rolling Zodiac Wheel */}
      <svg
        viewBox="0 0 280 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative h-full w-full qna-chakra-roll drop-shadow-[0_8px_18px_rgba(0,0,0,0.45)]"
      >
        <defs>
          <radialGradient id={rimId} cx="50%" cy="50%" r="50%">
            <stop offset="56%" stopColor="#fff8eb" stopOpacity="0" />
            <stop offset="68%" stopColor="#fce4ae" stopOpacity="0.96" />
            <stop offset="93%" stopColor="#eab34f" stopOpacity="0.98" />
            <stop offset="100%" stopColor="#b06a14" stopOpacity="1" />
          </radialGradient>
          <linearGradient id={strokeId} x1="0" y1="0" x2="280" y2="280" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ffe79e" />
            <stop offset="48%" stopColor="#e6a83c" />
            <stop offset="100%" stopColor="#94520d" />
          </linearGradient>
        </defs>

        {/* Outer Brass Rim & Zodiac Annular Band */}
        <circle cx="140" cy="140" r="135" fill={`url(#${rimId})`} stroke={`url(#${strokeId})`} strokeWidth="2.8" />
        <circle cx="140" cy="140" r="127" stroke="#85450d" strokeWidth="1" strokeDasharray="2.5 3.5" />
        <circle cx="140" cy="140" r="86" fill="#fffaf2" fillOpacity="0.88" stroke={`url(#${strokeId})`} strokeWidth="2.4" />

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
                stroke="#7a3c09"
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
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full bg-gradient-to-b from-[#ffffff] to-[#fdf1d6] border-2 border-[#e3a134] ring-2 ring-[#ffe39c]/80 shadow-[0_0_24px_rgba(245,196,95,0.45),inset_0_0_8px_rgba(232,186,98,0.4)] ${
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
        for (const entry of entries) {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.4) {
            setIsInView(true);
          } else if (!entry.isIntersecting) {
            setIsInView(false);
          }
        }
      },
      {
        rootMargin: '0px 0px -64px 0px',
        threshold: [0, 0.4]
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
          className="group relative w-full overflow-hidden rounded-2xl border-[1.5px] border-[#ecc067] bg-[radial-gradient(ellipse_76%_88%_at_50%_45%,#8c0f15_0%,#5c070b_54%,#310204_100%)] shadow-[0_18px_42px_-12px_rgba(68,5,8,0.54),0_0_24px_-4px_rgba(232,179,84,0.34),inset_0_0_18px_rgba(245,196,95,0.2)] transition-shadow duration-300 hover:shadow-[0_22px_50px_-12px_rgba(68,5,8,0.65),0_0_28px_-2px_rgba(245,196,95,0.42)]"
        >
          {/* Rich Crimson Velvet Depth + Luminous Top/Bottom Gold Specular Streaks */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_50%,rgba(196,35,38,0.24)_0%,transparent_44%),radial-gradient(circle_at_88%_55%,rgba(232,175,92,0.16)_0%,transparent_40%)]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-[72%] bg-gradient-to-r from-transparent via-[#fff0ad]/80 to-transparent blur-[0.5px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-[72%] bg-gradient-to-r from-transparent via-[#fff0ad]/60 to-transparent blur-[0.5px]"
          />

          {/* Gold Manuscript Double Inner Frame */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-[6px] rounded-[11px] border border-[#f2c66d]/55"
          />

          {/* Subtle Crimson/Gold Zodiac Arcs & Twinkling Star Points */}
          <svg
            aria-hidden="true"
            viewBox="0 0 1200 260"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.24] text-[#f5c05e]"
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
            className="pointer-events-none hidden md:block absolute top-4 left-[27%] h-3 w-3 text-[#ffe394] qna-star-twinkle"
            fill="currentColor"
          >
            <path d="M10 0L12.1 7.9L20 10L12.1 12.1L10 20L7.9 12.1L0 10L7.9 7.9L10 0Z" />
          </svg>
          <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            style={{ animationDelay: '1.8s' }}
            className="pointer-events-none hidden md:block absolute top-5 right-[26%] h-2.5 w-2.5 text-[#ffd978] qna-star-twinkle"
            fill="currentColor"
          >
            <path d="M10 0L12.1 7.9L20 10L12.1 12.1L10 20L7.9 12.1L0 10L7.9 7.9L10 0Z" />
          </svg>

          {/* Ornate Metallic Gold Corner Filigree Brackets (All 4 Corners) */}
          <svg
            aria-hidden="true"
            viewBox="0 0 64 64"
            className="pointer-events-none absolute top-1 left-1 z-20 h-9 w-9 sm:h-11 sm:w-11"
            fill="none"
          >
            <defs>
              <linearGradient id="goldCornerTL" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#fff7c8" />
                <stop offset="45%" stopColor="#ebb14d" />
                <stop offset="100%" stopColor="#9e5a10" />
              </linearGradient>
            </defs>
            <path d="M4 46 C4 18 16 4 46 4" stroke="url(#goldCornerTL)" strokeWidth="2" strokeLinecap="round" />
            <path d="M10 34 C10 20 18 10 34 10 C28 16 20 22 18 30 C16 24 12 28 10 34 Z" fill="url(#goldCornerTL)" opacity="0.9" />
            <circle cx="15" cy="15" r="2.2" fill="#fff3bc" />
          </svg>

          <svg
            aria-hidden="true"
            viewBox="0 0 64 64"
            className="pointer-events-none absolute top-1 right-1 z-20 h-9 w-9 sm:h-11 sm:w-11 -scale-x-100"
            fill="none"
          >
            <path d="M4 46 C4 18 16 4 46 4" stroke="url(#goldCornerTL)" strokeWidth="2" strokeLinecap="round" />
            <path d="M10 34 C10 20 18 10 34 10 C28 16 20 22 18 30 C16 24 12 28 10 34 Z" fill="url(#goldCornerTL)" opacity="0.9" />
            <circle cx="15" cy="15" r="2.2" fill="#fff3bc" />
          </svg>

          <svg
            aria-hidden="true"
            viewBox="0 0 64 64"
            className="pointer-events-none absolute bottom-1 left-1 z-20 h-9 w-9 sm:h-11 sm:w-11 -scale-y-100"
            fill="none"
          >
            <path d="M4 46 C4 18 16 4 46 4" stroke="url(#goldCornerTL)" strokeWidth="2" strokeLinecap="round" />
            <path d="M10 34 C10 20 18 10 34 10 C28 16 20 22 18 30 C16 24 12 28 10 34 Z" fill="url(#goldCornerTL)" opacity="0.9" />
            <circle cx="15" cy="15" r="2.2" fill="#fff3bc" />
          </svg>

          <svg
            aria-hidden="true"
            viewBox="0 0 64 64"
            className="pointer-events-none absolute bottom-1 right-1 z-20 h-9 w-9 sm:h-11 sm:w-11 -scale-x-100 -scale-y-100"
            fill="none"
          >
            <path d="M4 46 C4 18 16 4 46 4" stroke="url(#goldCornerTL)" strokeWidth="2" strokeLinecap="round" />
            <path d="M10 34 C10 20 18 10 34 10 C28 16 20 22 18 30 C16 24 12 28 10 34 Z" fill="url(#goldCornerTL)" opacity="0.9" />
            <circle cx="15" cy="15" r="2.2" fill="#fff3bc" />
          </svg>

          {/* DESKTOP LEFT & RIGHT SIDE NAVIGATION ARROWS */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous astrology question"
            className="hidden md:inline-flex absolute left-2.5 lg:left-4 top-1/2 -translate-y-1/2 z-30 h-8 w-8 lg:h-9 lg:w-9 items-center justify-center rounded-full border border-[#ffe8a6] bg-gradient-to-b from-[#ffec9f] via-[#f0bc58] to-[#cb8420] text-[#450608] shadow-[0_6px_16px_-2px_rgba(0,0,0,0.45),0_0_12px_rgba(245,196,95,0.35),inset_0_1px_0_rgba(255,255,255,0.9)] hover:scale-105 hover:brightness-105 active:scale-95 transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffe8a6]"
          >
            <ChevronLeft className="w-4 h-4 stroke-[2.6]" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next astrology question"
            className="hidden md:inline-flex absolute right-2.5 lg:right-4 top-1/2 -translate-y-1/2 z-30 h-8 w-8 lg:h-9 lg:w-9 items-center justify-center rounded-full border border-[#ffe8a6] bg-gradient-to-b from-[#ffec9f] via-[#f0bc58] to-[#cb8420] text-[#450608] shadow-[0_6px_16px_-2px_rgba(0,0,0,0.45),0_0_12px_rgba(245,196,95,0.35),inset_0_1px_0_rgba(255,255,255,0.9)] hover:scale-105 hover:brightness-105 active:scale-95 transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffe8a6]"
          >
            <ChevronRight className="w-4 h-4 stroke-[2.6]" />
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
            <div className="pointer-events-none absolute right-2 bottom-3 h-24 w-24 rounded-full bg-[radial-gradient(circle,rgba(245,196,95,0.38)_0%,transparent_72%)] blur-lg" />

            <svg viewBox="0 0 210 185" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative h-full w-full">
              <defs>
                <linearGradient id="brassMain" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#fff3c4" />
                  <stop offset="42%" stopColor="#eeb34d" />
                  <stop offset="80%" stopColor="#9c5a12" />
                  <stop offset="100%" stopColor="#d8922b" />
                </linearGradient>
              </defs>

              {/* Tilted North-Indian Kundli Diamond Chart */}
              <g transform="translate(86, 10) rotate(5)" opacity="0.28" stroke="#f2ba5a" strokeWidth="1.05">
                <rect x="6" y="6" width="102" height="102" />
                <line x1="6" y1="6" x2="108" y2="108" />
                <line x1="108" y1="6" x2="6" y2="108" />
                <polygon points="57,6 108,57 57,108 6,57" />
              </g>

              <ellipse cx="144" cy="172" rx="34" ry="7" fill="#1a0102" fillOpacity="0.45" />

              <g transform="translate(92, 36)">
                <ellipse cx="52" cy="130" rx="24" ry="5.5" fill="url(#brassMain)" />
                <path d="M35 129 C38 119 46 116 52 116 C58 116 66 119 69 129 Z" fill="url(#brassMain)" />
                <rect x="49" y="96" width="6" height="22" fill="url(#brassMain)" />
                <ellipse cx="52" cy="107" rx="7" ry="3.2" fill="#ffe18c" />

                <circle cx="52" cy="54" r="42" stroke="url(#brassMain)" strokeWidth="4.2" />
                <circle cx="52" cy="54" r="35" stroke="#a66217" strokeWidth="1.2" strokeDasharray="3 2" />
                <ellipse cx="52" cy="54" rx="40" ry="15" transform="rotate(-24 52 54)" stroke="url(#brassMain)" strokeWidth="3" />
                <ellipse cx="52" cy="54" rx="40" ry="15" transform="rotate(32 52 54)" stroke="url(#brassMain)" strokeWidth="2.6" />
                <ellipse cx="52" cy="54" rx="16" ry="38" transform="rotate(-12 52 54)" stroke="url(#brassMain)" strokeWidth="2.2" />
                <line x1="28" y1="16" x2="76" y2="92" stroke="url(#brassMain)" strokeWidth="2.4" />
                <circle cx="52" cy="54" r="7" fill="url(#brassMain)" />
                <circle cx="50" cy="52" r="2.2" fill="#fff8d6" />
                <circle cx="52" cy="9" r="3.5" fill="url(#brassMain)" />
              </g>
            </svg>
          </div>

          {/* MAIN CONTENT COLUMN */}
          <div className="relative z-10 w-full px-4 py-3.5 sm:px-6 sm:py-4.5 md:pl-[212px] md:pr-[192px] lg:pl-[268px] lg:pr-[242px]">
            {/* MOBILE HEADER ROW: Circular Dual-Rolling Chakra + Enlarged DO YOU KNOW? Pill */}
            <div className="flex md:hidden items-center gap-3 pb-2.5 border-b border-[#f0c064]/30">
              <VedicChakraEmblem className="h-18 w-18 sm:h-20 sm:w-20" compact />

              <div className="flex-1 min-w-0 flex items-center">
                <div
                  className={`inline-flex items-center gap-2 rounded-full border border-[#ffe8a8] bg-gradient-to-b from-[#ffeb9e] via-[#f2bb53] to-[#cf841d] px-3.5 py-1.5 shadow-[0_6px_16px_-4px_rgba(0,0,0,0.45),0_0_14px_rgba(245,196,95,0.35),inset_0_1px_0_rgba(255,255,255,0.92)] ${
                    isInView ? 'qna-drop-in' : 'opacity-0 -translate-y-6'
                  }`}
                >
                  <span className="inline-flex h-4.5 w-4.5 items-center justify-center rounded-full bg-gradient-to-br from-[#cf871d] to-[#8a4d0c] text-[#460709] shadow-inner shrink-0">
                    <svg viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor" aria-hidden="true">
                      <path d="M12 1.5L14.4 9.6L22.5 12L14.4 14.4L12 22.5L9.6 14.4L1.5 12L9.6 9.6L12 1.5Z" />
                    </svg>
                  </span>
                  <span className="text-[14px] sm:text-[15px] font-extrabold uppercase tracking-[0.14em] text-[#460709] whitespace-nowrap">
                    DO YOU KNOW?
                  </span>
                </div>
              </div>
            </div>

            {/* DESKTOP TOP BAR: Centered Prominent DO YOU KNOW? Pill Flanked by Glowing Gold Hairlines */}
            <div className="hidden md:flex items-center justify-center gap-4">
              <div aria-hidden="true" className="flex items-center flex-1 max-w-[140px] justify-end">
                <span className="h-px flex-1 bg-gradient-to-l from-[#ffe08a]/85 to-transparent" />
                <svg viewBox="0 0 20 20" className="h-3.5 w-3.5 text-[#ffe394] shrink-0" fill="currentColor">
                  <path d="M10 0L12.1 7.9L20 10L12.1 12.1L10 20L7.9 12.1L0 10L7.9 7.9L10 0Z" />
                </svg>
              </div>

              <div
                className={`inline-flex items-center gap-2 rounded-full border border-[#ffe8a8] bg-gradient-to-b from-[#ffeb9e] via-[#f2bb53] to-[#cf841d] px-4.5 py-1.5 shadow-[0_6px_16px_-4px_rgba(0,0,0,0.45),0_0_16px_rgba(245,196,95,0.38),inset_0_1px_0_rgba(255,255,255,0.92)] ${
                  isInView ? 'qna-drop-in' : 'opacity-0 -translate-y-6'
                }`}
              >
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-[#cf871d] to-[#8a4d0c] text-[#460709] shadow-inner shrink-0">
                  <svg viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor" aria-hidden="true">
                    <path d="M12 1.5L14.4 9.6L22.5 12L14.4 14.4L12 22.5L9.6 14.4L1.5 12L9.6 9.6L12 1.5Z" />
                  </svg>
                </span>
                <span className="text-[14px] lg:text-[15px] font-extrabold uppercase tracking-[0.16em] text-[#460709] whitespace-nowrap">
                  DO YOU KNOW?
                </span>
              </div>

              <div aria-hidden="true" className="flex items-center flex-1 max-w-[140px]">
                <svg viewBox="0 0 20 20" className="h-3.5 w-3.5 text-[#ffe394] shrink-0" fill="currentColor">
                  <path d="M10 0L12.1 7.9L20 10L12.1 12.1L10 20L7.9 12.1L0 10L7.9 7.9L10 0Z" />
                </svg>
                <span className="h-px flex-1 bg-gradient-to-r from-[#ffe08a]/85 to-transparent" />
              </div>
            </div>

            {/* Question & Bold Cream-Gold Illuminated Answer with Mobile Left/Right Navigation Arrows */}
            <div className="relative mt-2.5 sm:mt-3">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous astrology question"
                className="md:hidden absolute -left-2 top-1/2 -translate-y-1/2 z-20 inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#ffe8a6] bg-gradient-to-b from-[#ffec9f] via-[#f0bc58] to-[#cb8420] text-[#450608] shadow-[0_4px_12px_-2px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.9)] active:scale-95 transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffe8a6]"
              >
                <ChevronLeft className="w-4 h-4 stroke-[2.6]" />
              </button>

              <button
                type="button"
                onClick={handleNext}
                aria-label="Next astrology question"
                className="md:hidden absolute -right-2 top-1/2 -translate-y-1/2 z-20 inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#ffe8a6] bg-gradient-to-b from-[#ffec9f] via-[#f0bc58] to-[#cb8420] text-[#450608] shadow-[0_4px_12px_-2px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.9)] active:scale-95 transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffe8a6]"
              >
                <ChevronRight className="w-4 h-4 stroke-[2.6]" />
              </button>

              <div key={currentItem.id} className="qna-fade-slide px-8 sm:px-9 md:px-0 space-y-2">
                <h2 className="font-serif-display text-[1.15rem] sm:text-[1.42rem] lg:text-[1.56rem] font-bold text-[#fff7e2] leading-[1.22] tracking-[-0.012em] drop-shadow-[0_2px_6px_rgba(0,0,0,0.45)]">
                  {currentItem.question}
                </h2>

                <div className="rounded-xl sm:rounded-full border border-[#f2c465] bg-gradient-to-b from-[#fffbf2] via-[#fdf2da] to-[#f8e1b6] px-4 py-2 sm:px-5 sm:py-2.5 shadow-[0_10px_24px_-8px_rgba(0,0,0,0.48),0_0_16px_-4px_rgba(245,196,95,0.36),inset_0_1px_0_rgba(255,255,255,0.95)]">
                  <p className="text-[13px] sm:text-[14.5px] text-[#3a120a] leading-[1.45] font-bold">
                    {currentItem.answer}
                  </p>
                </div>
              </div>
            </div>

            {/* Subtle Horizontal Gold Divider */}
            <div
              aria-hidden="true"
              className="mt-3 h-px w-full bg-gradient-to-r from-[#f2c46d]/45 via-[#f2c46d]/65 to-transparent"
            />

            {/* Bottom Controls Row: Glowing Gold Step Indicators + Ruby-Gold CTA Button */}
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
                          ? 'w-8 bg-gradient-to-r from-[#ffe699] via-[#f0b44b] to-[#d48820] shadow-[0_0_10px_rgba(245,196,95,0.65)]'
                          : 'w-2 bg-[#f3d199]/55 hover:bg-[#ffe1a6]'
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
                className="group/cta relative overflow-hidden inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-[#f2c465] bg-gradient-to-b from-[#a81a20] via-[#780b10] to-[#460407] hover:from-[#be2128] hover:to-[#59070b] px-5 py-2 text-xs sm:text-[13px] font-semibold text-white shadow-[0_8px_18px_-6px_rgba(0,0,0,0.55),0_0_14px_-2px_rgba(242,196,101,0.35),inset_0_1px_0_rgba(255,224,185,0.45)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer whitespace-nowrap"
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
            <div className="relative z-10 h-[3.5px] w-full bg-[#2a0305]/70 overflow-hidden" aria-hidden="true">
              <div
                key={`progress-${activeIndex}`}
                className="qna-progress-bar h-full w-full bg-gradient-to-r from-[#d48820] via-[#ffe699] to-[#d48820]"
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
