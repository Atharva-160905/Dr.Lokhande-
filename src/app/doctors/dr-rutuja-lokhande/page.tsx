import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { clinicConfig, getWhatsAppUrl } from "@/data/clinic";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { PhysicianJsonLd, BreadcrumbJsonLd } from "@/components/common/JsonLd";
import { MessageSquare, MapPin, Clock, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Dr. Rutuja Lokhande | Consultant Dermatologist & Trichologist Sinhagad Road, Pune",
  description:
    "Consult Dr. Rutuja Lokhande (MBBS, DDVL, DNB) for clinical skin conditions, hair loss treatments, acne, pigmentation, eczema, and procedural dermatology in Sinhagad Road, Pune.",
  alternates: {
    canonical: "/doctors/dr-rutuja-lokhande",
  },
};

export default function DrRutujaPage() {
  const doctor = clinicConfig.doctors.rutuja;

  return (
    <div className="bg-white">
      <PhysicianJsonLd doctorKey="rutuja" />
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

          <div className="border border-skin-border bg-skin-light p-6 sm:p-10 mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Left Portrait Column (4 cols) */}
              <div className="lg:col-span-4 space-y-4">
                <div className="relative aspect-[3/4] w-full border border-skin-border overflow-hidden bg-white">
                  <Image
                    src={doctor.image}
                    alt={doctor.imageAlt}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-white px-2.5 py-1 border border-skin-border text-[11px] font-bold text-skin-deep uppercase tracking-wider">
                    Dermatologist &amp; Trichologist
                  </div>
                </div>

                {/* Consultation Quick Card */}
                <div className="bg-white border border-skin-border p-4 text-xs space-y-2 text-secondary">
                  <div className="flex items-center gap-2 text-primary font-bold">
                    <Clock size={14} className="text-skin" />
                    <span>Consultation Timings</span>
                  </div>
                  <p className="font-medium text-primary">{clinicConfig.timings.summary}</p>
                  <div className="pt-2 border-t border-border flex items-center gap-2">
                    <MapPin size={14} className="text-skin" />
                    <span>Sinhagad Road Clinic, Pune</span>
                  </div>
                </div>
              </div>

              {/* Right Bio Column (8 cols) */}
              <div className="lg:col-span-8 space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-skin-deep bg-white px-2.5 py-1 border border-skin-border inline-block">
                    Dermatology, Trichology &amp; Cosmetology
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
                    Medical Qualifications:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {doctor.qualifications.map((qual, idx) => (
                      <span
                        key={idx}
                        className="bg-white border border-skin-border text-primary text-xs font-bold px-3 py-1.5"
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

                {/* Primary WhatsApp Action (Dermatology Green) */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                  <a
                    href={getWhatsAppUrl(doctor.whatsAppMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 bg-skin hover:bg-skin-deep text-white px-7 py-3.5 text-sm font-semibold tracking-wide transition-colors text-center w-full sm:w-auto"
                  >
                    <MessageSquare size={16} />
                    <span>Book with Dr. Rutuja Lokhande</span>
                  </a>

                  <Link
                    href="/specialities/dermatology"
                    className="inline-flex items-center justify-center gap-1.5 text-xs font-bold text-skin-deep hover:text-primary transition-colors bg-white border border-skin-border px-5 py-3.5 text-center w-full sm:w-auto"
                  >
                    <span>View Dermatology Department</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Clinical Areas of Expertise (Light Green Section) */}
      <section className="py-14 bg-skin-light border-b border-skin-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-skin-deep block">
              Clinical Competence
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-primary mt-1">
              Dermatology &amp; Trichology Expertise
            </h2>
            <p className="text-secondary text-sm mt-1">
              Comprehensive clinical evaluation for skin disorders, scalp pathologies, and procedural treatments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {doctor.areasOfExpertise.map((item, index) => (
              <div key={index} className="border border-skin-border bg-white p-5 space-y-1">
                <div className="w-2 h-2 bg-skin mb-2"></div>
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
              Skin, Hair &amp; Scalp Conditions Evaluated
            </h2>
            <p className="text-secondary text-sm mt-1">
              Common dermatological and trichological concerns assessed in clinic.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {doctor.conditionsTreated.map((condition, index) => (
              <div key={index} className="flex items-start gap-3 p-3.5 bg-ivory border border-border text-xs sm:text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-skin mt-1.5 flex-shrink-0"></span>
                <span className="text-secondary font-medium">{condition}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Procedural & Aesthetic Dermatology (Light Green Section) */}
      <section className="py-14 bg-skin-light border-b border-skin-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-skin-deep block">
              In-Clinic Procedures
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-primary mt-1">
              Dermatological Procedures &amp; Interventions
            </h2>
            <p className="text-secondary text-sm mt-1">
              Sterile minor procedures and evidence-backed aesthetic treatments performed under medical supervision.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {doctor.procedures.map((proc, index) => (
              <div key={index} className="border border-skin-border bg-white p-4 flex items-center gap-3">
                <CheckCircle2 size={16} className="text-skin flex-shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-primary">{proc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Bottom Consultation Booking Section (Pure White) */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-skin-border bg-ivory p-8 sm:p-12 text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-skin-deep block">
              Dermatology Consultations
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-primary">
              Schedule a Consultation with Dr. Rutuja Lokhande
            </h2>
            <p className="text-secondary text-sm max-w-xl mx-auto">
              For evaluation of skin rashes, acne, pigmentation, hair fall, or minor skin procedures at our Sinhagad Road clinic.
            </p>
            <div className="pt-2">
              <a
                href={getWhatsAppUrl(doctor.whatsAppMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-skin hover:bg-skin-deep text-white px-7 py-3.5 text-sm font-semibold tracking-wide transition-colors"
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
