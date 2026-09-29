import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { clinicConfig, getWhatsAppUrl } from "@/data/clinic";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { BreadcrumbJsonLd } from "@/components/common/JsonLd";
import { MessageSquare, ArrowRight, ShieldCheck, Activity } from "lucide-react";

export const metadata: Metadata = {
  title: "Orthopaedic Care in Sinhagad Road, Pune | Knee, Joint & Trauma",
  description:
    "Consult Dr. Vijayanand Lokhande for knee replacement, hip replacement, arthroscopy, ACL repair, fracture trauma, and sports injuries in Sinhagad Road, Pune.",
  alternates: {
    canonical: "/specialities/orthopaedics",
  },
};

export default function OrthopaedicsSpecialtyPage() {
  const spec = clinicConfig.specialties.orthopaedics;
  const doctor = clinicConfig.doctors.vijayanand;

  return (
    <div className="bg-white">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Specialities", url: "/specialities" },
          { name: "Orthopaedic Surgery & Joint Care", url: "/specialities/orthopaedics" },
        ]}
      />

      {/* Hero Section - White */}
      <div className="py-8 lg:py-12 border-b border-border bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Specialities", href: "/specialities" },
              { label: "Orthopaedic Surgery & Joint Care" },
            ]}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mt-6">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-ortho block">
                Orthopaedic Surgery &amp; Joint Care
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-primary tracking-tight">
                Orthopaedic Care in Sinhagad Road, Pune
              </h1>
              <p className="text-secondary text-base sm:text-lg leading-relaxed">
                Specialist diagnosis, surgical interventions, and structured rehabilitation for bone fractures, joint arthritis, and sports injuries led by Dr. Vijayanand Lokhande (MBBS, MS Ortho, DNB, FASM, FJRS).
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={getWhatsAppUrl(spec.whatsAppMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-ortho hover:bg-ortho-deep text-white px-5 py-3 text-xs font-semibold tracking-wide transition-colors"
                >
                  <MessageSquare size={15} />
                  <span>Book Orthopaedic Consultation</span>
                </a>
                <Link
                  href={`/doctors/${doctor.slug}`}
                  className="inline-flex items-center gap-1.5 bg-white text-primary border border-border px-4 py-3 text-xs font-medium hover:bg-ivory transition-colors"
                >
                  <span>About Dr. Vijayanand Lokhande</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[16/10] w-full border border-ortho-border overflow-hidden bg-ortho-light">
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

      {/* Section 1: Knee Care & Joint Replacement - Light Burgundy */}
      <section className="py-12 lg:py-16 bg-ortho-light border-b border-ortho-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-ortho block">
                Joint Preservation &amp; Surgery
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-primary mt-1">
                Knee &amp; Joint Replacement
              </h2>
              <p className="text-secondary text-sm mt-2 leading-relaxed">
                Staged management for knee osteoarthritis ranging from early conservative joint preservation and viscosupplementation to Total Knee Replacement (TKR).
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="border border-ortho-border bg-white overflow-hidden flex flex-col">
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-ortho-light">
                  <Image
                    src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=600&auto=format&fit=crop"
                    alt="Knee joint osteoarthritis and replacement clinical examination"
                    fill
                    sizes="(max-width: 768px) 100vw, 350px"
                    className="object-cover"
                  />
                </div>
                <div className="p-4 space-y-1 flex-1">
                  <h3 className="font-serif text-base font-bold text-primary">Knee Osteoarthritis &amp; TKR</h3>
                  <p className="text-xs text-secondary leading-relaxed">
                    Staged evaluation, cartilage preservation, and precision Total Knee Replacement surgery.
                  </p>
                </div>
              </div>

              <div className="border border-ortho-border bg-white overflow-hidden flex flex-col">
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-ortho-light">
                  <Image
                    src="https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=600&auto=format&fit=crop"
                    alt="Hip joint arthritis and replacement surgery diagnostics"
                    fill
                    sizes="(max-width: 768px) 100vw, 350px"
                    className="object-cover"
                  />
                </div>
                <div className="p-4 space-y-1 flex-1">
                  <h3 className="font-serif text-base font-bold text-primary">Total Hip Replacement (THR)</h3>
                  <p className="text-xs text-secondary leading-relaxed">
                    Avascular necrosis (AVN) management and anatomical hip joint restoration.
                  </p>
                </div>
              </div>

              <div className="border border-ortho-border p-4 bg-white space-y-1 sm:col-span-2">
                <h3 className="font-serif text-base font-bold text-primary">Partial Knee Resurfacing &amp; Injections</h3>
                <p className="text-xs text-secondary leading-relaxed">
                  Unicompartmental resurfacing preserving native ligaments, hyaluronic acid viscosupplementation, and joint preservation protocols.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Sports Medicine & Arthroscopy - White */}
      <section className="py-12 lg:py-16 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-ortho block">
                Keyhole Surgery
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-primary mt-1">
                Arthroscopy &amp; Sports Injuries
              </h2>
              <p className="text-secondary text-sm mt-2 leading-relaxed">
                Minimally invasive arthroscopic procedures designed for anatomical ligament reconstruction and rapid functional return.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="border border-border bg-ivory overflow-hidden flex flex-col">
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-white">
                  <Image
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=600&auto=format&fit=crop"
                    alt="ACL and sports ligament knee injury assessment"
                    fill
                    sizes="(max-width: 768px) 100vw, 350px"
                    className="object-cover"
                  />
                </div>
                <div className="p-4 space-y-1">
                  <h3 className="font-serif text-base font-bold text-primary">ACL &amp; PCL Reconstruction</h3>
                  <p className="text-xs text-secondary leading-relaxed">Arthroscopic anatomical graft reconstruction and return-to-sport planning.</p>
                </div>
              </div>

              <div className="border border-border bg-ivory overflow-hidden flex flex-col">
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-white">
                  <Image
                    src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=600&auto=format&fit=crop"
                    alt="Shoulder arthroscopy rotator cuff repair"
                    fill
                    sizes="(max-width: 768px) 100vw, 350px"
                    className="object-cover"
                  />
                </div>
                <div className="p-4 space-y-1">
                  <h3 className="font-serif text-base font-bold text-primary">Shoulder Arthroscopy &amp; Cuff</h3>
                  <p className="text-xs text-secondary leading-relaxed">Assessment and keyhole repair for rotator cuff tears and recurrent dislocations.</p>
                </div>
              </div>

              <div className="p-4 bg-ivory border border-border space-y-1.5">
                <h3 className="font-serif text-base font-bold text-primary">Meniscal Repair &amp; Balancing</h3>
                <p className="text-xs text-secondary leading-relaxed">Meniscus preservation techniques to protect long-term joint health and stability.</p>
              </div>

              <div className="p-4 bg-ivory border border-border space-y-1.5">
                <h3 className="font-serif text-base font-bold text-primary">Sprains &amp; Overuse Injuries</h3>
                <p className="text-xs text-secondary leading-relaxed">Clinical management for ankle sprains, tennis elbow, and Achilles tendinopathy.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Trauma, Fractures & Musculoskeletal Pain - Light Burgundy */}
      <section className="py-12 lg:py-16 bg-ortho-light border-b border-ortho-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-ortho block">
                Trauma &amp; Pain Management
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-primary mt-1">
                Trauma &amp; Spine Evaluation
              </h2>
              <p className="text-secondary text-sm mt-2 leading-relaxed">
                Expertise backed by AO Trauma Fellowship training for acute fracture reduction, complex bone injuries, and chronic musculoskeletal pain.
              </p>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="border border-ortho-border bg-white overflow-hidden flex flex-col">
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-ortho-light">
                    <Image
                      src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=600&auto=format&fit=crop"
                      alt="Fracture trauma and bone injury assessment"
                      fill
                      sizes="(max-width: 768px) 100vw, 350px"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 space-y-1 flex-1">
                    <h3 className="font-serif text-base font-bold text-primary">Complex &amp; Simple Fractures</h3>
                    <p className="text-xs text-secondary leading-relaxed">
                      Plaster immobilization, surgical internal fixation, and fracture union monitoring.
                    </p>
                  </div>
                </div>

                <div className="border border-ortho-border bg-white overflow-hidden flex flex-col">
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-ortho-light">
                    <Image
                      src="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=600&auto=format&fit=crop"
                      alt="Spine, lumbar disc and sciatica clinical evaluation"
                      fill
                      sizes="(max-width: 768px) 100vw, 350px"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 space-y-1 flex-1">
                    <h3 className="font-serif text-base font-bold text-primary">Spine &amp; Lumbar Disc Disorders</h3>
                    <p className="text-xs text-secondary leading-relaxed">
                      Non-surgical stabilization, posture guidance, and clinical evaluation for sciatica and back pain.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="border border-ortho-border p-4 bg-white flex items-start gap-3">
                  <span className="w-2 h-2 bg-ortho mt-1.5 flex-shrink-0"></span>
                  <div>
                    <h3 className="font-serif text-base font-bold text-primary">Neck Pain &amp; Cervical Spondylosis</h3>
                    <p className="text-xs text-secondary mt-0.5 leading-relaxed">Assessment for cervical nerve irritation, postural strain, and physical recovery.</p>
                  </div>
                </div>

                <div className="border border-ortho-border p-4 bg-white flex items-start gap-3">
                  <span className="w-2 h-2 bg-ortho mt-1.5 flex-shrink-0"></span>
                  <div>
                    <h3 className="font-serif text-base font-bold text-primary">Post-Trauma Joint Stiffness</h3>
                    <p className="text-xs text-secondary mt-0.5 leading-relaxed">Joint mobilization protocols and therapeutic exercises to recover lost range of motion.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Meet Dr. Vijayanand Lokhande - White */}
      <section className="py-12 lg:py-16 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-ortho-border bg-ortho-light p-6 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-3">
                <div className="relative aspect-[3/4] w-full border border-ortho-border overflow-hidden bg-white">
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
                <span className="text-xs font-semibold uppercase tracking-wider text-ortho">
                  Consultant in Charge
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-primary">
                  Meet Dr. Vijayanand Lokhande
                </h2>
                <p className="text-xs sm:text-sm font-medium text-secondary">
                  MBBS, MS Ortho, DNB, FASM, FJRS, SICOT Fellow, AO Trauma Fellow
                </p>
                <p className="text-secondary text-sm leading-relaxed">
                  {doctor.shortBio}
                </p>
                <div className="pt-2 flex flex-wrap gap-3">
                  <Link
                    href={`/doctors/${doctor.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-ortho hover:text-ortho-deep"
                  >
                    <span>View Dr. Vijayanand’s Full Profile</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Book an Orthopaedic Consultation - White */}
      <section className="py-16 text-center max-w-3xl mx-auto px-4 space-y-4">
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-primary">
          Book an Orthopaedic Consultation
        </h2>
        <p className="text-secondary text-sm max-w-xl mx-auto leading-relaxed">
          Schedule a consultation for knee pain, ligament injuries, fracture evaluation, or joint replacement second opinions at our Sinhagad Road clinic.
        </p>
        <div className="pt-2">
          <a
            href={getWhatsAppUrl(spec.whatsAppMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-ortho hover:bg-ortho-deep text-white px-6 py-3.5 text-sm font-semibold tracking-wide transition-colors"
          >
            <MessageSquare size={16} />
            <span>Book Orthopaedic Appointment on WhatsApp</span>
          </a>
        </div>
      </section>
    </div>
  );
}
