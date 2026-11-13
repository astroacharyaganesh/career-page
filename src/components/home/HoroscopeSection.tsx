import React, { useEffect, useRef, useState } from 'react';
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  BookOpen,
  Briefcase,
  Building2,
  CalendarDays,
  Coins,
  Compass,
  Heart,
  Home,
  Plane,
  Sparkles,
  TrendingUp,
  Users,
  X
} from 'lucide-react';
import {
  HOROSCOPE_PERIODS,
  HoroscopePeriod,
  ZODIAC_HOROSCOPES,
  ZodiacHoroscopeProfile,
  ZodiacId
} from '../../data/horoscopeData';

interface HoroscopeSectionProps {
  onOpenBooking?: () => void;
}

interface AreaBlockProps {
  label: string;
  text: string;
  icon: React.ReactNode;
  tone?: 'neutral' | 'emerald' | 'maroon' | 'gold';
  className?: string;
}

const AreaBlock: React.FC<AreaBlockProps> = ({
  label,
  text,
  icon,
  tone = 'neutral',
  className = ''
}) => {
  const toneClasses: Record<NonNullable<AreaBlockProps['tone']>, string> = {
    neutral: 'bg-[#fffdf9]/95 border-[#e3d2b8] hover:border-[#c39549]',
    emerald: 'bg-[#ecf6f1] border-[#a9d1c0] hover:border-[#6fb097]',
    maroon: 'bg-[#faeff0] border-[#e0b8bc] hover:border-[#c4838a]',
    gold: 'bg-[#fbf2df] border-[#dfc185] hover:border-[#c59a45]'
  };

  const iconTint: Record<NonNullable<AreaBlockProps['tone']>, string> = {
    neutral: 'text-[#1e3d7a]',
    emerald: 'text-[#0e4d3b]',
    maroon: 'text-[#78151f]',
    gold: 'text-[#9e6b16]'
  };

  const labelTint: Record<NonNullable<AreaBlockProps['tone']>, string> = {
    neutral: 'text-[#6e121b]',
    emerald: 'text-[#0e4d3b]',
    maroon: 'text-[#78151f]',
    gold: 'text-[#6e460c]'
  };

  const textTint: Record<NonNullable<AreaBlockProps['tone']>, string> = {
    neutral: 'text-[#2c221a]',
    emerald: 'text-[#16362b]',
    maroon: 'text-[#3c161a]',
    gold: 'text-[#3a280e]'
  };

  return (
    <div
      className={`rounded-xl border px-3.5 py-2.5 transition-colors duration-200 ${toneClasses[tone]} ${className}`}
    >
      <div className="flex items-center gap-1.5 mb-1">
        <span className={`shrink-0 ${iconTint[tone]}`} aria-hidden="true">
          {icon}
        </span>
        <h4 className={`text-[11px] font-semibold uppercase tracking-[0.11em] ${labelTint[tone]}`}>
          {label}
        </h4>
      </div>
      <p className={`text-[13px] leading-[1.45] ${textTint[tone]}`}>{text}</p>
    </div>
  );
};

export const HoroscopeSection: React.FC<HoroscopeSectionProps> = ({ onOpenBooking }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [selectedSignId, setSelectedSignId] = useState<ZodiacId>('aries');
  const [selectedPeriod, setSelectedPeriod] = useState<HoroscopePeriod>('Daily');
  const [isFullModalOpen, setIsFullModalOpen] = useState(false);

  const activeProfile: ZodiacHoroscopeProfile =
    ZODIAC_HOROSCOPES.find((item) => item.id === selectedSignId) || ZODIAC_HOROSCOPES[0];

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
        rootMargin: '0px 0px -40px 0px',
        threshold: 0.12
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleSelectSign = (id: ZodiacId, event?: React.MouseEvent<HTMLButtonElement>) => {
    setSelectedSignId(id);
    if (event?.currentTarget && sliderRef.current) {
      event.currentTarget.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
  };

  const activeLucky =
    selectedPeriod === 'Daily'
      ? {
          number: activeProfile.daily.luckyNumber,
          colour: activeProfile.daily.luckyColour,
          hex: activeProfile.daily.luckyColourHex
        }
      : selectedPeriod === 'Weekly'
      ? {
          number: activeProfile.weekly.luckyNumber,
          colour: activeProfile.weekly.luckyColour,
          hex: activeProfile.weekly.luckyColourHex
        }
      : selectedPeriod === 'Monthly'
      ? {
          number: activeProfile.monthly.luckyNumber,
          colour: activeProfile.monthly.luckyColour,
          hex: activeProfile.monthly.luckyColourHex
        }
      : {
          number: activeProfile.yearly.luckyNumber,
          colour: activeProfile.yearly.luckyColour,
          hex: activeProfile.yearly.luckyColourHex
        };

  return (
    <section
      ref={sectionRef}
      id="horoscope"
      aria-labelledby="horoscope-section-heading"
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#f9f3e8] via-[#fdf9f2] to-[#f6ede0] py-10 sm:py-12 border-y border-[#e2cfb1]"
    >
      {/* Subtle Astronomical Background Textures: Planetary Orbit Lines & Kundli Geometry */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(212,162,76,0.12)_0%,transparent_70%),radial-gradient(circle_at_90%_82%,rgba(14,77,59,0.06)_0%,transparent_50%),radial-gradient(circle_at_10%_75%,rgba(30,61,122,0.07)_0%,transparent_50%)]"
      />
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 720"
        preserveAspectRatio="xMidYMid slice"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.14] text-[#9e7029]"
        fill="none"
      >
        <circle cx="720" cy="360" r="300" stroke="currentColor" strokeWidth="0.7" strokeDasharray="3 6" />
        <circle cx="720" cy="360" r="460" stroke="currentColor" strokeWidth="0.6" />
        <circle cx="720" cy="360" r="610" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 7" />
        <ellipse cx="720" cy="360" rx="540" ry="185" transform="rotate(-14 720 360)" stroke="currentColor" strokeWidth="0.6" />
        <ellipse cx="720" cy="360" rx="540" ry="185" transform="rotate(14 720 360)" stroke="currentColor" strokeWidth="0.6" />
        {/* Corner Kundli Diamond Grid Accents */}
        <g transform="translate(1190, 32)" opacity="0.65" stroke="currentColor" strokeWidth="0.8">
          <rect x="0" y="0" width="180" height="180" />
          <line x1="0" y1="0" x2="180" y2="180" />
          <line x1="180" y1="0" x2="0" y2="180" />
          <polygon points="90,0 180,90 90,180 0,90" />
        </g>
        <g transform="translate(60, 495)" opacity="0.55" stroke="currentColor" strokeWidth="0.8">
          <rect x="0" y="0" width="150" height="150" />
          <line x1="0" y1="0" x2="150" y2="150" />
          <line x1="150" y1="0" x2="0" y2="150" />
          <polygon points="75,0 150,75 75,150 0,75" />
        </g>
      </svg>

      <div
        className={`relative z-10 w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ease-out motion-reduce:transition-none ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
        }`}
      >
        {/* Top Header + Horoscope Period Segmented Control */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 mb-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-md border border-[#cfa053]/60 bg-[#f4e7d0] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6e121b] mb-2.5">
              <Compass className="w-3.5 h-3.5 text-[#9e6b16]" aria-hidden="true" />
              <span>HOROSCOPE</span>
            </div>

            <h2
              id="horoscope-section-heading"
              className="font-serif-display text-2xl sm:text-3xl lg:text-[2.25rem] font-bold text-[#4a1117] leading-[1.16] tracking-[-0.015em] [text-wrap:balance]"
            >
              What Do The Stars Say For You?
            </h2>

            <p className="mt-2 text-sm sm:text-[15px] text-[#5e5143] leading-relaxed">
              Explore personalised horoscope guidance for today, this week, this month and this year.
            </p>
          </div>

          {/* 4-Period Interactive Segmented Tabs */}
          <div
            role="tablist"
            aria-label="Horoscope Time Period"
            className="inline-flex self-start lg:self-auto items-center gap-1 rounded-xl border border-[#d6bc93] bg-[#efe3cf] p-1 shadow-xs"
          >
            {HOROSCOPE_PERIODS.map((period) => {
              const isSelected = selectedPeriod === period;
              return (
                <button
                  key={period}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedPeriod(period)}
                  className={`rounded-lg px-3.5 sm:px-5 py-2 text-xs sm:text-sm font-semibold whitespace-nowrap shrink-0 transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6e121b] ${
                    isSelected
                      ? 'bg-gradient-to-b from-[#78151f] to-[#560d14] text-[#fff6e3] border border-[#c59645]/75 shadow-sm'
                      : 'border border-transparent text-[#594735] hover:text-[#3b1116] hover:bg-white/60'
                  }`}
                >
                  {period}
                </button>
              );
            })}
          </div>
        </div>

        {/* 12 Zodiac Sign Selector: Horizontal Scroll Slider on Mobile, Balanced Grid on Desktop */}
        <div
          ref={sliderRef}
          role="listbox"
          aria-label="Select Zodiac Sign"
          className="flex md:grid md:grid-cols-6 lg:grid-cols-12 gap-2 overflow-x-auto md:overflow-visible pb-2 md:pb-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory mb-5"
        >
          {ZODIAC_HOROSCOPES.map((sign) => {
            const isSelected = sign.id === selectedSignId;
            return (
              <button
                key={sign.id}
                type="button"
                role="option"
                aria-selected={isSelected}
                onClick={(e) => handleSelectSign(sign.id, e)}
                className={`group shrink-0 w-[96px] sm:w-[104px] md:w-auto snap-start flex flex-col items-center justify-center rounded-xl border px-2 py-2.5 text-center transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6e121b] ${
                  isSelected
                    ? 'border-[#b98735] bg-gradient-to-b from-[#6e121b] to-[#4f0b12] shadow-[0_8px_20px_-8px_rgba(94,17,24,0.45)]'
                    : 'border-[#dfd0b8] bg-[#fffaf2]/92 hover:border-[#b9873b] hover:bg-[#fcf2e1]'
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`flex h-9 w-9 items-center justify-center rounded-full border text-lg font-semibold transition-colors duration-200 ${
                    isSelected
                      ? 'border-[#e7c47a] bg-[#fff7e6] text-[#6e121b]'
                      : 'border-[#1e3d7a]/20 bg-[#edf2fa] text-[#1b3975] group-hover:border-[#b9873b]/55 group-hover:bg-[#f6ead3] group-hover:text-[#6e121b]'
                  }`}
                >
                  {sign.glyph}
                </span>

                <span
                  className={`mt-1.5 text-xs font-semibold tracking-tight whitespace-nowrap ${
                    isSelected ? 'text-[#fff7e6]' : 'text-[#36281e] group-hover:text-[#4a1117]'
                  }`}
                >
                  {sign.name}
                </span>

                <span
                  className={`mt-0.5 text-[10px] leading-tight tabular-nums whitespace-nowrap ${
                    isSelected ? 'text-[#edd197]' : 'text-[#736252]'
                  }`}
                >
                  {sign.dateRange}
                </span>
              </button>
            );
          })}
        </div>

        {/* Featured Horoscope Card */}
        <article className="relative overflow-hidden rounded-2xl border border-[#d6b888] bg-gradient-to-br from-[#fffdf9] via-[#fbf5ea] to-[#f5ebda] p-4 sm:p-6 shadow-[0_18px_40px_-18px_rgba(92,58,20,0.18)]">
          {/* Subtle Kundli Geometry Overlay Inside Card Corner */}
          <svg
            aria-hidden="true"
            viewBox="0 0 180 180"
            className="pointer-events-none absolute -top-6 -right-6 h-44 w-44 opacity-[0.12] text-[#a37327]"
            fill="none"
          >
            <rect x="10" y="10" width="160" height="160" stroke="currentColor" strokeWidth="1" />
            <line x1="10" y1="10" x2="170" y2="170" stroke="currentColor" strokeWidth="1" />
            <line x1="170" y1="10" x2="10" y2="170" stroke="currentColor" strokeWidth="1" />
            <polygon points="90,10 170,90 90,170 10,90" stroke="currentColor" strokeWidth="1" />
          </svg>

          <div
            key={`${activeProfile.id}-${selectedPeriod}`}
            className="horoscope-panel-enter relative z-10"
          >
            {/* Card Header Row */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-4 border-b border-[#dfd0b8]">
              <div className="flex items-center gap-3.5">
                <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#c59645] bg-gradient-to-b from-[#6e121b] to-[#4b0a11] shadow-sm">
                  <span
                    aria-hidden="true"
                    className="text-2xl font-semibold text-[#fbe6b2] leading-none"
                  >
                    {activeProfile.glyph}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-[#4a1117] leading-tight">
                    {activeProfile.name} – {selectedPeriod} Horoscope
                  </h3>
                  <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs text-[#6a5a4a] tabular-nums">
                    <span>{activeProfile.vedicName} Rashi</span>
                    <span aria-hidden="true">·</span>
                    <span>Ruled by {activeProfile.rulingPlanet}</span>
                    <span aria-hidden="true">·</span>
                    <span>{activeProfile.element} Sign</span>
                    <span aria-hidden="true">·</span>
                    <span>{activeProfile.dateRange}</span>
                  </div>
                </div>
              </div>

              <div className="text-xs text-[#4d4136] sm:text-right max-w-sm">
                <span className="text-[#1b3a75] font-semibold">Planetary Focus:</span>{' '}
                {activeProfile.planetaryInsight}
              </div>
            </div>

            {/* Period-Specific Horoscope Breakdown */}
            <div className="mt-4 space-y-3">
              {/* 1. Overall / Overview Panel Always First */}
              <div className="rounded-xl border border-[#a9d1c0] bg-[#ecf6f1] px-4 py-3">
                <div className="flex items-center gap-2 mb-1">
                  <Sparkles className="w-3.5 h-3.5 text-[#0e4d3b] shrink-0" aria-hidden="true" />
                  <h4 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0e4d3b]">
                    {selectedPeriod === 'Monthly'
                      ? 'Monthly Overview'
                      : selectedPeriod === 'Yearly'
                      ? 'Year Overview'
                      : 'Overall'}
                  </h4>
                </div>
                <p className="text-sm sm:text-[15px] font-medium text-[#16362b] leading-snug">
                  {selectedPeriod === 'Daily' && activeProfile.daily.overall}
                  {selectedPeriod === 'Weekly' && activeProfile.weekly.overall}
                  {selectedPeriod === 'Monthly' && activeProfile.monthly.overview}
                  {selectedPeriod === 'Yearly' && activeProfile.yearly.overview}
                </p>
              </div>

              {/* 2. Life Areas Grid Based on Active Period */}
              {selectedPeriod === 'Daily' && (
                <div className="grid grid-cols-1 md:grid-cols-6 gap-2.5">
                  <AreaBlock
                    className="md:col-span-2"
                    label="Career"
                    text={activeProfile.daily.career}
                    icon={<Briefcase className="w-3.5 h-3.5" />}
                  />
                  <AreaBlock
                    className="md:col-span-2"
                    label="Love"
                    text={activeProfile.daily.love}
                    icon={<Heart className="w-3.5 h-3.5" />}
                  />
                  <AreaBlock
                    className="md:col-span-2"
                    label="Finance"
                    text={activeProfile.daily.finance}
                    icon={<Coins className="w-3.5 h-3.5" />}
                  />
                  <AreaBlock
                    className="md:col-span-3"
                    label="Health"
                    text={activeProfile.daily.health}
                    icon={<Activity className="w-3.5 h-3.5" />}
                  />
                  <AreaBlock
                    className="md:col-span-3"
                    label="Family"
                    text={activeProfile.daily.family}
                    icon={<Home className="w-3.5 h-3.5" />}
                  />
                </div>
              )}

              {selectedPeriod === 'Weekly' && (
                <div className="grid grid-cols-1 md:grid-cols-6 gap-2.5">
                  <AreaBlock
                    className="md:col-span-2"
                    label="Career"
                    text={activeProfile.weekly.career}
                    icon={<Briefcase className="w-3.5 h-3.5" />}
                  />
                  <AreaBlock
                    className="md:col-span-2"
                    label="Love & Relationships"
                    text={activeProfile.weekly.love}
                    icon={<Heart className="w-3.5 h-3.5" />}
                  />
                  <AreaBlock
                    className="md:col-span-2"
                    label="Finance"
                    text={activeProfile.weekly.finance}
                    icon={<Coins className="w-3.5 h-3.5" />}
                  />
                  <AreaBlock
                    className="md:col-span-3"
                    label="Health"
                    text={activeProfile.weekly.health}
                    icon={<Activity className="w-3.5 h-3.5" />}
                  />
                  <AreaBlock
                    className="md:col-span-3"
                    label="Family"
                    text={activeProfile.weekly.family}
                    icon={<Home className="w-3.5 h-3.5" />}
                  />
                </div>
              )}

              {selectedPeriod === 'Monthly' && (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-6 gap-2.5">
                    <AreaBlock
                      className="md:col-span-2"
                      label="Career & Business"
                      text={activeProfile.monthly.careerBusiness}
                      icon={<Briefcase className="w-3.5 h-3.5" />}
                    />
                    <AreaBlock
                      className="md:col-span-2"
                      label="Love & Marriage"
                      text={activeProfile.monthly.loveMarriage}
                      icon={<Heart className="w-3.5 h-3.5" />}
                    />
                    <AreaBlock
                      className="md:col-span-2"
                      label="Money & Finance"
                      text={activeProfile.monthly.moneyFinance}
                      icon={<Coins className="w-3.5 h-3.5" />}
                    />
                    <AreaBlock
                      className="md:col-span-3"
                      label="Health"
                      text={activeProfile.monthly.health}
                      icon={<Activity className="w-3.5 h-3.5" />}
                    />
                    <AreaBlock
                      className="md:col-span-3"
                      label="Family & Relationships"
                      text={activeProfile.monthly.familyRelationships}
                      icon={<Users className="w-3.5 h-3.5" />}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                    <AreaBlock
                      tone="emerald"
                      label="Important Opportunities"
                      text={activeProfile.monthly.opportunities}
                      icon={<TrendingUp className="w-3.5 h-3.5" />}
                    />
                    <AreaBlock
                      tone="maroon"
                      label="Things To Avoid"
                      text={activeProfile.monthly.avoid}
                      icon={<AlertTriangle className="w-3.5 h-3.5" />}
                    />
                  </div>
                </>
              )}

              {selectedPeriod === 'Yearly' && (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                    <AreaBlock
                      label="Career & Professional Growth"
                      text={activeProfile.yearly.careerGrowth}
                      icon={<Briefcase className="w-3.5 h-3.5" />}
                    />
                    <AreaBlock
                      label="Business"
                      text={activeProfile.yearly.business}
                      icon={<Building2 className="w-3.5 h-3.5" />}
                    />
                    <AreaBlock
                      label="Love & Relationships"
                      text={activeProfile.yearly.loveRelationships}
                      icon={<Heart className="w-3.5 h-3.5" />}
                    />
                    <AreaBlock
                      label="Marriage"
                      text={activeProfile.yearly.marriage}
                      icon={<Users className="w-3.5 h-3.5" />}
                    />
                    <AreaBlock
                      label="Money & Wealth"
                      text={activeProfile.yearly.moneyWealth}
                      icon={<Coins className="w-3.5 h-3.5" />}
                    />
                    <AreaBlock
                      label="Health & Wellness"
                      text={activeProfile.yearly.healthWellness}
                      icon={<Activity className="w-3.5 h-3.5" />}
                    />
                    <AreaBlock
                      label="Family"
                      text={activeProfile.yearly.family}
                      icon={<Home className="w-3.5 h-3.5" />}
                    />
                    <AreaBlock
                      label="Education"
                      text={activeProfile.yearly.education}
                      icon={<BookOpen className="w-3.5 h-3.5" />}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                    <AreaBlock
                      label="Travel"
                      text={activeProfile.yearly.travel}
                      icon={<Plane className="w-3.5 h-3.5" />}
                    />
                    <AreaBlock
                      tone="emerald"
                      label="Important Opportunities"
                      text={activeProfile.yearly.opportunities}
                      icon={<TrendingUp className="w-3.5 h-3.5" />}
                    />
                    <AreaBlock
                      tone="maroon"
                      label="Challenging Periods"
                      text={activeProfile.yearly.challengingPeriods}
                      icon={<AlertTriangle className="w-3.5 h-3.5" />}
                    />
                    <AreaBlock
                      tone="gold"
                      label="Best Months"
                      text={activeProfile.yearly.bestMonths}
                      icon={<CalendarDays className="w-3.5 h-3.5" />}
                    />
                  </div>
                </>
              )}
            </div>

            {/* Bottom Lucky Metadata + CTA Row */}
            <div className="mt-4 pt-3.5 border-t border-[#dfd0b8] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-[#6a5a4a] font-medium">Lucky Number:</span>
                  <span className="font-bold tabular-nums text-[#6e121b]">
                    {activeLucky.number}
                  </span>
                </div>

                <span aria-hidden="true" className="hidden sm:inline-block h-3.5 w-px bg-[#cbb593]" />

                <div className="flex items-center gap-2">
                  <span className="text-[#6a5a4a] font-medium">Lucky Colour:</span>
                  <span
                    aria-hidden="true"
                    className="inline-block h-2.5 w-2.5 rounded-full border border-black/20"
                    style={{ backgroundColor: activeLucky.hex }}
                  />
                  <span className="font-bold text-[#6e121b]">{activeLucky.colour}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsFullModalOpen(true)}
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-[#c59645] bg-gradient-to-b from-[#7a1721] to-[#560d14] hover:from-[#8d1b27] hover:to-[#661018] px-5 py-2 text-xs sm:text-[13px] font-semibold text-[#fff6e3] shadow-[0_6px_16px_-4px_rgba(94,17,24,0.45)] transition-all duration-200 cursor-pointer whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6e121b]"
              >
                <span>Read Full Horoscope</span>
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </article>
      </div>

      {/* Full Horoscope Detailed View Modal */}
      {isFullModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs"
          onClick={() => setIsFullModalOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="full-horoscope-modal-title"
            className="w-full max-w-3xl max-h-[88vh] flex flex-col rounded-2xl border border-[#d6b888] bg-[#fdf9f2] text-[#2c221a] shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-5 py-4 bg-[#f4ead9] border-b border-[#dfd0b8] flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#c59645] bg-[#6e121b] text-xl text-[#fbe6b2]">
                  {activeProfile.glyph}
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9c6b17]">
                    {activeProfile.vedicName} Rashi · {activeProfile.dateRange}
                  </p>
                  <h3
                    id="full-horoscope-modal-title"
                    className="font-serif-display text-lg sm:text-xl font-bold text-[#4a1117]"
                  >
                    {activeProfile.name} – {selectedPeriod} Horoscope
                  </h3>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsFullModalOpen(false)}
                aria-label="Close Full Horoscope"
                className="p-2 rounded-full border border-[#d6bc93] bg-[#fffaf2] text-[#4a1117] hover:border-[#b9873b] cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Period Switcher Inside Modal */}
            <div className="px-5 py-2.5 bg-[#f7efe2] border-b border-[#e5d5bc] flex items-center gap-1.5 overflow-x-auto">
              {HOROSCOPE_PERIODS.map((period) => {
                const isSelected = selectedPeriod === period;
                return (
                  <button
                    key={period}
                    type="button"
                    onClick={() => setSelectedPeriod(period)}
                    className={`rounded-lg px-3.5 py-1.5 text-xs font-semibold whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                      isSelected
                        ? 'bg-[#6e121b] text-[#fff6e3] border border-[#c59645]'
                        : 'text-[#5b4836] hover:text-[#3b1116] hover:bg-white/70'
                    }`}
                  >
                    {period}
                  </button>
                );
              })}
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              <div className="rounded-xl border border-[#a9d1c0] bg-[#ecf6f1] p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#0e4d3b] mb-1">
                  Planetary Perspective · Ruled by {activeProfile.rulingPlanet}
                </p>
                <p className="text-sm text-[#16362b] leading-relaxed">
                  {activeProfile.planetaryInsight}
                </p>
              </div>

              {selectedPeriod === 'Daily' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <AreaBlock tone="emerald" label="Overall" text={activeProfile.daily.overall} icon={<Sparkles className="w-3.5 h-3.5" />} className="sm:col-span-2" />
                  <AreaBlock label="Career" text={activeProfile.daily.career} icon={<Briefcase className="w-3.5 h-3.5" />} />
                  <AreaBlock label="Love" text={activeProfile.daily.love} icon={<Heart className="w-3.5 h-3.5" />} />
                  <AreaBlock label="Finance" text={activeProfile.daily.finance} icon={<Coins className="w-3.5 h-3.5" />} />
                  <AreaBlock label="Health" text={activeProfile.daily.health} icon={<Activity className="w-3.5 h-3.5" />} />
                  <AreaBlock label="Family" text={activeProfile.daily.family} icon={<Home className="w-3.5 h-3.5" />} className="sm:col-span-2" />
                </div>
              )}

              {selectedPeriod === 'Weekly' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <AreaBlock tone="emerald" label="Overall" text={activeProfile.weekly.overall} icon={<Sparkles className="w-3.5 h-3.5" />} className="sm:col-span-2" />
                  <AreaBlock label="Career" text={activeProfile.weekly.career} icon={<Briefcase className="w-3.5 h-3.5" />} />
                  <AreaBlock label="Love & Relationships" text={activeProfile.weekly.love} icon={<Heart className="w-3.5 h-3.5" />} />
                  <AreaBlock label="Finance" text={activeProfile.weekly.finance} icon={<Coins className="w-3.5 h-3.5" />} />
                  <AreaBlock label="Health" text={activeProfile.weekly.health} icon={<Activity className="w-3.5 h-3.5" />} />
                  <AreaBlock label="Family" text={activeProfile.weekly.family} icon={<Home className="w-3.5 h-3.5" />} className="sm:col-span-2" />
                </div>
              )}

              {selectedPeriod === 'Monthly' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <AreaBlock tone="emerald" label="Monthly Overview" text={activeProfile.monthly.overview} icon={<Sparkles className="w-3.5 h-3.5" />} className="sm:col-span-2" />
                  <AreaBlock label="Career & Business" text={activeProfile.monthly.careerBusiness} icon={<Briefcase className="w-3.5 h-3.5" />} />
                  <AreaBlock label="Love & Marriage" text={activeProfile.monthly.loveMarriage} icon={<Heart className="w-3.5 h-3.5" />} />
                  <AreaBlock label="Money & Finance" text={activeProfile.monthly.moneyFinance} icon={<Coins className="w-3.5 h-3.5" />} />
                  <AreaBlock label="Health" text={activeProfile.monthly.health} icon={<Activity className="w-3.5 h-3.5" />} />
                  <AreaBlock label="Family & Relationships" text={activeProfile.monthly.familyRelationships} icon={<Users className="w-3.5 h-3.5" />} className="sm:col-span-2" />
                  <AreaBlock tone="emerald" label="Important Opportunities" text={activeProfile.monthly.opportunities} icon={<TrendingUp className="w-3.5 h-3.5" />} />
                  <AreaBlock tone="maroon" label="Things To Avoid" text={activeProfile.monthly.avoid} icon={<AlertTriangle className="w-3.5 h-3.5" />} />
                </div>
              )}

              {selectedPeriod === 'Yearly' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <AreaBlock tone="emerald" label="Year Overview" text={activeProfile.yearly.overview} icon={<Sparkles className="w-3.5 h-3.5" />} className="sm:col-span-2" />
                  <AreaBlock label="Career & Professional Growth" text={activeProfile.yearly.careerGrowth} icon={<Briefcase className="w-3.5 h-3.5" />} />
                  <AreaBlock label="Business" text={activeProfile.yearly.business} icon={<Building2 className="w-3.5 h-3.5" />} />
                  <AreaBlock label="Love & Relationships" text={activeProfile.yearly.loveRelationships} icon={<Heart className="w-3.5 h-3.5" />} />
                  <AreaBlock label="Marriage" text={activeProfile.yearly.marriage} icon={<Users className="w-3.5 h-3.5" />} />
                  <AreaBlock label="Money & Wealth" text={activeProfile.yearly.moneyWealth} icon={<Coins className="w-3.5 h-3.5" />} />
                  <AreaBlock label="Health & Wellness" text={activeProfile.yearly.healthWellness} icon={<Activity className="w-3.5 h-3.5" />} />
                  <AreaBlock label="Family" text={activeProfile.yearly.family} icon={<Home className="w-3.5 h-3.5" />} />
                  <AreaBlock label="Education" text={activeProfile.yearly.education} icon={<BookOpen className="w-3.5 h-3.5" />} />
                  <AreaBlock label="Travel" text={activeProfile.yearly.travel} icon={<Plane className="w-3.5 h-3.5" />} />
                  <AreaBlock tone="gold" label="Best Months" text={activeProfile.yearly.bestMonths} icon={<CalendarDays className="w-3.5 h-3.5" />} />
                  <AreaBlock tone="emerald" label="Important Opportunities" text={activeProfile.yearly.opportunities} icon={<TrendingUp className="w-3.5 h-3.5" />} />
                  <AreaBlock tone="maroon" label="Challenging Periods" text={activeProfile.yearly.challengingPeriods} icon={<AlertTriangle className="w-3.5 h-3.5" />} />
                </div>
              )}

              <div className="flex flex-wrap items-center gap-6 rounded-xl border border-[#dfd0b8] bg-[#f4ead9] px-4 py-3 text-xs sm:text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-[#6a5a4a]">Lucky Number:</span>
                  <span className="font-bold tabular-nums text-[#6e121b]">{activeLucky.number}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#6a5a4a]">Lucky Colour:</span>
                  <span
                    aria-hidden="true"
                    className="inline-block h-2.5 w-2.5 rounded-full border border-black/20"
                    style={{ backgroundColor: activeLucky.hex }}
                  />
                  <span className="font-bold text-[#6e121b]">{activeLucky.colour}</span>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            {onOpenBooking && (
              <div className="px-5 py-3.5 bg-[#f4ead9] border-t border-[#dfd0b8] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <span className="text-xs text-[#5e5143]">
                  Want predictions tailored to your exact birth chart (Kundli) &amp; Dasha?
                </span>
                <button
                  type="button"
                  onClick={() => {
                    setIsFullModalOpen(false);
                    onOpenBooking();
                  }}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#c59645] bg-gradient-to-b from-[#7a1721] to-[#560d14] hover:from-[#8d1b27] hover:to-[#661018] px-4 py-2 text-xs font-semibold text-[#fff6e3] whitespace-nowrap cursor-pointer"
                >
                  <span>Book Personal Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
