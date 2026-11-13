export interface AboutSeoFields {
  pageTitle: string;
  metaDescription: string;
  canonicalUrl: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
}

export interface AtAGlanceFact {
  label: string;
  value: string;
}

export interface JourneyItem {
  title: string;
  description: string;
}

export interface AchievementStatItem {
  number: string;
  label: string;
}

export interface TrustItem {
  title: string;
  description: string;
}

export interface ClientStoryItem {
  category: string;
  person: string;
  story: string;
  outcome: string;
}

export interface AboutFaqItem {
  question: string;
  answer: string;
}

export interface AboutPageCmsData {
  seo: AboutSeoFields;
  hero: {
    hindiLine: string;
    h1: string;
    subheading: string;
    intro: string;
    trustChips: string[];
    primaryCta: string;
    secondaryCta: string;
  };
  atAGlance: AtAGlanceFact[];
  journey: {
    heading: string;
    intro: string;
    items: JourneyItem[];
    pullQuote: string;
  };
  visionMission: {
    heading: string;
    missionLabel: string;
    missionText: string;
    visionLabel: string;
    visionText: string;
  };
  expertise: {
    heading: string;
    intro: string;
    featuredCard: {
      title: string;
      description: string;
      tags: string[];
    };
    cards: {
      title: string;
      description: string;
    }[];
  };
  achievements: {
    heading: string;
    intro: string;
    stats: AchievementStatItem[];
  };
  whyTrust: {
    heading: string;
    items: TrustItem[];
  };
  testimonials: {
    heading: string;
    intro: string;
    stories: ClientStoryItem[];
    ratingPrefix: string;
    verifiedReviewsLabel: string;
    videoReviewsLabel: string;
  };
  learning: {
    heading: string;
    body: string;
    coursesCta: string;
    youtubeCta: string;
    coursesUrl: string;
    youtubeUrl: string;
  };
  faqs: {
    heading: string;
    items: AboutFaqItem[];
  };
  contact: {
    heading: string;
    body: string;
    bookCta: string;
    callCta: string;
    address: string;
    email: string;
    phonePrimary: string;
    phoneSecondary: string;
    whatsappNumber: string;
    citiesServed: string;
    socials: {
      whatsapp: string;
      youtube: string;
      instagram: string;
      facebook: string;
    };
    disclaimer: string;
  };
}

export const DEFAULT_ABOUT_PAGE_DATA: AboutPageCmsData = {
  seo: {
    pageTitle: 'Acharya Ganesh – Hanish Bagga | Vedic Astrologer & Astro-Vastu Expert',
    metaDescription:
      'For 17+ years, Acharya Ganesh (Hanish Bagga) has read birth charts one-on-one to help people decide on career, marriage, money and home with clarity.',
    canonicalUrl: 'https://acharyaganesh.com/about',
    ogTitle: 'Acharya Ganesh – Hanish Bagga · Vedic Astrologer & Astro-Vastu Expert',
    ogDescription:
      'For 17+ years, Acharya Ganesh has read birth charts one-on-one to help people decide on career, marriage, money and home with clarity. No generic software reports, only a close reading of your own kundli.',
    ogImage: 'https://acharyaganesh.com/assets/acharya-ganesh-hanish-bagga.jpg'
  },
  hero: {
    hindiLine: 'आचार्य गणेश',
    h1: 'Acharya Ganesh',
    subheading: 'Hanish Bagga · Vedic Astrologer & Astro-Vastu Expert',
    intro:
      'For 17+ years, Acharya Ganesh has read birth charts one-on-one to help people decide on career, marriage, money and home with clarity. No generic software reports, only a close reading of your own kundli.',
    trustChips: [
      '17+ years of practice',
      '50,000+ charts analysed',
      '10K+ TV shows & media',
      '5.0 Google rating'
    ],
    primaryCta: 'Book a consultation',
    secondaryCta: 'Chat on WhatsApp'
  },
  atAGlance: [
    {
      label: 'Also known as',
      value: 'Hanish Bagga'
    },
    {
      label: 'Practice',
      value: 'Vedic astrology, Vastu, Astro-Vastu'
    },
    {
      label: 'Based in',
      value: 'Indirapuram, Ghaziabad'
    },
    {
      label: 'Consults',
      value: 'Offline, Online, across India and worldwide'
    }
  ],
  journey: {
    heading: 'A spiritual journey that began with one question: why does life unfold this way?',
    intro:
      'Acharya Ganesh turned a lifelong pull towards Vedic wisdom into a practice that has now guided tens of thousands of people.',
    items: [
      {
        title: 'The calling',
        description:
          'Drawn to Vedic astrology as a way to understand the patterns behind life, he began with the classical foundations: grahas, bhavas, rashis and dashas.'
      },
      {
        title: 'Years of study and practice',
        description:
          'He tested classical principles against real lives, building a working command of 25,000+ Vedic astrology rules.'
      },
      {
        title: 'One-on-one consultations',
        description:
          'Private readings on career, marriage, wealth and health and Astro-Vastu. One rule stayed fixed: read the actual chart, never a template.'
      },
      {
        title: 'YouTube and Media',
        description:
          'His plain-spoken way of explaining astrology led to a YouTube community of 158K+ subscribers.'
      },
      {
        title: 'Teaching the next generation',
        description:
          'Structured courses, from free fundamentals to advanced planetary combinations, so students can learn astrology themselves.'
      }
    ],
    pullQuote: '“Astrology cannot control your future. It can help you meet it prepared.”'
  },
  visionMission: {
    heading: 'Vision and mission',
    missionLabel: 'Mission',
    missionText:
      'To make authentic Vedic astrology simple, honest and useful, so every person can understand their chart and act on it with confidence.',
    visionLabel: 'Vision',
    visionText:
      'A world where people turn to astrology for clarity and preparation, never for fear or dependence.'
  },
  expertise: {
    heading: 'Experience and expertise',
    intro: '17+ years across three connected disciplines, all rooted in your birth chart.',
    featuredCard: {
      title: 'Vedic astrology',
      description:
        'Birth chart (D1), divisional charts such as the Dashamsha (D10), Vimshottari Dasha and transit analysis, applied to the questions people ask most.',
      tags: [
        'Career prediction',
        'Love & matchmaking',
        'Wealth astrology',
        'Health astrology',
        'Litigation astrology',
        'Muhurta',
        'Numerology',
        'Kundli reports'
      ]
    },
    cards: [
      {
        title: 'Vastu & Astro-Vastu',
        description:
          'Home, office and workstation guidance that works with your horoscope, not against it.'
      },
      {
        title: 'Spiritual guidance',
        description:
          'Mantras, remedies and online pujas such as Rudrabhishek and Kaal Sarp Dosh, prescribed only after the full chart is studied.'
      }
    ]
  },
  achievements: {
    heading: 'Achievements in numbers',
    intro: 'Built one chart, one client and one student at a time.',
    stats: [
      {
        number: '50,000+',
        label: 'Consultations & charts analysed'
      },
      {
        number: '17+',
        label: 'Years of experience'
      },
      {
        number: '10K+',
        label: 'TV shows & media appearances'
      },
      {
        number: '99%',
        label: 'Accuracy & trust'
      },
      {
        number: '5.0',
        label: 'Google rating, 5,000+ reviews'
      }
    ]
  },
  whyTrust: {
    heading: 'Why trust Acharya Ganesh',
    items: [
      {
        title: 'Ethical guidance',
        description:
          'No fear tactics and no guaranteed outcomes. Remedies are suggested only when your chart calls for them, and gemstones are never prescribed from your sun sign alone.'
      },
      {
        title: 'Personalised consultation',
        description:
          'Every session is 1-on-1 and private. Your birth chart, D10 and running dashas are studied line by line, with a remedy chart and summary after the call.'
      },
      {
        title: 'Research-based Vedic approach',
        description:
          'Classical principles, applied with discipline: houses, divisional charts and planetary timing read together instead of one transit in isolation.'
      },
      {
        title: 'Client-first philosophy',
        description:
          'Plain language, 100% confidentiality, slots seven days a week and a callback within an hour of booking.'
      }
    ]
  },
  testimonials: {
    heading: 'Client stories',
    intro: 'Professionals who used career astrology to decide when to move, wait or build.',
    stories: [
      {
        category: 'Job switch & timing',
        person: 'Rajesh Kulkarni, Principal Software Architect, Bengaluru',
        story:
          'After four years with little change in pay or role, he had his D10 chart and dasha periods studied and learned which window favoured a move.',
        outcome: 'Outcome: Switched in the advised window to a better-paid, more challenging role.'
      },
      {
        category: 'Promotion & growth',
        person: 'Pooja Sundaram, VP Marketing & Growth, Mumbai',
        story:
          'Under pressure at work and close to resigning, she was told the difficult phase was temporary and given steps to stay steady.',
        outcome: 'Outcome: Avoided a hasty exit and was offered a leadership role within months.'
      },
      {
        category: 'Business & startups',
        person: 'Vikramaditya Rao, Founder & MD, Hyderabad / Dubai',
        story:
          'Torn between a job and entrepreneurship, he had the 6th, 7th, 10th and 11th houses compared against his running periods.',
        outcome: 'Outcome: Planned his exit and launched the business at the recommended time.'
      }
    ],
    ratingPrefix: '★ 5.0 on Google',
    verifiedReviewsLabel: 'Read verified reviews',
    videoReviewsLabel: 'Watch student video reviews'
  },
  learning: {
    heading: 'Learn Vedic astrology with him',
    body: 'Start with the free Building Blocks course, or watch free lessons on the YouTube channel.',
    coursesCta: 'Explore courses',
    youtubeCta: 'YouTube channel',
    coursesUrl: 'https://acharyaganesh.com/courses',
    youtubeUrl: 'https://www.youtube.com/@AcharyaGaneshOfficial'
  },
  faqs: {
    heading: 'FAQ',
    items: [
      {
        question: 'Who is Acharya Ganesh?',
        answer:
          'Acharya Ganesh, also known as Hanish Bagga, is a Vedic astrologer and Astro-Vastu expert with 17+ years of experience, based in Indirapuram, Ghaziabad. He guides clients across India and abroad.'
      },
      {
        question: 'What does he specialise in?',
        answer:
          'Career, love and matchmaking, wealth, health and litigation astrology, muhurta, numerology, Vastu and Astro-Vastu, along with spiritual remedies and online pujas.'
      },
      {
        question: 'Are consultations online?',
        answer:
          'Yes. Sessions are 1-on-1 over private video or phone call, open to clients in India, the USA, Canada, the UK and elsewhere.'
      },
      {
        question: 'Are readings generic software reports?',
        answer:
          'No. Each reading is prepared from your own birth chart, divisional charts and running dasha periods, and studied personally.'
      },
      {
        question: 'How do I book?',
        answer:
          'Fill out the booking form, message on WhatsApp at +91 73000-04325, or call the team. You will get a callback, usually within an hour.'
      }
    ]
  },
  contact: {
    heading: 'Talk to Acharya Ganesh',
    body: 'Tell us what you need clarity on. We will confirm your slot and guide you from there.',
    bookCta: 'Book a consultation',
    callCta: 'Call +91 73000-04325',
    address:
      'Floor, 887, Lower Ground, B-1, Niti Khand I, Indirapuram, Ghaziabad, Uttar Pradesh 201014',
    email: 'info@acharyaganesh.com',
    phonePrimary: '+91 73000-04325',
    phoneSecondary: '+91 73000-04326',
    whatsappNumber: '917300004325',
    citiesServed:
      'Delhi, Noida, Ghaziabad, Gurgaon, Jaipur, Bangalore, Mumbai, Hyderabad, Chennai, Kolkata and 40+ more, plus clients worldwide.',
    socials: {
      whatsapp: 'https://wa.me/917300004325',
      youtube: 'https://www.youtube.com/@AcharyaGaneshOfficial',
      instagram: 'https://www.instagram.com/acharyaganesh_/',
      facebook: 'https://www.facebook.com/AcharyaGaneshOfficial/'
    },
    disclaimer:
      'Astrology offers guidance, not guarantees. It does not replace medical, legal or financial advice.'
  }
};
