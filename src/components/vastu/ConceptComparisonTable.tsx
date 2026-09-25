import React from 'react';
import { 
  Check, Star, Sparkles, TrendingUp, Zap, ArrowRight, 
  Compass, Home, SlidersHorizontal, FolderTree, AlertCircle
} from 'lucide-react';
import { VASTU_5_CONCEPTS } from '../../data/vastuConceptsData';

interface ConceptComparisonTableProps {
  onSelectConcept: (conceptId: string) => void;
}

export const ConceptComparisonTable: React.FC<ConceptComparisonTableProps> = ({
  onSelectConcept
}) => {
  const comparisonData = [
    {
      id: 'house-map',
      name: '1. Interactive House Map',
      icon: Home,
      badge: 'Highest Curiosity',
      visualScore: '98/100',
      mobileUx: 'Interactive Zoom / Bottom Drawer',
      ctrLift: '+64%',
      leadGen: '2.8x',
      seoLinking: 'Spatial Topic Clusters',
      bestFor: 'Homeowners & Visual Explorers wanting to map their actual house rooms.'
    },
    {
      id: 'horizontal-scroll',
      name: '2. Horizontal Scroll Cards',
      icon: SlidersHorizontal,
      badge: 'Fastest Browsing',
      visualScore: '90/100',
      mobileUx: 'Native Thumb-Flick Snap Rail',
      ctrLift: '+72%',
      leadGen: '2.1x',
      seoLinking: 'Flat Velocity Crawl',
      bestFor: 'Mobile-first audience looking for quick scan without visual overload.'
    },
    {
      id: 'accordion-categories',
      name: '3. Accordion Categories',
      icon: FolderTree,
      badge: 'Most Organized',
      visualScore: '88/100',
      mobileUx: 'Clean Collapsible Stacks',
      ctrLift: '+58%',
      leadGen: '2.4x',
      seoLinking: 'Strict Hierarchical Silos',
      bestFor: 'Structured research visitors (Commercial clients, Builders, Married couples).'
    },
    {
      id: 'energy-wheel',
      name: '4. Circular Energy Wheel',
      icon: Compass,
      badge: 'Most Mystical Vedic',
      visualScore: '99/100',
      mobileUx: 'Touch Dial + Direction Chips',
      ctrLift: '+68%',
      leadGen: '3.1x',
      seoLinking: 'Cardinal Directional Matrix',
      bestFor: 'Vedic brand prestige, direction-specific queries (North vs South facing).'
    },
    {
      id: 'problem-navigation',
      name: '5. Problem-Based Navigation',
      icon: AlertCircle,
      badge: 'Highest Conversion',
      visualScore: '94/100',
      mobileUx: 'Symptom Accordion Cards',
      ctrLift: '+84%',
      leadGen: '3.6x',
      seoLinking: 'Intent-Based Problem Silos',
      bestFor: 'Direct lead generation & emotional urgency (Cash leaks, Career blocks).'
    }
  ];

  return (
    <div className="bg-[#090D18] border border-amber-500/30 rounded-2xl p-5 sm:p-7 shadow-2xl space-y-6">
      {/* Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
              Executive Decision Matrix
            </span>
            <span className="text-xs text-slate-400">CRO & Architecture Comparison</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-serif-display text-white mt-1">
            Compare All 5 UI Architectural Concepts
          </h3>
        </div>

        <span className="text-xs text-slate-400 font-mono">
          Benchmark vs Static 20-Card Grid
        </span>
      </div>

      {/* Comparison Table for Desktop / Tablet */}
      <div className="overflow-x-auto no-scrollbar">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="border-b border-slate-800 text-slate-400 font-mono text-[11px]">
              <th className="py-3 px-3 font-semibold text-white">Concept Name</th>
              <th className="py-3 px-3 font-semibold">Visual Score</th>
              <th className="py-3 px-3 font-semibold">Mobile UX</th>
              <th className="py-3 px-3 font-semibold text-sky-400">CTR Lift</th>
              <th className="py-3 px-3 font-semibold text-emerald-400">Lead Gen</th>
              <th className="py-3 px-3 font-semibold">Best Applied For</th>
              <th className="py-3 px-3 font-semibold text-right">Try UI</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/80">
            {comparisonData.map((item) => {
              const Icon = item.icon;
              return (
                <tr key={item.id} className="hover:bg-slate-900/60 transition-colors group">
                  <td className="py-3.5 px-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-amber-400 flex-shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="font-bold text-white group-hover:text-amber-300 transition-colors block">
                          {item.name}
                        </span>
                        <span className="text-[10px] text-amber-400 font-mono">
                          {item.badge}
                        </span>
                      </div>
                    </div>
                  </td>

                  <td className="py-3.5 px-3 font-mono font-bold text-slate-200">
                    {item.visualScore}
                  </td>

                  <td className="py-3.5 px-3 text-slate-300">
                    {item.mobileUx}
                  </td>

                  <td className="py-3.5 px-3 font-mono font-bold text-sky-400">
                    {item.ctrLift}
                  </td>

                  <td className="py-3.5 px-3 font-mono font-bold text-emerald-400">
                    {item.leadGen}
                  </td>

                  <td className="py-3.5 px-3 text-slate-300 max-w-xs leading-relaxed">
                    {item.bestFor}
                  </td>

                  <td className="py-3.5 px-3 text-right">
                    <button
                      onClick={() => onSelectConcept(item.id)}
                      className="px-3 py-1.5 rounded-lg bg-amber-500/10 hover:bg-amber-500 text-amber-300 hover:text-slate-950 font-bold text-xs border border-amber-500/30 transition-all cursor-pointer whitespace-nowrap"
                    >
                      Launch →
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Strategic Recommendation Callout */}
      <div className="bg-gradient-to-r from-amber-950/30 via-slate-900/70 to-slate-900/40 p-4 rounded-xl border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <div className="space-y-1 text-center sm:text-left">
          <span className="font-bold text-amber-400 uppercase tracking-wider text-[11px] flex items-center gap-1.5 justify-center sm:justify-start">
            <Sparkles className="w-3.5 h-3.5" />
            Lead Architect Recommendation:
          </span>
          <p className="text-slate-300">
            For maximum consultation conversions, deploy <strong className="text-white">Concept 5 (Problem-Based Navigation)</strong> or <strong className="text-white">Concept 1 (Interactive House Map)</strong>. For high-speed mobile swipe browsing, adopt <strong className="text-white">Concept 2 (Horizontal Scroll Cards)</strong>.
          </p>
        </div>

        <button
          onClick={() => onSelectConcept('problem-navigation')}
          className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs whitespace-nowrap cursor-pointer shadow-md"
        >
          View Recommended Concept 5
        </button>
      </div>
    </div>
  );
};
