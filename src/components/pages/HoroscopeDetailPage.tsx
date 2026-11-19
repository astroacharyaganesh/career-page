import React from 'react';
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  BookOpen,
  Briefcase,
  Building2,
  CalendarDays,
  Clock,
  Coins,
  Compass,
  Flame,
  Heart,
  Home,
  Moon,
  Plane,
  ShieldAlert,
  Sparkles,
  Sun,
  TrendingUp,
  Users
} from 'lucide-react';
import hanishPortrait from '../../assets/images/regenerated_image_1787726256429.png';
import {
  HOROSCOPE_PERIODS,
  HoroscopePeriodSlug,
  PERIOD_TO_SLUG,
  SLUG_TO_PERIOD,
  ZODIAC_HOROSCOPES,
  ZodiacId,
  getHoroscopeFocus,
  getPeriodHref,
  getZodiacImagePath,
  getZodiacProfile
} from '../../data/horoscopeData';
import { getPeriodDetailedSections, getSignSacredMeta } from '../../data/horoscopeNarratives';
import { getIndiaCalendarInfo, getPanchangSnapshot } from '../../data/panchangData';
import { BreadcrumbItem } from '../../data/seoRoutes';
import { AppLink } from '../AppLink';
import { Breadcrumbs } from '../Breadcrumbs';
import { MonthlyHoroscopeVideoCard } from '../MonthlyHoroscopeVideoCard';
import { SacredDividerOrnament, SacredMandalaAccent } from '../SacredMandalaAccent';

interface HoroscopeDetailPageProps {
  periodSlug: HoroscopePeriodSlug;
  signId: ZodiacId;
  onOpenBooking: () => void;
}

interface DetailBlockProps {
  label: string;
  text: string;
  icon: React.ReactNode;
  tone?: 'neutral' | 'emerald' | 'maroon' | 'gold';
  className?: string;
}

const DetailBlock: React.FC<DetailBlockProps> = ({
  label,
  text,
  icon,
  tone = 'neutral',
  className = ''
}) => {
  const toneClasses: Record<NonNullable<DetailBlockProps['tone']>, string> = {
    neutral: 'bg-white border-[#e2d1b1] hover:border-[#b98735] hover:shadow-xs',
    emerald: 'bg-[#e9f5ef] border-[#82c3aa] hover:border-[#2e8563]',
    maroon: 'bg-[#faecee] border-[#d898a0] hover:border-[#a73a47]',
    gold: 'bg-[#fbf1dc] border-[#d8b46e] hover:border-[#b57b1d]'
  };

  const labelToneClasses: Record<NonNullable<DetailBlockProps['tone']>, string> = {
    neutral: 'text-[#4a0d14]',
    emerald: 'text-[#0e4d3b]',
    maroon: 'text-[#6e121b]',
    gold: 'text-[#6c4207]'
  };

  const iconWrapClasses: Record<NonNullable<DetailBlockProps['tone']>, string> = {
    neutral: 'bg-[#faf2e4] border-[#e6cf9f] text-[#8c520d]',
    emerald: 'bg-white/80 border-[#82c3aa] text-[#0e4d3b]',
    maroon: 'bg-white/80 border-[#d898a0] text-[#7a1622]',
    gold: 'bg-white/80 border-[#d8b46e] text-[#8c520d]'
  };

  return (
    <div className={`rounded-xl border p-4 transition-all duration-200 ${toneClasses[tone]} ${className}`}>
      <h3 className={`flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] mb-2 ${labelToneClasses[tone]}`}>
        <span
          aria-hidden="true"
          className={`inline-flex h-6 w-6 items-center justify-center rounded-md border ${iconWrapClasses[tone]}`}
        >
          {icon}
        </span>
        <span>{label}</span>
      </h3>
      <p className="text-sm text-[#22170f] leading-relaxed">{text}</p>
    </div>
  );
};

export const HoroscopeDetailPage: React.FC<HoroscopeDetailPageProps> = ({
  periodSlug,
  signId,
  onOpenBooking
}) => {
  const period = SLUG_TO_PERIOD[periodSlug];
  const profile = getZodiacProfile(signId);
  const cal = getIndiaCalendarInfo();
  const todayPanchang = getPanchangSnapshot('new-delhi');
  const sacredMeta = getSignSacredMeta(profile.id);
  const detailedSections = getPeriodDetailedSections(profile, period);
  const focusText = getHoroscopeFocus(profile.id, period);

  const periodSubtitle =
    period === 'Daily'
      ? cal.fullHeading
      : period === 'Weekly'
      ? `Weekly Vedic Outlook · ${cal.formattedDate}`
      : period === 'Monthly'
      ? `Monthly Forecast · ${cal.year}`
      : `Comprehensive Annual Rashifal · ${cal.year}`;

  const lucky =
    period === 'Daily'
      ? {
          number: profile.daily.luckyNumber,
          colour: profile.daily.luckyColour,
          hex: profile.daily.luckyColourHex
        }
      : period === 'Weekly'
      ? {
          number: profile.weekly.luckyNumber,
          colour: profile.weekly.luckyColour,
          hex: profile.weekly.luckyColourHex
        }
      : period === 'Monthly'
      ? {
          number: profile.monthly.luckyNumber,
          colour: profile.monthly.luckyColour,
          hex: profile.monthly.luckyColourHex
        }
      : {
          number: profile.yearly.luckyNumber,
          colour: profile.yearly.luckyColour,
          hex: profile.yearly.luckyColourHex
        };

  const overallHeading =
    period === 'Monthly'
      ? 'Monthly Overview'
      : period === 'Yearly'
      ? 'Year Overview'
      : 'Overall Prediction';

  const overallBody =
    period === 'Daily'
      ? profile.daily.overall
      : period === 'Weekly'
      ? profile.weekly.overall
      : period === 'Monthly'
      ? profile.monthly.overview
      : profile.yearly.overview;

  const breadcrumbs: BreadcrumbItem[] = [
    { label: 'Home', href: '/' },
    { label: 'Horoscope', href: '/horoscope/' },
    { label: period, href: `/horoscope/${periodSlug}/${profile.id}/` },
    { label: profile.name, href: `/horoscope/${periodSlug}/${profile.id}/` }
  ];

  const otherSigns = ZODIAC_HOROSCOPES.filter((item) => item.id !== profile.id);

  return (
    <div className="bg-[#f9f3e7] text-[#2c221a]">
      {/* Celestial Page Header */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#09142b] via-[#13254a] to-[#3f1c16] border-b border-[#d6a956] py-8 sm:py-10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-14 -top-14 text-[#f4ce7c] opacity-30"
        >
          <SacredMandalaAccent className="w-[340px] h-[340px]" />
        </div>
        <div className="relative z-10 max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <Breadcrumbs items={breadcrumbs} variant="dark" />

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <div className="relative shrink-0">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-2 rounded-full border border-dashed border-[#f4ce7c]/55 celestial-wheel-spin"
                />
                <div className="relative h-24 w-24 sm:h-28 sm:w-28 overflow-hidden rounded-2xl border-2 border-[#e6b95f] bg-[#162849] shadow-lg">
                  <img
                    src={getZodiacImagePath(profile.id)}
                    alt={`${profile.name} (${profile.vedicName}) zodiac illustration`}
                    className="h-full w-full object-cover object-top scale-[1.18] origin-top"
                  />
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#fae091]">
                  {profile.vedicName} (Chandra Rashi) · {profile.element} Element · Vedic Moon Sign
                </p>
                <h1 className="mt-1 font-serif-display text-3xl sm:text-4xl lg:text-[2.65rem] font-bold text-[#fffcf4] leading-tight">
                  {profile.name} {period} Horoscope
                </h1>
                <p className="mt-1.5 text-sm text-[#f2e8d5] font-medium tabular-nums">
                  {periodSubtitle} · Ruling Planet: <span className="text-[#fae091] font-semibold">{profile.rulingPlanet}</span>
                </p>
              </div>
            </div>

            {/* Crawlable Period Switcher Links */}
            <nav
              aria-label={`Switch ${profile.name} horoscope period`}
              className="inline-flex self-start md:self-auto flex-wrap items-center gap-1.5 rounded-xl border border-[#cfa053]/65 bg-[#0e1b36]/85 p-1.5"
            >
              {HOROSCOPE_PERIODS.map((p) => {
                const slug = PERIOD_TO_SLUG[p];
                const isActive = slug === periodSlug;
                return (
                  <AppLink
                    key={p}
                    href={`/horoscope/${slug}/${profile.id}/`}
                    aria-current={isActive ? 'page' : undefined}
                    className={`rounded-lg px-3.5 py-2 text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors ${
                      isActive
                        ? 'bg-gradient-to-b from-[#fae091] to-[#cf9129] text-[#450608] shadow-xs'
                        : 'text-[#ede0ca] hover:bg-white/10'
                    }`}
                  >
                    {p}
                  </AppLink>
                );
              })}
            </nav>
          </div>
        </div>
      </section>

      {/* Main Content — Stretched Equal-Height Columns to eliminate vertical dead space */}
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 py-7 sm:py-10 grid grid-cols-1 lg:grid-cols-12 items-stretch gap-6">
        {/* Left Main Column */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          {/* Section 1: Spotlight Header + Structured Life Area Highlights */}
          <section
            aria-labelledby="predictions-overview-heading"
            className="rounded-2xl border border-[#cfa458] bg-[#fffdf9] overflow-hidden shadow-xs"
          >
            {/* Dark Celestial Spotlight Banner */}
            <div className="relative overflow-hidden bg-gradient-to-r from-[#0a152e] via-[#172c57] to-[#4e1219] px-5 sm:px-7 py-5 sm:py-6 border-b border-[#cfa458]">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-12 -top-12 text-[#f4ce7c] opacity-20"
              >
                <SacredMandalaAccent className="w-[260px] h-[260px]" />
              </div>
              <div aria-hidden="true" className="sacred-sheen-glide" />

              <div className="relative z-10 space-y-4">
                <div>
                  <h2 id="predictions-overview-heading" className="font-serif-display text-2xl sm:text-[1.65rem] font-bold text-[#fffcf4]">
                    {profile.name} {period} Horoscope Highlights
                  </h2>
                  <p className="mt-1 text-xs sm:text-sm text-[#e8dcc4]">
                    {profile.planetaryInsight}
                  </p>
                </div>

                {/* Highlighted Overall Prediction Inset */}
                <div className="rounded-xl border border-[#e3b963]/55 bg-[#091225]/70 p-4 sm:p-5">
                  <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#fae091] mb-1.5">
                    <Sparkles className="w-4 h-4" aria-hidden="true" />
                    <span>{overallHeading}</span>
                  </h3>
                  <p className="text-sm sm:text-base font-medium text-[#fffcf4] leading-relaxed">
                    {overallBody}
                  </p>
                </div>
              </div>
            </div>

            {/* Life-Area Grid & Auspicious Cues */}
            <div className="p-5 sm:p-7 space-y-5">
              {period === 'Daily' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <DetailBlock label="Career" text={profile.daily.career} icon={<Briefcase className="w-4 h-4" />} />
                  <DetailBlock label="Love" text={profile.daily.love} icon={<Heart className="w-4 h-4" />} />
                  <DetailBlock label="Finance" text={profile.daily.finance} icon={<Coins className="w-4 h-4" />} />
                  <DetailBlock label="Health" text={profile.daily.health} icon={<Activity className="w-4 h-4" />} />
                  <DetailBlock label="Family" text={profile.daily.family} icon={<Home className="w-4 h-4" />} className="sm:col-span-2" />
                </div>
              )}

              {period === 'Weekly' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <DetailBlock label="Career" text={profile.weekly.career} icon={<Briefcase className="w-4 h-4" />} />
                  <DetailBlock label="Love & Relationships" text={profile.weekly.love} icon={<Heart className="w-4 h-4" />} />
                  <DetailBlock label="Finance" text={profile.weekly.finance} icon={<Coins className="w-4 h-4" />} />
                  <DetailBlock label="Health" text={profile.weekly.health} icon={<Activity className="w-4 h-4" />} />
                  <DetailBlock label="Family" text={profile.weekly.family} icon={<Home className="w-4 h-4" />} className="sm:col-span-2" />
                </div>
              )}

              {period === 'Monthly' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <DetailBlock label="Career & Business" text={profile.monthly.careerBusiness} icon={<Briefcase className="w-4 h-4" />} />
                  <DetailBlock label="Love & Marriage" text={profile.monthly.loveMarriage} icon={<Heart className="w-4 h-4" />} />
                  <DetailBlock label="Money & Finance" text={profile.monthly.moneyFinance} icon={<Coins className="w-4 h-4" />} />
                  <DetailBlock label="Health" text={profile.monthly.health} icon={<Activity className="w-4 h-4" />} />
                  <DetailBlock label="Family & Relationships" text={profile.monthly.familyRelationships} icon={<Users className="w-4 h-4" />} className="sm:col-span-2" />
                  <DetailBlock tone="emerald" label="Important Opportunities" text={profile.monthly.opportunities} icon={<TrendingUp className="w-4 h-4" />} />
                  <DetailBlock tone="maroon" label="Things To Avoid" text={profile.monthly.avoid} icon={<AlertTriangle className="w-4 h-4" />} />
                </div>
              )}

              {period === 'Yearly' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <DetailBlock label="Career & Professional Growth" text={profile.yearly.careerGrowth} icon={<Briefcase className="w-4 h-4" />} />
                  <DetailBlock label="Business" text={profile.yearly.business} icon={<Building2 className="w-4 h-4" />} />
                  <DetailBlock label="Love & Relationships" text={profile.yearly.loveRelationships} icon={<Heart className="w-4 h-4" />} />
                  <DetailBlock label="Marriage" text={profile.yearly.marriage} icon={<Users className="w-4 h-4" />} />
                  <DetailBlock label="Money & Wealth" text={profile.yearly.moneyWealth} icon={<Coins className="w-4 h-4" />} />
                  <DetailBlock label="Health & Wellness" text={profile.yearly.healthWellness} icon={<Activity className="w-4 h-4" />} />
                  <DetailBlock label="Family" text={profile.yearly.family} icon={<Home className="w-4 h-4" />} />
                  <DetailBlock label="Education" text={profile.yearly.education} icon={<BookOpen className="w-4 h-4" />} />
                  <DetailBlock label="Travel" text={profile.yearly.travel} icon={<Plane className="w-4 h-4" />} />
                  <DetailBlock tone="gold" label="Best Months" text={profile.yearly.bestMonths} icon={<CalendarDays className="w-4 h-4" />} />
                  <DetailBlock tone="emerald" label="Important Opportunities" text={profile.yearly.opportunities} icon={<TrendingUp className="w-4 h-4" />} />
                  <DetailBlock tone="maroon" label="Challenging Periods" text={profile.yearly.challengingPeriods} icon={<AlertTriangle className="w-4 h-4" />} />
                </div>
              )}

              {/* Lucky Colour, Lucky Number, Important Focus Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#e2cca4] rounded-xl border border-[#d6b373] bg-gradient-to-r from-[#faf0dc] via-[#fdf7ea] to-[#f8ecd4]">
                <div className="px-4 py-3.5 flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="h-6 w-6 shrink-0 rounded-full border border-black/20 shadow-xs"
                    style={{ backgroundColor: lucky.hex }}
                  />
                  <div>
                    <span className="block text-[11px] font-semibold uppercase tracking-wider text-[#6e5a46]">
                      Lucky Colour
                    </span>
                    <span className="text-sm font-bold text-[#4a1117]">{lucky.colour}</span>
                  </div>
                </div>

                <div className="px-4 py-3.5 flex items-center gap-3">
                  <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#6e121b] text-xs font-bold text-[#fff5dc] tabular-nums shadow-xs">
                    {lucky.number}
                  </span>
                  <div>
                    <span className="block text-[11px] font-semibold uppercase tracking-wider text-[#6e5a46]">
                      Lucky Number
                    </span>
                    <span className="text-sm font-bold text-[#4a1117] tabular-nums">{lucky.number}</span>
                  </div>
                </div>

                <div className="px-4 py-3.5 flex items-center gap-3">
                  <Compass className="w-5 h-5 shrink-0 text-[#9e6b16]" aria-hidden="true" />
                  <div>
                    <span className="block text-[11px] font-semibold uppercase tracking-wider text-[#6e5a46]">
                      Important Focus
                    </span>
                    <span className="text-xs font-bold text-[#4a1117] leading-snug block">
                      {focusText}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Antique Sanctuary Parchment — Cosmic Signature & Chandra Rashi Upaya */}
          <section
            aria-labelledby="cosmic-signature-heading"
            className="flex-1 flex flex-col justify-between rounded-2xl border border-[#cfa458] bg-gradient-to-br from-[#fbf2df] via-[#f8ebd0] to-[#f2dfb9] p-5 sm:p-6 shadow-xs gap-4"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#dfc28b] pb-3">
              <div className="flex items-center gap-2.5">
                <SacredDividerOrnament className="w-5 h-5 text-[#6e121b] shrink-0" />
                <h2
                  id="cosmic-signature-heading"
                  className="font-serif-display text-lg sm:text-xl font-bold text-[#4a1117]"
                >
                  {profile.name} ({profile.vedicName} Rashi) Cosmic Signature &amp; Remedy
                </h2>
              </div>
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#8c520d]">
                Jyotish Upaya
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3">
              <div className="rounded-xl border border-[#e1c693] bg-[#fffdf8]/90 px-3.5 py-3">
                <p className="text-[10.5px] font-bold uppercase tracking-wider text-[#8c520d] flex items-center gap-1.5">
                  <Moon className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Nakshatra Span</span>
                </p>
                <p className="mt-1 text-xs font-semibold text-[#2d1f14] leading-snug">
                  {sacredMeta.nakshatras}
                </p>
              </div>

              <div className="rounded-xl border border-[#e1c693] bg-[#fffdf8]/90 px-3.5 py-3">
                <p className="text-[10.5px] font-bold uppercase tracking-wider text-[#8c520d] flex items-center gap-1.5">
                  <Sun className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Karaka &amp; Tatva</span>
                </p>
                <p className="mt-1 text-xs font-semibold text-[#2d1f14] leading-snug">
                  {sacredMeta.karakaPlanet} · {profile.element} Tatva
                </p>
              </div>

              <div className="rounded-xl border border-[#e1c693] bg-[#fffdf8]/90 px-3.5 py-3">
                <p className="text-[10.5px] font-bold uppercase tracking-wider text-[#8c520d]">
                  Namakshar Sounds
                </p>
                <p className="mt-1 text-xs font-semibold text-[#2d1f14] leading-snug">
                  {profile.moonSyllables}
                </p>
              </div>

              <div className="rounded-xl border border-[#e1c693] bg-[#fffdf8]/90 px-3.5 py-3">
                <p className="text-[10.5px] font-bold uppercase tracking-wider text-[#8c520d]">
                  Wellness Focus
                </p>
                <p className="mt-1 text-xs font-semibold text-[#2d1f14] capitalize leading-snug">
                  {sacredMeta.bodyZone}
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-[#cfa458]/80 bg-[#fffcf6] p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#6e121b] text-[#fae091] mt-0.5"
                >
                  <Flame className="w-4 h-4 diya-flame-breath" />
                </span>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#6e121b]">
                    Chandra Rashi Remedy by Hanish Bagga
                  </p>
                  <p className="mt-0.5 text-xs sm:text-sm font-medium text-[#2c221a] leading-relaxed">
                    {sacredMeta.sacredRemedy}
                  </p>
                </div>
              </div>
              <AppLink
                href="/#moon-sign-calculator"
                className="shrink-0 inline-flex items-center gap-1.5 text-xs font-bold text-[#6e121b] hover:text-[#9e6b16] hover:underline whitespace-nowrap"
              >
                <span>Verify Moon Sign</span>
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </AppLink>
            </div>
          </section>
        </div>

        {/* Right Sidebar: Three Distinct Visual Identities Aligned to Column Height */}
        <aside className="lg:col-span-4 flex flex-col gap-6">
          {/* Card 1: Royal Midnight-Maroon Consultation CTA */}
          <div className="relative overflow-hidden rounded-2xl border border-[#c79948] bg-gradient-to-br from-[#0e1b36] via-[#182e57] to-[#481219] p-5 sm:p-6 text-white shadow-md">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-10 -bottom-10 text-[#f4ce7c] opacity-15"
            >
              <SacredMandalaAccent className="w-44 h-44" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-4">
                <img
                  src={hanishPortrait}
                  alt="Hanish Bagga — Acharya Ganesh"
                  className="h-18 w-18 shrink-0 rounded-full border-2 border-[#e0b458] bg-[#fdfaf4]/10 object-cover object-top"
                />
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#f5d384]">
                    Acharya Ganesh
                  </p>
                  <h2 className="font-serif-display text-xl font-bold text-[#fff8e9]">
                    Consult Hanish Bagga
                  </h2>
                  <p className="text-xs text-[#e6dac4]">Astro Vastu Expert</p>
                </div>
              </div>
              <p className="mt-3.5 text-xs sm:text-sm text-[#e6dac4] leading-relaxed">
                Ready for answers rooted in your exact Lagna, Nakshatra, Dasha, and birth chart? Schedule a private session tailored to {profile.name} and your personal Kundli.
              </p>
              <button
                type="button"
                onClick={onOpenBooking}
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#b57b1d] bg-gradient-to-b from-[#fae091] via-[#e6b34d] to-[#c98b24] hover:brightness-105 px-5 py-2.5 text-sm font-bold text-[#460709] cursor-pointer shadow-xs"
              >
                <span>Book Personal Consultation</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Card 2: Sacred Botanical Emerald Almanac — Today’s Muhurat Snapshot */}
          <div className="rounded-2xl border border-[#82c3aa] bg-gradient-to-br from-[#e7f4ee] via-[#f2faf6] to-[#fbfdfb] p-5 space-y-3 shadow-xs">
            <div className="flex items-center justify-between gap-2">
              <h2 className="font-serif-display text-lg font-bold text-[#0e4d3b]">
                Plan by Today’s Muhurat
              </h2>
              <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#1e6a52] tabular-nums">
                IST Almanac
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              <div className="rounded-xl border border-[#a9d5c4] bg-white/85 px-3 py-2.5">
                <p className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-[#0e4d3b]">
                  <Clock className="w-3 h-3" aria-hidden="true" />
                  <span>Abhijit</span>
                </p>
                <p className="mt-0.5 text-xs font-bold text-[#14352a] tabular-nums">
                  {todayPanchang.abhijitMuhurat}
                </p>
              </div>
              <div className="rounded-xl border border-[#dfafb6] bg-[#fdf5f6] px-3 py-2.5">
                <p className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-[#7a1622]">
                  <ShieldAlert className="w-3 h-3" aria-hidden="true" />
                  <span>Rahu Kaal</span>
                </p>
                <p className="mt-0.5 text-xs font-bold text-[#5a111a] tabular-nums">
                  {todayPanchang.rahuKaal}
                </p>
              </div>
            </div>

            <p className="text-xs text-[#264b3e] leading-relaxed">
              Align {profile.name} choices with today’s {todayPanchang.tithi.split(' (')[0]} Tithi and {todayPanchang.nakshatra.split(' (')[0]} Nakshatra.
            </p>

            <AppLink
              href="/panchang/today/"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#2d8064] bg-[#0e4d3b] hover:bg-[#13634c] px-4 py-2 text-xs font-bold text-[#fffcf4] transition-colors"
            >
              <CalendarDays className="w-4 h-4" aria-hidden="true" />
              <span>View Full Today’s Panchang</span>
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </AppLink>
          </div>

          {/* Card 3: Crisp Ivory Other Signs Directory with Sequential Gradient Glow & Vedic Finder */}
          <div className="flex-1 flex flex-col gap-4 rounded-2xl border border-[#cfa458] bg-[#fffdf9] p-5 shadow-xs">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <h2 className="font-serif-display text-lg font-bold text-[#4a1117]">
                  Other Signs ({period})
                </h2>
                <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#8c520d]">
                  12 Rashis
                </span>
              </div>

              <ul className="grid grid-cols-2 gap-2.5">
                {otherSigns.map((other, idx) => (
                  <li key={other.id}>
                    <AppLink
                      href={getPeriodHref(period, other.id)}
                      style={{ animationDelay: `${(idx * 0.55).toFixed(2)}s` }}
                      className="rashi-seq-card group flex items-center gap-2.5 rounded-xl border border-[#e3cfa8] bg-[#fdf8ee] hover:border-[#b98735] hover:bg-[#f6ead3] px-2.5 py-2.5 transition-all"
                    >
                      <span
                        aria-hidden="true"
                        className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white border border-[#e4cfa6] text-sm text-[#7c2418] shadow-2xs group-hover:border-[#c98b24]"
                      >
                        {other.glyph}
                      </span>
                      <span className="min-w-0">
                        <span
                          style={{ animationDelay: `${(idx * 0.55).toFixed(2)}s` }}
                          className="rashi-seq-name block truncate text-xs font-extrabold tracking-tight"
                        >
                          {other.name}
                        </span>
                        <span className="block truncate text-[10px] font-medium text-[#755f49]">
                          {other.vedicName} · {other.element}
                        </span>
                      </span>
                    </AppLink>
                  </li>
                ))}

                {/* Balanced 12th Cell: Active Rashi Badge */}
                <li>
                  <div className="flex items-center gap-2.5 rounded-xl border border-[#c98b24] bg-gradient-to-r from-[#520f17] to-[#741620] px-2.5 py-2.5 text-[#fffcf4] shadow-xs">
                    <span
                      aria-hidden="true"
                      className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#fae091] text-sm font-bold text-[#4a0d14]"
                    >
                      {profile.glyph}
                    </span>
                    <span className="min-w-0">
                      <span className="block truncate text-xs font-bold text-[#fae091]">
                        {profile.name}
                      </span>
                      <span className="block truncate text-[10px] font-medium text-[#f2dec0]">
                        Viewing Now
                      </span>
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Live Chandra Transit & Yoga Pulse Strip */}
            <div className="rounded-xl border border-[#e3cba0] bg-gradient-to-br from-[#fbf3e1] to-[#f6e6c5] p-3.5 space-y-2">
              <div className="flex items-center justify-between">
                <p className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-[#6e121b]">
                  Today’s Sky Transit
                </p>
                <span className="text-[10px] font-semibold text-[#8c520d]">
                  {todayPanchang.paksha}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="rounded-lg bg-white/85 border border-[#e6d0a4] px-2.5 py-2">
                  <span className="block text-[10px] font-semibold uppercase tracking-wider text-[#73604e]">
                    Chandra Rashi
                  </span>
                  <span className="block truncate text-xs font-bold text-[#4a1117]">
                    {todayPanchang.chandraRashi}
                  </span>
                </div>
                <div className="rounded-lg bg-white/85 border border-[#e6d0a4] px-2.5 py-2">
                  <span className="block text-[10px] font-semibold uppercase tracking-wider text-[#73604e]">
                    Vedic Yoga
                  </span>
                  <span className="block truncate text-xs font-bold text-[#4a1117]">
                    {todayPanchang.yoga} Yoga
                  </span>
                </div>
              </div>
            </div>

            {/* Moon Sign Finder Mini Spotlight */}
            <div className="relative overflow-hidden rounded-xl border border-[#c79948] bg-gradient-to-br from-[#0e1b36] via-[#162950] to-[#451319] p-4 text-[#fffcf4]">
              <div className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#fae091]/15 border border-[#fae091]/40 text-[#fae091]"
                >
                  <Moon className="w-4 h-4" />
                </span>
                <div className="space-y-1.5">
                  <h3 className="font-serif-display text-sm font-bold text-[#fae091]">
                    Unsure of Your Moon Sign?
                  </h3>
                  <p className="text-[11.5px] text-[#e8dcc6] leading-relaxed">
                    All forecasts follow your Vedic Chandra Rashi from birth details—not your solar calendar date.
                  </p>
                  <AppLink
                    href="/#moon-sign-calculator"
                    className="inline-flex items-center gap-1.5 rounded-full border border-[#cfa053] bg-gradient-to-b from-[#fae091] to-[#d99d34] px-3.5 py-1.5 text-[11px] font-bold text-[#450608] hover:brightness-105 transition-all"
                  >
                    <span>Calculate Free Moon Sign</span>
                    <ArrowRight className="w-3 h-3" aria-hidden="true" />
                  </AppLink>
                </div>
              </div>
            </div>

            <div className="mt-auto pt-3 border-t border-[#eadbc4]">
              <AppLink
                href="/horoscope/"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#6e121b] hover:text-[#9e6b16] hover:underline transition-colors"
              >
                <span>Explore All Signs &amp; Periods</span>
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </AppLink>
            </div>
          </div>
        </aside>

        {/* Monthly Horoscope YouTube Video (shown on all 12 monthly horoscope pages) */}
        {period === 'Monthly' && (
          <MonthlyHoroscopeVideoCard signName={profile.name} vedicName={profile.vedicName} />
        )}

        {/* Section 5: Temple Maroon & Ivory Sacred Manuscript Reader */}
        <section
          aria-labelledby="detailed-prediction-heading"
          className="lg:col-span-12 rounded-2xl border border-[#cfa458] bg-[#fffdf9] overflow-hidden shadow-xs"
        >
          <div className="relative overflow-hidden bg-gradient-to-r from-[#4a0d14] via-[#6e121b] to-[#3c080d] px-5 sm:px-7 py-5 border-b border-[#cfa458]">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <SacredDividerOrnament className="w-6 h-6 text-[#fae091] shrink-0" />
                <h2
                  id="detailed-prediction-heading"
                  className="font-serif-display text-2xl sm:text-[1.75rem] font-bold text-[#fffcf4]"
                >
                  Detailed {profile.name} {period} Horoscope &amp; Vedic Guidance
                </h2>
              </div>
              <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#fae091]">
                {profile.vedicName} · Chandra Rashi Manuscript
              </span>
            </div>
          </div>

          <div className="divide-y divide-[#eadbc4] px-5 sm:px-7">
            {detailedSections.map((section, idx) => (
              <div key={idx} className="py-5 sm:py-6 space-y-2.5">
                <div className="flex items-baseline gap-3">
                  <span
                    aria-hidden="true"
                    className="font-serif-display text-base sm:text-lg font-bold text-[#b57b1d] tabular-nums shrink-0"
                  >
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <h2 className="font-serif-display text-lg sm:text-xl font-bold text-[#4a1117]">
                    {section.heading}
                  </h2>
                </div>
                <p className="text-[15px] sm:text-base text-[#261b12] leading-[1.75]">
                  {section.paragraph}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
