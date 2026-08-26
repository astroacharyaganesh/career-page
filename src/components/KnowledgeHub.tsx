import React, { useState } from 'react';
import { KNOWLEDGE_ARTICLES } from '../data/careerAstrologyData';
import { KnowledgeArticle } from '../types';
import {
  BookOpen,
  Search,
  ChevronDown,
  ChevronUp,
  Clock,
  User,
  Sparkles,
  Tag,
  ArrowRight,
  CheckCircle2,
  FileText
} from 'lucide-react';

export const KnowledgeHub: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedArticleId, setExpandedArticleId] = useState<string | null>('art-1');

  const categories = ['All', 'Articles', 'Guides', 'Videos', 'FAQs'];

  const filteredArticles = KNOWLEDGE_ARTICLES.filter((art) => {
    const matchesCategory = activeCategory === 'All' || art.category === activeCategory;
    const matchesSearch =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const toggleExpand = (id: string) => {
    setExpandedArticleId(expandedArticleId === id ? null : id);
  };

  return (
    <section id="knowledge" className="py-24 relative overflow-hidden bg-[#0B1020]/80">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-violet-600/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/25 text-xs font-semibold text-violet-300 font-mono-code">
            <BookOpen className="w-3.5 h-3.5 text-amber-400" />
            <span>FREE LEARNING RESOURCES & RESEARCH</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            The Vedic Career Knowledge Hub <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-100 to-violet-300">
              Master the Planetary Science of Success
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Free articles, D10 calculation breakdowns, and astrological timing frameworks authored directly by Acharya Ganesh.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-4xl mx-auto mb-10">
          
          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search concepts, D10, gemstones..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-slate-900/80 border border-white/[0.1] text-xs text-white placeholder-slate-400 focus:outline-none focus:border-amber-400 font-mono-code"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono-code transition-all cursor-pointer whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-amber-400 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                    : 'bg-white/[0.04] text-slate-300 hover:text-white border border-white/[0.08]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* Articles & Guides Interactive Accordion List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredArticles.length === 0 ? (
            <div className="p-12 text-center rounded-3xl bg-slate-900/40 border border-white/[0.08] text-slate-400 space-y-2">
              <p className="text-sm font-mono-code">No articles matched your search query "{searchQuery}".</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('All');
                }}
                className="text-xs text-amber-300 font-semibold underline cursor-pointer"
              >
                Clear filters
              </button>
            </div>
          ) : (
            filteredArticles.map((article) => {
              const isExpanded = expandedArticleId === article.id;

              return (
                <div
                  key={article.id}
                  id={`knowledge-item-${article.id}`}
                  className="rounded-3xl overflow-hidden bg-slate-900/60 backdrop-blur-xl border border-white/[0.08] hover:border-amber-400/40 transition-all duration-300 shadow-xl"
                >
                  {/* Article Accordion Header */}
                  <div
                    onClick={() => toggleExpand(article.id)}
                    className="p-6 sm:p-7 flex items-center justify-between gap-4 cursor-pointer group"
                  >
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono-code font-bold bg-amber-400/15 text-amber-300 border border-amber-400/25">
                          {article.category}
                        </span>

                        <span className="text-[11px] font-mono-code text-slate-400 flex items-center gap-1">
                          <Clock className="w-3 h-3 text-slate-400" />
                          {article.readTime}
                        </span>

                        <span className="text-[11px] font-mono-code text-slate-400 flex items-center gap-1">
                          <User className="w-3 h-3 text-slate-400" />
                          {article.author}
                        </span>
                      </div>

                      <h3 className="font-display text-lg sm:text-xl font-bold text-white group-hover:text-amber-200 transition-colors">
                        {article.title}
                      </h3>

                      <p className="text-xs text-slate-300 line-clamp-2">
                        {article.summary}
                      </p>
                    </div>

                    <div className="p-2.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-slate-300 group-hover:text-amber-300 flex-shrink-0 transition-colors">
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </div>

                  {/* Expanded Content Drawer */}
                  {isExpanded && (
                    <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-2 border-t border-white/[0.06] space-y-4 animate-in fade-in duration-200">
                      
                      <div className="p-4 rounded-2xl bg-black/40 border border-white/[0.06] space-y-2">
                        <h4 className="text-xs font-mono-code font-bold uppercase tracking-wider text-amber-300 flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5" />
                          Key Architectural Takeaways:
                        </h4>
                        <ul className="space-y-2">
                          {article.keyPoints.map((pt, pIdx) => (
                            <li key={pIdx} className="flex items-start gap-2 text-xs text-slate-200 leading-relaxed">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap items-center gap-1.5 pt-2">
                        {article.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 rounded-lg text-[10px] font-mono-code bg-white/[0.04] text-slate-400 border border-white/[0.06] flex items-center gap-1"
                          >
                            <Tag className="w-2.5 h-2.5" />
                            {tag}
                          </span>
                        ))}
                      </div>

                    </div>
                  )}

                </div>
              );
            })
          )}
        </div>

      </div>
    </section>
  );
};
