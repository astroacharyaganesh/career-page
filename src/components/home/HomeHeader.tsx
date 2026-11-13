import React, { useState } from 'react';
import { Phone, Menu, X, ChevronRight, User } from 'lucide-react';
import { PROMO_MARQUEE_ITEMS, HEADER_NAV_LINKS } from '../../data/homePageData';

interface HomeHeaderProps {
  onOpenBooking: () => void;
}

export const HomeHeader: React.FC<HomeHeaderProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      id="top"
      className="sticky top-0 z-50 w-full shrink-0 flex flex-col font-sans bg-background border-b border-border"
    >
      {/* Top Promo Marquee Banner */}
      <div
        className="relative h-8 overflow-hidden border-b border-primary/20 bg-primary text-primary-foreground"
        role="region"
        aria-label="Promotion"
      >
        <div className="promo-marquee-track flex h-full w-max items-center px-4 text-[11px] leading-none sm:px-6 sm:text-xs">
          {[0, 1].map((dupIndex) => (
            <span
              key={dupIndex}
              className="inline-flex items-center pr-8"
              aria-hidden={dupIndex === 1}
            >
              {PROMO_MARQUEE_ITEMS.map((item, idx) => (
                <span key={idx} className="inline-flex items-center">
                  {idx > 0 && (
                    <span className="mx-3 text-[10px] text-secondary sm:mx-4" aria-hidden="true">
                      ✦
                    </span>
                  )}
                  <span className="inline-flex items-center gap-1 whitespace-nowrap">
                    <span className="text-primary-foreground/90">{item.prefix}</span>
                    {item.href === '#booking' ? (
                      <button
                        type="button"
                        onClick={onOpenBooking}
                        className="font-semibold text-primary-foreground underline decoration-primary-foreground/50 underline-offset-[3px] transition hover:decoration-primary-foreground cursor-pointer"
                      >
                        {item.linkLabel}
                      </button>
                    ) : (
                      <a
                        className="font-semibold text-primary-foreground underline decoration-primary-foreground/50 underline-offset-[3px] transition hover:decoration-primary-foreground"
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.linkLabel}
                      </a>
                    )}
                  </span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* Middle Row: Logo + Contacts + Login Actions */}
      <div className="w-full">
        <div className="mx-auto flex min-h-[80px] max-w-[1536px] items-center justify-between px-4 sm:px-6 lg:px-8">
          <a className="z-50 shrink-0" href="#top">
            <img
              src="/ag-images/logo.webp"
              alt="Acharya Ganesh Logo"
              width={72}
              height={72}
              className="object-contain h-[72px] w-[72px]"
            />
          </a>

          {/* Desktop Contacts + Login Buttons */}
          <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
            <div className="flex items-center gap-4">
              <a
                href="tel:+917300004325"
                className="flex items-center gap-2 text-foreground hover:text-primary transition whitespace-nowrap"
              >
                <span className="p-1.5 rounded-full border-2 border-foreground flex items-center justify-center">
                  <Phone className="w-3.5 h-3.5" />
                </span>
                <span className="font-semibold">+91 73000-04325</span>
              </a>

              <a
                href="tel:+917300004326"
                className="flex items-center gap-2 text-foreground hover:text-primary transition whitespace-nowrap"
              >
                <span className="p-1.5 rounded-full border-2 border-foreground flex items-center justify-center">
                  <Phone className="w-3.5 h-3.5" />
                </span>
                <span className="font-semibold">+91 73000-04326</span>
              </a>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onOpenBooking}
                className="inline-flex h-10 items-center gap-2 rounded-full border border-foreground/30 bg-card px-5 text-sm font-semibold text-foreground transition hover:border-primary hover:bg-primary hover:text-primary-foreground cursor-pointer whitespace-nowrap"
              >
                <User className="w-4 h-4" />
                <span>Log in</span>
              </button>

              <a
                href="https://courses.acharyaganesh.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center justify-center rounded-full border border-primary bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90 whitespace-nowrap"
              >
                Course Login
              </a>
            </div>
          </div>

          {/* Mobile Phone Quick Action + Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="tel:+917300004325"
              className="p-2 rounded-full border border-foreground/30 text-foreground"
              aria-label="Call +91 73000-04325"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="p-2 text-foreground z-50 cursor-pointer"
              aria-label="Toggle Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Desktop Navigation Row */}
      <nav aria-label="Main Navigation" className="hidden w-full border-t border-border lg:block">
        <ul className="mx-auto flex max-w-[1536px] flex-wrap items-center justify-center gap-12 py-4 text-base font-semibold text-foreground">
          {HEADER_NAV_LINKS.map((link) => {
            const isExternal = link.href.startsWith('http');
            return (
              <li key={link.label}>
                <a
                  className="hover:text-primary transition whitespace-nowrap"
                  href={link.href}
                  {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background px-4 py-4 shadow-xl space-y-4">
          <ul className="flex flex-col space-y-2 border-b border-border pb-3">
            {HEADER_NAV_LINKS.map((link) => {
              const isExternal = link.href.startsWith('http');
              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold text-foreground hover:text-primary"
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 text-muted-foreground" />
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="space-y-2">
            <a
              href="tel:+917300004325"
              className="flex items-center gap-2.5 text-sm font-semibold text-foreground"
            >
              <Phone className="w-4 h-4 text-primary" />
              <span>+91 73000-04325</span>
            </a>
            <a
              href="tel:+917300004326"
              className="flex items-center gap-2.5 text-sm font-semibold text-foreground"
            >
              <Phone className="w-4 h-4 text-primary" />
              <span>+91 73000-04326</span>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="h-10 rounded-full border border-foreground/30 bg-card text-xs font-semibold text-foreground cursor-pointer"
            >
              Log in
            </button>
            <a
              href="https://courses.acharyaganesh.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 rounded-full bg-primary text-xs font-semibold text-primary-foreground flex items-center justify-center"
            >
              Course Login
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
