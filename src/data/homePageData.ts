export interface PromoMarqueeItem {
  prefix: string;
  linkLabel: string;
  href: string;
}

export interface HeroSlide {
  id: string;
  kicker: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
  gradientClass: string;
  glowStyle: string;
}

export interface ServiceOfferedItem {
  title: string;
  description: string;
  image: string;
  href: string;
}

export interface CourseCardItem {
  title: string;
  price: string;
  originalPrice: string;
  discountPercent: number;
  image: string;
  detailHref: string;
  buyHref: string;
}

export interface ZodiacSignItem {
  name: string;
  description: string;
  image: string;
  href: string;
}

export interface GalleryMemoryItem {
  id: number;
  image: string;
  alt: string;
}

export interface YouTubeVideoItem {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  url: string;
}

export interface StudentReviewVideoItem {
  id: number;
  label: string;
  videoUrl: string;
  studentName: string;
  program: string;
}

export interface HomeFaqItem {
  question: string;
  answer: string;
}

export const PROMO_MARQUEE_ITEMS: PromoMarqueeItem[] = [
  {
    prefix: 'Celebrate Shravan 2026 with devotion •',
    linkLabel: 'Book Rudrabhishek Puja',
    href: 'https://acharyaganesh.com/online-puja/rudrabhishek'
  },
  {
    prefix: 'Seek relief from Kaal Sarp Dosh •',
    linkLabel: 'Book Kaal Sarp Dosh Puja',
    href: 'https://acharyaganesh.com/kaal-sarp-dosh-puja-online'
  },
  {
    prefix: 'Find clarity with expert astrology •',
    linkLabel: 'Start Your Consultation',
    href: '#booking'
  },
  {
    prefix: 'Personalized astrology •',
    linkLabel: 'Book Consultation',
    href: '#booking'
  },
  {
    prefix: 'Honor Lord Shiva this Shravan 2026 •',
    linkLabel: 'Book Rudrabhishek Puja',
    href: 'https://acharyaganesh.com/online-puja/rudrabhishek'
  },
  {
    prefix: 'Nag Panchami special •',
    linkLabel: 'Book Kaal Sarp Dosh Puja',
    href: 'https://acharyaganesh.com/kaal-sarp-dosh-puja-online'
  }
];

export const HEADER_NAV_LINKS = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#best-astrologer-india' },
  { label: 'Courses', href: '#astrology-courses' },
  { label: 'Products', href: 'https://acharyaganesh.com/products' },
  { label: 'Reports', href: 'https://acharyaganesh.com/reports' },
  { label: 'Services', href: '#services-offered' },
  { label: 'Contact', href: '#footer-contact' },
  { label: 'Blogs', href: '#astrology-insights' }
];

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'match-making',
    kicker: 'Relationship Compatibility Guidance',
    title: 'Astrology for Match Making',
    subtitle: 'Know the compatibility with your partner through expert matchmaking analysis.',
    description:
      'Get personalized matchmaking insights based on Vedic astrology to better understand compatibility, emotional alignment, long-term harmony, and relationship success.',
    image: '/ag-images/hero-matchmaking.webp',
    imageAlt: 'Couple seeking kundli matching and marriage astrology consultation',
    gradientClass: 'bg-gradient-to-br from-[#4a1920] via-[#6b2830] to-[#3d1418]',
    glowStyle:
      'radial-gradient(ellipse 80% 70% at 18% 55%, rgba(255,210,195,0.14), transparent 58%)'
  },
  {
    id: 'career-prediction',
    kicker: 'Career Astrology Guidance',
    title: 'Career Prediction Through Astrology',
    subtitle: 'Discover the right opportunities, timing, and direction for your professional growth.',
    description:
      "Whether you're facing career confusion, planning a switch, exploring business, or seeking promotions, gain clarity through personalized Vedic astrology guidance.",
    image: '/ag-images/hero-career.webp',
    imageAlt: 'Career consultation and professional astrology guidance',
    gradientClass: 'bg-gradient-to-br from-[#2a1a28] via-[#44304a] to-[#1e1424]',
    glowStyle:
      'radial-gradient(ellipse 80% 70% at 18% 55%, rgba(235,210,255,0.12), transparent 58%)'
  },
  {
    id: 'wealth-astrology',
    kicker: 'Financial Growth Guidance',
    title: 'Wealth Astrology Consultation',
    subtitle: 'Understand financial opportunities, wealth timing, and prosperity through astrology.',
    description:
      'Unlock deeper financial clarity using your birth chart to identify wealth patterns, investment timing, prosperity opportunities, and financial strengths.',
    image: '/ag-images/hero-wealth.webp',
    imageAlt: 'Wealth astrology and financial growth consultation',
    gradientClass: 'bg-gradient-to-br from-[#3d2210] via-[#5c3a1c] to-[#2a180c]',
    glowStyle:
      'radial-gradient(ellipse 80% 70% at 18% 55%, rgba(255,220,175,0.14), transparent 58%)'
  }
];

export const HOME_STATS = [
  { value: '10K', label: 'TV Shows', iconKey: 'tv' as const },
  { value: '50,000+', label: 'Happy Clients', iconKey: 'clients' as const },
  { value: '17', label: 'Years', iconKey: 'years' as const },
  { value: '98%', label: 'Accuracy Rate', iconKey: 'accuracy' as const }
];

export const SERVICES_OFFERED: ServiceOfferedItem[] = [
  {
    title: 'Career Prediction',
    description: 'Discover the right career path and timing for professional success.',
    image: '/ag-images/service-career.webp',
    href: 'https://acharyaganesh.com/services/career-prediction'
  },
  {
    title: 'Health Astrology',
    description: 'Understand your health patterns and remedies through astrological guidance.',
    image: '/ag-images/service-health.webp',
    href: 'https://acharyaganesh.com/services/health-astrology'
  },
  {
    title: 'Love Astrology',
    description: 'Gain clarity in love and relationships with accurate love astrology insights.',
    image: '/ag-images/service-love.webp',
    href: 'https://acharyaganesh.com/services/love-astrology'
  },
  {
    title: 'Wealth Astrology',
    description: 'Unlock financial opportunities and growth based on your birth chart.',
    image: '/ag-images/service-wealth.webp',
    href: 'https://acharyaganesh.com/services/wealth-astrology'
  }
];

export const HOME_COURSES: CourseCardItem[] = [
  {
    title: "Punya Chakra & Pitru Paksh: Atma's Journey to Moksha",
    price: '₹1770',
    originalPrice: '₹5900',
    discountPercent: 70,
    image: '/ag-images/course-punya-chakra.webp',
    detailHref: 'https://acharyaganesh.com/course/punya-chakra-pitru-paksh-atmas-journey-to-moksha',
    buyHref: 'https://courses.acharyaganesh.com/courses/-Pitru-Paksha---RitualsRemedies-6aa27c65e080192b33372da1'
  },
  {
    title: '2 Planetary Combinations',
    price: '₹23600',
    originalPrice: '₹29500',
    discountPercent: 20,
    image: '/ag-images/course-2-planetary.webp',
    detailHref: 'https://acharyaganesh.com/course/2-planetary-combinations',
    buyHref: 'https://acharyaganesh.com/course/2-planetary-combinations'
  },
  {
    title: 'Complete Course on Planets and their effect on 12 Zodiac Signs & Houses in Kundli',
    price: '₹2950',
    originalPrice: '₹11801',
    discountPercent: 75,
    image: '/ag-images/course-planets-12-signs.webp',
    detailHref: 'https://acharyaganesh.com/course/complete-course-on-planets-and-their-effect-on-12-zodiac-signs-houses-in-kundli-1',
    buyHref: 'https://acharyaganesh.com/course/complete-course-on-planets-and-their-effect-on-12-zodiac-signs-houses-in-kundli-1'
  },
  {
    title: 'Prashna Kundali',
    price: '₹41300',
    originalPrice: '₹53100',
    discountPercent: 22,
    image: '/ag-images/course-prashna-kundali.webp',
    detailHref: 'https://acharyaganesh.com/course/prashna-kundali',
    buyHref: 'https://acharyaganesh.com/course/prashna-kundali'
  },
  {
    title: 'Diwali Workshop: Welcome Laxmi for Unlimited Prosperity with Effective Remedies',
    price: '₹2360',
    originalPrice: '₹2950',
    discountPercent: 20,
    image: '/ag-images/course-diwali.webp',
    detailHref: 'https://acharyaganesh.com/course/diwali-workshop-2026',
    buyHref: 'https://acharyaganesh.com/course/diwali-workshop-2026'
  },
  {
    title: 'Muhurta: The Power of Perfect Timing',
    price: '₹11800',
    originalPrice: '₹17700',
    discountPercent: 33,
    image: '/ag-images/course-muhurta.webp',
    detailHref: 'https://acharyaganesh.com/course/muhurta-the-power-of-perfect-timing',
    buyHref: 'https://acharyaganesh.com/course/muhurta-the-power-of-perfect-timing'
  },
  {
    title: 'Past Life Pending Karma',
    price: '₹59000',
    originalPrice: '₹116820',
    discountPercent: 49,
    image: '/ag-images/course-past-life.webp',
    detailHref: 'https://acharyaganesh.com/course/past-life-pending-karma',
    buyHref: 'https://acharyaganesh.com/course/past-life-pending-karma'
  },
  {
    title: 'Navratri: Shakti Ka Mahaparv',
    price: '₹590',
    originalPrice: '₹1290',
    discountPercent: 54,
    image: '/ag-images/course-navratri.webp',
    detailHref: 'https://acharyaganesh.com/course/navratri-workshop-2026',
    buyHref: 'https://acharyaganesh.com/course/navratri-workshop-2026'
  }
];

export const ZODIAC_SIGNS: ZodiacSignItem[] = [
  {
    name: 'Aries',
    description:
      'Aries, the first zodiac sign, is bold and adventurous. Mars ruled Aries individuals are brave, confident, and driven.',
    image: '/ag-images/zodiac-aries.webp',
    href: 'https://acharyaganesh.com/zodiac-signs/aries-zodiac-sign'
  },
  {
    name: 'Taurus',
    description:
      'Taurus, the second zodiac sign, is grounded, patient, and practical. Venus ruled Taurus individuals are reliable and persistent.',
    image: '/ag-images/zodiac-taurus.webp',
    href: 'https://acharyaganesh.com/zodiac-signs/taurus-zodiac-sign'
  },
  {
    name: 'Gemini',
    description:
      'Gemini, the third zodiac sign, is curious and versatile. Mercury ruled Gemini individuals are sociable and intelligent.',
    image: '/ag-images/zodiac-gemini.webp',
    href: 'https://acharyaganesh.com/zodiac-signs/gemini-zodiac-sign'
  },
  {
    name: 'Cancer',
    description:
      'Cancer, the fourth zodiac sign, is sensitive and sentimental. Moon ruled Cancer individuals are adaptable and protective.',
    image: '/ag-images/zodiac-cancer.webp',
    href: 'https://acharyaganesh.com/zodiac-signs/cancer-zodiac-sign'
  },
  {
    name: 'Leo',
    description:
      'Leo, the fifth zodiac sign, carries duty and honor. Sun ruled Leo individuals are vital, authoritative, and expressive.',
    image: '/ag-images/zodiac-leo.webp',
    href: 'https://acharyaganesh.com/zodiac-signs/leo-zodiac-sign'
  },
  {
    name: 'Virgo',
    description:
      'Virgo, the sixth zodiac sign, is practical and detail focused. Mercury ruled Virgo individuals are analytical and eloquent.',
    image: '/ag-images/zodiac-virgo.webp',
    href: 'https://acharyaganesh.com/zodiac-signs/virgo-zodiac-signs'
  },
  {
    name: 'Libra',
    description:
      'Libra, the seventh zodiac sign, is creative and diplomatic. Venus ruled Libra individuals handle challenges with grace.',
    image: '/ag-images/zodiac-libra.webp',
    href: 'https://acharyaganesh.com/zodiac-signs/libra-zodiac-sign'
  },
  {
    name: 'Scorpio',
    description:
      'Scorpio, the eighth zodiac sign, is passionate and mysterious. Mars ruled Scorpio individuals are steady and goal-oriented.',
    image: '/ag-images/zodiac-scorpio.webp',
    href: 'https://acharyaganesh.com/zodiac-signs/scorpio-zodiac-signs'
  },
  {
    name: 'Sagittarius',
    description:
      'Sagittarius, the ninth zodiac sign, is wise and exploratory. Jupiter ruled Sagittarius individuals are dynamic and enthusiastic.',
    image: '/ag-images/zodiac-sagittarius.webp',
    href: 'https://acharyaganesh.com/zodiac-signs/sagittarius-zodiac-sign'
  },
  {
    name: 'Capricorn',
    description:
      'Capricorn, the tenth zodiac sign, reflects responsibility and perseverance. Saturn ruled Capricorn individuals are pragmatic.',
    image: '/ag-images/zodiac-capricorn.webp',
    href: 'https://acharyaganesh.com/zodiac-signs/capricorn-zodiac-sign'
  },
  {
    name: 'Aquarius',
    description:
      'Aquarius, the eleventh zodiac sign, values service and conscious living. Saturn ruled Aquarius individuals are focused.',
    image: '/ag-images/zodiac-aquarius.webp',
    href: 'https://acharyaganesh.com/zodiac-signs/aquarius-zodiac-signs'
  },
  {
    name: 'Pisces',
    description:
      'Pisces often lives between dreams and reality. Jupiter ruled Pisces individuals are compassionate, harmonious, and empathetic.',
    image: '/ag-images/zodiac-pisces.webp',
    href: 'https://acharyaganesh.com/zodiac-signs/pisces-zodiac-sign'
  }
];

export const GALLERY_MEMORIES: GalleryMemoryItem[] = [
  { id: 1, image: '/ag-images/gallery-1.webp', alt: 'Acharya Ganesh memory 1' },
  { id: 2, image: '/ag-images/gallery-2.webp', alt: 'Acharya Ganesh memory 2' },
  { id: 3, image: '/ag-images/gallery-3.webp', alt: 'Acharya Ganesh memory 3' },
  { id: 4, image: '/ag-images/gallery-4.webp', alt: 'Acharya Ganesh memory 4' },
  { id: 5, image: '/ag-images/gallery-5.webp', alt: 'Acharya Ganesh memory 5' },
  { id: 6, image: '/ag-images/gallery-6.webp', alt: 'Acharya Ganesh memory 6' },
  { id: 7, image: '/ag-images/gallery-7.webp', alt: 'Acharya Ganesh memory 7' },
  { id: 8, image: '/ag-images/gallery-8.webp', alt: 'Acharya Ganesh memory 8' },
  { id: 9, image: '/ag-images/gallery-9.webp', alt: 'Acharya Ganesh memory 9' },
  { id: 10, image: '/ag-images/gallery-10.webp', alt: 'Acharya Ganesh memory 10' },
  { id: 11, image: '/ag-images/gallery-11.webp', alt: 'Acharya Ganesh memory 11' },
  { id: 12, image: '/ag-images/gallery-12.webp', alt: 'Acharya Ganesh memory 12' },
  { id: 13, image: '/ag-images/gallery-13.webp', alt: 'Acharya Ganesh memory 13' },
  { id: 14, image: '/ag-images/gallery-14.webp', alt: 'Acharya Ganesh memory 14' },
  { id: 15, image: '/ag-images/gallery-15.webp', alt: 'Acharya Ganesh memory 15' },
  { id: 16, image: '/ag-images/gallery-16.webp', alt: 'Acharya Ganesh memory 16' },
  { id: 17, image: '/ag-images/gallery-17.webp', alt: 'Acharya Ganesh memory 17' },
  { id: 18, image: '/ag-images/gallery-18.webp', alt: 'Acharya Ganesh memory 18' }
];

export const FEATURED_YOUTUBE_VIDEO: YouTubeVideoItem = {
  id: 'rfPiM5-jRW0',
  title: 'धन का संघर्ष क्यों हो रहा है? | Grahon Ki Dasha Jo Rok Rahi Hai Aapki Tarakki',
  category: 'Wealth Astrology',
  thumbnail: '/ag-images/yt-rfPiM5-jRW0.jpg',
  url: 'https://www.youtube.com/watch?v=rfPiM5-jRW0'
};

export const RECOMMENDED_YOUTUBE_VIDEOS: YouTubeVideoItem[] = [
  {
    id: 'rfPiM5-jRW0',
    title: 'धन का संघर्ष क्यों हो रहा है? | Grahon Ki Dasha Jo Rok Rahi Hai Aapki Tarakki',
    category: 'Wealth Astrology',
    thumbnail: '/ag-images/yt-rfPiM5-jRW0.jpg',
    url: 'https://www.youtube.com/watch?v=rfPiM5-jRW0'
  },
  {
    id: 'JntdytB2ego',
    title: 'Love Marriage Yoga in Horoscope: Will You Marry Your Choice?',
    category: 'Match Making',
    thumbnail: '/ag-images/yt-JntdytB2ego.jpg',
    url: 'https://www.youtube.com/watch?v=JntdytB2ego'
  },
  {
    id: 'NMT0vqaYo5k',
    title: "गारंटी से AMEER बन जाओगे — 15 दिनों में 'CROREPATI' बनने वाला RULE | Money Podcast",
    category: 'Wealth Astrology',
    thumbnail: '/ag-images/yt-NMT0vqaYo5k.jpg',
    url: 'https://www.youtube.com/watch?v=NMT0vqaYo5k'
  },
  {
    id: 'l7O7Y1ciNww',
    title: 'Dhan yoga in your kundli | कुंडली में कौन से योग बना सकते हैं आपको करोड़पति?',
    category: 'Wealth Astrology',
    thumbnail: '/ag-images/yt-l7O7Y1ciNww.jpg',
    url: 'https://www.youtube.com/watch?v=l7O7Y1ciNww'
  },
  {
    id: 'rrcS6kr2QEc',
    title: 'शनि वक्री हो रहे हैं — मेष, मकर कुंभ सावधान! | Shani Dev | SKT Podcast',
    category: 'Horoscope Insights',
    thumbnail: '/ag-images/yt-rrcS6kr2QEc.jpg',
    url: 'https://www.youtube.com/watch?v=rrcS6kr2QEc'
  },
  {
    id: 'ukVx9CGMoD0',
    title: 'Kundli Mein Bimari Ka Yog Kaise Dekhen? | Health Problems in Vedic Astrology',
    category: 'Vedic Wisdom',
    thumbnail: '/ag-images/yt-ukVx9CGMoD0.jpg',
    url: 'https://www.youtube.com/watch?v=ukVx9CGMoD0'
  },
  {
    id: 'OxKbimDgugE',
    title: 'Rahu & Saturn Conjunction 2025: Saturn Transit Podcast | Rahu transit 2025',
    category: 'Career Astrology',
    thumbnail: '/ag-images/yt-OxKbimDgugE.jpg',
    url: 'https://www.youtube.com/watch?v=OxKbimDgugE'
  },
  {
    id: 'GwvZwZWSMeA',
    title: 'Kundli Kaise Dekhe | खुदकी कुंडली कैसे पढ़े? | How to read Kundali',
    category: 'Vedic Wisdom',
    thumbnail: '/ag-images/yt-GwvZwZWSMeA.jpg',
    url: 'https://www.youtube.com/watch?v=GwvZwZWSMeA'
  },
  {
    id: 'NkUefLBwF5g',
    title: 'Kundli Ka Kaun Sa Ghar Deta Hai Stock Market Se Paisa?',
    category: 'Career Astrology',
    thumbnail: '/ag-images/yt-NkUefLBwF5g.jpg',
    url: 'https://www.youtube.com/watch?v=NkUefLBwF5g'
  }
];

export const STUDENT_REVIEWS: StudentReviewVideoItem[] = [
  {
    id: 1,
    label: 'Student review 1',
    videoUrl: 'https://acharyaganesh.com/wp-content/uploads/2025/02/1.mp4',
    studentName: 'Student Review 01',
    program: 'Vedic Astrology Program'
  },
  {
    id: 2,
    label: 'Student review 2',
    videoUrl: 'https://acharyaganesh.com/wp-content/uploads/2025/02/2.mp4',
    studentName: 'Student Review 02',
    program: 'Astro-Vastu Practitioner'
  },
  {
    id: 3,
    label: 'Student review 3',
    videoUrl: 'https://acharyaganesh.com/wp-content/uploads/2025/02/3.mp4',
    studentName: 'Student Review 03',
    program: 'Predictive Astrology Batch'
  },
  {
    id: 4,
    label: 'Student review 4',
    videoUrl: 'https://acharyaganesh.com/wp-content/uploads/2025/02/4.mp4',
    studentName: 'Student Review 04',
    program: 'Lal Kitab & Kundli Analysis'
  },
  {
    id: 5,
    label: 'Student review 5',
    videoUrl: 'https://acharyaganesh.com/wp-content/uploads/2025/02/5.mp4',
    studentName: 'Student Review 05',
    program: 'Vedic Astrology Certification'
  },
  {
    id: 6,
    label: 'Student review 6',
    videoUrl: 'https://acharyaganesh.com/wp-content/uploads/2025/02/6.mp4',
    studentName: 'Student Review 06',
    program: 'Dashamsha & Career Mastery'
  },
  {
    id: 7,
    label: 'Student review 7',
    videoUrl: 'https://acharyaganesh.com/wp-content/uploads/2025/02/7.mp4',
    studentName: 'Student Review 07',
    program: 'Astro-Vastu Consultation'
  },
  {
    id: 8,
    label: 'Student review 8',
    videoUrl: 'https://acharyaganesh.com/wp-content/uploads/2025/02/811.mp4',
    studentName: 'Student Review 08',
    program: 'Advanced Planetary Combinations'
  }
];

export const SEO_EDITORIAL_SECTION = {
  heading: 'Best Astrologer in India for Trusted and Personalized Astrology Predictions',
  paragraphs: [
    'Whether you feel stuck at a point in your life or want to understand your life challenges and opportunities, astrology plays an important role as a source of guidance from centuries in India. Whether you want clarity in your career, relationships, health, finances or personal growth at Acharya Ganesh offers you meaningful insights with personalised consultations that are solely designed for you to help you make informed decisions in life. Acharya Ganesh is Recognised by many as one of the best astrologers in India. At Acharya Ganesh, we combine traditional Vedic wisdom with a practical approach to modern life.',
    "In today's digital world, finding the best online astrologer in India has become easier than ever. Acharya Ganesh provides convenient online consultations, which allow you to receive expert astrological guidance from the comfort of your home. Get deep insights through detailed birth chart analysis and personalized recommendations and gain a deeper understanding of your life path and future possibilities.",
    'Being a trusted astrology expert, at Acharya Ganesh we specialize in various branches of Vedic astrology such as career prediction by date of birth, Love and Relationship Guidance, Wealth Astrology, health prediction astrology , Numerology, Vastu Consultation and Muhurta Selection. Each and every consultation you get is tailored to your personalised Birth Chart, which ensures accurate and meaningful insights.',
    'Getting a professional astrologer consultation can make a significant difference in the quality of guidance you receive as a seeker. At Acharya Ganesh we are solely committed to offering you the Best, Honest, Reliable and Personalized Solutions tailored by your Birth Chart which helps you to navigate your life with ease. Whether you are in a situation where you are facing difficulty in making any important decisions or seeking direction to make your life better, expert astrological advice always provides valuable clarity.',
    'Many individuals consider Acharya Ganesh among the top astrologer India because of his deep-rooted knowledge about Vedic astrology with expertise in 25,000+ rules and years of experience with accurate approaches. His consultations are designed not only to predict future possibilities but also to empower people with practical and straightforward guidance for achieving success and happiness.',
    'If you are seeking guidance from an astrologer online, Acharya Ganesh makes this process very simple and accessible. Through online sessions, clients can discuss about their concerns and receive detailed guidance regarding career opportunities, marriage prospects, business growth, family matters and personal development with the help of their personal birth chart.',
    'Being a famous astrologer online, Acharya Ganesh helped countless lives by providing clarity and confidence through accurate birth chart analysis and personalized recommendations to make their life happy. His sole purpose is to help others to know about their strengths and weaknesses by providing meaningful solutions and helping them make better decisions in life for a brighter and happier future.',
    'Whether you are seeking for answers about your future or want someone who can provide meaningful guidance for an important life decision, Acharya Ganesh is purely dedicated to helping you to achieve your goal with greater success, prosperity and peace of mind through authentic astrological wisdom. Experience the benefits of getting proper guidance with the help of astrology by an Indian astrologer who understands the rich traditions of Vedic astrology while addressing modern concerns of the people.'
  ]
};

export const HOME_FAQS: HomeFaqItem[] = [
  {
    question: 'Why choose acharya ganesh for astrology consultation?',
    answer:
      'Acharya Ganesh is a trusted brand for people to seek guidance through astrology consultation. With years of experience, they focus more on practical solutions for career, marriage, health, finance and personal growth. Many people choose Acharya Ganesh because of the personalized approach and very easy to understand guidance. Acharya Ganesh astrologer provides remedies based on Vedic principle to help you to make better decisions with confidence.'
  },
  {
    question: 'How can I Book an Online Astrology Consultation?',
    answer:
      'Booking an astrology consultation is simple by visiting acharya ganesh platform and select the service of your choice and get back a call back within an hour or book your consultation from anywhere through phone by contacting the team. Many people prefer this convenient method because they can receive astrology by Indian astrologer experts without travelling. The process is easy, secure and accessible for clients across India and around the world.'
  },
  {
    question: 'Is online Astrology Consultation accurate?',
    answer:
      'The accuracy of an online astrology consultation depends on the knowledge of the expert and the date of birth details provided by the client. At acharya ganesh consultation are based on detailed horoscope analysis using Vedic astrology. Calculations remain same weather you get online or offline and may people online consultations reliable and helpful. Online Astrologers India service has become more and more popular as they offer professional guidance while allowing you to get it from anywhere.'
  },
  {
    question: 'Can an Indian Astrologer Predict my Future?',
    answer:
      'Yes, they can help you to identify your future opportunities, strengths and challenges that you may face in your life or in future. While astrologer cannot control the future, astrology by Indian astrologer methods can only provide you valuable insights based on planet positions in your birth charts. Acharya Ganesh Astrologer can guide you regarding your career, relationships, finances and many more. The purpose of astrology is to help you to make an informed choice and prepare yourself for upcoming phases with great awareness.'
  },
  {
    question: 'How do Online astrologers in India work?',
    answer:
      'Online Astrologers India work by studying the Birth Chart to prepare a detailed horoscope. Consultations are usually conducted through phone calls, video calls or online meetings. Expert at Ganesh Astro analyse planetary positions, dashas and transits to answer your question with accuracy. They provide practical guidance and personal remedies when required and because of this it allows people to access professional astrological support conveniently form any location without visiting an office.'
  },
  {
    question: 'Which is the Best Online Astrologer in India?',
    answer:
      'The best astrologer is someone who is able to combines their experience, knowledge and practical guidance. Many people consider Acharya Ganesh Astrologer services among he trusted options because of their personalized consultations and focus on helping clients under any situations clearly. If you are looking for the best astrologer online consultation India, choose someone who listens carefully and explains predictions simply, and offers meaningful solutions rather than creating confusion.'
  },
  {
    question: 'Can Astrology help with Marriage Problems?',
    answer:
      'Yes, astrology can provide useful insights into compatibility, communication patterns and relationship challenges but at the end it depends on the partners to fix things. Astrology consultation first step is to analyse the birth charts of partners to identify their strengths and potential guidance that may improve understanding and harmony in life. While astrology cannot replace communication and efforts, it can offer a deeper perspective on relationship and support better decision making.'
  },
  {
    question: 'Can astrology Guide my Career Decisions?',
    answer:
      "Astrology can help to identify talent, opportunities and favourable periods for growth. During an astrology consultation, experts' study important houses, planets and dashas related to career and growth. Acharya Ganesh provides guidance on job changes, opportunities, educational choices and planning. By understanding your abilities and timing, astrology can support smarter decision and helps to make better move towards your professional goals with clarity."
  },
  {
    question: 'How can Astrology Improve My Finances?',
    answer:
      'Astrology helps to identify financial patterns, opportunities and periods that may influence wealth creation. A Detailed Astrology consultation, astrologers analyse financial houses, planets and future trends in your personal birth chart. Ganesh Astro Guidance can help you to understand when to invest, save, expand any business or remain cautious with money. While astrology does not guarantee you to gain wealth from astrology, it can provide valuable insights that supports you to take better financial decision making.'
  },
  {
    question: 'Why Trust Acharya Ganesh Astrology Guidance?',
    answer:
      'Lakhs of people trust Acharya Ganesh because they focuses on authentic Vedic Astrology, Personalized guidance and practical solutions. Their aim is to simplify complex astrological concepts and provide advice that you can apply in daily life. Many people also explore Acharya Ganesh Courses to become better at astrology and practice it on daily life. Weather you need Career guidance, relationship advices or life direction their goal is to make meaning full support through reliable astrological insights.'
  },
  {
    question: 'Can I Consult an Astrologer Online if I Live outside India?',
    answer:
      'Yes, you can easily get consultation by an astrologer online from anywhere in the world. International clients regularly use best astrologer online consultation India services through phone call and video consultation. Acharya Ganesh provides online session that makes astrology accessible regardless of your location. Weather you live in USA, Canada, UK or any other country you can receive astrology by Indian Astrologer guidance conveniently from your home.'
  },
  {
    question: 'Who is the Best Astrologer in India?',
    answer:
      'The Best Astrologer in India is someone who combines his knowledge in Vedic astrology with years of practical experience and has a strong track record of making life better as an example or testimonials. A trusted astrology expert and professional astrologer like Acharya Ganesh is able to provide personalised insights based on analysing a personal birth chart rather than providing generic predictions. Today, many people prefer an online astrologer in India or a Famous astrologer online because they can easily talk to astrologer online and receive expert guidance from anywhere. Have any questions? Just contact us and get a proper consultation.'
  }
];

export const FOOTER_QUICK_LINKS = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: 'https://acharyaganesh.com/about-us' },
  { label: 'Courses', href: '#astrology-courses' },
  { label: 'Services', href: '#services-offered' },
  { label: 'Reports', href: 'https://acharyaganesh.com/reports' },
  { label: 'Online Puja', href: 'https://acharyaganesh.com/online-puja' },
  { label: 'Web Stories', href: 'https://acharyaganesh.com/web-stories' },
  { label: 'Spirituality', href: 'https://acharyaganesh.com/spirituality' },
  { label: 'Contact', href: 'https://acharyaganesh.com/contact' },
  { label: 'FAQs', href: '#home-faqs' }
];

export const FOOTER_CITIES_COL_1 = [
  { name: 'Delhi', href: 'https://acharyaganesh.com/locations/best-astrologer-in-delhi' },
  { name: 'Noida', href: 'https://acharyaganesh.com/locations/best-astrologer-in-noida' },
  { name: 'Ghaziabad', href: 'https://acharyaganesh.com/locations/best-astrologer-in-ghaziabad' },
  { name: 'Gurgaon', href: 'https://acharyaganesh.com/locations/best-astrologer-in-gurgaon' },
  { name: 'Jaipur', href: 'https://acharyaganesh.com/locations/best-astrologer-in-jaipur' },
  { name: 'Bangalore', href: 'https://acharyaganesh.com/locations/best-astrologer-in-bangalore' },
  { name: 'Mumbai', href: 'https://acharyaganesh.com/locations/best-astrologer-in-mumbai' },
  { name: 'Hyderabad', href: 'https://acharyaganesh.com/locations/best-astrologer-in-hyderabad' },
  { name: 'Chennai', href: 'https://acharyaganesh.com/locations/best-astrologer-in-chennai' },
  { name: 'Pune', href: 'https://acharyaganesh.com/locations/best-numerologist-in-pune' }
];

export const FOOTER_CITIES_COL_2 = [
  { name: 'Kolkata', href: 'https://acharyaganesh.com/locations/best-astrologer-in-kolkata' },
  { name: 'Lucknow', href: 'https://acharyaganesh.com/locations/best-astrologer-in-lucknow' },
  { name: 'Faridabad', href: 'https://acharyaganesh.com/locations/best-astrologer-in-faridabad' },
  { name: 'Kanpur', href: 'https://acharyaganesh.com/locations/best-astrologer-in-kanpur' },
  { name: 'Agra', href: 'https://acharyaganesh.com/locations/best-astrologer-in-agra' },
  { name: 'Indore', href: 'https://acharyaganesh.com/locations/best-astrologer-in-indore' },
  { name: 'Chandigarh', href: 'https://acharyaganesh.com/locations/best-astrologer-in-chandigarh' },
  { name: 'Amritsar', href: 'https://acharyaganesh.com/locations/best-astrologer-in-amritsar' },
  { name: 'Patna', href: 'https://acharyaganesh.com/locations/best-astrologer-in-patna' },
  { name: 'Ahmedabad', href: 'https://acharyaganesh.com/locations/best-astrologer-in-ahmedabad' }
];

export const FOOTER_SERVICES = [
  { label: 'Astro Vastu', href: 'https://acharyaganesh.com/services/astro-vastu' },
  { label: 'Astrology Guidance', href: 'https://acharyaganesh.com/services/astrology' },
  { label: 'Match Making', href: 'https://acharyaganesh.com/services/match-making' },
  { label: 'Career Prediction', href: 'https://acharyaganesh.com/services/career-prediction' },
  { label: 'Health Astrology', href: 'https://acharyaganesh.com/services/health-astrology' },
  { label: 'Love Astrology', href: 'https://acharyaganesh.com/services/love-astrology' },
  { label: 'Muhurta Astrology', href: 'https://acharyaganesh.com/services/muhurta' },
  { label: 'Wealth Astrology', href: 'https://acharyaganesh.com/services/wealth-astrology' },
  { label: 'Litigation Astrology', href: 'https://acharyaganesh.com/services/litigation' }
];

export type AstrologyQnaCategory = 'Planets' | 'Houses' | 'Zodiac Signs' | 'Prashna Kundali';

export interface AstrologyQnaItem {
  id: string;
  category: AstrologyQnaCategory;
  topicTitle: string;
  question: string;
  shortPreview: string;
  answer: string;
  detailedAnswer?: string;
  keyTakeaway: string;
}

export const ASTROLOGY_QNA_CATEGORIES: AstrologyQnaCategory[] = [
  'Planets',
  'Houses',
  'Zodiac Signs',
  'Prashna Kundali'
];

export const ASTROLOGY_QNA_ITEMS: AstrologyQnaItem[] = [
  {
    id: 'venus-7th-house',
    category: 'Planets',
    topicTitle: 'Venus in the 7th House',
    question: 'What happens when Venus is placed in the 7th house?',
    shortPreview: 'Explore its traditional meaning for relationships, partnerships and attraction.',
    answer: 'Venus in the 7th house fosters charm, devotion, and graceful partnership harmony.',
    detailedAnswer:
      'In classical Vedic astrology, the 7th house governs marriage, committed partnerships, and public dealings, while Venus (Shukra) signifies love, harmony, beauty, and diplomacy. Placed here, Venus generally fosters natural charm, mutual affection, and a desire for balanced, graceful relationships—though exact results always depend on its sign dignity, aspects, and running Dasha.',
    keyTakeaway: 'Favors warmth and partnership harmony when unafflicted in the birth chart.'
  },
  {
    id: 'saturn-10th-house',
    category: 'Planets',
    topicTitle: 'Saturn in the 10th House',
    question: 'Does Saturn in the 10th house delay career growth?',
    shortPreview: 'Understand how Shani builds lasting authority through steady discipline and patience.',
    answer: 'Saturn rarely denies growth; steady effort builds lasting authority and respect.',
    detailedAnswer:
      'Saturn in the 10th house rarely denies success; rather, it rewards sustained effort, integrity, and structured responsibility. Early career milestones may feel slower, yet over time it often grants enduring leadership and institutional respect.',
    keyTakeaway: 'Slow early momentum often matures into durable professional authority.'
  },
  {
    id: '10th-house-career',
    category: 'Houses',
    topicTitle: 'The 10th House (Karma Bhava)',
    question: 'How does the 10th house shape your career and public standing?',
    shortPreview: 'See how planets and the 10th lord indicate vocation, reputation, and leadership.',
    answer: 'The 10th house and D10 chart reveal vocation, achievements, and public standing.',
    detailedAnswer:
      'Known as Karma Bhava, the 10th house represents profession, visible achievements, and societal contribution. Reading both the Rashi (D1) 10th house and the Dashamsha (D10) chart reveals whether an individual thrives best in advisory roles, independent enterprise, or structured leadership.',
    keyTakeaway: 'Read the 10th house alongside the 10th lord and D10 Dashamsha chart.'
  },
  {
    id: '7th-house-partnerships',
    category: 'Houses',
    topicTitle: 'The 7th House (Kalatra Bhava)',
    question: 'What does the 7th house reveal beyond marriage?',
    shortPreview: 'Discover its classical role in business alliances, contracts, and client relationships.',
    answer: 'Beyond marriage, it governs business alliances, contracts, and client rapport.',
    detailedAnswer:
      'While widely known as the house of spouse and marriage, the 7th house equally governs business partnerships, legal agreements, and one-on-one client rapport. Its strength indicates how harmoniously you collaborate with others.',
    keyTakeaway: 'Key house for both committed relationships and business collaborations.'
  },
  {
    id: 'lagna-vs-rashi',
    category: 'Zodiac Signs',
    topicTitle: 'Ascendant vs. Moon Sign',
    question: 'Which sign matters more in Vedic astrology: Lagna or Moon Sign?',
    shortPreview: 'Learn how your Rising Sign maps life events while the Moon Sign reflects your mind.',
    answer: 'Lagna sets your 12-house life map, while Moon Sign governs mind and transits.',
    detailedAnswer:
      'Your Ascendant (Lagna) fixes the exact house structure of all 12 life areas and is essential for accurate timing and event prediction. Meanwhile, your Moon Sign (Janma Rashi) reflects emotional temperament, mental resilience, and serves as the anchor for transit (Gochar) and Nakshatra reading.',
    keyTakeaway: 'Lagna sets the house blueprint; Moon sign governs mind and transits.'
  },
  {
    id: 'fire-earth-air-water',
    category: 'Zodiac Signs',
    topicTitle: 'Elements of the 12 Signs',
    question: 'How do Agni, Prithvi, Vayu and Jala elements shape personality?',
    shortPreview: 'See how Vedic elemental temperament explains compatibility and natural instincts.',
    answer: 'Fire brings drive, Earth practicality, Air intellect, and Water deep intuition.',
    detailedAnswer:
      'Fire signs bring initiative, Earth signs bring practicality, Air signs bring curiosity and communication, and Water signs bring intuition and emotional depth. Understanding elemental balance helps explain why certain partnerships feel effortless.',
    keyTakeaway: 'Elemental harmony reveals natural communication and decision styles.'
  },
  {
    id: 'prashna-kundali-meaning',
    category: 'Prashna Kundali',
    topicTitle: 'Prashna Kundali Explained',
    question: 'How does Prashna Kundali answer a question without birth time?',
    shortPreview: 'Discover how a chart cast for the moment of inquiry reveals immediate clarity.',
    answer: 'A chart cast for the exact moment of inquiry reveals answers without birth time.',
    detailedAnswer:
      'Prashna Kundali (Horary Vedic Astrology) casts a planetary chart for the exact time and place a sincere question is asked. When exact birth details are unavailable—or when you face an urgent career, property, or legal choice—the Prashna Lagna and Moon reveal the unfolding outcome.',
    keyTakeaway: 'Ideal for time-sensitive decisions or charts with uncertain birth time.'
  },
  {
    id: 'prashna-timing',
    category: 'Prashna Kundali',
    topicTitle: 'Timing Events via Prashna',
    question: 'Can Prashna Kundali indicate when an outcome will happen?',
    shortPreview: 'Understand classical planetary degrees and Moon movement used for near-term timing.',
    answer: 'Planetary aspects and Moon motion in Prashna indicate pace and near-term timing.',
    detailedAnswer:
      'Classical Prashna texts examine the applying aspects between the Lagna lord and Karyesha (significator of the question) alongside Navamsha strength to estimate whether a matter resolves quickly, faces a temporary hurdle, or requires patience.',
    keyTakeaway: 'Applying planetary aspects indicate pace and near-term fruition.'
  }
];
