import React from "react";
import Image from "next/image";
import Link from "next/link";
import { clinicConfig, getWhatsAppUrl } from "@/data/clinic";
import { MessageSquare, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";

export const DoctorsSection: React.FC = () => {
  const { vijayanand, rutuja } = clinicConfig.doctors;

  return (
    <section className="py-16 lg:py-24 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-clinic bg-clinic-light px-3 py-1 border border-clinic-border inline-block">
            Medical Faculty
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-primary tracking-tight mt-2">
            Meet Our Specialists
          </h2>
          <p className="text-secondary text-sm sm:text-base mt-2">
            Consultations are conducted directly by qualified medical specialists committed to clear diagnosis, patient education, and ethical clinical practice.
          </p>
          <div className="w-16 h-[2px] bg-clinic mt-3"></div>
        </div>

        {/* Doctor Profiles Grid */}
        <div className="space-y-12">
          
          {/* DOCTOR 1: DR. VIJAYANAND LOKHANDE (Burgundy Identity) */}
          <div className="bg-ivory border border-ortho-border p-6 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Portrait (4 cols) */}
              <div className="lg:col-span-4">
                <div className="relative aspect-[3/4] w-full border border-border overflow-hidden bg-white">
                  <Image
                    src={vijayanand.image}
                    alt={vijayanand.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 35vw, 400px"
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-white px-3 py-1 border border-ortho-border text-[11px] font-bold text-ortho-deep uppercase tracking-wider">
                    Orthopaedic Surgeon
                  </div>
                </div>
                <div className="mt-3 p-3 bg-white border border-border text-xs text-secondary">
                  <span className="font-bold text-primary block">Sinhagad Road Clinic, Pune</span>
                  <span>Consultations by prior appointment</span>
                </div>
              </div>

              {/* Bio & Details (8 cols) */}
              <div className="lg:col-span-8 space-y-5">
                
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-ortho-deep bg-ortho-light px-2.5 py-1 border border-ortho-border inline-block">
                    Orthopaedics &amp; Joint Surgery
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-primary mt-2">
                    {vijayanand.name}
                  </h3>
                  <p className="text-sm font-semibold text-secondary mt-0.5">
                    {vijayanand.title}
                  </p>
                </div>

                {/* Qualifications Pill Grid */}
                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-primary mb-2">
                    Verified Qualifications &amp; Fellowships:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {vijayanand.qualifications.map((qual, idx) => (
                      <span
                        key={idx}
                        className="bg-white text-primary text-xs font-semibold px-3 py-1 border border-border"
                      >
                        {qual}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bio text */}
                <p className="text-secondary text-sm sm:text-base leading-relaxed">
                  {vijayanand.shortBio}
                </p>

                {/* Areas of Practice highlight */}
                <div className="bg-white p-4 sm:p-5 border border-ortho-border text-xs space-y-2.5">
                  <span className="font-bold text-ortho-deep block text-[11px] uppercase tracking-wider">
                    Key Clinical Competencies:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-secondary font-medium">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-ortho rounded-full"></span>
                      <span>Knee &amp; Hip Joint Preservation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-ortho rounded-full"></span>
                      <span>Total Knee &amp; Hip Replacement</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-ortho rounded-full"></span>
                      <span>Arthroscopic ACL &amp; Meniscus Repair</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-ortho rounded-full"></span>
                      <span>Fracture Trauma &amp; Sports Recovery</span>
                    </div>
                  </div>
                </div>

                {/* Actions (Burgundy Action Button) */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                  <a
                    href={getWhatsAppUrl(vijayanand.whatsAppMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-ortho hover:bg-ortho-deep text-white px-6 py-3.5 text-xs font-bold tracking-wide transition-colors text-center w-full sm:w-auto"
                  >
                    <MessageSquare size={16} />
                    <span>Book with Dr. Vijayanand</span>
                  </a>

                  <Link
                    href={`/doctors/${vijayanand.slug}`}
                    className="inline-flex items-center justify-center gap-1.5 bg-white hover:bg-ivory text-primary border border-border px-5 py-3.5 text-xs font-bold transition-colors text-center w-full sm:w-auto"
                  >
                    <span>View Full Credentials</span>
                    <ArrowRight size={14} className="text-ortho" />
                  </Link>
                </div>

              </div>

            </div>
          </div>

          {/* DOCTOR 2: DR. RUTUJA LOKHANDE (Green Identity) */}
          <div className="bg-ivory border border-skin-border p-6 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Portrait (4 cols) */}
              <div className="lg:col-span-4">
                <div className="relative aspect-[3/4] w-full border border-border overflow-hidden bg-white">
                  <Image
                    src={rutuja.image}
                    alt={rutuja.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 35vw, 400px"
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-white px-3 py-1 border border-skin-border text-[11px] font-bold text-skin-deep uppercase tracking-wider">
                    Dermatologist &amp; Trichologist
                  </div>
                </div>
                <div className="mt-3 p-3 bg-white border border-border text-xs text-secondary">
                  <span className="font-bold text-primary block">Sinhagad Road Clinic, Pune</span>
                  <span>Consultations by prior appointment</span>
                </div>
              </div>

              {/* Bio & Details (8 cols) */}
              <div className="lg:col-span-8 space-y-5">
                
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-skin-deep bg-skin-light px-2.5 py-1 border border-skin-border inline-block">
                    Dermatology &amp; Trichology
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-primary mt-2">
                    {rutuja.name}
                  </h3>
                  <p className="text-sm font-semibold text-secondary mt-0.5">
                    {rutuja.title}
                  </p>
                </div>

                {/* Qualifications Pill Grid */}
                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-primary mb-2">
                    Verified Medical Qualifications:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {rutuja.qualifications.map((qual, idx) => (
                      <span
                        key={idx}
                        className="bg-white text-primary text-xs font-semibold px-3 py-1 border border-border"
                      >
                        {qual}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bio text */}
                <p className="text-secondary text-sm sm:text-base leading-relaxed">
                  {rutuja.shortBio}
                </p>

                {/* Areas of Practice highlight */}
                <div className="bg-white p-4 sm:p-5 border border-skin-border text-xs space-y-2.5">
                  <span className="font-bold text-skin-deep block text-[11px] uppercase tracking-wider">
                    Key Clinical Competencies:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-secondary font-medium">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-skin rounded-full"></span>
                      <span>Clinical Dermatology &amp; Skin Infections</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-skin rounded-full"></span>
                      <span>Acne, Melasma &amp; Pigmentation Care</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-skin rounded-full"></span>
                      <span>Hair Loss Diagnostics &amp; Trichology</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-skin rounded-full"></span>
                      <span>Medical Peels &amp; Minor Procedures</span>
                    </div>
                  </div>
                </div>

                {/* Actions (Green Action Button) */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                  <a
                    href={getWhatsAppUrl(rutuja.whatsAppMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-skin hover:bg-skin-deep text-white px-6 py-3.5 text-xs font-bold tracking-wide transition-colors text-center w-full sm:w-auto"
                  >
                    <MessageSquare size={16} />
                    <span>Book with Dr. Rutuja</span>
                  </a>

                  <Link
                    href={`/doctors/${rutuja.slug}`}
                    className="inline-flex items-center justify-center gap-1.5 bg-white hover:bg-ivory text-primary border border-border px-5 py-3.5 text-xs font-bold transition-colors text-center w-full sm:w-auto"
                  >
                    <span>View Full Credentials</span>
                    <ArrowRight size={14} className="text-skin" />
                  </Link>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
