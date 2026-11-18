import React, { useState } from 'react';
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Compass,
  Flame,
  MapPin,
  Moon,
  Sparkles,
  Sun,
  Sunrise,
  Sunset,
  XCircle
} from 'lucide-react';
import hanishPortrait from '../../assets/images/regenerated_image_1787726256429.png';
import { ZODIAC_HOROSCOPES, getPeriodHref } from '../../data/horoscopeData';
import { PANCHANG_LOCATIONS, getPanchangSnapshot } from '../../data/panchangData';
import { BreadcrumbItem } from '../../data/seoRoutes';
import { AppLink } from '../AppLink';
import { Breadcrumbs } from '../Breadcrumbs';

interface PanchangPageProps {
  mode: 'hub' | 'today';
  onOpenBooking: () => void;
}

export const PanchangPage: React.FC<PanchangPageProps> = ({ mode, onOpenBooking }) => {
  const [selectedLocationId, setSelectedLocationId] = useState<string>('new-delhi');
  const panchang = getPanchangSnapshot(selectedLocationId);
  const currentLocation =
    PANCHANG_LOCATIONS.find((loc) => loc.id === selectedLocationId) || PANCHANG_LOCATIONS[0];

  const breadcrumbs: BreadcrumbItem[] =
    mode === 'today'
      ? [
          { label: 'Home', href: '/' },
          { label: 'Panchang', href: '/panchang/' },
          { label: 'Today', href: '/panchang/today/' }
        ]
      : [
          { label: 'Home', href: '/' },
          { label: 'Panchang', href: '/panchang/' }
        ];

  return (
    <div className="bg-[#f9f3e7] text-[#2c221a]">
      {/* Celestial Royal Header Banner */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#0e1b36] via-[#172c54] to-[#3f2913] border-b border-[#c79948]/60 py-8 sm:py-10">
        <svg
          aria-hidden="true"
          viewBox="0 0 1200 260"
          preserveAspectRatio="xMidYMid slice"
          className="pointer-events-none absolute inset-0 h-full w-full opacity-45"
          fill="none"
        >
          <circle cx="960" cy="130" r="120" stroke="#f0c874" strokeOpacity="0.35" strokeWidth="1" strokeDasharray="3 5" />
          <circle cx="960" cy="130" r="175" stroke="#f0c874" strokeOpacity="0.2" strokeWidth="0.8" />
          <path d="M80 220 Q 600 -20 1120 200" stroke="#f0c874" strokeOpacity="0.22" strokeWidth="1" strokeDasharray="4 6" />
        </svg>

        <div className="relative z-10 max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <Breadcrumbs items={breadcrumbs} variant="dark" />

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-3xl">
              <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#f5d384] mb-2">
                <CalendarDays className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{panchang.vikramSamvat} · {panchang.hinduMonth}, {panchang.paksha}</span>
              </p>

              <h1 className="font-serif-display text-3xl sm:text-4xl lg:text-[2.7rem] font-bold text-[#fff8e9] leading-tight">
                {mode === 'today'
                  ? `Today’s Panchang – ${panchang.dateFormatted}`
                  : 'Vedic Panchang & Today’s Muhurat Guide'}
              </h1>

              <p className="mt-2.5 text-sm sm:text-base text-[#e6dac4] leading-relaxed">
                {panchang.fullDateHeading} · Accurate Tithi, Nakshatra, Yoga, Karana, Sunrise, Sunset, Auspicious Muhurat &amp; Rahu Kaal curated by Acharya Ganesh.
              </p>
            </div>

            {/* Interactive Location Selector */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 self-start lg:self-auto">
              <label className="flex items-center gap-2.5 rounded-xl border border-[#cfa053]/75 bg-[#0e1b36]/85 px-3.5 py-2 text-xs text-[#fff8e9]">
                <MapPin className="w-4 h-4 text-[#f5d384] shrink-0" aria-hidden="true" />
                <span className="font-semibold text-[#f5d384] whitespace-nowrap">City:</span>
                <select
                  aria-label="Select City for Panchang Timings"
                  value={selectedLocationId}
                  onChange={(e) => setSelectedLocationId(e.target.value)}
                  className="bg-transparent font-semibold text-[#fff8e9] focus:outline-none cursor-pointer pr-2"
                >
                  {PANCHANG_LOCATIONS.map((loc) => (
                    <option key={loc.id} value={loc.id} className="bg-[#0e1b36] text-[#fff8e9]">
                      {loc.name}, {loc.state}
                    </option>
                  ))}
                </select>
              </label>

              {mode === 'hub' && (
                <AppLink
                  href="/panchang/today/"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#b57b1d] bg-gradient-to-b from-[#fae091] via-[#e6b34d] to-[#c98b24] px-4 py-2.5 text-xs font-bold text-[#460709] whitespace-nowrap"
                >
                  <span>Dedicated Today View</span>
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </AppLink>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Panchang Body */}
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
        {/* Core Panchang Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Five Limbs + Hindu Calendar Metadata */}
          <section
            aria-labelledby="five-limbs-heading"
            className="lg:col-span-7 rounded-2xl border border-[#d6b989] bg-[#fdfaf4] p-5 sm:p-6 shadow-xs space-y-5"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3.5 border-b border-[#e5d5bc]">
              <div>
                <h2 id="five-limbs-heading" className="font-serif-display text-2xl font-bold text-[#6e121b]">
                  Core Five Limbs (Panchanga)
                </h2>
                <p className="text-xs text-[#645342] mt-0.5">
                  Timings calibrated for <strong className="text-[#4a1117]">{currentLocation.name}</strong> ({panchang.fullDateHeading})
                </p>
              </div>
              <span className="text-xs font-bold text-[#1b3a75]">
                {panchang.shakaSamvat}
              </span>
            </div>

            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-sm">
              <div className="rounded-xl border border-[#e3d2b8] bg-[#fffdf8] p-3.5">
                <dt className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#6e121b] mb-1">
                  <Sparkles className="w-3.5 h-3.5 text-[#9e6b16]" aria-hidden="true" />
                  <span>Tithi</span>
                </dt>
                <dd className="font-bold text-[#2c221a]">{panchang.tithi}</dd>
                <dd className="text-xs text-[#645342] mt-1">{panchang.tithiDetails}</dd>
              </div>

              <div className="rounded-xl border border-[#e3d2b8] bg-[#fffdf8] p-3.5">
                <dt className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#6e121b] mb-1">
                  <Sun className="w-3.5 h-3.5 text-[#9e6b16]" aria-hidden="true" />
                  <span>Nakshatra</span>
                </dt>
                <dd className="font-bold text-[#2c221a]">{panchang.nakshatra}</dd>
                <dd className="text-xs text-[#645342] mt-1">{panchang.nakshatraDetails}</dd>
              </div>

              <div className="rounded-xl border border-[#e3d2b8] bg-[#fffdf8] p-3.5">
                <dt className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#6e121b] mb-1">
                  <Flame className="w-3.5 h-3.5 text-[#9e6b16]" aria-hidden="true" />
                  <span>Yoga</span>
                </dt>
                <dd className="font-bold text-[#2c221a]">{panchang.yoga}</dd>
                <dd className="text-xs text-[#645342] mt-1">{panchang.yogaDetails}</dd>
              </div>

              <div className="rounded-xl border border-[#e3d2b8] bg-[#fffdf8] p-3.5">
                <dt className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#6e121b] mb-1">
                  <Compass className="w-3.5 h-3.5 text-[#9e6b16]" aria-hidden="true" />
                  <span>Karana</span>
                </dt>
                <dd className="font-bold text-[#2c221a]">{panchang.karana}</dd>
                <dd className="text-xs text-[#645342] mt-1">{panchang.karanaDetails}</dd>
              </div>
            </dl>

            {/* Paksha, Hindu Month, Rashi & Sun/Moon Timings */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
              <div className="rounded-xl border border-[#e3d2b8] bg-[#fffaf1] p-3">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#645342]">
                  <Sunrise className="w-3.5 h-3.5 text-[#b5651d]" aria-hidden="true" />
                  <span>Sunrise</span>
                </div>
                <p className="mt-1 text-sm font-bold text-[#4a1117] tabular-nums">{panchang.sunrise}</p>
              </div>

              <div className="rounded-xl border border-[#e3d2b8] bg-[#fffaf1] p-3">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#645342]">
                  <Sunset className="w-3.5 h-3.5 text-[#9e6b16]" aria-hidden="true" />
                  <span>Sunset</span>
                </div>
                <p className="mt-1 text-sm font-bold text-[#4a1117] tabular-nums">{panchang.sunset}</p>
              </div>

              <div className="rounded-xl border border-[#e3d2b8] bg-[#fffaf1] p-3">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#645342]">
                  <Moon className="w-3.5 h-3.5 text-[#1b3a75]" aria-hidden="true" />
                  <span>Moonrise</span>
                </div>
                <p className="mt-1 text-sm font-bold text-[#4a1117] tabular-nums">{panchang.moonrise}</p>
              </div>

              <div className="rounded-xl border border-[#e3d2b8] bg-[#fffaf1] p-3">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#645342]">
                  <Moon className="w-3.5 h-3.5 text-[#5b4d6d]" aria-hidden="true" />
                  <span>Moonset</span>
                </div>
                <p className="mt-1 text-sm font-bold text-[#4a1117] tabular-nums">{panchang.moonset}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs pt-1">
              <div className="rounded-xl border border-[#e3d2b8] bg-[#fffdf8] px-3.5 py-2.5">
                <span className="text-[#645342] block">Hindu Month &amp; Paksha</span>
                <span className="font-bold text-[#4a1117]">
                  {panchang.hinduMonth} · {panchang.paksha}
                </span>
              </div>
              <div className="rounded-xl border border-[#e3d2b8] bg-[#fffdf8] px-3.5 py-2.5">
                <span className="text-[#645342] block">Surya Rashi (Sun Sign)</span>
                <span className="font-bold text-[#4a1117]">{panchang.suryaRashi}</span>
              </div>
              <div className="rounded-xl border border-[#e3d2b8] bg-[#fffdf8] px-3.5 py-2.5">
                <span className="text-[#645342] block">Chandra Rashi (Moon Sign)</span>
                <span className="font-bold text-[#4a1117]">{panchang.chandraRashi}</span>
              </div>
            </div>
          </section>

          {/* Auspicious vs Inauspicious Timings */}
          <section aria-labelledby="muhurat-timings-heading" className="lg:col-span-5 flex flex-col gap-5">
            <h2 id="muhurat-timings-heading" className="sr-only">
              Auspicious and Inauspicious Timings
            </h2>

            {/* Auspicious Panel */}
            <div className="rounded-2xl border border-[#9ac7b5] bg-[#eef7f2] p-5 shadow-xs space-y-3">
              <div className="flex items-center justify-between gap-2 pb-2.5 border-b border-[#b9ddd0]">
                <h3 className="flex items-center gap-2 font-serif-display text-xl font-bold text-[#0e4d3b]">
                  <CheckCircle2 className="w-5 h-5 text-[#0e5942]" aria-hidden="true" />
                  <span>Auspicious Timings (Shubh)</span>
                </h3>
                <span className="text-[11px] font-semibold text-[#185c45]">Favourable</span>
              </div>

              <dl className="divide-y divide-[#c6e2d7] text-sm">
                <div className="py-2 flex items-center justify-between gap-3">
                  <dt className="font-semibold text-[#163d30]">Abhijit Muhurat</dt>
                  <dd className="font-bold text-[#0c3f30] tabular-nums">{panchang.abhijitMuhurat}</dd>
                </div>
                <div className="py-2 flex items-center justify-between gap-3">
                  <dt className="font-semibold text-[#163d30]">Brahma Muhurat</dt>
                  <dd className="font-bold text-[#0c3f30] tabular-nums">{panchang.brahmaMuhurat}</dd>
                </div>
                <div className="py-2 flex items-center justify-between gap-3">
                  <dt className="font-semibold text-[#163d30]">Amrit Kaal</dt>
                  <dd className="font-bold text-[#0c3f30] tabular-nums">{panchang.amritKaal}</dd>
                </div>
                <div className="py-2 flex items-center justify-between gap-3">
                  <dt className="font-semibold text-[#163d30]">Vijaya Muhurat</dt>
                  <dd className="font-bold text-[#0c3f30] tabular-nums">{panchang.vijayaMuhurat}</dd>
                </div>
                <div className="py-2 flex items-center justify-between gap-3">
                  <dt className="font-semibold text-[#163d30]">Godhuli Muhurat</dt>
                  <dd className="font-bold text-[#0c3f30] tabular-nums">{panchang.godhuliMuhurat}</dd>
                </div>
              </dl>
            </div>

            {/* Inauspicious Panel */}
            <div className="rounded-2xl border border-[#dfb5ba] bg-[#faeff0] p-5 shadow-xs space-y-3">
              <div className="flex items-center justify-between gap-2 pb-2.5 border-b border-[#e9c8cc]">
                <h3 className="flex items-center gap-2 font-serif-display text-xl font-bold text-[#6e121b]">
                  <XCircle className="w-5 h-5 text-[#8c1d24]" aria-hidden="true" />
                  <span>Inauspicious Timings (Ashubh)</span>
                </h3>
                <span className="text-[11px] font-semibold text-[#8c3d44]">Pause New Starts</span>
              </div>

              <dl className="divide-y divide-[#ecd0d4] text-sm">
                <div className="py-2 flex items-center justify-between gap-3">
                  <dt className="font-semibold text-[#4d1419]">Rahu Kaal</dt>
                  <dd className="font-bold text-[#6e121b] tabular-nums">{panchang.rahuKaal}</dd>
                </div>
                <div className="py-2 flex items-center justify-between gap-3">
                  <dt className="font-semibold text-[#4d1419]">Yamaganda</dt>
                  <dd className="font-bold text-[#6e121b] tabular-nums">{panchang.yamaganda}</dd>
                </div>
                <div className="py-2 flex items-center justify-between gap-3">
                  <dt className="font-semibold text-[#4d1419]">Gulika Kaal</dt>
                  <dd className="font-bold text-[#6e121b] tabular-nums">{panchang.gulikaKaal}</dd>
                </div>
              </dl>

              <p className="text-xs text-[#612127] pt-1">
                <span className="font-bold">Disha Shool:</span> {panchang.dishaShool}
              </p>
            </div>
          </section>
        </div>

        {/* Important Daily Notes + Detailed Panchang Significance */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <section
            aria-labelledby="daily-notes-heading"
            className="lg:col-span-5 rounded-2xl border border-[#d6b989] bg-[#fdfaf4] p-5 sm:p-6 shadow-xs space-y-4"
          >
            <h2 id="daily-notes-heading" className="font-serif-display text-2xl font-bold text-[#4a1117]">
              Important Daily Notes
            </h2>
            <div className="space-y-3">
              {panchang.importantDailyNotes.map((note) => (
                <div key={note.title} className="rounded-xl border border-[#e3d2b8] bg-[#fffdf8] p-3.5">
                  <h3 className="text-xs font-bold uppercase tracking-[0.11em] text-[#6e121b]">
                    {note.title}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-[#31261d] leading-relaxed">{note.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section
            aria-labelledby="panchang-significance-heading"
            className="lg:col-span-7 rounded-2xl border border-[#d6b989] bg-[#fdfaf4] p-5 sm:p-6 shadow-xs space-y-4"
          >
            <h2 id="panchang-significance-heading" className="font-serif-display text-2xl font-bold text-[#4a1117]">
              Detailed Panchang &amp; Vedic Significance
            </h2>
            <div className="space-y-3.5 text-sm sm:text-[15px] text-[#31261d] leading-relaxed">
              {panchang.detailedSignificance.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            <div className="pt-4 border-t border-[#e5d5bc] flex flex-col sm:flex-row items-center gap-4">
              <img
                src={hanishPortrait}
                alt="Hanish Bagga — Muhurat & Kundli Specialist"
                className="h-16 w-16 shrink-0 rounded-full border border-[#cfa053] bg-[#0e1b36] object-cover object-top"
              />
              <div className="flex-1 text-center sm:text-left">
                <p className="text-xs font-bold uppercase tracking-wider text-[#6e121b]">
                  Need a Custom Subh Muhurat?
                </p>
                <p className="text-xs text-[#5d4d3e] mt-0.5">
                  Consult Hanish Bagga for marriage, griha pravesh, business launch, or property registration Muhurat matched to your Janma Kundli.
                </p>
              </div>
              <button
                type="button"
                onClick={onOpenBooking}
                className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[#b57b1d] bg-gradient-to-b from-[#fae091] via-[#e6b34d] to-[#c98b24] px-5 py-2.5 text-xs font-bold text-[#460709] cursor-pointer hover:brightness-105 whitespace-nowrap"
              >
                <span>Consult Hanish Bagga</span>
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </button>
            </div>
          </section>
        </div>

        {/* Crawlable 12-Sign Daily Horoscope Strip */}
        <section aria-labelledby="panchang-signs-bridge" className="rounded-2xl border border-[#d6b989] bg-[#fdfaf4] p-5 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
            <h2 id="panchang-signs-bridge" className="font-serif-display text-2xl font-bold text-[#4a1117]">
              Read Today’s Horoscope for Your Rashi
            </h2>
            <AppLink
              href="/horoscope/"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#6e121b] hover:underline"
            >
              <span>All Horoscope Periods</span>
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </AppLink>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5">
            {ZODIAC_HOROSCOPES.map((sign) => (
              <AppLink
                key={sign.id}
                href={getPeriodHref('Daily', sign.id)}
                className="group flex items-center gap-2.5 rounded-xl border border-[#e3d2b8] bg-[#fffaf1] hover:border-[#b98735] hover:bg-[#f6ead3] px-3 py-2.5 transition-colors"
              >
                <span aria-hidden="true" className="text-lg text-[#7c2418] group-hover:scale-110 transition-transform">
                  {sign.glyph}
                </span>
                <div className="min-w-0">
                  <span className="block text-xs font-bold text-[#36281e] truncate">{sign.name}</span>
                  <span className="block text-[10px] text-[#736252] truncate">{sign.vedicName}</span>
                </div>
              </AppLink>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
