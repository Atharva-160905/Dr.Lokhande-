import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { clinicConfig, getWhatsAppUrl } from "@/data/clinic";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { BreadcrumbJsonLd } from "@/components/common/JsonLd";
import { MessageSquare, ArrowRight, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "About Clinic | Dr. Lokhande’s Skin & Orthopaedic Speciality Clinic",
  description:
    "Learn about Dr. Lokhande’s Skin & Orthopaedic Speciality Clinic in Sinhagad Road, Pune. Dedicated specialist consultations in Dermatology, Orthopaedics, and Rehabilitation.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  const { vijayanand, rutuja } = clinicConfig.doctors;

  return (
    <div className="bg-white">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "About Clinic", url: "/about" },
        ]}
      />

      {/* Hero Section - White */}
      <div className="py-8 lg:py-12 border-b border-border bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "About Clinic" }]} />

          <section className="max-w-3xl mt-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-clinic block">
              About Our Practice
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-primary tracking-tight mt-1">
              Dr. Lokhande’s Skin &amp; Orthopaedic Speciality Clinic
            </h1>
            <p className="text-secondary text-base sm:text-lg mt-3 leading-relaxed">
              A dedicated outpatient specialist practice established in Sinhagad Road, Pune, providing focused clinical consultations in Dermatology and Orthopaedic Surgery.
            </p>
          </section>
        </div>
      </div>

      {/* Story / Overview Section - Warm Ivory */}
      <section className="py-12 lg:py-16 bg-ivory border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-clinic block">
                Practice Philosophy
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-primary">
                A Specialist-Led Practice Model
              </h2>
              <p className="text-secondary text-sm sm:text-base leading-relaxed">
                Modern healthcare is often fragmented between overcrowded general hospitals and non-specialized general practitioners. Dr. Lokhande’s Clinic was designed to offer an accessible, high-standard outpatient environment where patients consult directly with qualified specialists.
              </p>
              <p className="text-secondary text-sm sm:text-base leading-relaxed">
                Whether seeking evaluation for severe knee arthritis, arthroscopic repair of sports injuries, persistent skin disorders, or patterned hair loss, every patient receives a thorough clinical consultation, clear diagnostic explanation, and structured treatment pathway.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[16/10] w-full border border-border overflow-hidden bg-white">
                <Image
                  src="/images/clinic/reception.jpg"
                  alt="Dr. Lokhande’s Clinic Interior Reception Sinhagad Road Pune"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Clinical Philosophy Pillars - White */}
      <section className="py-12 lg:py-16 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-clinic block">
              Core Principles
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-primary mt-1">
              Our Clinical Standards
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border-l-2 border-clinic border-t border-r border-b border-border p-6 bg-white space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-clinic">01</span>
              <h3 className="font-serif text-lg font-bold text-primary">Diagnostic Clarity</h3>
              <p className="text-xs text-secondary leading-relaxed">
                Prioritizing accurate physical examination and diagnostic assessment before formulating any procedural or medical intervention.
              </p>
            </div>

            <div className="border-l-2 border-skin border-t border-r border-b border-border p-6 bg-white space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-skin">02</span>
              <h3 className="font-serif text-lg font-bold text-primary">Ethical &amp; Evidence-Guided Care</h3>
              <p className="text-xs text-secondary leading-relaxed">
                Recommending only medically appropriate treatments and surgeries based on clinical evidence, avoiding unnecessary interventions.
              </p>
            </div>

            <div className="border-l-2 border-ortho border-t border-r border-b border-border p-6 bg-white space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-ortho">03</span>
              <h3 className="font-serif text-lg font-bold text-primary">Patient Education &amp; Empowerment</h3>
              <p className="text-xs text-secondary leading-relaxed">
                Explaining the underlying pathology in understandable terms so patients can actively participate in their recovery and health maintenance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Overview Section - Warm Ivory */}
      <section className="py-12 lg:py-16 bg-ivory border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-clinic block">
              Practicing Consultants
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-primary mt-1">
              Medical Leadership
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Dr. Vijayanand */}
            <div className="border border-ortho-border p-6 bg-white flex flex-col justify-between space-y-4">
              <div className="flex items-start gap-4">
                <div className="relative w-20 h-24 border border-ortho-border overflow-hidden bg-ortho-light flex-shrink-0">
                  <Image
                    src={vijayanand.image}
                    alt={vijayanand.name}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-semibold text-ortho uppercase tracking-wider">Orthopaedics</span>
                  <h3 className="font-serif text-lg font-bold text-primary">{vijayanand.name}</h3>
                  <p className="text-xs text-secondary">{vijayanand.title}</p>
                  <p className="text-[11px] text-secondary/80">{vijayanand.qualifications.join(" • ")}</p>
                </div>
              </div>
              <div className="pt-3 border-t border-ortho-border flex justify-between items-center">
                <Link
                  href={`/doctors/${vijayanand.slug}`}
                  className="text-xs font-semibold text-ortho hover:text-ortho-deep inline-flex items-center gap-1"
                >
                  <span>View Full Profile</span>
                  <ArrowRight size={12} />
                </Link>
                <a
                  href={getWhatsAppUrl(vijayanand.whatsAppMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-ortho hover:underline"
                >
                  Book Appointment
                </a>
              </div>
            </div>

            {/* Dr. Rutuja */}
            <div className="border border-skin-border p-6 bg-white flex flex-col justify-between space-y-4">
              <div className="flex items-start gap-4">
                <div className="relative w-20 h-24 border border-skin-border overflow-hidden bg-skin-light flex-shrink-0">
                  <Image
                    src={rutuja.image}
                    alt={rutuja.name}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-semibold text-skin uppercase tracking-wider">Dermatology</span>
                  <h3 className="font-serif text-lg font-bold text-primary">{rutuja.name}</h3>
                  <p className="text-xs text-secondary">{rutuja.title}</p>
                  <p className="text-[11px] text-secondary/80">{rutuja.qualifications.join(" • ")}</p>
                </div>
              </div>
              <div className="pt-3 border-t border-skin-border flex justify-between items-center">
                <Link
                  href={`/doctors/${rutuja.slug}`}
                  className="text-xs font-semibold text-skin hover:text-skin-deep inline-flex items-center gap-1"
                >
                  <span>View Full Profile</span>
                  <ArrowRight size={12} />
                </Link>
                <a
                  href={getWhatsAppUrl(rutuja.whatsAppMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-skin hover:underline"
                >
                  Book Appointment
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & CTA - White */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 border border-clinic-border bg-clinic-light p-8 sm:p-10 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-primary">
            Visit Dr. Lokhande’s Clinic
          </h2>
          <p className="text-secondary text-sm max-w-lg mx-auto leading-relaxed">
            Conveniently located at Monte Rosa, Hingne Khurd, Sinhagad Road, Pune with morning and evening consultation hours.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-clinic hover:bg-clinic-deep text-white px-5 py-3 text-xs font-semibold tracking-wide transition-colors"
            >
              <MessageSquare size={15} />
              <span>Book Appointment on WhatsApp</span>
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 bg-white hover:bg-ivory text-primary border border-border px-5 py-3 text-xs font-medium transition-colors"
            >
              <MapPin size={14} className="text-clinic" />
              <span>View Contact &amp; Directions</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
