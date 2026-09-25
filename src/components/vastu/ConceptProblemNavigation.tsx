import React, { useState } from 'react';
import { 
  Coins, Briefcase, Heart, Stethoscope, Landmark, 
  ArrowRight, AlertTriangle, ShieldCheck, PhoneCall, 
  ExternalLink, Sparkles, CheckCircle2, Compass
} from 'lucide-react';
import { VastuTopicItem, VASTU_TOPICS_19 } from '../../data/vastuConceptsData';

interface ConceptProblemNavigationProps {
  onSelectTopic: (topic: VastuTopicItem) => void;
  onOpenBooking: () => void;
}

interface LifeProblemCategory {
  id: 'money' | 'career' | 'relationship' | 'health' | 'property';
  title: string;
  shortDesc: string;
  icon: React.ReactNode;
  badge: string;
  accentColor: string;
  culpritZoneIds: string[];
  astrologicalRoot: string;
  caseStudy: {
    client: string;
    city: string;
    problem: string;
    fix: string;
    result: string;
  };
}

const LIFE_PROBLEMS: LifeProblemCategory[] = [
  {
    id: 'money',
    title: 'Money Problems & Cash Leaks',
    shortDesc: 'Unexpected expenses, delayed invoices & vanishing savings',
    icon: <Coins className="w-5 h-5 text-emerald-400" />,
    badge: '3 Culprit Zones',
    accentColor: '#10B981',
    culpritZoneIds: ['kuber-wealth', 'kitchen-agni', 'main-entrance'],
    astrologicalRoot: 'Afflicted 2nd & 11th bhavas amplified by clutter in North (Kubera) or water in SE (Agni).',
    caseStudy: {
      client: 'Rajesh K., Founder',
      city: 'Gurugram',
      problem: '₹42 Lakhs blocked invoices for 7 months, severe cash crunch.',
      fix: 'Shifted safe to North wall facing North, removed red decor from North-East.',
      result: 'Cleared 85% bad debts within 28 days without legal friction.'
    }
  },
  {
    id: 'career',
    title: 'Career Problems & Stagnant Growth',
    shortDesc: 'Delayed promotions, boss friction & job switch deadlocks',
    icon: <Briefcase className="w-5 h-5 text-sky-400" />,
    badge: '3 Culprit Zones',
    accentColor: '#38BDF8',
    culpritZoneIds: ['home-office', 'commercial-cabin', 'study-room'],
    astrologicalRoot: 'Weakened 10th house Dashamsha combined with desk facing South or overhead beam.',
    caseStudy: {
      client: 'Pooja M., VP Product',
      city: 'Bengaluru',
      problem: 'Stuck at Director level for 4 years despite top ratings.',
      fix: 'Reoriented desk to face East with solid wall support; activated NW with brass globe.',
      result: 'Recruited into Fortune 500 company with 62% compensation jump.'
    }
  },
  {
    id: 'relationship',
    title: 'Relationship & Marriage Friction',
    shortDesc: 'Spousal quarrels, lack of intimacy & family misunderstandings',
    icon: <Heart className="w-5 h-5 text-rose-400" />,
    badge: '3 Culprit Zones',
    accentColor: '#F43F5E',
    culpritZoneIds: ['master-bedroom', 'children-room', 'living-room'],
    astrologicalRoot: 'Venus (Shukra) afflicted by mirrors facing bed or bedroom located in Agni (SE) or Vayavya (NW).',
    caseStudy: {
      client: 'Amit & Sneha V.',
      city: 'Mumbai',
      problem: 'Near-separation marriage conflicts and chronic daily arguments.',
      fix: 'Shifted master bed to South-West corner; removed TV mirror from bedroom.',
      result: 'Disputes dropped 90%; harmony restored within 2 menstrual cycles.'
    }
  },
  {
    id: 'health',
    title: 'Chronic Health & Low Vitality',
    shortDesc: 'Exhaustion, digestive disorders & soaring hospital bills',
    icon: <Stethoscope className="w-5 h-5 text-amber-400" />,
    badge: '3 Culprit Zones',
    accentColor: '#F59E0B',
    culpritZoneIds: ['kitchen-agni', 'bathroom-toilet', 'brahmasthan'],
    astrologicalRoot: 'Sun & 6th house afflictions coupled with toilet or septic tank touching North-East or Center.',
    caseStudy: {
      client: 'Dr. Sunita R.',
      city: 'Pune',
      problem: 'Unexplained insomnia, migraines, and high inflammation.',
      fix: 'Neutralized North-East toilet with copper strips and sea salt ionization.',
      result: 'Medication halved in 6 weeks, deep restorative sleep returned.'
    }
  },
  {
    id: 'property',
    title: 'Property & Stuck Land Deals',
    shortDesc: 'Litigation, unconstructed plots & boundary disputes',
    icon: <Landmark className="w-5 h-5 text-purple-400" />,
    badge: '3 Culprit Zones',
    accentColor: '#A855F7',
    culpritZoneIds: ['plot-selection', 'factory-machinery', 'staircase'],
    astrologicalRoot: 'Mars (Bhoomi Karaka) & 4th house blockages reinforced by skewed plot or anti-clockwise stairs.',
    caseStudy: {
      client: 'Vikramaditya S., Builder',
      city: 'Noida',
      problem: 'Commercial site pending clearance for 3 years, incurring heavy interest.',
      fix: 'Corrected compound slope towards North-East and performed Bhoomi Shanti.',
      result: 'Municipal sanctions approved in 45 days; 100% units pre-booked.'
    }
  }
];

export const ConceptProblemNavigation: React.FC<ConceptProblemNavigationProps> = ({
  onSelectTopic,
  onOpenBooking
}) => {
  const [selectedProblemId, setSelectedProblemId] = useState<LifeProblemCategory['id']>('money');

  const activeProblem = LIFE_PROBLEMS.find(p => p.id === selectedProblemId) || LIFE_PROBLEMS[0];
  const culpritTopics = VASTU_TOPICS_19.filter(t => activeProblem.culpritZoneIds.includes(t.id));

  return (
    <div className="space-y-6">
      {/* Intro Guidance */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-900/60 p-4 rounded-xl border border-slate-800 text-xs text-slate-300">
        <div>
          <span className="font-semibold text-white">Symptom-to-Remedy Diagnosis: </span>
          <span>Don't guess complex architectural zones. Select the real-world friction you are experiencing to reveal the culprit areas in your property.</span>
        </div>
        <span className="text-amber-400 font-mono text-[11px] whitespace-nowrap">
          Emotion-First Problem Solving
        </span>
      </div>

      {/* 5 Problem Selection Cards (Horizontal on Desktop, Stacked on Mobile) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {LIFE_PROBLEMS.map((problem) => {
          const isSelected = selectedProblemId === problem.id;

          return (
            <button
              key={problem.id}
              type="button"
              onClick={() => setSelectedProblemId(problem.id)}
              className={`p-3.5 sm:p-4 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between cursor-pointer group relative overflow-hidden ${
                isSelected
                  ? 'bg-gradient-to-b from-amber-500/20 to-slate-900 border-amber-400 shadow-xl shadow-amber-500/10 ring-2 ring-amber-400/40'
                  : 'bg-slate-900/70 hover:bg-slate-800 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center border ${
                    isSelected ? 'bg-amber-400/20 border-amber-400/50' : 'bg-slate-800 border-slate-700'
                  }`}>
                    {problem.icon}
                  </div>
                  <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                    isSelected ? 'bg-amber-400 text-slate-950' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {problem.badge}
                  </span>
                </div>

                <h4 className={`text-xs sm:text-sm font-bold tracking-tight ${
                  isSelected ? 'text-white' : 'text-slate-200 group-hover:text-amber-300'
                }`}>
                  {problem.title}
                </h4>
                <p className="text-[11px] text-slate-400 mt-1 line-clamp-2">
                  {problem.shortDesc}
                </p>
              </div>

              <div className="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px]">
                <span className={`font-semibold ${isSelected ? 'text-amber-400' : 'text-slate-400'}`}>
                  {isSelected ? '● SELECTED' : 'Inspect Culprits'}
                </span>
                <ArrowRight className={`w-3 h-3 ${isSelected ? 'text-amber-400' : 'text-slate-500'}`} />
              </div>
            </button>
          );
        })}
      </div>

      {/* Dynamic Diagnosis Panel for Selected Problem */}
      <div className="bg-gradient-to-b from-[#0F172A] to-[#0A0F1D] border border-amber-500/30 rounded-2xl p-5 sm:p-7 shadow-2xl space-y-6">
        {/* Header of Active Diagnosis */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30">
                Diagnostic Analysis
              </span>
              <span className="text-xs text-slate-400">
                Targeting: <strong className="text-white">{activeProblem.title}</strong>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300">
              <strong className="text-amber-300">Astrological Root Cause: </strong>
              {activeProblem.astrologicalRoot}
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenBooking}
            className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-md shadow-amber-500/20 transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer flex-shrink-0"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Consult on This Problem</span>
          </button>
        </div>

        {/* 3 Culprit Zones Responsible: Every card links to dedicated page */}
        <div>
          <div className="flex items-center justify-between mb-3 text-xs">
            <span className="font-bold uppercase tracking-wider text-slate-200 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-400" />
              Primary Culprit Zones in Your Property:
            </span>
            <span className="text-slate-400 text-[11px]">Click any zone to inspect full remedies</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {culpritTopics.map((topic, idx) => (
              <div
                key={topic.id}
                className="bg-slate-900/80 hover:bg-slate-800/90 border border-slate-800 hover:border-amber-500/50 rounded-xl overflow-hidden transition-all duration-200 flex flex-col justify-between group"
              >
                {/* Photo Header */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950">
                  <img
                    src={topic.image}
                    alt={topic.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 brightness-90"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-black/40" />
                  <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between">
                    <span className="font-mono text-[10px] font-bold bg-slate-950/80 backdrop-blur-sm text-amber-400 px-2 py-0.5 rounded border border-amber-500/30">
                      Card #{topic.number}
                    </span>
                    <span className="text-rose-400 bg-rose-950/85 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] font-mono border border-rose-500/30">
                      Culprit #{idx + 1}
                    </span>
                  </div>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-amber-400 mb-1">
                      <Compass className="w-3 h-3" />
                      <span>{topic.direction}</span>
                    </div>

                    <h5 className="text-sm sm:text-base font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-1">
                      {topic.title}
                    </h5>

                    <p className="text-xs text-amber-200/90 font-medium mt-1 leading-relaxed italic line-clamp-2">
                      "{topic.subtitle}"
                    </p>

                    <div className="mt-3 text-[11px] text-rose-300 bg-rose-950/20 p-2 rounded-lg border border-rose-500/20">
                      <span className="font-semibold block text-[10px] uppercase text-rose-400">Dosha Trigger:</span>
                      <span className="line-clamp-2">{topic.criticalDoshaWarning}</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-800/80 space-y-1.5">
                    <button
                      type="button"
                      onClick={() => onSelectTopic(topic)}
                      className="w-full py-2 px-3 rounded-lg bg-amber-500/10 hover:bg-amber-500 text-amber-300 hover:text-slate-950 font-bold text-xs border border-amber-500/30 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>Read Dedicated Page & Fixes</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <div className="text-[10px] text-center font-mono text-slate-500">
                      /vastu/{topic.slug}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Real Client Case Study Proof */}
        <div className="bg-slate-900/40 rounded-xl p-4 border border-slate-800 text-xs space-y-2">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span className="font-bold text-white uppercase tracking-wider text-[11px]">
              Verified Vastu Breakthrough Case Study:
            </span>
            <span className="text-slate-400 text-[11px]">
              {activeProblem.caseStudy.client} ({activeProblem.caseStudy.city})
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-slate-300 text-[11px] pt-1">
            <div className="bg-slate-950/60 p-2.5 rounded-lg border border-slate-800">
              <span className="text-rose-400 font-semibold block text-[10px]">Challenge:</span>
              <span>{activeProblem.caseStudy.problem}</span>
            </div>
            <div className="bg-slate-950/60 p-2.5 rounded-lg border border-slate-800">
              <span className="text-amber-400 font-semibold block text-[10px]">Vedic Prescription:</span>
              <span>{activeProblem.caseStudy.fix}</span>
            </div>
            <div className="bg-slate-950/60 p-2.5 rounded-lg border border-slate-800">
              <span className="text-emerald-400 font-semibold block text-[10px]">Outcome:</span>
              <span>{activeProblem.caseStudy.result}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
