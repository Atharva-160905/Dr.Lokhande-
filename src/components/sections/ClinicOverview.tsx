import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const ClinicOverview: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Clinic Atmosphere Image (5 cols) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative border border-border p-2 bg-ivory">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-white">
                <Image
                  src="/images/clinic/reception.jpg"
                  alt="Dr. Lokhande’s Clinic Reception and Consultation Environment in Sinhagad Road, Pune"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 480px"
                  className="object-cover"
                />
              </div>
              <div className="p-3 bg-white border-t border-border flex items-center justify-between text-xs">
                <span className="font-serif font-bold text-primary text-sm">Focused Outpatient Practice</span>
                <span className="text-[11px] font-semibold text-clinic uppercase tracking-wider">Monte Rosa, Pune</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Text Block (7 cols) */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-clinic bg-clinic-light px-3 py-1 border border-clinic-border inline-block">
                Integrated Clinical Practice
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-primary tracking-tight">
                Specialist Care, Under One Clinic
              </h2>
            </div>

            <p className="text-secondary text-base leading-relaxed">
              Dr. Lokhande’s Skin &amp; Orthopaedic Speciality Clinic brings together fellowship-trained and post-graduate specialist doctors in Sinhagad Road, Pune. By combining advanced clinical dermatology, orthopaedic surgery, and structured physical rehabilitation, patients receive clear diagnosis, personalized treatment, and attentive follow-up without the delays of crowded tertiary hospitals.
            </p>

            {/* Factual medical practice pillars with distinct brand borders */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
              
              <div className="bg-ivory border-l-4 border-l-skin border border-border p-4 space-y-1.5">
                <span className="block text-xs font-bold text-skin-deep uppercase tracking-wider">
                  Dermatology
                </span>
                <p className="text-xs text-secondary leading-normal">
                  Clinical skin diseases, hair loss diagnostics, acne, pigmentation &amp; procedural care.
                </p>
              </div>

              <div className="bg-ivory border-l-4 border-l-ortho border border-border p-4 space-y-1.5">
                <span className="block text-xs font-bold text-ortho-deep uppercase tracking-wider">
                  Orthopaedics
                </span>
                <p className="text-xs text-secondary leading-normal">
                  Knee &amp; hip replacement, arthroscopy, ACL reconstruction, trauma &amp; joint care.
                </p>
              </div>

              <div className="bg-ivory border-l-4 border-l-clinic border border-border p-4 space-y-1.5">
                <span className="block text-xs font-bold text-clinic-deep uppercase tracking-wider">
                  Rehabilitation
                </span>
                <p className="text-xs text-secondary leading-normal">
                  Integrated physiotherapy protocols for post-surgical healing and mobility recovery.
                </p>
              </div>

            </div>

            {/* Link to About */}
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs font-bold text-clinic uppercase tracking-wider hover:underline"
              >
                <span>Read About Our Practice &amp; Standards</span>
                <ArrowRight size={14} />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
