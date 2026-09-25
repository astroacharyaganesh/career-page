import React, { useState } from 'react';
import { 
  X, Compass, ShieldAlert, Sparkles, CheckCircle2, ArrowRight, 
  ExternalLink, Share2, Copy, Check, BookOpen, AlertTriangle, 
  PhoneCall, MapPin, Layers, Flame, Droplets, Mountain, Wind, 
  Eye
} from 'lucide-react';
import { VastuTopicItem, VASTU_TOPICS_19 } from '../../data/vastuConceptsData';

interface VastuDedicatedPageModalProps {
  topic: VastuTopicItem | null;
  onClose: () => void;
  onSelectTopic: (topic: VastuTopicItem) => void;
  onOpenBooking: () => void;
}

export const VastuDedicatedPageModal: React.FC<VastuDedicatedPageModalProps> = ({
  topic,
  onClose,
  onSelectTopic,
  onOpenBooking,
}) => {
  const [copied, setCopied] = useState(false);
  const [checklist, setChecklist] = useState<Record<number, boolean>>({});

  if (!topic) return null;

  const handleCopyLink = () => {
    const fakeUrl = `${window.location.origin}/vastu/${topic.slug}`;
    navigator.clipboard.writeText(fakeUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const toggleCheck = (idx: number) => {
    setChecklist(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  const relatedTopics = VASTU_TOPICS_19.filter(t => topic.relatedZoneIds.includes(t.id));

  const getElementIcon = (element: string) => {
    if (element.includes('Water')) return <Droplets className="w-4 h-4 text-sky-400" />;
    if (element.includes('Fire')) return <Flame className="w-4 h-4 text-rose-400" />;
    if (element.includes('Earth')) return <Mountain className="w-4 h-4 text-amber-500" />;
    if (element.includes('Air')) return <Wind className="w-4 h-4 text-teal-400" />;
    return <Sparkles className="w-4 h-4 text-purple-400" />;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 lg:p-6 animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl bg-[#0C1222] border border-amber-500/30 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Simulated Browser Navigation & Breadcrumb Header */}
        <div className="bg-[#090D18] border-b border-slate-800/80 px-4 sm:px-6 py-3 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-2 text-xs text-slate-400 overflow-x-auto no-scrollbar whitespace-nowrap">
            <span className="text-amber-400 font-semibold">Acharya Ganesh</span>
            <span>/</span>
            <span>Vedic Vastu Hub</span>
            <span>/</span>
            <span className="text-white font-medium bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700/60 font-mono text-[11px]">
              /vastu/{topic.slug}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyLink}
              title="Copy Page URL"
              className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs rounded-lg bg-slate-800/90 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copied ? 'Link Copied!' : 'Share Page'}</span>
            </button>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-4 sm:p-6 lg:p-8 overflow-y-auto space-y-6">
          {/* Panoramic High-Res Topic Image Banner */}
          <div className="relative aspect-[21/9] sm:aspect-[24/8] w-full rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl">
            <img
              src={topic.image}
              alt={topic.title}
              className="w-full h-full object-cover object-center brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0C1222] via-[#0C1222]/30 to-black/40" />
            <div className="absolute top-3 left-3 bg-slate-950/85 backdrop-blur-md px-3 py-1 rounded-lg border border-amber-500/30 text-amber-400 font-mono text-xs font-bold shadow">
              Card #{topic.number} of 20
            </div>
            <div className="absolute bottom-3 left-4 right-4">
              <span className="text-xs text-amber-300 font-mono tracking-wider uppercase block drop-shadow">
                Vedic Spatial Alignment
              </span>
              <p className="text-white font-serif-display text-base sm:text-xl font-bold drop-shadow-md">
                "{topic.subtitle}"
              </p>
            </div>
          </div>

          {/* Main Hero Header */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-slate-800">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/15 text-amber-300 border border-amber-500/30">
                  <Compass className="w-3.5 h-3.5 text-amber-400" />
                  {topic.direction} ({topic.degrees})
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-800 text-slate-200 border border-slate-700">
                  {getElementIcon(topic.element)}
                  {topic.element}
                </span>
                <span className="text-xs text-slate-400 italic">
                  Sanskrit: <span className="text-slate-300 font-medium">{topic.sanskritName}</span>
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold font-serif-display text-white tracking-tight">
                {topic.title}
              </h2>
              <p className="text-sm sm:text-base text-amber-200/90 font-medium">
                {topic.punchyHook}
              </p>
            </div>

            {/* Quick Metadata Box */}
            <div className="grid grid-cols-2 sm:grid-cols-1 gap-2 bg-slate-900/80 p-3 rounded-xl border border-slate-800 text-xs sm:min-w-[180px]">
              <div>
                <span className="text-slate-400 block text-[11px]">Ruling Deity:</span>
                <span className="text-slate-200 font-semibold">{topic.rulingDeity}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[11px]">Planetary Lord:</span>
                <span className="text-amber-400 font-semibold">{topic.planetaryLord}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[11px]">Monthly Searches:</span>
                <span className="text-emerald-400 font-semibold">{topic.monthlySearches}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[11px]">Engagement Score:</span>
                <span className="text-amber-400 font-semibold">{topic.engagementScore}/100</span>
              </div>
            </div>
          </div>

          {/* Critical Dosha Warning Banner */}
          <div className="bg-gradient-to-r from-rose-950/40 via-red-950/20 to-slate-900/60 border border-rose-500/30 rounded-xl p-4 flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-rose-500/20 border border-rose-500/40 flex items-center justify-center flex-shrink-0 mt-0.5">
              <ShieldAlert className="w-5 h-5 text-rose-400" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-rose-300 uppercase tracking-wider flex items-center gap-2">
                <span>Critical Dosha Warning for this Zone</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                {topic.criticalDoshaWarning}
              </p>
            </div>
          </div>

          {/* 2-Column: Symptoms Audit & Non-Destructive Vedic Remedies */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Left: Interactive Symptoms Self-Audit */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4 sm:p-5 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-400" />
                  Are You Facing These Symptoms?
                </h4>
                <span className="text-[11px] text-slate-400">Click to audit</span>
              </div>
              <p className="text-xs text-slate-400">
                Check any condition currently active in your residence or commercial office:
              </p>

              <div className="space-y-2.5 pt-1">
                {topic.commonSymptoms.map((symptom, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => toggleCheck(idx)}
                    className={`w-full text-left p-3 rounded-lg border text-xs sm:text-sm transition-all flex items-start gap-3 ${
                      checklist[idx]
                        ? 'bg-rose-950/30 border-rose-500/50 text-rose-200'
                        : 'bg-slate-800/40 border-slate-700/60 text-slate-300 hover:border-slate-600'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded border mt-0.5 flex items-center justify-center flex-shrink-0 transition-colors ${
                      checklist[idx] ? 'bg-rose-500 border-rose-400 text-white' : 'border-slate-500'
                    }`}>
                      {checklist[idx] && <Check className="w-3 h-3" />}
                    </div>
                    <span>{symptom}</span>
                  </button>
                ))}
              </div>

              {Object.values(checklist).filter(Boolean).length > 0 && (
                <div className="mt-2 text-xs text-amber-300/90 bg-amber-950/30 border border-amber-500/30 rounded-lg p-2.5 flex items-center justify-between">
                  <span>{Object.values(checklist).filter(Boolean).length} Dosha Symptom(s) Detected</span>
                  <span className="font-semibold underline cursor-pointer" onClick={onOpenBooking}>
                    Fix With Audit →
                  </span>
                </div>
              )}
            </div>

            {/* Right: Non-Destructive Vedic Remedies */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4 sm:p-5 space-y-3">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Vedic Remedies (No Demolition)
              </h4>
              <p className="text-xs text-slate-400">
                Architectural corrections engineered to neutralize adverse planetary rays without breaking walls:
              </p>

              <div className="space-y-2.5 pt-1">
                {topic.remedies.map((remedy, idx) => (
                  <div 
                    key={idx}
                    className="p-3 rounded-lg bg-emerald-950/20 border border-emerald-500/30 text-xs sm:text-sm text-slate-200 flex items-start gap-2.5"
                  >
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">
                      {idx + 1}
                    </div>
                    <span>{remedy}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <div className="text-[11px] text-slate-400 italic">
                  * Note: Exact elemental metal strip thickness & gem placement depends on your individual D1 & D10 horoscope alignment.
                </div>
              </div>
            </div>
          </div>

          {/* Lead Magnet & Consultation Action Box */}
          <div className="bg-gradient-to-r from-amber-900/30 via-stone-900/60 to-amber-950/40 border-2 border-amber-500/40 rounded-xl p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Personalized Vedic Alignment
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Book a Confidential 1-on-1 Vastu Assessment for {topic.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                Share your property floorplan with Acharya Ganesh. Receive compass-calibrated 16-zone diagnostic analysis and non-destructive cures.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto flex-shrink-0">
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenBooking();
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Book Zone Consultation</span>
              </button>
            </div>
          </div>

          {/* Internal Linking Architecture: Related Vastu Zones */}
          {relatedTopics.length > 0 && (
            <div className="pt-2 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-xs sm:text-sm font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                  <Layers className="w-4 h-4 text-amber-400" />
                  Interlinked Energy Zones (Recommended Internal Crawl)
                </h4>
                <span className="text-xs text-slate-400">Click to explore connected zones</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {relatedTopics.map((rel) => (
                  <button
                    key={rel.id}
                    type="button"
                    onClick={() => {
                      onSelectTopic(rel);
                      setChecklist({});
                    }}
                    className="group text-left p-3 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 hover:border-amber-500/40 transition-all cursor-pointer flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between text-[11px] text-amber-400/90 mb-1">
                        <span>{rel.direction}</span>
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </div>
                      <h5 className="text-xs sm:text-sm font-semibold text-white group-hover:text-amber-300 transition-colors line-clamp-1">
                        {rel.title}
                      </h5>
                      <p className="text-[11px] text-slate-400 mt-1 line-clamp-2">
                        {rel.shortBenefit}
                      </p>
                    </div>

                    <div className="mt-2 pt-2 border-t border-slate-800 text-[10px] text-slate-400 font-mono flex items-center justify-between">
                      <span>/vastu/{rel.slug}</span>
                      <span className="text-amber-400">Inspect →</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
