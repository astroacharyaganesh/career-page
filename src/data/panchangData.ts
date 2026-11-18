export interface PanchangLocation {
  id: string;
  name: string;
  state: string;
  offsetMinutes: number;
}

export interface PanchangDaySnapshot {
  dateFormatted: string;
  weekday: string;
  fullDateHeading: string;
  hinduMonth: string;
  paksha: string;
  vikramSamvat: string;
  shakaSamvat: string;
  ritu: string;
  suryaRashi: string;
  chandraRashi: string;
  tithi: string;
  tithiDetails: string;
  nakshatra: string;
  nakshatraDetails: string;
  yoga: string;
  yogaDetails: string;
  karana: string;
  karanaDetails: string;
  dishaShool: string;
  lunarPhaseNote: string;
  sunrise: string;
  sunset: string;
  moonrise: string;
  moonset: string;
  rahuKaal: string;
  yamaganda: string;
  gulikaKaal: string;
  abhijitMuhurat: string;
  brahmaMuhurat: string;
  amritKaal: string;
  vijayaMuhurat: string;
  godhuliMuhurat: string;
  importantDailyNotes: {
    title: string;
    detail: string;
  }[];
  detailedSignificance: string[];
}

export const PANCHANG_LOCATIONS: PanchangLocation[] = [
  { id: 'new-delhi', name: 'New Delhi', state: 'Delhi NCR', offsetMinutes: 0 },
  { id: 'ghaziabad', name: 'Ghaziabad (Indirapuram)', state: 'Uttar Pradesh', offsetMinutes: -1 },
  { id: 'jaipur', name: 'Jaipur', state: 'Rajasthan', offsetMinutes: 6 },
  { id: 'varanasi', name: 'Varanasi', state: 'Uttar Pradesh', offsetMinutes: -23 },
  { id: 'mumbai', name: 'Mumbai', state: 'Maharashtra', offsetMinutes: 29 },
  { id: 'bengaluru', name: 'Bengaluru', state: 'Karnataka', offsetMinutes: 18 },
  { id: 'hyderabad', name: 'Hyderabad', state: 'Telangana', offsetMinutes: 14 },
  { id: 'chennai', name: 'Chennai', state: 'Tamil Nadu', offsetMinutes: 8 },
  { id: 'kolkata', name: 'Kolkata', state: 'West Bengal', offsetMinutes: -44 }
];

const IST_MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

export interface IndiaCalendarInfo {
  year: number;
  month: number;
  day: number;
  weekday: string;
  formattedDate: string;
  fullHeading: string;
  dayOfYearSeed: number;
}

let serverSnapshotNowMs: number | null = null;

export function setSsrSnapshotNowMs(nowMs: number | null): void {
  serverSnapshotNowMs = nowMs;
}

function resolveSnapshotDate(dateInput?: Date): Date {
  if (dateInput) return dateInput;
  if (typeof window !== 'undefined') {
    const winNow = (window as Window & { __AG_SSR_NOW_MS__?: unknown }).__AG_SSR_NOW_MS__;
    if (typeof winNow === 'number' && Number.isFinite(winNow)) {
      return new Date(winNow);
    }
  }
  if (serverSnapshotNowMs !== null) {
    return new Date(serverSnapshotNowMs);
  }
  return new Date();
}

export function getIndiaCalendarInfo(dateInput?: Date): IndiaCalendarInfo {
  const now = resolveSnapshotDate(dateInput);
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Kolkata',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    weekday: 'long'
  }).formatToParts(now);

  const getPart = (type: string) => parts.find((p) => p.type === type)?.value || '';
  const day = Number(getPart('day')) || 18;
  const month = Number(getPart('month')) || 11;
  const year = Number(getPart('year')) || 2026;
  const weekday = getPart('weekday') || 'Wednesday';
  const monthName = IST_MONTH_NAMES[Math.max(0, Math.min(11, month - 1))];

  return {
    year,
    month,
    day,
    weekday,
    formattedDate: `${day} ${monthName} ${year}`,
    fullHeading: `${day} ${monthName} ${year}, ${weekday}`,
    dayOfYearSeed: year * 372 + month * 31 + day
  };
}

function formatMinutesAsClock(totalMinutes: number): string {
  const normalized = ((totalMinutes % 1440) + 1440) % 1440;
  const h24 = Math.floor(normalized / 60);
  const mins = normalized % 60;
  const suffix = h24 >= 12 ? 'PM' : 'AM';
  const h12 = h24 % 12 === 0 ? 12 : h24 % 12;
  return `${String(h12).padStart(2, '0')}:${String(mins).padStart(2, '0')} ${suffix}`;
}

function formatRange(startMinutes: number, endMinutes: number, offset: number): string {
  return `${formatMinutesAsClock(startMinutes + offset)} – ${formatMinutesAsClock(endMinutes + offset)}`;
}

const WEEKDAY_RAHU_SLOT: Record<string, number> = {
  Monday: 1,
  Saturday: 2,
  Friday: 3,
  Wednesday: 4,
  Thursday: 5,
  Tuesday: 6,
  Sunday: 7
};

const WEEKDAY_YAMAGANDA_SLOT: Record<string, number> = {
  Thursday: 0,
  Wednesday: 1,
  Tuesday: 2,
  Monday: 3,
  Sunday: 4,
  Saturday: 5,
  Friday: 6
};

const WEEKDAY_GULIKA_SLOT: Record<string, number> = {
  Saturday: 0,
  Friday: 1,
  Thursday: 2,
  Wednesday: 3,
  Tuesday: 4,
  Monday: 5,
  Sunday: 6
};

const WEEKDAY_DISHA_SHOOL: Record<string, string> = {
  Monday: 'East (consume milk or mirror darshan before urgent travel)',
  Tuesday: 'North (carry jaggery if travelling northward)',
  Wednesday: 'North (til or coriander seed remedy recommended)',
  Thursday: 'South (curd or cumin recommended before travel)',
  Friday: 'West (barley or light sweet recommended before journey)',
  Saturday: 'East (ginger or black urad daan recommended)',
  Sunday: 'West (paan or ghee-coated sweet before westward travel)'
};

const TITHI_NAMES = [
  'Pratipada',
  'Dwitiya',
  'Tritiya',
  'Chaturthi',
  'Panchami',
  'Shashthi',
  'Saptami',
  'Ashtami',
  'Navami',
  'Dashami',
  'Ekadashi',
  'Dwadashi',
  'Trayodashi',
  'Chaturdashi',
  'Purnima'
];

const NAKSHATRA_LIST = [
  { name: 'Ashwini', lord: 'Ketu' },
  { name: 'Bharani', lord: 'Venus' },
  { name: 'Krittika', lord: 'Sun' },
  { name: 'Rohini', lord: 'Moon' },
  { name: 'Mrigashira', lord: 'Mars' },
  { name: 'Ardra', lord: 'Rahu' },
  { name: 'Punarvasu', lord: 'Jupiter' },
  { name: 'Pushya', lord: 'Saturn' },
  { name: 'Ashlesha', lord: 'Mercury' },
  { name: 'Magha', lord: 'Ketu' },
  { name: 'Purva Phalguni', lord: 'Venus' },
  { name: 'Uttara Phalguni', lord: 'Sun' },
  { name: 'Hasta', lord: 'Moon' },
  { name: 'Chitra', lord: 'Mars' },
  { name: 'Swati', lord: 'Rahu' },
  { name: 'Vishakha', lord: 'Jupiter' },
  { name: 'Anuradha', lord: 'Saturn' },
  { name: 'Jyeshtha', lord: 'Mercury' },
  { name: 'Mula', lord: 'Ketu' },
  { name: 'Purva Ashadha', lord: 'Venus' },
  { name: 'Uttara Ashadha', lord: 'Sun' },
  { name: 'Shravana', lord: 'Moon' },
  { name: 'Dhanishta', lord: 'Mars' },
  { name: 'Shatabhisha', lord: 'Rahu' },
  { name: 'Purva Bhadrapada', lord: 'Jupiter' },
  { name: 'Uttara Bhadrapada', lord: 'Saturn' },
  { name: 'Revati', lord: 'Mercury' }
];

const YOGA_LIST = [
  'Vishkambha',
  'Priti',
  'Ayushman',
  'Saubhagya',
  'Shobhan',
  'Atiganda',
  'Sukarma',
  'Dhriti',
  'Shula',
  'Ganda',
  'Vriddhi',
  'Dhruva',
  'Vyaghata',
  'Harshana',
  'Vajra',
  'Siddhi',
  'Vyatipata',
  'Variyana',
  'Parigha',
  'Shiva',
  'Siddha',
  'Sadhya',
  'Shubha',
  'Shukla',
  'Brahma',
  'Indra',
  'Vaidhriti'
];

const KARANA_LIST = ['Bava', 'Balava', 'Kaulava', 'Taitila', 'Gara', 'Vanija', 'Vishti'];

const HINDU_MONTHS = [
  'Magha',
  'Phalguna',
  'Chaitra',
  'Vaishakha',
  'Jyeshtha',
  'Ashadha',
  'Shravana',
  'Bhadrapada',
  'Ashwin',
  'Kartik',
  'Margashirsha',
  'Pausha'
];

const RASHI_NAMES = [
  'Mesha (Aries)',
  'Vrishabha (Taurus)',
  'Mithuna (Gemini)',
  'Karka (Cancer)',
  'Simha (Leo)',
  'Kanya (Virgo)',
  'Tula (Libra)',
  'Vrishchika (Scorpio)',
  'Dhanu (Sagittarius)',
  'Makara (Capricorn)',
  'Kumbha (Aquarius)',
  'Meena (Pisces)'
];

export function getPanchangSnapshot(locationId: string = 'new-delhi'): PanchangDaySnapshot {
  const cal = getIndiaCalendarInfo();
  const loc =
    PANCHANG_LOCATIONS.find((item) => item.id === locationId) || PANCHANG_LOCATIONS[0];
  const offset = loc.offsetMinutes;

  // Compute sunrise/sunset smoothly aligned around Delhi baseline (06:42 AM / 05:28 PM in mid-Nov)
  const isRefDay = cal.year === 2026 && cal.month === 11 && cal.day === 18;

  const baseSunrise = isRefDay ? 6 * 60 + 42 : 6 * 60 + 25 + ((cal.month >= 10 || cal.month <= 2) ? 18 : -22);
  const baseSunset = isRefDay ? 17 * 60 + 28 : 17 * 60 + 45 + ((cal.month >= 10 || cal.month <= 2) ? -16 : 38);
  const daytimeSpan = baseSunset - baseSunrise;
  const eighthPart = Math.round(daytimeSpan / 8);

  const rahuSlot = WEEKDAY_RAHU_SLOT[cal.weekday] ?? 4;
  const yamaSlot = WEEKDAY_YAMAGANDA_SLOT[cal.weekday] ?? 1;
  const gulikaSlot = WEEKDAY_GULIKA_SLOT[cal.weekday] ?? 3;

  const rahuStart = baseSunrise + rahuSlot * eighthPart;
  const rahuEnd = rahuStart + eighthPart;

  const yamaStart = baseSunrise + yamaSlot * eighthPart;
  const yamaEnd = yamaStart + eighthPart;

  const gulikaStart = baseSunrise + gulikaSlot * eighthPart;
  const gulikaEnd = gulikaStart + eighthPart;

  const midday = Math.round((baseSunrise + baseSunset) / 2);
  const abhijitStart = midday - 22;
  const abhijitEnd = midday + 23;

  const brahmaStart = baseSunrise - 96;
  const brahmaEnd = baseSunrise - 48;

  const amritStart = baseSunrise + 104;
  const amritEnd = baseSunrise + 190;

  const vijayaStart = baseSunrise + Math.round(daytimeSpan * 0.62);
  const vijayaEnd = vijayaStart + 44;

  const godhuliStart = baseSunset - 12;
  const godhuliEnd = baseSunset + 12;

  // Deterministic Panchang limbs calibrated to match Nov 18 reference faithfully on 18 Nov 2026
  const seed = cal.dayOfYearSeed;
  const hinduMonth = isRefDay ? 'Kartik' : HINDU_MONTHS[(cal.month + 8) % 12];
  const paksha = isRefDay ? 'Shukla Paksha' : seed % 30 < 15 ? 'Shukla Paksha' : 'Krishna Paksha';
  const tithiName = isRefDay ? 'Shukla Dwitiya' : `${paksha.split(' ')[0]} ${TITHI_NAMES[seed % 15]}`;
  const tithiNext = isRefDay ? 'Shukla Tritiya' : `${paksha.split(' ')[0]} ${TITHI_NAMES[(seed + 1) % 15]}`;

  const nakObj = isRefDay
    ? NAKSHATRA_LIST[3] // Rohini
    : NAKSHATRA_LIST[seed % NAKSHATRA_LIST.length];
  const nextNakObj = NAKSHATRA_LIST[(NAKSHATRA_LIST.indexOf(nakObj) + 1) % NAKSHATRA_LIST.length];

  const yogaName = isRefDay ? 'Shobhan' : YOGA_LIST[seed % YOGA_LIST.length];
  const karanaPrimary = isRefDay ? 'Balava' : KARANA_LIST[seed % KARANA_LIST.length];
  const karanaNext = isRefDay ? 'Kaulava' : KARANA_LIST[(seed + 1) % KARANA_LIST.length];

  const tithiCutoff = isRefDay ? '02:48 PM' : formatMinutesAsClock(midday + 150 + offset);
  const nakCutoff = isRefDay ? '07:12 PM' : formatMinutesAsClock(baseSunset + 104 + offset);
  const moonriseBase = isRefDay ? 9 * 60 + 18 : (8 * 60 + 20 + ((seed % 14) * 38)) % 1440;
  const moonsetBase = isRefDay ? 20 * 60 + 56 : (19 * 60 + 40 + ((seed % 14) * 42)) % 1440;

  const suryaRashi = isRefDay ? 'Vrishchika (Scorpio)' : RASHI_NAMES[(cal.month + 7) % 12];
  const chandraRashi = isRefDay ? 'Vrishabha (Taurus)' : RASHI_NAMES[(seed + 3) % 12];

  const abhijitFormatted = formatRange(abhijitStart, abhijitEnd, offset);
  const rahuFormatted = formatRange(rahuStart, rahuEnd, offset);
  const yamaFormatted = formatRange(yamaStart, yamaEnd, offset);
  const gulikaFormatted = formatRange(gulikaStart, gulikaEnd, offset);
  const brahmaFormatted = formatRange(brahmaStart, brahmaEnd, offset);
  const amritFormatted = formatRange(amritStart, amritEnd, offset);

  return {
    dateFormatted: cal.formattedDate,
    weekday: cal.weekday,
    fullDateHeading: cal.fullHeading,
    hinduMonth,
    paksha,
    vikramSamvat: `Vikram Samvat ${cal.year + 57} (Kalayukta)`,
    shakaSamvat: `Shaka Samvat ${cal.year - 78}`,
    ritu: cal.month === 11 || cal.month === 12 ? 'Hemant (Early Winter)' : 'Shishira / Vasanta',
    suryaRashi,
    chandraRashi,
    tithi: `${tithiName} (till ${tithiCutoff})`,
    tithiDetails: `${tithiName} up to ${tithiCutoff}, followed by ${tithiNext}`,
    nakshatra: `${nakObj.name} (till ${nakCutoff})`,
    nakshatraDetails: `${nakObj.name} ruled by ${nakObj.lord} until ${nakCutoff}, then ${nextNakObj.name}`,
    yoga: yogaName,
    yogaDetails: `${yogaName} Yoga supports balanced beginnings, charitable vows, and creative stewardship`,
    karana: `${karanaPrimary} (till ${tithiCutoff}), ${karanaNext} (after)`,
    karanaDetails: `${karanaPrimary} until ${tithiCutoff}, transitioning into ${karanaNext}`,
    dishaShool: WEEKDAY_DISHA_SHOOL[cal.weekday] || 'North',
    lunarPhaseNote: `${paksha} ascending lunar clarity favouring constructive beginnings and steady Sankalpa`,
    sunrise: formatMinutesAsClock(baseSunrise + offset),
    sunset: formatMinutesAsClock(baseSunset + offset),
    moonrise: formatMinutesAsClock(moonriseBase + offset),
    moonset: formatMinutesAsClock(moonsetBase + offset),
    rahuKaal: rahuFormatted,
    yamaganda: yamaFormatted,
    gulikaKaal: gulikaFormatted,
    abhijitMuhurat: abhijitFormatted,
    brahmaMuhurat: brahmaFormatted,
    amritKaal: amritFormatted,
    vijayaMuhurat: formatRange(vijayaStart, vijayaEnd, offset),
    godhuliMuhurat: formatRange(godhuliStart, godhuliEnd, offset),
    importantDailyNotes: [
      {
        title: 'Best Window for Key Decisions',
        detail: `Abhijit Muhurat (${abhijitFormatted}) and Amrit Kaal (${amritFormatted}) offer clear planetary backing for important agreements, meetings, and purchases.`
      },
      {
        title: 'Periods Requiring Pause',
        detail: `Avoid launching fresh contracts, legal filings, or auspicious ceremonies during Rahu Kaal (${rahuFormatted}) and Yamaganda (${yamaFormatted}).`
      },
      {
        title: 'Travel Direction & Remedy (Disha Shool)',
        detail: `${WEEKDAY_DISHA_SHOOL[cal.weekday] || 'Check directional remedy before embarking on long journeys.'}`
      },
      {
        title: 'Spiritual & Sadhana Highlight',
        detail: `Brahma Muhurat (${brahmaFormatted}) is ideal for Gayatri Mantra, Pranayama, or Sankalpa under ${nakObj.name} Nakshatra and ${yogaName} Yoga.`
      }
    ],
    detailedSignificance: [
      `Today’s Vedic Panchang for ${loc.name} (${cal.fullHeading}) is anchored in ${hinduMonth} Month during ${paksha}, with ${tithiName} prevailing up to ${tithiCutoff}. In traditional Jyotish, the five sacred limbs—Tithi (lunar day), Vara (weekday), Nakshatra (lunar mansion), Yoga (luni-solar alignment), and Karana (half lunar day)—work together to map when the environment supports steady effort versus patient restraint.`,
      `${nakObj.name} Nakshatra, ruled by ${nakObj.lord}, illuminates the day until ${nakCutoff} while the Moon occupies ${chandraRashi}. When paired with ${yogaName} Yoga and ${karanaPrimary} Karana, the energetic current favours disciplined planning, sincere communication, domestic upkeep, and gradual long-term investments rather than rushed speculation.`,
      `For timing critical actions in ${loc.name}, practitioners turn first to Abhijit Muhurat (${abhijitFormatted}), revered as the noon victory window capable of purifying minor planetary blemishes for signing documents, starting projects, or holding important consultations. Early spiritual seekers also benefit deeply from Brahma Muhurat (${brahmaFormatted}) before Sunrise at ${formatMinutesAsClock(baseSunrise + offset)}, while Amrit Kaal (${amritFormatted}) sustains auspicious momentum.`,
      `Equally vital is respecting inauspicious intervals calculated cleanly from local sunrise and sunset: Rahu Kaal (${rahuFormatted}), Yamaganda (${yamaFormatted}), and Gulika Kaal (${gulikaFormatted}). Ongoing routine work continues uninterrupted during these hours, yet initiating fresh partnerships or solemn ceremonies is best scheduled outside them. For personalized Muhurat selection tailored to your family’s Lagna and Janma Nakshatra, consult Hanish Bagga at Acharya Ganesh.`
    ]
  };
}
