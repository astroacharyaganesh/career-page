import React from 'react';
import { Calendar, Globe, Mail, MapPin, Phone } from 'lucide-react';
import { AboutPageCmsData } from '../data/aboutPageData';

interface ContactConnectSectionProps {
  contact: AboutPageCmsData['contact'];
  onOpenBooking: () => void;
}

export const ContactConnectSection: React.FC<ContactConnectSectionProps> = ({
  contact,
  onOpenBooking
}) => {
  return (
    <section
      id="contact-and-connect"
      aria-labelledby="contact-connect-heading"
      className="py-12 sm:py-16 bg-[#FAF7F2] text-stone-800 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left Card: CTA & Social Links */}
          <div className="lg:col-span-6 rounded-2xl bg-[#3A180B] border border-amber-600/40 text-white p-7 sm:p-9 shadow-xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h2
                id="contact-connect-heading"
                className="font-serif-display text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-50 tracking-tight leading-[1.2]"
              >
                {contact.heading}
              </h2>

              <p className="text-sm sm:text-base text-amber-100/90 leading-relaxed max-w-xl">
                {contact.body}
              </p>

              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-[#2e1104] bg-gradient-to-r from-amber-300 via-amber-200 to-amber-300 hover:from-amber-200 hover:to-amber-100 transition-all shadow-lg flex items-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-[#2e1104]" />
                  <span>{contact.bookCta}</span>
                </button>

                <a
                  href={`tel:${contact.phonePrimary.replace(/[^+\d]/g, '')}`}
                  className="px-5 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-amber-50 bg-white/10 hover:bg-white/15 border border-amber-300/30 transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-amber-300" />
                  <span>{contact.callCta}</span>
                </a>
              </div>
            </div>

            <div className="pt-5 border-t border-amber-500/25 text-xs sm:text-sm text-amber-100/90 flex flex-wrap items-center gap-x-2 gap-y-1">
              <span className="font-bold text-amber-200">Social:</span>
              <a
                href={contact.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-300 underline decoration-amber-400/40 underline-offset-4"
              >
                WhatsApp
              </a>
              <span className="text-amber-500/60">·</span>
              <a
                href={contact.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-300 underline decoration-amber-400/40 underline-offset-4"
              >
                YouTube
              </a>
              <span className="text-amber-500/60">·</span>
              <a
                href={contact.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-300 underline decoration-amber-400/40 underline-offset-4"
              >
                Instagram
              </a>
              <span className="text-amber-500/60">·</span>
              <a
                href={contact.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-300 underline decoration-amber-400/40 underline-offset-4"
              >
                Facebook
              </a>
            </div>
          </div>

          {/* Right Card: Verbatim Address, Email, Phone & Cities Served */}
          <div className="lg:col-span-6 rounded-2xl bg-white border border-[#E9DACB] p-7 sm:p-9 shadow-sm flex flex-col justify-between space-y-5">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#F6EFE6] border border-[#E4D1BD] flex items-center justify-center text-[#6B2E13] flex-shrink-0 mt-0.5">
                <MapPin className="w-4 h-4 stroke-[1.9]" />
              </div>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                <span className="font-bold text-[#23120A]">Address: </span>
                {contact.address}
              </p>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#F6EFE6] border border-[#E4D1BD] flex items-center justify-center text-[#6B2E13] flex-shrink-0 mt-0.5">
                <Mail className="w-4 h-4 stroke-[1.9]" />
              </div>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                <span className="font-bold text-[#23120A]">Email: </span>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-[#6B2E13] font-semibold hover:underline underline-offset-2"
                >
                  {contact.email}
                </a>
              </p>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#F6EFE6] border border-[#E4D1BD] flex items-center justify-center text-[#6B2E13] flex-shrink-0 mt-0.5">
                <Phone className="w-4 h-4 stroke-[1.9]" />
              </div>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                <span className="font-bold text-[#23120A]">Phone: </span>
                <a
                  href={`tel:${contact.phonePrimary.replace(/[^+\d]/g, '')}`}
                  className="font-semibold text-[#23120A] hover:text-[#6B2E13]"
                >
                  {contact.phonePrimary}
                </a>
                <span className="mx-1.5 text-stone-400">·</span>
                <a
                  href={`tel:${contact.phoneSecondary.replace(/[^+\d]/g, '')}`}
                  className="font-semibold text-[#23120A] hover:text-[#6B2E13]"
                >
                  {contact.phoneSecondary}
                </a>
              </p>
            </div>

            <div className="flex items-start gap-3.5 pt-4 border-t border-[#EFE3D5]">
              <div className="w-10 h-10 rounded-xl bg-[#F6EFE6] border border-[#E4D1BD] flex items-center justify-center text-[#6B2E13] flex-shrink-0 mt-0.5">
                <Globe className="w-4 h-4 stroke-[1.9]" />
              </div>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                <span className="font-bold text-[#23120A]">Cities served: </span>
                {contact.citiesServed}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
