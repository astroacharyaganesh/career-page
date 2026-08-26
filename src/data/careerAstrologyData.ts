import {
  ConsultationPlan,
  CareerProblem,
  JourneyStage,
  HowItWorksStep,
  BentoService,
  VideoItem,
  TransformationStory,
  DeliverableItem,
  KnowledgeArticle,
  FaqItem
} from '../types';

export const CONSULTATION_PLANS: ConsultationPlan[] = [
  {
    id: 'executive',
    name: 'Executive Leadership & D10 Deep Audit',
    badge: 'Most Popular for VP / Founders',
    tagline: 'Comprehensive 360° career roadmap, D10 Dashamsha division audit, and 3-year transit timing.',
    price: '$199',
    originalPrice: '$349',
    duration: '45 Mins Live Video (1-on-1)',
    format: 'Zoom / Google Meet + Confidential HD Recording',
    popular: true,
    idealFor: 'Senior Leaders, CXOs, Tech Leads, Startup Founders & Mid-Career Pivots',
    deliverables: [
      'Comprehensive D1 (Rasi) & D10 (Dashamsha) Divisional Chart Analysis',
      '36-Month Mahadasha & Antardasha Career Opportunity Calendar',
      'Strategic Job Switch vs Executive Promotion Timing Matrix',
      'Custom Gemstone & Science-based Vedic Remedial Protocol',
      'Corporate Politics Defusal & 6th-House Conflict Mitigation',
      'Full 45-Min Video Recording + 25-Page Custom PDF Report',
      'Direct WhatsApp Follow-up Access for 14 Days'
    ]
  },
  {
    id: 'quick-switch',
    name: 'Strategic Job Switch & Appraisal Timing',
    badge: 'High Impact',
    tagline: 'Focused astrological roadmap to engineer a high-paying career jump with optimal dasha alignment.',
    price: '$129',
    originalPrice: '$219',
    duration: '30 Mins Live Video (1-on-1)',
    format: 'Live Video Call + Audio Summary',
    idealFor: 'Software Engineers, Product Managers, Consultants & Corporate Professionals',
    deliverables: [
      'Favorable Offer Acceptance & Interview Month Selection',
      'Salary Appraisal Window & 2nd/11th House Wealth Analysis',
      'Domain & Industry Alignment (Fintech vs Enterprise vs Startup)',
      'Immediate Planetary Remedies for Stagnation Clearance',
      '15-Page Summary Career Blueprint PDF'
    ]
  },
  {
    id: 'business-founder',
    name: 'Founder & Venture Scaling Astrological Advisory',
    badge: 'Enterprise & Startups',
    tagline: 'Venture launch muhurta, co-founder astrological synergy, fundraising windows, and business pivots.',
    price: '$299',
    originalPrice: '$499',
    duration: '60 Mins In-Depth Advisory',
    format: 'Live Video Call + Lifetime Co-Founder Charting',
    idealFor: 'Founders, Angel Investors, Agency Owners & Family Business Leaders',
    deliverables: [
      '7th & 10th House Entrepreneurial Yoga Audit',
      'Co-Founder & Key Investor Astrological Compatibility Audit',
      'Fundraising & Product Launch Auspicious Muhurta Dates',
      'Cash-flow Cycle Prediction & Planetary Risk Hedging',
      'Business Yantra & Vastu Alignment Protocol'
    ]
  },
  {
    id: 'standard',
    name: 'Govt Job & Competitive Exam Astrological Audit',
    tagline: 'Precise analysis of Sun, Mars, and 6th/10th house strength for civil services and state exams.',
    price: '$99',
    originalPrice: '$179',
    duration: '30 Mins Live Audio/Video',
    format: 'Zoom Call + Concise Report',
    idealFor: 'UPSC, State PSC, Judiciary, Banking & Defense Exam Aspirants',
    deliverables: [
      'Raja Yoga & Government Service Probability Assessment',
      'Exam Attempt Selection (Optimal Year & Cycle)',
      'Remedies to enhance concentration (Budh & Surya activation)',
      'Backup Career Path vs Pure Exam Pursuit recommendation'
    ]
  }
];

export const CAREER_JOURNEY_STAGES: JourneyStage[] = [
  {
    step: '01',
    stageName: 'Career Confusion',
    subtitle: 'Wandering without cosmic blueprint',
    challenge: 'You feel unfulfilled in your current stream despite having talent, questioning if you chose the right domain.',
    astroInsight: 'Mismatch between Lagna Lord (Self) and 10th House Lord (Karma). You are working against your natal planetary disposition.',
    breakthrough: 'Identifying your Atmakaraka (Soul Planet) & Amatyakaraka (Career Indicator) to align daily effort with natural cosmic aptitude.',
    planetaryKey: 'Atmakaraka & 10th House Ruler',
    timeframe: 'Stage 1: Awareness & Audit'
  },
  {
    step: '02',
    stageName: 'Wrong Career Trajectory',
    subtitle: 'High friction, low reward cycle',
    challenge: 'Constant burnout, toxic micro-management, and low appraisals despite giving 12-hour workdays.',
    astroInsight: 'Debilitated planet in 6th or 10th house or transit of Saturn over your Moon sign (Sade Sati/Dhaiya) draining vital energy.',
    breakthrough: 'Deploying non-dogmatic Vedic remedies (specific metal alloys, mantras, lifestyle shifts) to clear energetic bottlenecks.',
    planetaryKey: 'Saturn & Rahu Transit Remediation',
    timeframe: 'Stage 2: Bottleneck Clearance'
  },
  {
    step: '03',
    stageName: 'Strategic Job Switch',
    subtitle: 'Timing the cosmic green light',
    challenge: 'Applying randomly to 200 jobs without offers, or switching during an unfavorable planetary cycle and regretting it.',
    astroInsight: 'Job offers and negotiation power skyrocket during sub-periods of 2nd (wealth), 6th (service change), and 10th (status) lords.',
    breakthrough: 'Pinpointing the exact 60-day calendar window for interviews, offer letters, and salary negotiations to secure 50%+ hikes.',
    planetaryKey: 'Antardasha & Gochar Jupiter Alignment',
    timeframe: 'Stage 3: High-Leverage Jump'
  },
  {
    step: '04',
    stageName: 'Executive Promotion',
    subtitle: 'Ascending to authority and influence',
    challenge: 'Being overlooked for leadership roles while juniors get promoted, battling office politics and visibility gaps.',
    astroInsight: 'Weakened Sun (authority) or afflicted Mars (executive courage). 10th house D10 divisional strength needs targeted activation.',
    breakthrough: 'Strengthening the 10th lord via gemstone matrix and timing high-visibility project pitches when Sun transits auspicious kendras.',
    planetaryKey: 'Sun (Surya) & Dashamsha D10 Lagna',
    timeframe: 'Stage 4: Authority Consolidation'
  },
  {
    step: '05',
    stageName: 'Exponential Career Growth',
    subtitle: 'Generational wealth & legacy',
    challenge: 'Transitioning from active employee to influential thought leader, enterprise founder, or global industry authority.',
    astroInsight: 'Dhana Yogas (1st, 2nd, 5th, 9th, 11th connections) and Raj Yogas reaching maturity during prime Mahadashas.',
    breakthrough: 'Scaling enterprises, overseas expansions, and building wealth engines with permanent planetary harmony.',
    planetaryKey: 'Jupiter (Brihaspati) & Venus (Shukra) Yogas',
    timeframe: 'Stage 5: Pinnacle Mastery'
  }
];

export const CAREER_PROBLEMS: CareerProblem[] = [
  {
    id: 'prob-1',
    title: 'Promotion & Appraisal Delay',
    iconName: 'TrendingDown',
    shortDesc: 'Stagnated in the same role for years while peers advance. Unrewarded loyalty.',
    astrologicalRoot: 'Saturn 10th aspect / Combust Sun / Debilitated 10th Lord in Navamsha',
    solutionOutcome: 'Pinpoints the exact month for leadership review & activates Surya power.',
    d10Impact: 'Unlocks 10th House Dashamsha stagnation.',
    frequency: '78% of Corporate Clients'
  },
  {
    id: 'prob-2',
    title: 'Salary & Wealth Ceiling',
    iconName: 'DollarSign',
    shortDesc: 'Income not matching your skillset or market value. Cashflow leaks.',
    astrologicalRoot: 'Afflicted 2nd (Dhana) or 11th (Labha) house / Rahu in 2nd Bhava',
    solutionOutcome: 'Calculates high-multiplier bonus cycles and optimal negotiation dates.',
    d10Impact: 'Aligns wealth lords in D10 divisional matrix.',
    frequency: '84% of Clients'
  },
  {
    id: 'prob-3',
    title: 'Wrong Career Choice',
    iconName: 'Compass',
    shortDesc: 'Feeling trapped in tech, finance, or corporate when your true passion lies elsewhere.',
    astrologicalRoot: 'Amatyakaraka planet conflicted with Current Profession domain',
    solutionOutcome: 'Detailed roadmap for hybrid transition without financial shock.',
    d10Impact: 'Reveals true Dashamsha vocation archetype.',
    frequency: '65% of Clients'
  },
  {
    id: 'prob-4',
    title: 'Govt Job vs Corporate Dilemma',
    iconName: 'Award',
    shortDesc: 'Wasting prime years on UPSC/Govt exams with repetitive near-miss cutoffs.',
    astrologicalRoot: 'Sun-Mars-Saturn Raja Yoga status / 6th house competition strength',
    solutionOutcome: 'Clear binary verdict: pursue final attempt vs pivot to private high-growth.',
    d10Impact: 'Assesses State/Govt authority yogas in D10.',
    frequency: '92% of Aspirants'
  },
  {
    id: 'prob-5',
    title: 'Business vs Job Transition',
    iconName: 'Briefcase',
    shortDesc: 'Desire to start your own company but terrified of losing financial safety.',
    astrologicalRoot: '7th (Trade) and 3rd (Initiative/Courage) houses vs 6th house stability',
    solutionOutcome: 'Optimal runway duration & auspicious enterprise launch date (Muhurta).',
    d10Impact: 'Confirms entrepreneurial yogas vs salaried dominance.',
    frequency: '71% of Mid-Career Tech'
  },
  {
    id: 'prob-6',
    title: 'Career Break & Resumption',
    iconName: 'RefreshCw',
    shortDesc: 'Struggling to re-enter workforce after parental leave, health, or sabbatical.',
    astrologicalRoot: 'Rahu-Ketu transit axis over 10th lord / Ketu Dasha withdrawal',
    solutionOutcome: 'Re-entry dasha timing & specific remedial booster to clear resume bias.',
    d10Impact: 'Re-activates stalled karmic trajectory in D10.',
    frequency: '59% of Returners'
  },
  {
    id: 'prob-7',
    title: 'Workplace Politics & Toxicity',
    iconName: 'ShieldAlert',
    shortDesc: 'Targeted by insecure managers, credit theft, and hostile corporate maneuvering.',
    astrologicalRoot: 'Weak 6th house (Shatru Bhava) / Mars-Rahu Angarak affliction',
    solutionOutcome: 'Vedic defusal techniques to neutralize hidden corporate adversaries.',
    d10Impact: 'Shields professional reputation & visibility.',
    frequency: '81% of Senior Execs'
  },
  {
    id: 'prob-8',
    title: 'Foreign Career & Relocation',
    iconName: 'Globe',
    shortDesc: 'Visa delays, failed overseas transfers, or confusion on immigrating for work.',
    astrologicalRoot: '9th (Long distance), 12th (Foreign lands) and Rahu foreign connectivity',
    solutionOutcome: 'Identifies exact geography & visa approval window for global career.',
    d10Impact: 'Validates overseas residency yogas in D10.',
    frequency: '68% of Tech & Medical'
  }
];

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    number: '01',
    title: 'Exact Ephemeris & Birth Computation',
    subtitle: 'Sub-minute planetary coordinates',
    details: 'We compute your exact Vedic astrological coordinates (Lagna, Moon sign, planetary degrees down to seconds of arc) using authentic Lahiri Ayanamsha algorithms.',
    techAspect: 'Swiss Ephemeris Vedic Algorithm',
    icon: 'Binary',
    highlight: 'Precision down to latitude/longitude micro-degrees'
  },
  {
    number: '02',
    title: 'D1 (Rasi) Core Architecture Audit',
    subtitle: 'Foundation of life & karma',
    details: 'Analysis of your 10th House (Karma/Profession), 2nd House (Accumulated Wealth), 6th House (Service & Competition), and 11th House (Income & Network).',
    techAspect: 'Bhavat Bhavam & Planetary Strength (Shadbala)',
    icon: 'LayoutGrid',
    highlight: 'Maps primary career aptitude and financial capacity'
  },
  {
    number: '03',
    title: 'D10 (Dashamsha) Micro-Division',
    subtitle: 'The ultimate career microscope',
    details: 'While D1 shows general potential, D10 Dashamsha isolates professional achievements, executive authority, corporate status, and business success with surgical precision.',
    techAspect: 'Harmonic 10th Divisional Matrix',
    icon: 'Cpu',
    highlight: 'Discloses real managerial rank and niche specialization'
  },
  {
    number: '04',
    title: 'Vimshottari Dasha & Transit Overlay',
    subtitle: 'The cosmic timeline clock',
    details: 'We cross-reference your 120-year Vimshottari planetary timeline (Mahadasha, Antardasha, Pratyantardasha) with current transits of Saturn, Jupiter, Rahu, and Ketu.',
    techAspect: 'Multi-tiered Time Vector Modeling',
    icon: 'Clock',
    highlight: 'Pinpoints the exact month to strike vs hold'
  },
  {
    number: '05',
    title: 'Actionable Strategic Advisory & Remedies',
    subtitle: 'Real-world execution roadmap',
    details: 'You receive a 45-minute live consultation with Acharya Ganesh, custom gemstone/mantra protocols without superstitious dogma, and a tailored 25-page PDF blueprint.',
    techAspect: 'Zero Dogma Vedic Remedial Science',
    icon: 'Sparkles',
    highlight: '100% actionable career strategy and direct Q&A'
  }
];

export const BENTO_SERVICES: BentoService[] = [
  {
    id: 'career-path',
    title: 'Career Path & True Calling',
    category: 'Vocation Optimization',
    badge: 'Flagship Analysis',
    description: 'Stop guessing your vocation. We decode your Atmakaraka, Amatyakaraka, and 10th house archetype to reveal the exact industry domain where you will naturally dominate.',
    planetaryFocus: 'Sun (Surya), Mercury (Budh) & Amatyakaraka',
    colSpan: 'lg:col-span-8',
    metrics: { label: 'Client Clarity Index', value: '99.2%' },
    features: [
      'Tech vs Finance vs Creative vs Public Sector alignment',
      'Individual contributor vs Engineering/Executive leadership analysis',
      'Dual-career & multi-income stream astrological viability',
      'Customized 10-year vocational roadmap'
    ],
    gradient: 'from-purple-900/40 via-indigo-950/40 to-slate-900/60',
    icon: 'Compass'
  },
  {
    id: 'job-change',
    title: 'Strategic Job Switch Timing',
    category: 'Market Timing',
    badge: 'High ROI',
    description: 'Know the exact 60-day calendar window to interview, negotiate, and resign to secure maximum signing bonuses and market leverage.',
    planetaryFocus: '6th & 10th Lord Dasha Transitions',
    colSpan: 'lg:col-span-4',
    metrics: { label: 'Avg Salary Jump', value: '+54%' },
    features: [
      'Offer letter signing auspicious Muhurta',
      'Notice period timing to avoid counter-offer traps',
      'Negotiation power forecasting'
    ],
    gradient: 'from-amber-950/40 via-purple-950/40 to-slate-900/60',
    icon: 'TrendingUp'
  },
  {
    id: 'promotion',
    title: 'Executive Promotion & Appraisal Strategy',
    category: 'Corporate Growth',
    badge: 'Leadership',
    description: 'Overcome invisible glass ceilings. Position yourself for Director/VP level elevations during favorable Solar and Jovian transits.',
    planetaryFocus: '10th House, Sun & Jupiter in D10',
    colSpan: 'lg:col-span-4',
    metrics: { label: 'Success Rate', value: '91.8%' },
    features: [
      'Executive visibility & sponsor alignment timing',
      'Appraisal rating window optimization',
      'Neutralizing internal managerial resistance'
    ],
    gradient: 'from-indigo-950/40 via-slate-900/60 to-purple-950/40',
    icon: 'Award'
  },
  {
    id: 'wealth-growth',
    title: 'Salary Growth & Dhana Yogas',
    category: 'Wealth Acceleration',
    badge: 'Financial Astrology',
    description: 'Analyze the 2nd (wealth savings) and 11th (gains/bonuses) houses to unlock stock options (ESOPs), multi-asset wealth, and equity liquidity.',
    planetaryFocus: 'Venus (Shukra) & Jupiter (Guru)',
    colSpan: 'lg:col-span-4',
    metrics: { label: 'Wealth Yoga Audit', value: '16 Yogas' },
    features: [
      'ESOP vesting & exit timing analysis',
      'High-risk trading vs steady accumulation indicators',
      'Wealth leakage identification & remedies'
    ],
    gradient: 'from-emerald-950/40 via-slate-900/60 to-indigo-950/40',
    icon: 'DollarSign'
  },
  {
    id: 'business-founder',
    title: 'Startup & Entrepreneurship Advisory',
    category: 'Founder Trajectory',
    badge: 'Ventures',
    description: 'Evaluate your chart for entrepreneurial fortitude, partner astrological synergy, seed/Series A fundraising windows, and brand launch muhurta.',
    planetaryFocus: '7th (Partnerships) & 3rd (Enterprise)',
    colSpan: 'lg:col-span-4',
    metrics: { label: 'Startups Guided', value: '450+' },
    features: [
      'Co-founder astrological compatibility checks',
      'Product launch & entity incorporation dates',
      'Investor pitching favorable dasha cycles'
    ],
    gradient: 'from-violet-950/40 via-amber-950/30 to-slate-900/60',
    icon: 'Rocket'
  },
  {
    id: 'govt-exams',
    title: 'Government & Civil Services Audit',
    category: 'Public Office',
    badge: 'UPSC / State PSC',
    description: 'Get an unvarnished, high-accuracy verdict on whether civil services, judiciary, or defense is indicated in your D1 and D10 charts.',
    planetaryFocus: 'Sun, Mars, 6th & 10th House Raja Yogas',
    colSpan: 'lg:col-span-4',
    metrics: { label: 'Rank Accuracy', value: '94%' },
    features: [
      'Optimal exam attempt year calculation',
      'IAS vs IPS vs IFS vs Banking sector alignment',
      'Surya concentration enhancement protocol'
    ],
    gradient: 'from-amber-950/30 via-slate-900/60 to-purple-950/40',
    icon: 'ShieldCheck'
  },
  {
    id: 'abroad-career',
    title: 'Global Career & Foreign Relocation',
    category: 'International Mobility',
    badge: 'Immigration & Visas',
    description: 'Determine if settlement in the US, Europe, Middle East, or Singapore is karmically favored, plus visa approval probability windows.',
    planetaryFocus: '9th, 12th House & Rahu Dasha',
    colSpan: 'lg:col-span-4',
    metrics: { label: 'Overseas Placements', value: '1,800+' },
    features: [
      'H-1B, Golden Visa, PR auspicious filing dates',
      'Foreign MNC relocation vs domestic leadership',
      'Remedies for international bureaucratic hurdles'
    ],
    gradient: 'from-cyan-950/30 via-slate-900/60 to-indigo-950/40',
    icon: 'Globe'
  },
  {
    id: 'remedies',
    title: 'Scientific Vedic Career Remedies',
    category: 'Harmonization',
    badge: 'Zero Dogma',
    description: 'Zero superstition. We prescribe certified natural gemstones, resonant Vedic sound frequencies (mantras), metal alloys, and behavioral changes.',
    planetaryFocus: 'Afflicted Karmic Planets',
    colSpan: 'lg:col-span-4',
    metrics: { label: 'Client Compliance', value: '98%' },
    features: [
      'Exact gemstone carat, metal & energization ritual',
      'Time-tested Beej mantra frequencies',
      'Saturday & Tuesday energetic recalibrations'
    ],
    gradient: 'from-amber-950/40 via-purple-950/40 to-slate-900/60',
    icon: 'Sparkles'
  }
];

export const VIDEO_VAULT: VideoItem[] = [
  {
    id: 'vid-1',
    title: 'How D10 Dashamsha Chart Predicts Exact Job Switch Month',
    category: 'D10 Masterclass',
    duration: '14:20',
    views: '128K views',
    thumbnail: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop',
    description: 'Acharya Ganesh breaks down the mathematical calculation of the 10th divisional chart and how sub-periods trigger instant headhunter outreach.',
    keyTakeaway: 'The 6th and 10th lords in D10 trigger career shifts 90% faster than transits alone.',
    speaker: 'Acharya Ganesh',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 'vid-2',
    title: 'Signs You Are in the Wrong Career According to Vedic Astrology',
    category: 'Job Switch',
    duration: '18:45',
    views: '240K views',
    thumbnail: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop',
    description: 'Are you working in IT while your soul indicator (Amatyakaraka) demands strategy, finance, or counseling? How to spot the red flags.',
    keyTakeaway: 'When Atmakaraka and Current Job conflict, burnout is 3x higher.',
    speaker: 'Acharya Ganesh',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 'vid-3',
    title: 'UPSC vs Big Tech: Who Actually Has Government Raja Yoga?',
    category: 'Govt vs Corporate',
    duration: '22:10',
    views: '95K views',
    thumbnail: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
    description: 'A deep-dive case study comparing the charts of Top 50 UPSC rankers with Fortune 500 Directors.',
    keyTakeaway: 'Sun-Saturn combinations require specific mitigation to pass preliminary interview panels.',
    speaker: 'Acharya Ganesh',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 'vid-4',
    title: 'The Real Science of Gemstones for Career Stagnation',
    category: 'Remedies',
    duration: '11:30',
    views: '164K views',
    thumbnail: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop',
    description: 'Why wearing the wrong gemstone can destroy your reputation, and how optical crystalline refraction balances subtle planetary frequencies.',
    keyTakeaway: 'Never wear Blue Sapphire or Emerald without verifying D9 Navamsha and D10 Dashamsha.',
    speaker: 'Acharya Ganesh',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 'vid-5',
    title: 'Case Study: From Stagnant Senior Dev to VP at Unicorn in 9 Months',
    category: 'Case Study',
    duration: '16:05',
    views: '88K views',
    thumbnail: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop',
    description: 'Step-by-step breakdown of how a 34-year-old developer timed his resignation during Rahu-Jupiter Antardasha to land a $320k package.',
    keyTakeaway: 'Timing the resignation letter is just as vital as clearing the interview.',
    speaker: 'Acharya Ganesh',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  }
];

export const TRANSFORMATION_STORIES: TransformationStory[] = [
  {
    id: 'story-1',
    clientName: 'Siddharth M.',
    role: 'VP of Engineering',
    companyCategory: 'Fintech Unicorn (Bengaluru & London)',
    location: 'London, UK',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop',
    rating: 5,
    timeframe: 'Result in 45 Days',
    beforeState: {
      title: '4-Year Stagnation as Senior Manager',
      pain: 'Passed over for Director role twice. Exhausted by internal politics and feeling underpaid relative to US peers.',
      stagnationPeriod: '48 Months stuck'
    },
    consultationInsight: {
      analysis: 'Acharya Ganesh spotted Saturn transiting 10th house with Rahu Mahadasha activating 12th house (foreign). Advised rejecting domestic counter-offer and targeting global fintech in Q4.',
      planetsIdentified: ['Rahu in 12th', 'Saturn 10th aspect', 'Jupiter Gochar in 9th'],
      actionableAdvice: 'Target UK/EU relocation role in October + wear natural Yellow Sapphire energized in Gold on index finger.'
    },
    afterOutcome: {
      outcomeTitle: 'Promoted to VP & Relocated to London HQ',
      ctcJump: '+140% CTC ($260k Package)',
      newRole: 'VP of Platform Architecture',
      verdict: '“The timeline Acharya predicted was accurate to within 10 days. I received 2 competing offers in London exactly in November.”'
    },
    googleReviewBadge: true
  },
  {
    id: 'story-2',
    clientName: 'Priyanka R.',
    role: 'Senior Director of Product',
    companyCategory: 'Tier-1 SaaS Enterprise',
    location: 'San Francisco, CA',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format&fit=crop',
    rating: 5,
    timeframe: 'Result in 60 Days',
    beforeState: {
      title: 'Hostile Reorganization & Burnout',
      pain: 'New executive leadership stripped her team scope. Severely anxious about resigning without another confirmed offer in a brutal tech market.',
      stagnationPeriod: 'Severe Burnout'
    },
    consultationInsight: {
      analysis: 'D10 Dashamsha showed Sun exalted in 10th house with Mercury, indicating supreme executive authority, but Ketu sub-period was causing mental self-doubt.',
      planetsIdentified: ['Sun Exalted in D10', 'Amatyakaraka Mercury', 'Ketu Antardasha ending'],
      actionableAdvice: 'Hold position for 6 weeks until Venus sub-period begins, then pitch for Enterprise Strategy role on specific favorable Thursday.'
    },
    afterOutcome: {
      outcomeTitle: 'Recruited as Head of Product at Rival SaaS',
      ctcJump: '+65% Hike + $180k Equity',
      newRole: 'Head of AI Product Strategy',
      verdict: '“Acharya Ganesh told me not to panic-resign in August, and instead wait for October 12. On October 14, I received the dream inbound outreach!”'
    },
    googleReviewBadge: true
  },
  {
    id: 'story-3',
    clientName: 'Dr. Arindam K.',
    role: 'IAS Officer (UPSC Rank 38)',
    companyCategory: 'Indian Administrative Service',
    location: 'New Delhi, India',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop',
    rating: 5,
    timeframe: 'Result in 1 Year',
    beforeState: {
      title: 'Failed 3 UPSC Prelims by Narrow Margins',
      pain: 'Family pressure, losing confidence, contemplating abandoning 4 years of civil services preparation for corporate sales.',
      stagnationPeriod: '3 Near-Miss Attempts'
    },
    consultationInsight: {
      analysis: 'Birth chart showed exceptional Mars-Sun Dharma-Karmadhipati Raja Yoga in 10th house, but combust Mercury was causing exam-hall nervousness and silly negative-marking errors.',
      planetsIdentified: ['Mars in 10th (Digbala)', 'Sun 9th Lord', 'Budh-Aditya Yoga'],
      actionableAdvice: 'Shift exam optional subject to Public Administration + daily Surya Gayatri meditation at sunrise + final attempt in 2025.'
    },
    afterOutcome: {
      outcomeTitle: 'Cleared UPSC Civil Services with AIR 38',
      ctcJump: 'All India Rank 38 (IAS Cadre)',
      newRole: 'Assistant Secretary / IAS Officer',
      verdict: '“Acharya’s precision gave me the courage to not quit. He even accurately predicted that my interview panel score would be the highest.”'
    },
    googleReviewBadge: true
  },
  {
    id: 'story-4',
    clientName: 'Vikram & Ananya S.',
    role: 'Co-Founders',
    companyCategory: 'Quick-Commerce D2C Brand',
    location: 'Gurugram, India',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop',
    rating: 5,
    timeframe: 'Result in 90 Days',
    beforeState: {
      title: 'Stalled $2M Seed Round & Co-Founder Friction',
      pain: 'Term sheets getting pulled at the last minute; severe disagreements on equity distribution and hiring priorities.',
      stagnationPeriod: '6 Months Runway Left'
    },
    consultationInsight: {
      analysis: 'Co-founder astrological sync revealed complementary planetary strengths (one had strong Mercury/Jupiter for governance, the other strong Mars for product velocity), but incorrect entity launch date caused investor distrust.',
      planetsIdentified: ['7th House Partnership Synastry', 'Jupiter 11th House Gain Yoga'],
      actionableAdvice: 'Re-align founder responsibilities based on planetary rulerships + re-open investor roadshow on specific Muhurta date.'
    },
    afterOutcome: {
      outcomeTitle: 'Closed $2.4M Seed Round Led by Top VC',
      ctcJump: '$2.4M Capital Inflow',
      newRole: 'Co-Founders & Scaling to Series A',
      verdict: '“AstroCareer is like Bloomberg Terminal for founder timing. Saved our company from shutting down!”'
    },
    googleReviewBadge: true
  }
];

export const DELIVERABLES_LIST: DeliverableItem[] = [
  {
    id: 'deliv-1',
    title: 'Personalized 25-Page Career Horoscope Blueprint',
    format: 'Comprehensive PDF Document',
    description: 'Detailed analysis of your D1 (Rasi), D9 (Navamsha), and D10 (Dashamsha) charts with full mathematical degree breakdowns.',
    highlight: 'Manual Analysis by Acharya Ganesh',
    icon: 'FileText'
  },
  {
    id: 'deliv-2',
    title: '36-Month Planetary Opportunity Calendar',
    format: 'Timeline & Milestone Chart',
    description: 'Clear month-by-month green, amber, and red flags for job applications, salary negotiations, and high-visibility pitches.',
    highlight: 'Precise Antardasha Timing',
    icon: 'Calendar'
  },
  {
    id: 'deliv-3',
    title: 'D10 Dashamsha Career Divisional Deep-Dive',
    format: 'Vedic Harmonic Diagnostic',
    description: 'Isolates executive authority, peer reputation, organizational rank, and industry dominance possibilities.',
    highlight: 'Micro-Vocation Specialty',
    icon: 'Layers'
  },
  {
    id: 'deliv-4',
    title: 'Job Switch vs Executive Promotion Matrix',
    format: 'Strategic Decision Framework',
    description: 'Binary mathematical calculation of whether staying for promotion or switching to a new company will yield higher wealth.',
    highlight: 'Risk vs Reward Probability',
    icon: 'GitCompare'
  },
  {
    id: 'deliv-5',
    title: 'Zero-Dogma Vedic Remedial Protocol',
    format: 'Practical Action Blueprint',
    description: 'Customized natural gemstone recommendations (carat, metal, finger), energization rituals, and resonant sound mantras.',
    highlight: '100% Non-Superstitious',
    icon: 'Sparkles'
  },
  {
    id: 'deliv-6',
    title: 'Corporate Politics Shield & Conflict Defusal',
    format: 'Executive Playbook',
    description: 'Specific planetary remedies to neutralize 6th-house adversaries, credit stealers, and toxic management.',
    highlight: 'Reputation Protection',
    icon: 'ShieldCheck'
  },
  {
    id: 'deliv-7',
    title: 'Overseas Relocation & Immigration Probability Index',
    format: 'Geographic Alignment Score',
    description: 'Assessment of 9th and 12th house foreign stay yogas, visa filing dates, and optimal countries for career prosperity.',
    highlight: 'Global Mobility Map',
    icon: 'Globe'
  },
  {
    id: 'deliv-8',
    title: '45-Min 1-on-1 Video Session + HD Recording',
    format: 'Live Video (Zoom / Meet)',
    description: 'Direct interactive deep dive with Acharya Ganesh, complete with question-and-answer and confidential lifetime video access.',
    highlight: '14-Day WhatsApp Follow-up',
    icon: 'Video'
  }
];

export const KNOWLEDGE_ARTICLES: KnowledgeArticle[] = [
  {
    id: 'art-1',
    title: 'Why D10 Dashamsha is the Ultimate Career Predictor in Vedic Astrology',
    category: 'Articles',
    readTime: '6 min read',
    author: 'Acharya Ganesh',
    summary: 'The main birth chart (D1) only shows life in general. The 10th harmonic divisional chart (D10) isolates career karma, managerial status, and vocational glory.',
    keyPoints: [
      'The 1st house of D10 dictates your professional stamina and recognition.',
      'The 10th house of D10 reveals your true executive rank and influence.',
      'Planets in Kendra (1, 4, 7, 10) in D10 create unstoppable career ascendance during their dasha periods.'
    ],
    tags: ['D10 Chart', 'Dashamsha', 'Vedic Astrology', 'Career Karma']
  },
  {
    id: 'art-2',
    title: 'How to Time Your Job Resignation for a 50%+ Salary Hike',
    category: 'Guides',
    readTime: '8 min read',
    author: 'Acharya Ganesh',
    summary: 'A step-by-step masterclass on aligning the 2nd (wealth), 6th (service shift), and 11th (gains) lords before sending your resignation letter.',
    keyPoints: [
      'Never resign during a Ketu Antardasha unless pivoting to research or sabbatical.',
      'Rahu-Jupiter or Venus-Mercury sub-periods create unprecedented salary negotiation leverage.',
      'Calculate Jupiter’s transit through the 5th, 9th, or 11th house from your natal Moon.'
    ],
    tags: ['Job Switch', 'Salary Negotiation', 'Dasha Timing', 'Wealth Yogas']
  },
  {
    id: 'art-3',
    title: 'Saturn Transit (Shani Gochar) and Sade Sati: Destruction or Great Elevation?',
    category: 'Articles',
    readTime: '5 min read',
    author: 'Acharya Ganesh',
    summary: 'Debunking the fear surrounding Saturn. Learn how Shani actually rewards discipline, clears fake corporate vanity, and promotes true masters.',
    keyPoints: [
      'Saturn in the 10th or 11th house creates enduring corporate dynasties (e.g. Satya Nadella, Sundar Pichai).',
      'Sade Sati forces structural career realignment to eliminate unviable projects.',
      'Practical grounding remedies that turn Saturnian pressure into diamond-grade focus.'
    ],
    tags: ['Saturn Transit', 'Sade Sati', 'Career Stagnation', 'Remedies']
  },
  {
    id: 'art-4',
    title: 'The Truth About Gemstones: Why 90% of People Wear the Wrong Stone',
    category: 'Guides',
    readTime: '7 min read',
    author: 'Acharya Ganesh',
    summary: 'How uncertified, heat-treated stones or wearing a gemstone of a functional malefic planet can trigger legal disputes, lawsuits, or financial losses.',
    keyPoints: [
      'A gemstone must only strengthen functional benefic lords (1st, 5th, 9th).',
      'Never wear Blue Sapphire (Neelam) purely based on Moon sign without checking D10 lagna.',
      'Natural unheated gemstones vibrate with authentic spectroscopic frequency.'
    ],
    tags: ['Gemstones', 'Emerald', 'Blue Sapphire', 'Yellow Sapphire']
  },
  {
    id: 'art-5',
    title: 'Video: Identifying Your Amatyakaraka (Career Soul Planet) in 3 Steps',
    category: 'Videos',
    readTime: '12 min video',
    author: 'Acharya Ganesh',
    summary: 'Watch Acharya Ganesh calculate the planet with the second-highest planetary degree in your chart to reveal your karmic profession.',
    keyPoints: [
      'Amatyakaraka Mercury = Product, Communication, Analytics, Data Strategy.',
      'Amatyakaraka Mars = Engineering, Defense, Surgery, High-Velocity Execution.',
      'Amatyakaraka Jupiter = Advisory, Finance, Legal, Executive Mentorship.'
    ],
    tags: ['Amatyakaraka', 'Vocation', 'Video Tutorial']
  },
  {
    id: 'art-6',
    title: 'Vedic FAQ: What if I do not have my exact minute of birth?',
    category: 'FAQs',
    readTime: '4 min read',
    author: 'Acharya Ganesh',
    summary: 'How we perform Birth Time Rectification (BTR) by matching historical life milestones (graduation, marriage, past jobs) to pinpoint your exact birth minute.',
    keyPoints: [
      'Birth Time Rectification uses mathematical progression of past events.',
      'D10 charts are sensitive to 4-minute birth time shifts, so rectification is essential.',
      'We verify past job switch dates before predicting future career windows.'
    ],
    tags: ['Birth Time Rectification', 'BTR', 'Accuracy']
  }
];

export const FAQS_LIST: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'Accuracy & Science',
    question: 'How is this different from generic horoscopes or fortune-telling apps?',
    answer: 'Generic apps use automated sun-sign horoscopes that apply to 1/12th of humanity simultaneously. AstroCareer by Acharya Ganesh is a high-precision, manual consultation that analyzes your exact sub-minute birth coordinates, D1 Rasi chart, and the critical D10 Dashamsha divisional harmonic. It is treated as strategic executive advisory and mathematical planetary timing rather than superstitious fortune-telling.'
  },
  {
    id: 'faq-2',
    category: 'Accuracy & Science',
    question: 'What if I do not know my exact birth time?',
    answer: 'A variation of even 5 to 10 minutes can shift the rising sign of your D10 Dashamsha chart. If your birth time is approximate, we perform Birth Time Rectification (BTR) by cross-referencing your major past milestone dates (education completion, first job date, past relocations, significant promotions). This guarantees that the final reading is calibrated with razor-sharp accuracy.'
  },
  {
    id: 'faq-3',
    category: 'Consultation',
    question: 'How does the consultation session take place?',
    answer: 'Consultations are conducted 1-on-1 via private Google Meet or Zoom. Before the call, Acharya Ganesh manually spends 45–60 minutes pre-calculating your D1, D9, and D10 charts. During the 45-minute call, we walk you through your career roadmap, identify your optimal switch/promotion windows, defuse existing corporate hurdles, and answer all your specific questions. You receive an HD recording and a 25-page custom PDF blueprint within 24 hours.'
  },
  {
    id: 'faq-4',
    category: 'Timing & Privacy',
    question: 'Is my consultation and corporate information strictly confidential?',
    answer: '100% absolutely. Over 40% of our clients are senior executives, founders, high-ranking civil servants, and investment bankers. We maintain non-disclosure grade confidentiality. Your charts, discussions, company names, and personal data are never shared, published, or stored in public databases.'
  },
  {
    id: 'faq-5',
    category: 'Remedies',
    question: 'Do you recommend expensive or superstitious remedies?',
    answer: 'No. We strictly oppose fear-mongering and commercial astrology traps. Remedies are scientific, non-dogmatic, and focused on acoustic sound resonance (mantras), crystalline optic therapy (certified natural gemstones if suitable), charitable energetic shifts (dana), and behavioral habits (lifestyle alignment with your lagna lord). You are never pressured to purchase costly rituals.'
  },
  {
    id: 'faq-6',
    category: 'Consultation',
    question: 'Can I ask questions about business, government exams, and foreign relocation in one reading?',
    answer: 'Yes! Your 45-minute Executive Consultation covers all dimensions of your professional life—including job vs business viability, UPSC/state exam probability, foreign settlement/visa windows, and investment wealth yogas.'
  },
  {
    id: 'faq-7',
    category: 'Timing & Privacy',
    question: 'How soon can I get an appointment?',
    answer: 'To ensure painstaking manual chart preparation, Acharya Ganesh accepts a maximum of 5 consultations per day. Typically, appointments are available within 24 to 48 hours. Urgent priority slots for immediate job offer evaluation can be requested via our VIP WhatsApp line.'
  }
];

export const TRUST_MARQUEE_ITEMS = [
  { name: 'Forbes India Feature', type: 'media', icon: 'Sparkles' },
  { name: 'CNBC Awaaz Astrological Panel', type: 'media', icon: 'Award' },
  { name: 'Times of India Recognized', type: 'media', icon: 'TrendingUp' },
  { name: 'Google 5-Star Reviews (2,400+)', type: 'review', icon: 'Star' },
  { name: 'National Astrology Conclave Awardee', type: 'award', icon: 'ShieldCheck' },
  { name: 'Fortune 500 Alumni Guided (Google, Meta, MSFT)', type: 'corporate', icon: 'Building' },
  { name: 'UPSC & Civil Services Top 50 Rankers', type: 'govt', icon: 'Crown' },
  { name: 'Zee Business Leadership Speaker', type: 'media', icon: 'Tv' },
  { name: '100% Private & Encrypted', type: 'trust', icon: 'Lock' }
];

export const STATS_HIGHLIGHTS = [
  { value: '50,000+', label: 'Global Professionals Guided', subtext: 'Across 42 countries' },
  { value: '17+ Years', label: 'Vedic Master Experience', subtext: 'D1 & D10 Specialist' },
  { value: '4.98 / 5.0', label: 'Google Review Score', subtext: '2,400+ Verified Ratings' },
  { value: '94.2%', label: 'Career Timing Accuracy', subtext: 'Validated by client milestones' }
];
