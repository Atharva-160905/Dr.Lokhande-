import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { clinicConfig, getWhatsAppUrl } from "@/data/clinic";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { BreadcrumbJsonLd } from "@/components/common/JsonLd";
import { MapPin, Phone, Clock, MessageSquare, ExternalLink, Navigation } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Clinic Location | Dr. Lokhande’s Speciality Clinic Sinhagad Road, Pune",
  description:
    "Contact Dr. Lokhande’s Skin & Orthopaedic Speciality Clinic in Sinhagad Road, Pune. Address: Monte Rosa, Hingne Khurd. Phone: +91 90757 93361. Timings & WhatsApp booking.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  const { vijayanand, rutuja } = clinicConfig.doctors;

  return (
    <div className="bg-white">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Contact & Location", url: "/contact" },
        ]}
      />

      {/* Hero Section - White */}
      <div className="py-8 lg:py-12 border-b border-border bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Contact & Location" }]} />

          <div className="max-w-3xl mt-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-clinic block">
              Get in Touch
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-primary tracking-tight mt-1">
              Contact &amp; Clinic Location
            </h1>
            <p className="text-secondary text-base sm:text-lg mt-3 leading-relaxed">
              Schedule an appointment or connect with our clinic team on Sinhagad Road, Pune. For fastest appointment confirmations, please contact us via WhatsApp.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* 2-Column Main Contact Info & Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Details Column (5 cols) - Light Blue / Ivory */}
          <div className="lg:col-span-5 bg-clinic-light border border-clinic-border p-6 sm:p-8 flex flex-col justify-between space-y-6">
            
            <div className="space-y-6">
              
              {/* Address */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                  <MapPin size={18} className="text-clinic" />
                  <span>Clinic Address</span>
                </div>
                <div className="pl-6 text-xs sm:text-sm text-secondary space-y-1">
                  <p className="font-semibold text-primary">{clinicConfig.name}</p>
                  <p>{clinicConfig.address.street}</p>
                  <p>{clinicConfig.address.landmark}</p>
                  <p>{clinicConfig.address.city}, {clinicConfig.address.state} - {clinicConfig.address.postalCode}</p>
                  <p className="text-xs text-secondary/80 pt-1">
                    (Landmark: Monte Rosa Building, Sinhagad Road)
                  </p>
                </div>
              </div>

              {/* Consultation Timings */}
              <div className="space-y-2 border-t border-clinic-border pt-4">
                <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                  <Clock size={18} className="text-clinic" />
                  <span>Consultation Timings</span>
                </div>
                <div className="pl-6 text-xs sm:text-sm text-secondary space-y-1.5">
                  <div className="flex justify-between">
                    <span className="font-medium text-primary">Monday – Saturday:</span>
                    <span>9:00 AM – 1:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-transparent hidden sm:inline">-</span>
                    <span>5:00 PM – 8:00 PM</span>
                  </div>
                  <div className="flex justify-between text-xs text-secondary/80 border-t border-clinic-border/60 pt-1.5">
                    <span>Sunday:</span>
                    <span>{clinicConfig.timings.sunday}</span>
                  </div>
                </div>
              </div>

              {/* Direct Phone & WhatsApp */}
              <div className="space-y-2 border-t border-clinic-border pt-4">
                <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                  <Phone size={18} className="text-clinic" />
                  <span>Telephone &amp; Messaging</span>
                </div>
                <div className="pl-6 text-xs sm:text-sm space-y-2">
                  <p>
                    <a
                      href={`tel:${clinicConfig.contact.phoneCallable}`}
                      className="text-primary hover:text-clinic font-medium inline-flex items-center gap-2"
                    >
                      <span>Phone: {clinicConfig.contact.phoneDisplay}</span>
                    </a>
                  </p>
                  <p>
                    <a
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-clinic hover:text-clinic-deep font-medium inline-flex items-center gap-2"
                    >
                      <MessageSquare size={15} />
                      <span>WhatsApp: {clinicConfig.contact.whatsappDisplay}</span>
                    </a>
                  </p>
                </div>
              </div>

            </div>

            {/* Direct Action Buttons */}
            <div className="pt-4 border-t border-clinic-border space-y-2.5">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-clinic hover:bg-clinic-deep text-white py-3 px-4 text-xs font-semibold tracking-wide transition-colors"
              >
                <MessageSquare size={16} />
                <span>General Clinic WhatsApp Enquiry</span>
              </a>

              <a
                href={clinicConfig.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-white hover:bg-ivory text-primary border border-border py-2.5 px-4 text-xs font-semibold tracking-wide transition-colors"
              >
                <Navigation size={14} className="text-clinic" />
                <span>Get Driving Directions</span>
              </a>
            </div>

          </div>

          {/* Map Column (7 cols) */}
          <div className="lg:col-span-7 border border-border min-h-[300px] sm:min-h-[420px] relative bg-ivory overflow-hidden flex flex-col">
            <iframe
              src={clinicConfig.address.embedMapUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "300px", flex: 1 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dr. Lokhande’s Skin & Orthopaedic Speciality Clinic Location Map Sinhagad Road Pune"
              className="w-full h-full min-h-[300px]"
            ></iframe>
            <div className="p-3 bg-white border-t border-border text-xs text-secondary flex flex-wrap justify-between items-center px-4 gap-2">
              <span>Third Floor, Office 305, Monte Rosa, Hingne Khurd, Sinhagad Road, Pune</span>
              <a
                href={clinicConfig.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-clinic hover:text-clinic-deep font-medium inline-flex items-center gap-1"
              >
                <span>Open Full Map</span>
                <ExternalLink size={11} />
              </a>
            </div>
          </div>

        </div>

        {/* Doctor-Specific Direct WhatsApp Cards */}
        <section className="border-t border-border pt-12">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-clinic block">
              Direct Specialist Booking
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-primary mt-1">
              Select Your Consultation
            </h2>
            <p className="text-secondary text-sm mt-1">
              Click below to send a prefilled appointment message on WhatsApp directly for your preferred specialist.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Dr. Vijayanand Card - Burgundy */}
            <div className="border border-ortho-border p-6 bg-ortho-light flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-ortho block">
                  Orthopaedics &amp; Joint Surgery
                </span>
                <h3 className="font-serif text-xl font-bold text-primary">
                  {vijayanand.name}
                </h3>
                <p className="text-xs text-secondary leading-relaxed">
                  Knee arthritis, joint replacement, ACL &amp; sports injuries, fracture trauma, musculoskeletal pain.
                </p>
              </div>
              <a
                href={getWhatsAppUrl(vijayanand.whatsAppMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-ortho hover:bg-ortho-deep text-white py-3 px-4 text-xs font-semibold tracking-wide transition-colors"
              >
                <MessageSquare size={14} />
                <span>Book for Dr. Vijayanand (Ortho)</span>
              </a>
            </div>

            {/* Dr. Rutuja Card - Green */}
            <div className="border border-skin-border p-6 bg-skin-light flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-skin block">
                  Dermatology &amp; Trichology
                </span>
                <h3 className="font-serif text-xl font-bold text-primary">
                  {rutuja.name}
                </h3>
                <p className="text-xs text-secondary leading-relaxed">
                  Clinical skin conditions, acne, pigmentation, eczema, hair fall diagnostics, minor skin procedures.
                </p>
              </div>
              <a
                href={getWhatsAppUrl(rutuja.whatsAppMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-skin hover:bg-skin-deep text-white py-3 px-4 text-xs font-semibold tracking-wide transition-colors"
              >
                <MessageSquare size={14} />
                <span>Book for Dr. Rutuja (Derma)</span>
              </a>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}
