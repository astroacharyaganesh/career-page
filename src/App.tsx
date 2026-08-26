import React, { useState } from 'react';
import { ConstellationCanvas } from './components/ConstellationCanvas';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustMarquee } from './components/TrustMarquee';
import { CareerJourneyTimeline } from './components/CareerJourneyTimeline';
import { ProblemsSection } from './components/ProblemsSection';
import { HowItWorksProcess } from './components/HowItWorksProcess';
import { BentoServices } from './components/BentoServices';
import { FreeAstroCalculator } from './components/FreeAstroCalculator';
import { ConsultationProcess } from './components/ConsultationProcess';
import { NetflixVideoVault } from './components/NetflixVideoVault';
import { TestimonialsStories } from './components/TestimonialsStories';
import { DeliverablesGrid } from './components/DeliverablesGrid';
import { KnowledgeHub } from './components/KnowledgeHub';
import { FaqSection } from './components/FaqSection';
import { FinalCtaBanner } from './components/FinalCtaBanner';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { VideoPlayerModal } from './components/VideoPlayerModal';
import { FloatingControls } from './components/FloatingControls';
import { ConsultationTier, VideoItem } from './types';
import { VIDEO_VAULT } from './data/careerAstrologyData';

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState<ConsultationTier>('executive');
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

  const handleOpenBooking = (tier?: ConsultationTier) => {
    if (tier) {
      setSelectedTier(tier);
    }
    setIsBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingModalOpen(false);
  };

  const handleOpenWhatsApp = () => {
    const message = encodeURIComponent(
      'Namaste Acharya Ganesh, I am seeking confidential 1-on-1 guidance regarding my career astrological alignment & D10 chart analysis.'
    );
    window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
  };

  const handleWatchIntro = () => {
    setActiveVideo(VIDEO_VAULT[0]);
  };

  return (
    <div className="min-h-screen bg-[#0B1020] text-slate-100 font-sans relative selection:bg-amber-400 selection:text-slate-950 overflow-x-hidden">
      
      {/* 1. Interactive Celestial Constellation Background */}
      <ConstellationCanvas />

      {/* 2. Top Navigation Bar */}
      <Navbar
        onOpenBooking={() => handleOpenBooking('executive')}
        onOpenWhatsApp={handleOpenWhatsApp}
      />

      {/* 3. Main Landing Content Stream */}
      <main className="relative z-10">
        {/* Hero Section */}
        <Hero
          onOpenBooking={() => handleOpenBooking('executive')}
          onWatchIntro={handleWatchIntro}
        />

        {/* Social Proof & Trusted Marquee */}
        <TrustMarquee />

        {/* 5-Stage Career Journey Vertical Timeline */}
        <CareerJourneyTimeline
          onOpenBooking={() => handleOpenBooking('executive')}
        />

        {/* Career Problems & Friction Diagnosis */}
        <ProblemsSection
          onOpenBooking={() => handleOpenBooking('executive')}
        />

        {/* How Career Astrology Works (Vedic Process Pipeline) */}
        <HowItWorksProcess />

        {/* Bento Suite of Specialized Career Services */}
        <BentoServices
          onOpenBooking={() => handleOpenBooking('executive')}
        />

        {/* Interactive Free Instant Vedic Career Calculator */}
        <FreeAstroCalculator
          onOpenBooking={() => handleOpenBooking('executive')}
        />

        {/* 4-Step Consultation Protocol & Pricing Packages */}
        <ConsultationProcess
          onOpenBooking={(tier) => handleOpenBooking(tier)}
        />

        {/* Netflix-Style Video Masterclass Vault */}
        <NetflixVideoVault
          onPlayVideo={(video) => setActiveVideo(video)}
        />

        {/* Executive Transformation Stories (Before → Consultation → After) */}
        <TestimonialsStories
          onOpenBooking={() => handleOpenBooking('executive')}
        />

        {/* 8 Signature Career Consultation Deliverables */}
        <DeliverablesGrid
          onOpenBooking={() => handleOpenBooking('executive')}
        />

        {/* Knowledge Hub & Research Guides */}
        <KnowledgeHub />

        {/* FAQs Accordion */}
        <FaqSection
          onOpenWhatsApp={handleOpenWhatsApp}
        />

        {/* Final Luxury Call to Action Banner */}
        <FinalCtaBanner
          onOpenBooking={() => handleOpenBooking('executive')}
          onOpenWhatsApp={handleOpenWhatsApp}
        />
      </main>

      {/* 4. Luxury Footer */}
      <Footer />

      {/* 5. Sticky Floating Controls & Progress Bar */}
      <FloatingControls
        onOpenBooking={() => handleOpenBooking('executive')}
        onOpenWhatsApp={handleOpenWhatsApp}
      />

      {/* 6. 1-on-1 Consultation Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={handleCloseBooking}
        initialTier={selectedTier}
      />

      {/* 7. Video Player Masterclass Modal */}
      <VideoPlayerModal
        video={activeVideo}
        onClose={() => setActiveVideo(null)}
        onOpenBooking={() => {
          setActiveVideo(null);
          handleOpenBooking('executive');
        }}
      />

    </div>
  );
}
