import React, { useState } from 'react';
import { Phone, User, Menu, X, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenWhatsApp: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onOpenWhatsApp }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navMenuItems = [
    { label: 'Home', href: '#hero-banner' },
    { label: 'Vastu Shastra', href: '#vastu-mastery-section' },
    { label: 'About', href: '#why-choose-us' },
    { label: 'Courses', href: '#career-stages' },
    { label: 'Products', href: '#deliverables-and-diagnostics' },
    { label: 'Services', href: '#understanding-career-astrology' },
    { label: 'Contact', href: '#career-astrology-faqs' },
    { label: 'Blogs', href: '#vedic-career-hub' },
  ];

  return (
    <header
      id="main-header"
      className="sticky top-0 left-0 right-0 z-50 bg-white border-b border-stone-200/90 shadow-sm"
    >
      {/* ================= TOP BAR (Logo + Contacts + Auth Buttons) ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 flex items-center justify-between">
        
        {/* Brand Logo - Acharya Ganesh Emblem with Ribbon Banner */}
        <a
          href="#"
          id="nav-brand-logo"
          className="flex items-center gap-2 group focus:outline-none"
        >
          <div className="flex flex-col items-center">
            <div className="relative flex flex-col items-center">
              {/* Circular Emblem */}
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 border-[#8B3E18] p-0.5 bg-[#FFF9F3] shadow-sm flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  {/* Outer decorative ring */}
                  <circle cx="50" cy="50" r="47" fill="#FBF3EA" stroke="#A95726" strokeWidth="2.5" strokeDasharray="3,2" />
                  <circle cx="50" cy="50" r="42" fill="#8B3E18" />
                  <circle cx="50" cy="50" r="40" fill="#FFF8F0" />
                  
                  {/* Aura Rays */}
                  {[...Array(12)].map((_, i) => (
                    <line
                      key={i}
                      x1="50"
                      y1="50"
                      x2={50 + 38 * Math.cos((i * 30 * Math.PI) / 180)}
                      y2={50 + 38 * Math.sin((i * 30 * Math.PI) / 180)}
                      stroke="#E4A86C"
                      strokeWidth="0.75"
                      opacity="0.6"
                    />
                  ))}
                  
                  {/* Acharya Avatar Figure */}
                  {/* Halo */}
                  <circle cx="50" cy="40" r="16" fill="#FCEBD5" stroke="#D18545" strokeWidth="1" />
                  {/* Body / Saffron Robes */}
                  <path d="M26 80 C 26 58, 38 52, 50 52 C 62 52, 74 58, 74 80 Z" fill="#D26522" />
                  <path d="M38 56 L50 78 L62 56 Z" fill="#E8823B" opacity="0.8" />
                  {/* Head */}
                  <circle cx="50" cy="38" r="11" fill="#F5CBA7" />
                  {/* Beard & Hair */}
                  <path d="M42 34 Q50 26 58 34 Q57 44 50 49 Q43 44 42 34 Z" fill="#3D1D0E" />
                  <circle cx="50" cy="37" r="8" fill="#F5CBA7" />
                  {/* Tilak */}
                  <line x1="50" y1="31" x2="50" y2="35" stroke="#C42818" strokeWidth="1.2" />
                  <circle cx="50" cy="35" r="0.7" fill="#E89B16" />
                  {/* Meditating Hands / Namaste */}
                  <circle cx="50" cy="62" r="4.5" fill="#ECA97A" />
                  <circle cx="50" cy="62" r="3" fill="#D26522" />
                </svg>
              </div>

              {/* Ribbon Banner */}
              <div className="-mt-2 relative z-10 bg-gradient-to-r from-[#8B3E18] via-[#B85D19] to-[#8B3E18] text-white px-2 sm:px-2.5 py-0.5 rounded-full shadow-sm border border-[#E9C39B]/60">
                <span className="font-serif-display font-bold text-[9px] sm:text-[10px] tracking-tight block leading-tight whitespace-nowrap">
                  Acharya Ganesh
                </span>
              </div>
            </div>
            
            {/* Sanskrit Motto */}
            <span className="text-[7.5px] sm:text-[8px] text-[#8B3E18] font-medium tracking-tighter mt-0.5">
              ॥ ॐ गं गणपतये नमः ॥
            </span>
          </div>
        </a>

        {/* Desktop Right Group: Phone Contacts + Action Pills */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          
          {/* Phone Number 1 */}
          <a
            href="tel:+917300004325"
            className="flex items-center gap-2 text-stone-900 hover:text-[#8B3E18] transition-colors group cursor-pointer"
          >
            <div className="w-8 h-8 rounded-full border border-stone-800 flex items-center justify-center group-hover:border-[#8B3E18] group-hover:bg-[#FFF9F3] transition-colors">
              <Phone className="w-4 h-4 text-stone-900 group-hover:text-[#8B3E18] transition-colors" />
            </div>
            <span className="text-[13px] lg:text-[14px] font-semibold text-stone-900 tracking-tight">
              +91 73000-04325
            </span>
          </a>

          {/* Phone Number 2 */}
          <a
            href="tel:+917300004326"
            className="flex items-center gap-2 text-stone-900 hover:text-[#8B3E18] transition-colors group cursor-pointer"
          >
            <div className="w-8 h-8 rounded-full border border-stone-800 flex items-center justify-center group-hover:border-[#8B3E18] group-hover:bg-[#FFF9F3] transition-colors">
              <Phone className="w-4 h-4 text-stone-900 group-hover:text-[#8B3E18] transition-colors" />
            </div>
            <span className="text-[13px] lg:text-[14px] font-semibold text-stone-900 tracking-tight">
              +91 73000-04326
            </span>
          </a>

          {/* Log in Pill Button */}
          <button
            type="button"
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full border border-stone-800 bg-white hover:bg-stone-900 hover:text-white text-stone-900 text-[13px] lg:text-[14px] font-medium transition-all duration-200 shadow-sm"
          >
            <User className="w-3.5 h-3.5" />
            <span>Log in</span>
          </button>

          {/* Course Login Pill Button */}
          <button
            type="button"
            onClick={onOpenBooking}
            className="inline-flex items-center px-5 py-1.5 rounded-full border border-stone-800 bg-white hover:bg-stone-900 hover:text-white text-stone-900 text-[13px] lg:text-[14px] font-medium transition-all duration-200 shadow-sm"
          >
            <span>Course Login</span>
          </button>
        </div>

        {/* Mobile Contact & Hamburger Controls */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="tel:+917300004325"
            className="p-2 rounded-full border border-stone-800 text-stone-900"
            aria-label="Call Acharya Ganesh"
          >
            <Phone className="w-4 h-4" />
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg border border-stone-300 text-stone-900 hover:bg-stone-100"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* ================= DIVIDER LINE ================= */}
      <div className="border-b border-stone-200" />

      {/* ================= BOTTOM ROW: CENTERED NAVIGATION LINKS ================= */}
      <div className="hidden md:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
        <nav className="flex items-center justify-center gap-8 lg:gap-12 xl:gap-16">
          {navMenuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[14px] lg:text-[15px] font-semibold text-stone-900 hover:text-[#8B3E18] transition-colors tracking-normal"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      {/* ================= MOBILE MENU DRAWER ================= */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-stone-200 px-4 py-4 space-y-4 shadow-xl">
          
          {/* Navigation Links */}
          <div className="flex flex-col space-y-2 border-b border-stone-100 pb-3">
            {navMenuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 text-sm font-semibold text-stone-900 hover:text-[#8B3E18] flex items-center justify-between"
              >
                <span>{item.label}</span>
                <ChevronRight className="w-4 h-4 text-stone-400" />
              </a>
            ))}
          </div>

          {/* Contacts */}
          <div className="space-y-2 pt-1">
            <a
              href="tel:+917300004325"
              className="flex items-center gap-2.5 text-sm font-semibold text-stone-900 py-1"
            >
              <div className="w-7 h-7 rounded-full border border-stone-800 flex items-center justify-center">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <span>+91 73000-04325</span>
            </a>

            <a
              href="tel:+917300004326"
              className="flex items-center gap-2.5 text-sm font-semibold text-stone-900 py-1"
            >
              <div className="w-7 h-7 rounded-full border border-stone-800 flex items-center justify-center">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <span>+91 73000-04326</span>
            </a>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-2 pt-2 border-t border-stone-100">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-full border border-stone-800 text-stone-900 text-xs font-semibold hover:bg-stone-50"
            >
              <User className="w-3.5 h-3.5" />
              <span>Log in</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="flex items-center justify-center py-2 px-3 rounded-full border border-stone-800 text-stone-900 text-xs font-semibold hover:bg-stone-50"
            >
              <span>Course Login</span>
            </button>
          </div>

        </div>
      )}
    </header>
  );
};

