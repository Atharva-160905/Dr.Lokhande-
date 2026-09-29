import React from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { ClinicOverview } from "@/components/sections/ClinicOverview";
import { SpecialtiesShowcase } from "@/components/sections/SpecialtiesShowcase";
import { DoctorsSection } from "@/components/sections/DoctorsSection";
import { PatientFeedbackSection } from "@/components/sections/PatientFeedbackSection";
import { LocationHoursSection } from "@/components/sections/LocationHoursSection";

export default function HomePage() {
  return (
    <>
      {/* 1. Primary Hero Section (Who, What, Where, Contact) */}
      <HeroSection />

      {/* 2. The Clinic Section (Specialist Care Under One Clinic) */}
      <ClinicOverview />

      {/* 3. Two Specialties Showcase (Signature Editorial Panels) */}
      <SpecialtiesShowcase />

      {/* 4. Meet the Doctors (Substantial Specialist Profiles) */}
      <DoctorsSection />

      {/* 5. Verified Patient Feedback (External Platforms) */}
      <PatientFeedbackSection />

      {/* 6. Location, Timings & Interactive Map */}
      <LocationHoursSection />
    </>
  );
}
