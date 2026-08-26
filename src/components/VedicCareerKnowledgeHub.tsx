import React, { useState } from 'react';
import {
  BookOpen,
  Compass,
  Clock,
  Layers,
  TrendingUp,
  Briefcase,
  Award,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  ArrowRight,
  HelpCircle,
  Gem,
  Volume2,
  Smile,
  Compass as VastuIcon,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface VedicCareerKnowledgeHubProps {
  onOpenBooking: (tier?: any) => void;
}

export const VedicCareerKnowledgeHub: React.FC<VedicCareerKnowledgeHubProps> = ({ onOpenBooking }) => {
  const [expandedTopic, setExpandedTopic] = useState<string | null>(null);

  const housesData = [
    {
      house: '10th House',
      vedicName: 'Karma Bhava',
      significance: 'Profession, responsibilities, authority, reputation and public role',
      domain: 'Primary Career Anchor'
    },
    {
      house: '6th House',
      vedicName: 'Seva Bhava',
      significance: 'Employment, competition, service, workplace challenges and routine work',
      domain: 'Job & Daily Service'
    },
    {
      house: '2nd House',
      vedicName: 'Dhana Bhava',
      significance: 'Earned income, accumulated resources, speech and financial stability',
      domain: 'Wealth & Assets'
    },
    {
      house: '11th House',
      vedicName: 'Labha Bhava',
      significance: 'Gains, salary growth, professional networks and fulfillment of ambitions',
      domain: 'Salary & Promotions'
    },
    {
      house: '7th House',
      vedicName: 'Yuvati Bhava',
      significance: 'Business, partnerships, trade and dealings with the public',
      domain: 'Trade & Alliances'
    },
    {
      house: '3rd House',
      vedicName: 'Sahaja Bhava',
      significance: 'Initiative, communication, skills, courage and independent effort',
      domain: 'Self-Enterprise'
    }
  ];

  const timingFactors = [
    {
      title: 'Mahadasha & Antardasha',
      desc: 'The active planetary period creates the broader theme operating in your life. When planets connected with employment, profession, income or gains become active, career-related developments receive greater emphasis.'
    },
    {
      title: 'Jupiter Transit (Guru Gochar)',
      desc: 'Jupiter is associated with expansion, learning, guidance, and opportunity. Its transit in relation to important career houses becomes highly relevant during growth-oriented phases.'
    },
    {
      title: 'Saturn Transit (Shani Gochar)',
      desc: 'Saturn represents discipline, structure, responsibility, delay, persistence, and long-term effort. A difficult Saturn period indicates greater responsibilities, restructuring, or the need for sustained effort rather than failure.'
    },
    {
      title: 'Rahu & Ketu Planetary Nodes',
      desc: 'Traditionally associated with unconventional developments, sudden changes, foreign connections, technology shifts, detachment, and unusual professional trajectories.'
    }
  ];

  const remedies = [
    {
      icon: Gem,
      title: '1. Gemstone Guidance',
      desc: 'A gemstone may be considered when strengthening a particular functional benefic planet is appropriate according to the horoscope. Gemstones should never be selected merely by zodiac sign.'
    },
    {
      icon: Volume2,
      title: '2. Mantra & Spiritual Practices',
      desc: 'Traditional planetary sound vibrations (Beej mantras) and spiritual practices suggested according to the exact planetary affliction identified during the consultation.'
    },
    {
      icon: Smile,
      title: '3. Behavioral Remedies',
      desc: 'Practical adjustments: cultivating discipline, refining executive communication, avoiding impulsive exits, developing strategic skills, and building enduring professional habits.'
    },
    {
      icon: VastuIcon,
      title: '4. Workplace Vastu',
      desc: 'Desk orientation, cabin seating alignment, workspace energy organization, and practical spatial configurations to reduce friction and enhance mental clarity.'
    }
  ];

  return (
    <section
      id="knowledge-hub"
      className="py-16 lg:py-24 bg-[#FAF6F0] text-stone-800 relative overflow-hidden border-b border-[#E7D6C5]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ================= TOP SECTION HEADER ================= */}
        <div className="text-center max-w-4xl mx-auto mb-14 lg:mb-18">
          
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#E8DAC9] border border-[#D9C4AD] text-xs font-semibold text-[#6B2E13] mb-4 shadow-sm">
            <BookOpen className="w-3.5 h-3.5 text-[#6B2E13]" />
            <span className="uppercase tracking-wider">VEDIC CAREER ASTROLOGY GUIDE & KNOWLEDGE HUB</span>
          </div>

          {/* Main Display Heading */}
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#23120A] tracking-tight leading-[1.2]">
            How Vedic Astrology Studies Your Professional Life
          </h2>

          {/* Subtitle Paragraphs */}
          <div className="mt-4 space-y-2 text-xs sm:text-sm text-stone-700 font-normal leading-relaxed max-w-3xl mx-auto">
            <p>
              Your career is influenced by education, skills, experience, choices, economic conditions, opportunities and personal effort. Vedic astrology provides an additional framework for understanding professional tendencies and timing through the birth chart.
            </p>
            <p className="font-medium text-stone-800">
              A complete career astrology analysis does not depend on a single planet or house. Multiple factors are studied together before drawing conclusions.
            </p>
          </div>

        </div>

        {/* ================= 2-CARD TOP ROW (WHAT IS + HOW DOES IT WORK) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          
          {/* Card 1: What Is Career Astrology? */}
          <div className="rounded-2xl bg-white border border-[#EADBCA] p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-[#F6EFE6] border border-[#E9DACB] flex items-center justify-center text-[#6B2E13] flex-shrink-0">
                  <Compass className="w-4 h-4 stroke-[1.8]" />
                </div>
                <h3 className="font-serif-display text-xl font-bold text-[#23120A]">
                  What Is Career Astrology?
                </h3>
              </div>

              <div className="space-y-3.5 text-xs sm:text-[13px] text-stone-600 leading-relaxed font-normal">
                <p>
                  In the professional domain, an astrologer looks at the houses related to career, work, income, gains, initiative, business, education and fortune. Personalised career predictions, thus, call for more than merely reading the Sun sign.
                </p>
                <p>
                  The scheduling aspect is also crucial.{' '}
                  <strong className="font-semibold text-stone-900">
                    Vimshottari Dasha, Antardasha and the important planetary transits
                  </strong>{' '}
                  are studied to determine the time when certain career themes will get more active. This is the difference between career prediction astrology and a daily or monthly horoscope.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: How Does Career Astrology by Date of Birth Work? */}
          <div className="rounded-2xl bg-white border border-[#EADBCA] p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-[#F6EFE6] border border-[#E9DACB] flex items-center justify-center text-[#6B2E13] flex-shrink-0">
                  <Clock className="w-4 h-4 stroke-[1.8]" />
                </div>
                <h3 className="font-serif-display text-xl font-bold text-[#23120A]">
                  How Does Career Astrology by Date of Birth Work?
                </h3>
              </div>

              <div className="space-y-3 text-xs sm:text-[13px] text-stone-600 leading-relaxed font-normal">
                <p>
                  Your date of birth determines the positions of your planets for the day you were born. But birth time and place are generally also needed for an exact professional analysis.
                </p>
                <p>
                  Career astrology by date of birth involves looking at the position of planets in the horoscope of an individual and not only his zodiac sign. The ascendant changes approximately every two hours; therefore, exact birth time is critical for house calculations.
                </p>
              </div>
            </div>

            {/* Gold Callout Box */}
            <div className="mt-5 p-3 rounded-xl bg-[#FBF5ED] border border-[#E6D4BF] text-[11px] sm:text-xs text-[#733314] font-medium leading-relaxed">
              Therefore, a full career reading by date and time provides significantly more tailored insight than a generic sun sign reading.
            </div>
          </div>

        </div>

        {/* ================= ASTROLOGICAL ARCHITECTURE: HOUSES TABLE CARD ================= */}
        <div className="rounded-2xl bg-white border border-[#EADBCA] p-6 sm:p-8 shadow-sm mb-12">
          
          {/* Header */}
          <div className="mb-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F6EFE6] border border-[#E5D2BE] text-[10px] font-bold uppercase tracking-wider text-[#7A3617] mb-2.5">
              <span>ASTROLOGICAL ARCHITECTURE</span>
            </div>
            <h3 className="font-serif-display text-2xl font-bold text-[#23120A]">
              Which Houses Are Important for Career Prediction Astrology?
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              Several houses become important when studying professional life in a birth chart:
            </p>
          </div>

          {/* Structured Table */}
          <div className="overflow-x-auto rounded-xl border border-stone-200 shadow-2xs">
            <table className="w-full text-left border-collapse text-xs sm:text-[13px]">
              <thead>
                <tr className="bg-[#3D1A0C] text-amber-100 font-semibold uppercase tracking-wider text-[11px]">
                  <th className="py-3 px-4 sm:px-5">House</th>
                  <th className="py-3 px-4 sm:px-5">Vedic Name</th>
                  <th className="py-3 px-4 sm:px-5">Career Significance</th>
                  <th className="py-3 px-4 sm:px-5 text-right sm:text-left">Domain</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                {housesData.map((row, idx) => (
                  <tr
                    key={idx}
                    className={idx % 2 === 0 ? 'bg-white hover:bg-amber-50/40' : 'bg-[#FCF9F5] hover:bg-amber-50/40'}
                  >
                    <td className="py-3.5 px-4 sm:px-5 font-bold text-stone-900 whitespace-nowrap">
                      {row.house}
                    </td>
                    <td className="py-3.5 px-4 sm:px-5 font-serif font-medium text-[#6B2E13] whitespace-nowrap">
                      {row.vedicName}
                    </td>
                    <td className="py-3.5 px-4 sm:px-5 leading-relaxed text-stone-600">
                      {row.significance}
                    </td>
                    <td className="py-3.5 px-4 sm:px-5">
                      <span className="inline-block px-2.5 py-1 rounded-md text-[10px] sm:text-[11px] font-semibold bg-[#F5ECE1] text-[#7A3617] border border-[#E5D2BE] whitespace-nowrap">
                        {row.domain}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Highlight Box below Table */}
          <div className="mt-5 p-4 rounded-xl bg-[#FBF5ED] border border-[#E6D4BF] text-xs sm:text-[13px] text-stone-700 leading-relaxed">
            <strong className="font-bold text-[#6B2E13] block mb-1">No house should be interpreted independently.</strong>
            For example, a strong 10th house may show professional ambition, while the 11th house provides additional information about gains from that profession. This combined approach is an essential cornerstone of accurate career astrology.
          </div>

        </div>

        {/* ================= D10 DASHAMSHA & JOB VS BUSINESS GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Why D10 Dashamsha is Important (6 cols) */}
          <div className="lg:col-span-6 rounded-2xl bg-white border border-[#EADBCA] p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#F6EFE6] border border-[#E9DACB] flex items-center justify-center text-[#6B2E13] flex-shrink-0">
                  <Layers className="w-5 h-5 stroke-[1.8]" />
                </div>
                <h3 className="font-serif-display text-xl font-bold text-[#23120A]">
                  Why Is the D10 Dashamsha Important for a Career?
                </h3>
              </div>

              <div className="space-y-3.5 text-xs sm:text-[13px] text-stone-600 leading-relaxed font-normal">
                <p>
                  One of the most popular divisional charts to study is the Dashamsha chart also known as D10 chart.
                </p>
                <p>
                  The main D1 chart forms the basis and a D10 gives a further layer of detail pertaining to career, responsibilities, authority, reputation and profession.
                </p>
                <p>
                  One of the steps of astrology career prediction is to see if the 10th lord is stronger or weaker than the career planets in both charts.
                </p>
                <p>
                  For instance, if the main horoscope shows a strong Mars and the D10 shows a weaker Mars, it would be more deeply studied. Therefore the D10 is helpful when learning about professional development over a period of time and not just a single placement.
                </p>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-stone-100 flex items-center gap-2 text-xs font-semibold text-[#6B2E13]">
              <CheckCircle2 className="w-4 h-4 text-amber-600" />
              <span>Evaluates micro-strengths beyond general sun-sign astrology</span>
            </div>
          </div>

          {/* Can Career Astrology Tell Job vs Business? (6 cols) */}
          <div className="lg:col-span-6 rounded-2xl bg-white border border-[#EADBCA] p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#F6EFE6] border border-[#E9DACB] flex items-center justify-center text-[#6B2E13] flex-shrink-0">
                  <Briefcase className="w-5 h-5 stroke-[1.8]" />
                </div>
                <h3 className="font-serif-display text-xl font-bold text-[#23120A]">
                  Can Astrology Tell Whether Job or Business Is Better?
                </h3>
              </div>

              <p className="text-xs sm:text-[13px] text-stone-600 leading-relaxed font-normal mb-4">
                Someone may have a secure job but want independence. Another person may already have a business but struggle with consistency. The answer requires comparison of several horoscope factors:
              </p>

              {/* 2-Column Comparison List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                {/* Employment */}
                <div className="p-3.5 rounded-xl bg-[#FAF6F0] border border-[#EADBCA]">
                  <div className="font-bold text-xs text-[#6B2E13] mb-2 flex items-center gap-1.5">
                    <span>When Employment Fits:</span>
                  </div>
                  <ul className="text-[11px] text-stone-600 space-y-1.5 list-disc pl-4">
                    <li>Strength of the 6th house</li>
                    <li>Condition of the 10th house</li>
                    <li>Saturn &amp; Sun stability</li>
                    <li>D10 Dashamsha stability</li>
                    <li>Current steady Dasha periods</li>
                  </ul>
                </div>

                {/* Business */}
                <div className="p-3.5 rounded-xl bg-[#FAF6F0] border border-[#EADBCA]">
                  <div className="font-bold text-xs text-[#6B2E13] mb-2 flex items-center gap-1.5">
                    <span>When Business Fits:</span>
                  </div>
                  <ul className="text-[11px] text-stone-600 space-y-1.5 list-disc pl-4">
                    <li>7th house &amp; 3rd house initiative</li>
                    <li>Mercury's strength &amp; trade acumen</li>
                    <li>2nd and 11th house connections</li>
                    <li>Rahu's influence &amp; Dhana Yogas</li>
                    <li>Partnership combinations</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-stone-100 text-[11px] sm:text-xs text-stone-500 italic">
              The purpose is not to force you into business or employment but to provide greater clarity before an important decision.
            </div>
          </div>

        </div>

        {/* ================= TIMING & TRANSITS ACCORDION / CARDS ================= */}
        <div className="rounded-2xl bg-white border border-[#EADBCA] p-6 sm:p-8 shadow-sm mb-12">
          
          <div className="mb-6">
            <h3 className="font-serif-display text-2xl font-bold text-[#23120A]">
              How Can Astrology Predict Job Change and Promotion Timing?
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              Timing is primarily studied through active Dasha periods and major planetary transits:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {timingFactors.map((f, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#FCF9F5] border border-[#EADBCA] flex flex-col justify-between"
              >
                <div>
                  <h4 className="font-bold text-xs sm:text-[13px] text-[#6B2E13] mb-2">
                    {f.title}
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed font-normal">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* ================= GOVT JOBS & VEDIC REMEDIES ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14">
          
          {/* Government Job Astrology (5 cols) */}
          <div className="lg:col-span-5 rounded-2xl bg-white border border-[#EADBCA] p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#F6EFE6] border border-[#E9DACB] flex items-center justify-center text-[#6B2E13] flex-shrink-0">
                  <Award className="w-5 h-5 stroke-[1.8]" />
                </div>
                <h3 className="font-serif-display text-xl font-bold text-[#23120A]">
                  Government Job Guidance
                </h3>
              </div>

              <div className="space-y-3 text-xs sm:text-[13px] text-stone-600 leading-relaxed font-normal">
                <p>
                  Government employment is a highly competitive career choice and no horoscope can replace preparation, eligibility, examination performance or recruitment procedures.
                </p>
                <p>
                  However, job astrology can be used to study planetary combinations traditionally associated with government roles, authority, administration, competition and public service.
                </p>
                <p>
                  The Sun, Saturn, Mars, Jupiter, 6th house, 10th house and relevant Dasha periods receive particular attention to help determine whether continuing preparation or keeping parallel corporate tracks is optimal.
                </p>
              </div>
            </div>

            <div className="mt-5 p-3 rounded-xl bg-[#FBF5ED] border border-[#E6D4BF] text-xs text-[#7A3617] font-medium">
              Evaluates administrative yogas &amp; competitive examination timing.
            </div>
          </div>

          {/* Remedies for Career Growth (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl bg-white border border-[#EADBCA] p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#F6EFE6] border border-[#E9DACB] flex items-center justify-center text-[#6B2E13] flex-shrink-0">
                  <Sparkles className="w-5 h-5 stroke-[1.8]" />
                </div>
                <h3 className="font-serif-display text-xl font-bold text-[#23120A]">
                  What Remedies Are Used for Career Growth?
                </h3>
              </div>

              <p className="text-xs text-stone-600 mb-4 leading-relaxed">
                Remedies should be selected only after studying the complete horoscope. There is no single mantra, gemstone or Vastu change that is equally suitable for everyone.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {remedies.map((rem, rIdx) => {
                  const Icon = rem.icon;
                  return (
                    <div
                      key={rIdx}
                      className="p-3.5 rounded-xl bg-[#FCF9F5] border border-[#EADBCA]"
                    >
                      <div className="flex items-center gap-2 font-bold text-xs text-[#6B2E13] mb-1.5">
                        <Icon className="w-3.5 h-3.5 text-amber-600" />
                        <span>{rem.title}</span>
                      </div>
                      <p className="text-[11px] sm:text-xs text-stone-600 leading-relaxed font-normal">
                        {rem.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-stone-100 text-[11px] text-stone-500">
              The goal is to complement your reading with practical steps that can be followed consistently.
            </div>
          </div>

        </div>

        {/* ================= FINAL GET PERSONALIZED GUIDANCE CTA BANNER ================= */}
        <div className="rounded-3xl bg-[#3A180B] border border-amber-600/40 p-8 sm:p-10 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-950/80 border border-amber-600/40 text-xs font-semibold text-amber-300">
              <Calendar className="w-3.5 h-3.5 text-amber-400" />
              <span>Get Personalized Career Guidance</span>
            </div>
            <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Ready to examine your career situation in greater depth?
            </h3>
            <p className="text-xs sm:text-sm text-amber-200/80 leading-relaxed font-normal">
              If you are dealing with career confusion, delayed promotion, job instability, repeated rejection, workplace pressure or an important professional decision, a personalized consultation can give you complete clarity.
            </p>
          </div>

          <div className="flex-shrink-0">
            <button
              type="button"
              onClick={() => onOpenBooking('executive')}
              className="px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-[#3A180B] bg-gradient-to-r from-amber-300 via-amber-200 to-amber-300 hover:from-amber-200 hover:to-amber-100 active:scale-[0.99] transition-all shadow-xl flex items-center gap-2 cursor-pointer"
            >
              <span>Book 1-on-1 Consultation with Acharya Ganesh</span>
              <ArrowRight className="w-4 h-4 text-[#3A180B]" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
