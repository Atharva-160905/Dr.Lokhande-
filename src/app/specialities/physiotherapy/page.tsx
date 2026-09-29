import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { clinicConfig, getWhatsAppUrl } from "@/data/clinic";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { BreadcrumbJsonLd } from "@/components/common/JsonLd";
import { MessageSquare, ArrowRight, Activity } from "lucide-react";

export const metadata: Metadata = {
  title: "Physiotherapy & Rehabilitation in Sinhagad Road, Pune",
  description:
    "Integrated physiotherapy and physical rehabilitation support for post-operative recovery, joint replacement rehab, sports injury rehab, and mobility recovery in Sinhagad Road, Pune.",
  alternates: {
    canonical: "/specialities/physiotherapy",
  },
};

export default function PhysiotherapyPage() {
  const spec = clinicConfig.specialties.physiotherapy;

  return (
    <div className="bg-white">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Specialities", url: "/specialities" },
          { name: "Physiotherapy & Rehabilitation", url: "/specialities/physiotherapy" },
        ]}
      />

      {/* Hero Section - White */}
      <div className="py-8 lg:py-12 border-b border-border bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Specialities", href: "/specialities" },
              { label: "Physiotherapy & Rehabilitation" },
            ]}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mt-6">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-sage block">
                Integrated Physical Rehabilitation
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-primary tracking-tight">
                Physiotherapy &amp; Rehabilitation in Sinhagad Road, Pune
              </h1>
              <p className="text-secondary text-base sm:text-lg leading-relaxed">
                Structured physical therapy and functional exercise programs supporting post-surgical healing, joint replacement rehabilitation, sports injury recovery, and chronic pain management.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={getWhatsAppUrl(spec.whatsAppMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-clinic hover:bg-clinic-deep text-white px-5 py-3 text-xs font-semibold tracking-wide transition-colors"
                >
                  <MessageSquare size={15} />
                  <span>Enquire on WhatsApp</span>
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 bg-white text-primary border border-border px-4 py-3 text-xs font-medium hover:bg-ivory transition-colors"
                >
                  <span>Clinic Location &amp; Hours</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[16/10] w-full border border-clinic-border overflow-hidden bg-clinic-light">
                <Image
                  src={spec.image}
                  alt={spec.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 1: Post-Surgical Recovery & Protocols - Light Blue */}
      <section className="py-12 lg:py-16 bg-clinic-light border-b border-clinic-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-clinic block">
              Surgical Aftercare
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-primary mt-1">
              Post-Surgical Rehabilitation Protocols
            </h2>
            <p className="text-secondary text-sm mt-1 leading-relaxed">
              Carefully staged exercise protocols coordinated directly with orthopaedic surgeon recommendations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-clinic-border bg-white overflow-hidden flex flex-col">
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-clinic-light">
                <Image
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=600&auto=format&fit=crop"
                  alt="Early mobilization physical therapy session"
                  fill
                  sizes="(max-width: 768px) 100vw, 350px"
                  className="object-cover"
                />
              </div>
              <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-clinic uppercase tracking-wider block">Phase 1</span>
                  <h3 className="font-serif text-lg font-bold text-primary">Early Mobilization</h3>
                  <p className="text-xs text-secondary leading-relaxed mt-1">
                    Swelling management, gentle passive and active-assisted range-of-motion exercises, and initial safe weight-bearing education.
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-clinic-border bg-white overflow-hidden flex flex-col">
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-clinic-light">
                <Image
                  src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600&auto=format&fit=crop"
                  alt="Strengthening and gait training exercise"
                  fill
                  sizes="(max-width: 768px) 100vw, 350px"
                  className="object-cover"
                />
              </div>
              <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-clinic uppercase tracking-wider block">Phase 2</span>
                  <h3 className="font-serif text-lg font-bold text-primary">Strengthening &amp; Gait</h3>
                  <p className="text-xs text-secondary leading-relaxed mt-1">
                    Progressive resistance training for supporting musculature (quadriceps, hamstrings, gluteals), balance drills, and correct gait training.
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-clinic-border bg-white overflow-hidden flex flex-col">
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-clinic-light">
                <Image
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600&auto=format&fit=crop"
                  alt="Functional independence physical recovery"
                  fill
                  sizes="(max-width: 768px) 100vw, 350px"
                  className="object-cover"
                />
              </div>
              <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-clinic uppercase tracking-wider block">Phase 3</span>
                  <h3 className="font-serif text-lg font-bold text-primary">Functional Independence</h3>
                  <p className="text-xs text-secondary leading-relaxed mt-1">
                    Stair climbing confidence, agility recovery, long-term home exercise maintenance, and gradual resumption of active routine.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Clinical Conditions Benefiting from Physiotherapy - White */}
      <section className="py-12 lg:py-16 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-sage block">
              Musculoskeletal Care
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-primary mt-1">
              Conditions Benefiting from Rehabilitation
            </h2>
            <p className="text-secondary text-sm mt-1 leading-relaxed">
              Conservative non-surgical recovery and post-injury rehabilitation programs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Total Knee & Total Hip Replacement recovery",
              "ACL, PCL and meniscal surgical rehabilitation",
              "Post-fracture joint stiffness and muscle weakness",
              "Chronic lower back pain and lumbar spine reconditioning",
              "Cervical spondylosis and neck muscle spasms",
              "Frozen shoulder (Adhesive Capsulitis) mobilization",
              "Rotator cuff tendinitis and shoulder impingement",
              "Ankle sprains, Achilles tendinopathy & Plantar Fasciitis",
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 p-4 bg-ivory border border-border text-xs sm:text-sm">
                <Activity size={16} className="text-sage flex-shrink-0" />
                <span className="text-primary font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Consultation Booking Section - Warm Ivory */}
      <section className="py-16 bg-ivory">
        <div className="max-w-3xl mx-auto px-4 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-primary">
            Enquire About Physiotherapy &amp; Rehabilitation
          </h2>
          <p className="text-secondary text-sm max-w-xl mx-auto leading-relaxed">
            Connect with our clinic team to discuss rehabilitation pathways for post-operative recovery or chronic joint pain.
          </p>
          <div className="pt-2">
            <a
              href={getWhatsAppUrl(spec.whatsAppMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-clinic hover:bg-clinic-deep text-white px-6 py-3.5 text-sm font-semibold tracking-wide transition-colors"
            >
              <MessageSquare size={16} />
              <span>Contact Clinic on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
