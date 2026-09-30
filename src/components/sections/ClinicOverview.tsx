"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const ClinicOverview: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white border-b border-border/70 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Clinic Atmosphere Photography with Curved Architectural Frame (5 cols) */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <div className="relative border border-border/80 rounded-[3rem] rounded-bl-sm p-3 bg-ivory shadow-md overflow-hidden">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.25rem] rounded-bl-xs bg-white">
                <Image
                  src="/images/clinic/reception.jpg"
                  alt="Dr. Lokhande’s Clinic Consultation Environment in Sinhagad Road, Pune"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 480px"
                  className="object-cover"
                />
              </div>
              <div className="px-4 py-3 bg-ivory flex items-center justify-between text-xs">
                <span className="font-serif font-bold text-primary text-sm">Quiet, Focused Care</span>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-secondary bg-white px-2.5 py-0.5 rounded-full border border-border/60">
                  Sinhagad Road, Pune
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Editorial Presentation (7 cols) */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 bg-[#EEF2F6] text-clinic px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-clinic" />
                <span>The Clinic Philosophy</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-primary tracking-tight leading-[1.16]">
                Two Distinct Disciplines, One Dedicated Clinic
              </h2>
            </div>

            <p className="text-secondary text-base sm:text-lg leading-relaxed">
              Dr. Lokhande’s Clinic was created to provide Sinhagad Road with direct access to specialist consultations. Patients consult directly with fellowship-trained consultants in a calm, modern setting with clear diagnosis and planned care.
            </p>

            {/* Editorial Features with Circular Color Pills & Clean Dividing Lines */}
            <div className="divide-y divide-border/80 pt-2">
              
              <div className="py-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 sm:gap-6 group">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-skin flex-shrink-0" />
                  <span className="font-serif text-lg font-bold text-primary group-hover:text-skin transition-colors">
                    Dermatology &amp; Trichology
                  </span>
                </div>
                <span className="text-xs sm:text-sm text-secondary sm:text-right max-w-sm">
                  Clinical skin conditions, acne management, melasma, and hair loss diagnostics by Dr. Rutuja Lokhande.
                </span>
              </div>

              <div className="py-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 sm:gap-6 group">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-ortho flex-shrink-0" />
                  <span className="font-serif text-lg font-bold text-primary group-hover:text-ortho transition-colors">
                    Orthopaedics &amp; Joint Surgery
                  </span>
                </div>
                <span className="text-xs sm:text-sm text-secondary sm:text-right max-w-sm">
                  Knee &amp; hip replacement, arthroscopic ligament repair, and fracture care by Dr. Vijayanand Lokhande.
                </span>
              </div>

              <div className="py-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 sm:gap-6 group">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-clinic flex-shrink-0" />
                  <span className="font-serif text-lg font-bold text-primary group-hover:text-clinic transition-colors">
                    Integrated Rehabilitation
                  </span>
                </div>
                <span className="text-xs sm:text-sm text-secondary sm:text-right max-w-sm">
                  Coordinated physical therapy and staged recovery protocols supporting rapid post-surgical mobility.
                </span>
              </div>

            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs font-bold bg-ivory hover:bg-clinic hover:text-white text-clinic px-5 py-2.5 rounded-full border border-border transition-colors uppercase tracking-wider"
              >
                <span>Learn More About Our Clinical Standards</span>
                <ArrowRight size={14} />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
