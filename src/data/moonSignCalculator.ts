import { ZODIAC_HOROSCOPES, ZodiacHoroscopeProfile, ZodiacId } from './horoscopeData';

export interface BirthCityPreset {
  id: string;
  label: string;
  keywords?: string;
  timezoneLabel: string;
  utcOffsetMinutes: number;
}

export const BIRTH_CITY_PRESETS: BirthCityPreset[] = [
  { id: 'delhi', label: 'New Delhi / NCR, India', keywords: 'delhi noida gurgaon gurugram faridabad ghaziabad ncr', timezoneLabel: 'IST (UTC+5:30)', utcOffsetMinutes: 330 },
  { id: 'mumbai', label: 'Mumbai, Maharashtra, India', keywords: 'bombay thane navi mumbai konkan', timezoneLabel: 'IST (UTC+5:30)', utcOffsetMinutes: 330 },
  { id: 'pune', label: 'Pune, Maharashtra, India', keywords: 'poona maharashtra', timezoneLabel: 'IST (UTC+5:30)', utcOffsetMinutes: 330 },
  { id: 'bengaluru', label: 'Bengaluru, Karnataka, India', keywords: 'bangalore mysore mangalore karnataka', timezoneLabel: 'IST (UTC+5:30)', utcOffsetMinutes: 330 },
  { id: 'hyderabad', label: 'Hyderabad, Telangana, India', keywords: 'secunderabad warangal andhra', timezoneLabel: 'IST (UTC+5:30)', utcOffsetMinutes: 330 },
  { id: 'chennai', label: 'Chennai, Tamil Nadu, India', keywords: 'madras coimbatore madurai tamilnadu', timezoneLabel: 'IST (UTC+5:30)', utcOffsetMinutes: 330 },
  { id: 'kolkata', label: 'Kolkata, West Bengal, India', keywords: 'calcutta howrah siliguri bengal', timezoneLabel: 'IST (UTC+5:30)', utcOffsetMinutes: 330 },
  { id: 'ahmedabad', label: 'Ahmedabad, Gujarat, India', keywords: 'gandhinagar gujarat', timezoneLabel: 'IST (UTC+5:30)', utcOffsetMinutes: 330 },
  { id: 'surat', label: 'Surat, Gujarat, India', keywords: 'gujarat', timezoneLabel: 'IST (UTC+5:30)', utcOffsetMinutes: 330 },
  { id: 'vadodara', label: 'Vadodara / Rajkot, Gujarat, India', keywords: 'baroda gujarat jamnagar', timezoneLabel: 'IST (UTC+5:30)', utcOffsetMinutes: 330 },
  { id: 'jaipur', label: 'Jaipur, Rajasthan, India', keywords: 'ajmer kota bikaner rajasthan', timezoneLabel: 'IST (UTC+5:30)', utcOffsetMinutes: 330 },
  { id: 'udaipur', label: 'Udaipur / Jodhpur, Rajasthan, India', keywords: 'mewar marwar rajasthan', timezoneLabel: 'IST (UTC+5:30)', utcOffsetMinutes: 330 },
  { id: 'lucknow', label: 'Lucknow, Uttar Pradesh, India', keywords: 'up awadh barabanki', timezoneLabel: 'IST (UTC+5:30)', utcOffsetMinutes: 330 },
  { id: 'kanpur', label: 'Kanpur, Uttar Pradesh, India', keywords: 'up cawnpore', timezoneLabel: 'IST (UTC+5:30)', utcOffsetMinutes: 330 },
  { id: 'varanasi', label: 'Varanasi / Prayagraj, UP, India', keywords: 'kashi banaras benaras allahabad uttar pradesh', timezoneLabel: 'IST (UTC+5:30)', utcOffsetMinutes: 330 },
  { id: 'agra', label: 'Agra / Mathura, UP, India', keywords: 'vrindavan uttar pradesh meerut', timezoneLabel: 'IST (UTC+5:30)', utcOffsetMinutes: 330 },
  { id: 'indore', label: 'Indore, Madhya Pradesh, India', keywords: 'ujjain mp malwa', timezoneLabel: 'IST (UTC+5:30)', utcOffsetMinutes: 330 },
  { id: 'bhopal', label: 'Bhopal / Jabalpur, MP, India', keywords: 'gwalior madhya pradesh', timezoneLabel: 'IST (UTC+5:30)', utcOffsetMinutes: 330 },
  { id: 'patna', label: 'Patna / Gaya, Bihar, India', keywords: 'muzaffarpur darbhanga bihar', timezoneLabel: 'IST (UTC+5:30)', utcOffsetMinutes: 330 },
  { id: 'ranchi', label: 'Ranchi / Jamshedpur, Jharkhand, India', keywords: 'dhanbad jharkhand', timezoneLabel: 'IST (UTC+5:30)', utcOffsetMinutes: 330 },
  { id: 'chandigarh', label: 'Chandigarh / Mohali, Punjab, India', keywords: 'panchkula haryana ambala punjab', timezoneLabel: 'IST (UTC+5:30)', utcOffsetMinutes: 330 },
  { id: 'amritsar', label: 'Amritsar / Ludhiana / Jalandhar, Punjab', keywords: 'patiala punjab', timezoneLabel: 'IST (UTC+5:30)', utcOffsetMinutes: 330 },
  { id: 'dehradun', label: 'Dehradun / Haridwar, Uttarakhand, India', keywords: 'rishikesh nainital uttarakhand', timezoneLabel: 'IST (UTC+5:30)', utcOffsetMinutes: 330 },
  { id: 'shimla', label: 'Shimla / Jammu / Srinagar, North India', keywords: 'himachal kashmir jammu', timezoneLabel: 'IST (UTC+5:30)', utcOffsetMinutes: 330 },
  { id: 'nagpur', label: 'Nagpur / Nashik, Maharashtra, India', keywords: 'aurangabad vidarbha maharashtra', timezoneLabel: 'IST (UTC+5:30)', utcOffsetMinutes: 330 },
  { id: 'raipur', label: 'Raipur / Bilaspur, Chhattisgarh, India', keywords: 'chhattisgarh', timezoneLabel: 'IST (UTC+5:30)', utcOffsetMinutes: 330 },
  { id: 'bhubaneswar', label: 'Bhubaneswar / Cuttack, Odisha, India', keywords: 'puri orissa odisha', timezoneLabel: 'IST (UTC+5:30)', utcOffsetMinutes: 330 },
  { id: 'guwahati', label: 'Guwahati, Assam / Northeast India', keywords: 'assam shillong tripura manipur', timezoneLabel: 'IST (UTC+5:30)', utcOffsetMinutes: 330 },
  { id: 'kochi', label: 'Kochi / Thiruvananthapuram, Kerala, India', keywords: 'cochin trivandrum kozhikode kerala', timezoneLabel: 'IST (UTC+5:30)', utcOffsetMinutes: 330 },
  { id: 'visakhapatnam', label: 'Visakhapatnam / Vijayawada, AP, India', keywords: 'vizag tirupati andhra pradesh', timezoneLabel: 'IST (UTC+5:30)', utcOffsetMinutes: 330 },
  { id: 'kathmandu', label: 'Kathmandu, Nepal', keywords: 'pokhara nepal npt', timezoneLabel: 'NPT (UTC+5:45)', utcOffsetMinutes: 345 },
  { id: 'colombo', label: 'Colombo, Sri Lanka', keywords: 'kandy sri lanka', timezoneLabel: 'SLST (UTC+5:30)', utcOffsetMinutes: 330 },
  { id: 'dhaka', label: 'Dhaka, Bangladesh', keywords: 'chittagong bangladesh', timezoneLabel: 'BST (UTC+6:00)', utcOffsetMinutes: 360 },
  { id: 'dubai', label: 'Dubai / Abu Dhabi, UAE', keywords: 'sharjah emirates uae', timezoneLabel: 'GST (UTC+4:00)', utcOffsetMinutes: 240 },
  { id: 'doha', label: 'Doha / Riyadh, Middle East', keywords: 'qatar saudi arabia kuwait bahrain oman', timezoneLabel: 'AST (UTC+3:00)', utcOffsetMinutes: 180 },
  { id: 'singapore', label: 'Singapore', keywords: 'sg asia', timezoneLabel: 'SGT (UTC+8:00)', utcOffsetMinutes: 480 },
  { id: 'kualalumpur', label: 'Kuala Lumpur, Malaysia', keywords: 'penang malaysia', timezoneLabel: 'MYT (UTC+8:00)', utcOffsetMinutes: 480 },
  { id: 'bangkok', label: 'Bangkok, Thailand', keywords: 'thailand jakarta vietnam', timezoneLabel: 'ICT (UTC+7:00)', utcOffsetMinutes: 420 },
  { id: 'tokyo', label: 'Tokyo, Japan', keywords: 'osaka japan korea', timezoneLabel: 'JST (UTC+9:00)', utcOffsetMinutes: 540 },
  { id: 'london', label: 'London / Manchester, UK', keywords: 'birmingham uk britain england scotland ireland', timezoneLabel: 'GMT (UTC+0:00)', utcOffsetMinutes: 0 },
  { id: 'berlin', label: 'Berlin / Paris / Frankfurt, Europe', keywords: 'germany france netherlands italy switzerland spain', timezoneLabel: 'CET (UTC+1:00)', utcOffsetMinutes: 60 },
  { id: 'newyork', label: 'New York / New Jersey / Toronto', keywords: 'boston washington atlanta miami canada usa est', timezoneLabel: 'EST (UTC-5:00)', utcOffsetMinutes: -300 },
  { id: 'chicago', label: 'Chicago / Dallas / Houston, USA', keywords: 'texas illinois minneapolis cst', timezoneLabel: 'CST (UTC-6:00)', utcOffsetMinutes: -360 },
  { id: 'denver', label: 'Denver / Phoenix / Calgary', keywords: 'colorado arizona alberta mst', timezoneLabel: 'MST (UTC-7:00)', utcOffsetMinutes: -420 },
  { id: 'losangeles', label: 'Los Angeles / San Francisco / Vancouver', keywords: 'seattle california silicon valley pst', timezoneLabel: 'PST (UTC-8:00)', utcOffsetMinutes: -480 },
  { id: 'sydney', label: 'Sydney / Melbourne, Australia', keywords: 'brisbane canberra australia', timezoneLabel: 'AEST (UTC+10:00)', utcOffsetMinutes: 600 },
  { id: 'auckland', label: 'Auckland, New Zealand', keywords: 'wellington nz', timezoneLabel: 'NZST (UTC+12:00)', utcOffsetMinutes: 720 }
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
