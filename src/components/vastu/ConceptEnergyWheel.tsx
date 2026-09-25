import React, { useState } from 'react';
import { 
  Compass, Sparkles, ArrowRight, ShieldAlert, BookOpen, 
  PhoneCall, ExternalLink, Flame, Droplets, Mountain, Wind, Check
} from 'lucide-react';
import { VastuTopicItem, VASTU_TOPICS_19 } from '../../data/vastuConceptsData';

interface ConceptEnergyWheelProps {
  onSelectTopic: (topic: VastuTopicItem) => void;
  onOpenBooking: () => void;
}

interface SectorInfo {
  id: string;
  name: string;
  sanskrit: string;
  cardinal: string;
  angle: number; // Center degrees
  rulingDeity: string;
  planetaryLord: string;
  element: string;
  elementColor: string;
  cosmicSignificance: string;
  roomIds: string[];
}

const WHEEL_SECTORS: SectorInfo[] = [
  {
    id: 'north',
    name: 'North',
    sanskrit: 'Uttara',
    cardinal: 'North (0°)',
    angle: 0,
    rulingDeity: 'Lord Kubera (Treasurer of Gods)',
    planetaryLord: 'Mercury (Budha)',
    element: 'Water (Jal)',
    elementColor: '#10B981',
    cosmicSignificance: 'Flow of cash, high-ticket clients, and liquidity reserves.',
    roomIds: ['kuber-wealth', 'home-office']
  },
  {
    id: 'north-east',
    name: 'North-East',
    sanskrit: 'Ishanya',
    cardinal: 'North-East (45°)',
    angle: 45,
    rulingDeity: 'Lord Shiva / Ishana',
    planetaryLord: 'Jupiter (Brihaspati)',
    element: 'Water & Ether',
    elementColor: '#60A5FA',
    cosmicSignificance: 'Intellect, divine inspiration, progeny growth, and spiritual grace.',
    roomIds: ['pooja-mandir', 'study-room', 'water-tank']
  },
  {
    id: 'east',
    name: 'East',
    sanskrit: 'Poorva',
    cardinal: 'East (90°)',
    angle: 90,
    rulingDeity: 'Indra (King of Celestial Realms)',
    planetaryLord: 'Sun (Surya)',
    element: 'Air & Fire',
    elementColor: '#34D399',
    cosmicSignificance: 'Social connections, political clout, fame, and vitality.',
    roomIds: ['main-entrance', 'living-room', 'balcony-terrace']
  },
  {
    id: 'south-east',
    name: 'South-East',
    sanskrit: 'Agneya',
    cardinal: 'South-East (135°)',
    angle: 135,
    rulingDeity: 'Agni Dev (Fire God)',
    planetaryLord: 'Venus (Shukra)',
    element: 'Fire (Agni)',
    elementColor: '#EF4444',
    cosmicSignificance: 'Metabolic health, zeal, cash-burn regulation, and luxury.',
    roomIds: ['kitchen-agni']
  },
  {
    id: 'south',
    name: 'South',
    sanskrit: 'Dakshina',
    cardinal: 'South (180°)',
    angle: 180,
    rulingDeity: 'Yama (Lord of Dharma & Justice)',
    planetaryLord: 'Mars (Mangal)',
    element: 'Fire & Earth',
    elementColor: '#F97316',
    cosmicSignificance: 'Rest, legal protections, fame, and heavy manufacturing.',
    roomIds: ['factory-machinery', 'staircase']
  },
  {
    id: 'south-west',
    name: 'South-West',
    sanskrit: 'Nairutya',
    cardinal: 'South-West (225°)',
    angle: 225,
    rulingDeity: 'Nirutthi (Earth Commander)',
    planetaryLord: 'Rahu & Saturn',
    element: 'Heavy Earth (Prithvi)',
    elementColor: '#F59E0B',
    cosmicSignificance: 'Stability, decision-making, owner authority, and deep sleep.',
    roomIds: ['master-bedroom', 'commercial-cabin']
  },
  {
    id: 'west',
    name: 'West',
    sanskrit: 'Pashchima',
    cardinal: 'West (270°)',
    angle: 270,
    rulingDeity: 'Varuna (Lord of Waters & Ocean)',
    planetaryLord: 'Saturn (Shani)',
    element: 'Air & Space',
    elementColor: '#818CF8',
    cosmicSignificance: 'Profits, recurring gains, long-term investments, and trade.',
    roomIds: ['retail-showroom', 'children-room']
  },
  {
    id: 'north-west',
    name: 'North-West',
    sanskrit: 'Vayavya',
    cardinal: 'North-West (315°)',
    angle: 315,
    rulingDeity: 'Vayu (Lord of Wind)',
    planetaryLord: 'Moon (Chandra)',
    element: 'Air (Vayu)',
    elementColor: '#38BDF8',
    cosmicSignificance: 'Movement, swift shipping, banking support, and waste elimination.',
    roomIds: ['bathroom-toilet', 'septic-drainage']
  }
];

export const ConceptEnergyWheel: React.FC<ConceptEnergyWheelProps> = ({
  onSelectTopic,
  onOpenBooking
}) => {
  const [activeSectorId, setActiveSectorId] = useState<string>('north-east');

  const activeSector = WHEEL_SECTORS.find(s => s.id === activeSectorId) || WHEEL_SECTORS[1];
  const activeRooms = VASTU_TOPICS_19.filter(t => activeSector.roomIds.includes(t.id));

  return (
    <div className="space-y-6">
      {/* Top Banner Guide */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-900/60 p-4 rounded-xl border border-slate-800 text-xs text-slate-300">
        <div>
          <span className="font-semibold text-white">Vastu Purusha Energy Mandala: </span>
          <span>Click any of the 8 cardinal & intercardinal sectors around the sacred chakra to explore planetary rulerships and room alignments.</span>
        </div>
        <span className="text-amber-400 font-mono text-[11px] whitespace-nowrap">
          Ashta Dikpalaka Alignment
        </span>
      </div>

      {/* Main Wheel Grid: Circular Wheel on Left (or top on mobile), Sector Inspector on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        
        {/* Left Column: Interactive 360° Circular Energy Chakra (6 cols) */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center p-4 sm:p-6 bg-[#090D18] border border-amber-500/25 rounded-2xl relative overflow-hidden shadow-2xl">
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute inset-0 bg-radial-gradient opacity-30 pointer-events-none" />

          {/* Interactive Wheel Graphic */}
          <div className="relative w-72 h-72 sm:w-84 sm:h-84 md:w-96 md:h-96 flex items-center justify-center">
            
            {/* Outer Decorative Dial Rings */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-amber-500/30 animate-spin" style={{ animationDuration: '120s' }} />
            <div className="absolute inset-3 sm:inset-4 rounded-full border border-slate-700/60" />
            <div className="absolute inset-8 sm:inset-10 rounded-full border border-amber-500/20" />

            {/* Central Brahmasthan Core (Center of Wheel) */}
            <button
              type="button"
              onClick={() => {
                const bTopic = VASTU_TOPICS_19.find(t => t.id === 'brahmasthan');
                if (bTopic) onSelectTopic(bTopic);
              }}
              className="z-20 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 text-slate-950 flex flex-col items-center justify-center p-2 text-center shadow-lg shadow-amber-500/30 hover:scale-105 transition-transform cursor-pointer border-2 border-amber-300"
              title="Click to inspect Brahmasthan Dedicated Page"
            >
              <Sparkles className="w-5 h-5 text-slate-950 mb-0.5 animate-pulse" />
              <span className="text-[10px] sm:text-xs font-bold font-serif-display uppercase leading-tight">
                Brahmasthan
              </span>
              <span className="text-[8px] font-mono tracking-tighter opacity-80">
                Core Heart
              </span>
            </button>

            {/* 8 Radial Directional Sectors arranged around the circle */}
            {WHEEL_SECTORS.map((sector, index) => {
              const isSelected = activeSectorId === sector.id;
              // Angle in radians (0 at top = -90 deg offset)
              const angleRad = ((sector.angle - 90) * Math.PI) / 180;
              // Radius in percent
              const radius = 38; // 38% from center
              const xPos = 50 + radius * Math.cos(angleRad);
              const yPos = 50 + radius * Math.sin(angleRad);

              return (
                <button
                  key={sector.id}
                  type="button"
                  onClick={() => setActiveSectorId(sector.id)}
                  style={{
                    left: `${xPos}%`,
                    top: `${yPos}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                  className={`absolute z-10 p-2 sm:p-2.5 rounded-xl border text-center transition-all duration-300 cursor-pointer flex flex-col items-center shadow-lg ${
                    isSelected
                      ? 'bg-amber-400 text-slate-950 border-white ring-4 ring-amber-400/30 scale-110'
                      : 'bg-slate-900/90 text-slate-200 border-slate-700 hover:border-amber-400/60 hover:scale-105'
                  }`}
                >
                  <span className={`text-[10px] sm:text-[11px] font-mono font-bold leading-none ${
                    isSelected ? 'text-slate-950' : 'text-amber-400'
                  }`}>
                    {sector.name}
                  </span>
                  <span className="text-[8px] sm:text-[9px] opacity-80 font-medium mt-0.5 whitespace-nowrap">
                    {sector.sanskrit}
                  </span>
                  <span 
                    className="w-1.5 h-1.5 rounded-full mt-1"
                    style={{ backgroundColor: sector.elementColor }}
                  />
                </button>
              );
            })}
          </div>

          {/* Touch-Friendly Direction Chips for Mobile */}
          <div className="mt-4 pt-3 border-t border-slate-800/80 w-full">
            <span className="text-[11px] text-slate-400 block mb-2 font-medium text-center">
              Tap Any Cardinal Direction:
            </span>
            <div className="flex items-center justify-center gap-1.5 flex-wrap">
              {WHEEL_SECTORS.map((sector) => (
                <button
                  key={sector.id}
                  onClick={() => setActiveSectorId(sector.id)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                    activeSectorId === sector.id
                      ? 'bg-amber-400 text-slate-950 font-bold shadow'
                      : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700'
                  }`}
                >
                  {sector.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Active Sector Diagnostics & Dedicated Zone Pages (6 cols) */}
        <div className="lg:col-span-6 bg-gradient-to-b from-[#0F172A] to-[#0A0F1D] border border-amber-500/30 rounded-2xl p-5 sm:p-6 shadow-xl space-y-5">
          {/* Header */}
          <div className="space-y-1.5 pb-4 border-b border-slate-800">
            <div className="flex items-center justify-between text-xs">
              <span className="font-mono text-amber-400 font-semibold px-2.5 py-0.5 bg-amber-500/10 rounded-full border border-amber-500/30">
                Sector: {activeSector.cardinal}
              </span>
              <span className="text-slate-400 italic">
                Sanskrit: <strong className="text-slate-200">{activeSector.sanskrit}</strong>
              </span>
            </div>

            <h3 className="text-2xl font-bold font-serif-display text-white">
              {activeSector.name} Sector Energy Portal
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              {activeSector.cosmicSignificance}
            </p>
          </div>

          {/* Elemental and Planetary Cosmic Specs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs">
            <div className="bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
              <span className="text-slate-400 block text-[10px]">Ruling Deity</span>
              <span className="text-white font-semibold block truncate mt-0.5">
                {activeSector.rulingDeity}
              </span>
            </div>

            <div className="bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
              <span className="text-slate-400 block text-[10px]">Planetary Lord</span>
              <span className="text-amber-400 font-semibold block truncate mt-0.5">
                {activeSector.planetaryLord}
              </span>
            </div>

            <div className="bg-slate-900/80 p-2.5 rounded-xl border border-slate-800 col-span-2 sm:col-span-1">
              <span className="text-slate-400 block text-[10px]">Element</span>
              <span className="text-emerald-400 font-semibold flex items-center gap-1 mt-0.5">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: activeSector.elementColor }} />
                {activeSector.element}
              </span>
            </div>
          </div>

          {/* Rooms located in this sector: Direct dedicated links */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold uppercase tracking-wider text-slate-300">
                Key Rooms Governed by this Direction:
              </span>
              <span className="text-amber-400 font-mono text-[11px]">
                {activeRooms.length} Dedicated Pages
              </span>
            </div>

            <div className="space-y-2.5">
              {activeRooms.map((room) => (
                <div
                  key={room.id}
                  className="bg-slate-900/70 hover:bg-slate-800/80 border border-slate-800 hover:border-amber-500/40 rounded-xl p-3 transition-all flex items-center justify-between gap-3 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-12 rounded-lg overflow-hidden bg-slate-950 flex-shrink-0 border border-slate-700/80 relative">
                      <img
                        src={room.image}
                        alt={room.title}
                        className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-300"
                        loading="lazy"
                      />
                      <span className="absolute bottom-0.5 right-0.5 font-mono text-[9px] font-bold bg-slate-950/80 text-amber-400 px-1 rounded">
                        #{room.number}
                      </span>
                    </div>

                    <div className="space-y-0.5">
                      <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-1">
                        {room.title}
                      </h4>
                      <p className="text-[11px] text-amber-200/80 line-clamp-1 italic">
                        "{room.subtitle}"
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => onSelectTopic(room)}
                    className="px-3 py-1.5 rounded-lg bg-amber-500/10 hover:bg-amber-500 text-amber-300 hover:text-slate-950 font-semibold text-xs border border-amber-500/30 transition-all flex items-center gap-1 flex-shrink-0 cursor-pointer whitespace-nowrap"
                  >
                    <span>Read Guide</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Directional Consultation Callout */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <button
              type="button"
              onClick={onOpenBooking}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 text-slate-950 font-bold text-xs sm:text-sm shadow-md shadow-amber-500/20 flex items-center justify-center gap-2 cursor-pointer"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Book 16-Zone Precision Compass Audit</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
