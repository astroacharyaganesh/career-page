import React, { useState } from 'react';
import { 
  Home, Compass, Sparkles, AlertCircle, ArrowRight, ShieldCheck, 
  Flame, Droplets, Mountain, Wind, Eye, PhoneCall, ExternalLink, Check, BookOpen
} from 'lucide-react';
import { VastuTopicItem, VASTU_TOPICS_19 } from '../../data/vastuConceptsData';

interface ConceptHouseMapProps {
  onSelectTopic: (topic: VastuTopicItem) => void;
  onOpenBooking: () => void;
}

// 9 Core house zones mapped to floorplan
const HOUSE_ZONES = [
  { id: 'study-room', label: 'Study & Intellect', direction: 'NE', coords: { x: 4, y: 4, w: 28, h: 26 }, element: 'Air', color: '#818CF8' },
  { id: 'kuber-wealth', label: 'Kuber Vault & Cash', direction: 'North', coords: { x: 34, y: 4, w: 32, h: 26 }, element: 'Water', color: '#10B981' },
  { id: 'pooja-mandir', label: 'Sacred Mandir', direction: 'NE', coords: { x: 68, y: 4, w: 28, h: 26 }, element: 'Water', color: '#60A5FA' },
  
  { id: 'staircase', label: 'Vertical Staircase', direction: 'West', coords: { x: 4, y: 32, w: 28, h: 32 }, element: 'Earth', color: '#D97706' },
  { id: 'brahmasthan', label: 'Brahmasthan (Cosmic Heart)', direction: 'Center', coords: { x: 34, y: 32, w: 32, h: 32 }, element: 'Space', color: '#A855F7' },
  { id: 'living-room', label: 'Living & Social Area', direction: 'East', coords: { x: 68, y: 32, w: 28, h: 32 }, element: 'Air', color: '#34D399' },
  
  { id: 'master-bedroom', label: 'Master Bedroom', direction: 'SW', coords: { x: 4, y: 66, w: 28, h: 30 }, element: 'Earth', color: '#F59E0B' },
  { id: 'main-entrance', label: 'Singh Dwar Entrance', direction: 'Main Door', coords: { x: 34, y: 66, w: 32, h: 30 }, element: 'Air', color: '#38BDF8' },
  { id: 'kitchen-agni', label: 'Kitchen (Agni Fire)', direction: 'SE', coords: { x: 68, y: 66, w: 28, h: 30 }, element: 'Fire', color: '#EF4444' },
];

export const ConceptHouseMap: React.FC<ConceptHouseMapProps> = ({
  onSelectTopic,
  onOpenBooking
}) => {
  const [activeZoneId, setActiveZoneId] = useState<string>('main-entrance');
  const [hoveredZoneId, setHoveredZoneId] = useState<string | null>(null);

  const activeTopic = VASTU_TOPICS_19.find(t => t.id === activeZoneId) || VASTU_TOPICS_19[0];

  return (
    <div className="space-y-6">
      {/* Top Value Proposition & Micro Guidance */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-900/60 p-4 rounded-xl border border-slate-800 text-xs text-slate-300">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
          <span className="font-semibold text-white">Interactive Architectural Blueprint:</span>
          <span>Click any room inside the floorplan to reveal its directional ruler and dedicated remedies.</span>
        </div>
        <div className="flex items-center gap-2 text-[11px] text-amber-300/90 font-mono">
          <Compass className="w-3.5 h-3.5" />
          <span>Vastu Purusha Calibrated</span>
        </div>
      </div>

      {/* Main Split Layout: Floorplan on Left, Active Diagnostic on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Column: Interactive Floorplan Vector Map (7 cols) */}
        <div className="lg:col-span-7 bg-[#090D18] border border-amber-500/25 rounded-2xl p-4 sm:p-6 shadow-2xl relative overflow-hidden">
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

          {/* Compass Orientation Indicators */}
          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-3 px-2">
            <span className="text-sky-400 font-bold flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-sky-400" /> [ NORTH: KUBERA ]
            </span>
            <span className="text-emerald-400 font-bold flex items-center gap-1">
              [ EAST: INDRA ] <span className="w-2 h-2 rounded-full bg-emerald-400" />
            </span>
          </div>

          {/* SVG Floorplan Canvas Container */}
          <div className="relative aspect-[4/3] w-full bg-slate-950/90 rounded-xl border border-slate-800/90 p-2 sm:p-3 overflow-hidden shadow-inner">
            {/* Architectural Grid Background */}
            <div 
              className="absolute inset-0 opacity-15 pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(circle, #f59e0b 1px, transparent 1px)',
                backgroundSize: '20px 20px'
              }}
            />

            {/* Compass Rose in Background */}
            <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
              <Compass className="w-64 h-64 text-amber-400 animate-spin" style={{ animationDuration: '180s' }} />
            </div>

            {/* 9 Room Hotspots in 3x3 Grid */}
            <div className="relative w-full h-full grid grid-cols-3 grid-rows-3 gap-2 sm:gap-2.5">
              {HOUSE_ZONES.map((zone) => {
                const isSelected = activeZoneId === zone.id;
                const isHovered = hoveredZoneId === zone.id;
                const matchedTopic = VASTU_TOPICS_19.find(t => t.id === zone.id);

                return (
                  <button
                    key={zone.id}
                    type="button"
                    onClick={() => setActiveZoneId(zone.id)}
                    onMouseEnter={() => setHoveredZoneId(zone.id)}
                    onMouseLeave={() => setHoveredZoneId(null)}
                    className={`relative rounded-xl p-2 sm:p-3 text-left transition-all duration-300 flex flex-col justify-between group overflow-hidden border cursor-pointer ${
                      isSelected
                        ? 'bg-amber-500/20 border-amber-400 shadow-lg shadow-amber-500/20 ring-1 ring-amber-400'
                        : isHovered
                        ? 'bg-slate-800/90 border-slate-600 shadow-md'
                        : 'bg-slate-900/70 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    {/* Top Room Tag & Direction */}
                    <div className="flex items-center justify-between w-full">
                      <span className={`text-[10px] sm:text-xs font-mono font-bold px-1.5 py-0.5 rounded ${
                        isSelected 
                          ? 'bg-amber-400 text-slate-950' 
                          : 'bg-slate-800 text-slate-300 group-hover:text-amber-300'
                      }`}>
                        {zone.direction}
                      </span>

                      {/* Element Dot Indicator */}
                      <span 
                        className="w-2 h-2 rounded-full" 
                        style={{ backgroundColor: zone.color }}
                        title={`Element: ${zone.element}`}
                      />
                    </div>

                    {/* Room Name */}
                    <div className="my-auto py-1">
                      <h4 className={`text-xs sm:text-sm font-semibold tracking-tight leading-snug ${
                        isSelected ? 'text-white' : 'text-slate-200 group-hover:text-amber-200'
                      }`}>
                        {zone.label}
                      </h4>
                      <p className="text-[10px] text-slate-400 line-clamp-1 mt-0.5">
                        {matchedTopic?.shortBenefit || 'Vedic spatial resonance'}
                      </p>
                    </div>

                    {/* Bottom Status / Click Cue */}
                    <div className="flex items-center justify-between text-[9px] sm:text-[10px] text-slate-400 pt-1 border-t border-slate-800/60">
                      <span className="font-mono">
                        {isSelected ? '● ACTIVE' : 'TAP TO AUDIT'}
                      </span>
                      <ArrowRight className={`w-3 h-3 transition-transform ${
                        isSelected ? 'text-amber-400 translate-x-0.5' : 'text-slate-500 group-hover:translate-x-0.5'
                      }`} />
                    </div>

                    {/* Active Corner Badge */}
                    {isSelected && (
                      <div className="absolute top-0 right-0 w-6 h-6 overflow-hidden">
                        <div className="bg-amber-400 rotate-45 transform origin-bottom-left w-8 h-2 -mt-1 -mr-2" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Compass South and West labels */}
          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mt-3 px-2">
            <span className="text-amber-500 font-bold flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-amber-500" /> [ WEST: VARUNA ]
            </span>
            <span className="text-rose-400 font-bold flex items-center gap-1">
              [ SOUTH: YAMA ] <span className="w-2 h-2 rounded-full bg-rose-400" />
            </span>
          </div>

          {/* Mobile Quick Tap Scroller */}
          <div className="mt-4 pt-3 border-t border-slate-800/80">
            <span className="text-[11px] text-slate-400 block mb-2 font-medium">
              Quick Select Any Room:
            </span>
            <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
              {HOUSE_ZONES.map((zone) => (
                <button
                  key={zone.id}
                  onClick={() => setActiveZoneId(zone.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap border transition-all cursor-pointer ${
                    activeZoneId === zone.id
                      ? 'bg-amber-500 text-slate-950 border-amber-400 font-semibold'
                      : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  {zone.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Active Zone Diagnostic Inspector Card (5 cols) */}
        <div className="lg:col-span-5 bg-gradient-to-b from-[#0F172A] to-[#0A0F1D] border border-amber-500/30 rounded-2xl p-5 sm:p-6 shadow-xl space-y-5">
          {/* Active Zone Image Preview */}
          <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-slate-700/80 shadow-inner group">
            <img
              src={activeTopic.image}
              alt={activeTopic.title}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1D] via-transparent to-black/30" />
            <div className="absolute top-2.5 left-2.5 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-amber-500/30 text-amber-400 font-mono text-xs font-bold">
              #{activeTopic.number} {activeTopic.title.replace(/^"[^"]+"\s*/, '')}
            </div>
            <div className="absolute bottom-2 left-2.5 right-2.5 text-xs text-amber-200 font-medium italic drop-shadow">
              "{activeTopic.subtitle}"
            </div>
          </div>

          {/* Header of Active Zone */}
          <div className="space-y-2 pb-4 border-b border-slate-800">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/30">
                Direction: {activeTopic.direction}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                {activeTopic.degrees}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold font-serif-display text-white">
              {activeTopic.title}
            </h3>
            <p className="text-xs sm:text-sm text-amber-200/90 font-medium">
              "{activeTopic.punchyHook}"
            </p>
          </div>

          {/* Key Energetic Rules */}
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
              <span className="text-slate-400 block text-[10px]">Element & Cosmic Ray</span>
              <span className="text-white font-semibold flex items-center gap-1 mt-0.5">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: activeTopic.elementColor }} />
                {activeTopic.element}
              </span>
            </div>
            <div className="bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
              <span className="text-slate-400 block text-[10px]">Ruling Deity & Planet</span>
              <span className="text-amber-300 font-semibold truncate block mt-0.5">
                {activeTopic.rulingDeity} / {activeTopic.planetaryLord}
              </span>
            </div>
          </div>

          {/* Critical Warning Alert */}
          <div className="bg-rose-950/20 border border-rose-500/30 rounded-xl p-3 text-xs text-slate-300 space-y-1">
            <span className="text-rose-400 font-bold flex items-center gap-1.5 uppercase text-[10px] tracking-wider">
              <AlertCircle className="w-3.5 h-3.5" /> High Risk Dosha Trigger
            </span>
            <p className="leading-relaxed text-[11px] text-slate-300">
              {activeTopic.criticalDoshaWarning}
            </p>
          </div>

          {/* Quick Symptoms Check */}
          <div className="space-y-1.5 text-xs">
            <span className="text-slate-400 font-semibold block text-[11px] uppercase tracking-wider">
              Common Friction Symptoms:
            </span>
            {activeTopic.commonSymptoms.slice(0, 2).map((sym, i) => (
              <div key={i} className="flex items-start gap-2 text-slate-300 text-[11px]">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 flex-shrink-0" />
                <span>{sym}</span>
              </div>
            ))}
          </div>

          {/* Primary Action Buttons: Linking to Dedicated Page */}
          <div className="space-y-2.5 pt-2">
            <button
              type="button"
              onClick={() => onSelectTopic(activeTopic)}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs sm:text-sm shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <BookOpen className="w-4 h-4" />
              <span>Explore Dedicated {activeTopic.title} Page & Remedies</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={onOpenBooking}
              className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-medium text-xs border border-slate-700 transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
              <span>Book 1-on-1 Personalized Floorplan Audit</span>
            </button>
          </div>

          {/* Canonical Page Link Indicator */}
          <div className="pt-2 text-center">
            <button
              onClick={() => onSelectTopic(activeTopic)}
              className="text-[11px] text-slate-400 hover:text-amber-300 font-mono inline-flex items-center gap-1 transition-colors"
            >
              <span>Canonical URL: /vastu/{activeTopic.slug}</span>
              <ExternalLink className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
