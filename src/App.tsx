import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { AboutHeroSection } from './components/about/AboutHeroSection';
import { AboutAtAGlanceSection } from './components/about/AboutAtAGlanceSection';
import { AboutJourneySection } from './components/about/AboutJourneySection';
import { AboutVisionMissionSection } from './components/about/AboutVisionMissionSection';
import { AboutExpertiseSection } from './components/about/AboutExpertiseSection';
import { AchievementsStatsSection } from './components/AchievementsStatsSection';
import { AboutWhyTrustSection } from './components/about/AboutWhyTrustSection';
import { AboutClientStoriesSection } from './components/about/AboutClientStoriesSection';
import { AboutLearnSection } from './components/about/AboutLearnSection';
import { AboutFaqSection } from './components/about/AboutFaqSection';
import { ContactConnectSection } from './components/ContactConnectSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { FloatingControls } from './components/FloatingControls';
import { ConsultationTier } from './types';
import { AboutPageCmsData, DEFAULT_ABOUT_PAGE_DATA } from './data/aboutPageData';
import { X, RotateCcw, Check, Globe, FileText } from 'lucide-react';

const LEGACY_CMS_STORAGE_KEY = 'acharya_ganesh_about_cms_v1';
const CMS_STORAGE_KEY = 'acharya_ganesh_about_verbatim_v2';

function upsertMetaTag(attrName: 'name' | 'property', attrValue: string, content: string) {
  let el = document.head.querySelector(`meta[${attrName}="${attrValue}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attrName, attrValue);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertCanonical(href: string) {
  let link = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', href);
}

export default function App() {
  const [aboutData, setAboutData] = useState<AboutPageCmsData>(() => {
    if (typeof window === 'undefined') return DEFAULT_ABOUT_PAGE_DATA;
    try {
      window.localStorage.removeItem(LEGACY_CMS_STORAGE_KEY);
      const saved = window.localStorage.getItem(CMS_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          ...DEFAULT_ABOUT_PAGE_DATA,
          ...parsed,
          seo: { ...DEFAULT_ABOUT_PAGE_DATA.seo, ...(parsed.seo || {}) },
          hero: { ...DEFAULT_ABOUT_PAGE_DATA.hero, ...(parsed.hero || {}) },
          journey: { ...DEFAULT_ABOUT_PAGE_DATA.journey, ...(parsed.journey || {}) },
          visionMission: { ...DEFAULT_ABOUT_PAGE_DATA.visionMission, ...(parsed.visionMission || {}) },
          expertise: { ...DEFAULT_ABOUT_PAGE_DATA.expertise, ...(parsed.expertise || {}) },
          achievements: { ...DEFAULT_ABOUT_PAGE_DATA.achievements, ...(parsed.achievements || {}) },
          whyTrust: { ...DEFAULT_ABOUT_PAGE_DATA.whyTrust, ...(parsed.whyTrust || {}) },
          testimonials: { ...DEFAULT_ABOUT_PAGE_DATA.testimonials, ...(parsed.testimonials || {}) },
          learning: { ...DEFAULT_ABOUT_PAGE_DATA.learning, ...(parsed.learning || {}) },
          faqs: { ...DEFAULT_ABOUT_PAGE_DATA.faqs, ...(parsed.faqs || {}) },
          contact: { ...DEFAULT_ABOUT_PAGE_DATA.contact, ...(parsed.contact || {}) }
        };
      }
    } catch {
      // Fallback to verbatim default data
    }
    return DEFAULT_ABOUT_PAGE_DATA;
  });

  const [isCmsOpen, setIsCmsOpen] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return new URLSearchParams(window.location.search).get('cms') === '1';
  });
  const [cmsTab, setCmsTab] = useState<'seo' | 'content'>('seo');
  const [cmsSavedNotice, setCmsSavedNotice] = useState(false);

  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState<ConsultationTier>('executive');

  // Optional keyboard shortcut (Ctrl/Cmd + Shift + E) to open CMS & SEO drawer without adding any badge to UI sections
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === 'e') {
        e.preventDefault();
        setIsCmsOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Persist CMS edits automatically
  useEffect(() => {
    try {
      window.localStorage.setItem(CMS_STORAGE_KEY, JSON.stringify(aboutData));
    } catch {
      // Ignore storage quota errors
    }
  }, [aboutData]);

  // Synchronize <head> SEO tags, OpenGraph, Canonical & Single Deduplicated JSON-LD Schema
  useEffect(() => {
    const { seo, faqs, contact } = aboutData;
    document.title = seo.pageTitle;
    upsertMetaTag('name', 'description', seo.metaDescription);
    upsertCanonical(seo.canonicalUrl);
    upsertMetaTag('property', 'og:title', seo.ogTitle);
    upsertMetaTag('property', 'og:description', seo.ogDescription);
    upsertMetaTag('property', 'og:url', seo.canonicalUrl);
    upsertMetaTag('property', 'og:image', seo.ogImage);
    upsertMetaTag('name', 'twitter:title', seo.ogTitle);
    upsertMetaTag('name', 'twitter:description', seo.ogDescription);
    upsertMetaTag('name', 'twitter:image', seo.ogImage);

    const schemaGraph = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'AboutPage',
          '@id': `${seo.canonicalUrl}#aboutpage`,
          url: seo.canonicalUrl,
          name: seo.pageTitle,
          description: seo.metaDescription,
          inLanguage: 'en-IN',
          mainEntity: { '@id': 'https://acharyaganesh.com/#person' },
          about: { '@id': 'https://acharyaganesh.com/#organization' },
          breadcrumb: { '@id': `${seo.canonicalUrl}#breadcrumb` }
        },
        {
          '@type': 'BreadcrumbList',
          '@id': `${seo.canonicalUrl}#breadcrumb`,
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://acharyaganesh.com/'
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Acharya Ganesh',
              item: seo.canonicalUrl
            }
          ]
        },
        {
          '@type': 'Person',
          '@id': 'https://acharyaganesh.com/#person',
          name: 'Hanish Bagga',
          alternateName: 'Acharya Ganesh',
          jobTitle: 'Vedic Astrologer & Astro-Vastu Expert',
          description: aboutData.hero.intro,
          worksFor: { '@id': 'https://acharyaganesh.com/#organization' },
          knowsAbout: [
            'Vedic astrology',
            'Vastu',
            'Astro-Vastu',
            'Birth chart (D1)',
            'Dashamsha (D10)',
            'Vimshottari Dasha'
          ],
          sameAs: [
            contact.socials.youtube,
            contact.socials.instagram,
            contact.socials.facebook
          ]
        },
        {
          '@type': 'Organization',
          '@id': 'https://acharyaganesh.com/#organization',
          name: 'Acharya Ganesh',
          url: 'https://acharyaganesh.com/',
          email: contact.email,
          telephone: [contact.phonePrimary, contact.phoneSecondary],
          founder: { '@id': 'https://acharyaganesh.com/#person' },
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Floor, 887, Lower Ground, B-1, Niti Khand I, Indirapuram',
            addressLocality: 'Ghaziabad',
            addressRegion: 'Uttar Pradesh',
            postalCode: '201014',
            addressCountry: 'IN'
          },
          sameAs: [
            contact.socials.youtube,
            contact.socials.instagram,
            contact.socials.facebook
          ]
        },
        {
          '@type': 'FAQPage',
          '@id': `${seo.canonicalUrl}#faq`,
          mainEntity: faqs.items.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.answer
            }
          }))
        }
      ]
    };

    let scriptEl = document.getElementById('acharya-schema-jsonld') as HTMLScriptElement | null;
    if (!scriptEl) {
      scriptEl = document.createElement('script');
      scriptEl.id = 'acharya-schema-jsonld';
      scriptEl.type = 'application/ld+json';
      document.head.appendChild(scriptEl);
    }
    scriptEl.textContent = JSON.stringify(schemaGraph);
  }, [aboutData]);

  const handleOpenBooking = (tier?: ConsultationTier) => {
    if (tier) {
      setSelectedTier(tier);
    }
    setIsBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingModalOpen(false);
  };

  const whatsappHref = `https://wa.me/${aboutData.contact.whatsappNumber}?text=${encodeURIComponent(
    'Namaste Acharya Ganesh, I would like to book a 1-on-1 birth chart consultation.'
  )}`;

  const handleResetCms = () => {
    setAboutData(DEFAULT_ABOUT_PAGE_DATA);
    try {
      window.localStorage.removeItem(CMS_STORAGE_KEY);
    } catch {
      // ignore
    }
    setCmsSavedNotice(true);
    setTimeout(() => setCmsSavedNotice(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-stone-900 font-sans relative selection:bg-amber-300 selection:text-[#23120A] overflow-x-hidden">
      {/* Shared Top Navigation Bar (Untouched Existing Section) */}
      <Navbar onOpenBooking={() => handleOpenBooking('executive')} />

      {/* Main About Page Content in Service Page Design System */}
      <main id="about-page-main" className="relative z-10">
        {/* SECTION 1: Hero (Single H1 on Page) */}
        <AboutHeroSection
          data={aboutData.hero}
          whatsappNumber={aboutData.contact.whatsappNumber}
          onOpenBooking={() => handleOpenBooking('executive')}
        />

        {/* SECTION 2: At a Glance (Quick-Facts Strip) */}
        <AboutAtAGlanceSection facts={aboutData.atAGlance} />

        {/* SECTION 3: Journey */}
        <AboutJourneySection data={aboutData.journey} />

        {/* SECTION 4: Vision & Mission */}
        <AboutVisionMissionSection data={aboutData.visionMission} />

        {/* SECTION 5: Experience & Expertise */}
        <AboutExpertiseSection data={aboutData.expertise} />

        {/* SECTION 6: Achievements */}
        <AchievementsStatsSection
          heading={aboutData.achievements.heading}
          intro={aboutData.achievements.intro}
          stats={aboutData.achievements.stats}
        />

        {/* SECTION 7: Why Trust Acharya Ganesh */}
        <AboutWhyTrustSection data={aboutData.whyTrust} />

        {/* SECTION 8: Testimonials (Client Stories) */}
        <AboutClientStoriesSection
          data={aboutData.testimonials}
          youtubeUrl={aboutData.learning.youtubeUrl}
        />

        {/* SECTION 9: Learn With Him */}
        <AboutLearnSection data={aboutData.learning} />

        {/* SECTION 10: FAQ */}
        <AboutFaqSection data={aboutData.faqs} />

        {/* SECTION 11: Contact & Social Media */}
        <ContactConnectSection
          contact={aboutData.contact}
          onOpenBooking={() => handleOpenBooking('executive')}
        />
      </main>

      {/* Existing Website Footer with Exact PDF Disclaimer */}
      <Footer disclaimer={aboutData.contact.disclaimer} />

      {/* Sticky Floating Controls & Reading Progress */}
      <FloatingControls
        onOpenBooking={() => handleOpenBooking('executive')}
        whatsappHref={whatsappHref}
      />

      {/* 1-on-1 Consultation Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={handleCloseBooking}
        initialTier={selectedTier}
      />

      {/* Editable CMS & SEO Settings Drawer (Accessible via ?cms=1 or Ctrl/Cmd+Shift+E) */}
      {isCmsOpen && (
        <div
          className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-xs"
          onClick={() => setIsCmsOpen(false)}
        >
          <aside
            aria-label="About Page CMS and SEO Settings"
            className="w-full max-w-xl bg-white text-stone-900 h-full shadow-2xl flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-6 py-4 bg-[#2e1104] text-white flex items-center justify-between border-b border-amber-500/20">
              <div>
                <h2 className="font-serif-display text-lg font-bold text-amber-50">
                  About Page CMS &amp; SEO Fields
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setIsCmsOpen(false)}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white cursor-pointer"
                aria-label="Close CMS drawer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="px-6 pt-3 bg-[#FAF7F2] border-b border-stone-200 flex items-center gap-2">
              <button
                type="button"
                onClick={() => setCmsTab('seo')}
                className={`px-4 py-2.5 text-xs font-bold border-b-2 flex items-center gap-1.5 cursor-pointer ${
                  cmsTab === 'seo'
                    ? 'border-[#6B2E13] text-[#23120A]'
                    : 'border-transparent text-stone-500 hover:text-stone-800'
                }`}
              >
                <Globe className="w-3.5 h-3.5" />
                <span>SEO &amp; Open Graph</span>
              </button>

              <button
                type="button"
                onClick={() => setCmsTab('content')}
                className={`px-4 py-2.5 text-xs font-bold border-b-2 flex items-center gap-1.5 cursor-pointer ${
                  cmsTab === 'content'
                    ? 'border-[#6B2E13] text-[#23120A]'
                    : 'border-transparent text-stone-500 hover:text-stone-800'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Section Copy</span>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6 text-xs">
              {cmsTab === 'seo' ? (
                <div className="space-y-4">
                  <div>
                    <label className="block font-bold text-stone-800 mb-1">
                      Page Title (&lt;title&gt;)
                    </label>
                    <input
                      type="text"
                      value={aboutData.seo.pageTitle}
                      onChange={(e) =>
                        setAboutData((prev) => ({
                          ...prev,
                          seo: { ...prev.seo, pageTitle: e.target.value }
                        }))
                      }
                      className="w-full px-3 py-2 rounded-lg border border-stone-300 text-stone-900 focus:outline-none focus:border-[#6B2E13]"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-stone-800 mb-1">
                      Meta Description
                    </label>
                    <textarea
                      rows={3}
                      value={aboutData.seo.metaDescription}
                      onChange={(e) =>
                        setAboutData((prev) => ({
                          ...prev,
                          seo: { ...prev.seo, metaDescription: e.target.value }
                        }))
                      }
                      className="w-full px-3 py-2 rounded-lg border border-stone-300 text-stone-900 focus:outline-none focus:border-[#6B2E13]"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-stone-800 mb-1">
                      Canonical URL
                    </label>
                    <input
                      type="url"
                      value={aboutData.seo.canonicalUrl}
                      onChange={(e) =>
                        setAboutData((prev) => ({
                          ...prev,
                          seo: { ...prev.seo, canonicalUrl: e.target.value }
                        }))
                      }
                      className="w-full px-3 py-2 rounded-lg border border-stone-300 text-stone-900 focus:outline-none focus:border-[#6B2E13]"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-stone-800 mb-1">
                      Open Graph Title (og:title)
                    </label>
                    <input
                      type="text"
                      value={aboutData.seo.ogTitle}
                      onChange={(e) =>
                        setAboutData((prev) => ({
                          ...prev,
                          seo: { ...prev.seo, ogTitle: e.target.value }
                        }))
                      }
                      className="w-full px-3 py-2 rounded-lg border border-stone-300 text-stone-900 focus:outline-none focus:border-[#6B2E13]"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-stone-800 mb-1">
                      Open Graph Description (og:description)
                    </label>
                    <textarea
                      rows={3}
                      value={aboutData.seo.ogDescription}
                      onChange={(e) =>
                        setAboutData((prev) => ({
                          ...prev,
                          seo: { ...prev.seo, ogDescription: e.target.value }
                        }))
                      }
                      className="w-full px-3 py-2 rounded-lg border border-stone-300 text-stone-900 focus:outline-none focus:border-[#6B2E13]"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-stone-800 mb-1">
                      Open Graph Image URL (og:image)
                    </label>
                    <input
                      type="url"
                      value={aboutData.seo.ogImage}
                      onChange={(e) =>
                        setAboutData((prev) => ({
                          ...prev,
                          seo: { ...prev.seo, ogImage: e.target.value }
                        }))
                      }
                      className="w-full px-3 py-2 rounded-lg border border-stone-300 text-stone-900 focus:outline-none focus:border-[#6B2E13]"
                    />
                  </div>
                </div>
              ) : (
                <div className="space-y-5">
                  <div className="space-y-3 pb-4 border-b border-stone-200">
                    <h3 className="font-bold text-sm text-[#23120A]">1. Hero</h3>
                    <div>
                      <label className="block font-semibold text-stone-700 mb-1">H1</label>
                      <input
                        type="text"
                        value={aboutData.hero.h1}
                        onChange={(e) =>
                          setAboutData((prev) => ({
                            ...prev,
                            hero: { ...prev.hero, h1: e.target.value }
                          }))
                        }
                        className="w-full px-3 py-2 rounded-lg border border-stone-300"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-stone-700 mb-1">Subheading</label>
                      <input
                        type="text"
                        value={aboutData.hero.subheading}
                        onChange={(e) =>
                          setAboutData((prev) => ({
                            ...prev,
                            hero: { ...prev.hero, subheading: e.target.value }
                          }))
                        }
                        className="w-full px-3 py-2 rounded-lg border border-stone-300"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-stone-700 mb-1">Intro</label>
                      <textarea
                        rows={3}
                        value={aboutData.hero.intro}
                        onChange={(e) =>
                          setAboutData((prev) => ({
                            ...prev,
                            hero: { ...prev.hero, intro: e.target.value }
                          }))
                        }
                        className="w-full px-3 py-2 rounded-lg border border-stone-300"
                      />
                    </div>
                  </div>

                  <div className="space-y-3 pb-4 border-b border-stone-200">
                    <h3 className="font-bold text-sm text-[#23120A]">3. Journey</h3>
                    <div>
                      <label className="block font-semibold text-stone-700 mb-1">Heading (H2)</label>
                      <input
                        type="text"
                        value={aboutData.journey.heading}
                        onChange={(e) =>
                          setAboutData((prev) => ({
                            ...prev,
                            journey: { ...prev.journey, heading: e.target.value }
                          }))
                        }
                        className="w-full px-3 py-2 rounded-lg border border-stone-300"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-stone-700 mb-1">Pull-quote</label>
                      <input
                        type="text"
                        value={aboutData.journey.pullQuote}
                        onChange={(e) =>
                          setAboutData((prev) => ({
                            ...prev,
                            journey: { ...prev.journey, pullQuote: e.target.value }
                          }))
                        }
                        className="w-full px-3 py-2 rounded-lg border border-stone-300"
                      />
                    </div>
                  </div>

                  <div className="space-y-3 pb-4 border-b border-stone-200">
                    <h3 className="font-bold text-sm text-[#23120A]">4. Vision &amp; Mission</h3>
                    <div>
                      <label className="block font-semibold text-stone-700 mb-1">Mission</label>
                      <textarea
                        rows={2}
                        value={aboutData.visionMission.missionText}
                        onChange={(e) =>
                          setAboutData((prev) => ({
                            ...prev,
                            visionMission: { ...prev.visionMission, missionText: e.target.value }
                          }))
                        }
                        className="w-full px-3 py-2 rounded-lg border border-stone-300"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-stone-700 mb-1">Vision</label>
                      <textarea
                        rows={2}
                        value={aboutData.visionMission.visionText}
                        onChange={(e) =>
                          setAboutData((prev) => ({
                            ...prev,
                            visionMission: { ...prev.visionMission, visionText: e.target.value }
                          }))
                        }
                        className="w-full px-3 py-2 rounded-lg border border-stone-300"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-bold text-sm text-[#23120A]">11. Contact</h3>
                    <div>
                      <label className="block font-semibold text-stone-700 mb-1">Address</label>
                      <input
                        type="text"
                        value={aboutData.contact.address}
                        onChange={(e) =>
                          setAboutData((prev) => ({
                            ...prev,
                            contact: { ...prev.contact, address: e.target.value }
                          }))
                        }
                        className="w-full px-3 py-2 rounded-lg border border-stone-300"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block font-semibold text-stone-700 mb-1">Phone</label>
                        <input
                          type="text"
                          value={aboutData.contact.phonePrimary}
                          onChange={(e) =>
                            setAboutData((prev) => ({
                              ...prev,
                              contact: { ...prev.contact, phonePrimary: e.target.value }
                            }))
                          }
                          className="w-full px-3 py-2 rounded-lg border border-stone-300"
                        />
                      </div>
                      <div>
                        <label className="block font-semibold text-stone-700 mb-1">Email</label>
                        <input
                          type="email"
                          value={aboutData.contact.email}
                          onChange={(e) =>
                            setAboutData((prev) => ({
                              ...prev,
                              contact: { ...prev.contact, email: e.target.value }
                            }))
                          }
                          className="w-full px-3 py-2 rounded-lg border border-stone-300"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="px-6 py-4 bg-[#FAF7F2] border-t border-stone-200 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={handleResetCms}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-stone-300 text-xs font-semibold text-stone-700 hover:bg-stone-100 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Defaults</span>
              </button>

              <div className="flex items-center gap-2">
                {cmsSavedNotice && (
                  <span className="text-xs font-semibold text-emerald-700 flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" /> Saved
                  </span>
                )}
                <button
                  type="button"
                  onClick={() => {
                    setCmsSavedNotice(true);
                    setTimeout(() => setCmsSavedNotice(false), 1500);
                    setIsCmsOpen(false);
                  }}
                  className="px-5 py-2 rounded-lg bg-[#6B2E13] hover:bg-[#52210C] text-white text-xs font-bold cursor-pointer"
                >
                  Save &amp; Close
                </button>
              </div>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}
