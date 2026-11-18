import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  ArrowRight,
  Calendar,
  Check,
  Clock,
  Compass,
  MapPin,
  Moon,
  RotateCcw,
  Search,
  Sparkles,
  X
} from 'lucide-react';
import { HoroscopePeriod, getPeriodHref, getZodiacImagePath, getZodiacProfile, ZodiacId } from '../data/horoscopeData';
import {
  BIRTH_CITY_PRESETS,
  BirthCityPreset,
  MoonSignCalculationResult,
  NAMAKSHAR_LOOKUP,
  calculateMoonSign
} from '../data/moonSignCalculator';
import { AppLink } from './AppLink';

interface MoonSignCalculatorProps {
  activePeriod?: HoroscopePeriod;
  selectedSignId?: ZodiacId;
  onApplySign?: (signId: ZodiacId) => void;
  onOpenBooking?: () => void;
  compactHeader?: boolean;
}

type CalculatorTab = 'birth' | 'name';

export const MoonSignCalculator: React.FC<MoonSignCalculatorProps> = ({
  activePeriod: rawActivePeriod,
  selectedSignId,
  onApplySign,
  onOpenBooking,
  compactHeader = false
}) => {
  const activePeriod: HoroscopePeriod = rawActivePeriod ?? 'Daily';
  const [tab, setTab] = useState<CalculatorTab>('birth');
  const [birthDate, setBirthDate] = useState('');
  const [birthTime, setBirthTime] = useState('09:30');
  const [timeUnknown, setTimeUnknown] = useState(false);
  const [cityId, setCityId] = useState('delhi');
  const [citySearchQuery, setCitySearchQuery] = useState(BIRTH_CITY_PRESETS[0].label);
  const [hasTypedCityQuery, setHasTypedCityQuery] = useState(false);
  const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);
  const [highlightedCityIndex, setHighlightedCityIndex] = useState(0);
  const [errorMsg, setErrorMsg] = useState('');
  const [result, setResult] = useState<MoonSignCalculationResult | null>(null);
  const [selectedNameRashiId, setSelectedNameRashiId] = useState<ZodiacId | null>(null);

  const cityDropdownRef = useRef<HTMLDivElement | null>(null);
  const cityInputRef = useRef<HTMLInputElement | null>(null);

  const selectedCity =
    BIRTH_CITY_PRESETS.find((c) => c.id === cityId) || BIRTH_CITY_PRESETS[0];

  const filteredCities = useMemo(() => {
    const q = citySearchQuery.trim().toLowerCase();
    if (!hasTypedCityQuery || !q) {
      return BIRTH_CITY_PRESETS;
    }
    return BIRTH_CITY_PRESETS.filter((city) => {
      const haystack = `${city.label} ${city.keywords || ''} ${city.timezoneLabel}`.toLowerCase();
      return haystack.includes(q);
    });
  }, [citySearchQuery, hasTypedCityQuery]);

  useEffect(() => {
    if (!isCityDropdownOpen) return;
    const handleOutsideClick = (e: MouseEvent) => {
      if (cityDropdownRef.current && !cityDropdownRef.current.contains(e.target as Node)) {
        setIsCityDropdownOpen(false);
        setHasTypedCityQuery(false);
        setCitySearchQuery(selectedCity.label);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [isCityDropdownOpen, selectedCity.label]);

  const handleSelectCity = (city: BirthCityPreset) => {
    setCityId(city.id);
    setCitySearchQuery(city.label);
    setHasTypedCityQuery(false);
    setIsCityDropdownOpen(false);
    setHighlightedCityIndex(0);
  };

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!birthDate) {
      setErrorMsg('Please select your date of birth to calculate your Vedic Moon Sign.');
      return;
    }

    const computed = calculateMoonSign({
      birthDate,
      birthTime: timeUnknown ? '12:00' : birthTime,
      utcOffsetMinutes: selectedCity.utcOffsetMinutes
    });

    if (!computed) {
      setErrorMsg('Please enter a valid birth date between 1900 and 2100.');
      return;
    }

    setErrorMsg('');
    setResult(computed);
    setSelectedNameRashiId(null);
    if (onApplySign) {
      onApplySign(computed.profile.id);
    }
  };

  const handleReset = () => {
    setBirthDate('');
    setBirthTime('09:30');
    setTimeUnknown(false);
    setCityId('delhi');
    setCitySearchQuery(BIRTH_CITY_PRESETS[0].label);
    setHasTypedCityQuery(false);
    setIsCityDropdownOpen(false);
    setErrorMsg('');
    setResult(null);
    setSelectedNameRashiId(null);
  };

  const handlePickNamakshar = (rashiId: ZodiacId) => {
    setSelectedNameRashiId(rashiId);
    setResult(null);
    setErrorMsg('');
    if (onApplySign) {
      onApplySign(rashiId);
    }
  };

  const activeNameProfile = selectedNameRashiId ? getZodiacProfile(selectedNameRashiId) : null;

  return (
    <div
      id="moon-sign-calculator"
      className="relative rounded-2xl border border-[#cfa458] bg-gradient-to-br from-[#fffdf8] via-[#faf2e2] to-[#f2e4ca] shadow-[0_14px_36px_-18px_rgba(92,58,20,0.22)]"
    >
      {/* Subtle Top Ornamental Hairline */}
      <div
        aria-hidden="true"
        className="h-[3px] w-full rounded-t-2xl bg-gradient-to-r from-[#0e1b36] via-[#d4a24c] to-[#6e121b]"
      />

      <div className={compactHeader ? 'p-4 sm:p-5' : 'p-4 sm:p-6'}>
        {/* Calculator Header + Mode Switcher */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3.5 pb-4 border-b border-[#e5d4b7]">
          <div className="flex items-start sm:items-center gap-3">
            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#cfa053] bg-gradient-to-br from-[#0e1b36] to-[#1d3461] text-[#f9dc92] shadow-xs">
              <Moon className="w-5 h-5" aria-hidden="true" />
            </span>
            <div>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
                <h3 className="font-serif-display text-lg sm:text-xl font-bold text-[#6e121b] leading-tight">
                  Moon Sign (Rashi) Calculator
                </h3>
                <span className="text-xs font-medium text-[#7c654d]">
                  · Lahiri Sidereal (Vedic System)
                </span>
              </div>
              <p className="text-xs sm:text-[13px] text-[#5c4a38] mt-0.5">
                Vedic horoscopes follow your <strong className="font-semibold text-[#460709]">Chandra Rashi (Moon Sign)</strong>. Enter your birth details or name sound to find yours instantly.
              </p>
            </div>
          </div>

          {/* Segmented Mode Switch */}
          <div
            role="tablist"
            aria-label="Moon Sign Lookup Method"
            className="inline-flex self-start md:self-auto items-center gap-1 rounded-xl border border-[#d9c198] bg-[#efe1c9] p-1 shrink-0"
          >
            <button
              type="button"
              role="tab"
              aria-selected={tab === 'birth'}
              onClick={() => setTab('birth')}
              className={`rounded-lg px-3 py-1.5 text-xs font-semibold whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                tab === 'birth'
                  ? 'bg-gradient-to-b from-[#0e1b36] to-[#1a305b] text-[#fff6e3] shadow-xs'
                  : 'text-[#5a4734] hover:text-[#2c1f14]'
              }`}
            >
              By Birth Details
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={tab === 'name'}
              onClick={() => setTab('name')}
              className={`rounded-lg px-3 py-1.5 text-xs font-semibold whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                tab === 'name'
                  ? 'bg-gradient-to-b from-[#0e1b36] to-[#1a305b] text-[#fff6e3] shadow-xs'
                  : 'text-[#5a4734] hover:text-[#2c1f14]'
              }`}
            >
              By Name Sound (Namakshar)
            </button>
          </div>
        </div>

        {/* Tab 1: Birth Date / Time / Place Form */}
        {tab === 'birth' ? (
          <form onSubmit={handleCalculate} className="mt-4 space-y-4" noValidate>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1.15fr_auto] gap-3 items-end">
              {/* Date of Birth */}
              <div>
                <label
                  htmlFor="rashi-dob"
                  className="flex items-center gap-1.5 text-xs font-semibold text-[#4a3929] mb-1.5"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#9e6b16]" aria-hidden="true" />
                  <span>Date of Birth</span>
                </label>
                <input
                  id="rashi-dob"
                  type="date"
                  min="1900-01-01"
                  max="2100-12-31"
                  value={birthDate}
                  onChange={(e) => {
                    setBirthDate(e.target.value);
                    if (errorMsg) setErrorMsg('');
                  }}
                  className="w-full h-11 rounded-xl border border-[#d6bd93] bg-[#fffdf8] px-3 text-sm font-medium text-[#2c221a] focus:border-[#6e121b] focus:outline-none focus:ring-2 focus:ring-[#c79948]/40 tabular-nums"
                />
              </div>

              {/* Time of Birth */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <label
                    htmlFor="rashi-tob"
                    className="flex items-center gap-1.5 text-xs font-semibold text-[#4a3929]"
                  >
                    <Clock className="w-3.5 h-3.5 text-[#9e6b16]" aria-hidden="true" />
                    <span>Birth Time</span>
                  </label>
                  <label className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[#6e5a46] cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={timeUnknown}
                      onChange={(e) => setTimeUnknown(e.target.checked)}
                      className="rounded border-[#cfa053] text-[#6e121b] focus:ring-[#c79948]"
                    />
                    <span>Unsure (use 12:00 PM)</span>
                  </label>
                </div>
                <input
                  id="rashi-tob"
                  type="time"
                  value={timeUnknown ? '12:00' : birthTime}
                  disabled={timeUnknown}
                  onChange={(e) => setBirthTime(e.target.value)}
                  className="w-full h-11 rounded-xl border border-[#d6bd93] bg-[#fffdf8] disabled:bg-[#f2eadb] disabled:text-[#8b7966] px-3 text-sm font-medium text-[#2c221a] focus:border-[#6e121b] focus:outline-none focus:ring-2 focus:ring-[#c79948]/40 tabular-nums"
                />
              </div>

              {/* Searchable Birth City / Region Combobox */}
              <div ref={cityDropdownRef} className="relative">
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <label
                    htmlFor="rashi-city-search"
                    className="flex items-center gap-1.5 text-xs font-semibold text-[#4a3929]"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[#9e6b16]" aria-hidden="true" />
                    <span>Birth City / Region</span>
                  </label>
                  <span className="text-[11px] font-semibold text-[#1b3a75] tabular-nums">
                    {selectedCity.timezoneLabel}
                  </span>
                </div>

                <div className="relative flex items-center">
                  <Search
                    className="pointer-events-none absolute left-3 w-4 h-4 text-[#9e6b16]"
                    aria-hidden="true"
                  />
                  <input
                    ref={cityInputRef}
                    id="rashi-city-search"
                    type="text"
                    role="combobox"
                    aria-expanded={isCityDropdownOpen}
                    aria-controls="rashi-city-listbox"
                    aria-autocomplete="list"
                    autoComplete="off"
                    placeholder="Type city, state, or country..."
                    value={citySearchQuery}
                    onFocus={(e) => {
                      setIsCityDropdownOpen(true);
                      e.currentTarget.select();
                    }}
                    onChange={(e) => {
                      setCitySearchQuery(e.target.value);
                      setHasTypedCityQuery(true);
                      setIsCityDropdownOpen(true);
                      setHighlightedCityIndex(0);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'ArrowDown') {
                        e.preventDefault();
                        setIsCityDropdownOpen(true);
                        setHighlightedCityIndex((prev) =>
                          filteredCities.length === 0 ? 0 : Math.min(prev + 1, filteredCities.length - 1)
                        );
                      } else if (e.key === 'ArrowUp') {
                        e.preventDefault();
                        setHighlightedCityIndex((prev) => Math.max(prev - 1, 0));
                      } else if (e.key === 'Enter' && isCityDropdownOpen) {
                        if (filteredCities.length > 0) {
                          e.preventDefault();
                          const chosen =
                            filteredCities[highlightedCityIndex] || filteredCities[0];
                          handleSelectCity(chosen);
                        }
                      } else if (e.key === 'Escape') {
                        setIsCityDropdownOpen(false);
                        setHasTypedCityQuery(false);
                        setCitySearchQuery(selectedCity.label);
                      }
                    }}
                    className="w-full h-11 rounded-xl border border-[#d6bd93] bg-[#fffdf8] pl-9 pr-9 text-sm font-medium text-[#2c221a] placeholder:text-[#9a8672] focus:border-[#6e121b] focus:outline-none focus:ring-2 focus:ring-[#c79948]/40"
                  />
                  {citySearchQuery && (
                    <button
                      type="button"
                      aria-label="Clear birth city search"
                      onClick={() => {
                        setCitySearchQuery('');
                        setHasTypedCityQuery(true);
                        setIsCityDropdownOpen(true);
                        setHighlightedCityIndex(0);
                        cityInputRef.current?.focus();
                      }}
                      className="absolute right-2.5 inline-flex h-6 w-6 items-center justify-center rounded-full text-[#7a6754] hover:bg-[#efe2ca] hover:text-[#4a1117] transition-colors cursor-pointer"
                    >
                      <X className="w-3.5 h-3.5" aria-hidden="true" />
                    </button>
                  )}
                </div>

                {/* Dropdown Search Results */}
                {isCityDropdownOpen && (
                  <div
                    id="rashi-city-listbox"
                    role="listbox"
                    aria-label="Matching birth cities and regions"
                    className="absolute left-0 right-0 top-full mt-1.5 z-40 max-h-60 overflow-y-auto rounded-xl border border-[#cfa053] bg-[#fffdf9] p-1.5 shadow-[0_18px_36px_-10px_rgba(32,20,10,0.3)]"
                  >
                    {filteredCities.length > 0 ? (
                      filteredCities.map((city, idx) => {
                        const isSelected = city.id === selectedCity.id;
                        const isHighlighted = idx === highlightedCityIndex;
                        return (
                          <button
                            key={city.id}
                            type="button"
                            role="option"
                            aria-selected={isSelected}
                            onMouseEnter={() => setHighlightedCityIndex(idx)}
                            onClick={() => handleSelectCity(city)}
                            className={`w-full flex items-center justify-between gap-2 rounded-lg px-3 py-2 text-left text-xs transition-colors cursor-pointer ${
                              isSelected
                                ? 'bg-[#6e121b] text-[#fff6e3] font-semibold'
                                : isHighlighted
                                ? 'bg-[#f4e5c8] text-[#2c221a]'
                                : 'text-[#2c221a] hover:bg-[#f7ebd4]'
                            }`}
                          >
                            <span className="truncate flex items-center gap-1.5">
                              {isSelected && <Check className="w-3.5 h-3.5 shrink-0 text-[#f9dc92]" aria-hidden="true" />}
                              <span className="truncate">{city.label}</span>
                            </span>
                            <span
                              className={`shrink-0 text-[11px] tabular-nums ${
                                isSelected ? 'text-[#f4d48e]' : 'text-[#73604e]'
                              }`}
                            >
                              {city.timezoneLabel}
                            </span>
                          </button>
                        );
                      })
                    ) : (
                      <div className="p-2.5 space-y-2 text-xs">
                        <p className="text-[#5c4a38]">
                          No exact city match for <strong className="text-[#4a1117]">“{citySearchQuery}”</strong>. Pick your birth time zone:
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {['delhi', 'dubai', 'london', 'newyork', 'losangeles', 'sydney'].map(
                            (fallbackId) => {
                              const preset = BIRTH_CITY_PRESETS.find((c) => c.id === fallbackId);
                              if (!preset) return null;
                              return (
                                <button
                                  key={preset.id}
                                  type="button"
                                  onClick={() => handleSelectCity(preset)}
                                  className="rounded-md border border-[#d6bd93] bg-[#faf1df] hover:bg-[#efdcb6] px-2.5 py-1 text-[11px] font-semibold text-[#4a1117] cursor-pointer"
                                >
                                  {preset.timezoneLabel}
                                </button>
                              );
                            }
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Action Button */}
              <div className="flex items-center gap-2">
                <button
                  type="submit"
                  className="inline-flex h-11 w-full lg:w-auto items-center justify-center gap-2 rounded-xl border border-[#b57b1d] bg-gradient-to-b from-[#fae091] via-[#e6b34d] to-[#c98b24] hover:brightness-105 active:scale-[0.99] px-5 text-xs sm:text-sm font-bold text-[#460709] shadow-[0_6px_16px_-6px_rgba(128,82,12,0.45)] transition-all cursor-pointer whitespace-nowrap shrink-0"
                >
                  <Sparkles className="w-4 h-4" aria-hidden="true" />
                  <span>Find My Rashi</span>
                </button>

                {result && (
                  <button
                    type="button"
                    onClick={handleReset}
                    aria-label="Reset calculator"
                    title="Reset"
                    className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#d6bd93] bg-[#fffdf8] text-[#5c4a38] hover:border-[#6e121b] hover:text-[#6e121b] transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {errorMsg && (
              <p role="alert" className="text-xs font-semibold text-[#7c1519]">
                {errorMsg}
              </p>
            )}
          </form>
        ) : (
          /* Tab 2: Namakshar (Traditional Vedic Name Syllable) Lookup */
          <div className="mt-4 space-y-3">
            <p className="text-xs text-[#5c4a38]">
              Don’t have your birth time handy? Select the row containing the starting sound of your traditional Janma Name (Namakshar):
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
              {NAMAKSHAR_LOOKUP.map((entry) => {
                const profile = getZodiacProfile(entry.rashiId);
                const isActive =
                  selectedNameRashiId === entry.rashiId ||
                  (!selectedNameRashiId && selectedSignId === entry.rashiId && tab === 'name');
                return (
                  <button
                    key={entry.rashiId}
                    type="button"
                    onClick={() => handlePickNamakshar(entry.rashiId)}
                    className={`group rounded-xl border px-3 py-2 text-left transition-all cursor-pointer ${
                      isActive
                        ? 'border-[#b98735] bg-gradient-to-b from-[#6e121b] to-[#460910] text-[#fff6e3] shadow-sm'
                        : 'border-[#e0cfa9] bg-[#fffdf8] hover:border-[#c39549] hover:bg-[#fbf2df]'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-1">
                      <span
                        className={`text-xs font-bold ${
                          isActive ? 'text-[#f9dc92]' : 'text-[#6e121b]'
                        }`}
                      >
                        {profile.vedicName} ({profile.name})
                      </span>
                      <span
                        aria-hidden="true"
                        className={`text-sm ${
                          isActive ? 'text-[#f9dc92]' : 'text-[#9e6b16]'
                        }`}
                      >
                        {profile.glyph}
                      </span>
                    </div>
                    <p
                      className={`mt-1 text-[11px] leading-snug ${
                        isActive ? 'text-[#f2dfc0]' : 'text-[#6c5947]'
                      }`}
                    >
                      {entry.syllables.join(', ')}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Calculated Birth-Chart Moon Sign Result */}
        {result && (
          <div className="horoscope-panel-enter mt-5 rounded-xl border border-[#c79948] bg-gradient-to-r from-[#0e1b36] via-[#172c54] to-[#43121a] p-4 sm:p-5 text-[#fff8e9] shadow-md">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border border-[#e3b963] bg-[#142547] mx-auto sm:mx-0">
                  <img
                    src={getZodiacImagePath(result.profile.id)}
                    alt={`${result.profile.name} (${result.profile.vedicName}) Moon Sign`}
                    className="h-full w-full object-cover object-top scale-[1.18] origin-top"
                  />
                </div>

                <div className="text-center sm:text-left">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#f5d384]">
                    Your Vedic Moon Sign (Chandra Rashi)
                  </p>
                  <div className="mt-0.5 flex flex-wrap items-baseline justify-center sm:justify-start gap-x-2.5 gap-y-0.5">
                    <h4 className="font-serif-display text-2xl sm:text-[1.7rem] font-bold text-[#fff8e9]">
                      {result.profile.vedicName} · {result.profile.name}
                    </h4>
                    <span className="text-xs font-semibold text-[#f8dc95] tabular-nums">
                      ({result.degreeInSignFormatted})
                    </span>
                  </div>

                  {/* Clean Unboxed Technical Metadata Strip */}
                  <div className="mt-2 flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-1 text-xs text-[#e8dcc7] tabular-nums">
                    <span>
                      Janma Nakshatra: <strong className="text-white">{result.nakshatraName}</strong> (Pada {result.pada})
                    </span>
                    <span aria-hidden="true" className="text-[#c79948]">·</span>
                    <span>
                      Ruling Lord: <strong className="text-white">{result.profile.rulingPlanet}</strong>
                    </span>
                    <span aria-hidden="true" className="text-[#c79948]">·</span>
                    <span>
                      Namakshar: <strong className="text-[#f8dc95]">{result.namakshar}</strong>
                    </span>
                    <span aria-hidden="true" className="text-[#c79948]">·</span>
                    <span>
                      Lahiri Ayanamsa: <strong className="text-white">{result.ayanamsaFormatted}</strong>
                    </span>
                  </div>

                  {result.isNearCusp && (
                    <p className="mt-2 text-[11px] text-[#fbd485]">
                      Note: Moon is within 1.2° of a Rashi transition. Confirm exact birth minute or book a Kundli verification.
                    </p>
                  )}
                </div>
              </div>

              {/* Result Actions */}
              <div className="flex flex-col sm:flex-row lg:flex-col items-stretch sm:items-center lg:items-end gap-2.5 shrink-0">
                <AppLink
                  href={getPeriodHref(activePeriod, result.profile.id)}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#b57b1d] bg-gradient-to-b from-[#fae091] via-[#e6b34d] to-[#c98b24] hover:brightness-105 px-5 py-2.5 text-xs sm:text-sm font-bold text-[#460709] shadow-sm whitespace-nowrap transition-all"
                >
                  <span>Read {result.profile.name} {activePeriod} Horoscope</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </AppLink>

                {onApplySign ? (
                  <span className="inline-flex items-center justify-center gap-1.5 text-[11px] font-medium text-[#b9e6d0]">
                    <Check className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Selected in Today’s Horoscope below</span>
                  </span>
                ) : (
                  onOpenBooking && (
                    <button
                      type="button"
                      onClick={onOpenBooking}
                      className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-[#f5d384] hover:underline cursor-pointer"
                    >
                      <Compass className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Verify full Janma Kundli with Hanish Bagga →</span>
                    </button>
                  )
                )}
              </div>
            </div>
          </div>
        )}

        {/* Namakshar Lookup Result Banner */}
        {tab === 'name' && activeNameProfile && (
          <div className="horoscope-panel-enter mt-4 rounded-xl border border-[#cfa053] bg-[#0e1b36] px-4 py-3.5 text-[#fff8e9] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="text-2xl text-[#f8dc95]">
                {activeNameProfile.glyph}
              </span>
              <div>
                <p className="text-sm font-bold">
                  {activeNameProfile.vedicName} Rashi ({activeNameProfile.name})
                </p>
                <p className="text-xs text-[#e3d6c0]">
                  Ruled by {activeNameProfile.rulingPlanet} · {activeNameProfile.element} Element · {activeNameProfile.planetaryInsight}
                </p>
              </div>
            </div>
            <AppLink
              href={getPeriodHref(activePeriod, activeNameProfile.id)}
              className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-full border border-[#b57b1d] bg-gradient-to-b from-[#fae091] to-[#c98b24] px-4 py-2 text-xs font-bold text-[#460709] whitespace-nowrap"
            >
              <span>Open {activeNameProfile.name} Horoscope</span>
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </AppLink>
          </div>
        )}
      </div>
    </div>
  );
};
