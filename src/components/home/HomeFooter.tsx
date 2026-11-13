import React from 'react';
import { MapPin, Mail, Phone, ChevronRight } from 'lucide-react';
import {
  FOOTER_QUICK_LINKS,
  FOOTER_CITIES_COL_1,
  FOOTER_CITIES_COL_2,
  FOOTER_SERVICES
} from '../../data/homePageData';

export const HomeFooter: React.FC = () => {
  return (
    <footer
      id="footer-contact"
      className="bg-footer text-footer-foreground px-4 pt-12 pb-6 sm:px-6 lg:px-8 lg:pt-16"
    >
      <div className="mx-auto max-w-[1536px] grid grid-cols-1 gap-10 sm:grid-cols-2 xl:grid-cols-[minmax(0,3fr)_minmax(0,2fr)_minmax(0,3fr)_minmax(0,2fr)] xl:gap-8">
        {/* Column 1: Brand + Tagline + Contact */}
        <div className="flex min-w-0 flex-col items-center text-center sm:col-span-2 xl:col-span-1 xl:items-start xl:text-left">
          <a className="mb-5 inline-block" href="#top">
            <img
              src="/ag-images/brand-logo.webp"
              alt="Acharya Ganesh Logo"
              width={80}
              height={80}
              className="object-contain"
            />
          </a>

          <p className="font-display text-lg font-bold text-accent mb-2">
            Trusted Guidance. Positive Life.
          </p>

          <p className="text-sm opacity-80 leading-relaxed max-w-sm mb-5">
            Acharya Ganesh is a renowned Vedic astrologer offering guidance in various aspects of life including love, career, marriage, health and business. Get the best solutions for a better tomorrow.
          </p>

          <ul className="space-y-2.5 text-sm opacity-85">
            <li className="flex items-start justify-center xl:justify-start gap-2">
              <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              <span>
                Floor, 887, Lower Ground, B-1, Niti Khand I, Indirapuram, Ghaziabad, Uttar Pradesh 201014
              </span>
            </li>
            <li className="flex items-center justify-center xl:justify-start gap-2">
              <Mail className="w-4 h-4 text-accent shrink-0" />
              <a href="mailto:info@acharyaganesh.com" className="hover:text-accent transition">
                info@acharyaganesh.com
              </a>
            </li>
            <li className="flex items-center justify-center xl:justify-start gap-2">
              <Phone className="w-4 h-4 text-accent shrink-0" />
              <a href="tel:+917300004325" className="hover:text-accent transition">
                +91 73000-04325
              </a>
            </li>
          </ul>
        </div>

        {/* Column 2: Quick Links */}
        <div className="min-w-0">
          <h3 className="font-display text-lg font-bold text-accent sm:text-xl mb-5">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-2.5">
            {FOOTER_QUICK_LINKS.map((item) => {
              const isExternal = item.href.startsWith('http');
              return (
                <li key={item.label} className="flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-accent shrink-0" />
                  <a
                    href={item.href}
                    {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="text-sm opacity-80 transition-all hover:text-accent hover:opacity-100 font-sans"
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Column 3: Our Services Available In */}
        <div className="min-w-0">
          <h3 className="font-display text-lg font-bold text-accent sm:text-xl mb-5">
            Our Services Available In
          </h3>
          <div className="grid grid-cols-2 gap-x-3 gap-y-2.5 mb-5">
            <ul className="flex flex-col gap-2.5">
              {FOOTER_CITIES_COL_1.map((city) => (
                <li key={city.name} className="flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-accent shrink-0" />
                  <a
                    href={city.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm opacity-80 transition-all hover:text-accent hover:opacity-100 font-sans leading-tight"
                  >
                    {city.name}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="flex flex-col gap-2.5">
              {FOOTER_CITIES_COL_2.map((city) => (
                <li key={city.name} className="flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-accent shrink-0" />
                  <a
                    href={city.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm opacity-80 transition-all hover:text-accent hover:opacity-100 font-sans leading-tight"
                  >
                    {city.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <a
            href="https://acharyaganesh.com/citation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded border border-accent/60 px-3 py-1.5 text-xs font-medium text-accent transition hover:bg-accent/10 font-sans"
          >
            View More Cities <span aria-hidden="true">→</span>
          </a>

          <p className="mt-3 text-[11px] leading-relaxed opacity-55 font-sans">
            * We have expert astrologers available in 20-50+ major cities across India.
          </p>
        </div>

        {/* Column 4: Our Services */}
        <div className="min-w-0">
          <h3 className="font-display text-lg font-bold text-accent sm:text-xl mb-5">
            Our Services
          </h3>
          <ul className="flex flex-col gap-3">
            {FOOTER_SERVICES.map((srv) => (
              <li key={srv.label} className="flex items-center gap-2">
                <ChevronRight className="w-3.5 h-3.5 text-accent shrink-0" />
                <a
                  href={srv.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm opacity-80 transition-all hover:text-accent hover:opacity-100 font-sans"
                >
                  {srv.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Copyright & Social Bar */}
      <div className="mx-auto mt-10 flex max-w-[1536px] flex-col items-center justify-between gap-4 pt-6 sm:flex-row border-t border-footer-foreground/10">
        <p className="text-xs opacity-60 font-sans sm:text-sm">
          © 2026 Acharya Ganesh. All Rights Reserved.
        </p>

        <div className="flex items-center gap-3">
          <span className="text-sm opacity-70 font-sans">Follow Us:</span>
          <div className="flex items-center gap-2">
            <a
              href="https://www.facebook.com/AcharyaGaneshOfficial/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-footer-foreground/10 text-footer-foreground transition hover:scale-110 hover:bg-footer-foreground/20"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>

            <a
              href="https://www.instagram.com/officialacharyaganesh/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-footer-foreground/10 text-footer-foreground transition hover:scale-110 hover:bg-footer-foreground/20"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>

            <a
              href="https://www.youtube.com/@acharyaganeshchannel"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-footer-foreground/10 text-footer-foreground transition hover:scale-110 hover:bg-footer-foreground/20"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.3 31.3 0 0 0 0 12a31.3 31.3 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.3 31.3 0 0 0 24 12a31.3 31.3 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
              </svg>
            </a>

            <a
              href="https://wa.me/917300004325"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-[#25D366] text-white transition hover:scale-110"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.5 14.2c-.2.6-1.3 1.2-1.8 1.3-.5.1-1.1.1-1.8-.1-.4-.1-1-.3-1.8-.7-3.1-1.3-5.1-4.5-5.3-4.7-.1-.2-1.3-1.7-1.3-3.2 0-1.5.8-2.3 1.1-2.6.3-.3.6-.4.8-.4h.6c.2 0 .5 0 .7.6.3.7.9 2.2 1 2.4.1.2.1.4 0 .6-.1.2-.2.4-.4.6-.2.2-.4.4-.5.6-.2.2-.3.4-.1.7.2.3.8 1.4 1.8 2.3 1.2 1.1 2.2 1.4 2.5 1.6.3.1.5.1.7-.1.2-.2.8-1 1-1.3.2-.3.4-.3.7-.2.3.1 2 .9 2.3 1.1.3.2.5.3.6.4.1.2.1.8-.1 1.4Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
