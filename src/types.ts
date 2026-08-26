export type ConsultationTier = 'executive' | 'standard' | 'quick-switch' | 'business-founder';

export interface ConsultationPlan {
  id: ConsultationTier;
  name: string;
  badge?: string;
  tagline: string;
  price: string;
  originalPrice: string;
  duration: string;
  format: string;
  deliverables: string[];
  popular?: boolean;
  idealFor: string;
}

export interface CareerProblem {
  id: string;
  title: string;
  iconName: string;
  shortDesc: string;
  astrologicalRoot: string;
  solutionOutcome: string;
  d10Impact: string;
  frequency: string;
}

export interface JourneyStage {
  step: string;
  stageName: string;
  subtitle: string;
  challenge: string;
  astroInsight: string;
  breakthrough: string;
  planetaryKey: string;
  timeframe: string;
}

export interface HowItWorksStep {
  number: string;
  title: string;
  subtitle: string;
  details: string;
  techAspect: string;
  icon: string;
  highlight: string;
}

export interface BentoService {
  id: string;
  title: string;
  category: string;
  badge: string;
  description: string;
  planetaryFocus: string;
  colSpan: string; // Tailwind grid span
  rowSpan?: string;
  metrics: { label: string; value: string };
  features: string[];
  gradient: string;
  icon: string;
}

export interface VideoItem {
  id: string;
  title: string;
  category: 'Job Switch' | 'D10 Masterclass' | 'Govt vs Corporate' | 'Remedies' | 'Case Study';
  duration: string;
  views: string;
  thumbnail: string;
  description: string;
  keyTakeaway: string;
  speaker: string;
  videoUrl: string;
}

export interface TransformationStory {
  id: string;
  clientName: string;
  role: string;
  companyCategory: string;
  location: string;
  avatar: string;
  rating: number;
  timeframe: string;
  beforeState: {
    title: string;
    pain: string;
    stagnationPeriod: string;
  };
  consultationInsight: {
    analysis: string;
    planetsIdentified: string[];
    actionableAdvice: string;
  };
  afterOutcome: {
    outcomeTitle: string;
    ctcJump: string;
    newRole: string;
    verdict: string;
  };
  googleReviewBadge: boolean;
}

export interface DeliverableItem {
  id: string;
  title: string;
  format: string;
  description: string;
  highlight: string;
  icon: string;
}

export interface KnowledgeArticle {
  id: string;
  title: string;
  category: 'Articles' | 'Videos' | 'Guides' | 'FAQs';
  readTime: string;
  author: string;
  summary: string;
  keyPoints: string[];
  tags: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'Consultation' | 'Accuracy & Science' | 'Remedies' | 'Timing & Privacy';
}

export interface BookingFormData {
  fullName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  timeOfBirth: string;
  placeOfBirth: string;
  currentDesignation: string;
  primaryQuestion: string;
  consultationTier: ConsultationTier;
  preferredSlot: string;
  timezone: string;
}

export interface BirthDetailsForm {
  fullName: string;
  email: string;
  whatsapp: string;
  gender: string;
  dob: string;
  birthTime: string;
  birthTimeAccuracy: 'exact' | 'approximate-15min' | 'unknown-hour';
  birthPlace: string;
  currentProfession: string;
  primaryConcern: string;
  selectedTier: ConsultationTier;
  selectedDate: string;
  selectedSlot: string;
}

export interface AstroCalculationResult {
  zodiacSign: string;
  rulingPlanet: string;
  careerHouse10Status: string;
  activeDasha: string;
  currentPhaseEnergy: 'Hyper Growth' | 'Strategic Consolidation' | 'Favorable Switch Window' | 'Patience & Upskilling';
  alignmentScore: number;
  immediateOpportunity: string;
  keyVedicAdvice: string;
}
