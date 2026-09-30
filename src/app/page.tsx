import React from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { GoogleReviewsTicker } from "@/components/sections/GoogleReviewsTicker";
import { ClinicOverview } from "@/components/sections/ClinicOverview";
import { SpecialtiesShowcase } from "@/components/sections/SpecialtiesShowcase";
import { DoctorsSection } from "@/components/sections/DoctorsSection";
import { PatientFeedbackSection } from "@/components/sections/PatientFeedbackSection";
import { LocationHoursSection } from "@/components/sections/LocationHoursSection";

export default function HomePage() {
  return (
    <>
      {/* 1. Primary Hero Section (Editorial Layout & GSAP motion) */}
      <HeroSection />

      {/* 2. Continuous Google Reviews Marquee Ticker (Pauses on Hover) */}
      <GoogleReviewsTicker />

      {/* 3. The Clinic Section (Specialist Care Under One Practice) */}
      <ClinicOverview />

      {/* 4. Two Specialties Showcase (Signature Editorial Compositions) */}
      <SpecialtiesShowcase />

      {/* 5. Meet the Doctors (Full-Spread Editorial Specialist Profiles) */}
      <DoctorsSection />

      {/* 6. Verified Patient Feedback (Detailed Testimonials) */}
      <PatientFeedbackSection />

      {/* 7. Location, Timings & Interactive Map */}
      <LocationHoursSection />
    </>
  );
}
