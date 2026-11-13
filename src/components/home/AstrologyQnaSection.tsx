import React, { useEffect, useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, X } from 'lucide-react';
import {
  ASTROLOGY_QNA_CATEGORIES,
  ASTROLOGY_QNA_ITEMS,
  AstrologyQnaCategory
} from '../../data/homePageData';

interface AstrologyQnaSectionProps {
  onOpenBooking?: () => void;
}

const ROTATE_INTERVAL_MS = 5000;

const ZODIAC_GLYPHS = ['♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓'];

export const AstrologyQnaSection: React.FC<AstrologyQnaSectionProps> = ({ onOpenBooking }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMoreModalOpen, setIsMoreModalOpen] = useState(false);
  const [modalCategory, setModalCategory] = useState<AstrologyQnaCategory | 'All'>('All');

  const totalItems = ASTROLOGY_QNA_ITEMS.length;
  const currentItem = ASTROLOGY_QNA_ITEMS[activeIndex] || ASTROLOGY_QNA_ITEMS[0];

  useEffect(() => {
    if (isPaused || isMoreModalOpen || totalItems <= 1) return;

    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalItems);
    }, ROTATE_INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, [isPaused, isMoreModalOpen, totalItems]);

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
      id="astrology-qna"
      aria-label="Do You Know Astrology Insights"
      className="relative w-full"
    >
      <article
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
        className="relative w-full overflow-hidden border-y border-[#d6ab72] bg-gradient-to-r from-[#f2d6b3] via-[#fdf3e3] to-[#f1d6b5] shadow-[0_14px_34px_-14px_rgba(92,42,14,0.18)]"
      >
        {/* Warm Parchment Center Luminance & Subtle Paper Vignette */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_85%_at_50%_42%,rgba(255,252,246,0.92)_0%,rgba(253,242,226,0.55)_58%,rgba(229,189,141,0.35)_100%)]"
        />

        {/* Metallic Gold Top-Left Corner Accent */}
        <svg
          aria-hidden="true"
          viewBox="0 0 64 64"
          className="pointer-events-none absolute top-0 left-0 z-20 h-9 w-9 sm:h-11 sm:w-11"
          fill="none"
        >
          <defs>
            <linearGradient id="goldCornerTL" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#fff3b8" />
              <stop offset="40%" stopColor="#d99a38" />
              <stop offset="75%" stopColor="#945611" />
              <stop offset="100%" stopColor="#e8ba62" />
            </linearGradient>
          </defs>
          <path d="M0 0 L42 0 L38 4 L4 4 L4 38 L0 42 Z" fill="url(#goldCornerTL)" />
        </svg>

        {/* Metallic Gold Bottom-Right Corner Accent */}
        <svg
          aria-hidden="true"
          viewBox="0 0 64 64"
          className="pointer-events-none absolute bottom-0 right-0 z-20 h-9 w-9 sm:h-11 sm:w-11"
          fill="none"
        >
          <defs>
            <linearGradient id="goldCornerBR" x1="64" y1="64" x2="0" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#fff3b8" />
              <stop offset="40%" stopColor="#d99a38" />
              <stop offset="75%" stopColor="#945611" />
              <stop offset="100%" stopColor="#e8ba62" />
            </linearGradient>
          </defs>
          <path d="M64 64 L22 64 L26 60 L60 60 L60 26 L64 22 Z" fill="url(#goldCornerBR)" />
        </svg>

        {/* LEFT SIDE ROLLING CHAKRA (Etched Vedic Zodiac Wheel — Continuously Rotating) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 top-2 sm:-left-16 sm:-top-1 md:-left-10 md:top-1 h-52 w-52 sm:h-64 sm:w-64 opacity-[0.46] text-[#9b6127]"
        >
          <svg
            viewBox="0 0 260 260"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-full w-full qna-chakra-roll"
          >
            {/* Concentric Astrological Rings */}
            <circle cx="130" cy="130" r="122" stroke="currentColor" strokeWidth="1.2" />
            <circle cx="130" cy="130" r="114" stroke="currentColor" strokeWidth="0.9" strokeDasharray="2 3" />
            <circle cx="130" cy="130" r="94" stroke="currentColor" strokeWidth="1.3" />
            <circle cx="130" cy="130" r="64" stroke="currentColor" strokeWidth="1" />
            <circle cx="130" cy="130" r="34" stroke="currentColor" strokeWidth="1.2" />

            {/* Degree Tick Marks around Outer Ring */}
            {Array.from({ length: 72 }).map((_, idx) => {
              const angle = (idx * 5 * Math.PI) / 180;
              const inner = idx % 6 === 0 ? 113 : 117;
              return (
                <line
                  key={`tick-${idx}`}
                  x1={130 + Math.cos(angle) * inner}
                  y1={130 + Math.sin(angle) * inner}
                  x2={130 + Math.cos(angle) * 122}
                  y2={130 + Math.sin(angle) * 122}
                  stroke="currentColor"
                  strokeWidth={idx % 6 === 0 ? '1.1' : '0.6'}
                />
              );
            })}

            {/* 12 House Divisions & Zodiac Glyphs */}
            {ZODIAC_GLYPHS.map((glyph, idx) => {
              const spokeAngle = (idx * 30 * Math.PI) / 180;
              const labelAngle = ((idx * 30 + 15) * Math.PI) / 180;
              const lx = 130 + Math.cos(labelAngle) * 104;
              const ly = 130 + Math.sin(labelAngle) * 104;
              return (
                <g key={glyph}>
                  <line
                    x1={130 + Math.cos(spokeAngle) * 34}
                    y1={130 + Math.sin(spokeAngle) * 34}
                    x2={130 + Math.cos(spokeAngle) * 122}
                    y2={130 + Math.sin(spokeAngle) * 122}
                    stroke="currentColor"
                    strokeWidth="0.95"
                  />
                  <text
                    x={lx}
                    y={ly}
                    fill="currentColor"
                    fontSize="10"
                    fontWeight="600"
                    textAnchor="middle"
                    dominantBaseline="central"
                    transform={`rotate(${idx * 30 + 105}, ${lx}, ${ly})`}
                  >
                    {glyph}
                  </text>
                </g>
              );
            })}

            {/* Center 8-Point Celestial Star */}
            {Array.from({ length: 8 }).map((_, idx) => {
              const angle = (idx * 45 * Math.PI) / 180;
              return (
                <polygon
                  key={`ray-${idx}`}
                  points={`130,130 ${130 + Math.cos(angle - 0.16) * 14},${130 + Math.sin(angle - 0.16) * 14} ${130 + Math.cos(angle) * 33},${130 + Math.sin(angle) * 33} ${130 + Math.cos(angle + 0.16) * 14},${130 + Math.sin(angle + 0.16) * 14}`}
                  fill="currentColor"
                  fillOpacity="0.4"
                  stroke="currentColor"
                  strokeWidth="0.6"
                />
              );
            })}
            <circle cx="130" cy="130" r="6" fill="currentColor" fillOpacity="0.7" />
          </svg>
        </div>

        {/* BOTTOM-LEFT ROSE PLANET SPHERE, ANTIQUE TOME & LOTUS ARTWORK */}
        <div
          aria-hidden="true"
          className="pointer-events-none hidden md:block absolute left-2 bottom-0 z-10 h-40 w-40 select-none"
        >
          <svg viewBox="0 0 180 170" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
            <defs>
              <radialGradient id="roseOrb" cx="38%" cy="32%" r="65%">
                <stop offset="0%" stopColor="#fce0c8" />
                <stop offset="32%" stopColor="#df8a77" />
                <stop offset="72%" stopColor="#b04a42" />
                <stop offset="100%" stopColor="#722625" />
              </radialGradient>
              <linearGradient id="goldRelief" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#fff4be" />
                <stop offset="50%" stopColor="#e5ab4d" />
                <stop offset="100%" stopColor="#945616" />
              </linearGradient>
              <linearGradient id="petalGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#fde7db" />
                <stop offset="100%" stopColor="#d99184" />
              </linearGradient>
            </defs>

            {/* Soft shadow & ancient book spine */}
            <ellipse cx="95" cy="154" rx="70" ry="11" fill="#703814" fillOpacity="0.22" />
            <path d="M52 146 L152 138 L160 150 L58 158 Z" fill="#8b5c34" />
            <path d="M54 143 L148 135 L154 141 L58 149 Z" fill="#e9cfb0" />
            <ellipse cx="102" cy="138" rx="46" ry="8" fill="url(#goldRelief)" opacity="0.88" />

            {/* Rose Quartz Sphere */}
            <circle cx="88" cy="90" r="46" fill="url(#roseOrb)" />
            <ellipse cx="72" cy="70" rx="18" ry="10" transform="rotate(-24 72 70)" fill="#ffffff" fillOpacity="0.26" />

            {/* Embossed Golden Venus Emblem */}
            <circle cx="88" cy="79" r="15" stroke="url(#goldRelief)" strokeWidth="5.2" />
            <line x1="88" y1="95" x2="88" y2="122" stroke="url(#goldRelief)" strokeWidth="5.2" strokeLinecap="round" />
            <line x1="76" y1="110" x2="100" y2="110" stroke="url(#goldRelief)" strokeWidth="5.2" strokeLinecap="round" />

            {/* Delicate Peach Lotus / Lily Blooms at Base */}
            <g transform="translate(4 88)">
              <path d="M26 52 C14 34 22 18 32 14 C40 22 40 38 26 52 Z" fill="url(#petalGrad)" stroke="#b86b5e" strokeWidth="0.7" />
              <path d="M28 52 C38 30 56 26 60 36 C54 46 42 52 28 52 Z" fill="url(#petalGrad)" stroke="#b86b5e" strokeWidth="0.7" />
              <path d="M26 54 C12 48 4 36 8 26 C18 28 26 38 26 54 Z" fill="url(#petalGrad)" stroke="#b86b5e" strokeWidth="0.7" />
              <path d="M40 68 C28 52 38 36 48 34 C56 44 54 58 40 68 Z" fill="#fceee6" stroke="#b86b5e" strokeWidth="0.7" />
              <path d="M40 68 C52 50 68 48 72 58 C64 66 52 70 40 68 Z" fill="url(#petalGrad)" stroke="#b86b5e" strokeWidth="0.7" />
              <circle cx="28" cy="40" r="2.2" fill="#d99a38" />
              <circle cx="44" cy="56" r="2.2" fill="#d99a38" />
            </g>
          </svg>
        </div>

        {/* RIGHT SIDE VEDIC KUNDLI CHART ETCHING & BRASS ARMILLARY SPHERE */}
        <div
          aria-hidden="true"
          className="pointer-events-none hidden md:block absolute right-2 bottom-0 z-10 h-44 w-48 select-none"
        >
          <svg viewBox="0 0 210 185" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
            <defs>
              <linearGradient id="brassMain" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#ffeeb5" />
                <stop offset="42%" stopColor="#d19336" />
                <stop offset="80%" stopColor="#8d5314" />
                <stop offset="100%" stopColor="#b87826" />
              </linearGradient>
            </defs>

            {/* Subtle Tilted North-Indian Kundli Diamond Chart on Parchment */}
            <g transform="translate(88, 12) rotate(5)" opacity="0.34" stroke="#9e6730" strokeWidth="1">
              <rect x="6" y="6" width="102" height="102" />
              <line x1="6" y1="6" x2="108" y2="108" />
              <line x1="108" y1="6" x2="6" y2="108" />
              <polygon points="57,6 108,57 57,108 6,57" />
            </g>

            {/* Pedestal Shadow */}
            <ellipse cx="144" cy="172" rx="34" ry="7" fill="#703814" fillOpacity="0.22" />

            {/* Brass Armillary Sphere on Turned Stand */}
            <g transform="translate(92, 36)">
              {/* Turned Pedestal Base */}
              <ellipse cx="52" cy="130" rx="24" ry="5.5" fill="url(#brassMain)" />
              <path d="M35 129 C38 119 46 116 52 116 C58 116 66 119 69 129 Z" fill="url(#brassMain)" />
              <rect x="49" y="96" width="6" height="22" fill="url(#brassMain)" />
              <ellipse cx="52" cy="107" rx="7" ry="3.2" fill="#f7d687" />

              {/* Armillary Outer Cradle & Rings */}
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
        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-5 py-6 sm:px-10 sm:py-8 md:pl-[205px] md:pr-[185px] lg:pl-[225px] lg:pr-[205px]">
          {/* Top Bar: Golden DO YOU KNOW? Pill + Star Line + Counter & Prev/Next Buttons */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3 min-w-0">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#d6a04f] bg-gradient-to-b from-[#fff5dc] via-[#fae2b4] to-[#f2cb86] px-3.5 py-1.5 shadow-[0_3px_10px_-3px_rgba(148,86,17,0.32),inset_0_1px_0_rgba(255,255,255,0.85)]">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-[#e7b25a] to-[#b57322] text-[#5e1414] shadow-inner">
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true">
                    <path d="M12 1.5L14.4 9.6L22.5 12L14.4 14.4L12 22.5L9.6 14.4L1.5 12L9.6 9.6L12 1.5Z" />
                  </svg>
                </span>
                <span className="text-xs sm:text-[13px] font-extrabold uppercase tracking-[0.14em] text-[#6d1414]">
                  DO YOU KNOW?
                </span>
              </div>

              {/* Delicate 4-Point Sparkle Star + Fading Gold Line */}
              <div aria-hidden="true" className="hidden sm:flex items-center">
                <svg viewBox="0 0 20 20" className="h-3.5 w-3.5 text-[#d4973c] shrink-0" fill="currentColor">
                  <path d="M10 0L12.1 7.9L20 10L12.1 12.1L10 20L7.9 12.1L0 10L7.9 7.9L10 0Z" />
                </svg>
                <span className="h-px w-16 lg:w-24 bg-gradient-to-r from-[#d4973c]/80 to-transparent" />
              </div>
            </div>

            {/* Right Counter + Circular Navigation Arrows */}
            <div className="flex items-center gap-2 shrink-0">
              <span className="mr-1 text-xs sm:text-[13px] font-semibold tabular-nums text-[#61341a]">
                {String(activeIndex + 1).padStart(2, '0')} / {String(totalItems).padStart(2, '0')}
              </span>
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous astrology question"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#ddb986] bg-gradient-to-b from-[#fffaf0] to-[#f4dfbf] text-[#6d1414] shadow-2xs hover:from-[#fff4dc] hover:to-[#eccb99] transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6d1414]"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next astrology question"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#ddb986] bg-gradient-to-b from-[#fffaf0] to-[#f4dfbf] text-[#6d1414] shadow-2xs hover:from-[#fff4dc] hover:to-[#eccb99] transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6d1414]"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Animated Question & Answer (Rotates Every 5 Seconds Directly Over Parchment) */}
          <div key={currentItem.id} className="qna-fade-slide mt-4 sm:mt-5 space-y-2.5">
            <h2 className="font-serif-display text-[1.35rem] sm:text-[1.75rem] font-bold text-[#6f0f13] leading-[1.24] tracking-[-0.01em]">
              {currentItem.question}
            </h2>

            <p className="text-[14px] sm:text-[15.5px] text-[#2c1f16] leading-[1.65] font-normal">
              {currentItem.answer}
            </p>
          </div>

          {/* Subtle Horizontal Tan Divider */}
          <div
            aria-hidden="true"
            className="mt-5 h-px w-full bg-gradient-to-r from-[#d2aa77]/65 via-[#cfa46e]/75 to-transparent"
          />

          {/* Bottom Controls Row: Step Dots + Deep Maroon CTA Button */}
          <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2" role="tablist" aria-label="Astrology Q&A Slides">
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
                        ? 'w-7 bg-[#7c1519] shadow-[0_1px_4px_rgba(124,21,25,0.35)]'
                        : 'w-2 bg-[#d7b996] hover:bg-[#b58754]'
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
              className="inline-flex items-center gap-2 rounded-full border border-[#d4a257] bg-gradient-to-b from-[#962226] via-[#751317] to-[#560b0e] hover:from-[#a5282c] hover:to-[#630e12] px-5 py-2.5 text-xs sm:text-[13.5px] font-semibold text-white shadow-[0_8px_18px_-6px_rgba(86,11,14,0.55),inset_0_1px_0_rgba(255,220,180,0.35)] transition-all cursor-pointer whitespace-nowrap"
            >
              <span>Explore More Astrology Questions →</span>
            </button>
          </div>
        </div>

        {/* 5-second auto-advance progress bar along bottom edge */}
        {!isPaused && !isMoreModalOpen && (
          <div className="relative z-10 h-[3px] w-full bg-[#e3c6a0]/65 overflow-hidden" aria-hidden="true">
            <div
              key={`progress-${activeIndex}`}
              className="qna-progress-bar h-full w-full bg-gradient-to-r from-[#7c1519] via-[#c77d2e] to-[#7c1519]"
            />
          </div>
        )}
      </article>

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
                    {item.answer}
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
