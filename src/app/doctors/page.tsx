import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { clinicConfig, getWhatsAppUrl } from "@/data/clinic";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { BreadcrumbJsonLd } from "@/components/common/JsonLd";
import { MessageSquare, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Specialist Doctors | Dr. Vijayanand Lokhande & Dr. Rutuja Lokhande",
  description:
    "Meet our specialist doctors in Sinhagad Road, Pune: Dr. Vijayanand Lokhande (Orthopaedic Surgeon) and Dr. Rutuja Lokhande (Dermatologist & Trichologist).",
  alternates: {
    canonical: "/doctors",
  },
};

export default function DoctorsPage() {
  const { vijayanand, rutuja } = clinicConfig.doctors;

  return (
    <div className="py-8 lg:py-12 bg-surface-warm">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Specialist Doctors", url: "/doctors" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <Breadcrumbs items={[{ label: "Specialist Doctors" }]} />

        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-clinic bg-clinic-light px-3 py-1 border border-clinic-border inline-block">
            Medical Faculty
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-primary tracking-tight mt-2">
            Specialist Doctors at Dr. Lokhande’s Clinic
          </h1>
          <p className="text-secondary text-base sm:text-lg mt-3 leading-relaxed">
            Our clinic brings together dedicated specialists in Orthopaedic Surgery and Clinical Dermatology, providing personalized diagnosis and evidence-guided treatments in Sinhagad Road, Pune.
          </p>
          <div className="w-16 h-[2px] bg-clinic mt-4"></div>
        </div>

        {/* Doctors Grid */}
        <div className="space-y-16">
          
          {/* Dr. Vijayanand Lokhande */}
          <article className="border-2 border-ortho-border bg-[#FAF8F9] p-6 sm:p-10 shadow-card">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-4">
                <div className="relative aspect-[3/4] w-full border-2 border-white overflow-hidden bg-white shadow-card">
                  <Image
                    src={vijayanand.image}
                    alt={vijayanand.imageAlt}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-white px-3 py-1 border border-ortho-border text-[11px] font-bold text-ortho-deep uppercase tracking-wider shadow-subtle">
                    Orthopaedic Surgeon
                  </div>
                </div>
              </div>

              <div className="lg:col-span-8 space-y-5">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-ortho-deep bg-ortho-light px-2.5 py-1 border border-ortho-border inline-block">
                    Orthopaedics, Joint Replacement &amp; Arthroscopy
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-primary mt-2">
                    {vijayanand.name}
                  </h2>
                  <p className="text-sm font-semibold text-secondary mt-0.5">
                    {vijayanand.title}
                  </p>
                </div>

                {/* Qualifications */}
                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-primary mb-2">
                    Qualifications &amp; Fellowships:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {vijayanand.qualifications.map((q, i) => (
                      <span key={i} className="bg-white border border-border px-3 py-1 text-xs font-bold text-primary shadow-subtle">
                        {q}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-secondary text-sm sm:text-base leading-relaxed">
                  {vijayanand.shortBio}
                </p>

                {/* Expertise Highlights */}
                <div className="border border-ortho-border bg-white p-4 text-xs space-y-2 shadow-subtle">
                  <span className="block text-xs font-bold uppercase tracking-wider text-ortho-deep mb-2">
                    Key Clinical Focus Areas:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-secondary font-medium">
                    {vijayanand.areasOfExpertise.slice(0, 6).map((area, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-ortho rounded-full"></span>
                        <span>{area}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-3 pt-3">
                  <a
                    href={getWhatsAppUrl(vijayanand.whatsAppMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#128C7E] hover:bg-[#0C6B60] text-white px-6 py-3 text-xs font-bold tracking-wide transition-all shadow-card hover:shadow-elevated"
                  >
                    <MessageSquare size={15} />
                    <span>Book with Dr. Vijayanand</span>
                  </a>

                  <Link
                    href={`/doctors/${vijayanand.slug}`}
                    className="inline-flex items-center gap-1.5 bg-white hover:bg-surface-warm text-primary border border-border px-5 py-3 text-xs font-bold transition-all shadow-subtle hover:border-ortho"
                  >
                    <span>Read Full Profile &amp; Procedures</span>
                    <ArrowRight size={13} className="text-ortho" />
                  </Link>
                </div>
              </div>
            </div>
          </article>

          {/* Dr. Rutuja Lokhande */}
          <article className="border-2 border-skin-border bg-[#F8FAF7] p-6 sm:p-10 shadow-card">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-4">
                <div className="relative aspect-[3/4] w-full border-2 border-white overflow-hidden bg-white shadow-card">
                  <Image
                    src={rutuja.image}
                    alt={rutuja.imageAlt}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-white px-3 py-1 border border-skin-border text-[11px] font-bold text-skin-deep uppercase tracking-wider shadow-subtle">
                    Dermatologist &amp; Trichologist
                  </div>
                </div>
              </div>

              <div className="lg:col-span-8 space-y-5">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-skin-deep bg-skin-light px-2.5 py-1 border border-skin-border inline-block">
                    Dermatology, Trichology &amp; Cosmetology
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-primary mt-2">
                    {rutuja.name}
                  </h2>
                  <p className="text-sm font-semibold text-secondary mt-0.5">
                    {rutuja.title}
                  </p>
                </div>

                {/* Qualifications */}
                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-primary mb-2">
                    Medical Qualifications:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {rutuja.qualifications.map((q, i) => (
                      <span key={i} className="bg-white border border-border px-3 py-1 text-xs font-bold text-primary shadow-subtle">
                        {q}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-secondary text-sm sm:text-base leading-relaxed">
                  {rutuja.shortBio}
                </p>

                {/* Expertise Highlights */}
                <div className="border border-skin-border bg-white p-4 text-xs space-y-2 shadow-subtle">
                  <span className="block text-xs font-bold uppercase tracking-wider text-skin-deep mb-2">
                    Key Clinical Focus Areas:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-secondary font-medium">
                    {rutuja.areasOfExpertise.slice(0, 6).map((area, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-skin rounded-full"></span>
                        <span>{area}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-3 pt-3">
                  <a
                    href={getWhatsAppUrl(rutuja.whatsAppMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#128C7E] hover:bg-[#0C6B60] text-white px-6 py-3 text-xs font-bold tracking-wide transition-all shadow-card hover:shadow-elevated"
                  >
                    <MessageSquare size={15} />
                    <span>Book with Dr. Rutuja</span>
                  </a>

                  <Link
                    href={`/doctors/${rutuja.slug}`}
                    className="inline-flex items-center gap-1.5 bg-white hover:bg-surface-warm text-primary border border-border px-5 py-3 text-xs font-bold transition-all shadow-subtle hover:border-skin"
                  >
                    <span>Read Full Profile &amp; Procedures</span>
                    <ArrowRight size={13} className="text-skin" />
                  </Link>
                </div>
              </div>
            </div>
          </article>

        </div>
      </div>
    </div>
  );
}
