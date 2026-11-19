import React, { useEffect, useState } from 'react';
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  Compass,
  Download,
  Flame,
  MapPin,
  Sparkles,
  Sun,
  X,
  XCircle,
  ZoomIn
} from 'lucide-react';
import hanishPortrait from '../../assets/images/regenerated_image_1787726256429.png';
import { ZODIAC_HOROSCOPES, getPeriodHref } from '../../data/horoscopeData';
import { PANCHANG_LOCATIONS, getPanchangSnapshot } from '../../data/panchangData';
import { BreadcrumbItem } from '../../data/seoRoutes';
import { AppLink } from '../AppLink';
import { Breadcrumbs } from '../Breadcrumbs';
import { SacredMandalaAccent } from '../SacredMandalaAccent';
import { SolarLunarArcDial } from '../SolarLunarArcDial';

interface PanchangPageProps {
  mode: 'hub' | 'today';
  onOpenBooking: () => void;
}

export const PanchangPage: React.FC<PanchangPageProps> = ({ mode, onOpenBooking }) => {
  const [selectedLocationId, setSelectedLocationId] = useState<string>('new-delhi');
  const [isPatrikaZoomed, setIsPatrikaZoomed] = useState(false);

  useEffect(() => {
    if (!isPatrikaZoomed) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsPatrikaZoomed(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPatrikaZoomed]);

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
      <section className="relative overflow-hidden bg-gradient-to-r from-[#09142b] via-[#13254a] to-[#3f1c16] border-b border-[#d6a956] py-8 sm:py-10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-14 -top-14 text-[#f4ce7c] opacity-30"
        >
          <SacredMandalaAccent className="w-[340px] h-[340px]" />
        </div>
        <svg
          aria-hidden="true"
          viewBox="0 0 1200 260"
          preserveAspectRatio="xMidYMid slice"
          className="pointer-events-none absolute inset-0 h-full w-full opacity-55"
          fill="none"
        >
          <path d="M80 220 Q 600 -20 1120 200" stroke="#f2c872" strokeOpacity="0.28" strokeWidth="1" strokeDasharray="4 6" />
          <circle cx="440" cy="46" r="1.6" fill="#fde9b5" className="qna-star-twinkle" />
          <circle cx="780" cy="42" r="1.8" fill="#fde9b5" className="qna-star-twinkle" />
        </svg>

        <div className="relative z-10 max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <Breadcrumbs items={breadcrumbs} variant="dark" />

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-3xl">
              <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#fae091] mb-2">
                <CalendarDays className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{panchang.vikramSamvat} · {panchang.hinduMonth}, {panchang.paksha}</span>
              </p>

              <h1 className="font-serif-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#fffcf4] leading-tight">
                {mode === 'today'
                  ? `Today’s Panchang – ${panchang.dateFormatted}`
                  : 'Vedic Panchang & Today’s Muhurat Guide'}
              </h1>

              <p className="mt-2.5 text-sm sm:text-base text-[#f2e8d5] leading-relaxed">
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
            className="lg:col-span-7 rounded-2xl border border-[#cfa458] bg-[#fffdf9] p-5 sm:p-6 shadow-[0_14px_34px_-16px_rgba(92,58,20,0.16)] space-y-5"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3.5 border-b border-[#e5d5bc]">
              <div>
                <h2 id="five-limbs-heading" className="font-serif-display text-2xl font-bold text-[#4a0d14]">
                  Core Five Limbs (Panchanga)
                </h2>
                <p className="text-xs text-[#544333] mt-0.5">
                  Timings calibrated for <strong className="text-[#4a0d14]">{currentLocation.name}</strong> ({panchang.fullDateHeading})
                </p>
              </div>
              <span className="text-xs font-bold text-[#143068]">
                {panchang.shakaSamvat}
              </span>
            </div>

            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-sm">
              <div className="rounded-xl border border-[#e0cfa9] bg-white hover:border-[#b98735] hover:-translate-y-0.5 p-3.5 transition-all duration-200">
                <dt className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#4a0d14] mb-1.5">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-[#f7ebd4] text-[#8c520d]">
                    <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                  </span>
                  <span>तिथि · Tithi</span>
                </dt>
                <dd className="font-bold text-[#1f160e]">{panchang.tithi}</dd>
                <dd className="text-xs text-[#544333] mt-1">{panchang.tithiDetails}</dd>
              </div>

              <div className="rounded-xl border border-[#e0cfa9] bg-white hover:border-[#b98735] hover:-translate-y-0.5 p-3.5 transition-all duration-200">
                <dt className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#4a0d14] mb-1.5">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-[#f7ebd4] text-[#8c520d]">
                    <Sun className="w-3.5 h-3.5" aria-hidden="true" />
                  </span>
                  <span>नक्षत्र · Nakshatra</span>
                </dt>
                <dd className="font-bold text-[#1f160e]">{panchang.nakshatra}</dd>
                <dd className="text-xs text-[#544333] mt-1">{panchang.nakshatraDetails}</dd>
              </div>

              <div className="rounded-xl border border-[#e0cfa9] bg-white hover:border-[#b98735] hover:-translate-y-0.5 p-3.5 transition-all duration-200">
                <dt className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#4a0d14] mb-1.5">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-[#f7ebd4] text-[#8c520d]">
                    <Flame className="w-3.5 h-3.5" aria-hidden="true" />
                  </span>
                  <span>योग · Yoga</span>
                </dt>
                <dd className="font-bold text-[#1f160e]">{panchang.yoga}</dd>
                <dd className="text-xs text-[#544333] mt-1">{panchang.yogaDetails}</dd>
              </div>

              <div className="rounded-xl border border-[#e0cfa9] bg-white hover:border-[#b98735] hover:-translate-y-0.5 p-3.5 transition-all duration-200">
                <dt className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#4a0d14] mb-1.5">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-[#f7ebd4] text-[#8c520d]">
                    <Compass className="w-3.5 h-3.5" aria-hidden="true" />
                  </span>
                  <span>करण · Karana</span>
                </dt>
                <dd className="font-bold text-[#1f160e]">{panchang.karana}</dd>
                <dd className="text-xs text-[#544333] mt-1">{panchang.karanaDetails}</dd>
              </div>
            </dl>

            {/* Animated Surya–Chandra Sky-Dome Horizon Transit Dial */}
            <SolarLunarArcDial
              sunrise={panchang.sunrise}
              sunset={panchang.sunset}
              moonrise={panchang.moonrise}
              moonset={panchang.moonset}
              suryaRashi={panchang.suryaRashi}
              chandraRashi={panchang.chandraRashi}
            />

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs pt-1">
              <div className="rounded-xl border border-[#e0cfa9] bg-white px-3.5 py-2.5">
                <span className="text-[#544333] block">Hindu Month &amp; Paksha</span>
                <span className="font-bold text-[#3a0c10]">
                  {panchang.hinduMonth} · {panchang.paksha}
                </span>
              </div>
              <div className="rounded-xl border border-[#e0cfa9] bg-white px-3.5 py-2.5">
                <span className="text-[#544333] block">Surya Rashi (Sun Sign)</span>
                <span className="font-bold text-[#3a0c10]">{panchang.suryaRashi}</span>
              </div>
              <div className="rounded-xl border border-[#e0cfa9] bg-white px-3.5 py-2.5">
                <span className="text-[#544333] block">Chandra Rashi (Moon Sign)</span>
                <span className="font-bold text-[#3a0c10]">{panchang.chandraRashi}</span>
              </div>
            </div>
          </section>

          {/* Auspicious vs Inauspicious Timings */}
          <section aria-labelledby="muhurat-timings-heading" className="lg:col-span-5 flex flex-col gap-5">
            <h2 id="muhurat-timings-heading" className="sr-only">
              Auspicious and Inauspicious Timings
            </h2>

            {/* Auspicious Panel */}
            <div className="rounded-2xl border border-[#82c3aa] bg-[#e9f5ef] p-5 shadow-xs space-y-3">
              <div className="flex items-center justify-between gap-2 pb-2.5 border-b border-[#add8c5]">
                <h3 className="flex items-center gap-2 font-serif-display text-xl font-bold text-[#083d2c]">
                  <CheckCircle2 className="w-5 h-5 text-[#0b4b38]" aria-hidden="true" />
                  <span>Auspicious Timings (Shubh)</span>
                </h3>
                <span className="text-[11px] font-bold text-[#0e523d]">Favourable</span>
              </div>

              <dl className="divide-y divide-[#b8ded0] text-sm">
                <div className="py-2 flex items-center justify-between gap-3">
                  <dt className="font-semibold text-[#11362a]">Abhijit Muhurat</dt>
                  <dd className="font-bold text-[#063325] tabular-nums">{panchang.abhijitMuhurat}</dd>
                </div>
                <div className="py-2 flex items-center justify-between gap-3">
                  <dt className="font-semibold text-[#11362a]">Brahma Muhurat</dt>
                  <dd className="font-bold text-[#063325] tabular-nums">{panchang.brahmaMuhurat}</dd>
                </div>
                <div className="py-2 flex items-center justify-between gap-3">
                  <dt className="font-semibold text-[#11362a]">Amrit Kaal</dt>
                  <dd className="font-bold text-[#063325] tabular-nums">{panchang.amritKaal}</dd>
                </div>
                <div className="py-2 flex items-center justify-between gap-3">
                  <dt className="font-semibold text-[#11362a]">Vijaya Muhurat</dt>
                  <dd className="font-bold text-[#063325] tabular-nums">{panchang.vijayaMuhurat}</dd>
                </div>
                <div className="py-2 flex items-center justify-between gap-3">
                  <dt className="font-semibold text-[#11362a]">Godhuli Muhurat</dt>
                  <dd className="font-bold text-[#063325] tabular-nums">{panchang.godhuliMuhurat}</dd>
                </div>
              </dl>
            </div>

            {/* Inauspicious Panel */}
            <div className="rounded-2xl border border-[#d898a0] bg-[#faecee] p-5 shadow-xs space-y-3">
              <div className="flex items-center justify-between gap-2 pb-2.5 border-b border-[#e5bcc1]">
                <h3 className="flex items-center gap-2 font-serif-display text-xl font-bold text-[#520b12]">
                  <XCircle className="w-5 h-5 text-[#7c121c]" aria-hidden="true" />
                  <span>Inauspicious Timings (Ashubh)</span>
                </h3>
                <span className="text-[11px] font-bold text-[#7c1d26]">Pause New Starts</span>
              </div>

              <dl className="divide-y divide-[#e8c6ca] text-sm">
                <div className="py-2 flex items-center justify-between gap-3">
                  <dt className="font-semibold text-[#420c11]">Rahu Kaal</dt>
                  <dd className="font-bold text-[#520b12] tabular-nums">{panchang.rahuKaal}</dd>
                </div>
                <div className="py-2 flex items-center justify-between gap-3">
                  <dt className="font-semibold text-[#420c11]">Yamaganda</dt>
                  <dd className="font-bold text-[#520b12] tabular-nums">{panchang.yamaganda}</dd>
                </div>
                <div className="py-2 flex items-center justify-between gap-3">
                  <dt className="font-semibold text-[#420c11]">Gulika Kaal</dt>
                  <dd className="font-bold text-[#520b12] tabular-nums">{panchang.gulikaKaal}</dd>
                </div>
              </dl>

              <p className="text-xs text-[#4d1218] pt-1">
                <span className="font-bold">Disha Shool:</span> {panchang.dishaShool}
              </p>
            </div>
          </section>
        </div>

        {/* Daily Hindi Patrika Showcase (आज का पंचांग Image Poster) */}
        <section
          aria-labelledby="daily-patrika-heading"
          className="relative overflow-hidden rounded-2xl border border-[#cfa458] bg-gradient-to-br from-[#fffdf8] via-[#f9efdc] to-[#f1e0c1] p-5 sm:p-7 shadow-[0_14px_34px_-16px_rgba(92,58,20,0.18)]"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -bottom-16 text-[#9e6b16] opacity-[0.12]"
          >
            <SacredMandalaAccent className="w-72 h-72" />
          </div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            {/* Framed Patrika Visual */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <button
                type="button"
                onClick={() => setIsPatrikaZoomed(true)}
                aria-label="Enlarge Acharya Ganesh Aaj Ka Panchang image"
                className="group relative w-full max-w-[330px] overflow-hidden rounded-2xl border-2 border-[#c79948] bg-[#fdfaf3] p-2 shadow-[0_16px_36px_-14px_rgba(74,17,23,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_42px_-14px_rgba(74,17,23,0.38)] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6e121b]"
              >
                <div className="relative overflow-hidden rounded-xl border border-[#e3cfa9] bg-[#f4e7cf]">
                  <img
                    src="/assets/aistudio/18_nov.jpg_797e2c23.jpeg"
                    alt="Acharya Ganesh Aaj Ka Panchang — 18 November 2026 Hindi Patrika with Tithi, Nakshatra, Rahu Kaal and Vikram Samvat 2083 details"
                    loading="lazy"
                    className="w-full h-auto max-h-[500px] object-contain mx-auto transition-transform duration-300 group-hover:scale-[1.015]"
                  />
                  <span className="pointer-events-none absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full border border-[#cfa053] bg-[#0e1b36]/85 px-3 py-1.5 text-[11px] font-semibold text-[#fae091] shadow-sm backdrop-blur-xs">
                    <ZoomIn className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>View Full Patrika</span>
                  </span>
                </div>
              </button>
            </div>

            {/* Editorial Companion Details */}
            <div className="lg:col-span-7 space-y-5">
              <div className="space-y-2 border-b border-[#e2cfa9] pb-4">
                <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#9e6b16]">
                  <BookOpen className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Acharya Ganesh · Daily Hindi Edition</span>
                </p>
                <h2
                  id="daily-patrika-heading"
                  className="font-serif-display text-2xl sm:text-3xl font-bold text-[#6e121b] leading-tight [text-wrap:balance]"
                >
                  आज का पंचांग — Official Daily Patrika Card
                </h2>
                <p className="text-sm text-[#4a392a] leading-relaxed">
                  Save or share today’s traditional Devanagari Panchang patrika curated by <strong className="text-[#4a1117]">Acharya Ganesh</strong>. Designed for quick morning reference before puja, sankalpa, travel, and family scheduling.
                </p>
              </div>

              {/* Clean Bilingual Quick-Reference Breakdown */}
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 divide-y divide-[#e6d5b7] text-xs sm:text-[13px] border-b border-[#e6d5b7]">
                <div className="py-2.5 flex items-center justify-between gap-3">
                  <dt className="font-semibold text-[#645342]">दिनांक · वार</dt>
                  <dd className="font-bold text-[#4a1117] text-right">18 नवम्बर 2026 · बुधवार</dd>
                </div>
                <div className="py-2.5 flex items-center justify-between gap-3">
                  <dt className="font-semibold text-[#645342]">पक्ष · तिथि</dt>
                  <dd className="font-bold text-[#4a1117] text-right">शुक्ल पक्ष · नवमी</dd>
                </div>
                <div className="py-2.5 flex items-center justify-between gap-3">
                  <dt className="font-semibold text-[#645342]">नक्षत्र · योग</dt>
                  <dd className="font-bold text-[#4a1117] text-right">शतभिषा · ध्रुव</dd>
                </div>
                <div className="py-2.5 flex items-center justify-between gap-3">
                  <dt className="font-semibold text-[#645342]">चंद्र राशि · मास</dt>
                  <dd className="font-bold text-[#4a1117] text-right">कुम्भ · कार्तिक</dd>
                </div>
                <div className="py-2.5 flex items-center justify-between gap-3">
                  <dt className="font-semibold text-[#645342]">सूर्योदय / सूर्यास्त</dt>
                  <dd className="font-bold text-[#4a1117] tabular-nums text-right">06:46 AM / 05:26 PM</dd>
                </div>
                <div className="py-2.5 flex items-center justify-between gap-3">
                  <dt className="font-semibold text-[#645342]">चन्द्रोदय · दिशा शूल</dt>
                  <dd className="font-bold text-[#4a1117] tabular-nums text-right">12:21 PM · उत्तर</dd>
                </div>
                <div className="py-2.5 flex items-center justify-between gap-3">
                  <dt className="font-semibold text-[#8c1d24]">राहु काल</dt>
                  <dd className="font-bold text-[#6e121b] tabular-nums text-right">12:06 PM – 01:26 PM</dd>
                </div>
                <div className="py-2.5 flex items-center justify-between gap-3">
                  <dt className="font-semibold text-[#645342]">अभिजित · सम्वत</dt>
                  <dd className="font-bold text-[#4a1117] text-right">कोई नहीं · 2083 रौद्र</dd>
                </div>
              </dl>

              <p className="text-xs text-[#645342] leading-relaxed">
                <strong className="text-[#4a1117]">Note on Abhijit Muhurat:</strong> In classical Panchang tradition, Abhijit Muhurat is omitted (<span className="font-semibold">कोई नहीं</span>) on Wednesdays when Rahu Kaal falls directly across midday (12:06 – 01:26 PM), keeping major new commencements aligned with morning or late-afternoon Shubh Choghadiya.
              </p>

              {/* Interactive Zoom & Save Actions */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <button
                  type="button"
                  onClick={() => setIsPatrikaZoomed(true)}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#b57b1d] bg-gradient-to-b from-[#fae091] via-[#e6b34d] to-[#c98b24] hover:brightness-105 px-5 py-2.5 text-xs sm:text-sm font-bold text-[#460709] shadow-sm transition-all cursor-pointer whitespace-nowrap"
                >
                  <ZoomIn className="w-4 h-4" aria-hidden="true" />
                  <span>Open Full-Size Patrika</span>
                </button>

                <a
                  href="/assets/aistudio/18_nov.jpg_797e2c23.jpeg"
                  download="acharya-ganesh-aaj-ka-panchang.jpg"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#cfa053] bg-[#fffdf8] hover:bg-[#f6ead3] px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#6e121b] transition-colors whitespace-nowrap"
                >
                  <Download className="w-4 h-4" aria-hidden="true" />
                  <span>Save Patrika Image</span>
                </a>
              </div>
            </div>
          </div>
        </section>

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

      {/* Full-Size Patrika Lightbox Modal */}
      {isPatrikaZoomed && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Acharya Ganesh Aaj Ka Panchang Full View"
          onClick={() => setIsPatrikaZoomed(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#091224]/85 p-4 sm:p-6 backdrop-blur-xs"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex max-h-[92vh] w-full max-w-lg flex-col overflow-hidden rounded-2xl border-2 border-[#d4a24c] bg-[#fdfaf3] shadow-2xl"
          >
            <div className="flex items-center justify-between gap-3 border-b border-[#e5d5bc] bg-[#0e1b36] px-4 py-3 text-[#fff8e9]">
              <div>
                <p className="text-xs font-bold text-[#f5d384]">आज का पंचांग · Acharya Ganesh</p>
                <p className="text-[11px] text-[#e6dac4]">18 नवम्बर 2026 · विक्रम सम्वत 2083</p>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="/assets/aistudio/18_nov.jpg_797e2c23.jpeg"
                  download="acharya-ganesh-aaj-ka-panchang.jpg"
                  className="inline-flex items-center gap-1.5 rounded-full border border-[#cfa053] bg-[#fff8e9]/10 hover:bg-[#fff8e9]/20 px-3 py-1 text-xs font-semibold text-[#fae091]"
                >
                  <Download className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Save</span>
                </a>
                <button
                  type="button"
                  onClick={() => setIsPatrikaZoomed(false)}
                  aria-label="Close full-size Patrika"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#cfa053]/60 text-[#fff8e9] hover:bg-white/15 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="overflow-y-auto bg-[#efe2ca] p-3 sm:p-4">
              <img
                src="/assets/aistudio/18_nov.jpg_797e2c23.jpeg"
                alt="Acharya Ganesh Aaj Ka Panchang Full View"
                className="mx-auto w-full h-auto rounded-xl border border-[#c79948]"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
