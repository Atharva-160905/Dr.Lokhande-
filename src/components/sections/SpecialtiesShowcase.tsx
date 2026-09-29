import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, User } from "lucide-react";
import { clinicConfig } from "@/data/clinic";

export const SpecialtiesShowcase: React.FC = () => {
  const { dermatology, orthopaedics, physiotherapy } = clinicConfig.specialties;

  return (
    <section className="py-16 lg:py-24 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-clinic bg-clinic-light px-3 py-1 border border-clinic-border inline-block">
            Specialist Departments
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-primary tracking-tight mt-2">
            Two Signature Specialities
          </h2>
          <p className="text-secondary text-sm sm:text-base mt-2">
            Dedicated outpatient care delivered by experienced medical consultants with advanced post-graduate qualifications and fellowships.
          </p>
          <div className="w-16 h-[2px] bg-clinic mt-3"></div>
        </div>

        {/* Two Large Signature Editorial Panels (Flat, High-End) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          
          {/* PANEL 1: DERMATOLOGY (Green Visual Identity) */}
          <div className="border border-skin-border bg-skin-light flex flex-col justify-between">
            {/* Top Accent Line */}
            <div className="h-1.5 w-full bg-skin"></div>

            <div className="p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-between">
              
              <div className="space-y-5">
                {/* Photo container */}
                <div className="relative aspect-[16/9] w-full overflow-hidden border border-skin-border bg-white">
                  <Image
                    src={dermatology.image}
                    alt={dermatology.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 550px"
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-white px-3 py-1 border border-skin-border text-[11px] font-bold text-skin-deep tracking-wider uppercase">
                    Dermatology &amp; Trichology
                  </div>
                </div>

                {/* Headings */}
                <div className="space-y-1.5 pt-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-skin-deep block">
                    Skin • Hair • Nail Care
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-primary tracking-tight">
                    Dermatology &amp; Trichology
                  </h3>
                  <p className="text-secondary text-sm leading-relaxed">
                    {dermatology.summary}
                  </p>
                </div>

                {/* Clinical Topics List */}
                <div className="bg-white p-4 sm:p-5 border border-skin-border text-xs space-y-2">
                  <span className="font-bold text-skin-deep block uppercase tracking-wider text-[11px]">
                    Clinical Focus Areas:
                  </span>
                  <ul className="text-secondary space-y-1.5 font-medium">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-skin"></span>
                      <span>Acne, post-acne scarring, melasma &amp; pigmentation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-skin"></span>
                      <span>Chronic eczema, psoriasis, skin allergies &amp; infections</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-skin"></span>
                      <span>Male &amp; female pattern hair loss (Alopecia) &amp; dandruff</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-skin"></span>
                      <span>Medical chemical peels, skin tag removal &amp; minor procedures</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Doctor and Link Footer */}
              <div className="pt-5 border-t border-skin-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 border border-skin-border bg-white flex items-center justify-center text-skin">
                    <User size={18} />
                  </div>
                  <div>
                    <span className="block text-sm font-bold text-primary">
                      {dermatology.leadDoctor.name}
                    </span>
                    <span className="block text-xs text-secondary font-medium">
                      Consultant Dermatologist &amp; Trichologist
                    </span>
                  </div>
                </div>

                <Link
                  href="/specialities/dermatology"
                  className="inline-flex items-center justify-center gap-2 text-xs font-bold text-white bg-skin hover:bg-skin-deep px-5 py-3 transition-colors text-center w-full sm:w-auto"
                >
                  <span>Explore Dermatology</span>
                  <ArrowRight size={14} />
                </Link>
              </div>

            </div>
          </div>

          {/* PANEL 2: ORTHOPAEDICS (Burgundy Visual Identity) */}
          <div className="border border-ortho-border bg-ortho-light flex flex-col justify-between">
            {/* Top Accent Line */}
            <div className="h-1.5 w-full bg-ortho"></div>

            <div className="p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-between">
              
              <div className="space-y-5">
                {/* Photo container */}
                <div className="relative aspect-[16/9] w-full overflow-hidden border border-ortho-border bg-white">
                  <Image
                    src={orthopaedics.image}
                    alt={orthopaedics.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 550px"
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-white px-3 py-1 border border-ortho-border text-[11px] font-bold text-ortho-deep tracking-wider uppercase">
                    Orthopaedic Surgery
                  </div>
                </div>

                {/* Headings */}
                <div className="space-y-1.5 pt-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-ortho-deep block">
                    Bones • Joints • Sports Injuries
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-primary tracking-tight">
                    Orthopaedics &amp; Joint Care
                  </h3>
                  <p className="text-secondary text-sm leading-relaxed">
                    {orthopaedics.summary}
                  </p>
                </div>

                {/* Clinical Topics List */}
                <div className="bg-white p-4 sm:p-5 border border-ortho-border text-xs space-y-2">
                  <span className="font-bold text-ortho-deep block uppercase tracking-wider text-[11px]">
                    Clinical Focus Areas:
                  </span>
                  <ul className="text-secondary space-y-1.5 font-medium">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-ortho"></span>
                      <span>Knee &amp; hip arthritis assessment and joint preservation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-ortho"></span>
                      <span>Total Knee Replacement (TKR) &amp; Total Hip Replacement (THR)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-ortho"></span>
                      <span>Arthroscopic ACL ligament &amp; meniscus reconstruction</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-ortho"></span>
                      <span>Fracture reduction, trauma surgery &amp; back/neck pain</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Doctor and Link Footer */}
              <div className="pt-5 border-t border-ortho-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 border border-ortho-border bg-white flex items-center justify-center text-ortho">
                    <User size={18} />
                  </div>
                  <div>
                    <span className="block text-sm font-bold text-primary">
                      {orthopaedics.leadDoctor.name}
                    </span>
                    <span className="block text-xs text-secondary font-medium">
                      Consultant Orthopedic Surgeon
                    </span>
                  </div>
                </div>

                <Link
                  href="/specialities/orthopaedics"
                  className="inline-flex items-center justify-center gap-2 text-xs font-bold text-white bg-ortho hover:bg-ortho-deep px-5 py-3 transition-colors text-center w-full sm:w-auto"
                >
                  <span>Explore Orthopaedics</span>
                  <ArrowRight size={14} />
                </Link>
              </div>

            </div>
          </div>

        </div>

        {/* Integrated Physiotherapy Link Bar in Warm Ivory */}
        <div className="mt-10 border border-border bg-ivory p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <span className="text-xs font-bold uppercase tracking-wider text-clinic block">
              Integrated Physical Rehabilitation
            </span>
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-primary">
              Physiotherapy &amp; Post-Operative Recovery
            </h4>
            <p className="text-xs sm:text-sm text-secondary max-w-2xl leading-relaxed">
              Coordinated physical therapy, gait re-education, and functional recovery programs supporting joint surgery and fracture rehabilitation.
            </p>
          </div>
          <Link
            href="/specialities/physiotherapy"
            className="inline-flex items-center justify-center gap-2 text-xs font-bold text-white bg-clinic hover:bg-clinic-deep px-5 py-3 transition-colors flex-shrink-0 w-full sm:w-auto text-center"
          >
            <span>Learn About Rehabilitation</span>
            <ArrowRight size={14} />
          </Link>
        </div>

      </div>
    </section>
  );
};
