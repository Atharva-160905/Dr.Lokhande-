import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { clinicConfig } from "@/data/clinic";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";

export const metadata: Metadata = {
  title: "Privacy Policy | Dr. Lokhande’s Skin & Orthopaedic Speciality Clinic",
  description:
    "Privacy policy regarding information handling, WhatsApp communication, and website browsing at Dr. Lokhande’s Skin & Orthopaedic Speciality Clinic.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-8 lg:py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Privacy Policy" }]} />

        <div className="space-y-4 mb-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-secondary block">
            Legal &amp; Data Handling
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-primary">
            Privacy Policy
          </h1>
          <p className="text-xs text-secondary">
            Last Updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </p>
          <div className="w-12 h-[1.5px] bg-border"></div>
        </div>

        <div className="space-y-8 text-secondary text-sm sm:text-base leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-primary">1. Overview</h2>
            <p>
              This Privacy Policy explains how <strong>{clinicConfig.name}</strong> (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;clinic&rdquo;) handles personal information when you visit our website or connect with us for consultation scheduling. We are committed to respecting your privacy and protecting the confidentiality of information you share with us.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-primary">2. Information We Collect</h2>
            <p>
              Our website is primarily informational. We do not maintain user registration accounts, online payment gateways, or public health record databases on this website. Information we may receive includes:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Direct Communications:</strong> When you initiate contact with us via WhatsApp, telephone, or email, you may voluntarily share your name, phone number, and nature of your medical enquiry.</li>
              <li><strong>Browsing &amp; Technical Data:</strong> Standard server logs, device type, browser type, and anonymous aggregate page performance analytics to ensure website speed and security.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-primary">3. Appointment Communications &amp; WhatsApp</h2>
            <p>
              When you click on appointment buttons on this website, you are redirected to WhatsApp (a service provided by Meta Platforms, Inc.). Any messaging exchanged on WhatsApp is subject to WhatsApp&rsquo;s end-to-end encryption and terms of service. We use information shared during appointment coordination solely to register your consultation at our clinic.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-primary">4. Medical Confidentiality &amp; Record Handling</h2>
            <p>
              Any clinical records, diagnoses, and medical histories evaluated during your physical consultation at our clinic are maintained in accordance with standard Indian medical confidentiality guidelines and medical ethics regulations. We do not sell, rent, or trade your personal or health information to third-party marketing companies.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-primary">5. Cookies &amp; Third-Party Services</h2>
            <p>
              Our website may use essential cookies for technical delivery and performance. We may also embed interactive maps (Google Maps) or link to verified third-party directory profiles (such as Google Reviews or Practo). These third-party services operate under their respective privacy policies.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-primary">6. Contact for Privacy Enquiries</h2>
            <p>
              If you have any questions or concerns regarding our privacy practices, please contact our clinic at:
            </p>
            <div className="bg-surface-muted border border-border p-4 text-xs space-y-1">
              <p className="font-semibold text-primary">{clinicConfig.name}</p>
              <p>{clinicConfig.address.fullAddress}</p>
              <p>Phone: {clinicConfig.contact.phoneDisplay}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
