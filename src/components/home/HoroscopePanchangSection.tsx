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
  Sunrise,
  Sunset,
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
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 720"
        preserveAspectRatio="xMidYMid slice"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.11] text-[#9b6c24]"
        fill="none"
      >
        <circle cx="720" cy="400" r="320" stroke="currentColor" strokeWidth="0.7" strokeDasharray="3 6" />
        <circle cx="720" cy="400" r="490" stroke="currentColor" strokeWidth="0.6" />
        <ellipse cx="720" cy="400" rx="560" ry="200" transform="rotate(-12 720 400)" stroke="currentColor" strokeWidth="0.6" />
        <ellipse cx="720" cy="400" rx="560" ry="200" transform="rotate(12 720 400)" stroke="currentColor" strokeWidth="0.6" />
      </svg>

      <div className="relative z-10 w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        {/* Celestial Header Banner Inspired by Acharya Ganesh Identity */}
        <div className="relative overflow-hidden rounded-2xl border border-[#cfa458]/80 bg-gradient-to-r from-[#0a152c] via-[#14274c] to-[#3b2511] shadow-[0_20px_44px_-16px_rgba(14,26,52,0.5)]">
          {/* Celestial Stars, Zodiac Ring & Planetary Orbit Lines */}
          <svg
            aria-hidden="true"
            viewBox="0 0 1200 240"
            preserveAspectRatio="xMidYMid slice"
            className="pointer-events-none absolute inset-0 h-full w-full opacity-55"
            fill="none"
          >
            <defs>
              <radialGradient id="bannerGoldGlow" cx="22%" cy="50%" r="48%">
                <stop offset="0%" stopColor="#f5c96e" stopOpacity="0.34" />
                <stop offset="100%" stopColor="#0a152c" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="bannerLampGlow" cx="84%" cy="60%" r="36%">
                <stop offset="0%" stopColor="#f3b655" stopOpacity="0.32" />
                <stop offset="100%" stopColor="#3b2511" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="1200" height="240" fill="url(#bannerGoldGlow)" />
            <rect width="1200" height="240" fill="url(#bannerLampGlow)" />
            {/* Halo Zodiac Wheel on Left Behind Portrait */}
            <circle cx="215" cy="120" r="106" stroke="#f0c874" strokeOpacity="0.4" strokeWidth="1" strokeDasharray="3 4" />
            <circle cx="215" cy="120" r="82" stroke="#f0c874" strokeOpacity="0.28" strokeWidth="0.9" />
            <circle cx="215" cy="120" r="132" stroke="#f0c874" strokeOpacity="0.18" strokeWidth="0.8" />
            {/* Planetary Orbit Arcs */}
            <path d="M290 215 Q 640 -25 1035 190" stroke="#f2c872" strokeOpacity="0.26" strokeWidth="1" strokeDasharray="4 6" />
            <path d="M340 28 Q 700 185 1110 38" stroke="#f2c872" strokeOpacity="0.18" strokeWidth="0.8" />
            {/* Crisp Celestial Stars */}
            <circle cx="420" cy="42" r="1.5" fill="#fde9b5" opacity="0.8" />
            <circle cx="512" cy="195" r="1.3" fill="#fde9b5" opacity="0.65" />
            <circle cx="660" cy="30" r="1.8" fill="#fde9b5" opacity="0.8" />
            <circle cx="790" cy="52" r="1.2" fill="#fde9b5" opacity="0.6" />
            <circle cx="885" cy="192" r="1.6" fill="#fde9b5" opacity="0.7" />
            <circle cx="965" cy="40" r="1.4" fill="#fde9b5" opacity="0.75" />
          </svg>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-[200px_1fr_200px] lg:grid-cols-[235px_1fr_220px] items-center gap-4 px-5 py-6 sm:px-8 sm:py-7 lg:py-0">
            {/* Left Portrait: Hanish Bagga */}
            <div className="hidden md:flex items-end justify-center self-end pt-3">
              <img
                src={hanishPortrait}
                alt="Hanish Bagga — Acharya Ganesh Astro Vastu Expert"
                className="h-44 lg:h-48 w-auto object-contain object-bottom drop-shadow-[0_10px_22px_rgba(0,0,0,0.45)]"
              />
            </div>

            {/* Center Headline & Supporting Line */}
            <div className="text-center md:py-7">
              <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#f5d384] mb-2">
                <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Acharya Ganesh · Jyotish &amp; Muhurat · Moon Sign System</span>
              </div>

              <h2
                id="horoscope-panchang-heading"
                className="font-serif-display text-2xl sm:text-3xl lg:text-[2.4rem] font-bold text-[#fff8e9] leading-[1.15] tracking-[-0.01em] [text-wrap:balance]"
              >
                Daily Horoscope &amp; Today’s Panchang
              </h2>

              <p className="mt-2.5 max-w-2xl mx-auto text-sm sm:text-[15.5px] text-[#e8dcc7] leading-relaxed">
                Get Your Rashi Predictions, Auspicious Timings and Vedic Guidance — All in One Place
              </p>

              <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={scrollToCalculator}
                  className="inline-flex items-center gap-1.5 rounded-full border border-[#e3b963]/70 bg-[#fff8e9]/10 hover:bg-[#fff8e9]/20 px-4 py-1.5 text-xs font-semibold text-[#fae091] transition-colors cursor-pointer"
                >
                  <Moon className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Calculate Your Moon Sign (Rashi)</span>
                  <ArrowDown className="w-3.5 h-3.5" aria-hidden="true" />
                </button>
              </div>

              {/* Mobile Expert Credit */}
              <p className="mt-3 text-xs text-[#f2d084] md:hidden">
                Guided by Hanish Bagga · Founder, Acharya Ganesh
              </p>
            </div>

            {/* Right Celestial Armillary Sphere & Diya SVG Accent */}
            <div aria-hidden="true" className="hidden md:flex items-center justify-end pr-2">
              <svg viewBox="0 0 180 150" className="h-32 lg:h-36 w-auto drop-shadow-[0_6px_16px_rgba(0,0,0,0.4)]" fill="none">
                <defs>
                  <linearGradient id="armillaryBrass" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#fff3c4" />
                    <stop offset="50%" stopColor="#dfb04f" />
                    <stop offset="100%" stopColor="#945b18" />
                  </linearGradient>
                </defs>
                {/* Armillary Sphere */}
                <circle cx="112" cy="64" r="38" stroke="url(#armillaryBrass)" strokeWidth="2.8" />
                <ellipse cx="112" cy="64" rx="36" ry="13" transform="rotate(-22 112 64)" stroke="url(#armillaryBrass)" strokeWidth="2" />
                <ellipse cx="112" cy="64" rx="36" ry="13" transform="rotate(28 112 64)" stroke="url(#armillaryBrass)" strokeWidth="1.8" />
                <circle cx="112" cy="64" r="5.5" fill="url(#armillaryBrass)" />
                <rect x="109" y="101" width="6" height="22" fill="url(#armillaryBrass)" />
                <ellipse cx="112" cy="126" rx="22" ry="5" fill="url(#armillaryBrass)" />
                {/* Traditional Sacred Diya */}
                <path d="M36 122 C42 132 62 132 68 122 L62 114 L42 114 Z" fill="url(#armillaryBrass)" />
                <path d="M52 94 C58 102 58 110 52 114 C46 110 46 102 52 94 Z" fill="#ffe28a" />
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
          <div className="lg:col-span-7 flex flex-col rounded-2xl border border-[#d6b989] bg-[#fdfaf4] p-4 sm:p-6 shadow-[0_14px_34px_-16px_rgba(92,58,20,0.16)]">
            {/* Heading + Period Tabs */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3.5 pb-4 border-b border-[#e5d5bc]">
              <div className="flex items-center gap-2.5">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#cfa053] bg-[#f7ebd4] text-[#6e121b]">
                  <Compass className="w-5 h-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-[#6e121b] leading-tight">
                    Today’s Horoscope
                  </h3>
                  <p className="text-[11px] sm:text-xs font-medium text-[#75624f]">
                    Based on Vedic Moon Sign (Chandra Rashi) ·{' '}
                    <button
                      type="button"
                      onClick={scrollToCalculator}
                      className="font-semibold text-[#6e121b] underline decoration-[#cfa053] underline-offset-2 hover:text-[#9e6b16] cursor-pointer"
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
                className="inline-flex self-start sm:self-auto items-center gap-1 rounded-xl border border-[#d9c198] bg-[#f3e7d2] p-1"
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
                          ? 'bg-gradient-to-b from-[#7a1721] to-[#560d14] text-[#fff6e3] border border-[#c89843] shadow-xs'
                          : 'border border-transparent text-[#5a4734] hover:text-[#3d0f14] hover:bg-white/60'
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
                        ? 'border-[#b98735] bg-gradient-to-b from-[#6e121b] to-[#460910] text-[#fff6e3] shadow-[0_8px_18px_-6px_rgba(94,17,24,0.5)]'
                        : 'border-[#e4d4b9] bg-[#fffaf0] text-[#3a2a1d] hover:border-[#c39549] hover:bg-[#f9eed8] hover:-translate-y-0.5'
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`text-xl leading-none font-semibold transition-transform duration-200 group-hover:scale-110 ${
                        isSelected ? 'text-[#f9dc92]' : 'text-[#7c2418]'
                      }`}
                    >
                      {sign.glyph}
                    </span>
                    <span
                      className={`mt-1.5 text-xs font-semibold tracking-tight whitespace-nowrap ${
                        isSelected ? 'text-[#fff7e6]' : 'text-[#36281e]'
                      }`}
                    >
                      {sign.name}
                    </span>
                    <span
                      className={`text-[10px] font-medium whitespace-nowrap ${
                        isSelected ? 'text-[#f4d48e]' : 'text-[#846d57]'
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
              className="horoscope-panel-enter mt-4 flex-1 flex flex-col justify-between rounded-2xl border border-[#d6b989] bg-gradient-to-br from-[#fffdf9] via-[#fbf5ea] to-[#f4e9d6] p-4 sm:p-6"
            >
              <div>
                {/* Top Summary Split with Framed Zodiac Visual */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 pb-4 border-b border-[#e5d5bc]">
                  <div className="relative h-24 w-24 sm:h-28 sm:w-28 shrink-0 overflow-hidden rounded-xl border border-[#c79948] bg-[#162849] shadow-sm mx-auto sm:mx-0">
                    <img
                      src={getZodiacImagePath(activeProfile.id)}
                      alt={`${activeProfile.name} (${activeProfile.vedicName}) zodiac emblem`}
                      className="h-full w-full object-cover object-top scale-[1.18] origin-top"
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#162849]/35 via-transparent to-transparent"
                    />
                  </div>

                  <div className="flex-1 min-w-0 text-center sm:text-left">
                    <h4 className="font-serif-display text-xl sm:text-2xl font-bold text-[#6e121b] leading-tight">
                      {activeProfile.name} {selectedPeriod} Horoscope
                    </h4>
                    <p className="mt-0.5 text-xs font-semibold text-[#1b3a75] tabular-nums">
                      {periodContent.dateLabel} · {activeProfile.vedicName} Rashi · {activeProfile.rulingPlanet}
                    </p>
                    <p className="mt-2.5 text-sm text-[#31261d] leading-relaxed">
                      {periodContent.overall}
                    </p>
                  </div>
                </div>

                {/* 4 Clean 2x2 Life-Area Sections */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                  <div className="rounded-xl border border-[#e5d5bc] bg-[#fffdf8] px-3.5 py-3">
                    <div className="flex items-center gap-1.5 text-[#6e121b] mb-1">
                      <Briefcase className="w-3.5 h-3.5 text-[#9e6b16] shrink-0" aria-hidden="true" />
                      <span className="text-xs font-bold uppercase tracking-wide">Career</span>
                    </div>
                    <p className="text-xs sm:text-[13px] text-[#3b2f24] leading-[1.48]">
                      {periodContent.career}
                    </p>
                  </div>

                  <div className="rounded-xl border border-[#e5d5bc] bg-[#fffdf8] px-3.5 py-3">
                    <div className="flex items-center gap-1.5 text-[#6e121b] mb-1">
                      <Heart className="w-3.5 h-3.5 text-[#7c1d26] shrink-0" aria-hidden="true" />
                      <span className="text-xs font-bold uppercase tracking-wide">Love</span>
                    </div>
                    <p className="text-xs sm:text-[13px] text-[#3b2f24] leading-[1.48]">
                      {periodContent.love}
                    </p>
                  </div>

                  <div className="rounded-xl border border-[#e5d5bc] bg-[#fffdf8] px-3.5 py-3">
                    <div className="flex items-center gap-1.5 text-[#6e121b] mb-1">
                      <Coins className="w-3.5 h-3.5 text-[#9e6b16] shrink-0" aria-hidden="true" />
                      <span className="text-xs font-bold uppercase tracking-wide">Finance</span>
                    </div>
                    <p className="text-xs sm:text-[13px] text-[#3b2f24] leading-[1.48]">
                      {periodContent.finance}
                    </p>
                  </div>

                  <div className="rounded-xl border border-[#e5d5bc] bg-[#fffdf8] px-3.5 py-3">
                    <div className="flex items-center gap-1.5 text-[#6e121b] mb-1">
                      <Activity className="w-3.5 h-3.5 text-[#0e4d3b] shrink-0" aria-hidden="true" />
                      <span className="text-xs font-bold uppercase tracking-wide">Health</span>
                    </div>
                    <p className="text-xs sm:text-[13px] text-[#3b2f24] leading-[1.48]">
                      {periodContent.health}
                    </p>
                  </div>
                </div>
              </div>

              {/* Clean Hairline-Divided Lucky & Focus Strip + CTA */}
              <div className="mt-4 pt-4 border-t border-[#e5d5bc] space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#e5d5bc] rounded-xl border border-[#e3d2b8] bg-[#fffaf1] text-xs">
                  <div className="flex items-center gap-2.5 px-3.5 py-2.5">
                    <span
                      aria-hidden="true"
                      className="inline-block h-4 w-4 shrink-0 rounded-full border border-black/20"
                      style={{ backgroundColor: periodContent.luckyColourHex }}
                    />
                    <div>
                      <p className="text-[11px] font-medium text-[#73604e]">Lucky Colour</p>
                      <p className="font-bold text-[#3a1619]">{periodContent.luckyColour}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 px-3.5 py-2.5">
                    <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#6e121b] text-[11px] font-bold text-[#fff5dc] tabular-nums">
                      {periodContent.luckyNumber}
                    </span>
                    <div>
                      <p className="text-[11px] font-medium text-[#73604e]">Lucky Number</p>
                      <p className="font-bold text-[#3a1619] tabular-nums">{periodContent.luckyNumber}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 px-3.5 py-2.5">
                    <Compass className="w-4 h-4 shrink-0 text-[#9e6b16]" aria-hidden="true" />
                    <div className="min-w-0">
                      <p className="text-[11px] font-medium text-[#73604e]">{periodContent.focusLabel}</p>
                      <p className="font-bold text-[#3a1619] leading-snug">{focusText}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <AppLink
                    href={fullHoroscopeHref}
                    className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-[#b57b1d] bg-gradient-to-b from-[#fae091] via-[#e6b34d] to-[#c98b24] hover:brightness-105 px-6 py-2.5 text-xs sm:text-sm font-bold text-[#460709] shadow-[0_6px_16px_-6px_rgba(128,82,12,0.5)] transition-all whitespace-nowrap"
                  >
                    <span>Read Full {activeProfile.name} Horoscope</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </AppLink>

                  <span className="text-[11px] font-medium text-[#75624f] text-center sm:text-right">
                    Element: {activeProfile.element} · Ruler: {activeProfile.rulingPlanet}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: TODAY'S PANCHANG */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl border border-[#d6b989] bg-[#fdfaf4] p-4 sm:p-6 shadow-[0_14px_34px_-16px_rgba(92,58,20,0.16)]">
            <div>
              {/* Header */}
              <div className="flex items-start justify-between gap-3 pb-4 border-b border-[#e5d5bc]">
                <div className="flex items-center gap-2.5">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#cfa053] bg-[#f7ebd4] text-[#6e121b]">
                    <CalendarDays className="w-5 h-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-[#6e121b] leading-tight">
                      Today’s Panchang
                    </h3>
                    <p className="text-xs sm:text-[13px] font-bold text-[#3b2d22] tabular-nums mt-0.5">
                      {panchang.fullDateHeading}
                    </p>
                  </div>
                </div>
                <span className="text-[11px] font-semibold text-[#1b3a75] shrink-0 pt-1">
                  New Delhi · IST
                </span>
              </div>

              {/* Clean Solar & Lunar Timing Summary Strip */}
              <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-2.5 text-xs">
                <div className="rounded-xl border border-[#e5d5bc] bg-[#fffaf1] px-3 py-2 flex items-center justify-between gap-2">
                  <span className="flex items-center gap-1.5 font-semibold text-[#4d3b2c]">
                    <Sunrise className="w-3.5 h-3.5 text-[#b5651d]" aria-hidden="true" />
                    <span>Sunrise</span>
                  </span>
                  <span className="font-bold text-[#2c221a] tabular-nums">{panchang.sunrise}</span>
                </div>
                <div className="rounded-xl border border-[#e5d5bc] bg-[#fffaf1] px-3 py-2 flex items-center justify-between gap-2">
                  <span className="flex items-center gap-1.5 font-semibold text-[#4d3b2c]">
                    <Sunset className="w-3.5 h-3.5 text-[#9e6b16]" aria-hidden="true" />
                    <span>Sunset</span>
                  </span>
                  <span className="font-bold text-[#2c221a] tabular-nums">{panchang.sunset}</span>
                </div>
                <div className="rounded-xl border border-[#e5d5bc] bg-[#fffaf1] px-3 py-2 flex items-center justify-between gap-2">
                  <span className="flex items-center gap-1.5 font-semibold text-[#4d3b2c]">
                    <Moon className="w-3.5 h-3.5 text-[#1b3a75]" aria-hidden="true" />
                    <span>Moonrise</span>
                  </span>
                  <span className="font-bold text-[#2c221a] tabular-nums">{panchang.moonrise}</span>
                </div>
                <div className="rounded-xl border border-[#e5d5bc] bg-[#fffaf1] px-3 py-2 flex items-center justify-between gap-2">
                  <span className="flex items-center gap-1.5 font-semibold text-[#4d3b2c]">
                    <Moon className="w-3.5 h-3.5 text-[#5b4d6d]" aria-hidden="true" />
                    <span>Moonset</span>
                  </span>
                  <span className="font-bold text-[#2c221a] tabular-nums">{panchang.moonset}</span>
                </div>
              </div>

              {/* Primary Panchang Limbs */}
              <dl className="divide-y divide-[#ebdcca] text-xs sm:text-[13px] mt-3">
                <div className="py-2.5 flex items-start justify-between gap-4">
                  <dt className="flex items-center gap-2 font-semibold text-[#4d3b2c] shrink-0">
                    <Sparkles className="w-3.5 h-3.5 text-[#9e6b16]" aria-hidden="true" />
                    <span>Tithi</span>
                  </dt>
                  <dd className="text-right font-medium text-[#2c221a]">{panchang.tithi}</dd>
                </div>
                <div className="py-2.5 flex items-start justify-between gap-4">
                  <dt className="flex items-center gap-2 font-semibold text-[#4d3b2c] shrink-0">
                    <Sun className="w-3.5 h-3.5 text-[#9e6b16]" aria-hidden="true" />
                    <span>Nakshatra</span>
                  </dt>
                  <dd className="text-right font-medium text-[#2c221a]">{panchang.nakshatra}</dd>
                </div>
                <div className="py-2.5 flex items-start justify-between gap-4">
                  <dt className="flex items-center gap-2 font-semibold text-[#4d3b2c] shrink-0">
                    <Flame className="w-3.5 h-3.5 text-[#9e6b16]" aria-hidden="true" />
                    <span>Yoga</span>
                  </dt>
                  <dd className="text-right font-medium text-[#2c221a]">{panchang.yoga}</dd>
                </div>
                <div className="py-2.5 flex items-start justify-between gap-4">
                  <dt className="flex items-center gap-2 font-semibold text-[#4d3b2c] shrink-0">
                    <Compass className="w-3.5 h-3.5 text-[#9e6b16]" aria-hidden="true" />
                    <span>Karana</span>
                  </dt>
                  <dd className="text-right font-medium text-[#2c221a]">{panchang.karana}</dd>
                </div>
              </dl>

              {/* Separate Visual Treatment: Inauspicious vs Auspicious Timings */}
              <div className="mt-3.5 space-y-2.5">
                <div className="rounded-xl border border-[#dfb5ba] border-l-4 border-l-[#8c1d24] bg-[#faeff0] px-3.5 py-2.5 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <XCircle className="w-4 h-4 text-[#8c1d24] shrink-0" aria-hidden="true" />
                    <div>
                      <span className="block text-xs font-bold text-[#6e121b]">Rahu Kaal</span>
                      <span className="block text-[10px] font-medium text-[#8c3d44]">
                        Inauspicious Timing · Avoid new starts
                      </span>
                    </div>
                  </div>
                  <span className="text-xs sm:text-[13px] font-bold text-[#5e0f17] tabular-nums whitespace-nowrap">
                    {panchang.rahuKaal}
                  </span>
                </div>

                <div className="rounded-xl border border-[#a5cfc0] border-l-4 border-l-[#0e5942] bg-[#eef7f2] px-3.5 py-2.5 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0e5942] shrink-0" aria-hidden="true" />
                    <div>
                      <span className="block text-xs font-bold text-[#0e4d3b]">Abhijit Muhurat</span>
                      <span className="block text-[10px] font-medium text-[#2c6b56]">
                        Auspicious Timing · Best midday window
                      </span>
                    </div>
                  </div>
                  <span className="text-xs sm:text-[13px] font-bold text-[#0c3f30] tabular-nums whitespace-nowrap">
                    {panchang.abhijitMuhurat}
                  </span>
                </div>
              </div>

              {/* Hindu Month & Paksha Summary */}
              <div className="mt-3 rounded-xl border border-[#e3d2b8] bg-[#fffaf1] px-3.5 py-2.5 flex items-center justify-between gap-3 text-xs sm:text-[13px]">
                <span className="font-semibold text-[#4d3b2c]">Hindu Month &amp; Paksha</span>
                <span className="font-bold text-[#6e121b]">
                  {panchang.hinduMonth}, {panchang.paksha}
                </span>
              </div>
            </div>

            {/* Panchang Detail CTA */}
            <div className="mt-4 pt-3.5 border-t border-[#e5d5bc]">
              <AppLink
                href="/panchang/today/"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#b57b1d] bg-gradient-to-b from-[#fae091] via-[#e6b34d] to-[#c98b24] hover:brightness-105 px-6 py-2.5 text-xs sm:text-sm font-bold text-[#460709] shadow-[0_6px_16px_-6px_rgba(128,82,12,0.5)] transition-all whitespace-nowrap"
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
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="h-px flex-1 max-w-[140px] bg-gradient-to-l from-[#c59645] to-transparent" aria-hidden="true" />
            <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-[#4a1117]">
              Explore More
            </h3>
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
                  className="group flex items-start justify-between gap-3 rounded-xl border border-[#d9c095] bg-[#fdfaf3] hover:bg-[#fffdf9] hover:border-[#b98735] p-4 shadow-xs hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
                >
                  <div className="flex items-start gap-3.5 min-w-0">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#e0c18a] bg-[#f7ebd4] text-[#8c4f12] group-hover:bg-[#6e121b] group-hover:text-[#f9dc92] transition-colors">
                      <CardIcon className="w-5 h-5" aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <h4 className="font-serif-display text-base font-bold text-[#4a1117] group-hover:text-[#6e121b] transition-colors">
                        {card.title}
                      </h4>
                      <p className="mt-0.5 text-xs text-[#645342] leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </div>
                  <ArrowRight
                    className="w-4 h-4 shrink-0 text-[#9e6b16] opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all mt-1"
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
