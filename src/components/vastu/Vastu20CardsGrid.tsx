import React, { useState, useMemo } from 'react';
import { 
  Sparkles, DoorOpen, Flame, Droplets, Heart, GraduationCap, 
  Home, Wind, Layers, Utensils, Video, HeartHandshake, Smile, 
  Coins, Waves, Crown, Laptop, Cog, Factory, Car, Compass, 
  ArrowRight, Search, Building2, Check, Briefcase
} from 'lucide-react';
import { VastuTopicItem, VASTU_TOPICS_20 } from '../../data/vastuConceptsData';

interface Vastu20CardsGridProps {
  onSelectTopic: (topic: VastuTopicItem) => void;
  onOpenBooking: () => void;
}

type VastuCategory = 'all' | 'home' | 'office' | 'wealth' | 'relationship';

interface CategoryConfig {
  id: VastuCategory;
  badgeLabel: string;
  heading: string;
  subtitle: string;
  filterIcon: React.ReactNode;
}

const CATEGORY_CONFIGS: Record<VastuCategory, CategoryConfig> = {
  all: {
    id: 'all',
    badgeLabel: 'Divine Vedic Solutions',
    heading: 'Our Vastu Services',
    subtitle: 'Accurate, confidential & tailored Vedic guidance with practical, result-driven remedies.',
    filterIcon: <Sparkles className="w-3.5 h-3.5 text-[#B85D19]" />
  },
  home: {
    id: 'home',
    badgeLabel: 'Home Vastu Solutions',
    heading: 'Residential & Home Vastu Services',
    subtitle: 'Harmonize your living sanctuary, bedroom, puja mandir, and family spaces for peace, health and deep bonding.',
    filterIcon: <Home className="w-3.5 h-3.5 text-[#B85D19]" />
  },
  office: {
    id: 'office',
    badgeLabel: 'Office & Business Vastu',
    heading: 'Office, Director Cabin & Commercial Vastu',
    subtitle: 'Maximize executive authority, eliminate employee turnover, accelerate business deals and boost cash velocity.',
    filterIcon: <Building2 className="w-3.5 h-3.5 text-[#B85D19]" />
  },
  wealth: {
    id: 'wealth',
    badgeLabel: 'Wealth & Prosperity Vastu',
    heading: 'Wealth, Cash Locker & Treasury Vastu',
    subtitle: 'Activate the northern Kubera currents, prevent unexpected money drain, and retain financial abundance.',
    filterIcon: <Coins className="w-3.5 h-3.5 text-[#B85D19]" />
  },
  relationship: {
    id: 'relationship',
    badgeLabel: 'Love & Family Harmony Vastu',
    heading: 'Relationship, Marriage & Family Vastu',
    subtitle: 'Dissolve marital friction, nurture children creativity, and anchor lasting emotional intimacy.',
    filterIcon: <Heart className="w-3.5 h-3.5 text-[#B85D19]" />
  }
};

export const Vastu20CardsGrid: React.FC<Vastu20CardsGridProps> = ({
  onSelectTopic,
  onOpenBooking
}) => {
  const [activeCategory, setActiveCategory] = useState<VastuCategory>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Map each topic id to a tailored icon for the bottom-left floating badge (as in user reference image)
  const getCardIcon = (id: string) => {
    switch (id) {
      case 'puja-ghar': return <Sparkles className="w-4 h-4 text-[#E6A055]" />;
      case 'main-door': return <DoorOpen className="w-4 h-4 text-[#E6A055]" />;
      case 'kitchen-agni': return <Flame className="w-4 h-4 text-[#E6A055]" />;
      case 'bathroom-vastu': return <Droplets className="w-4 h-4 text-[#E6A055]" />;
      case 'bedroom-vastu': return <Heart className="w-4 h-4 text-[#E6A055]" />;
      case 'study-room': return <GraduationCap className="w-4 h-4 text-[#E6A055]" />;
      case 'living-room': return <Home className="w-4 h-4 text-[#E6A055]" />;
      case 'terrace-balcony': return <Wind className="w-4 h-4 text-[#E6A055]" />;
      case 'staircase-vastu': return <Layers className="w-4 h-4 text-[#E6A055]" />;
      case 'dining-room': return <Utensils className="w-4 h-4 text-[#E6A055]" />;
      case 'home-studio': return <Video className="w-4 h-4 text-[#E6A055]" />;
      case 'newlywed-harmony': return <HeartHandshake className="w-4 h-4 text-[#E6A055]" />;
      case 'children-room': return <Smile className="w-4 h-4 text-[#E6A055]" />;
      case 'cash-locker': return <Coins className="w-4 h-4 text-[#E6A055]" />;
      case 'water-tank': return <Waves className="w-4 h-4 text-[#E6A055]" />;
      case 'director-cabin': return <Crown className="w-4 h-4 text-[#E6A055]" />;
      case 'manager-workstation': return <Laptop className="w-4 h-4 text-[#E6A055]" />;
      case 'machinery-equipment': return <Cog className="w-4 h-4 text-[#E6A055]" />;
      case 'factory-industrial': return <Factory className="w-4 h-4 text-[#E6A055]" />;
      case 'parking-vastu': return <Car className="w-4 h-4 text-[#E6A055]" />;
      default: return <Compass className="w-4 h-4 text-[#E6A055]" />;
    }
  };

  // Helper to generate clean Explore link matching the screenshot format ("Explore [Location/Subject] → ›")
  const getExploreLabel = (title: string) => {
    const clean = title.replace(/["”]/g, '').trim();
    if (clean.includes('Puja Ghar')) return 'Explore Puja Ghar';
    if (clean.includes('Main Door')) return 'Explore Main Door';
    if (clean.includes('Kitchen')) return 'Explore Kitchen Vastu';
    if (clean.includes('Bathroom')) return 'Explore Bathroom Vastu';
    if (clean.includes('Bedroom')) return 'Explore Bedroom Vastu';
    if (clean.includes('Study Room')) return 'Explore Study Room';
    if (clean.includes('Living Room')) return 'Explore Living Room';
    if (clean.includes('Terrace')) return 'Explore Terrace Vastu';
    if (clean.includes('Staircase')) return 'Explore Staircase Vastu';
    if (clean.includes('Dining')) return 'Explore Dining Vastu';
    if (clean.includes('Home Studio')) return 'Explore Home Studio';
    if (clean.includes('Newlywed')) return 'Explore Harmony Package';
    if (clean.includes('Children')) return 'Explore Children Zone';
    if (clean.includes('Cash Locker')) return 'Explore Cash Locker';
    if (clean.includes('Water Tank')) return 'Explore Water Tank';
    if (clean.includes('Director Cabin') || clean.includes('CEO')) return 'Explore Director Cabin';
    if (clean.includes('Workstation')) return 'Explore Workstation Vastu';
    if (clean.includes('Machinery')) return 'Explore Machinery Vastu';
    if (clean.includes('Factory')) return 'Explore Industrial Vastu';
    if (clean.includes('Parking')) return 'Explore Parking Vastu';
    return `Explore ${clean}`;
  };

  // Filter cards strictly by category
  const filteredTopics = useMemo(() => {
    return VASTU_TOPICS_20.filter((item) => {
      let matchesCategory = true;
      if (activeCategory === 'home') {
        // Home related cards
        const homeIds = [
          'puja-ghar', 'main-door', 'kitchen-agni', 'bathroom-vastu', 
          'bedroom-vastu', 'study-room', 'living-room', 'terrace-balcony', 
          'staircase-vastu', 'dining-room', 'children-room', 'water-tank', 
          'newlywed-harmony', 'parking-vastu'
        ];
        matchesCategory = homeIds.includes(item.id);
      } else if (activeCategory === 'office') {
        // Office, Business & Commercial cards
        const officeIds = [
          'director-cabin', 'manager-workstation', 'machinery-equipment', 
          'factory-industrial', 'home-studio', 'cash-locker', 'parking-vastu', 'main-door'
        ];
        matchesCategory = officeIds.includes(item.id);
      } else if (activeCategory === 'wealth') {
        const wealthIds = ['cash-locker', 'puja-ghar', 'main-door', 'water-tank', 'kitchen-agni'];
        matchesCategory = wealthIds.includes(item.id);
      } else if (activeCategory === 'relationship') {
        const relationshipIds = ['bedroom-vastu', 'newlywed-harmony', 'children-room', 'dining-room', 'living-room'];
        matchesCategory = relationshipIds.includes(item.id);
      }

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || 
        item.title.toLowerCase().includes(q) ||
        item.subtitle.toLowerCase().includes(q) ||
        item.direction.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const currentConfig = CATEGORY_CONFIGS[activeCategory];

  return (
    <div className="space-y-8">
      {/* ========================================================================= */}
      {/* 1. DYNAMIC SECTION HEADER (Badge updates dynamically when category changes) */}
      {/* ========================================================================= */}
      <div className="text-center max-w-3xl mx-auto space-y-3.5">
        {/* Dynamic Top Oval Pill Badge as seen in reference image */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF5EA] border border-[#E7BE97] shadow-sm transition-all duration-300">
          {currentConfig.filterIcon}
          <span className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-[#8B3E18] font-mono">
            {currentConfig.badgeLabel}
          </span>
        </div>

        {/* Large Elegant Serif Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif-display text-[#2C1810] tracking-tight leading-tight transition-all duration-300">
          {currentConfig.heading}
        </h2>

        {/* Dynamic Benefit Subtitle */}
        <p className="text-sm sm:text-base text-[#6E4F42] max-w-2xl mx-auto leading-relaxed transition-all duration-300">
          {currentConfig.subtitle}
        </p>
      </div>

      {/* ========================================================================= */}
      {/* 2. INTERACTIVE CATEGORY BADGES (Clicking Home -> Home cards, Office -> Office cards) */}
      {/* ========================================================================= */}
      <div className="bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-4 border border-[#EADBCE] shadow-sm flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Category Filter Badges */}
        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 no-scrollbar">
          {[
            { id: 'all', label: `All Vastu Services (${VASTU_TOPICS_20.length})`, icon: Sparkles },
            { id: 'home', label: 'Home Vastu', icon: Home },
            { id: 'office', label: 'Office & Business Vastu', icon: Building2 },
            { id: 'wealth', label: 'Wealth Vastu', icon: Coins },
            { id: 'relationship', label: 'Relationship Vastu', icon: Heart },
          ].map((tab) => {
            const Icon = tab.icon;
            const isSelected = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveCategory(tab.id as VastuCategory);
                  setSearchQuery('');
                }}
                className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-[13px] font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-[#8B3E18] text-white shadow-md shadow-[#8B3E18]/25 scale-[1.02]'
                    : 'bg-[#FAF5EF] text-[#6E4F42] hover:bg-[#F3E9DD] hover:text-[#2C1810] border border-[#EADBCE]'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-[#FDE68A]' : 'text-[#8B3E18]'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Real-time search */}
        <div className="relative w-full md:w-60 flex-shrink-0">
          <Search className="w-4 h-4 text-[#A88B7B] absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Vastu services..."
            className="w-full pl-9 pr-4 py-2 rounded-xl text-xs bg-[#FAF5EF] border border-[#EADBCE] text-[#2C1810] placeholder:text-[#A88B7B] focus:outline-none focus:border-[#8B3E18] focus:bg-white transition-all shadow-inner"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#A88B7B] hover:text-[#2C1810]"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. CARDS GRID (Exact same as screenshot: Full-Bleed Top Image, Title Only, Explore Link) */}
      {/* ========================================================================= */}
      {filteredTopics.length === 0 ? (
        <div className="bg-white rounded-2xl p-12 text-center border border-neutral-200 space-y-3">
          <p className="text-sm font-semibold text-[#18181B]">No services found for "{searchQuery}" in this category.</p>
          <button
            onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
            className="px-4 py-2 rounded-lg bg-[#C2410C] text-white text-xs font-semibold cursor-pointer"
          >
            Show All Services
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredTopics.map((topic) => {
            return (
              <div
                key={topic.id}
                onClick={() => onSelectTopic(topic)}
                className="group bg-white rounded-xl sm:rounded-2xl border border-neutral-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col justify-between cursor-pointer overflow-hidden hover:-translate-y-1"
              >
                {/* ---------------- CARD TOP IMAGE: Compact Height (Clean Landscape, No Badges) ---------------- */}
                <div className="relative h-36 sm:h-40 w-full overflow-hidden bg-neutral-100">
                  <img
                    src={topic.image}
                    alt={topic.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                </div>

                {/* ---------------- CARD BODY: Compact Padding (ONLY Title + Explore Link) ---------------- */}
                <div className="px-5 py-4 flex-1 flex flex-col justify-between space-y-3 bg-white">
                  {/* Title Only */}
                  <h3 className="text-[15px] sm:text-base font-bold text-[#18181B] leading-snug group-hover:text-[#C2410C] transition-colors">
                    {topic.title}
                  </h3>

                  {/* Explore Link: "Explore [Name] ➔ >" in Bold Terracotta as in Screenshot */}
                  <div className="pt-1 flex items-center gap-1.5 text-[#C2410C] group-hover:text-[#9A3412] font-bold text-sm transition-colors">
                    <span>{getExploreLabel(topic.title)}</span>
                    <span className="font-bold text-base leading-none">→</span>
                    <span className="text-sm font-bold text-[#C2410C] leading-none">›</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* ========================================================================= */}
      {/* 4. BOTTOM ACTION BANNER: Full Floorplan Audit CTA                          */}
      {/* ========================================================================= */}
      <div className="bg-gradient-to-r from-[#2C1810] via-[#3D1D0E] to-[#2C1810] rounded-2xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-[#D4A373]/30">
        <div className="space-y-1.5 text-center md:text-left">
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse" />
            <span className="text-xs font-mono font-bold text-[#FDE68A] uppercase tracking-wider">
              1-on-1 Personalized Assessment
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-serif-display text-white">
            Need a Comprehensive {currentConfig.heading}?
          </h3>
          <p className="text-xs sm:text-sm text-[#E6D4C6] max-w-2xl leading-relaxed">
            Share your blueprint or layout with Acharya Ganesh. Identify hidden directional conflicts, align your energy flow, and activate non-demolition Vedic remedies.
          </p>
        </div>

        <div className="flex items-center gap-3 flex-shrink-0 w-full md:w-auto">
          <button
            type="button"
            onClick={onOpenBooking}
            className="w-full md:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#F59E0B] to-[#D97706] hover:from-[#FBBF24] hover:to-[#F59E0B] text-[#2C1810] font-bold text-xs sm:text-sm shadow-lg shadow-[#D97706]/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            <span>Book Consultation Audit</span>
          </button>
        </div>
      </div>
    </div>
  );
};
