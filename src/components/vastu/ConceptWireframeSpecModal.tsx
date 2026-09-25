import React, { useState } from 'react';
import { 
  X, Monitor, Smartphone, Lightbulb, TrendingUp, 
  Link as LinkIcon, Search, BarChart3, CheckCircle2, 
  FileText, Layers, Sparkles
} from 'lucide-react';
import { ConceptSpec } from '../../data/vastuConceptsData';

interface ConceptWireframeSpecModalProps {
  concept: ConceptSpec | null;
  onClose: () => void;
}

type SpecTab = 'wireframes' | 'ux' | 'cro' | 'seo-linking' | 'engagement';

export const ConceptWireframeSpecModal: React.FC<ConceptWireframeSpecModalProps> = ({
  concept,
  onClose
}) => {
  const [activeTab, setActiveTab] = useState<SpecTab>('wireframes');
  const [wireframeViewport, setWireframeViewport] = useState<'desktop' | 'mobile'>('desktop');

  if (!concept) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 lg:p-6 animate-fadeIn">
      <div 
        className="relative w-full max-w-5xl bg-[#0C1222] border border-amber-500/40 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#090D18] border-b border-slate-800 px-5 sm:px-7 py-4 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                  {concept.badge}
                </span>
                <span className="text-xs text-slate-400">UI Concept Blueprint & Architecture</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white font-serif-display">
                {concept.name}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab Navigation Controls */}
        <div className="bg-slate-900/90 border-b border-slate-800 px-5 sm:px-7 flex items-center gap-2 overflow-x-auto no-scrollbar py-2">
          {[
            { id: 'wireframes', label: 'Wireframes (Desktop & Mobile)', icon: Monitor },
            { id: 'ux', label: 'UX Reasoning', icon: Lightbulb },
            { id: 'cro', label: 'CRO & Conversion Benefits', icon: TrendingUp },
            { id: 'seo-linking', label: 'SEO & Internal Linking', icon: Search },
            { id: 'engagement', label: 'Estimated Engagement Impact', icon: BarChart3 },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as SpecTab)}
                className={`px-3 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                  isActive
                    ? 'bg-amber-500 text-slate-950 font-bold shadow'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-7 overflow-y-auto space-y-6">
          
          {/* TAB 1: Wireframes */}
          {activeTab === 'wireframes' && (
            <div className="space-y-6">
              {/* Viewport Switcher */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Select Blueprint Viewport:
                </span>
                <div className="flex items-center gap-1.5 bg-slate-900 p-1 rounded-xl border border-slate-800">
                  <button
                    onClick={() => setWireframeViewport('desktop')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                      wireframeViewport === 'desktop'
                        ? 'bg-amber-500 text-slate-950'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Monitor className="w-3.5 h-3.5" />
                    <span>Desktop Wireframe (1440px)</span>
                  </button>
                  <button
                    onClick={() => setWireframeViewport('mobile')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                      wireframeViewport === 'mobile'
                        ? 'bg-amber-500 text-slate-950'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                    <span>Mobile Wireframe (375px)</span>
                  </button>
                </div>
              </div>

              {/* Wireframe Display */}
              {wireframeViewport === 'desktop' ? (
                <div className="space-y-4">
                  <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800 text-xs">
                    <span className="text-amber-400 font-bold block mb-1">
                      Layout Architecture: {concept.desktopWireframe.layoutType}
                    </span>
                    <p className="text-slate-300">
                      {concept.desktopWireframe.description}
                    </p>
                  </div>

                  {/* ASCII Schematic Terminal */}
                  <div className="bg-[#050811] p-4 sm:p-5 rounded-xl border border-slate-800 font-mono text-xs text-amber-200/90 overflow-x-auto shadow-inner leading-relaxed">
                    <pre>{concept.desktopWireframe.asciiWireframe}</pre>
                  </div>

                  {/* Key Components */}
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                      Core Wireframe Components:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {concept.desktopWireframe.keyComponents.map((comp, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-300 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                          <span>{comp}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800 text-xs">
                    <span className="text-amber-400 font-bold block mb-1">
                      Mobile Touch Layout: {concept.mobileWireframe.layoutType}
                    </span>
                    <p className="text-slate-300">
                      {concept.mobileWireframe.description}
                    </p>
                  </div>

                  {/* Mobile ASCII Schematic */}
                  <div className="bg-[#050811] p-4 sm:p-5 rounded-xl border border-slate-800 font-mono text-xs text-emerald-300 overflow-x-auto shadow-inner max-w-md mx-auto leading-relaxed">
                    <pre>{concept.mobileWireframe.asciiWireframe}</pre>
                  </div>

                  {/* Mobile Components */}
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                      Mobile Optimization Details:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {concept.mobileWireframe.keyComponents.map((comp, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-300 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                          <span>{comp}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: UX Reasoning */}
          {activeTab === 'ux' && (
            <div className="space-y-4">
              <div className="bg-amber-950/20 border border-amber-500/30 rounded-xl p-4 text-xs text-amber-200">
                <span className="font-bold block mb-1">User Experience Philosophy:</span>
                Vedic astrology applications often fail by dumping massive tables or 19 disjointed blog cards. This concept re-engineers human cognitive load into effortless discovery.
              </div>

              <div className="space-y-3">
                {concept.uxReasoning.map((item, idx) => (
                  <div key={idx} className="bg-slate-900/70 p-4 rounded-xl border border-slate-800 flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-xs flex-shrink-0">
                      0{idx + 1}
                    </div>
                    <div>
                      <p className="text-sm text-slate-200 leading-relaxed font-medium">
                        {item}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: CRO Benefits */}
          {activeTab === 'cro' && (
            <div className="space-y-4">
              <div className="bg-emerald-950/20 border border-emerald-500/30 rounded-xl p-4 text-xs text-emerald-200">
                <span className="font-bold block mb-1">Conversion Rate Optimization (CRO) Rationale:</span>
                How this concept converts casual curiosity into qualified consultation leads without hard-selling.
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {concept.croBenefits.map((item, idx) => (
                  <div key={idx} className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 flex flex-col justify-between">
                    <div>
                      <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs mb-2">
                        #{idx + 1}
                      </div>
                      <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                        {item}
                      </p>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 mt-3 pt-2 border-t border-slate-800">
                      Conversion Catalyst
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: SEO & Internal Linking */}
          {activeTab === 'seo-linking' && (
            <div className="space-y-6">
              {/* Internal Linking */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <LinkIcon className="w-4 h-4 text-amber-400" />
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                    Internal Linking Advantages
                  </h4>
                </div>
                <div className="space-y-2.5">
                  {concept.internalLinkingAdvantages.map((adv, idx) => (
                    <div key={idx} className="p-3 bg-slate-900/60 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300 flex items-start gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-amber-400 mt-2 flex-shrink-0" />
                      <span>{adv}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* SEO Benefits */}
              <div className="space-y-3 pt-3 border-t border-slate-800">
                <div className="flex items-center gap-2">
                  <Search className="w-4 h-4 text-sky-400" />
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                    Search Engine Optimization (SEO) Power
                  </h4>
                </div>
                <div className="space-y-2.5">
                  {concept.seoBenefits.map((seo, idx) => (
                    <div key={idx} className="p-3 bg-slate-900/60 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300 flex items-start gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-sky-400 mt-2 flex-shrink-0" />
                      <span>{seo}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: Engagement Impact */}
          {activeTab === 'engagement' && (
            <div className="space-y-5">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800 text-center">
                  <span className="text-[11px] text-slate-400 block">Bounce Rate Change</span>
                  <span className="text-2xl font-bold font-mono text-emerald-400 mt-1 block">
                    {concept.engagementImpact.bounceRateChange}
                  </span>
                  <span className="text-[10px] text-slate-500">Industry benchmark</span>
                </div>

                <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800 text-center">
                  <span className="text-[11px] text-slate-400 block">Session Dwell Time</span>
                  <span className="text-2xl font-bold font-mono text-amber-400 mt-1 block">
                    {concept.engagementImpact.sessionDurationMultiplier}
                  </span>
                  <span className="text-[10px] text-slate-500">Average multiplier</span>
                </div>

                <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800 text-center">
                  <span className="text-[11px] text-slate-400 block">Click-Through Rate</span>
                  <span className="text-2xl font-bold font-mono text-sky-400 mt-1 block">
                    {concept.engagementImpact.ctrLift}
                  </span>
                  <span className="text-[10px] text-slate-500">Lift vs card grid</span>
                </div>

                <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800 text-center">
                  <span className="text-[11px] text-slate-400 block">Lead Conversion</span>
                  <span className="text-2xl font-bold font-mono text-purple-400 mt-1 block">
                    {concept.engagementImpact.leadConversionMultiplier}
                  </span>
                  <span className="text-[10px] text-slate-500">Consultation leads</span>
                </div>
              </div>

              <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300">
                <span className="font-bold text-amber-300 block mb-1">Executive Summary:</span>
                {concept.engagementImpact.summary}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
