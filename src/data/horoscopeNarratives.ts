import type { HoroscopePeriod, ZodiacHoroscopeProfile, ZodiacId } from './horoscopeData';

interface SignNarrativeTraits {
  nakshatras: string;
  karakaPlanet: string;
  bodyZone: string;
  sacredRemedy: string;
  dailyGuidance: string;
  weeklyTheme: string;
  monthlyStrategy: string;
  yearlyArc: string;
}

const SIGN_TRAITS: Record<ZodiacId, SignNarrativeTraits> = {
  aries: {
    nakshatras: 'Ashwini, Bharani, and the first pada of Krittika',
    karakaPlanet: 'Mangal (Mars)',
    bodyZone: 'vitality, head clarity, and muscular drive',
    sacredRemedy: 'Recite Hanuman Chalisa or offer red flowers on Tuesday morning before starting major commitments.',
    dailyGuidance:
      'Channel your first burst of enthusiasm into concrete sequencing rather than trying to resolve multiple discussions at once.',
    weeklyTheme:
      'As lunar transits cross your action-oriented houses this week, steady follow-through outperforms sudden speed.',
    monthlyStrategy:
      'This lunar cycle asks Mesha natives to pair courageous initiative with written agreements and structured weekly checkpoints.',
    yearlyArc:
      'Throughout 2026, Jupiterian expansion and Saturnine discipline ask Aries natives to build lasting institutions rather than short-lived wins.'
  },
  taurus: {
    nakshatras: 'Krittika (latter padas), Rohini, and Mrigashira',
    karakaPlanet: 'Shukra (Venus)',
    bodyZone: 'throat comfort, sensory calm, and digestive steadiness',
    sacredRemedy: 'Offer white sweets or sandalwood incense on Friday to align Shukra energy with domestic harmony.',
    dailyGuidance:
      'Lean into patient craftsmanship today; quiet consistency settles situations that others try to force prematurely.',
    weeklyTheme:
      'Venusian grace favours practical negotiations, artistic refinement, and protecting calm routines across work and home.',
    monthlyStrategy:
      'Over the coming weeks, Vrishabha natives benefit from auditing recurring commitments and nurturing high-trust alliances.',
    yearlyArc:
      'In 2026, steady wealth consolidation, property review, and loyal personal companionship reward Taurus’s natural perseverance.'
  },
  gemini: {
    nakshatras: 'Mrigashira (latter padas), Ardra, and Punarvasu',
    karakaPlanet: 'Budha (Mercury)',
    bodyZone: 'nervous equilibrium, breath depth, and shoulder tension',
    sacredRemedy: 'Chant Vishnu Sahasranama or feed green fodder to cows on Wednesday for sharp Budha clarity.',
    dailyGuidance:
      'Write down top three priorities before opening messages so bright curiosity translates into completed work.',
    weeklyTheme:
      'Mercurial alertness highlights negotiations, writing, and short-distance coordination when backed by verified facts.',
    monthlyStrategy:
      'Mithuna natives gain greatest leverage this month by pruning scattered obligations and deepening two flagship collaborations.',
    yearlyArc:
      '2026 elevates Gemini through communications mastery, strategic networking, and adaptable skill expansion.'
  },
  cancer: {
    nakshatras: 'Punarvasu (final pada), Pushya, and Ashlesha',
    karakaPlanet: 'Chandra (Moon)',
    bodyZone: 'emotional equilibrium, chest ease, and digestive rhythm',
    sacredRemedy: 'Offer raw milk and water to Shiva Linga on Monday morning to steady Chandra and inner peace.',
    dailyGuidance:
      'Protect a quiet morning pocket before stepping into family or workplace demands; intuition speaks clearest in stillness.',
    weeklyTheme:
      'Lunar shifts sensitize emotional cues this week, helping Karka natives strengthen home comfort and supportive teamwork.',
    monthlyStrategy:
      'Prioritizing emotional boundaries alongside practical domestic planning turns sensitivity into protective leadership this month.',
    yearlyArc:
      'Across 2026, home establishment, respected mentoring, and serene personal security unfold naturally for Cancer.'
  },
  leo: {
    nakshatras: 'Magha, Purva Phalguni, and Uttara Phalguni (first pada)',
    karakaPlanet: 'Surya (Sun)',
    bodyZone: 'spinal posture, heart stamina, and sunlit vitality',
    sacredRemedy: 'Offer Surya Arghya in a copper vessel at sunrise to sustain clarity, dignity, and warm leadership.',
    dailyGuidance:
      'Lead by uplifting teammates and recognizing effort generously; quiet confidence commands respect effortlessly today.',
    weeklyTheme:
      'Solar vitality illuminates creative ownership and visible milestones when tempered with attentive listening.',
    monthlyStrategy:
      'Simha natives shine brightest this month when bold creative vision is anchored in transparent delegation and budget discipline.',
    yearlyArc:
      '2026 stands as a year of dignified authority, public recognition, and creative legacy-building for Leo.'
  },
  virgo: {
    nakshatras: 'Uttara Phalguni (latter padas), Hasta, and Chitra',
    karakaPlanet: 'Budha (Mercury)',
    bodyZone: 'digestive balance, gut calm, and nervous poise',
    sacredRemedy: 'Offer green moong or recite Budha Gayatri on Wednesday morning for serene analytical focus.',
    dailyGuidance:
      'Tidying one overdue detail early clears disproportionate mental space and sets a calm cadence for the rest of your day.',
    weeklyTheme:
      'Precision and methodical service carry Kanya natives smoothly through technical reviews and collaborative checkpoints.',
    monthlyStrategy:
      'Refining health routines, financial ledgers, and operational systems yields reliable peace of mind across the month.',
    yearlyArc:
      'In 2026, specialized craft, quiet dependability, and sustainable wellness convert patience into durable prosperity.'
  },
  libra: {
    nakshatras: 'Chitra (latter padas), Swati, and Vishakha',
    karakaPlanet: 'Shukra (Venus)',
    bodyZone: 'lower-back ease, kidney hydration, and inner poise',
    sacredRemedy: 'Light a pure ghee lamp on Friday evening and keep sacred spaces fragrant to harmonize Shukra.',
    dailyGuidance:
      'Weigh fairness without delaying simple decisions; clarity spoken kindly brings immediate relief to partnerships.',
    weeklyTheme:
      'Diplomatic grace smooths client negotiations and renews warmth in personal bonds when your own boundaries stay clear.',
    monthlyStrategy:
      'Tula natives prosper this month through equitable contracts, curated aesthetics, and balanced work-rest pacing.',
    yearlyArc:
      '2026 brings milestone partnerships, artistic recognition, and poised financial balance to Libra.'
  },
  scorpio: {
    nakshatras: 'Vishakha (final pada), Anuradha, and Jyeshtha',
    karakaPlanet: 'Mangal (Mars) & Ketu',
    bodyZone: 'deep recovery, detox hydration, and emotional release',
    sacredRemedy: 'Recite Rudrashtakam or offer red sandalwood tilak on Tuesday to transform intensity into resilience.',
    dailyGuidance:
      'Observe patterns quietly before speaking; one thoughtful question reveals more than prolonged debate today.',
    weeklyTheme:
      'Focused determination rewards Vrishchika natives tackling complex research, financial restructuring, or heartfelt healing.',
    monthlyStrategy:
      'Channel transformative drive into clearing hidden dues, deepening loyal intimacy, and executing confidential milestones.',
    yearlyArc:
      'Across 2026, strategic depth and resilient reinvention place Scorpio in positions of quiet, lasting influence.'
  },
  sagittarius: {
    nakshatras: 'Mula, Purva Ashadha, and Uttara Ashadha (first pada)',
    karakaPlanet: 'Brihaspati (Jupiter)',
    bodyZone: 'hip mobility, liver vitality, and brisk outdoor energy',
    sacredRemedy: 'Apply a mild saffron or turmeric tilak on Thursday morning and honour teachers for Brihaspati’s grace.',
    dailyGuidance:
      'Pair your uplifting long-range vision with one realistic step completed before dusk to keep momentum grounded.',
    weeklyTheme:
      'Guru’s optimistic current expands learning, mentoring, and travel planning when timelines remain practical.',
    monthlyStrategy:
      'Dhanu natives thrive this month by investing in credentials, cross-regional dialogue, and ethical long-term strategy.',
    yearlyArc:
      '2026 blesses Sagittarius with Dharmic expansion, higher wisdom, influential mentorship, and enriching journeys.'
  },
  capricorn: {
    nakshatras: 'Uttara Ashadha (latter padas), Shravana, and Dhanishta',
    karakaPlanet: 'Shani (Saturn)',
    bodyZone: 'knee joints, skeletal posture, and steady endurance',
    sacredRemedy: 'Light a sesame-oil diya near a Peepal tree or serve elders respectfully on Saturday evening.',
    dailyGuidance:
      'Honour steady pacing rather than forcing overnight leaps; methodical steps today lay rock-solid groundwork.',
    weeklyTheme:
      'Saturnine focus strengthens institutional trust and financial stewardship when paired with deliberate evening rest.',
    monthlyStrategy:
      'Makara natives consolidate lasting respect this month through structured delegation, asset review, and unhurried dedication.',
    yearlyArc:
      '2026 rewards Capricorn’s patience with landmark authority, durable wealth architecture, and serene maturity.'
  },
  aquarius: {
    nakshatras: 'Dhanishta (latter padas), Shatabhisha, and Purva Bhadrapada',
    karakaPlanet: 'Shani (Saturn) & Rahu',
    bodyZone: 'ankle circulation, sleep hygiene, and nerve calm',
    sacredRemedy: 'Offer water and black sesame or donate warm essentials on Saturday to channel Shani constructively.',
    dailyGuidance:
      'Test fresh ideas against simple practical constraints before pitching; grounded originality wins immediate support.',
    weeklyTheme:
      'Kumbha natives see inventive breakthroughs through community dialogue, tech upgrades, and disciplined execution.',
    monthlyStrategy:
      'Balancing progressive collaboration with clear personal budgets unlocks clean forward momentum this month.',
    yearlyArc:
      'In 2026, visionary problem-solving and authentic networks elevate Aquarius into respected thought leadership.'
  },
  pisces: {
    nakshatras: 'Purva Bhadrapada (final pada), Uttara Bhadrapada, and Revati',
    karakaPlanet: 'Brihaspati (Jupiter)',
    bodyZone: 'foot comfort, restorative sleep, and lymphatic calm',
    sacredRemedy: 'Chant Om Namo Bhagavate Vasudevaya on Thursday morning to anchor intuitive inspiration in peace.',
    dailyGuidance:
      'Keep creative inspiration anchored in written notes and unhurried conversations; gentle focus avoids overwhelm.',
    weeklyTheme:
      'Compassionate insight helps Meena natives resolve delicate human dynamics and produce soulful work this week.',
    monthlyStrategy:
      'Pair spiritual reflection with clean financial tracking and explicit timelines to manifest long-held creative aspirations.',
    yearlyArc:
      '2026 unfolds as a year of spiritual maturity, artistic recognition, and serene emotional fulfillment for Pisces.'
  }
};

export interface DetailedNarrativeSection {
  heading: string;
  paragraph: string;
}

function stripTrailingPunctuation(text: string): string {
  return text.trim().replace(/[.?!]+$/, '');
}

function lowerFirst(text: string): string {
  const trimmed = text.trim();
  if (!trimmed) return trimmed;
  return trimmed.charAt(0).toLowerCase() + trimmed.slice(1);
}

export function getPeriodDetailedSections(
  profile: ZodiacHoroscopeProfile,
  period: HoroscopePeriod
): DetailedNarrativeSection[] {
  const traits = SIGN_TRAITS[profile.id];

  if (period === 'Daily') {
    return [
      {
        heading: `${profile.name} (${profile.vedicName} Rashi) Daily Lunar Alignment`,
        paragraph: `For ${profile.name} (${profile.vedicName} Rashi), governed by ${traits.karakaPlanet} and spanning ${traits.nakshatras}, today invites steady presence across practical responsibilities and personal relationships. ${profile.daily.overall} ${traits.dailyGuidance}`
      },
      {
        heading: 'Career, Finances & Work Priorities',
        paragraph: `In professional and financial matters, ${lowerFirst(profile.daily.career)} Alongside this, ${lowerFirst(profile.daily.finance)} Keeping written clarity before major commitments prevents avoidable friction while preserving productive focus.`
      },
      {
        heading: 'Relationships, Family, Health & Daily Remedy',
        paragraph: `On the personal front, ${lowerFirst(profile.daily.love)} ${profile.daily.family} Tend to ${traits.bodyZone}—${lowerFirst(profile.daily.health)} Vedic tip from Hanish Bagga: ${traits.sacredRemedy}`
      }
    ];
  }

  if (period === 'Weekly') {
    return [
      {
        heading: `${profile.name} (${profile.vedicName} Rashi) Weekly Planetary Rhythm`,
        paragraph: `This week’s planetary rhythm for ${profile.name} (${profile.vedicName} Rashi) emphasizes balanced execution under ${traits.karakaPlanet}. ${profile.weekly.overall} ${traits.weeklyTheme}`
      },
      {
        heading: 'Work & Wealth Outlook',
        paragraph: `${profile.weekly.career} Financially, ${lowerFirst(profile.weekly.finance)} Scheduling key meetings during auspicious midday windows such as Abhijit Muhurat sharpens constructive outcomes while avoiding rushed decisions during Rahu Kaal.`
      },
      {
        heading: 'Relationships, Home & Wellness',
        paragraph: `${profile.weekly.love} ${profile.weekly.family} With focus on ${traits.bodyZone}, ${lowerFirst(profile.weekly.health)} Align your week thoughtfully: ${traits.sacredRemedy}`
      }
    ];
  }

  if (period === 'Monthly') {
    return [
      {
        heading: `${profile.name} (${profile.vedicName} Rashi) Monthly Planning Phase`,
        paragraph: `Across this month, ${profile.name} (${profile.vedicName} Rashi) moves through a meaningful planning phase shaped by ${profile.rulingPlanet} and ${profile.element} element dynamics. ${profile.monthly.overview} ${traits.monthlyStrategy}`
      },
      {
        heading: 'Career, Business & Prosperity',
        paragraph: `${profile.monthly.careerBusiness} On the financial ledger, ${lowerFirst(profile.monthly.moneyFinance)} Key windows of opportunity centre on ${stripTrailingPunctuation(lowerFirst(profile.monthly.opportunities))}, provided you stay mindful of things to avoid: ${lowerFirst(profile.monthly.avoid)}`
      },
      {
        heading: 'Relationships, Family & Well-Being',
        paragraph: `${profile.monthly.loveMarriage} Within household affairs, ${lowerFirst(profile.monthly.familyRelationships)} Supporting ${traits.bodyZone}, ${lowerFirst(profile.monthly.health)} Guided remedy: ${traits.sacredRemedy}`
      }
    ];
  }

  return [
    {
      heading: `Annual Vedic Outlook for ${profile.name} (${profile.vedicName} Rashi)`,
      paragraph: `Governed by ${traits.karakaPlanet} across ${traits.nakshatras}, 2026 unfolds as a strategic chapter. ${profile.yearly.overview} ${traits.yearlyArc}`
    },
    {
      heading: 'Career Elevation, Enterprise & Wealth Architecture',
      paragraph: `${profile.yearly.careerGrowth} Business natives see that ${lowerFirst(profile.yearly.business)} Financially, ${lowerFirst(profile.yearly.moneyWealth)} Peak harvest months (${profile.yearly.bestMonths}) strongly reward prepared initiatives around ${stripTrailingPunctuation(lowerFirst(profile.yearly.opportunities))}, while patience pays off during tighter intervals: ${lowerFirst(profile.yearly.challengingPeriods)}`
    },
    {
      heading: 'Love, Marriage, Family & Education',
      paragraph: `In matters of the heart, ${lowerFirst(profile.yearly.loveRelationships)} ${profile.yearly.marriage} At home, ${lowerFirst(profile.yearly.family)} Students and scholars notice that ${lowerFirst(profile.yearly.education)} Additionally, ${lowerFirst(profile.yearly.travel)}`
    },
    {
      heading: 'Vitality & Personalized Jyotish Guidance',
      paragraph: `Caring for ${traits.bodyZone}, ${lowerFirst(profile.yearly.healthWellness)} Because transits interact uniquely with your Natal Moon, Lagna, and running Mahadasha-Antardasha, pair these Rashi insights with simple observance: ${traits.sacredRemedy}`
    }
  ];
}

export function getPeriodDetailedPrediction(
  profile: ZodiacHoroscopeProfile,
  period: HoroscopePeriod
): string[] {
  return getPeriodDetailedSections(profile, period).map((section) => section.paragraph);
}
