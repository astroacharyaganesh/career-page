import { ZODIAC_HOROSCOPES, ZodiacHoroscopeProfile, ZodiacId } from './horoscopeData';

export interface BirthCityPreset {
  id: string;
  label: string;
  timezoneLabel: string;
  utcOffsetMinutes: number;
}

export const BIRTH_CITY_PRESETS: BirthCityPreset[] = [
  { id: 'delhi', label: 'New Delhi / NCR, India', timezoneLabel: 'IST (UTC+5:30)', utcOffsetMinutes: 330 },
  { id: 'mumbai', label: 'Mumbai / Pune, India', timezoneLabel: 'IST (UTC+5:30)', utcOffsetMinutes: 330 },
  { id: 'bengaluru', label: 'Bengaluru / Chennai, India', timezoneLabel: 'IST (UTC+5:30)', utcOffsetMinutes: 330 },
  { id: 'kolkata', label: 'Kolkata / East India', timezoneLabel: 'IST (UTC+5:30)', utcOffsetMinutes: 330 },
  { id: 'jaipur', label: 'Jaipur / Ahmedabad, India', timezoneLabel: 'IST (UTC+5:30)', utcOffsetMinutes: 330 },
  { id: 'hyderabad', label: 'Hyderabad / Telangana, India', timezoneLabel: 'IST (UTC+5:30)', utcOffsetMinutes: 330 },
  { id: 'dubai', label: 'Dubai / Abu Dhabi, UAE', timezoneLabel: 'GST (UTC+4:00)', utcOffsetMinutes: 240 },
  { id: 'singapore', label: 'Singapore', timezoneLabel: 'SGT (UTC+8:00)', utcOffsetMinutes: 480 },
  { id: 'london', label: 'London, UK', timezoneLabel: 'GMT (UTC+0:00)', utcOffsetMinutes: 0 },
  { id: 'newyork', label: 'New York, USA', timezoneLabel: 'EST (UTC-5:00)', utcOffsetMinutes: -300 },
  { id: 'losangeles', label: 'Los Angeles, USA', timezoneLabel: 'PST (UTC-8:00)', utcOffsetMinutes: -480 },
  { id: 'sydney', label: 'Sydney, Australia', timezoneLabel: 'AEST (UTC+10:00)', utcOffsetMinutes: 600 }
];

export interface NakshatraInfo {
  name: string;
  lord: string;
  padas: [string, string, string, string];
}

export const NAKSHATRA_DETAILS: NakshatraInfo[] = [
  { name: 'Ashwini', lord: 'Ketu', padas: ['Chu', 'Che', 'Cho', 'La'] },
  { name: 'Bharani', lord: 'Venus', padas: ['Li', 'Lu', 'Le', 'Lo'] },
  { name: 'Krittika', lord: 'Sun', padas: ['A', 'I', 'U', 'E'] },
  { name: 'Rohini', lord: 'Moon', padas: ['O', 'Va', 'Vi', 'Vu'] },
  { name: 'Mrigashira', lord: 'Mars', padas: ['Ve', 'Vo', 'Ka', 'Ki'] },
  { name: 'Ardra', lord: 'Rahu', padas: ['Ku', 'Gha', 'Ng', 'Chha'] },
  { name: 'Punarvasu', lord: 'Jupiter', padas: ['Ke', 'Ko', 'Ha', 'Hi'] },
  { name: 'Pushya', lord: 'Saturn', padas: ['Hu', 'He', 'Ho', 'Da'] },
  { name: 'Ashlesha', lord: 'Mercury', padas: ['Di', 'Du', 'De', 'Do'] },
  { name: 'Magha', lord: 'Ketu', padas: ['Ma', 'Mi', 'Mu', 'Me'] },
  { name: 'Purva Phalguni', lord: 'Venus', padas: ['Mo', 'Ta', 'Ti', 'Tu'] },
  { name: 'Uttara Phalguni', lord: 'Sun', padas: ['Te', 'To', 'Pa', 'Pi'] },
  { name: 'Hasta', lord: 'Moon', padas: ['Pu', 'Sha', 'Na', 'Tha'] },
  { name: 'Chitra', lord: 'Mars', padas: ['Pe', 'Po', 'Ra', 'Ri'] },
  { name: 'Swati', lord: 'Rahu', padas: ['Ru', 'Re', 'Ro', 'Ta'] },
  { name: 'Vishakha', lord: 'Jupiter', padas: ['Ti', 'Tu', 'Te', 'To'] },
  { name: 'Anuradha', lord: 'Saturn', padas: ['Na', 'Ni', 'Nu', 'Ne'] },
  { name: 'Jyeshtha', lord: 'Mercury', padas: ['No', 'Ya', 'Yi', 'Yu'] },
  { name: 'Mula', lord: 'Ketu', padas: ['Ye', 'Yo', 'Bha', 'Bhi'] },
  { name: 'Purva Ashadha', lord: 'Venus', padas: ['Bhu', 'Dha', 'Pha', 'Dha'] },
  { name: 'Uttara Ashadha', lord: 'Sun', padas: ['Bhe', 'Bho', 'Ja', 'Ji'] },
  { name: 'Shravana', lord: 'Moon', padas: ['Khi', 'Khu', 'Khe', 'Kho'] },
  { name: 'Dhanishta', lord: 'Mars', padas: ['Ga', 'Gi', 'Gu', 'Ge'] },
  { name: 'Shatabhisha', lord: 'Rahu', padas: ['Go', 'Sa', 'Si', 'Su'] },
  { name: 'Purva Bhadrapada', lord: 'Jupiter', padas: ['Se', 'So', 'Da', 'Di'] },
  { name: 'Uttara Bhadrapada', lord: 'Saturn', padas: ['Du', 'Tha', 'Jha', 'Da'] },
  { name: 'Revati', lord: 'Mercury', padas: ['De', 'Do', 'Cha', 'Chi'] }
];

export interface NamaksharEntry {
  syllables: string[];
  rashiId: ZodiacId;
  vedicName: string;
}

export const NAMAKSHAR_LOOKUP: NamaksharEntry[] = [
  { syllables: ['Chu', 'Che', 'Cho', 'La', 'Li', 'Lu', 'Le', 'Lo', 'A'], rashiId: 'aries', vedicName: 'Mesha' },
  { syllables: ['I', 'U', 'E', 'O', 'Va', 'Vi', 'Vu', 'Ve', 'Vo'], rashiId: 'taurus', vedicName: 'Vrishabha' },
  { syllables: ['Ka', 'Ki', 'Ku', 'Gha', 'Ng', 'Chha', 'Ke', 'Ko', 'Ha'], rashiId: 'gemini', vedicName: 'Mithuna' },
  { syllables: ['Hi', 'Hu', 'He', 'Ho', 'Da', 'Di', 'Du', 'De', 'Do'], rashiId: 'cancer', vedicName: 'Karka' },
  { syllables: ['Ma', 'Mi', 'Mu', 'Me', 'Mo', 'Ta', 'Ti', 'Tu', 'Te'], rashiId: 'leo', vedicName: 'Simha' },
  { syllables: ['To', 'Pa', 'Pi', 'Pu', 'Sha', 'Na', 'Tha', 'Pe', 'Po'], rashiId: 'virgo', vedicName: 'Kanya' },
  { syllables: ['Ra', 'Ri', 'Ru', 'Re', 'Ro', 'Ta', 'Ti', 'Tu', 'Te'], rashiId: 'libra', vedicName: 'Tula' },
  { syllables: ['To', 'Na', 'Ni', 'Nu', 'Ne', 'No', 'Ya', 'Yi', 'Yu'], rashiId: 'scorpio', vedicName: 'Vrishchika' },
  { syllables: ['Ye', 'Yo', 'Bha', 'Bhi', 'Bhu', 'Dha', 'Pha', 'Dha', 'Bhe'], rashiId: 'sagittarius', vedicName: 'Dhanu' },
  { syllables: ['Bho', 'Ja', 'Ji', 'Khi', 'Khu', 'Khe', 'Kho', 'Ga', 'Gi'], rashiId: 'capricorn', vedicName: 'Makara' },
  { syllables: ['Gu', 'Ge', 'Go', 'Sa', 'Si', 'Su', 'Se', 'So', 'Da'], rashiId: 'aquarius', vedicName: 'Kumbha' },
  { syllables: ['Di', 'Du', 'Tha', 'Jha', 'De', 'Do', 'Cha', 'Chi'], rashiId: 'pisces', vedicName: 'Meena' }
];

export interface MoonSignCalculationResult {
  profile: ZodiacHoroscopeProfile;
  siderealLongitude: number;
  degreeInSignFormatted: string;
  nakshatraName: string;
  nakshatraLord: string;
  pada: number;
  namakshar: string;
  isNearCusp: boolean;
  ayanamsaFormatted: string;
}

const DEG_TO_RAD = Math.PI / 180;

function normalizeDeg(deg: number): number {
  const m = deg % 360;
  return m < 0 ? m + 360 : m;
}

function formatDegMin(deg: number): string {
  const totalMins = Math.round(deg * 60);
  const d = Math.floor(totalMins / 60);
  const m = totalMins % 60;
  return `${d}° ${String(m).padStart(2, '0')}′`;
}

function toJulianDay(year: number, month: number, dayFraction: number): number {
  let y = year;
  let m = month;
  if (m <= 2) {
    y -= 1;
    m += 12;
  }
  const A = Math.floor(y / 100);
  const B = 2 - A + Math.floor(A / 4);
  return Math.floor(365.25 * (y + 4716)) + Math.floor(30.6001 * (m + 1)) + dayFraction + B - 1524.5;
}

/**
 * Computes Sidereal Moon (Nirayana Chandra) Longitude using Jean Meeus Lunar Theory
 * combined with Lahiri (Chitrapaksha) Ayanamsa.
 */
export function calculateMoonSign(input: {
  birthDate: string; // YYYY-MM-DD
  birthTime?: string; // HH:MM
  utcOffsetMinutes?: number;
}): MoonSignCalculationResult | null {
  const dateParts = input.birthDate.split('-').map(Number);
  if (dateParts.length !== 3 || dateParts.some((n) => Number.isNaN(n))) {
    return null;
  }
  const [year, month, day] = dateParts;
  if (year < 1900 || year > 2100 || month < 1 || month > 12 || day < 1 || day > 31) {
    return null;
  }

  let hour = 12;
  let minute = 0;
  if (input.birthTime && /^\d{1,2}:\d{2}$/.test(input.birthTime)) {
    const [h, m] = input.birthTime.split(':').map(Number);
    if (!Number.isNaN(h) && !Number.isNaN(m)) {
      hour = h;
      minute = m;
    }
  }

  const offsetHours = (input.utcOffsetMinutes ?? 330) / 60;
  const utHours = hour + minute / 60 - offsetHours;
  const jd = toJulianDay(year, month, day + utHours / 24);
  const T = (jd - 2451545.0) / 36525.0;
  const T2 = T * T;
  const T3 = T2 * T;
  const T4 = T3 * T;

  // Fundamental lunar arguments (degrees)
  const Lprime = normalizeDeg(
    218.3164477 +
      481267.88123421 * T -
      0.0015786 * T2 +
      T3 / 538841 -
      T4 / 65194000
  );
  const D = normalizeDeg(
    297.8501921 +
      445267.1114034 * T -
      0.0018819 * T2 +
      T3 / 545868 -
      T4 / 113065000
  );
  const M = normalizeDeg(
    357.5291092 + 35999.0502909 * T - 0.0001536 * T2 + T3 / 24490000
  );
  const Mprime = normalizeDeg(
    134.9633964 +
      477198.8675055 * T +
      0.0087414 * T2 +
      T3 / 69699 -
      T4 / 14712000
  );
  const F = normalizeDeg(
    93.272095 +
      483202.0175233 * T -
      0.0036539 * T2 -
      T3 / 3526000 +
      T4 / 863310000
  );

  // Additive eccentricity correction E for Earth's orbit
  const E = 1 - 0.002516 * T - 0.0000074 * T2;

  const sin = (deg: number) => Math.sin(deg * DEG_TO_RAD);

  // Periodic longitude terms (degrees)
  const sigmaL =
    6.288774 * sin(Mprime) +
    1.274027 * sin(2 * D - Mprime) +
    0.658314 * sin(2 * D) +
    0.213618 * sin(2 * Mprime) -
    0.185116 * E * sin(M) -
    0.114332 * sin(2 * F) +
    0.058793 * sin(2 * D - 2 * Mprime) +
    0.057066 * E * sin(2 * D - M - Mprime) +
    0.053322 * sin(2 * D + Mprime) +
    0.045758 * E * sin(2 * D - M) -
    0.040923 * E * sin(Mprime - M) -
    0.03472 * sin(D) -
    0.030383 * E * sin(Mprime + M) +
    0.015327 * sin(2 * D - 2 * F) -
    0.012528 * sin(Mprime + 2 * F) +
    0.01098 * sin(Mprime - 2 * F) +
    0.010675 * sin(4 * D - Mprime) +
    0.010034 * sin(3 * Mprime) +
    0.008548 * sin(4 * D - 2 * Mprime) -
    0.007888 * E * sin(2 * D + M - Mprime) -
    0.006766 * E * sin(2 * D + M) -
    0.005163 * sin(D - Mprime) +
    0.004987 * E * sin(D + M) +
    0.004036 * E * sin(2 * D - M + Mprime);

  const tropicalLon = normalizeDeg(Lprime + sigmaL);

  // Lahiri (Chitrapaksha) Ayanamsa
  const ayanamsa = 23.857092 + 1.396886 * T;
  const siderealLon = normalizeDeg(tropicalLon - ayanamsa);

  const rashiIndex = Math.floor(siderealLon / 30) % 12;
  const degreeInSign = siderealLon % 30;
  const profile = ZODIAC_HOROSCOPES[rashiIndex] || ZODIAC_HOROSCOPES[0];

  const nakSpan = 360 / 27; // 13.3333°
  const nakIndex = Math.floor(siderealLon / nakSpan) % 27;
  const degWithinNak = siderealLon % nakSpan;
  const pada = (Math.floor(degWithinNak / (nakSpan / 4)) % 4) + 1;
  const nakInfo = NAKSHATRA_DETAILS[nakIndex] || NAKSHATRA_DETAILS[0];

  const isNearCusp = degreeInSign < 1.2 || degreeInSign > 28.8;

  return {
    profile,
    siderealLongitude: siderealLon,
    degreeInSignFormatted: formatDegMin(degreeInSign),
    nakshatraName: nakInfo.name,
    nakshatraLord: nakInfo.lord,
    pada,
    namakshar: nakInfo.padas[pada - 1] || nakInfo.padas[0],
    isNearCusp,
    ayanamsaFormatted: formatDegMin(ayanamsa)
  };
}
