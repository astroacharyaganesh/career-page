import React from 'react';
import { Sparkles, ShieldCheck, Phone, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  disclaimer?: string;
}

export const Footer: React.FC<FooterProps> = ({
  disclaimer = 'Astrology offers guidance, not guarantees. It does not replace medical, legal or financial advice.'
}) => {
  return (
    <footer
      id="main-footer"
      className="border-t border-amber-950/60 bg-[#140804] py-10 sm:py-12 text-amber-100/75 text-xs"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Col 1: Brand & Official Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 to-[#8B3E18] p-[1.5px]">
                <div className="w-full h-full bg-[#23120A] rounded-[10px] flex items-center justify-center font-cinzel font-black text-amber-300">
                  ॐ
                </div>
              </div>
              <div>
                <span className="font-serif-display text-base font-bold text-amber-50">
                  Acharya Ganesh
                </span>
                <p className="text-[11px] text-amber-200/70">
                  Hanish Bagga · Vedic Astrologer &amp; Astro-Vastu Expert
                </p>
              </div>
            </div>

            <div className="space-y-1.5 text-xs text-amber-100/80 pt-1">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>
                  Floor, 887, Lower Ground, B-1, Niti Khand I, Indirapuram, Ghaziabad, Uttar Pradesh 201014
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                <a href="tel:+917300004325" className="hover:text-amber-300">
                  +91 73000-04325
                </a>
                <span>·</span>
                <a href="tel:+917300004326" className="hover:text-amber-300">
                  +91 73000-04326
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                <a href="mailto:info@acharyaganesh.com" className="hover:text-amber-300">
                  info@acharyaganesh.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2 text-[11px] text-emerald-400 font-medium pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>50,000+ charts analysed · 100% confidential</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-amber-50 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#about-hero" className="hover:text-amber-300 transition-colors">
                  Acharya Ganesh
                </a>
              </li>
              <li>
                <a href="#journey" className="hover:text-amber-300 transition-colors">
                  Journey
                </a>
              </li>
              <li>
                <a href="#vision-and-mission" className="hover:text-amber-300 transition-colors">
                  Vision and mission
                </a>
              </li>
              <li>
                <a href="#experience-and-expertise" className="hover:text-amber-300 transition-colors">
                  Experience and expertise
                </a>
              </li>
              <li>
                <a href="#about-faq" className="hover:text-amber-300 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact-and-connect" className="hover:text-amber-300 transition-colors">
                  Talk to Acharya Ganesh
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Practice */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-amber-50 uppercase tracking-wider">
              Practice
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#experience-and-expertise" className="hover:text-amber-300 transition-colors">
                  Vedic astrology
                </a>
              </li>
              <li>
                <a href="#experience-and-expertise" className="hover:text-amber-300 transition-colors">
                  Vastu &amp; Astro-Vastu
                </a>
              </li>
              <li>
                <a href="#experience-and-expertise" className="hover:text-amber-300 transition-colors">
                  Spiritual guidance
                </a>
              </li>
              <li>
                <a href="#learn-with-him" className="hover:text-amber-300 transition-colors">
                  Learn Vedic astrology
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Social */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-amber-50 uppercase tracking-wider">
              Social
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://wa.me/917300004325"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-300 transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@AcharyaGaneshOfficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-300 transition-colors"
                >
                  YouTube
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/acharyaganesh_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-300 transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/AcharyaGaneshOfficial/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-300 transition-colors"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Exact PDF Disclaimer */}
        <div className="pt-8 border-t border-amber-900/30 space-y-4">
          <p className="text-[11px] sm:text-xs text-amber-100/75 leading-relaxed max-w-4xl mx-auto text-center">
            {disclaimer}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-amber-200/60">
            <p>© {new Date().getFullYear()} Acharya Ganesh (Hanish Bagga). All Rights Reserved.</p>
            <p className="flex items-center gap-1">
              Vedic astrology, Vastu, Astro-Vastu <Sparkles className="w-3 h-3 text-amber-400" /> Indirapuram, Ghaziabad
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
