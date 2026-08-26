import React, { useState, useEffect } from 'react';
import { Sparkles, Calendar, MessageCircle, Menu, X, ShieldCheck, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenWhatsApp: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onOpenWhatsApp }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Overview', href: '#understanding-career-astrology' },
    { label: 'Why Vedic Astrology', href: '#why-choose-us' },
    { label: 'Career Stages', href: '#career-stages' },
    { label: 'Reviews', href: '#verified-testimonials' },
    { label: 'How It Works', href: '#consultation-process' },
    { label: 'Deliverables', href: '#deliverables-and-diagnostics' },
    { label: 'Knowledge Hub', href: '#vedic-career-hub' },
    { label: 'FAQs', href: '#career-astrology-faqs' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#070a14]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl shadow-black/50 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          id="nav-brand-logo"
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-lg"
        >
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-violet-600 to-indigo-500 p-[1.5px] shadow-lg shadow-violet-500/20 group-hover:shadow-amber-500/30 transition-all duration-300">
            <div className="w-full h-full bg-[#0B1020] rounded-[10px] flex items-center justify-center">
              <span className="font-cinzel font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-100 to-violet-300 text-lg">
                ॐ
              </span>
            </div>
            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#070a14] animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-display font-bold text-lg tracking-tight text-white group-hover:text-amber-200 transition-colors">
                AstroCareer<span className="text-amber-400">™</span>
              </span>
              <span className="hidden sm:inline-flex text-[10px] uppercase font-mono-code tracking-wider px-1.5 py-0.5 rounded bg-violet-500/20 text-violet-300 border border-violet-500/30">
                Vedic D10
              </span>
            </div>
            <p className="text-[11px] text-slate-400 font-medium tracking-tight -mt-0.5">
              Acharya Ganesh Advisory
            </p>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav id="desktop-nav" aria-label="Main Navigation" className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/[0.07] px-3 py-1.5 rounded-full backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/[0.06] rounded-full transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2.5">
          {/* Live Availability Badge */}
          <div className="hidden xl:flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] text-emerald-300 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span>3 VIP Slots Open Today</span>
          </div>

          {/* Quick Free Calculator Pill Link */}
          <a
            href="#free-calculator"
            id="nav-free-calculator-pill"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-amber-300 bg-amber-500/10 border border-amber-500/25 hover:bg-amber-500/20 rounded-full transition-all duration-200"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Free Alignment Check</span>
          </a>

          {/* WhatsApp Direct */}
          <button
            id="nav-whatsapp-btn"
            onClick={onOpenWhatsApp}
            aria-label="Direct WhatsApp Consultation Inquiry"
            className="hidden md:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-emerald-300 bg-white/[0.04] hover:bg-emerald-500/10 border border-white/[0.08] hover:border-emerald-500/30 rounded-full transition-all duration-200"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span className="hidden lg:inline">WhatsApp</span>
          </button>

          {/* Primary CTA Book Consultation */}
          <button
            id="nav-book-consultation-btn"
            onClick={onOpenBooking}
            className="relative group overflow-hidden px-4 py-2 rounded-full text-xs font-bold text-slate-900 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center gap-1.5"
          >
            <Calendar className="w-3.5 h-3.5 text-slate-950" />
            <span>Book Consultation</span>
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 pointer-events-none" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="lg:hidden p-2 rounded-xl bg-white/[0.04] border border-white/[0.08] text-slate-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden mt-3 px-4 pt-3 pb-6 bg-[#0B1020]/95 backdrop-blur-2xl border-b border-white/[0.1] shadow-2xl space-y-2 animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <div className="flex items-center justify-between px-3 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-xl mb-3">
            <span className="text-xs text-emerald-300 font-medium flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              Available for Consultations Today
            </span>
            <span className="text-[11px] font-bold text-emerald-400">3 Slots</span>
          </div>

          <div className="grid grid-cols-2 gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/[0.06] rounded-xl flex items-center justify-between border border-transparent hover:border-white/[0.06]"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-white/[0.08] flex flex-col gap-2">
            <a
              href="#free-calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 px-4 text-xs font-semibold text-center text-amber-300 bg-amber-500/10 border border-amber-500/30 rounded-xl flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              Free Instant Career Alignment Check
            </a>

            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenWhatsApp();
                }}
                className="py-2.5 px-3 text-xs font-medium text-center text-slate-200 bg-white/[0.05] border border-white/[0.1] rounded-xl flex items-center justify-center gap-1.5"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                WhatsApp Us
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="py-2.5 px-3 text-xs font-bold text-center text-slate-900 bg-gradient-to-r from-amber-300 to-amber-400 rounded-xl shadow-lg shadow-amber-500/20 flex items-center justify-center gap-1.5"
              >
                <Calendar className="w-4 h-4 text-slate-950" />
                Book Now
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
