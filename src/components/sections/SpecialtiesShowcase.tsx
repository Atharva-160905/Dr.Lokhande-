"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Activity, CheckCircle2, ChevronRight, MessageSquare } from "lucide-react";
import { clinicConfig, getWhatsAppUrl } from "@/data/clinic";

export const SpecialtiesShowcase: React.FC = () => {
  const { dermatology, orthopaedics, physiotherapy } = clinicConfig.specialties;

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-ivory border-b border-border/70 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-clinic block">
            Specialist Offerings &amp; Common Concerns
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-primary tracking-tight">
            Conditions We Treat &amp; Clinical Pathways
          </h2>
          <p className="text-secondary text-base leading-relaxed">
            Understand what symptoms and clinical conditions our specialist doctors treat, with direct diagnostic pathways for skin, hair, bone, and joint health.
          </p>
        </div>

        {/* Unified 2-Column Synchronized Grid with Organic Shapes */}
        <div className="space-y-6">
          
          {/* Row 0: Department Lead Cards with Asymmetric Architectural Corners */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            {/* Dermatology Header */}
            <div className="bg-gradient-to-br from-white via-white to-[#F5F8F4] border border-[#D6E2D3] rounded-[2rem] rounded-tr-md p-6 sm:p-7 flex flex-col justify-between shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-skin/5 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none" />
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#E8EFE6] relative z-10">
                <div>
                  <div className="inline-flex items-center gap-2 bg-[#EAF2E8] text-skin px-3 py-1 rounded-full text-[11px] font-bold tracking-wide mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-skin animate-pulse" />
                    <span>Dr. Rutuja Lokhande • MD</span>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-primary">
                    Dermatology &amp; Hair Care
                  </h3>
                </div>
                <Link
                  href="/specialities/dermatology"
                  className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white border border-[#D6E2D3] text-skin hover:bg-skin hover:text-white transition-colors shadow-sm flex-shrink-0"
                  aria-label="View Dermatology Speciality"
                >
                  <ChevronRight size={18} />
                </Link>
              </div>
              <p className="text-xs sm:text-sm text-secondary leading-relaxed pt-3 relative z-10">
                Evidence-guided clinical evaluations for acute and stubborn skin conditions, scalp disorders, and advanced aesthetic procedures.
              </p>
            </div>

            {/* Orthopaedics Header */}
            <div className="bg-gradient-to-br from-white via-white to-[#F9F5F6] border border-[#E5D4D6] rounded-[2rem] rounded-tl-md p-6 sm:p-7 flex flex-col justify-between shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-ortho/5 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none" />
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#F0E6E8] relative z-10">
                <div>
                  <div className="inline-flex items-center gap-2 bg-[#F6EEEE] text-ortho px-3 py-1 rounded-full text-[11px] font-bold tracking-wide mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-ortho animate-pulse" />
                    <span>Dr. Vijayanand Lokhande • MS, DNB</span>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-primary">
                    Orthopaedics &amp; Joint Care
                  </h3>
                </div>
                <Link
                  href="/specialities/orthopaedics"
                  className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white border border-[#E5D4D6] text-ortho hover:bg-ortho hover:text-white transition-colors shadow-sm flex-shrink-0"
                  aria-label="View Orthopaedics Speciality"
                >
                  <ChevronRight size={18} />
                </Link>
              </div>
              <p className="text-xs sm:text-sm text-secondary leading-relaxed pt-3 relative z-10">
                Expert surgical and non-surgical management for joints, sports ligaments, fracture trauma, and physical mobility restoration.
              </p>
            </div>
          </div>

          {/* Section Sub-heading */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 pt-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-secondary block pl-1">
              Common Skin &amp; Scalp Concerns &amp; Clinical Pathways:
            </span>
            <span className="text-[11px] font-bold uppercase tracking-wider text-secondary block pl-1">
              Common Joint &amp; Bone Concerns &amp; Clinical Pathways:
            </span>
          </div>

          {/* Synchronized Problem Rows with Circular Indices & Asymmetric Rounded Cards */}
          {[
            {
              num: "01",
              skin: {
                problem: "Facial Acne, Cystic Breakouts & Dark Marks",
                pathway: "Medical grading, comedone clearance, customized topical protocols, and medical chemical peels.",
                tag: "Acne & Marks",
              },
              ortho: {
                problem: "Knee Joint Pain, Stiffness & Walking Difficulty",
                pathway: "Staged osteoarthritis evaluation, joint preservation, viscosupplementation, or Total Knee Replacement.",
                tag: "Knee Arthritis",
              },
            },
            {
              num: "02",
              skin: {
                problem: "Facial Melasma, Sun Damage & Patchy Pigmentation",
                pathway: "Dermoscopic pigment depth analysis, targeted depigmenting actives, and skin barrier reconditioning.",
                tag: "Pigmentation",
              },
              ortho: {
                problem: "Sports Knee Twisting, ACL Ligament & Meniscus Tear",
                pathway: "Keyhole arthroscopic ligament reconstruction, meniscus repair, and structured return-to-sport protocols.",
                tag: "Sports Injury",
              },
            },
            {
              num: "03",
              skin: {
                problem: "Excessive Hair Shedding, Thinning & Scalp Dandruff",
                pathway: "Trichoscopic scalp assessment, nutritional screening, growth peptide therapies, and follicle plans.",
                tag: "Hair Loss",
              },
              ortho: {
                problem: "Shoulder Impingement, Rotator Cuff Tears & Pain",
                pathway: "Diagnostic ultrasound/MRI review, targeted subacromial injections, and guided joint mobilization.",
                tag: "Shoulder Care",
              },
            },
            {
              num: "04",
              skin: {
                problem: "Chronic Skin Itching, Eczema Flaking & Psoriasis",
                pathway: "Trigger identification, lipid barrier repair formulations, and non-steroidal maintenance protocols.",
                tag: "Skin Allergy",
              },
              ortho: {
                problem: "Acute Bone Fractures, Trauma & Spinal Back Pain",
                pathway: "AO Trauma fracture fixation, precision cast application, sciatica decompression, and physical recovery.",
                tag: "Trauma & Spine",
              },
            },
          ].map((row, idx) => (
            <div key={idx} className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 items-stretch">
              {/* Skin Problem Card */}
              <div className="bg-white border border-border/70 rounded-2xl rounded-tr-sm p-4 sm:p-5 flex items-start gap-3.5 transition-all duration-300 hover:border-skin/60 hover:shadow-md">
                <span className="w-7 h-7 rounded-full bg-[#F1F5EF] text-skin text-[11px] font-bold flex items-center justify-center flex-shrink-0 border border-[#D6E2D3] mt-0.5">
                  {row.num}
                </span>
                <div className="space-y-1 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-serif text-[15px] sm:text-base font-bold text-primary leading-snug">
                      {row.skin.problem}
                    </h4>
                    <span className="text-[10px] font-semibold bg-[#F1F5EF] text-skin px-2.5 py-0.5 rounded-full border border-[#D6E2D3] flex-shrink-0">
                      {row.skin.tag}
                    </span>
                  </div>
                  <p className="text-xs text-secondary leading-relaxed pt-0.5">
                    <strong className="text-primary font-medium">Pathway:</strong> {row.skin.pathway}
                  </p>
                </div>
              </div>

              {/* Ortho Problem Card */}
              <div className="bg-white border border-border/70 rounded-2xl rounded-tl-sm p-4 sm:p-5 flex items-start gap-3.5 transition-all duration-300 hover:border-ortho/60 hover:shadow-md">
                <span className="w-7 h-7 rounded-full bg-[#F6EEEE] text-ortho text-[11px] font-bold flex items-center justify-center flex-shrink-0 border border-[#E5D4D6] mt-0.5">
                  {row.num}
                </span>
                <div className="space-y-1 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-serif text-[15px] sm:text-base font-bold text-primary leading-snug">
                      {row.ortho.problem}
                    </h4>
                    <span className="text-[10px] font-semibold bg-[#F6EEEE] text-ortho px-2.5 py-0.5 rounded-full border border-[#E5D4D6] flex-shrink-0">
                      {row.ortho.tag}
                    </span>
                  </div>
                  <p className="text-xs text-secondary leading-relaxed pt-0.5">
                    <strong className="text-primary font-medium">Pathway:</strong> {row.ortho.pathway}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Synchronized Bottom Actions Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 pt-3">
            {/* Skin CTA */}
            <div className="flex items-center justify-between gap-4">
              <a
                href={getWhatsAppUrl(dermatology.whatsAppMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-skin hover:bg-skin-deep text-white px-6 py-3 rounded-full text-xs font-bold tracking-wide shadow-sm transition-transform active:scale-95"
              >
                <MessageSquare size={15} />
                <span>Book Skin / Hair Consultation</span>
              </a>

              <Link
                href="/specialities/dermatology"
                className="text-xs font-semibold text-primary hover:text-skin inline-flex items-center gap-1.5 py-2 px-3 rounded-full hover:bg-white"
              >
                <span>View Full Offerings</span>
                <ArrowRight size={13} />
              </Link>
            </div>

            {/* Ortho CTA */}
            <div className="flex items-center justify-between gap-4">
              <a
                href={getWhatsAppUrl(orthopaedics.whatsAppMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-ortho hover:bg-ortho-deep text-white px-6 py-3 rounded-full text-xs font-bold tracking-wide shadow-sm transition-transform active:scale-95"
              >
                <MessageSquare size={15} />
                <span>Book Joint / Bone Consultation</span>
              </a>

              <Link
                href="/specialities/orthopaedics"
                className="text-xs font-semibold text-primary hover:text-ortho inline-flex items-center gap-1.5 py-2 px-3 rounded-full hover:bg-white"
              >
                <span>View Full Offerings</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>

        </div>

        {/* Supporting Physiotherapy Banner with Curved Architectural Container */}
        <div className="mt-12 bg-white border border-border rounded-[2rem] rounded-bl-sm p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#EEF2F6] text-clinic flex items-center justify-center flex-shrink-0">
              <Activity size={24} />
            </div>
            <div className="space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-clinic block">
                Integrated Rehabilitation
              </span>
              <h4 className="font-serif text-lg sm:text-xl font-bold text-primary">
                Physiotherapy &amp; Post-Surgical Recovery
              </h4>
              <p className="text-xs sm:text-sm text-secondary max-w-xl leading-relaxed">
                Coordinated exercise protocols directly aligned with surgeon plans for safe, expedited recovery.
              </p>
            </div>
          </div>
          <Link
            href="/specialities/physiotherapy"
            className="inline-flex items-center gap-2 text-xs font-bold bg-ivory text-clinic hover:bg-clinic hover:text-white px-5 py-2.5 rounded-full border border-border transition-colors flex-shrink-0"
          >
            <span>Learn About Physiotherapy</span>
            <ArrowRight size={13} />
          </Link>
        </div>

      </div>
    </section>
  );
};
