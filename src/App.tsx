import React, { useState } from 'react';
import { HomeHeader } from './components/home/HomeHeader';
import { HomeHeroSection } from './components/home/HomeHeroSection';
import { StatsBarSection } from './components/home/StatsBarSection';
import { ServicesOfferedSection } from './components/home/ServicesOfferedSection';
import { CoursesCarouselSection } from './components/home/CoursesCarouselSection';
import { ZodiacCarouselSection } from './components/home/ZodiacCarouselSection';
import { MemoriesGallerySection } from './components/home/MemoriesGallerySection';
import { YouTubeInsightsSection } from './components/home/YouTubeInsightsSection';
import { StudentReviewsSection } from './components/home/StudentReviewsSection';
import { SeoAndFaqSection } from './components/home/SeoAndFaqSection';
import { HomeFooter } from './components/home/HomeFooter';
import { FloatingControls } from './components/FloatingControls';
import { BookingModal } from './components/BookingModal';
import { ConsultationTier } from './types';

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState<ConsultationTier>('executive');

  const handleOpenBooking = (tier?: ConsultationTier) => {
    if (tier) {
      setSelectedTier(tier);
    }
    setIsBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-sans relative selection:bg-secondary selection:text-heading overflow-x-hidden">
      {/* Top Sticky Header with Promo Marquee, Contact Bar & Primary Navigation */}
      <HomeHeader onOpenBooking={() => handleOpenBooking('executive')} />

      {/* Main Home Page Sections matching https://acharyaganesh.com/ */}
      <main className="flex-1">
        {/* 1. Hero Consultation Carousel (Match Making, Career, Wealth) */}
        <HomeHeroSection onOpenBooking={() => handleOpenBooking('executive')} />

        {/* 2. Stats & Google Reviews Strip */}
        <StatsBarSection />

        {/* 3. Services Offered */}
        <ServicesOfferedSection onOpenBooking={() => handleOpenBooking('executive')} />

        {/* 4. India’s Highly Rated Astrology Courses */}
        <CoursesCarouselSection />

        {/* 5. Zodiac Signs: Learn The Names And Symbols */}
        <ZodiacCarouselSection />

        {/* 6. Memories Over The Years */}
        <MemoriesGallerySection />

        {/* 7. Astrology Insights & Guidance (YouTube Player + Recommended Videos) */}
        <YouTubeInsightsSection />

        {/* 8. Our Students Reviews */}
        <StudentReviewsSection />

        {/* 9 & 10. Best Astrologer in India Editorial Prose + Frequently Asked Questions */}
        <SeoAndFaqSection />
      </main>

      {/* Dark Charcoal 4-Column Footer */}
      <HomeFooter />

      {/* Sticky Floating Controls (WhatsApp Chat + Book Consultation) */}
      <FloatingControls
        onOpenBooking={() => handleOpenBooking('executive')}
        whatsappHref="https://wa.me/917300004325?text=Namaste%20Acharya%20Ganesh%2C%20I%20would%20like%20to%20book%20a%20consultation."
      />

      {/* Consultation Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        initialTier={selectedTier}
      />
    </div>
  );
}
