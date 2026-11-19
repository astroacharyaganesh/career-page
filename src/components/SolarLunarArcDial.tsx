import React from 'react';
import { Moon, Sunrise, Sunset } from 'lucide-react';

interface SolarLunarArcDialProps {
  sunrise: string;
  sunset: string;
  moonrise: string;
  moonset: string;
  suryaRashi?: string;
  chandraRashi?: string;
  compact?: boolean;
}

export const SolarLunarArcDial: React.FC<SolarLunarArcDialProps> = ({
  sunrise,
  sunset,
  moonrise,
  moonset,
  suryaRashi,
  chandraRashi,
  compact = false
}) => {
  return (
    <div className="relative overflow-hidden rounded-xl border border-[#cfa458]/80 bg-gradient-to-b from-[#0b1730] via-[#13254b] to-[#281622] px-3.5 py-3 text-[#fffcf4] shadow-inner">
      {/* Animated Sky-Dome Ecliptic Arc */}
      <div className={compact ? 'relative h-[78px]' : 'relative h-[88px]'}>
        <svg
          aria-hidden="true"
          viewBox="0 0 360 92"
          preserveAspectRatio="xMidYMid meet"
          className="h-full w-full"
          fill="none"
        >
          <defs>
            <radialGradient id="suryaZenithGlow" cx="50%" cy="22%" r="36%">
              <stop offset="0%" stopColor="#ffe58c" stopOpacity="0.48" />
              <stop offset="100%" stopColor="#0b1730" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="horizonArcStroke" x1="28" y1="78" x2="332" y2="78" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#f3b24a" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#fae091" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#d18b3c" stopOpacity="0.4" />
            </linearGradient>
          </defs>

          <rect width="360" height="92" fill="url(#suryaZenithGlow)" />

          {/* Subtle Twinkling Stars in Upper Sky */}
          <circle cx="48" cy="24" r="1.2" fill="#fde9b5" className="qna-star-twinkle" />
          <circle cx="98" cy="14" r="1.4" fill="#fde9b5" opacity="0.7" />
          <circle cx="268" cy="18" r="1.5" fill="#fde9b5" className="qna-star-twinkle" />
          <circle cx="316" cy="30" r="1.1" fill="#fde9b5" opacity="0.75" />

          {/* Horizon Baseline */}
          <line x1="20" y1="76" x2="340" y2="76" stroke="#cfa458" strokeOpacity="0.4" strokeWidth="1" />

          {/* Solar Dashed Ecliptic Arc */}
          <path
            d="M 38 76 Q 180 -10 322 76"
            stroke="url(#horizonArcStroke)"
            strokeWidth="1.6"
            strokeDasharray="4 4"
          />

          {/* Sunrise Point */}
          <circle cx="38" cy="76" r="4" fill="#f7be59" />
          {/* Sunset Point */}
          <circle cx="322" cy="76" r="4" fill="#d97f3e" />

          {/* Floating Midday Surya Emblem */}
          <g className="sacred-orb-float">
            <circle cx="180" cy="24" r="16" fill="#ffe17d" fillOpacity="0.18" className="sacred-aura-pulse" />
            <circle cx="180" cy="24" r="7.5" fill="#ffe082" stroke="#fff7dc" strokeWidth="1.2" />
            <circle cx="180" cy="24" r="11" stroke="#fae091" strokeOpacity="0.55" strokeWidth="1" strokeDasharray="2 3" />
          </g>

          {/* Subtle Crescent Chandra Accent */}
          <g transform="translate(274, 24)" opacity="0.92">
            <path
              d="M 8 1 C 3 2 1 8 5 12 C 8 15 13 14 15 10 C 11 11 7 7 8 1 Z"
              fill="#e4ecff"
            />
          </g>
        </svg>

        {/* Center Horizon Badge Text */}
        <div className="pointer-events-none absolute inset-x-0 bottom-1 flex items-center justify-center">
          <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#fae091]">
            {suryaRashi && chandraRashi
              ? `Surya: ${suryaRashi.split(' ')[0]} · Chandra: ${chandraRashi.split(' ')[0]}`
              : 'Surya · Chandra Celestial Transit'}
          </span>
        </div>
      </div>

      {/* Crisp High-Contrast 4-Corner Timings Row */}
      <div className="mt-2 pt-2.5 border-t border-[#cfa458]/30 grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] tabular-nums">
        <div className="flex items-center justify-between sm:justify-start gap-1.5">
          <Sunrise className="w-3.5 h-3.5 text-[#f9c964] shrink-0" aria-hidden="true" />
          <span className="text-[#dfd1ba]">Sunrise:</span>
          <strong className="text-[#fff9ed]">{sunrise}</strong>
        </div>
        <div className="flex items-center justify-between sm:justify-start gap-1.5">
          <Sunset className="w-3.5 h-3.5 text-[#f09b59] shrink-0" aria-hidden="true" />
          <span className="text-[#dfd1ba]">Sunset:</span>
          <strong className="text-[#fff9ed]">{sunset}</strong>
        </div>
        <div className="flex items-center justify-between sm:justify-start gap-1.5">
          <Moon className="w-3.5 h-3.5 text-[#b6cdfa] shrink-0" aria-hidden="true" />
          <span className="text-[#dfd1ba]">Moonrise:</span>
          <strong className="text-[#fff9ed]">{moonrise}</strong>
        </div>
        <div className="flex items-center justify-between sm:justify-start gap-1.5">
          <Moon className="w-3.5 h-3.5 text-[#a99ec9] shrink-0" aria-hidden="true" />
          <span className="text-[#dfd1ba]">Moonset:</span>
          <strong className="text-[#fff9ed]">{moonset}</strong>
        </div>
      </div>
    </div>
  );
};
