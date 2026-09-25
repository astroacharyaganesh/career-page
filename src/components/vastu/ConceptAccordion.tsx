import React, { useState } from 'react';
import { 
  ChevronDown, ChevronUp, ArrowRight, ShieldCheck, 
  Home, Building2, Coins, HeartHandshake, Compass, 
  Sparkles, ExternalLink, PhoneCall, BookOpen
} from 'lucide-react';
import { VastuTopicItem, VASTU_TOPICS_19 } from '../../data/vastuConceptsData';

interface ConceptAccordionProps {
  onSelectTopic: (topic: VastuTopicItem) => void;
  onOpenBooking: () => void;
}

interface MacroCategory {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  badge: string;
  color: string;
  itemIds: string[];
}

const CATEGORIES: MacroCategory[] = [
  {
    id: 'home-vastu',
    title: '1. Home Sanctuary Vastu',
    subtitle: 'Main Entrance, Master Bed, Kitchen, Mandir, Living & Staircases',
    icon: <Home className="w-5 h-5 text-sky-400" />,
    badge: '7 Dedicated Guides',
    color: '#0284C7',
    itemIds: [
      'main-entrance',
      'master-bedroom',
      'kitchen-agni',
      'pooja-mandir',
      'living-room',
      'staircase',
      'study-room',
      'balcony-terrace'
    ]
  },
  {
    id: 'wealth-vastu',
    title: '2. Wealth & Treasury Vastu',
    subtitle: 'Kuber Vault, Cash Flow, Water Sump & Core Brahmasthan Geometry',
    icon: <Coins className="w-5 h-5 text-emerald-400" />,
    badge: '4 Dedicated Guides',
    color: '#10B981',
    itemIds: [
      'kuber-wealth',
      'brahmasthan',
      'water-tank',
      'plot-selection'
    ]
  },
  {
    id: 'commercial-vastu',
    title: '3. Commercial & Business Vastu',
    subtitle: 'Executive Cabins, Factory Floors, Retail Stores & Home Offices',
    icon: <Building2 className="w-5 h-5 text-amber-400" />,
    badge: '4 Dedicated Guides',
    color: '#F59E0B',
    itemIds: [
      'commercial-cabin',
      'factory-machinery',
      'retail-showroom',
      'home-office'
    ]
  },
  {
    id: 'relationship-vastu',
    title: '4. Relationship & Family Harmony Vastu',
    subtitle: 'Marital Stability, Children Mindsets, Drainage & Environmental Prana',
    icon: <HeartHandshake className="w-5 h-5 text-rose-400" />,
    badge: '4 Dedicated Guides',
    color: '#F43F5E',
    itemIds: [
      'children-room',
      'bathroom-toilet',
      'septic-drainage'
    ]
  }
];

export const ConceptAccordion: React.FC<ConceptAccordionProps> = ({
  onSelectTopic,
  onOpenBooking
}) => {
  const [openCategoryId, setOpenCategoryId] = useState<string>('home-vastu');

  const toggleCategory = (id: string) => {
    setOpenCategoryId(prev => (prev === id ? '' : id));
  };

  return (
    <div className="space-y-4">
      {/* Intro Context Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-900/60 p-4 rounded-xl border border-slate-800 text-xs text-slate-300">
        <div>
          <span className="font-semibold text-white">Hierarchical Vedic Taxonomy: </span>
          <span>Organized into 4 foundational life quadrants. Expand any category to access deep remedies and dedicated page analyses.</span>
        </div>
        <span className="text-amber-400 font-mono text-[11px] whitespace-nowrap">
          Zero-Clutter Progressive Disclosure
        </span>
      </div>

      {/* 4 Macro Category Accordion Drawers */}
      <div className="space-y-3">
        {CATEGORIES.map((cat) => {
          const isOpen = openCategoryId === cat.id;
          const categoryItems = VASTU_TOPICS_19.filter(t => cat.itemIds.includes(t.id));

          return (
            <div
              key={cat.id}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                isOpen
                  ? 'bg-gradient-to-b from-[#0F172A] to-[#0A0F1D] border-amber-500/40 shadow-xl'
                  : 'bg-slate-900/60 hover:bg-slate-900 border-slate-800'
              }`}
            >
              {/* Category Header Row (Clickable Accordion Trigger) */}
              <button
                type="button"
                onClick={() => toggleCategory(cat.id)}
                className="w-full p-4 sm:p-5 flex items-center justify-between text-left cursor-pointer transition-colors"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center flex-shrink-0 shadow-inner">
                    {cat.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                        {cat.title}
                      </h3>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700 hidden sm:inline">
                        {cat.badge}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {cat.subtitle}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs text-amber-400 font-semibold hidden md:inline">
                    {isOpen ? 'Collapse' : 'Explore Zones'}
                  </span>
                  <div className={`w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 text-amber-400 border-amber-500/40' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </button>

              {/* Expandable Items Body */}
              {isOpen && (
                <div className="px-4 sm:px-6 pb-6 pt-2 border-t border-slate-800/80 space-y-4 animate-fadeIn">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                    {categoryItems.map((item) => (
                      <div
                        key={item.id}
                        className="group bg-slate-900/80 hover:bg-slate-800/90 border border-slate-800 hover:border-amber-500/40 rounded-xl overflow-hidden transition-all duration-200 flex flex-col justify-between"
                      >
                        {/* Compact Image Banner */}
                        <div className="relative aspect-[21/9] w-full overflow-hidden bg-slate-950">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 brightness-90"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-black/40" />
                          <div className="absolute top-2 left-2 flex items-center gap-1.5">
                            <span className="font-mono text-[10px] font-bold bg-slate-950/80 backdrop-blur-sm text-amber-400 px-2 py-0.5 rounded border border-amber-500/30">
                              #{item.number}
                            </span>
                            <span className="font-mono text-[10px] text-slate-200 bg-slate-950/80 backdrop-blur-sm px-2 py-0.5 rounded border border-slate-700">
                              {item.direction.split('/')[0].trim()}
                            </span>
                          </div>
                        </div>

                        <div className="p-4 flex-1 flex flex-col justify-between space-y-2.5">
                          <div>
                            {/* Item Title */}
                            <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                              {item.title}
                            </h4>

                            {/* Subtitle Benefit Hook */}
                            <p className="text-xs text-amber-200/90 font-medium mt-1 leading-relaxed bg-amber-500/5 p-1.5 rounded border border-amber-500/10">
                              "{item.subtitle}"
                            </p>

                            {/* Warning teaser */}
                            <div className="mt-2 text-[10px] text-rose-300/80 bg-rose-950/20 px-2 py-1 rounded border border-rose-500/20 line-clamp-1">
                              Dosha Risk: {item.criticalDoshaWarning}
                            </div>
                          </div>

                          {/* Direct Link to Dedicated Page */}
                          <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between">
                            <button
                              type="button"
                              onClick={() => onSelectTopic(item)}
                              className="text-xs font-semibold text-amber-400 group-hover:text-amber-300 hover:underline flex items-center gap-1.5 cursor-pointer"
                            >
                              <span>Open Dedicated Page & Remedies</span>
                              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                            </button>

                            <span className="text-[10px] font-mono text-slate-500">
                              /vastu/{item.slug}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Category-Level Action Bar */}
                  <div className="bg-slate-900/50 rounded-xl p-3 sm:p-4 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                    <span className="text-slate-300 text-center sm:text-left">
                      Need a complete multi-zone evaluation for <strong className="text-white">{cat.title.replace(/^[0-9]\.\s*/, '')}</strong>?
                    </span>
                    <button
                      type="button"
                      onClick={onOpenBooking}
                      className="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
                    >
                      <PhoneCall className="w-3.5 h-3.5" />
                      <span>Book Consultation Audit</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
