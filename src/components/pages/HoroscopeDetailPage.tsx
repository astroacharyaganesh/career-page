import React from 'react';
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
import { getPeriodDetailedSections } from '../../data/horoscopeNarratives';
import { getIndiaCalendarInfo } from '../../data/panchangData';
import { BreadcrumbItem } from '../../data/seoRoutes';
import { AppLink } from '../AppLink';
import { Breadcrumbs } from '../Breadcrumbs';
import { MonthlyHoroscopeVideoCard } from '../MonthlyHoroscopeVideoCard';

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
    neutral: 'bg-[#fffdf9] border-[#e3d2b8]',
    emerald: 'bg-[#edf7f2] border-[#a9d1c0]',
    maroon: 'bg-[#faeff0] border-[#dfb5ba]',
    gold: 'bg-[#fbf2df] border-[#dfc185]'
  };

  return (
    <div className={`rounded-xl border p-4 ${toneClasses[tone]} ${className}`}>
      <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[#6e121b] mb-1.5">
        <span aria-hidden="true" className="text-[#9e6b16]">
          {icon}
        </span>
        <span>{label}</span>
      </h3>
      <p className="text-sm text-[#2e231a] leading-relaxed">{text}</p>
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
      <section className="relative overflow-hidden bg-gradient-to-r from-[#0e1b36] via-[#172c54] to-[#3f2913] border-b border-[#c79948]/60 py-8 sm:py-10">
        <div className="relative z-10 max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <Breadcrumbs items={breadcrumbs} variant="dark" />

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <div className="relative h-24 w-24 sm:h-28 sm:w-28 shrink-0 overflow-hidden rounded-2xl border-2 border-[#e0b458] bg-[#162849] shadow-lg">
                <img
                  src={getZodiacImagePath(profile.id)}
                  alt={`${profile.name} (${profile.vedicName}) zodiac illustration`}
                  className="h-full w-full object-cover object-top scale-[1.18] origin-top"
                />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#f5d384]">
                  {profile.vedicName} (Chandra Rashi) · {profile.element} Element · Vedic Moon Sign
                </p>
                <h1 className="mt-1 font-serif-display text-3xl sm:text-4xl lg:text-[2.65rem] font-bold text-[#fff8e9] leading-tight">
                  {profile.name} {period} Horoscope
                </h1>
                <p className="mt-1.5 text-sm text-[#e6dac4] font-medium tabular-nums">
                  {periodSubtitle} · Ruling Planet: <span className="text-[#f8dc95]">{profile.rulingPlanet}</span>
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

      {/* Main Content */}
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 grid grid-cols-1 lg:grid-cols-12 items-start gap-8">
        <div className="lg:col-span-8">
          {/* Overall + Structured Life Area Predictions */}
          <section aria-labelledby="predictions-overview-heading" className="rounded-2xl border border-[#d6b989] bg-[#fdfaf4] p-5 sm:p-7 shadow-xs space-y-5">
            <div>
              <h2 id="predictions-overview-heading" className="font-serif-display text-2xl font-bold text-[#4a1117]">
                {profile.name} {period} Horoscope Highlights
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-[#645342]">
                {profile.planetaryInsight}
              </p>
            </div>

            {/* Overall Prediction Card */}
            <div className="rounded-xl border border-[#a9d1c0] bg-[#edf7f2] p-4 sm:p-5">
              <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#0e4d3b] mb-1.5">
                <Sparkles className="w-4 h-4" aria-hidden="true" />
                <span>
                  {period === 'Monthly'
                    ? 'Monthly Overview'
                    : period === 'Yearly'
                    ? 'Year Overview'
                    : 'Overall Prediction'}
                </span>
              </h3>
              <p className="text-sm sm:text-base font-medium text-[#16362b] leading-relaxed">
                {period === 'Daily' && profile.daily.overall}
                {period === 'Weekly' && profile.weekly.overall}
                {period === 'Monthly' && profile.monthly.overview}
                {period === 'Yearly' && profile.yearly.overview}
              </p>
            </div>

            {/* Period-Specific Grid */}
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
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#e5d5bc] rounded-xl border border-[#e0c79c] bg-[#f7efe0] mt-2">
              <div className="px-4 py-3 flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="h-5 w-5 shrink-0 rounded-full border border-black/20"
                  style={{ backgroundColor: lucky.hex }}
                />
                <div>
                  <span className="block text-[11px] font-semibold uppercase tracking-wider text-[#73604e]">
                    Lucky Colour
                  </span>
                  <span className="text-sm font-bold text-[#4a1117]">{lucky.colour}</span>
                </div>
              </div>

              <div className="px-4 py-3 flex items-center gap-3">
                <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#6e121b] text-xs font-bold text-[#fff5dc] tabular-nums">
                  {lucky.number}
                </span>
                <div>
                  <span className="block text-[11px] font-semibold uppercase tracking-wider text-[#73604e]">
                    Lucky Number
                  </span>
                  <span className="text-sm font-bold text-[#4a1117] tabular-nums">{lucky.number}</span>
                </div>
              </div>

              <div className="px-4 py-3 flex items-center gap-3">
                <Compass className="w-5 h-5 shrink-0 text-[#9e6b16]" aria-hidden="true" />
                <div>
                  <span className="block text-[11px] font-semibold uppercase tracking-wider text-[#73604e]">
                    Important Focus
                  </span>
                  <span className="text-xs font-bold text-[#4a1117] leading-snug block">
                    {focusText}
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Right Sidebar: Consultation CTA + Related Signs + Panchang */}
        <aside className="lg:col-span-4 space-y-6">
          {/* Consultation CTA with Hanish Bagga */}
          <div className="rounded-2xl border border-[#c79948] bg-gradient-to-br from-[#0e1b36] via-[#182e57] to-[#481219] p-6 text-white shadow-md">
            <div className="flex items-center gap-4">
              <img
                src={hanishPortrait}
                alt="Hanish Bagga — Acharya Ganesh"
                className="h-20 w-20 shrink-0 rounded-full border border-[#e0b458] bg-[#fdfaf4]/10 object-cover object-top"
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
            <p className="mt-4 text-xs sm:text-sm text-[#e6dac4] leading-relaxed">
              Ready for answers rooted in your exact Lagna, Nakshatra, Dasha, and birth chart? Schedule a private session tailored to {profile.name} and your personal Kundli.
            </p>
            <button
              type="button"
              onClick={onOpenBooking}
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#b57b1d] bg-gradient-to-b from-[#fae091] via-[#e6b34d] to-[#c98b24] hover:brightness-105 px-5 py-2.5 text-sm font-bold text-[#460709] cursor-pointer"
            >
              <span>Book Personal Consultation</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>

          {/* Panchang Cross-Link */}
          <div className="rounded-2xl border border-[#d6b989] bg-[#fdfaf4] p-5 space-y-3">
            <h2 className="font-serif-display text-lg font-bold text-[#4a1117]">
              Plan by Today’s Muhurat
            </h2>
            <p className="text-xs text-[#5d4d3e] leading-relaxed">
              Combine your {profile.name} guidance with today’s Rahu Kaal, Abhijit Muhurat, Tithi, and Nakshatra timings.
            </p>
            <AppLink
              href="/panchang/today/"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#cfa053] bg-[#f7ebd4] hover:bg-[#efdcba] px-4 py-2 text-xs font-bold text-[#6e121b] transition-colors"
            >
              <CalendarDays className="w-4 h-4" aria-hidden="true" />
              <span>View Today’s Panchang</span>
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </AppLink>
          </div>

          {/* Other Signs Links (Crawlable Internal Mesh) */}
          <div className="rounded-2xl border border-[#d6b989] bg-[#fdfaf4] p-5">
            <h2 className="font-serif-display text-lg font-bold text-[#4a1117] mb-3">
              Other Signs ({period})
            </h2>
            <ul className="grid grid-cols-2 gap-2">
              {otherSigns.map((other) => (
                <li key={other.id}>
                  <AppLink
                    href={getPeriodHref(period, other.id)}
                    className="flex items-center gap-2 rounded-lg border border-[#e3d2b8] bg-[#fffaf1] hover:border-[#b98735] hover:bg-[#f6ead3] px-3 py-2 text-xs font-semibold text-[#3a2a1d] transition-colors"
                  >
                    <span aria-hidden="true" className="text-sm text-[#7c2418]">
                      {other.glyph}
                    </span>
                    <span className="truncate">{other.name}</span>
                  </AppLink>
                </li>
              ))}
            </ul>
            <div className="mt-3 pt-3 border-t border-[#eadbc4]">
              <AppLink
                href="/horoscope/"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#6e121b] hover:underline"
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

        {/* Full-Width Bottom Narrative Section */}
        <section
          aria-labelledby="detailed-prediction-heading"
          className="lg:col-span-12 rounded-2xl border border-[#d6b989] bg-[#fdfaf4] p-5 sm:p-7 shadow-xs space-y-6"
        >
          <h2 id="detailed-prediction-heading" className="font-serif-display text-2xl sm:text-[1.75rem] font-bold text-[#4a1117] border-b border-[#e5d5bc] pb-3">
            Detailed {profile.name} {period} Horoscope &amp; Vedic Guidance
          </h2>

          <div className="space-y-6">
            {detailedSections.map((section, idx) => (
              <div key={idx} className="space-y-2">
                <h2 className="font-serif-display text-lg sm:text-xl font-bold text-[#6e121b]">
                  {section.heading}
                </h2>
                <p className="text-sm sm:text-[15px] text-[#31261d] leading-relaxed">
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
