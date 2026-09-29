import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { clinicConfig, getWhatsAppUrl } from "@/data/clinic";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { BreadcrumbJsonLd } from "@/components/common/JsonLd";
import { MessageSquare, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Dermatology in Sinhagad Road, Pune | Skin, Hair & Nail Care",
  description:
    "Consult Dr. Rutuja Lokhande for clinical dermatology, hair loss diagnostics, acne treatment, pigmentation, eczema, and procedural dermatology in Sinhagad Road, Pune.",
  alternates: {
    canonical: "/specialities/dermatology",
  },
};

export default function DermatologySpecialtyPage() {
  const spec = clinicConfig.specialties.dermatology;
  const doctor = clinicConfig.doctors.rutuja;

  return (
    <div className="bg-white">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Specialities", url: "/specialities" },
          { name: "Dermatology & Trichology", url: "/specialities/dermatology" },
        ]}
      />

      {/* Page Hero Header (Pure White) */}
      <section className="py-8 lg:py-12 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Specialities", href: "/specialities" },
              { label: "Dermatology & Trichology" },
            ]}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mt-6">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-skin-deep bg-skin-light px-3 py-1 border border-skin-border inline-block">
                Clinical Dermatology Department
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-primary tracking-tight">
                Dermatology in Sinhagad Road, Pune
              </h1>
              <p className="text-secondary text-base sm:text-lg leading-relaxed">
                Professional dermatology care for skin diseases, hair and scalp pathologies, nail disorders, and medical aesthetic procedures under Dr. Rutuja Lokhande (MBBS, DDVL, DNB).
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={getWhatsAppUrl(spec.whatsAppMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-skin hover:bg-skin-deep text-white px-6 py-3.5 text-xs font-bold tracking-wide transition-colors"
                >
                  <MessageSquare size={15} />
                  <span>Book Dermatology Consultation</span>
                </a>
                <Link
                  href={`/doctors/${doctor.slug}`}
                  className="inline-flex items-center gap-1.5 bg-white text-primary border border-border px-5 py-3.5 text-xs font-bold hover:bg-ivory transition-colors"
                >
                  <span>About Dr. Rutuja Lokhande</span>
                  <ArrowRight size={13} className="text-skin" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[16/10] w-full border border-skin-border overflow-hidden bg-skin-light">
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
      </section>

      {/* Section 1: Skin Concerns We Treat (Light Green Section) */}
      <section className="py-14 bg-skin-light border-b border-skin-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-skin-deep block">
              Clinical Assessment
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-primary mt-1">
              Skin Concerns We Treat
            </h2>
            <p className="text-secondary text-sm mt-1">
              Diagnosis and medical management for common and stubborn skin diseases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                name: "Acne & Acne Scars",
                desc: "Medical treatment for active breakouts, hormonal acne, comedones, and post-inflammatory erythema.",
                image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600&auto=format&fit=crop",
                imageAlt: "Clinical dermatological examination for acne treatment",
              },
              {
                name: "Melasma & Pigmentation",
                desc: "Structured evaluation of facial melasma, dark patches, and sun-induced hyperpigmentation.",
                image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=600&auto=format&fit=crop",
                imageAlt: "Skin pigmentation and facial dermatological assessment",
              },
              {
                name: "Eczema & Atopic Dermatitis",
                desc: "Skin barrier repair strategies, allergy identification, and flare-up prevention.",
                image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=600&auto=format&fit=crop",
                imageAlt: "Clinical medical consultation for skin eczema and dermatitis",
              },
              {
                name: "Psoriasis & Chronic Rashes",
                desc: "Targeted topical and systemic therapies for chronic inflammatory skin disorders.",
                image: "https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?q=80&w=600&auto=format&fit=crop",
                imageAlt: "Dermatological evaluation for inflammatory skin conditions",
              },
              {
                name: "Hair Loss & Trichology",
                desc: "Scalp dermoscopy, pattern baldness management, and telogen effluvium medical therapies.",
                image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=600&auto=format&fit=crop",
                imageAlt: "Trichology and hair scalp medical examination",
              },
              {
                name: "Fungal & Bacterial Infections",
                desc: "Accurate culture evaluation and complete therapeutic clearance for ringworm and bacterial folliculitis.",
                image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=600&auto=format&fit=crop",
                imageAlt: "Clinical diagnostic treatment for skin infections",
              },
            ].map((item, idx) => (
              <div key={idx} className="border border-skin-border bg-white overflow-hidden flex flex-col">
                <div className="relative aspect-[16/9] w-full bg-skin-light overflow-hidden border-b border-skin-border">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                    className="object-cover"
                  />
                </div>
                <div className="p-4 space-y-1.5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-skin"></span>
                      <h3 className="font-serif text-base font-bold text-primary">{item.name}</h3>
                    </div>
                    <p className="text-xs text-secondary leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Hair and Scalp Concerns (Pure White) */}
      <section className="py-14 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-skin-deep block">
              Trichology Department
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-primary mt-1">
              Hair and Scalp Concerns
            </h2>
            <p className="text-secondary text-sm mt-1">
              Clinical hair loss investigation, scalp dermoscopy, and medical hair restoration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Male & Female Pattern Hair Loss (Androgenetic Alopecia)",
              "Sudden Diffuse Hair Fall (Telogen Effluvium)",
              "Patchy Hair Loss (Alopecia Areata)",
              "Chronic Dandruff & Seborrheic Dermatitis",
              "Scalp Folliculitis & Bacterial Scalp Infections",
              "Nutritional & Post-Illness Hair Shedding",
            ].map((concern, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 bg-ivory border border-border text-xs sm:text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-skin mt-1.5 flex-shrink-0"></span>
                <span className="text-secondary font-medium">{concern}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Meet Dr. Rutuja Lokhande (Pure White with Light Green Container) */}
      <section className="py-14 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-skin-border bg-skin-light p-6 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-3">
                <div className="relative aspect-[3/4] w-full border border-skin-border overflow-hidden bg-white">
                  <Image
                    src={doctor.image}
                    alt={doctor.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="lg:col-span-9 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-skin-deep bg-white px-2.5 py-1 border border-skin-border inline-block">
                  Consultant in Charge
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-primary">
                  Meet Dr. Rutuja Lokhande
                </h2>
                <p className="text-xs sm:text-sm font-semibold text-secondary">
                  MBBS, DDVL, DNB | Consultant Dermatologist &amp; Trichologist
                </p>
                <p className="text-secondary text-sm leading-relaxed">
                  {doctor.shortBio}
                </p>
                <div className="pt-2 flex flex-wrap gap-3">
                  <Link
                    href={`/doctors/${doctor.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-skin-deep hover:text-primary"
                  >
                    <span>View Dr. Rutuja’s Full Profile</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Dermatology Procedures (Light Green Section) */}
      <section className="py-14 bg-skin-light border-b border-skin-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-skin-deep block">
              Procedural Dermatology
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-primary mt-1">
              Dermatology Procedures
            </h2>
            <p className="text-secondary text-sm mt-1">
              Minor clinical and aesthetic procedures conducted with medical precision.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Medical Chemical Peels (Salicylic, Glycolic, Lactic)",
              "Radiofrequency / Electrocautery for Skin Tags & Warts",
              "Comedone Extraction for Acne",
              "Intralesional Steroid Injections (Alopecia / Keloids)",
              "Scalp PRP / Growth Factor Support Therapies",
              "Micro-needling for Acne Scars & Texture",
            ].map((proc, idx) => (
              <div key={idx} className="border border-skin-border bg-white p-4 flex items-center gap-3">
                <CheckCircle2 size={16} className="text-skin flex-shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-primary">{proc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Book a Dermatology Consultation (Pure White) */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-skin-deep block">
            Appointment Scheduling
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-primary">
            Book a Dermatology Consultation
          </h2>
          <p className="text-secondary text-sm max-w-xl mx-auto">
            Schedule an appointment for diagnosis and personalized treatment of skin, hair, or nail concerns at our Sinhagad Road clinic.
          </p>
          <div className="pt-2">
            <a
              href={getWhatsAppUrl(spec.whatsAppMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-skin hover:bg-skin-deep text-white px-7 py-3.5 text-sm font-semibold tracking-wide transition-colors"
            >
              <MessageSquare size={16} />
              <span>Book on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
