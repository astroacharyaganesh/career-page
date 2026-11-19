import React, { useState } from 'react';
import {
  Activity,
  ArrowDown,
  ArrowRight,
  Briefcase,
  Calendar,
  CalendarDays,
  CheckCircle2,
  Coins,
  Compass,
  Flame,
  Heart,
  Moon,
  Sparkles,
  Sun,
  XCircle
} from 'lucide-react';
import hanishPortrait from '../../assets/images/regenerated_image_1787726256429.png';
import {
  HOROSCOPE_PERIODS,
  HoroscopePeriod,
  ZODIAC_HOROSCOPES,
  ZodiacHoroscopeProfile,
  ZodiacId,
  getHoroscopeFocus,
  getPeriodHref,
  getZodiacImagePath
} from '../../data/horoscopeData';
import { getIndiaCalendarInfo, getPanchangSnapshot } from '../../data/panchangData';
import { AppLink } from '../AppLink';
import { MoonSignCalculator } from '../MoonSignCalculator';
import { HoroscopeVideoForecasts } from '../HoroscopeVideoForecasts';
import { SacredDividerOrnament, SacredMandalaAccent } from '../SacredMandalaAccent';
import { SolarLunarArcDial } from '../SolarLunarArcDial';

interface HoroscopePanchangSectionProps {
  onOpenBooking?: () => void;
}

export const HoroscopePanchangSection: React.FC<HoroscopePanchangSectionProps> = ({
  onOpenBooking
}) => {
  const [selectedPeriod, setSelectedPeriod] = useState<HoroscopePeriod>('Daily');
  const [selectedSignId, setSelectedSignId] = useState<ZodiacId>('aries');

  const cal = getIndiaCalendarInfo();
  const panchang = getPanchangSnapshot('new-delhi');
  const activeProfile: ZodiacHoroscopeProfile =
    ZODIAC_HOROSCOPES.find((item) => item.id === selectedSignId) || ZODIAC_HOROSCOPES[0];

  const periodContent = (() => {
    if (selectedPeriod === 'Weekly') {
      return {
        dateLabel: `Weekly Guidance · ${cal.formattedDate}`,
        overall: activeProfile.weekly.overall,
        career: activeProfile.weekly.career,
        love: activeProfile.weekly.love,
        finance: activeProfile.weekly.finance,
        health: activeProfile.weekly.health,
        luckyColour: activeProfile.weekly.luckyColour,
        luckyColourHex: activeProfile.weekly.luckyColourHex,
        luckyNumber: activeProfile.weekly.luckyNumber,
        focusLabel: 'Weekly Focus'
      };
    }
    if (selectedPeriod === 'Monthly') {
      return {
        dateLabel: `Monthly Forecast · ${cal.year}`,
        overall: activeProfile.monthly.overview,
        career: activeProfile.monthly.careerBusiness,
        love: activeProfile.monthly.loveMarriage,
        finance: activeProfile.monthly.moneyFinance,
        health: activeProfile.monthly.health,
        luckyColour: activeProfile.monthly.luckyColour,
        luckyColourHex: activeProfile.monthly.luckyColourHex,
        luckyNumber: activeProfile.monthly.luckyNumber,
        focusLabel: 'Monthly Focus'
      };
    }
    if (selectedPeriod === 'Yearly') {
      return {
        dateLabel: `Yearly Rashifal · ${cal.year}`,
        overall: activeProfile.yearly.overview,
        career: activeProfile.yearly.careerGrowth,
        love: activeProfile.yearly.loveRelationships,
        finance: activeProfile.yearly.moneyWealth,
        health: activeProfile.yearly.healthWellness,
        luckyColour: activeProfile.yearly.luckyColour,
        luckyColourHex: activeProfile.yearly.luckyColourHex,
        luckyNumber: activeProfile.yearly.luckyNumber,
        focusLabel: 'Yearly Focus'
      };
    }
    return {
      dateLabel: cal.formattedDate,
      overall: activeProfile.daily.overall,
      career: activeProfile.daily.career,
      love: activeProfile.daily.love,
      finance: activeProfile.daily.finance,
      health: activeProfile.daily.health,
      luckyColour: activeProfile.daily.luckyColour,
      luckyColourHex: activeProfile.daily.luckyColourHex,
      luckyNumber: activeProfile.daily.luckyNumber,
      focusLabel: 'Today’s Focus'
    };
  })();

  const focusText = getHoroscopeFocus(activeProfile.id, selectedPeriod);
  const fullHoroscopeHref = getPeriodHref(selectedPeriod, activeProfile.id);

  const scrollToCalculator = () => {
    const el = document.getElementById('moon-sign-calculator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section
      id="horoscope"
      aria-labelledby="horoscope-panchang-heading"
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#f5ede0] via-[#fbf6ec] to-[#f3e8d5] border-y border-[#dec9a4] py-9 sm:py-14"
    >
      {/* Subtle Astronomical Background Pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_65%_45%_at_50%_0%,rgba(207,164,88,0.16)_0%,transparent_72%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 text-[#9b6c24] opacity-[0.14]"
      >
        <SacredMandalaAccent className="w-[460px] h-[460px]" />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-28 -left-24 text-[#7c2418] opacity-[0.10]"
      >
        <SacredMandalaAccent className="w-[400px] h-[400px]" />
      </div>

      <div className="relative z-10 w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        {/* Celestial Header Banner Inspired by Acharya Ganesh Identity */}
        <div className="relative overflow-hidden rounded-2xl border border-[#d6a956] bg-gradient-to-r from-[#09142b] via-[#13254a] to-[#3f1c16] shadow-[0_22px_48px_-16px_rgba(11,22,46,0.58)]">
          {/* Celestial Stars, Rotating Zodiac Ring & Planetary Orbit Lines */}
          <svg
            aria-hidden="true"
            viewBox="0 0 1200 240"
            preserveAspectRatio="xMidYMid slice"
            className="pointer-events-none absolute inset-0 h-full w-full opacity-70"
            fill="none"
          >
            <defs>
              <radialGradient id="bannerGoldGlow" cx="22%" cy="50%" r="48%">
                <stop offset="0%" stopColor="#f8cc70" stopOpacity="0.42" />
                <stop offset="100%" stopColor="#09142b" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="bannerLampGlow" cx="84%" cy="60%" r="38%">
                <stop offset="0%" stopColor="#f5bc5a" stopOpacity="0.38" />
                <stop offset="100%" stopColor="#3f1c16" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="1200" height="240" fill="url(#bannerGoldGlow)" />
            <rect width="1200" height="240" fill="url(#bannerLampGlow)" />
            {/* Rotating Halo Zodiac Wheel Behind Portrait */}
            <g className="celestial-wheel-spin" style={{ transformOrigin: '215px 120px' }}>
              <circle cx="215" cy="120" r="106" stroke="#f4ce7c" strokeOpacity="0.48" strokeWidth="1.1" strokeDasharray="4 5" />
              <circle cx="215" cy="120" r="132" stroke="#f4ce7c" strokeOpacity="0.24" strokeWidth="0.9" strokeDasharray="2 6" />
            </g>
            <g className="celestial-wheel-reverse" style={{ transformOrigin: '215px 120px' }}>
              <circle cx="215" cy="120" r="82" stroke="#f4ce7c" strokeOpacity="0.35" strokeWidth="1" />
            </g>
            {/* Planetary Orbit Arcs */}
            <path d="M290 215 Q 640 -25 1035 190" stroke="#f2c872" strokeOpacity="0.32" strokeWidth="1" strokeDasharray="4 6" />
            <path d="M340 28 Q 700 185 1110 38" stroke="#f2c872" strokeOpacity="0.22" strokeWidth="0.85" />
            {/* Crisp Twinkling Celestial Stars */}
            <circle cx="420" cy="42" r="1.7" fill="#fde9b5" className="qna-star-twinkle" />
            <circle cx="512" cy="195" r="1.4" fill="#fde9b5" opacity="0.7" />
            <circle cx="660" cy="30" r="2" fill="#fde9b5" className="qna-star-twinkle" />
            <circle cx="790" cy="52" r="1.3" fill="#fde9b5" opacity="0.68" />
            <circle cx="885" cy="192" r="1.8" fill="#fde9b5" className="qna-star-twinkle" />
            <circle cx="965" cy="40" r="1.5" fill="#fde9b5" opacity="0.82" />
          </svg>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-[200px_1fr_200px] lg:grid-cols-[235px_1fr_220px] items-center gap-4 px-4 py-6 sm:px-8 sm:py-7 lg:py-0">
            {/* Left Portrait: Hanish Bagga */}
            <div className="hidden md:flex items-end justify-center self-end pt-3">
              <img
                src={hanishPortrait}
                alt="Hanish Bagga — Acharya Ganesh Astro Vastu Expert"
                className="h-44 lg:h-48 w-auto object-contain object-bottom drop-shadow-[0_12px_24px_rgba(0,0,0,0.52)]"
              />
            </div>

            {/* Center Headline & Supporting Line */}
            <div className="text-center md:py-7">
              <div className="inline-flex flex-wrap items-center justify-center gap-1.5 text-[10.5px] sm:text-[11px] font-semibold uppercase tracking-[0.16em] sm:tracking-[0.2em] text-[#fae091] mb-2">
                <Sparkles className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                <span>Acharya Ganesh · Jyotish &amp; Moon Sign System</span>
              </div>

              <h2
                id="horoscope-panchang-heading"
                className="font-serif-display text-[1.6rem] sm:text-3xl lg:text-[2.45rem] font-bold text-[#fffcf4] leading-[1.16] tracking-[-0.01em] [text-wrap:balance]"
              >
                Daily Horoscope &amp; Today’s Panchang
              </h2>

              <p className="mt-2.5 max-w-2xl mx-auto text-[13.5px] sm:text-[15.5px] text-[#f2e8d5] leading-relaxed">
                Get Your Rashi Predictions, Auspicious Timings and Vedic Guidance — All in One Place
              </p>

              <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={scrollToCalculator}
                  className="inline-flex items-center justify-center gap-1.5 rounded-full border border-[#f0c76e]/85 bg-gradient-to-b from-[#fae091] via-[#e6b34d] to-[#c98b24] hover:brightness-105 hover:-translate-y-0.5 active:translate-y-0 px-4 sm:px-5 py-2 text-[11.5px] sm:text-xs font-bold text-[#460709] shadow-[0_8px_20px_-6px_rgba(246,204,110,0.45)] transition-all duration-200 cursor-pointer whitespace-nowrap"
                >
                  <Moon className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                  <span>Calculate Your Moon Sign (Rashi)</span>
                  <ArrowDown className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                </button>
              </div>

              {/* Mobile Expert Credit */}
              <p className="mt-3 text-xs text-[#f5d588] md:hidden">
                Guided by Hanish Bagga · Astro Vastu Expert
              </p>
            </div>

            {/* Right Celestial Armillary Sphere & Animated Sacred Diya */}
            <div aria-hidden="true" className="hidden md:flex items-center justify-end pr-2">
              <svg viewBox="0 0 180 150" className="h-32 lg:h-36 w-auto drop-shadow-[0_8px_18px_rgba(0,0,0,0.45)]" fill="none">
                <defs>
                  <linearGradient id="armillaryBrass" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#fff3c4" />
                    <stop offset="50%" stopColor="#dfb04f" />
                    <stop offset="100%" stopColor="#945b18" />
                  </linearGradient>
                  <radialGradient id="diyaHalo" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#ffe58f" stopOpacity="0.65" />
                    <stop offset="100%" stopColor="#ffe58f" stopOpacity="0" />
                  </radialGradient>
                </defs>
                {/* Armillary Sphere */}
                <g className="celestial-wheel-spin" style={{ transformOrigin: '112px 64px' }}>
                  <circle cx="112" cy="64" r="38" stroke="url(#armillaryBrass)" strokeWidth="2.8" />
                  <ellipse cx="112" cy="64" rx="36" ry="13" transform="rotate(-22 112 64)" stroke="url(#armillaryBrass)" strokeWidth="2" />
                  <ellipse cx="112" cy="64" rx="36" ry="13" transform="rotate(28 112 64)" stroke="url(#armillaryBrass)" strokeWidth="1.8" />
                </g>
                <circle cx="112" cy="64" r="5.5" fill="url(#armillaryBrass)" />
                <rect x="109" y="101" width="6" height="22" fill="url(#armillaryBrass)" />
                <ellipse cx="112" cy="126" rx="22" ry="5" fill="url(#armillaryBrass)" />
                {/* Traditional Sacred Diya with Subtle Breathing Flame */}
                <circle cx="52" cy="102" r="22" fill="url(#diyaHalo)" className="sacred-aura-pulse" />
                <path d="M34 122 C41 133 63 133 70 122 L63 114 L41 114 Z" fill="url(#armillaryBrass)" />
                <path
                  d="M52 92 C59 101 59 110 52 114 C45 110 45 101 52 92 Z"
                  fill="#ffe38c"
                  className="diya-flame-breath"
                />
                <path d="M52 100 C55 105 55 110 52 112 C49 110 49 105 52 100 Z" fill="#fff9e2" />
              </svg>
            </div>
          </div>
        </div>

        {/* Interactive Moon Sign (Chandra Rashi) Calculator */}
        <MoonSignCalculator
          activePeriod={selectedPeriod}
          selectedSignId={selectedSignId}
          onApplySign={setSelectedSignId}
          onOpenBooking={onOpenBooking}
          compactHeader
        />

        {/* Main Dual-Column Interactive Panel: Horoscope (Left) + Panchang (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">
          {/* LEFT SIDE: TODAY'S HOROSCOPE */}
          <div className="lg:col-span-7 flex flex-col rounded-2xl border border-[#cfa458] bg-[#fffdf9] p-4 sm:p-6 shadow-[0_18px_40px_-16px_rgba(92,58,20,0.2)]">
            {/* Heading + Period Tabs */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3.5 pb-4 border-b border-[#e5d5bc]">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#c79948] bg-gradient-to-b from-[#6e121b] to-[#4a0910] text-[#fae091] shadow-xs">
                  <Compass className="w-5 h-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-[#4a0d14] leading-tight">
                    Today’s Horoscope
                  </h3>
                  <p className="text-[11px] sm:text-xs font-medium text-[#544333]">
                    Based on Vedic Moon Sign (Chandra Rashi) ·{' '}
                    <button
                      type="button"
                      onClick={scrollToCalculator}
                      className="font-bold text-[#6e121b] underline decoration-[#c79948] underline-offset-2 hover:text-[#9e6b16] cursor-pointer"
                    >
                      Check yours above
                    </button>
                  </p>
                </div>
              </div>

              {/* Daily | Weekly | Monthly | Yearly Tabs */}
              <div
                role="tablist"
                aria-label="Horoscope Time Period"
                className="inline-flex self-start sm:self-auto items-center gap-1 rounded-xl border border-[#cfa458]/80 bg-[#f4e8d4] p-1"
              >
                {HOROSCOPE_PERIODS.map((period) => {
                  const isActive = selectedPeriod === period;
                  return (
                    <button
                      key={period}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setSelectedPeriod(period)}
                      className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 sm:px-3.5 py-1.5 text-xs sm:text-[13px] font-semibold whitespace-nowrap shrink-0 transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6e121b] ${
                        isActive
                          ? 'bg-gradient-to-b from-[#7a1721] to-[#520a11] text-[#fff8eb] border border-[#cfa053] shadow-xs'
                          : 'border border-transparent text-[#453526] hover:text-[#3d0f14] hover:bg-white/75'
                      }`}
                    >
                      <Calendar className="w-3 h-3 hidden sm:inline" aria-hidden="true" />
                      <span>{period}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 12 Zodiac Signs Grid with English & Vedic Rashi Names */}
            <div
              role="listbox"
              aria-label="Select Zodiac Sign"
              className="grid grid-cols-3 sm:grid-cols-6 gap-2 mt-4"
            >
              {ZODIAC_HOROSCOPES.map((sign) => {
                const isSelected = sign.id === selectedSignId;
                return (
                  <button
                    key={sign.id}
                    type="button"
                    role="option"
                    aria-selected={isSelected}
                    onClick={() => setSelectedSignId(sign.id)}
                    className={`group flex flex-col items-center justify-center rounded-xl border px-2 py-2.5 text-center transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6e121b] ${
                      isSelected
                        ? 'border-[#e0b458] bg-gradient-to-b from-[#6e121b] via-[#590d14] to-[#3f070d] text-[#fff8ec] shadow-[0_10px_22px_-8px_rgba(94,17,24,0.62)] ring-1 ring-[#fae091]/40'
                        : 'border-[#e0cfa9] bg-[#fffaf1] text-[#2c1f14] hover:border-[#b98735] hover:bg-[#f9edd4] hover:-translate-y-0.5 hover:shadow-xs'
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`text-xl leading-none font-semibold transition-transform duration-200 group-hover:scale-110 ${
                        isSelected ? 'text-[#fae091]' : 'text-[#6e121b]'
                      }`}
                    >
                      {sign.glyph}
                    </span>
                    <span
                      className={`mt-1.5 text-xs font-bold tracking-tight whitespace-nowrap ${
                        isSelected ? 'text-[#fff9ee]' : 'text-[#241910]'
                      }`}
                    >
                      {sign.name}
                    </span>
                    <span
                      className={`text-[10px] font-medium whitespace-nowrap ${
                        isSelected ? 'text-[#f4d48e]' : 'text-[#6b5642]'
                      }`}
                    >
                      {sign.vedicName}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Featured Horoscope Card */}
            <div
              key={`${activeProfile.id}-${selectedPeriod}`}
              className="horoscope-panel-enter mt-4 flex-1 flex flex-col justify-between overflow-hidden rounded-2xl border border-[#cfa458] bg-[#fdfaf4] shadow-xs"
            >
              <div>
                {/* Rich Midnight-Maroon Sacred Sign Spotlight */}
                <div className="relative overflow-hidden bg-gradient-to-r from-[#0a152e] via-[#172c57] to-[#4e1219] p-4 sm:p-5 text-[#fffaf0]">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-12 -top-12 text-[#f0c874] opacity-25"
                  >
                    <SacredMandalaAccent className="w-56 h-56" />
                  </div>
                  {/* Subtle Diagonal Temple Gold Sheen */}
                  <div
                    aria-hidden="true"
                    className="sacred-sheen-glide pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-[#fae091]/14 to-transparent"
                  />

                  <div className="relative z-10 flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="relative mx-auto sm:mx-0 shrink-0">
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -inset-2 rounded-full border border-dashed border-[#f4ce7c]/65 celestial-wheel-spin"
                      />
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -inset-3.5 rounded-full border border-dotted border-[#f4ce7c]/30 celestial-wheel-reverse"
                      />
                      <div className="relative h-24 w-24 sm:h-28 sm:w-28 overflow-hidden rounded-xl border-2 border-[#e6b95f] bg-[#142547] shadow-[0_10px_24px_rgba(0,0,0,0.45)]">
                        <img
                          src={getZodiacImagePath(activeProfile.id)}
                          alt={`${activeProfile.name} (${activeProfile.vedicName}) zodiac emblem`}
                          className="h-full w-full object-cover object-top scale-[1.18] origin-top"
                        />
                      </div>
                    </div>

                    <div className="flex-1 min-w-0 text-center sm:text-left">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#fae091] tabular-nums">
                        {periodContent.dateLabel} · {activeProfile.vedicName} Rashi · {activeProfile.rulingPlanet}
                      </p>
                      <h4 className="mt-0.5 font-serif-display text-xl sm:text-2xl font-bold text-[#fffcf4] leading-tight">
                        {activeProfile.name} {selectedPeriod} Horoscope
                      </h4>
                      <p className="mt-2 text-sm text-[#f3ead9] leading-relaxed">
                        {periodContent.overall}
                      </p>

                      {/* Clean Vedic Moon Signature Metadata */}
                      <div className="mt-3 pt-2.5 border-t border-[#cfa458]/30 flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-1 text-[11px] text-[#ebd9b8]">
                        <span>
                          Tattva: <strong className="text-[#fff9ed]">{activeProfile.element}</strong>
                        </span>
                        <span aria-hidden="true" className="text-[#cfa458]">·</span>
                        <span>
                          Moon Sounds: <strong className="text-[#fae091]">{activeProfile.moonSyllables}</strong>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 4 Clean 2x2 High-Contrast Life-Area Sections */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 sm:p-5 pb-0">
                  <div className="group rounded-xl border border-[#e0cfa9] bg-white hover:border-[#b98735] hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-14px_rgba(128,82,12,0.35)] px-3.5 py-3 transition-all duration-200">
                    <div className="flex items-center justify-between gap-2 text-[#4a0d14] mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-[#f7ebd4] text-[#8c520d] group-hover:bg-[#6e121b] group-hover:text-[#fae091] transition-colors">
                          <Briefcase className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                        </span>
                        <span className="text-xs font-bold uppercase tracking-wide">Career</span>
                      </div>
                      <span className="text-[10px] font-bold text-[#9e6b16] tabular-nums">01</span>
                    </div>
                    <p className="text-xs sm:text-[13px] text-[#241910] leading-[1.5]">
                      {periodContent.career}
                    </p>
                  </div>

                  <div className="group rounded-xl border border-[#e0cfa9] bg-white hover:border-[#b98735] hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-14px_rgba(128,82,12,0.35)] px-3.5 py-3 transition-all duration-200">
                    <div className="flex items-center justify-between gap-2 text-[#4a0d14] mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-[#fae8ea] text-[#7c121c] group-hover:bg-[#6e121b] group-hover:text-[#fae091] transition-colors">
                          <Heart className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                        </span>
                        <span className="text-xs font-bold uppercase tracking-wide">Love</span>
                      </div>
                      <span className="text-[10px] font-bold text-[#9e6b16] tabular-nums">02</span>
                    </div>
                    <p className="text-xs sm:text-[13px] text-[#241910] leading-[1.5]">
                      {periodContent.love}
                    </p>
                  </div>

                  <div className="group rounded-xl border border-[#e0cfa9] bg-white hover:border-[#b98735] hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-14px_rgba(128,82,12,0.35)] px-3.5 py-3 transition-all duration-200">
                    <div className="flex items-center justify-between gap-2 text-[#4a0d14] mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-[#f7ebd4] text-[#8c520d] group-hover:bg-[#6e121b] group-hover:text-[#fae091] transition-colors">
                          <Coins className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                        </span>
                        <span className="text-xs font-bold uppercase tracking-wide">Finance</span>
                      </div>
                      <span className="text-[10px] font-bold text-[#9e6b16] tabular-nums">03</span>
                    </div>
                    <p className="text-xs sm:text-[13px] text-[#241910] leading-[1.5]">
                      {periodContent.finance}
                    </p>
                  </div>

                  <div className="group rounded-xl border border-[#e0cfa9] bg-white hover:border-[#b98735] hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-14px_rgba(128,82,12,0.35)] px-3.5 py-3 transition-all duration-200">
                    <div className="flex items-center justify-between gap-2 text-[#4a0d14] mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-[#e6f3ec] text-[#0b4b38] group-hover:bg-[#0b4b38] group-hover:text-[#fae091] transition-colors">
                          <Activity className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                        </span>
                        <span className="text-xs font-bold uppercase tracking-wide">Health</span>
                      </div>
                      <span className="text-[10px] font-bold text-[#9e6b16] tabular-nums">04</span>
                    </div>
                    <p className="text-xs sm:text-[13px] text-[#241910] leading-[1.5]">
                      {periodContent.health}
                    </p>
                  </div>
                </div>
              </div>

              {/* Clean Hairline-Divided Lucky & Focus Strip + CTA */}
              <div className="p-4 sm:p-5 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#e2cfa9] rounded-xl border border-[#d8be90] bg-[#f8efe0] text-xs">
                  <div className="flex items-center gap-2.5 px-3.5 py-2.5">
                    <span
                      aria-hidden="true"
                      className="inline-block h-4.5 w-4.5 shrink-0 rounded-full border border-black/25 shadow-2xs"
                      style={{ backgroundColor: periodContent.luckyColourHex }}
                    />
                    <div>
                      <p className="text-[11px] font-semibold text-[#5b4735]">Lucky Colour</p>
                      <p className="font-bold text-[#3a0c10]">{periodContent.luckyColour}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 px-3.5 py-2.5">
                    <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#5c0d15] text-[11px] font-bold text-[#fff8e9] tabular-nums">
                      {periodContent.luckyNumber}
                    </span>
                    <div>
                      <p className="text-[11px] font-semibold text-[#5b4735]">Lucky Number</p>
                      <p className="font-bold text-[#3a0c10] tabular-nums">{periodContent.luckyNumber}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 px-3.5 py-2.5">
                    <Compass className="w-4 h-4 shrink-0 text-[#8c520d]" aria-hidden="true" />
                    <div className="min-w-0">
                      <p className="text-[11px] font-semibold text-[#5b4735]">{periodContent.focusLabel}</p>
                      <p className="font-bold text-[#3a0c10] leading-snug">{focusText}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <AppLink
                    href={fullHoroscopeHref}
                    className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-[#b57b1d] bg-gradient-to-b from-[#fae091] via-[#e6b34d] to-[#c98b24] hover:brightness-105 hover:-translate-y-0.5 px-6 py-2.5 text-xs sm:text-sm font-bold text-[#3c0507] shadow-[0_8px_18px_-6px_rgba(128,82,12,0.5)] transition-all duration-200 whitespace-nowrap"
                  >
                    <span>Read Full {activeProfile.name} Horoscope</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </AppLink>

                  <span className="text-xs font-medium text-[#544333] text-center sm:text-right">
                    Element: <strong className="text-[#2c1f14]">{activeProfile.element}</strong> · Ruler:{' '}
                    <strong className="text-[#2c1f14]">{activeProfile.rulingPlanet}</strong>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: TODAY'S PANCHANG */}
          <div className="lg:col-span-5 flex flex-col justify-between overflow-hidden rounded-2xl border border-[#cfa458] bg-[#fffdf9] shadow-[0_18px_40px_-16px_rgba(92,58,20,0.2)]">
            <div>
              {/* Deep Midnight Sacred Header */}
              <div className="relative overflow-hidden bg-gradient-to-r from-[#0b1730] via-[#172c56] to-[#421218] p-4 sm:p-5 text-[#fffcf4]">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-10 -top-10 text-[#f2c872] opacity-20"
                >
                  <SacredMandalaAccent className="w-44 h-44" />
                </div>
                <div className="relative z-10 flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#e3b963]/70 bg-[#fff8e9]/10 text-[#fae091]">
                      <CalendarDays className="w-5 h-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-[#fffcf4] leading-tight">
                        Today’s Panchang
                      </h3>
                      <p className="text-xs sm:text-[13px] font-semibold text-[#fae091] tabular-nums mt-0.5">
                        {panchang.fullDateHeading}
                      </p>
                    </div>
                  </div>
                  <span className="text-[11px] font-semibold text-[#e8dcc7] shrink-0 pt-1">
                    New Delhi · IST
                  </span>
                </div>
              </div>

              <div className="p-4 sm:p-6 pt-4 space-y-3.5">
                {/* Animated Surya–Chandra Sky-Dome Horizon Transit Dial */}
                <SolarLunarArcDial
                  sunrise={panchang.sunrise}
                  sunset={panchang.sunset}
                  moonrise={panchang.moonrise}
                  moonset={panchang.moonset}
                  suryaRashi={panchang.suryaRashi}
                  chandraRashi={panchang.chandraRashi}
                  compact
                />

                {/* 2x2 Sacred Pancha-Anga Mosaic */}
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-[13px]">
                  <div className="rounded-xl border border-[#e0cfa9] bg-white hover:border-[#b98735] hover:-translate-y-0.5 p-3 transition-all duration-200">
                    <dt className="flex items-center gap-2 font-bold text-[#4a0d14] mb-1">
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-[#f7ebd4] text-[#8c520d]">
                        <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                      </span>
                      <span>तिथि · Tithi</span>
                    </dt>
                    <dd className="font-semibold text-[#1f160e] leading-snug">{panchang.tithi}</dd>
                  </div>

                  <div className="rounded-xl border border-[#e0cfa9] bg-white hover:border-[#b98735] hover:-translate-y-0.5 p-3 transition-all duration-200">
                    <dt className="flex items-center gap-2 font-bold text-[#4a0d14] mb-1">
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-[#f7ebd4] text-[#8c520d]">
                        <Sun className="w-3.5 h-3.5" aria-hidden="true" />
                      </span>
                      <span>नक्षत्र · Nakshatra</span>
                    </dt>
                    <dd className="font-semibold text-[#1f160e] leading-snug">{panchang.nakshatra}</dd>
                  </div>

                  <div className="rounded-xl border border-[#e0cfa9] bg-white hover:border-[#b98735] hover:-translate-y-0.5 p-3 transition-all duration-200">
                    <dt className="flex items-center gap-2 font-bold text-[#4a0d14] mb-1">
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-[#f7ebd4] text-[#8c520d]">
                        <Flame className="w-3.5 h-3.5" aria-hidden="true" />
                      </span>
                      <span>योग · Yoga</span>
                    </dt>
                    <dd className="font-semibold text-[#1f160e] leading-snug">{panchang.yoga}</dd>
                  </div>

                  <div className="rounded-xl border border-[#e0cfa9] bg-white hover:border-[#b98735] hover:-translate-y-0.5 p-3 transition-all duration-200">
                    <dt className="flex items-center gap-2 font-bold text-[#4a0d14] mb-1">
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-[#f7ebd4] text-[#8c520d]">
                        <Compass className="w-3.5 h-3.5" aria-hidden="true" />
                      </span>
                      <span>करण · Karana</span>
                    </dt>
                    <dd className="font-semibold text-[#1f160e] leading-snug">{panchang.karana}</dd>
                  </div>
                </dl>

                {/* High-Contrast Auspicious vs Inauspicious Windows (Clean All-Around Borders) */}
                <div className="mt-4 space-y-2.5">
                  <div className="rounded-xl border border-[#d898a0] bg-[#faecee] px-3.5 py-2.5 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <XCircle className="w-4 h-4 text-[#7c121c] shrink-0" aria-hidden="true" />
                      <div>
                        <span className="block text-xs font-bold text-[#520b12]">Rahu Kaal</span>
                        <span className="block text-[10px] font-semibold text-[#7a2930]">
                          Inauspicious Timing · Avoid new starts
                        </span>
                      </div>
                    </div>
                    <span className="text-xs sm:text-[13px] font-bold text-[#4a090f] tabular-nums whitespace-nowrap">
                      {panchang.rahuKaal}
                    </span>
                  </div>

                  <div className="rounded-xl border border-[#82c3aa] bg-[#e9f5ef] px-3.5 py-2.5 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#0b4b38] shrink-0" aria-hidden="true" />
                      <div>
                        <span className="block text-xs font-bold text-[#083d2c]">Abhijit Muhurat</span>
                        <span className="block text-[10px] font-semibold text-[#185944]">
                          Auspicious Timing · Best midday window
                        </span>
                      </div>
                    </div>
                    <span className="text-xs sm:text-[13px] font-bold text-[#063325] tabular-nums whitespace-nowrap">
                      {panchang.abhijitMuhurat}
                    </span>
                  </div>
                </div>

                {/* Hindu Month & Paksha Summary */}
                <div className="mt-3 rounded-xl border border-[#d8be90] bg-[#f8efe0] px-3.5 py-2.5 flex items-center justify-between gap-3 text-xs sm:text-[13px]">
                  <span className="font-semibold text-[#443424]">Hindu Month &amp; Paksha</span>
                  <span className="font-bold text-[#4a0d14]">
                    {panchang.hinduMonth}, {panchang.paksha}
                  </span>
                </div>
              </div>
            </div>

            {/* Panchang Detail CTA */}
            <div className="px-4 sm:px-6 pb-5 pt-3 border-t border-[#e5d5bc]">
              <AppLink
                href="/panchang/today/"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#b57b1d] bg-gradient-to-b from-[#fae091] via-[#e6b34d] to-[#c98b24] hover:brightness-105 hover:-translate-y-0.5 px-6 py-2.5 text-xs sm:text-sm font-bold text-[#3c0507] shadow-[0_8px_18px_-6px_rgba(128,82,12,0.5)] transition-all duration-200 whitespace-nowrap"
              >
                <span>View Detailed Panchang</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </AppLink>
            </div>
          </div>
        </div>

        {/* Auto-Updated Monthly & Yearly Horoscope YouTube Videos */}
        <HoroscopeVideoForecasts selectedSignId={selectedSignId} />

        {/* Explore More Compact 4-Card Row */}
        <div className="pt-2">
          <div className="flex items-center justify-center gap-3.5 mb-5">
            <span className="h-px flex-1 max-w-[140px] bg-gradient-to-l from-[#c59645] to-transparent" aria-hidden="true" />
            <SacredDividerOrnament className="w-5 h-5 text-[#9e6b16] shrink-0" />
            <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-[#4a0d14]">
              Explore More
            </h3>
            <SacredDividerOrnament className="w-5 h-5 text-[#9e6b16] shrink-0" />
            <span className="h-px flex-1 max-w-[140px] bg-gradient-to-r from-[#c59645] to-transparent" aria-hidden="true" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {[
              {
                title: 'Weekly Horoscope',
                description: 'Plan your week with Vedic guidance.',
                href: `/horoscope/weekly/${selectedSignId}/`,
                icon: CalendarDays
              },
              {
                title: 'Monthly Horoscope',
                description: 'Know what this month may bring for you.',
                href: `/horoscope/monthly/${selectedSignId}/`,
                icon: Calendar
              },
              {
                title: 'Yearly Horoscope',
                description: 'A complete yearly overview for your Rashi.',
                href: `/horoscope/yearly/${selectedSignId}/`,
                icon: Compass
              },
              {
                title: 'Today’s Panchang',
                description: 'Auspicious timings, Tithi, Nakshatra and more.',
                href: '/panchang/today/',
                icon: Sun
              }
            ].map((card) => {
              const CardIcon = card.icon;
              return (
                <AppLink
                  key={card.title}
                  href={card.href}
                  className="group relative overflow-hidden flex items-start justify-between gap-3 rounded-xl border border-[#cfa458] bg-[#fffdf9] hover:bg-gradient-to-br hover:from-[#0b1730] hover:via-[#162a52] hover:to-[#471118] hover:border-[#f0c874] p-4 shadow-xs hover:shadow-[0_14px_28px_-12px_rgba(14,27,54,0.5)] transition-all duration-200 hover:-translate-y-0.5"
                >
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-8 -bottom-8 text-[#f0c874] opacity-0 group-hover:opacity-20 transition-opacity duration-200"
                  >
                    <SacredMandalaAccent className="w-28 h-28" />
                  </div>
                  <div className="relative z-10 flex items-start gap-3.5 min-w-0">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#cfa458] bg-[#f7ebd4] text-[#6e121b] group-hover:bg-[#fff8e9]/15 group-hover:border-[#fae091]/70 group-hover:text-[#fae091] transition-colors">
                      <CardIcon className="w-5 h-5" aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <h4 className="font-serif-display text-base font-bold text-[#4a0d14] group-hover:text-[#fffcf4] transition-colors">
                        {card.title}
                      </h4>
                      <p className="mt-0.5 text-xs text-[#544333] group-hover:text-[#e8dcc7] leading-relaxed transition-colors">
                        {card.description}
                      </p>
                    </div>
                  </div>
                  <ArrowRight
                    className="relative z-10 w-4 h-4 shrink-0 text-[#9e6b16] group-hover:text-[#fae091] group-hover:translate-x-0.5 transition-all mt-1"
                    aria-hidden="true"
                  />
                </AppLink>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
