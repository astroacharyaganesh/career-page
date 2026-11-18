import React, { useState } from 'react';
import { ArrowRight, CalendarDays, Compass, Sparkles } from 'lucide-react';
import hanishPortrait from '../../assets/images/regenerated_image_1787726256429.png';
import {
  HOROSCOPE_PERIODS,
  HoroscopePeriod,
  PERIOD_TO_SLUG,
  ZODIAC_HOROSCOPES,
  getPeriodHref,
  getZodiacImagePath
} from '../../data/horoscopeData';
import { getIndiaCalendarInfo, getPanchangSnapshot } from '../../data/panchangData';
import { BreadcrumbItem } from '../../data/seoRoutes';
import { AppLink } from '../AppLink';
import { Breadcrumbs } from '../Breadcrumbs';
import { MoonSignCalculator } from '../MoonSignCalculator';
import { HoroscopeVideoForecasts } from '../HoroscopeVideoForecasts';

interface HoroscopeHubPageProps {
  onOpenBooking: () => void;
}

export const HoroscopeHubPage: React.FC<HoroscopeHubPageProps> = ({ onOpenBooking }) => {
  const [selectedPeriod, setSelectedPeriod] = useState<HoroscopePeriod>('Daily');
  const cal = getIndiaCalendarInfo();
  const panchang = getPanchangSnapshot('new-delhi');

  const breadcrumbs: BreadcrumbItem[] = [
    { label: 'Home', href: '/' },
    { label: 'Horoscope', href: '/horoscope/' }
  ];

  return (
    <div className="bg-[#f9f3e7] text-[#2c221a]">
      {/* Celestial Royal Header */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#0a152c] via-[#14274c] to-[#3b2511] border-b border-[#c79948]/70 py-8 sm:py-11">
        <svg
          aria-hidden="true"
          viewBox="0 0 1200 280"
          preserveAspectRatio="xMidYMid slice"
          className="pointer-events-none absolute inset-0 h-full w-full opacity-45"
          fill="none"
        >
          <circle cx="960" cy="140" r="135" stroke="#f0c874" strokeOpacity="0.32" strokeWidth="1" strokeDasharray="3 5" />
          <circle cx="960" cy="140" r="190" stroke="#f0c874" strokeOpacity="0.2" strokeWidth="0.8" />
          <path d="M120 240 Q 600 -20 1120 220" stroke="#f0c874" strokeOpacity="0.22" strokeWidth="1" strokeDasharray="4 6" />
        </svg>

        <div className="relative z-10 max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <Breadcrumbs items={breadcrumbs} variant="dark" />

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="max-w-3xl">
              <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#f5d384] mb-2">
                <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Vedic Moon Sign (Chandra Rashi) · {cal.fullHeading}</span>
              </p>
              <h1 className="font-serif-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#fff8e9] leading-[1.14] [text-wrap:balance]">
                Daily, Weekly, Monthly &amp; Yearly Horoscope for All 12 Signs
              </h1>
              <p className="mt-3 text-sm sm:text-base text-[#e6dac4] leading-relaxed max-w-2xl">
                Explore authentic Chandra Rashi guidance across career, love, finance, family and health, shaped by Vedic Jyotish principles at Acharya Ganesh under the guidance of Hanish Bagga.
              </p>
            </div>

            {/* Period Preview Selector */}
            <div
              role="tablist"
              aria-label="Preview Horoscope Period"
              className="inline-flex self-start items-center gap-1 rounded-xl border border-[#cfa053]/65 bg-[#0e1b36]/80 p-1.5 backdrop-blur-xs"
            >
              {HOROSCOPE_PERIODS.map((period) => {
                const active = selectedPeriod === period;
                return (
                  <button
                    key={period}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setSelectedPeriod(period)}
                    className={`rounded-lg px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                      active
                        ? 'bg-gradient-to-b from-[#fae091] to-[#cf9129] text-[#450608] shadow-sm'
                        : 'text-[#ede0ca] hover:bg-white/10'
                    }`}
                  >
                    {period}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
        {/* Moon Sign Calculator */}
        <MoonSignCalculator activePeriod={selectedPeriod} onOpenBooking={onOpenBooking} />

        {/* 12 Zodiac Sign Directory */}
        <section aria-labelledby="all-signs-heading">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
            <div>
              <h2
                id="all-signs-heading"
                className="font-serif-display text-2xl sm:text-3xl font-bold text-[#4a1117]"
              >
                Choose Your Zodiac Sign ({selectedPeriod} Predictions)
              </h2>
              <p className="mt-1 text-sm text-[#635343]">
                Select your Vedic Moon Sign (Rashi) below to read its complete {selectedPeriod.toLowerCase()} forecast, or switch straight to weekly, monthly and yearly guides.
              </p>
            </div>
            <AppLink
              href="/panchang/today/"
              className="inline-flex items-center gap-2 self-start rounded-full border border-[#cfa053] bg-[#fdfaf3] hover:bg-[#f6ead3] px-4 py-2 text-xs font-bold text-[#6e121b] transition-colors whitespace-nowrap"
            >
              <CalendarDays className="w-3.5 h-3.5 text-[#9e6b16]" aria-hidden="true" />
              <span>Today’s Panchang ({cal.formattedDate})</span>
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </AppLink>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {ZODIAC_HOROSCOPES.map((sign) => {
              const mainHref = getPeriodHref(selectedPeriod, sign.id);

              return (
                <article
                  key={sign.id}
                  className="group flex flex-col justify-between rounded-2xl border border-[#d6b989] bg-[#fdfaf4] p-5 shadow-xs hover:border-[#b98735] hover:shadow-md transition-all"
                >
                  <div className="flex items-start gap-3.5 pb-3.5 border-b border-[#eadbc4]">
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl border border-[#c79948] bg-[#162849]">
                      <img
                        src={getZodiacImagePath(sign.id)}
                        alt={`${sign.name} (${sign.vedicName}) zodiac illustration`}
                        loading="lazy"
                        className="h-full w-full object-cover object-top scale-[1.18] origin-top"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="font-serif-display text-xl font-bold text-[#6e121b]">
                          <AppLink href={mainHref} className="hover:underline underline-offset-4">
                            {sign.name}
                          </AppLink>
                        </h3>
                        <span aria-hidden="true" className="text-xl text-[#9e6b16] font-semibold">
                          {sign.glyph}
                        </span>
                      </div>
                      <p className="text-xs font-medium text-[#1b3a75]">
                        {sign.vedicName} (Chandra Rashi) · {sign.element} Element
                      </p>
                      <p className="text-[11px] text-[#746352] mt-0.5">
                        Planet: {sign.rulingPlanet}
                      </p>
                    </div>
                  </div>

                  {/* Crawlable Period Links for Every Sign */}
                  <div className="pt-3.5 space-y-3">
                    <div className="flex flex-wrap items-center gap-1.5">
                      {HOROSCOPE_PERIODS.map((p) => {
                        const pSlug = PERIOD_TO_SLUG[p];
                        const isMatched = p === selectedPeriod;
                        return (
                          <AppLink
                            key={p}
                            href={`/horoscope/${pSlug}/${sign.id}/`}
                            className={`rounded-md px-2.5 py-1 text-[11px] font-semibold border transition-colors whitespace-nowrap ${
                              isMatched
                                ? 'bg-[#6e121b] text-[#fff6e3] border-[#6e121b]'
                                : 'bg-[#f6ede0] text-[#4a392a] border-[#dfd0b8] hover:border-[#b98735] hover:text-[#6e121b]'
                            }`}
                          >
                            {p}
                          </AppLink>
                        );
                      })}
                    </div>

                    <AppLink
                      href={mainHref}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#6e121b] hover:text-[#9e6b16] transition-colors"
                    >
                      <span>Read {sign.name} {selectedPeriod} Horoscope</span>
                      <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </AppLink>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Auto-Updated Monthly & Yearly Horoscope YouTube Videos */}
        <HoroscopeVideoForecasts />

        {/* Cross-Link Panchang Snapshot Banner + Expert Consultation */}
        <section aria-labelledby="hub-panchang-bridge" className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-6 rounded-2xl border border-[#d6b989] bg-[#fdfaf4] p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#9e6b16] mb-2">
                <CalendarDays className="w-4 h-4" aria-hidden="true" />
                <span>Today’s Vedic Almanac</span>
              </div>
              <h2 id="hub-panchang-bridge" className="font-serif-display text-2xl font-bold text-[#4a1117]">
                Pair Your Rashi with Today’s Panchang
              </h2>
              <p className="mt-2 text-sm text-[#5d4d3e] leading-relaxed">
                For {panchang.fullDateHeading} in New Delhi, {panchang.tithi} and {panchang.nakshatra} prevail under {panchang.hinduMonth} ({panchang.paksha}). Plan important actions around Abhijit Muhurat ({panchang.abhijitMuhurat}) and pause fresh undertakings during Rahu Kaal ({panchang.rahuKaal}).
              </p>
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <AppLink
                href="/panchang/today/"
                className="inline-flex items-center gap-2 rounded-full border border-[#b57b1d] bg-gradient-to-b from-[#fae091] via-[#e6b34d] to-[#c98b24] px-5 py-2.5 text-xs sm:text-sm font-bold text-[#460709]"
              >
                <span>View Detailed Today’s Panchang</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </AppLink>
              <AppLink
                href="/panchang/"
                className="inline-flex items-center gap-2 rounded-full border border-[#cfa053] bg-[#fffaf1] px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#6e121b] hover:bg-[#f6ead3]"
              >
                <Compass className="w-4 h-4" aria-hidden="true" />
                <span>Panchang Guide</span>
              </AppLink>
            </div>
          </div>

          <div className="lg:col-span-6 rounded-2xl border border-[#c79948] bg-gradient-to-r from-[#0e1b36] via-[#1b3159] to-[#461119] p-6 text-white flex flex-col sm:flex-row items-center gap-5">
            <img
              src={hanishPortrait}
              alt="Hanish Bagga — Founder, Acharya Ganesh"
              className="h-32 w-auto shrink-0 object-contain object-bottom rounded-xl bg-white/5 px-2 pt-2"
            />
            <div className="text-center sm:text-left">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#f5d384]">
                Personalised Kundli Reading
              </p>
              <h3 className="mt-1 font-serif-display text-2xl font-bold text-[#fff8e9]">
                Consult Hanish Bagga One-on-One
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#e6dac4] leading-relaxed">
                Chandra Rashi (Moon Sign) horoscopes reflect transits from your Natal Moon; your full Janma Kundli, Navamsha, and Dasha reveal exact timing for career shifts, marriage, finance, and Astro Vastu remedies.
              </p>
              <button
                type="button"
                onClick={onOpenBooking}
                className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#b57b1d] bg-gradient-to-b from-[#fae091] via-[#e6b34d] to-[#c98b24] px-5 py-2.5 text-xs sm:text-sm font-bold text-[#460709] cursor-pointer hover:brightness-105"
              >
                <span>Book A Consultation</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
