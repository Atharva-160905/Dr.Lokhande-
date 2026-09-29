import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { clinicConfig, getWhatsAppUrl } from "@/data/clinic";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { PhysicianJsonLd, BreadcrumbJsonLd } from "@/components/common/JsonLd";
import { MessageSquare, MapPin, Clock, ArrowRight, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Dr. Vijayanand Lokhande | Consultant Orthopedic Surgeon Sinhagad Road, Pune",
  description:
    "Consult Dr. Vijayanand Lokhande (MBBS, MS Ortho, DNB, FASM, FJRS) for knee replacement, hip replacement, arthroscopy, sports injuries, and fracture care in Sinhagad Road, Pune.",
  alternates: {
    canonical: "/doctors/dr-vijayanand-lokhande",
  },
};

export default function DrVijayanandPage() {
  const doctor = clinicConfig.doctors.vijayanand;

  return (
    <div className="bg-white">
      <PhysicianJsonLd doctorKey="vijayanand" />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Doctors", url: "/doctors" },
          { name: doctor.name, url: `/doctors/${doctor.slug}` },
        ]}
      />

      {/* Hero Profile (Pure White) */}
      <section className="py-8 lg:py-12 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Doctors", href: "/doctors" },
              { label: doctor.name },
            ]}
          />

          <div className="border border-ortho-border bg-ortho-light p-6 sm:p-10 mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Left Portrait Column (4 cols) */}
              <div className="lg:col-span-4 space-y-4">
                <div className="relative aspect-[3/4] w-full border border-ortho-border overflow-hidden bg-white">
                  <Image
                    src={doctor.image}
                    alt={doctor.imageAlt}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-white px-2.5 py-1 border border-ortho-border text-[11px] font-bold text-ortho-deep uppercase tracking-wider">
                    Orthopaedic Surgeon
                  </div>
                </div>

                {/* Consultation Quick Card */}
                <div className="bg-white border border-ortho-border p-4 text-xs space-y-2 text-secondary">
                  <div className="flex items-center gap-2 text-primary font-bold">
                    <Clock size={14} className="text-ortho" />
                    <span>Consultation Timings</span>
                  </div>
                  <p className="font-medium text-primary">{clinicConfig.timings.summary}</p>
                  <div className="pt-2 border-t border-border flex items-center gap-2">
                    <MapPin size={14} className="text-ortho" />
                    <span>Sinhagad Road Clinic, Pune</span>
                  </div>
                </div>
              </div>

              {/* Right Bio Column (8 cols) */}
              <div className="lg:col-span-8 space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-ortho-deep bg-white px-2.5 py-1 border border-ortho-border inline-block">
                    Orthopaedic Surgery &amp; Joint Care
                  </span>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-primary mt-2 tracking-tight">
                    {doctor.name}
                  </h1>
                  <p className="text-base sm:text-lg font-semibold text-secondary mt-1">
                    {doctor.designation}
                  </p>
                </div>

                {/* Verified Credentials */}
                <div className="space-y-2">
                  <span className="block text-xs font-bold uppercase tracking-wider text-primary">
                    Qualifications &amp; Advanced Fellowships:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {doctor.qualifications.map((qual, idx) => (
                      <span
                        key={idx}
                        className="bg-white border border-ortho-border text-primary text-xs font-bold px-3 py-1.5"
                      >
                        {qual}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Biography Paragraphs */}
                <div className="space-y-3 text-secondary text-sm sm:text-base leading-relaxed">
                  {doctor.fullBio.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>

                {/* Primary WhatsApp Action (Orthopaedics Burgundy) */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                  <a
                    href={getWhatsAppUrl(doctor.whatsAppMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 bg-ortho hover:bg-ortho-deep text-white px-7 py-3.5 text-sm font-semibold tracking-wide transition-colors text-center w-full sm:w-auto"
                  >
                    <MessageSquare size={16} />
                    <span>Book with Dr. Vijayanand Lokhande</span>
                  </a>

                  <Link
                    href="/specialities/orthopaedics"
                    className="inline-flex items-center justify-center gap-1.5 text-xs font-bold text-ortho-deep hover:text-primary transition-colors bg-white border border-ortho-border px-5 py-3.5 text-center w-full sm:w-auto"
                  >
                    <span>View Orthopaedics Department</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Clinical Areas of Expertise (Light Burgundy Section) */}
      <section className="py-14 bg-ortho-light border-b border-ortho-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-ortho-deep block">
              Specialized Competence
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-primary mt-1">
              Areas of Orthopaedic Expertise
            </h2>
            <p className="text-secondary text-sm mt-1">
              Structured clinical assessment and evidence-based treatment modalities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {doctor.areasOfExpertise.map((item, index) => (
              <div key={index} className="border border-ortho-border bg-white p-5 space-y-1">
                <div className="w-2 h-2 bg-ortho mb-2"></div>
                <h3 className="font-bold text-primary text-sm">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Conditions Evaluated & Treated (Pure White) */}
      <section className="py-14 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-secondary block">
              Patient Care
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-primary mt-1">
              Orthopaedic Conditions Evaluated
            </h2>
            <p className="text-secondary text-sm mt-1">
              Common joint, bone, and soft-tissue conditions assessed in clinic.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {doctor.conditionsTreated.map((condition, index) => (
              <div key={index} className="flex items-start gap-3 p-3.5 bg-ivory border border-border text-xs sm:text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-ortho mt-1.5 flex-shrink-0"></span>
                <span className="text-secondary font-medium">{condition}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Procedures & Surgical Care (Light Burgundy Section) */}
      <section className="py-14 bg-ortho-light border-b border-ortho-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-ortho-deep block">
              Clinical Procedures &amp; Surgery
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-primary mt-1">
              Orthopaedic Procedures &amp; Surgical Care
            </h2>
            <p className="text-secondary text-sm mt-1">
              Procedures are offered following thorough clinical and radiologic evaluation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {doctor.procedures.map((proc, index) => (
              <div key={index} className="border border-ortho-border bg-white p-4 flex items-center gap-3">
                <ShieldCheck size={16} className="text-ortho flex-shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-primary">{proc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Bottom Consultation Booking Section (Pure White) */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-ortho-border bg-ivory p-8 sm:p-12 text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-ortho-deep block">
              Orthopaedic Consultations
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-primary">
              Schedule a Consultation with Dr. Vijayanand Lokhande
            </h2>
            <p className="text-secondary text-sm max-w-xl mx-auto">
              For evaluation of knee pain, joint stiffness, sports injuries, or fracture follow-ups at our Sinhagad Road clinic.
            </p>
            <div className="pt-2">
              <a
                href={getWhatsAppUrl(doctor.whatsAppMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-ortho hover:bg-ortho-deep text-white px-7 py-3.5 text-sm font-semibold tracking-wide transition-colors"
              >
                <MessageSquare size={16} />
                <span>Book on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
