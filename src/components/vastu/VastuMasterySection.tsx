import React, { useState } from 'react';
import { 
  Home, SlidersHorizontal, FolderTree, Compass, AlertCircle, 
  Sparkles, Layers, FileCode, CheckCircle2, ChevronRight, 
  TableProperties, Eye, BookOpen, PhoneCall, LayoutGrid
} from 'lucide-react';
import { Vastu20CardsGrid } from './Vastu20CardsGrid';
import { ConceptHouseMap } from './ConceptHouseMap';
import { ConceptScrollCards } from './ConceptScrollCards';
import { ConceptAccordion } from './ConceptAccordion';
import { ConceptEnergyWheel } from './ConceptEnergyWheel';
import { ConceptProblemNavigation } from './ConceptProblemNavigation';
import { VastuDedicatedPageModal } from './VastuDedicatedPageModal';
import { ConceptWireframeSpecModal } from './ConceptWireframeSpecModal';
import { ConceptComparisonTable } from './ConceptComparisonTable';
import { VastuTopicItem, VASTU_5_CONCEPTS, ConceptSpec, VASTU_TOPICS_20 } from '../../data/vastuConceptsData';

interface VastuMasterySectionProps {
  onOpenBooking: () => void;
}

export const VastuMasterySection: React.FC<VastuMasterySectionProps> = ({
  onOpenBooking
}) => {
  const [displayMode, setDisplayMode] = useState<'gallery-grid' | 'interactive-concepts'>('gallery-grid');
  const [activeConceptId, setActiveConceptId] = useState<string>('house-map');
  const [selectedTopicForPage, setSelectedTopicForPage] = useState<VastuTopicItem | null>(null);
  const [specModalConcept, setSpecModalConcept] = useState<ConceptSpec | null>(null);
  const [showComparisonTable, setShowComparisonTable] = useState<boolean>(false);

  const activeSpec = VASTU_5_CONCEPTS.find(c => c.id === activeConceptId) || VASTU_5_CONCEPTS[0];

  const conceptsNav = [
    { id: 'house-map', title: '1. House Map', subtitle: 'Spatial Blueprint', icon: Home, badge: 'Curiosity' },
    { id: 'horizontal-scroll', title: '2. Scroll Cards', subtitle: 'Kinetic Carousel', icon: SlidersHorizontal, badge: 'Velocity' },
    { id: 'accordion-categories', title: '3. Accordions', subtitle: '4 Macro Realms', icon: FolderTree, badge: 'Structured' },
    { id: 'energy-wheel', title: '4. Energy Wheel', subtitle: '360° Vastu Chakra', icon: Compass, badge: 'Prestige' },
    { id: 'problem-navigation', title: '5. Problem Nav', subtitle: 'Symptom to Remedy', icon: AlertCircle, badge: 'CRO Winner' },
  ];

  return (
    <section 
      id="vastu-mastery-section"
      className="relative py-16 sm:py-24 bg-[#FAF7F2] text-[#2C1810] border-t border-b border-[#EADBCE] overflow-hidden"
    >
      {/* Subtle Warm Luxury Aura Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-[#FFF5EA]/80 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        
        {/* Top View Mode Switcher Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white/95 backdrop-blur-md rounded-2xl p-2.5 sm:p-3 border border-[#EADBCE] shadow-sm">
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setDisplayMode('gallery-grid');
                setShowComparisonTable(false);
              }}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                displayMode === 'gallery-grid' && !showComparisonTable
                  ? 'bg-[#8B3E18] text-white shadow-md shadow-[#8B3E18]/20'
                  : 'text-[#6E4F42] hover:bg-[#FAF5EF] hover:text-[#2C1810]'
              }`}
            >
              <LayoutGrid className="w-4 h-4 text-amber-300" />
              <span>20 Vastu Cards (Gallery Format)</span>
            </button>

            <button
              onClick={() => {
                setDisplayMode('interactive-concepts');
                setShowComparisonTable(false);
              }}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                displayMode === 'interactive-concepts' && !showComparisonTable
                  ? 'bg-[#8B3E18] text-white shadow-md shadow-[#8B3E18]/20'
                  : 'text-[#6E4F42] hover:bg-[#FAF5EF] hover:text-[#2C1810]'
              }`}
            >
              <Compass className="w-4 h-4 text-amber-300" />
              <span>5 Interactive Paradigms</span>
            </button>
          </div>

          <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
            <button
              type="button"
              onClick={() => setSpecModalConcept(activeSpec)}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#FAF5EF] hover:bg-[#F3E9DD] text-[#6E4F42] border border-[#EADBCE] font-semibold text-xs transition-colors cursor-pointer"
            >
              <FileCode className="w-3.5 h-3.5 text-[#8B3E18]" />
              <span>Wireframes & SEO Spec</span>
            </button>

            <button
              type="button"
              onClick={() => setShowComparisonTable(!showComparisonTable)}
              className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border font-semibold text-xs transition-colors cursor-pointer ${
                showComparisonTable
                  ? 'bg-[#8B3E18] text-white border-[#8B3E18]'
                  : 'bg-[#FAF5EF] hover:bg-[#F3E9DD] text-[#6E4F42] border-[#EADBCE]'
              }`}
            >
              <TableProperties className="w-3.5 h-3.5" />
              <span>{showComparisonTable ? 'Hide Comparison' : 'Compare 5 Concepts'}</span>
            </button>
          </div>
        </div>

        {/* ----------------- VIEW 1: 20 CARDS GALLERY GRID (DEFAULT) ----------------- */}
        {showComparisonTable ? (
          <ConceptComparisonTable
            onSelectConcept={(id) => {
              setActiveConceptId(id);
              setDisplayMode('interactive-concepts');
              setShowComparisonTable(false);
            }}
          />
        ) : displayMode === 'gallery-grid' ? (
          <Vastu20CardsGrid
            onSelectTopic={(topic) => setSelectedTopicForPage(topic)}
            onOpenBooking={onOpenBooking}
          />
        ) : (
          /* ----------------- VIEW 2: 5 INTERACTIVE CONCEPTS ----------------- */
          <div className="space-y-6">
            {/* Concept Switcher Ribbon */}
            <div className="bg-[#12182B] text-white border border-amber-500/30 rounded-2xl p-3 shadow-xl space-y-3">
              <div className="flex items-center justify-between px-2 text-xs">
                <span className="font-semibold text-slate-200">
                  Active Interactive Concept: <strong className="text-amber-400 font-mono">{activeSpec.name}</strong>
                </span>
                <span className="text-[11px] text-slate-400 font-mono">
                  Switch concept to test user experience
                </span>
              </div>

              {/* 5 Concept Tabs */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
                {conceptsNav.map((concept) => {
                  const Icon = concept.icon;
                  const isSelected = activeConceptId === concept.id;

                  return (
                    <button
                      key={concept.id}
                      type="button"
                      onClick={() => setActiveConceptId(concept.id)}
                      className={`p-2.5 sm:p-3 rounded-xl border text-left transition-all duration-200 cursor-pointer flex items-center gap-2.5 group ${
                        isSelected
                          ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 border-amber-300 font-bold shadow-md shadow-amber-500/20'
                          : 'bg-slate-900/90 text-slate-300 hover:text-white hover:bg-slate-800 border-slate-800'
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        isSelected ? 'bg-slate-950 text-amber-400' : 'bg-slate-800 text-slate-400 group-hover:text-amber-400'
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>

                      <div className="overflow-hidden">
                        <span className="text-xs font-bold truncate block">
                          {concept.title}
                        </span>
                        <span className={`text-[10px] block truncate font-mono ${
                          isSelected ? 'text-slate-900 font-semibold' : 'text-slate-400'
                        }`}>
                          {concept.subtitle}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Interactive Component */}
            <div className="bg-[#0C1222] text-slate-100 p-6 sm:p-8 rounded-3xl border border-amber-500/30 shadow-2xl">
              {activeConceptId === 'house-map' && (
                <ConceptHouseMap
                  onSelectTopic={(topic) => setSelectedTopicForPage(topic)}
                  onOpenBooking={onOpenBooking}
                />
              )}

              {activeConceptId === 'horizontal-scroll' && (
                <ConceptScrollCards
                  onSelectTopic={(topic) => setSelectedTopicForPage(topic)}
                  onOpenBooking={onOpenBooking}
                />
              )}

              {activeConceptId === 'accordion-categories' && (
                <ConceptAccordion
                  onSelectTopic={(topic) => setSelectedTopicForPage(topic)}
                  onOpenBooking={onOpenBooking}
                />
              )}

              {activeConceptId === 'energy-wheel' && (
                <ConceptEnergyWheel
                  onSelectTopic={(topic) => setSelectedTopicForPage(topic)}
                  onOpenBooking={onOpenBooking}
                />
              )}

              {activeConceptId === 'problem-navigation' && (
                <ConceptProblemNavigation
                  onSelectTopic={(topic) => setSelectedTopicForPage(topic)}
                  onOpenBooking={onOpenBooking}
                />
              )}
            </div>
          </div>
        )}

      </div>

      {/* Dedicated Page Modal / Drawer (when any item in any concept is clicked) */}
      <VastuDedicatedPageModal
        topic={selectedTopicForPage}
        onClose={() => setSelectedTopicForPage(null)}
        onSelectTopic={(topic) => setSelectedTopicForPage(topic)}
        onOpenBooking={onOpenBooking}
      />

      {/* Wireframe & Strategic Spec Modal */}
      <ConceptWireframeSpecModal
        concept={specModalConcept}
        onClose={() => setSpecModalConcept(null)}
      />
    </section>
  );
};
