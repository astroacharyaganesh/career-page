import React, { useState, useRef } from 'react';
import { 
  ChevronLeft, ChevronRight, Compass, ArrowRight, Sparkles, 
  Flame, Droplets, Mountain, Wind, ShieldAlert, BookOpen, ExternalLink
} from 'lucide-react';
import { VastuTopicItem, VASTU_TOPICS_19 } from '../../data/vastuConceptsData';

interface ConceptScrollCardsProps {
  onSelectTopic: (topic: VastuTopicItem) => void;
  onOpenBooking: () => void;
}

type FilterCategory = 'all' | 'wealth' | 'home' | 'commercial' | 'career';

export const ConceptScrollCards: React.FC<ConceptScrollCardsProps> = ({
  onSelectTopic,
  onOpenBooking,
}) => {
  const [filter, setFilter] = useState<FilterCategory>('all');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const filteredTopics = VASTU_TOPICS_19.filter(item => {
    if (filter === 'all') return true;
    if (filter === 'career') return item.category === 'career';
    return item.category === filter;
  });

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -360 : 360;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const getElementIcon = (element: string) => {
    if (element.includes('Water')) return <Droplets className="w-3.5 h-3.5 text-sky-400" />;
    if (element.includes('Fire')) return <Flame className="w-3.5 h-3.5 text-rose-400" />;
    if (element.includes('Earth')) return <Mountain className="w-3.5 h-3.5 text-amber-500" />;
    if (element.includes('Air')) return <Wind className="w-3.5 h-3.5 text-teal-400" />;
    return <Sparkles className="w-3.5 h-3.5 text-purple-400" />;
  };

  return (
    <div className="space-y-5">
      {/* Category Pills & Kinetic Navigation Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
        {/* Category Filter Chips */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 no-scrollbar">
          {[
            { id: 'all', label: `All 20 Cards (${VASTU_TOPICS_19.length})` },
            { id: 'home', label: 'Home Sanctuaries (9)' },
            { id: 'career', label: 'Career & Creators (3)' },
            { id: 'commercial', label: 'Commercial & Factory (4)' },
            { id: 'wealth', label: 'Wealth & Vault (4)' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id as FilterCategory)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                filter === cat.id
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                  : 'bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700/60'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Carousel Prev / Next Controls */}
        <div className="flex items-center justify-between sm:justify-end gap-3">
          <span className="text-xs text-slate-400 font-mono hidden md:inline">
            Showing {filteredTopics.length} Cards with Imagery
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-slate-300 border border-slate-700 flex items-center justify-center transition-all cursor-pointer shadow-sm"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-slate-300 border border-slate-700 flex items-center justify-center transition-all cursor-pointer shadow-sm"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Swipeable Horizontal Kinetic Rail */}
      <div 
        ref={scrollContainerRef}
        className="flex items-stretch gap-5 overflow-x-auto pb-4 pt-1 px-1 snap-x snap-mandatory scroll-smooth no-scrollbar"
      >
        {filteredTopics.map((topic) => (
          <div
            key={topic.id}
            className="w-[290px] sm:w-[330px] flex-shrink-0 snap-start bg-[#0D1424] border border-slate-800 hover:border-amber-500/50 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-300 flex flex-col justify-between group relative"
          >
            {/* Top Image Banner with Aspect Ratio & Badges */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
              <img
                src={topic.image}
                alt={topic.title}
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out brightness-[0.9] group-hover:brightness-100"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1424] via-[#0D1424]/40 to-transparent" />

              {/* Number Badge & Direction */}
              <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between">
                <span className="font-mono font-bold text-xs bg-slate-950/85 backdrop-blur-md text-amber-400 px-2.5 py-1 rounded-lg border border-amber-500/30 shadow-md">
                  #{topic.number}
                </span>

                <span className="inline-flex items-center gap-1 font-mono text-[11px] font-semibold text-slate-200 bg-slate-950/85 backdrop-blur-md px-2 py-0.5 rounded-lg border border-slate-700/80">
                  <Compass className="w-3 h-3 text-amber-400" />
                  {topic.direction.split('/')[0].trim()}
                </span>
              </div>

              {/* Bottom Element tag on photo */}
              <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[11px]">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-900/90 text-slate-300 border border-slate-700/80 backdrop-blur-sm">
                  {getElementIcon(topic.element)}
                  {topic.element.split(' ')[0]}
                </span>
                <span className="text-[10px] text-amber-300 font-mono tracking-tight bg-slate-950/80 px-1.5 py-0.5 rounded">
                  {topic.degrees}
                </span>
              </div>
            </div>

            {/* Card Content Body */}
            <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
              <div>
                <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-300 transition-colors leading-snug line-clamp-2">
                  {topic.title}
                </h4>

                {/* Subtitle quote */}
                <p className="text-xs text-amber-200/90 font-medium mt-2 leading-relaxed bg-amber-500/5 p-2 rounded-lg border border-amber-500/15 line-clamp-2">
                  "{topic.subtitle}"
                </p>

                {/* Silent Dosha Risk Note */}
                <div className="mt-3 text-[11px] text-slate-400 flex items-start gap-1.5">
                  <ShieldAlert className="w-3.5 h-3.5 text-rose-400 flex-shrink-0 mt-0.5" />
                  <span className="line-clamp-2">{topic.criticalDoshaWarning}</span>
                </div>
              </div>

              {/* Bottom Action CTA & Link */}
              <div className="pt-3 border-t border-slate-800/80 space-y-2">
                <button
                  type="button"
                  onClick={() => onSelectTopic(topic)}
                  className="w-full py-2.5 px-3 rounded-xl bg-amber-500/10 hover:bg-amber-500 text-amber-300 hover:text-slate-950 border border-amber-500/30 hover:border-amber-400 font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm group/btn"
                >
                  <span>Explore Dedicated Page & Remedies</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>

                <div className="flex items-center justify-between text-[10px] text-slate-500 font-mono px-1">
                  <span>/vastu/{topic.slug}</span>
                  <span className="text-emerald-400">Score: {topic.engagementScore}%</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Swipe Cue on Mobile */}
      <div className="flex items-center justify-between text-xs text-slate-400 px-2 sm:hidden">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          Swipe cards left or right to explore all 20 zones
        </span>
        <button
          onClick={() => scroll('right')}
          className="text-amber-400 font-semibold"
        >
          Next →
        </button>
      </div>
    </div>
  );
};
