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

type VastuCategory = 'residential' | 'commercial' | 'industrial' | 'all';

interface CategoryConfig {
  id: VastuCategory;
  badgeLabel: string;
  heading: string;
  subtitle: string;
  filterIcon: React.ReactNode;
}

const CATEGORY_CONFIGS: Record<VastuCategory, CategoryConfig> = {
  residential: {
    id: 'residential',
    badgeLabel: 'Residential Vastu',
    heading: 'Residential & Home Vastu Solutions',
    subtitle: 'Harmonize your living sanctuary, bedroom, puja mandir, and family spaces for peace, health and deep bonding.',
    filterIcon: <Home className="w-3.5 h-3.5 text-[#B85D19]" />
  },
  commercial: {
    id: 'commercial',
    badgeLabel: 'Commercial Vastu',
    heading: 'Commercial & Office Vastu Solutions',
    subtitle: 'Maximize executive authority, eliminate employee turnover, accelerate business deals and boost cash velocity.',
    filterIcon: <Building2 className="w-3.5 h-3.5 text-[#B85D19]" />
  },
  industrial: {
    id: 'industrial',
    badgeLabel: 'Industrial Vastu',
    heading: 'Industrial & Factory Vastu Solutions',
    subtitle: 'Prevent costly equipment breakdowns, eliminate transport bottlenecks, optimize material storage and accelerate production output.',
    filterIcon: <Factory className="w-3.5 h-3.5 text-[#B85D19]" />
  },
  all: {
    id: 'all',
    badgeLabel: 'All Vastu Services',
    heading: 'Our Complete Vastu Consultations',
    subtitle: 'Accurate, confidential & tailored Vedic guidance across Residential, Commercial and Industrial domains with practical non-demolition remedies.',
    filterIcon: <Sparkles className="w-3.5 h-3.5 text-[#B85D19]" />
  }
};

export const Vastu20CardsGrid: React.FC<Vastu20CardsGridProps> = ({
  onSelectTopic,
  onOpenBooking
}) => {
  const [activeCategory, setActiveCategory] = useState<VastuCategory>('residential');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showAll, setShowAll] = useState<boolean>(false);

  // Helper to generate clean Explore link matching the screenshot format ("Explore [Location/Subject] → ›")
  const getExploreLabel = (title: string) => {
    const clean = title.split(':')[0].replace(/Consultation/g, '').trim();
    if (clean.includes('Newlywed')) return 'Explore Newlywed Harmony';
    return `Explore ${clean}`;
  };

  // Filter cards strictly by category
  const filteredTopics = useMemo(() => {
    return VASTU_TOPICS_20.filter((item) => {
      let matchesCategory = true;
      if (activeCategory === 'residential') {
        matchesCategory = item.category === 'residential';
      } else if (activeCategory === 'commercial') {
        matchesCategory = item.category === 'commercial';
      } else if (activeCategory === 'industrial') {
        matchesCategory = item.category === 'industrial';
      }

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || 
        item.title.toLowerCase().includes(q) ||
        item.subtitle.toLowerCase().includes(q) ||
        item.direction.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // If a category has more than 8 cards, show only the first 8 cards initially
  const hasMoreThanEight = filteredTopics.length > 8;
  const displayedTopics = (hasMoreThanEight && !showAll)
    ? filteredTopics.slice(0, 8)
    : filteredTopics;

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
        <div className="flex flex-wrap md:flex-nowrap items-center gap-2 w-full md:w-auto">
          {[
            { id: 'residential', label: 'Residential Vastu', icon: Home },
            { id: 'commercial', label: 'Commercial Vastu', icon: Building2 },
            { id: 'industrial', label: 'Industrial Vastu', icon: Factory },
            { id: 'all', label: 'All Services', icon: Sparkles },
          ].map((tab) => {
            const Icon = tab.icon;
            const isSelected = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveCategory(tab.id as VastuCategory);
                  setSearchQuery('');
                  setShowAll(false);
                }}
                className={`flex-1 sm:flex-initial md:flex-none min-w-[130px] sm:min-w-0 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-[13px] font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center justify-center gap-1.5 ${
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
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setShowAll(false);
            }}
            placeholder="Search Vastu services..."
            className="w-full pl-9 pr-4 py-2 rounded-xl text-xs bg-[#FAF5EF] border border-[#EADBCE] text-[#2C1810] placeholder:text-[#A88B7B] focus:outline-none focus:border-[#8B3E18] focus:bg-white transition-all shadow-inner"
          />
          {searchQuery && (
            <button
              onClick={() => {
                setSearchQuery('');
                setShowAll(false);
              }}
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
            onClick={() => { setSearchQuery(''); setActiveCategory('all'); setShowAll(false); }}
            className="px-4 py-2 rounded-lg bg-[#C2410C] text-white text-xs font-semibold cursor-pointer"
          >
            Show All Services
          </button>
        </div>
      ) : (
        <div className="space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
            {displayedTopics.map((topic) => {
              return (
                <div
                  key={topic.id}
                  onClick={() => onSelectTopic(topic)}
                  className="group bg-white rounded-xl sm:rounded-2xl border border-neutral-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col justify-between cursor-pointer overflow-hidden hover:-translate-y-1"
                >
                  {/* ---------------- CARD TOP IMAGE: Compact Height for 4-Column Grid ---------------- */}
                  <div className="relative h-32 sm:h-36 w-full overflow-hidden bg-neutral-100">
                    <img
                      src={topic.image}
                      alt={topic.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                      loading="lazy"
                    />
                  </div>

                  {/* ---------------- CARD BODY: Compact Padding (ONLY Title + Explore Link) ---------------- */}
                  <div className="p-4 sm:px-4.5 sm:py-3.5 flex-1 flex flex-col justify-between space-y-3 bg-white">
                    {/* Title Only */}
                    <h3 className="text-sm sm:text-[15px] font-bold text-[#18181B] leading-snug group-hover:text-[#C2410C] transition-colors line-clamp-2">
                      {topic.title}
                    </h3>

                    {/* Explore Link: "Explore [Name] ➔ >" in Bold Terracotta as in Screenshot */}
                    <div className="pt-1 flex items-center gap-1.5 text-[#C2410C] group-hover:text-[#9A3412] font-bold text-[13px] sm:text-sm transition-colors">
                      <span>{getExploreLabel(topic.title)}</span>
                      <span className="font-bold text-base leading-none">→</span>
                      <span className="text-sm font-bold text-[#C2410C] leading-none">›</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ========================================================================= */}
          {/* VIEW ALL BUTTON (If category has > 8 cards, show button until clicked)    */}
          {/* ========================================================================= */}
          {hasMoreThanEight && !showAll && (
            <div className="flex justify-center pt-2">
              <button
                type="button"
                onClick={() => setShowAll(true)}
                className="px-8 py-3 rounded-full bg-[#8B3E18] hover:bg-[#703012] text-white text-sm font-bold tracking-wide transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105 flex items-center gap-2 cursor-pointer group"
              >
                <span>View All</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          )}
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
