export type HoroscopePeriod = 'Daily' | 'Weekly' | 'Monthly' | 'Yearly';

export type ZodiacId =
  | 'aries'
  | 'taurus'
  | 'gemini'
  | 'cancer'
  | 'leo'
  | 'virgo'
  | 'libra'
  | 'scorpio'
  | 'sagittarius'
  | 'capricorn'
  | 'aquarius'
  | 'pisces';

export interface DailyHoroscopeData {
  overall: string;
  career: string;
  love: string;
  finance: string;
  health: string;
  family: string;
  luckyNumber: number;
  luckyColour: string;
  luckyColourHex: string;
}

export interface WeeklyHoroscopeData {
  overall: string;
  career: string;
  love: string;
  finance: string;
  health: string;
  family: string;
  luckyNumber: number;
  luckyColour: string;
  luckyColourHex: string;
}

export interface MonthlyHoroscopeData {
  overview: string;
  careerBusiness: string;
  loveMarriage: string;
  moneyFinance: string;
  health: string;
  familyRelationships: string;
  opportunities: string;
  avoid: string;
  luckyNumber: number;
  luckyColour: string;
  luckyColourHex: string;
}

export interface YearlyHoroscopeData {
  overview: string;
  careerGrowth: string;
  business: string;
  loveRelationships: string;
  marriage: string;
  moneyWealth: string;
  healthWellness: string;
  family: string;
  education: string;
  travel: string;
  opportunities: string;
  challengingPeriods: string;
  bestMonths: string;
  luckyNumber: number;
  luckyColour: string;
  luckyColourHex: string;
}

export interface ZodiacHoroscopeProfile {
  id: ZodiacId;
  name: string;
  vedicName: string;
  glyph: string;
  dateRange: string;
  element: 'Fire' | 'Earth' | 'Air' | 'Water';
  rulingPlanet: string;
  planetaryInsight: string;
  daily: DailyHoroscopeData;
  weekly: WeeklyHoroscopeData;
  monthly: MonthlyHoroscopeData;
  yearly: YearlyHoroscopeData;
}

export const HOROSCOPE_PERIODS: HoroscopePeriod[] = ['Daily', 'Weekly', 'Monthly', 'Yearly'];

export const ZODIAC_HOROSCOPES: ZodiacHoroscopeProfile[] = [
  {
    id: 'aries',
    name: 'Aries',
    vedicName: 'Mesha',
    glyph: '♈\uFE0E',
    dateRange: 'Mar 21 – Apr 19',
    element: 'Fire',
    rulingPlanet: 'Mars',
    planetaryInsight:
      'Mars energizes initiative and decisive leadership; tempering impulse with steady timing multiplies lasting gains.',
    daily: {
      overall: 'A positive day for focused decisions and steady progress.',
      career: 'Good opportunities may come through communication and planning.',
      love: 'Keep communication clear and avoid unnecessary misunderstandings.',
      finance: 'Control unnecessary spending and focus on practical decisions.',
      health: 'Maintain proper rest, hydration and a balanced routine.',
      family: 'A calm conversation can improve family relationships.',
      luckyNumber: 6,
      luckyColour: 'Gold',
      luckyColourHex: '#d4a24c'
    },
    weekly: {
      overall: 'Strong early-week momentum favours initiating pending tasks with calm discipline and clear priorities.',
      career: 'Mid-week meetings highlight your problem-solving strengths; document commitments before taking on extra duties.',
      love: 'Honest dialogue deepens mutual trust, while planned quality time softens recent emotional tension.',
      finance: 'Inflows remain steady, though impulsive lifestyle purchases should wait until weekend budgeting is complete.',
      health: 'Channel excess energy into morning walks and protect sleep consistency during busy mid-week hours.',
      family: 'Supportive guidance from an elder brings clarity around a household plan or upcoming gathering.',
      luckyNumber: 9,
      luckyColour: 'Maroon',
      luckyColourHex: '#8c222a'
    },
    monthly: {
      overview: 'A productive cycle combining bold execution with measured planning across career and household goals.',
      careerBusiness: 'New leadership responsibilities and client pitches gain traction after the second week with strong follow-through.',
      loveMarriage: 'Sincere gestures restore warmth for couples, while singles attract grounded, expressive conversations.',
      moneyFinance: 'Steady earnings support clearing small dues and shifting surplus funds into structured long-term savings.',
      health: 'Stamina remains brisk when balanced with hydration, lighter evening meals, and screen-free rest.',
      familyRelationships: 'Shared celebrations or travel planning strengthen bonds across siblings and extended relatives.',
      opportunities: 'Recognition from seniors, skill certification, and strategic professional networking.',
      avoid: 'Hasty verbal reactions during tense deadlines and unverified financial shortcuts.',
      luckyNumber: 1,
      luckyColour: 'Crimson',
      luckyColourHex: '#9e262e'
    },
    yearly: {
      overview: 'A transformative year of structured ambition where disciplined courage converts into visible authority.',
      careerGrowth: 'Promotions, role expansions, and decisive career pivots accelerate noticeably after spring.',
      business: 'Measured expansion into reliable partnerships yields stronger margins than hurried solo ventures.',
      loveRelationships: 'Emotional maturity replaces fleeting friction, inviting deeper commitment and transparent affection.',
      marriage: 'Favourable planetary windows support harmonious engagement decisions and renewed domestic stability.',
      moneyWealth: 'Multiple revenue channels mature gradually; property or fixed-asset planning looks promising mid-year.',
      healthWellness: 'Consistent fitness habits prevent stress fatigue and sustain high vitality through busy quarters.',
      family: 'Domestic peace deepens as long-pending property or elder-care responsibilities settle constructively.',
      education: 'Competitive exams, technical certifications, and leadership programs bring rewarding outcomes.',
      travel: 'Purposeful work journeys and spiritually uplifting family pilgrimages enrich the third quarter.',
      opportunities: 'Executive visibility, venture collaborations, and timely asset consolidation.',
      challengingPeriods: 'Late summer demands patience around workload pace and careful reading of contract terms.',
      bestMonths: 'March, July, November',
      luckyNumber: 9,
      luckyColour: 'Antique Gold',
      luckyColourHex: '#d4a24c'
    }
  },
  {
    id: 'taurus',
    name: 'Taurus',
    vedicName: 'Vrishabha',
    glyph: '♉\uFE0E',
    dateRange: 'Apr 20 – May 20',
    element: 'Earth',
    rulingPlanet: 'Venus',
    planetaryInsight:
      'Venus blesses aesthetic judgement, financial steadiness, and serene devotion when paired with adaptability.',
    daily: {
      overall: 'Calm persistence brings reliable closure to pending priorities.',
      career: 'Methodical effort earns quiet appreciation from key decision-makers.',
      love: 'Thoughtful gestures speak louder than grand promises today.',
      finance: 'Favourable time for reviewing savings and pruning recurring costs.',
      health: 'Gentle stretching and mindful meals support digestive comfort.',
      family: 'Warm hospitality turns an ordinary evening into a cherished memory.',
      luckyNumber: 2,
      luckyColour: 'Emerald',
      luckyColourHex: '#1d6b52'
    },
    weekly: {
      overall: 'Practical decisions bring tangible comfort this week, especially where patience replaces stubborn delays.',
      career: 'Collaborative projects progress smoothly when expectations and timelines are outlined clearly on Monday.',
      love: 'Affectionate consistency bridges small differences and brings reassuring stability to close bonds.',
      finance: 'Steady cash flow favours sensible asset planning rather than speculative high-risk commitments.',
      health: 'Throat comfort, warm herbal hydration, and regular sleep cycles keep energy grounded.',
      family: 'Constructive discussions around home improvements or shared finances reach peaceful agreement.',
      luckyNumber: 6,
      luckyColour: 'Cream Gold',
      luckyColourHex: '#e0c079'
    },
    monthly: {
      overview: 'Resourcefulness and artistic clarity refine both professional standing and personal comfort.',
      careerBusiness: 'Creative proposals, client retention, and design-led ventures see encouraging commercial response.',
      loveMarriage: 'Mutual respect deepens in marriage while new romantic connections value sincerity over haste.',
      moneyFinance: 'Pending reimbursements clear up, giving room to strengthen emergency reserves and steady portfolios.',
      health: 'Balanced nutrition and moderate daily cardio offset sedentary desk hours effectively.',
      familyRelationships: 'Peaceful dialogue resolves minor generational differences and strengthens home harmony.',
      opportunities: 'Long-term client retainers, value-oriented property reviews, and creative recognition.',
      avoid: 'Resisting helpful schedule updates or overspending on luxury impulse items.',
      luckyNumber: 5,
      luckyColour: 'Deep Teal',
      luckyColourHex: '#185c52'
    },
    yearly: {
      overview: 'A year of grounded prosperity, rewarding patience with enduring financial and emotional security.',
      careerGrowth: 'Steady upward recognition rewards reliability, specialized craft, and calm crisis handling.',
      business: 'Trusted repeat clientele and refined service quality drive predictable year-on-year profit growth.',
      loveRelationships: 'Slow-building trust blooms into loyal companionship anchored in shared daily values.',
      marriage: 'Auspicious periods favour wedding planning, home upgrades, and deeper spousal understanding.',
      moneyWealth: 'Consistent compounding, prudent real estate choices, and disciplined debt reduction flourish.',
      healthWellness: 'Holistic pacing, mindful eating, and neck-shoulder mobility keep vitality resilient.',
      family: 'Family milestones bring collective pride and stronger emotional support across generations.',
      education: 'Applied arts, finance, architecture, and research tracks reward dedicated study schedules.',
      travel: 'Scenic leisure retreats and comfortable family visits refresh perspective mid-year.',
      opportunities: 'Wealth accumulation, creative patronage, and long-term home establishment.',
      challengingPeriods: 'Early autumn asks for flexibility during sudden team reorganizations.',
      bestMonths: 'April, August, December',
      luckyNumber: 6,
      luckyColour: 'Emerald Green',
      luckyColourHex: '#1d6b52'
    }
  },
  {
    id: 'gemini',
    name: 'Gemini',
    vedicName: 'Mithuna',
    glyph: '♊\uFE0E',
    dateRange: 'May 21 – Jun 20',
    element: 'Air',
    rulingPlanet: 'Mercury',
    planetaryInsight:
      'Mercury sharpens intellect, negotiation, and curiosity; focusing attention on one priority yields mastery.',
    daily: {
      overall: 'Alert thinking helps you connect ideas and people effortlessly.',
      career: 'A timely email or pitch opens an encouraging professional door.',
      love: 'Playful honesty keeps conversations light, open, and engaging.',
      finance: 'Compare fine print carefully before renewing subscriptions today.',
      health: 'Short screen breaks protect mental clarity and ease eye strain.',
      family: 'Sharing news with siblings sparks cheerful collaborative plans.',
      luckyNumber: 5,
      luckyColour: 'Royal Blue',
      luckyColourHex: '#2c54a3'
    },
    weekly: {
      overall: 'Dynamic exchanges bring fresh momentum; prioritize completing your top two goals before branching out.',
      career: 'Presentations, writing, and negotiations shine when backed by concise data and crisp follow-up.',
      love: 'Curious questions and attentive listening revive spark and prevent scattered assumptions.',
      finance: 'Minor side income or consulting leads appear; track small daily expenses diligently.',
      health: 'Pranayama breathing exercises calm mental restlessness and promote deeper nightly sleep.',
      family: 'Lively catch-ups bridge distance with relatives, though avoid overpromising weekend errands.',
      luckyNumber: 3,
      luckyColour: 'Sapphire',
      luckyColourHex: '#254a91'
    },
    monthly: {
      overview: 'Intellectual agility opens networking avenues while teaching the value of selective focus.',
      careerBusiness: 'Media, consulting, software, and trade initiatives thrive through smart alliances and clear briefs.',
      loveMarriage: 'Shared hobbies and short weekend outings inject freshness into long-term partnerships.',
      moneyFinance: 'Diversified earnings look positive once overdue invoices and paperwork are organized promptly.',
      health: 'Regular meal timings and shoulder stretches prevent nervous fatigue during travel-heavy weeks.',
      familyRelationships: 'Younger family members look to your advice on academic or career choices.',
      opportunities: 'Speaking invitations, cross-functional projects, and digital commerce growth.',
      avoid: 'Committing to overlapping schedules or reacting before verifying full facts.',
      luckyNumber: 5,
      luckyColour: 'Antique Gold',
      luckyColourHex: '#d4a24c'
    },
    yearly: {
      overview: 'A versatile year of learning, mobility, and strategic communication that expands your sphere of influence.',
      careerGrowth: 'Advisory roles, communications leadership, and skill-based transitions boost visibility.',
      business: 'Agile digital marketing and multi-city client outreach elevate brand presence significantly.',
      loveRelationships: 'Mental compatibility becomes the cornerstone of lasting romance and joyful companionship.',
      marriage: 'Open dialogue dissolves old routines and invites shared travel and intellectual growth.',
      moneyWealth: 'Smart liquidity planning and consulting retainers strengthen savings across the second half.',
      healthWellness: 'Balancing mental stimulation with quiet outdoor walks protects nervous-system calm.',
      family: 'Frequent gatherings and milestone celebrations keep sibling and cousin ties vibrant.',
      education: 'Languages, analytics, journalism, and short executive fellowships bring top recognition.',
      travel: 'Frequent short business trips and curiosity-led cultural travel mark a lively year.',
      opportunities: 'Publishing, strategic partnerships, and high-visibility speaking platforms.',
      challengingPeriods: 'Mid-winter warns against scattered commitments and hurried contract reviews.',
      bestMonths: 'February, June, October',
      luckyNumber: 5,
      luckyColour: 'Royal Blue',
      luckyColourHex: '#2c54a3'
    }
  },
  {
    id: 'cancer',
    name: 'Cancer',
    vedicName: 'Karka',
    glyph: '♋\uFE0E',
    dateRange: 'Jun 21 – Jul 22',
    element: 'Water',
    rulingPlanet: 'Moon',
    planetaryInsight:
      'Moon nurtures intuition and emotional wisdom; clear healthy boundaries preserve your inner peace.',
    daily: {
      overall: 'Trust quiet intuition when navigating subtle choices today.',
      career: 'Supportive teamwork steadies workflow and eases deadline pressure.',
      love: 'Gentle empathy deepens closeness without needing many words.',
      finance: 'Domestic budgeting keeps monthly savings comfortably on track.',
      health: 'Warm fluids and an early bedtime restore emotional balance.',
      family: 'Nurturing attention brings comfort to parents or younger kin.',
      luckyNumber: 2,
      luckyColour: 'Pearl',
      luckyColourHex: '#e8e2d5'
    },
    weekly: {
      overall: 'A soothing week for strengthening home roots while advancing meaningful professional responsibilities steadily.',
      career: 'People-centric leadership wins loyalty; keep sensitive project plans private until finalized.',
      love: 'Vulnerable honesty clears lingering doubts and invites genuine tenderness from your partner.',
      finance: 'Review household bills calmly; a practical adjustment frees funds for upcoming family needs.',
      health: 'Evening meditation and gentle yoga soothe mood fluctuations and support digestion.',
      family: 'Heartfelt talks over shared meals reconnect generations and settle minor domestic worries.',
      luckyNumber: 7,
      luckyColour: 'Silver Gold',
      luckyColourHex: '#cbbd9f'
    },
    monthly: {
      overview: 'Emotional clarity pairs with disciplined protection of home, assets, and long-term commitments.',
      careerBusiness: 'Hospitality, education, care services, and advisory businesses attract loyal word-of-mouth.',
      loveMarriage: 'Emotional security deepens; honest planning around living spaces brings couples closer.',
      moneyFinance: 'Prudent savings and cautious home-related investments build steady peace of mind.',
      health: 'Prioritize hydration, restorative sleep, and calm breathing routines on demanding days.',
      familyRelationships: 'Reunions or ancestral traditions bring warmth and a renewed sense of belonging.',
      opportunities: 'Property improvements, supportive mentorship, and emotionally fulfilling collaborations.',
      avoid: 'Absorbing others’ stress unnecessarily or making decisions solely out of nostalgia.',
      luckyNumber: 2,
      luckyColour: 'Emerald',
      luckyColourHex: '#1d6b52'
    },
    yearly: {
      overview: 'A deeply nourishing year centered on home stability, emotional maturity, and quiet career elevation.',
      careerGrowth: 'Trusted mentorship and consistent empathy place you in respected decision-making circles.',
      business: 'Community goodwill and personalized client care create resilient recurring revenue.',
      loveRelationships: 'Authentic emotional bonds deepen, welcoming soulful intimacy and mutual protection.',
      marriage: 'Supportive planetary currents favour home-buying, family planning, and tranquil partnership.',
      moneyWealth: 'Steady property appreciation and conservative wealth preservation outshine risky bets.',
      healthWellness: 'Consistent emotional rest, swimming or walking, and gut-friendly diets keep energy vibrant.',
      family: 'Joyous home celebrations and improved parental wellness bring heartfelt gratitude.',
      education: 'Psychology, medicine, humanities, and foundational degrees enjoy strong concentration.',
      travel: 'Peaceful coastal retreats and meaningful visits to ancestral towns restore spirit.',
      opportunities: 'Real estate stability, trusted advisory roles, and lasting emotional harmony.',
      challengingPeriods: 'Late spring urges clear work-life boundaries to prevent emotional burnout.',
      bestMonths: 'January, May, September',
      luckyNumber: 2,
      luckyColour: 'Warm Pearl',
      luckyColourHex: '#e6dcc8'
    }
  },
  {
    id: 'leo',
    name: 'Leo',
    vedicName: 'Simha',
    glyph: '♌\uFE0E',
    dateRange: 'Jul 23 – Aug 22',
    element: 'Fire',
    rulingPlanet: 'Sun',
    planetaryInsight:
      'Surya bestows radiance, confidence, and noble purpose; leading with generosity inspires lasting loyalty.',
    daily: {
      overall: 'Confident warmth helps you inspire progress around you.',
      career: 'Creative initiative sets your work apart in team discussions.',
      love: 'Appreciating your partner’s efforts sparks immediate joy.',
      finance: 'Focus on high-value priorities rather than showy impulse spends.',
      health: 'Morning sunlight and brisk movement elevate stamina naturally.',
      family: 'Cheerful leadership rallies everyone around an upcoming plan.',
      luckyNumber: 1,
      luckyColour: 'Antique Gold',
      luckyColourHex: '#d4a24c'
    },
    weekly: {
      overall: 'Creative authority takes center stage this week when paired with gracious listening to teammates.',
      career: 'A bold presentation or client pitch earns senior backing; refine metrics before presenting.',
      love: 'Generous warmth rekindles romance, though sharing the spotlight keeps harmony balanced.',
      finance: 'Steady rewards follow disciplined effort; review tax or investment allocations carefully.',
      health: 'Heart-healthy cardio and back-posture care sustain bright physical vitality all week.',
      family: 'Children or younger relatives flourish under your encouraging presence and playful guidance.',
      luckyNumber: 1,
      luckyColour: 'Deep Maroon',
      luckyColourHex: '#7d1922'
    },
    monthly: {
      overview: 'Visibility and creative leadership peak, opening respected platforms in work and social life.',
      careerBusiness: 'Management promotions, brand launches, and independent ventures gather prestigious momentum.',
      loveMarriage: 'Passionate warmth returns when ego steps aside for sincere appreciation and shared fun.',
      moneyFinance: 'Bonus prospects or stronger client fees arrive alongside a need for disciplined wealth allocation.',
      health: 'Keep hydration high and balance intense workouts with restorative stretching.',
      familyRelationships: 'Honouring elders while celebrating younger milestones fosters joyful domestic pride.',
      opportunities: 'Public recognition, creative direction roles, and influential alliances.',
      avoid: 'Overextending finances for appearances or dismissing constructive team feedback.',
      luckyNumber: 4,
      luckyColour: 'Sun Gold',
      luckyColourHex: '#dba63b'
    },
    yearly: {
      overview: 'A commanding year of dignified leadership, creative milestones, and earned public respect.',
      careerGrowth: 'Senior management elevations and high-stakes ownership projects highlight your strengths.',
      business: 'Premium positioning and authoritative branding win influential enterprise clients.',
      loveRelationships: 'Vibrant romance matures into proud, mutually supportive partnership.',
      marriage: 'Celebratory family gatherings and renewed shared purpose brighten marital life.',
      moneyWealth: 'Strong earning surges reward strategic reinvestment into lasting tangible assets.',
      healthWellness: 'Structured heart-rate training and stress-free Sundays keep energy radiant.',
      family: 'Family status rises through collective achievements and thoughtful parental care.',
      education: 'Performing arts, governance, law, and executive management bring standout honours.',
      travel: 'High-profile work conferences and memorable celebratory family holidays stand out.',
      opportunities: 'Leadership elevation, flagship launches, and prestigious honours.',
      challengingPeriods: 'Late winter asks for diplomatic patience when navigating authority clashes.',
      bestMonths: 'March, August, November',
      luckyNumber: 1,
      luckyColour: 'Antique Gold',
      luckyColourHex: '#d4a24c'
    }
  },
  {
    id: 'virgo',
    name: 'Virgo',
    vedicName: 'Kanya',
    glyph: '♍\uFE0E',
    dateRange: 'Aug 23 – Sep 22',
    element: 'Earth',
    rulingPlanet: 'Mercury',
    planetaryInsight:
      'Mercury refines discernment, craft, and healing service; embracing small imperfections keeps momentum joyful.',
    daily: {
      overall: 'Quiet organization turns a busy schedule into smooth execution.',
      career: 'Precision on detail prevents delays and earns team trust.',
      love: 'Small helpful acts communicate care better than critique.',
      finance: 'Auditing routine expenses uncovers welcome monthly savings.',
      health: 'Fresh home-cooked nourishment supports steady afternoon energy.',
      family: 'Organizing shared errands brings calm relief to household routines.',
      luckyNumber: 5,
      luckyColour: 'Dark Emerald',
      luckyColourHex: '#155442'
    },
    weekly: {
      overall: 'Structured systems multiply productivity this week, leaving welcome breathing room by Friday evening.',
      career: 'Analytical reports, audits, and technical workflows succeed through your calm attention to accuracy.',
      love: 'Softening perfectionism invites relaxed affection and honest appreciation between partners.',
      finance: 'Practical budgeting and timely bill settlements keep accounts spotless and stress-free.',
      health: 'Consistent meal timing, fiber-rich meals, and gentle walking sustain digestive balance.',
      family: 'Thoughtful planning resolves logistical confusion around household repairs or appointments.',
      luckyNumber: 3,
      luckyColour: 'Jade Green',
      luckyColourHex: '#206b54'
    },
    monthly: {
      overview: 'Refinement, skill upgrades, and steady health habits elevate daily satisfaction and earnings.',
      careerBusiness: 'Operational efficiency and consultative problem-solving position you as the team’s anchor.',
      loveMarriage: 'Practical devotion strengthens bonds; schedule unhurried dates away from chore lists.',
      moneyFinance: 'Steady savings discipline supports clearing lingering debts and refining tax plans.',
      health: 'Ideal month for preventive checkups, posture alignment, and calm evening routines.',
      familyRelationships: 'Kind patience eases minor misunderstandings with in-laws or siblings cleanly.',
      opportunities: 'Process modernization, certification honors, and trusted advisory retainers.',
      avoid: 'Over-analyzing minor setbacks or delaying action waiting for ideal conditions.',
      luckyNumber: 5,
      luckyColour: 'Emerald',
      luckyColourHex: '#1d6b52'
    },
    yearly: {
      overview: 'A rewarding year of steady mastery where quiet discipline yields measurable prosperity and wellness.',
      careerGrowth: 'Specialist expertise, healthcare, analytics, and operational leadership earn strong advancement.',
      business: 'Lean systems, quality assurance, and loyal B2B contracts steadily widen profit margins.',
      loveRelationships: 'Sincere dependability deepens intimacy as emotional trust grows beyond surface expectations.',
      marriage: 'Practical teamwork around finances and wellness builds a serene marital rhythm.',
      moneyWealth: 'Methodical saving, low-risk compounding, and clean accounting solidify financial comfort.',
      healthWellness: 'Sustainable daily habits deliver noticeable stamina and digestive resilience.',
      family: 'Orderly care of elders and home maintenance brings quiet domestic harmony.',
      education: 'Medical, scientific, accounting, and coding programs see exceptional precision and grades.',
      travel: 'Well-planned wellness retreats and tidy regional work trips run smoothly.',
      opportunities: 'Specialist recognition, sustainable wealth habits, and transformative wellness.',
      challengingPeriods: 'Spring invites releasing worry over outcomes outside your direct control.',
      bestMonths: 'January, June, September',
      luckyNumber: 5,
      luckyColour: 'Dark Emerald',
      luckyColourHex: '#155442'
    }
  },
  {
    id: 'libra',
    name: 'Libra',
    vedicName: 'Tula',
    glyph: '♎\uFE0E',
    dateRange: 'Sep 23 – Oct 22',
    element: 'Air',
    rulingPlanet: 'Venus',
    planetaryInsight:
      'Venus graces diplomacy, partnership balance, and refined taste; timely decisions protect harmony.',
    daily: {
      overall: 'Balanced perspective turns competing views into graceful agreement.',
      career: 'Collaborative diplomacy resolves a stalled project step smoothly.',
      love: 'Shared beauty and attentive warmth deepen romantic harmony.',
      finance: 'Weigh long-term value carefully before aesthetic purchases today.',
      health: 'Hydration and light lower-back stretching maintain steady ease.',
      family: 'Gentle mediation brings smiles back to a tense discussion.',
      luckyNumber: 6,
      luckyColour: 'Royal Blue',
      luckyColourHex: '#2c54a3'
    },
    weekly: {
      overall: 'Partnerships and refined collaborations thrive this week when you voice your own needs clearly.',
      career: 'Negotiations, client hospitality, and design approvals move swiftly through tactful consensus.',
      love: 'Romantic planning and genuine reciprocity create memorable closeness with your partner.',
      finance: 'Joint expenses benefit from calm transparency; postpone non-essential luxury splurges.',
      health: 'Balanced rest, kidney-friendly hydration, and calming music ease mid-week fatigue.',
      family: 'Beautifying shared spaces or hosting loved ones lifts household spirits wonderfully.',
      luckyNumber: 7,
      luckyColour: 'Sapphire Gold',
      luckyColourHex: '#c8a355'
    },
    monthly: {
      overview: 'Graceful partnerships and artistic polish open doors while reminding you not to defer hard choices.',
      careerBusiness: 'Joint ventures, legal settlements, and aesthetic brands flourish through fair agreements.',
      loveMarriage: 'Commitment milestones look auspicious as couples align gracefully on shared lifestyle goals.',
      moneyFinance: 'Balanced income matches steady saving when shared budgets stay transparent.',
      health: 'Alternating social evenings with quiet solo rest keeps energy centered and glowing.',
      familyRelationships: 'Warm peacemaking heals lingering distance among relatives effortlessly.',
      opportunities: 'Strategic business alliances, design commissions, and legal clarity.',
      avoid: 'Procrastinating key choices simply to keep everyone temporarily pleased.',
      luckyNumber: 6,
      luckyColour: 'Royal Blue',
      luckyColourHex: '#2c54a3'
    },
    yearly: {
      overview: 'A luminous year of harmonious alliances, elevated refinement, and decisive personal growth.',
      careerGrowth: 'Law, diplomacy, design, and client-facing leadership experience strong recognition.',
      business: 'Well-structured partnerships and luxury or advisory positioning expand market prestige.',
      loveRelationships: 'Deep reciprocity replaces one-sided compromises, nurturing joyful equality.',
      marriage: 'Exceptionally supportive transits favour joyous weddings and renewed marital romance.',
      moneyWealth: 'Balanced portfolio diversification and collaborative ventures enhance net worth steadily.',
      healthWellness: 'Consistent yoga, balanced hydration, and serene sleep habits safeguard vitality.',
      family: 'Artistic milestones and cordial family reunions enrich household warmth all year.',
      education: 'Design, law, international relations, and humanities achieve distinguished results.',
      travel: 'Cultural capitals, art festivals, and romantic getaways colour the second half.',
      opportunities: 'High-trust partnerships, aesthetic acclaim, and harmonious wealth creation.',
      challengingPeriods: 'Early summer advises firmer personal boundaries in over-demanding friendships.',
      bestMonths: 'February, May, October',
      luckyNumber: 6,
      luckyColour: 'Sapphire Blue',
      luckyColourHex: '#23478c'
    }
  },
  {
    id: 'scorpio',
    name: 'Scorpio',
    vedicName: 'Vrishchika',
    glyph: '♏\uFE0E',
    dateRange: 'Oct 23 – Nov 21',
    element: 'Water',
    rulingPlanet: 'Mars',
    planetaryInsight:
      'Mars and Ketu deepen strategic insight and inner resilience; trusting transparency brings liberation.',
    daily: {
      overall: 'Quiet determination cuts straight through surface distractions today.',
      career: 'Deep research uncovers a key solution colleagues overlooked.',
      love: 'Sincere trust grows when guardedness yields to honest sharing.',
      finance: 'Review insurance, taxes, or shared accounts with sharp focus.',
      health: 'Detoxifying hydration and deep breathing refresh inner vitality.',
      family: 'Patient listening uncovers what a loved one truly needs.',
      luckyNumber: 9,
      luckyColour: 'Deep Maroon',
      luckyColourHex: '#7d1922'
    },
    weekly: {
      overall: 'Strategic depth guides purposeful transformation this week; act quietly until plans are solid.',
      career: 'Complex investigations, audits, and turnaround tasks showcase your unmatched persistence.',
      love: 'Intense loyalty deepens intimacy when paired with soft words instead of silent testing.',
      finance: 'Clearing hidden dues or restructuring loans saves substantial interest over time.',
      health: 'Mindful strength training and letting go of bottled stress protect restful sleep.',
      family: 'Resolving a longstanding domestic topic calmly clears heavy emotional air at home.',
      luckyNumber: 8,
      luckyColour: 'Burgundy',
      luckyColourHex: '#6b131c'
    },
    monthly: {
      overview: 'Focused renewal empowers career breakthroughs, debt clarity, and deeply authentic bonds.',
      careerBusiness: 'Research, finance, strategy, and crisis-turnaround work bring quiet but substantial respect.',
      loveMarriage: 'Magnetic closeness strengthens committed bonds when secrecy gives way to openness.',
      moneyFinance: 'Smart restructuring of investments, taxes, or joint holdings strengthens long-term resilience.',
      health: 'Prioritize restorative sleep, meditation, and steady hydration for peak recovery.',
      familyRelationships: 'Supportive loyalty steadies family during transitions around inheritance or relocation.',
      opportunities: 'High-trust strategic roles, debt elimination, and transformative mentorship.',
      avoid: 'Nursing quiet grudges or reacting with all-or-nothing intensity.',
      luckyNumber: 9,
      luckyColour: 'Deep Maroon',
      luckyColourHex: '#7d1922'
    },
    yearly: {
      overview: 'A pivotal year of silent strength, reinvention, and durable mastery over complex challenges.',
      careerGrowth: 'Deep expertise in strategy, medicine, finance, or research brings breakthrough elevation.',
      business: 'Resilient restructuring and discreet high-value deals build strong hidden reserves.',
      loveRelationships: 'Transformative honesty fosters unshakeable devotion and soulful emotional healing.',
      marriage: 'Shared resilience through change cements deep marital trust and mutual protection.',
      moneyWealth: 'Debt freedom, prudent long-horizon assets, and joint wealth gains strengthen security.',
      healthWellness: 'Regenerative routines, breathwork, and steady emotional release sustain high energy.',
      family: 'Deep protective bonds shine during pivotal family transitions and home milestones.',
      education: 'Deep research, psychology, surgery, occult sciences, and data security excel.',
      travel: 'Transformative spiritual journeys and purposeful off-the-beaten-path travel inspire.',
      opportunities: 'Executive turnaround roles, research breakthroughs, and deep financial empowerment.',
      challengingPeriods: 'Mid-autumn advises patience against power struggles with rigid peers.',
      bestMonths: 'March, July, November',
      luckyNumber: 9,
      luckyColour: 'Crimson Gold',
      luckyColourHex: '#94212a'
    }
  },
  {
    id: 'sagittarius',
    name: 'Sagittarius',
    vedicName: 'Dhanu',
    glyph: '♐\uFE0E',
    dateRange: 'Nov 22 – Dec 21',
    element: 'Fire',
    rulingPlanet: 'Jupiter',
    planetaryInsight:
      'Guru illuminates wisdom, optimism, and Dharmic expansion; pairing vision with grounded follow-through secures victory.',
    daily: {
      overall: 'Optimistic clarity opens uplifting conversations and broader horizons.',
      career: 'Mentoring or big-picture planning inspires strong team buy-in.',
      love: 'Warm humour and shared adventures keep love joyful today.',
      finance: 'Invest in practical learning rather than over-optimistic risks.',
      health: 'Outdoor brisk walks boost mood and leg vitality.',
      family: 'Lively storytelling brings wisdom and laughter to the dinner table.',
      luckyNumber: 3,
      luckyColour: 'Antique Gold',
      luckyColourHex: '#d4a24c'
    },
    weekly: {
      overall: 'Expansive energy fuels learning, travel planning, and encouraging breakthroughs across goals.',
      career: 'Publishing, teaching, legal guidance, and global teams respond warmly to your vision.',
      love: 'Honest enthusiasm refreshes long-term ties and invites spontaneous weekend explorations.',
      finance: 'Review long-range goals calmly; verify fine details before signing speculative agreements.',
      health: 'Active outdoor sports and stretching keep hips and lower energy buoyant.',
      family: 'Philosophical patience settles minor differences and fosters cheerful optimism at home.',
      luckyNumber: 3,
      luckyColour: 'Saffron Gold',
      luckyColourHex: '#d99834'
    },
    monthly: {
      overview: 'Broadening horizons bring mentorship, overseas or long-distance connections, and renewed faith.',
      careerBusiness: 'Higher education, consulting, travel, and international trade ventures gather rewarding momentum.',
      loveMarriage: 'Shared ideals and spiritual or travel dreams pull partners closer in joyful alignment.',
      moneyFinance: 'Skill monetization and ethical investments outperform shortcuts; maintain liquid reserves.',
      health: 'Maintain balanced liver-friendly meals and brisk outdoor movement for steady energy.',
      familyRelationships: 'Blessed family celebrations or pilgrimages create lasting joyful memories.',
      opportunities: 'Global collaborations, higher credentials, and respected mentorship invitations.',
      avoid: 'Bluntness that sounds dismissive or skipping foundational operational checks.',
      luckyNumber: 3,
      luckyColour: 'Saffron Gold',
      luckyColourHex: '#d99834'
    },
    yearly: {
      overview: 'An auspicious year of wisdom, expansion, and Dharmic progress across career, study, and travel.',
      careerGrowth: 'Teaching, advisory, international leadership, and visionary roles flourish brightly.',
      business: 'Cross-border outreach, ed-tech, and ethical brand credibility bring gratifying expansion.',
      loveRelationships: 'Freedom balanced with faithful honesty brings uplifting, joyful companionship.',
      marriage: 'Guru’s grace supports blessed engagements, spiritual alignment, and happy household growth.',
      moneyWealth: 'Ethical growth, higher earning brackets, and prudent educational investments shine.',
      healthWellness: 'Vigorous outdoor fitness balanced with mindful moderation preserves robust health.',
      family: 'Family pride grows around educational milestones, weddings, and spiritual gatherings.',
      education: 'Higher degrees, fellowships, law, philosophy, and overseas admissions excel.',
      travel: 'Inspiring international journeys and sacred pilgrimages highlight the year.',
      opportunities: 'Global expansion, prestigious fellowships, and visionary wealth growth.',
      challengingPeriods: 'Late spring reminds you to ground grand promises in realistic timelines.',
      bestMonths: 'April, August, December',
      luckyNumber: 3,
      luckyColour: 'Antique Gold',
      luckyColourHex: '#d4a24c'
    }
  },
  {
    id: 'capricorn',
    name: 'Capricorn',
    vedicName: 'Makara',
    glyph: '♑\uFE0E',
    dateRange: 'Dec 22 – Jan 19',
    element: 'Earth',
    rulingPlanet: 'Saturn',
    planetaryInsight:
      'Shani rewards integrity, endurance, and structured stewardship; steady patience builds monuments.',
    daily: {
      overall: 'Disciplined focus turns daunting tasks into tangible milestones.',
      career: 'Structured execution reinforces your reputation for dependability.',
      love: 'Steady presence and practical support show deep commitment.',
      finance: 'Long-term savings plans benefit from calm incremental additions.',
      health: 'Warm joint care and proper posture keep stiffness away.',
      family: 'Reliable guidance steadies household decisions with quiet grace.',
      luckyNumber: 8,
      luckyColour: 'Royal Blue',
      luckyColourHex: '#254a91'
    },
    weekly: {
      overall: 'Steady mastery anchors a productive week where disciplined boundaries protect long-term quality.',
      career: 'Senior stakeholders trust your timelines; delegate routine steps rather than carrying everything solo.',
      love: 'Scheduled unhurried evenings let warmth shine behind your calm, composed exterior.',
      finance: 'Conservative asset reviews and debt paydowns strengthen financial peace of mind.',
      health: 'Protect knee and back comfort with gentle warm-ups and mineral-rich nutrition.',
      family: 'Elders appreciate your dutiful care while younger kin benefit from calm mentorship.',
      luckyNumber: 8,
      luckyColour: 'Midnight Blue',
      luckyColourHex: '#1b356b'
    },
    monthly: {
      overview: 'Methodical effort elevates executive standing and brings concrete structural rewards.',
      careerBusiness: 'Infrastructure, governance, management, and long-horizon client contracts advance solidly.',
      loveMarriage: 'Loyalty deepens through shared responsibilities; add small spontaneous warmth to routines.',
      moneyFinance: 'Real estate, retirement vehicles, and structured savings deliver dependable stability.',
      health: 'Consistent sleep schedules and calcium-rich nourishment protect bone and joint resilience.',
      familyRelationships: 'Practical problem-solving stabilizes family finances and property plans.',
      opportunities: 'Senior promotions, institutional trust, and durable real-asset acquisition.',
      avoid: 'Overworking past exhaustion or suppressing gentle emotional expression.',
      luckyNumber: 4,
      luckyColour: 'Royal Blue',
      luckyColourHex: '#254a91'
    },
    yearly: {
      overview: 'A landmark year of earned authority where patient perseverance builds enduring legacy.',
      careerGrowth: 'Executive appointments, institutional honours, and lasting career architecture take root.',
      business: 'Disciplined operations, B2B reliability, and strong governance turn steady into monumental.',
      loveRelationships: 'Time-tested devotion deepens, favouring grounded partners who value integrity.',
      marriage: 'Quiet loyalty and shared life-building strengthen domestic peace and mutual pride.',
      moneyWealth: 'Long-term compounding, commercial property, and steady capital growth thrive.',
      healthWellness: 'Consistent mobility routines and unhurried Sunday recovery preserve lifelong stamina.',
      family: 'Generational responsibilities settle harmoniously with lasting respect across the household.',
      education: 'Engineering, architecture, law, and competitive civil or management exams succeed.',
      travel: 'Purposeful executive travel and serene mountain retreats recharge your resolve.',
      opportunities: 'Executive authority, property consolidation, and legacy milestones.',
      challengingPeriods: 'Mid-summer calls for loosening rigid schedules so burnout doesn’t creep in.',
      bestMonths: 'January, May, October',
      luckyNumber: 8,
      luckyColour: 'Royal Blue',
      luckyColourHex: '#254a91'
    }
  },
  {
    id: 'aquarius',
    name: 'Aquarius',
    vedicName: 'Kumbha',
    glyph: '♒\uFE0E',
    dateRange: 'Jan 20 – Feb 18',
    element: 'Air',
    rulingPlanet: 'Saturn',
    planetaryInsight:
      'Shani channels progressive insight into collective impact; grounding original ideas in structure unlocks breakthroughs.',
    daily: {
      overall: 'Fresh perspective helps you solve an old challenge innovatively.',
      career: 'Original ideas gain traction when paired with practical steps.',
      love: 'Respecting personal space keeps warmth effortless and genuine.',
      finance: 'Audit digital tools and recurring charges for smarter efficiency.',
      health: 'Circulation walks and ankle mobility support brisk vitality.',
      family: 'An open-minded talk bridges differing viewpoints harmoniously.',
      luckyNumber: 4,
      luckyColour: 'Teal Emerald',
      luckyColourHex: '#1b635a'
    },
    weekly: {
      overall: 'Inventive alliances and community goals gain momentum when anchored in realistic milestones.',
      career: 'Tech upgrades, collaborative brainstorming, and unconventional fixes spotlight your foresight.',
      love: 'Intellectual friendship enriches romance; balance independence with clear emotional reassurance.',
      finance: 'Group projects or digital income streams advance; verify security on online transactions.',
      health: 'Limit late-night screen glare and stretch calves regularly to support deep sleep.',
      family: 'Community events or sibling projects benefit from your calm, fair coordination.',
      luckyNumber: 8,
      luckyColour: 'Electric Indigo',
      luckyColourHex: '#2f4e94'
    },
    monthly: {
      overview: 'Forward-thinking collaborations modernize work systems and broaden social impact.',
      careerBusiness: 'Technology, social enterprise, research, and network-driven ventures see sharp progress.',
      loveMarriage: 'Honest mutual respect deepens intimacy while allowing healthy creative autonomy.',
      moneyFinance: 'Innovative revenue channels strengthen savings once speculative urges stay capped.',
      health: 'Hydration, rhythmic cardio, and quiet digital detox hours keep energy steady.',
      familyRelationships: 'Inclusive gatherings welcome diverse friends and family harmoniously.',
      opportunities: 'Tech leadership, collective initiatives, and influential peer networks.',
      avoid: 'Detaching emotionally during sensitive talks or changing systems too abruptly.',
      luckyNumber: 4,
      luckyColour: 'Sapphire',
      luckyColourHex: '#2c54a3'
    },
    yearly: {
      overview: 'A visionary year turning original concepts into structured, socially meaningful success.',
      careerGrowth: 'Innovation leadership, systems architecture, and cross-disciplinary teams elevate your profile.',
      business: 'Scalable platforms, communities, and future-ready services unlock fresh growth curves.',
      loveRelationships: 'Authentic friendship forms the heartbeat of deeply fulfilling modern love.',
      marriage: 'Respecting shared goals alongside individual growth keeps companionship vibrant.',
      moneyWealth: 'Steady tech/consulting earnings paired with disciplined reserve building excel.',
      healthWellness: 'Circulatory exercise, breathwork, and screen-free evenings preserve nervous balance.',
      family: 'Progressive choices gain quiet family respect as results speak clearly for themselves.',
      education: 'Computer science, astronomy, sustainability, and social sciences shine brightly.',
      travel: 'Tech summits, international communities, and inspiring study tours stand out.',
      opportunities: 'Platform launches, thought leadership, and visionary community alliances.',
      challengingPeriods: 'Late autumn suggests grounding lofty plans in clear quarterly budgets.',
      bestMonths: 'February, June, November',
      luckyNumber: 8,
      luckyColour: 'Royal Blue',
      luckyColourHex: '#2c54a3'
    }
  },
  {
    id: 'pisces',
    name: 'Pisces',
    vedicName: 'Meena',
    glyph: '♓\uFE0E',
    dateRange: 'Feb 19 – Mar 20',
    element: 'Water',
    rulingPlanet: 'Jupiter',
    planetaryInsight:
      'Guru illuminates compassion, creative inspiration, and spiritual clarity; pairing dreams with daily rhythm brings grace.',
    daily: {
      overall: 'Gentle wisdom guides you toward peaceful, creative solutions.',
      career: 'Empathetic collaboration smooths complex client discussions.',
      love: 'Tender reassurance nurtures deep emotional closeness today.',
      finance: 'Keep receipts organized and avoid vague lending promises.',
      health: 'Quiet evening reflection and foot comfort restore deep calm.',
      family: 'Compassion dissolves minor domestic stress effortlessly.',
      luckyNumber: 7,
      luckyColour: 'Gold',
      luckyColourHex: '#d4a24c'
    },
    weekly: {
      overall: 'Creative inspiration and intuitive timing flow smoothly when paired with simple daily structure.',
      career: 'Artistic design, healing, mentoring, and strategic empathy shine in collaborative work.',
      love: 'Soulful conversations and thoughtful sensitivity bring gentle magic to close ties.',
      finance: 'Review budgets calmly; generous impulses feel good when planned within clear limits.',
      health: 'Hydration, gentle meditation, and proper arch support keep energy buoyant.',
      family: 'Warm spiritual or creative moments uplift household peace and mutual forgiveness.',
      luckyNumber: 3,
      luckyColour: 'Dark Emerald',
      luckyColourHex: '#155442'
    },
    monthly: {
      overview: 'Intuitive clarity blends with disciplined habits to manifest long-nurtured creative aspirations.',
      careerBusiness: 'Creative direction, counselling, education, and holistic ventures attract appreciative clients.',
      loveMarriage: 'Deep romantic devotion flourishes through unhurried tenderness and shared dreams.',
      moneyFinance: 'Consistent tracking transforms irregular inflows into calm, reliable savings.',
      health: 'Restorative sleep, swimming or yoga, and tranquil mornings replenish vitality.',
      familyRelationships: 'Gracious forgiveness heals old sensitivities and restores household serenity.',
      opportunities: 'Creative commissions, spiritual retreats, and compassionate leadership roles.',
      avoid: 'Escaping clear deadlines or assuming unspoken expectations are understood.',
      luckyNumber: 7,
      luckyColour: 'Antique Gold',
      luckyColourHex: '#d4a24c'
    },
    yearly: {
      overview: 'A graceful year of spiritual maturity, inspired creativity, and quiet fulfillment of heartfelt goals.',
      careerGrowth: 'Mentoring, arts, healing professions, and thoughtful leadership bring meaningful recognition.',
      business: 'Purpose-driven brands, bespoke design, and trusted guidance build devoted clientele.',
      loveRelationships: 'Deeply empathetic love blossoms when healthy boundaries protect mutual trust.',
      marriage: 'Serene companionship, creative harmony, and gentle devotion bless marital life.',
      moneyWealth: 'Structured financial planning protects growing creative or advisory income.',
      healthWellness: 'Mind-body harmony, water-based exercise, and unhurried rest nurture vibrant health.',
      family: 'Warm compassion unites loved ones across quiet spiritual milestones and celebrations.',
      education: 'Fine arts, music, psychology, healing sciences, and philosophy thrive wonderfully.',
      travel: 'Serene seaside sanctuaries and sacred heritage journeys renew inspiration.',
      opportunities: 'Creative mastery, spiritual alignment, and purpose-led prosperity.',
      challengingPeriods: 'Early autumn reminds you to confirm written details instead of relying on trust alone.',
      bestMonths: 'March, July, December',
      luckyNumber: 7,
      luckyColour: 'Deep Emerald',
      luckyColourHex: '#155442'
    }
  }
];
