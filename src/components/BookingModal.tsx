import React, { useState } from 'react';
import { CONSULTATION_PLANS } from '../data/careerAstrologyData';
import { ConsultationTier, BookingFormData } from '../types';
import confetti from 'canvas-confetti';
import {
  X,
  Calendar,
  Clock,
  MapPin,
  Mail,
  User,
  Phone,
  Briefcase,
  HelpCircle,
  Sparkles,
  CheckCircle2,
  Lock,
  ArrowRight,
  ShieldCheck,
  Download
} from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTier?: ConsultationTier;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialTier = 'executive'
}) => {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3 | 4>(1);
  const [selectedTier, setSelectedTier] = useState<ConsultationTier>(initialTier);
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    timeOfBirth: '',
    placeOfBirth: '',
    currentDesignation: '',
    primaryQuestion: '',
    consultationTier: initialTier,
    preferredSlot: 'Tomorrow 4:00 PM IST',
    timezone: 'Asia/Kolkata (IST)'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isBooked, setIsBooked] = useState(false);

  if (!isOpen) return null;

  const handleTierSelect = (tier: ConsultationTier) => {
    setSelectedTier(tier);
    setFormData((prev) => ({ ...prev, consultationTier: tier }));
    setCurrentStep(2);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleProceedToSlot = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep(3);
  };

  const handleConfirmBooking = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsBooked(true);
      setCurrentStep(4);
      // Trigger celebratory confetti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }, 1000);
  };

  const activePlanDetails =
    CONSULTATION_PLANS.find((p) => p.id === selectedTier) || CONSULTATION_PLANS[1];

  const availableSlots = [
    'Tomorrow • 11:30 AM IST',
    'Tomorrow • 4:00 PM IST',
    'Day after • 2:00 PM IST',
    'Day after • 7:30 PM IST',
    'Saturday • 10:00 AM IST'
  ];

  return (
    <div
      id="booking-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl my-8 rounded-3xl bg-[#0B1020] border border-amber-400/40 p-6 sm:p-8 shadow-2xl shadow-black space-y-6 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.1] text-slate-300 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300">
            <Calendar className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono-code font-bold uppercase tracking-wider text-amber-300">
                1-on-1 Confidential Booking
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 font-mono-code">
                Slots Available Today
              </span>
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
              Reserve Your Consultation with Acharya Ganesh
            </h3>
          </div>
        </div>

        {/* Step Progress Indicators */}
        <div className="grid grid-cols-4 gap-2 pt-2">
          {[
            { step: 1, label: 'Plan Tier' },
            { step: 2, label: 'Birth Data' },
            { step: 3, label: 'Pick Slot' },
            { step: 4, label: 'Confirmed' }
          ].map((s) => (
            <div key={s.step} className="space-y-1">
              <div
                className={`h-1.5 rounded-full transition-all ${
                  currentStep >= s.step
                    ? 'bg-gradient-to-r from-amber-400 to-amber-300 shadow-sm shadow-amber-400/50'
                    : 'bg-white/10'
                }`}
              />
              <span className="text-[10px] font-mono-code text-slate-400 block text-center">
                {s.label}
              </span>
            </div>
          ))}
        </div>

        {/* STEP 1: Select Plan */}
        {currentStep === 1 && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <p className="text-xs text-slate-300">
              Select your consultation intensity. All sessions are 100% confidential and handled personally by Acharya Ganesh.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CONSULTATION_PLANS.map((plan) => (
                <div
                  key={plan.id}
                  onClick={() => handleTierSelect(plan.id)}
                  className={`p-5 rounded-2xl border cursor-pointer transition-all duration-200 flex flex-col justify-between ${
                    selectedTier === plan.id
                      ? 'bg-gradient-to-b from-slate-900 via-violet-950/40 to-slate-900 border-amber-400 shadow-xl shadow-amber-500/10'
                      : 'bg-slate-900/40 hover:bg-slate-900/70 border-white/[0.08]'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-display font-bold text-base text-white">{plan.name}</h4>
                      {plan.badge && (
                        <span className="text-[9px] font-mono-code px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 font-bold">
                          {plan.badge}
                        </span>
                      )}
                    </div>
                    <div className="text-xl font-mono-code font-black text-amber-300">
                      {plan.price}
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">{plan.tagline}</p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs text-amber-300 font-semibold">
                    <span>{plan.duration}</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STEP 2: Birth Details Form */}
        {currentStep === 2 && (
          <form onSubmit={handleProceedToSlot} className="space-y-4 animate-in fade-in duration-200">
            <div className="p-3 rounded-xl bg-violet-950/30 border border-violet-500/20 flex items-center justify-between text-xs">
              <span className="text-slate-300">
                Selected Plan: <strong>{activePlanDetails.name}</strong> ({activePlanDetails.price})
              </span>
              <button
                type="button"
                onClick={() => setCurrentStep(1)}
                className="text-amber-300 underline font-mono-code cursor-pointer"
              >
                Change
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono-code text-slate-300 font-bold uppercase mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    name="fullName"
                    placeholder="e.g. Vikramaditya Sharma"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-black/50 border border-white/[0.12] text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono-code text-slate-300 font-bold uppercase mb-1">
                  Work / Personal Email *
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    name="email"
                    placeholder="vikram@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-black/50 border border-white/[0.12] text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono-code text-slate-300 font-bold uppercase mb-1">
                  WhatsApp Number *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    required
                    name="phone"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-black/50 border border-white/[0.12] text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono-code text-slate-300 font-bold uppercase mb-1">
                  Current Designation & Domain
                </label>
                <div className="relative">
                  <Briefcase className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    name="currentDesignation"
                    placeholder="e.g. Senior Product Manager @ Fintech"
                    value={formData.currentDesignation}
                    onChange={handleInputChange}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-black/50 border border-white/[0.12] text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono-code text-slate-300 font-bold uppercase mb-1">
                  Date of Birth (DD/MM/YYYY) *
                </label>
                <input
                  type="date"
                  required
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2.5 rounded-xl bg-black/50 border border-white/[0.12] text-xs text-white focus:outline-none focus:border-amber-400 font-mono-code"
                />
              </div>

              <div>
                <label className="block text-xs font-mono-code text-slate-300 font-bold uppercase mb-1">
                  Exact Time of Birth *
                </label>
                <input
                  type="time"
                  required
                  name="timeOfBirth"
                  value={formData.timeOfBirth}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2.5 rounded-xl bg-black/50 border border-white/[0.12] text-xs text-white focus:outline-none focus:border-amber-400 font-mono-code"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-mono-code text-slate-300 font-bold uppercase mb-1">
                  City & Country of Birth *
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    name="placeOfBirth"
                    placeholder="e.g. Bengaluru, Karnataka, India"
                    value={formData.placeOfBirth}
                    onChange={handleInputChange}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-black/50 border border-white/[0.12] text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-mono-code text-slate-300 font-bold uppercase mb-1">
                  Specific Questions / Dilemma for Acharya Ganesh
                </label>
                <textarea
                  rows={2}
                  name="primaryQuestion"
                  placeholder="e.g. When should I resign? Should I accept the US transfer or start my AI SaaS?"
                  value={formData.primaryQuestion}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2.5 rounded-xl bg-black/50 border border-white/[0.12] text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <button
                type="button"
                onClick={() => setCurrentStep(1)}
                className="px-5 py-2.5 rounded-xl bg-white/[0.06] text-xs text-slate-300 hover:text-white"
              >
                Back
              </button>

              <button
                type="submit"
                className="px-7 py-2.5 rounded-xl font-bold text-xs text-slate-950 bg-gradient-to-r from-amber-300 to-amber-400 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-amber-500/20"
              >
                <span>Select Calendar Slot</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </button>
            </div>
          </form>
        )}

        {/* STEP 3: Slot Selection & Confirmation */}
        {currentStep === 3 && (
          <div className="space-y-5 animate-in fade-in duration-200">
            <div className="space-y-2">
              <h4 className="font-display text-base font-bold text-white">
                Choose Available 1-on-1 Consultation Window
              </h4>
              <p className="text-xs text-slate-300">
                Sessions are held over private Google Meet / Zoom HD with end-to-end encryption.
              </p>
            </div>

            {/* Slots List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {availableSlots.map((slot) => (
                <button
                  key={slot}
                  type="button"
                  onClick={() => setFormData((prev) => ({ ...prev, preferredSlot: slot }))}
                  className={`p-4 rounded-xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                    formData.preferredSlot === slot
                      ? 'bg-amber-500/20 border-amber-400 text-white shadow-md'
                      : 'bg-black/40 border-white/[0.08] text-slate-300 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-amber-400" />
                    <span className="text-xs font-mono-code font-semibold">{slot}</span>
                  </div>
                  {formData.preferredSlot === slot && (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  )}
                </button>
              ))}
            </div>

            {/* Summary Box */}
            <div className="p-4 rounded-2xl bg-black/40 border border-white/[0.08] space-y-2 text-xs">
              <div className="flex justify-between text-slate-300">
                <span>Client Name:</span>
                <span className="font-semibold text-white">{formData.fullName || 'Valued Executive'}</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Plan Tier:</span>
                <span className="font-semibold text-amber-300">{activePlanDetails.name}</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Total Consultation Fee:</span>
                <span className="font-mono-code font-bold text-emerald-400 text-sm">{activePlanDetails.price}</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <button
                type="button"
                onClick={() => setCurrentStep(2)}
                className="px-5 py-2.5 rounded-xl bg-white/[0.06] text-xs text-slate-300 hover:text-white"
              >
                Back
              </button>

              <button
                type="button"
                disabled={isSubmitting}
                onClick={handleConfirmBooking}
                className="px-8 py-3 rounded-xl font-bold text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer shadow-xl shadow-amber-500/25"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                    <span>Confirming Appointment...</span>
                  </>
                ) : (
                  <>
                    <ShieldCheck className="w-4 h-4 text-slate-950" />
                    <span>Confirm & Lock Slot</span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}

        {/* STEP 4: Success Confirmation */}
        {currentStep === 4 && isBooked && (
          <div className="text-center py-6 space-y-6 animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-3xl bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center mx-auto text-emerald-300 shadow-xl shadow-emerald-500/30">
              <CheckCircle2 className="w-8 h-8 text-emerald-400" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono-code font-bold text-emerald-300 uppercase tracking-widest">
                Appointment Confirmed
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                Your Career Consultation is Locked!
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                A calendar invitation and encrypted Zoom link have been dispatched to <strong>{formData.email || 'your email'}</strong>. Acharya Ganesh has initiated your D10 Dashamsha manual preparation.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-black/40 border border-white/[0.08] max-w-md mx-auto text-xs text-left space-y-1.5 font-mono-code">
              <div className="flex justify-between">
                <span className="text-slate-400">Time:</span>
                <span className="text-amber-300">{formData.preferredSlot}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Plan:</span>
                <span className="text-white">{activePlanDetails.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Reference:</span>
                <span className="text-emerald-400">ASTRO-{Math.floor(100000 + Math.random() * 900000)}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a
                href={`https://wa.me/919876543210?text=${encodeURIComponent(
                  `Hi Acharya Ganesh, I just confirmed my booking for ${activePlanDetails.name} on ${formData.preferredSlot}. My name is ${formData.fullName || 'Client'}.`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-xs text-emerald-300 bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 transition-all flex items-center justify-center gap-2"
              >
                <span>Notify Coordinator on WhatsApp</span>
              </a>

              <button
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-xs text-slate-950 bg-gradient-to-r from-amber-300 to-amber-400 hover:scale-[1.02] transition-all cursor-pointer"
              >
                Close & Return to Page
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
