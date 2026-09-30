"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { clinicConfig, getWhatsAppUrl } from "@/data/clinic";
import { MessageSquare, ArrowRight, ShieldCheck } from "lucide-react";

export const DoctorsSection: React.FC = () => {
  const { vijayanand, rutuja } = clinicConfig.doctors;

  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-white border-b border-border/70 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Compact */}
        <div className="max-w-2xl mb-10 space-y-1.5">
          <span className="text-xs font-semibold uppercase tracking-widest text-clinic block">
            Medical Leadership
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-primary tracking-tight">
            Consultant Specialists
          </h2>
          <p className="text-secondary text-sm leading-relaxed">
            Direct outpatient consultations by fellowship-trained specialists providing clear diagnostic evaluation and evidence-based treatments.
          </p>
        </div>

        {/* Side-by-Side 2-Column Showcase with Editorial Arches & Curved Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          
          {/* DOCTOR 1: DR. VIJAYANAND LOKHANDE (Burgundy Identity) */}
          <div className="bg-white border border-ortho-border rounded-[2.5rem] rounded-tr-md p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-ortho/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
            
            <div className="space-y-5 relative z-10">
              {/* Doctor Header with Arched Portrait Frame */}
              <div className="flex items-start gap-5">
                <div className="relative w-28 h-36 sm:w-32 sm:h-40 rounded-t-[3.5rem] rounded-b-2xl border border-ortho/20 bg-ivory flex-shrink-0 overflow-hidden shadow-sm">
                  <Image
                    src={vijayanand.image}
                    alt={vijayanand.imageAlt}
                    fill
                    sizes="(max-width: 640px) 120px, 140px"
                    className="object-cover"
                  />
                </div>
                
                <div className="space-y-1 flex-1">
                  <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-ortho bg-[#F6EEEE] px-2.5 py-0.5 rounded-full border border-[#E5D4D6]">
                    Orthopaedic Surgeon
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-primary leading-tight pt-1">
                    {vijayanand.name}
                  </h3>
                  <p className="text-xs font-semibold text-secondary">
                    MBBS, MS Ortho, DNB, FASM, FJRS
                  </p>
                  <p className="text-[11px] text-secondary/80">
                    SICOT Fellow (Germany) • AO Trauma Fellow
                  </p>
                </div>
              </div>

              {/* Bio & Clinical Focus */}
              <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                Specializes in knee &amp; hip joint replacement, keyhole arthroscopic ligament reconstruction (ACL/PCL), meniscus preservation, complex fractures, and spine care.
              </p>

              {/* Focus List with Pill Indicators */}
              <div className="pt-3 border-t border-ortho-border/60 text-xs text-secondary space-y-2">
                <div className="flex items-center gap-2.5 font-medium text-primary">
                  <span className="w-2 h-2 bg-ortho rounded-full flex-shrink-0"></span>
                  <span>Total Knee &amp; Hip Replacement (TKR / THR)</span>
                </div>
                <div className="flex items-center gap-2.5 font-medium text-primary">
                  <span className="w-2 h-2 bg-ortho rounded-full flex-shrink-0"></span>
                  <span>Keyhole Knee &amp; Shoulder Arthroscopic Surgery</span>
                </div>
                <div className="flex items-center gap-2.5 font-medium text-primary">
                  <span className="w-2 h-2 bg-ortho rounded-full flex-shrink-0"></span>
                  <span>Fracture Trauma Fixation, Spine &amp; Sciatica Care</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-5 border-t border-ortho-border/60 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 relative z-10">
              <a
                href={getWhatsAppUrl(vijayanand.whatsAppMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-ortho hover:bg-ortho-deep text-white px-6 py-3 rounded-full text-xs font-bold tracking-wide shadow-sm transition-transform active:scale-95 text-center"
              >
                <MessageSquare size={14} />
                <span>Book Consultation</span>
              </a>

              <Link
                href={`/doctors/${vijayanand.slug}`}
                className="inline-flex items-center justify-center gap-1.5 bg-ivory hover:bg-white text-primary border border-border px-5 py-3 rounded-full text-xs font-semibold transition-colors text-center"
              >
                <span>View Full Profile</span>
                <ArrowRight size={13} className="text-ortho" />
              </Link>
            </div>

          </div>

          {/* DOCTOR 2: DR. RUTUJA LOKHANDE (Green Identity) */}
          <div className="bg-white border border-skin-border rounded-[2.5rem] rounded-tl-md p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-skin/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
            
            <div className="space-y-5 relative z-10">
              {/* Doctor Header with Arched Portrait Frame */}
              <div className="flex items-start gap-5">
                <div className="relative w-28 h-36 sm:w-32 sm:h-40 rounded-t-[3.5rem] rounded-b-2xl border border-skin/20 bg-ivory flex-shrink-0 overflow-hidden shadow-sm">
                  <Image
                    src={rutuja.image}
                    alt={rutuja.imageAlt}
                    fill
                    sizes="(max-width: 640px) 120px, 140px"
                    className="object-cover"
                  />
                </div>
                
                <div className="space-y-1 flex-1">
                  <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-skin bg-[#EAF2E8] px-2.5 py-0.5 rounded-full border border-[#D6E2D3]">
                    Dermatologist &amp; Trichologist
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-primary leading-tight pt-1">
                    {rutuja.name}
                  </h3>
                  <p className="text-xs font-semibold text-secondary">
                    MBBS, DDVL, DNB (Dermatology)
                  </p>
                  <p className="text-[11px] text-secondary/80">
                    Consultant Dermatologist, Trichologist &amp; Cosmetologist
                  </p>
                </div>
              </div>

              {/* Bio & Clinical Focus */}
              <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                Specializes in clinical dermatology, stubborn acne &amp; acne scarring, facial melasma, chronic eczema, psoriasis, trichoscopy, and hair regrowth protocols.
              </p>

              {/* Focus List with Pill Indicators */}
              <div className="pt-3 border-t border-skin-border/60 text-xs text-secondary space-y-2">
                <div className="flex items-center gap-2.5 font-medium text-primary">
                  <span className="w-2 h-2 bg-skin rounded-full flex-shrink-0"></span>
                  <span>Medical Acne, Melasma &amp; Pigmentation Protocols</span>
                </div>
                <div className="flex items-center gap-2.5 font-medium text-primary">
                  <span className="w-2 h-2 bg-skin rounded-full flex-shrink-0"></span>
                  <span>Scalp Dermoscopy &amp; Pattern Hair Loss Regrowth</span>
                </div>
                <div className="flex items-center gap-2.5 font-medium text-primary">
                  <span className="w-2 h-2 bg-skin rounded-full flex-shrink-0"></span>
                  <span>Chronic Eczema, Psoriasis &amp; Skin Allergy Management</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-5 border-t border-skin-border/60 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 relative z-10">
              <a
                href={getWhatsAppUrl(rutuja.whatsAppMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-skin hover:bg-skin-deep text-white px-6 py-3 rounded-full text-xs font-bold tracking-wide shadow-sm transition-transform active:scale-95 text-center"
              >
                <MessageSquare size={14} />
                <span>Book Consultation</span>
              </a>

              <Link
                href={`/doctors/${rutuja.slug}`}
                className="inline-flex items-center justify-center gap-1.5 bg-ivory hover:bg-white text-primary border border-border px-5 py-3 rounded-full text-xs font-semibold transition-colors text-center"
              >
                <span>View Full Profile</span>
                <ArrowRight size={13} className="text-skin" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
