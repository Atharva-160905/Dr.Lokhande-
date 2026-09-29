import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { clinicConfig } from "@/data/clinic";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";

export const metadata: Metadata = {
  title: "Terms & Medical Disclaimer | Dr. Lokhande’s Speciality Clinic",
  description:
    "Website terms of use, informational disclaimer, and emergency notice for Dr. Lokhande’s Skin & Orthopaedic Speciality Clinic.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <div className="py-8 lg:py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Terms & Medical Disclaimer" }]} />

        <div className="space-y-4 mb-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-secondary block">
            Website Terms of Use
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-primary">
            Terms &amp; Medical Disclaimer
          </h1>
          <p className="text-xs text-secondary">
            Last Updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </p>
          <div className="w-12 h-[1.5px] bg-border"></div>
        </div>

        <div className="space-y-8 text-secondary text-sm sm:text-base leading-relaxed">
          {/* Important Medical Disclaimer Alert */}
          <div className="border-l-4 border-ortho bg-ortho-light/60 p-5 text-sm space-y-1">
            <h2 className="font-serif font-bold text-ortho text-base">
              Important Medical &amp; Emergency Notice
            </h2>
            <p className="text-primary text-xs leading-relaxed">
              The content provided on this website is for educational and general informational purposes only. It does not constitute formal medical diagnosis, treatment prescriptions, or doctor-patient privilege. If you are experiencing a medical emergency, severe acute trauma, or sudden critical symptoms, please visit the nearest hospital emergency department immediately.
            </p>
          </div>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-primary">1. Nature of Website Content</h2>
            <p>
              Information about orthopaedic conditions, joint replacement, arthroscopy, dermatological diseases, hair loss, and rehabilitation on this website represents general medical knowledge and service descriptions. Clinical decisions and treatment plans are uniquely tailored only after direct, in-person clinical assessment by our doctors.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-primary">2. No Guarantee of Clinical Outcomes</h2>
            <p>
              In accordance with medical ethics and Indian clinical practice standards, medical treatments and surgical procedures carry inherent biological variability. Past patient outcomes or procedure descriptions do not constitute a guarantee of identical results for any individual patient.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-primary">3. Appointment Coordination</h2>
            <p>
              Appointment requests initiated through WhatsApp or telephone are subject to doctor availability and confirmation by the clinic reception. The clinic reserves the right to reschedule consultation slots due to emergency surgeries, hospital rounds, or unforeseen clinical obligations.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-primary">4. Intellectual Property</h2>
            <p>
              The texts, clinic logos, branding assets, custom illustrations, and original layout designs presented on this website are the intellectual property of <strong>{clinicConfig.name}</strong>. Unauthorized copying, reproduction, or commercial duplication without written consent is prohibited.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-primary">5. External Links</h2>
            <p>
              This website may contain links to external third-party platforms (such as Google Maps, Google Reviews, or Practo). We are not responsible for the content, privacy practices, or availability of third-party websites.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-primary">6. Contact Information</h2>
            <p>
              For any clarification regarding these terms, please contact our clinic:
            </p>
            <div className="bg-surface-muted border border-border p-4 text-xs space-y-1">
              <p className="font-semibold text-primary">{clinicConfig.name}</p>
              <p>{clinicConfig.address.fullAddress}</p>
              <p>Telephone: {clinicConfig.contact.phoneDisplay}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
