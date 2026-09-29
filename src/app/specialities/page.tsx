import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { clinicConfig } from "@/data/clinic";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { BreadcrumbJsonLd } from "@/components/common/JsonLd";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Clinical Specialities | Dermatology, Orthopaedics & Physiotherapy",
  description:
    "Explore our clinical specialities in Sinhagad Road, Pune: Dermatology & Trichology, Orthopaedic Surgery & Joint Care, and Physiotherapy & Rehabilitation.",
  alternates: {
    canonical: "/specialities",
  },
};

export default function SpecialitiesOverviewPage() {
  const { dermatology, orthopaedics, physiotherapy } = clinicConfig.specialties;

  return (
    <div className="bg-white">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Clinical Specialities", url: "/specialities" },
        ]}
      />

      {/* Hero Section - White */}
      <div className="py-8 lg:py-12 border-b border-border bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Clinical Specialities" }]} />

          <div className="max-w-3xl mt-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-clinic block">
              Clinical Departments
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-primary tracking-tight mt-1">
              Clinical Specialities at Dr. Lokhande’s Clinic
            </h1>
            <p className="text-secondary text-base sm:text-lg mt-3 leading-relaxed">
              Our outpatient practice is organized into focused medical departments led by experienced consultants, offering clear clinical evaluation and evidence-based treatments.
            </p>
          </div>
        </div>
      </div>

      {/* Specialities List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="space-y-12">
          
          {/* Dermatology - Green Accent Card */}
          <section className="border border-skin-border bg-skin-light flex flex-col">
            <div className="h-1 w-full bg-skin"></div>
            <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5">
                <div className="relative aspect-[16/10] w-full border border-skin-border overflow-hidden bg-white">
                  <Image
                    src={dermatology.image}
                    alt={dermatology.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 450px"
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-white px-2.5 py-1 border border-skin-border text-[11px] font-semibold text-skin uppercase tracking-wider">
                    Dermatology &amp; Trichology
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-4">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-skin">
                    Led by {dermatology.leadDoctor.name}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-primary mt-1">
                    {dermatology.name}
                  </h2>
                  <p className="text-sm text-secondary mt-1 leading-relaxed">
                    {dermatology.summary}
                  </p>
                </div>

                <div className="space-y-1.5 pt-1">
                  {dermatology.categories.map((cat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-secondary">
                      <span className="w-1.5 h-1.5 rounded-full bg-skin mt-2 flex-shrink-0"></span>
                      <span><strong className="text-primary font-medium">{cat.title}:</strong> {cat.items.slice(0, 3).join(", ")}...</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <Link
                    href={`/specialities/${dermatology.slug}`}
                    className="inline-flex items-center gap-2 bg-skin hover:bg-skin-deep text-white px-5 py-2.5 text-xs font-semibold tracking-wide transition-colors"
                  >
                    <span>View Dermatology Offerings &amp; Services</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Orthopaedics - Burgundy Accent Card */}
          <section className="border border-ortho-border bg-ortho-light flex flex-col">
            <div className="h-1 w-full bg-ortho"></div>
            <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5">
                <div className="relative aspect-[16/10] w-full border border-ortho-border overflow-hidden bg-white">
                  <Image
                    src={orthopaedics.image}
                    alt={orthopaedics.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 450px"
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-white px-2.5 py-1 border border-ortho-border text-[11px] font-semibold text-ortho uppercase tracking-wider">
                    Orthopaedic Surgery
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-4">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-ortho">
                    Led by {orthopaedics.leadDoctor.name}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-primary mt-1">
                    {orthopaedics.name}
                  </h2>
                  <p className="text-sm text-secondary mt-1 leading-relaxed">
                    {orthopaedics.summary}
                  </p>
                </div>

                <div className="space-y-1.5 pt-1">
                  {orthopaedics.categories.map((cat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-secondary">
                      <span className="w-1.5 h-1.5 rounded-full bg-ortho mt-2 flex-shrink-0"></span>
                      <span><strong className="text-primary font-medium">{cat.title}:</strong> {cat.items.slice(0, 3).join(", ")}...</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <Link
                    href={`/specialities/${orthopaedics.slug}`}
                    className="inline-flex items-center gap-2 bg-ortho hover:bg-ortho-deep text-white px-5 py-2.5 text-xs font-semibold tracking-wide transition-colors"
                  >
                    <span>View Orthopaedic Offerings &amp; Services</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Physiotherapy - Clinic Blue Card */}
          <section className="border border-clinic-border bg-clinic-light flex flex-col">
            <div className="h-1 w-full bg-clinic"></div>
            <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5">
                <div className="relative aspect-[16/10] w-full border border-clinic-border overflow-hidden bg-white">
                  <Image
                    src={physiotherapy.image}
                    alt={physiotherapy.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 450px"
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-white px-2.5 py-1 border border-clinic-border text-[11px] font-semibold text-clinic uppercase tracking-wider">
                    Rehabilitation &amp; Recovery
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-4">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-clinic">
                    Integrated Rehabilitation Support
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-primary mt-1">
                    {physiotherapy.name}
                  </h2>
                  <p className="text-sm text-secondary mt-1 leading-relaxed">
                    {physiotherapy.summary}
                  </p>
                </div>

                <div className="space-y-1.5 pt-1">
                  {physiotherapy.categories.map((cat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-secondary">
                      <span className="w-1.5 h-1.5 rounded-full bg-clinic mt-2 flex-shrink-0"></span>
                      <span><strong className="text-primary font-medium">{cat.title}:</strong> {cat.items.slice(0, 3).join(", ")}...</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <Link
                    href={`/specialities/${physiotherapy.slug}`}
                    className="inline-flex items-center gap-2 bg-clinic hover:bg-clinic-deep text-white px-5 py-2.5 text-xs font-semibold tracking-wide transition-colors"
                  >
                    <span>View Physiotherapy &amp; Recovery Details</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
