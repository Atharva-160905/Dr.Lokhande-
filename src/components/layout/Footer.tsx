import React from "react";
import Link from "next/link";
import { ClinicLogo } from "./ClinicLogo";
import { clinicConfig, getWhatsAppUrl } from "@/data/clinic";
import { Phone, MapPin, Clock, MessageSquare, ExternalLink } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="mt-20">
      {/* Upper CTA Banner in Deep Clinic Blue (#263B68) */}
      <div className="bg-clinic-deep border-t-4 border-clinic text-white py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-[12px] font-bold uppercase tracking-widest text-clinic-light bg-white/10 px-3 py-1 inline-block">
              Consultation &amp; Appointments
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-white font-bold tracking-tight">
              Book a Specialist Consultation
            </h2>
            <p className="text-clinic-light/90 text-sm sm:text-base leading-relaxed pt-1">
              Connect directly with our clinic on WhatsApp to schedule an outpatient consultation with Dr. Rutuja Lokhande (Dermatology) or Dr. Vijayanand Lokhande (Orthopaedics).
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-ivory text-clinic-deep font-bold px-7 py-3.5 text-sm tracking-wide transition-colors flex-1 md:flex-initial"
            >
              <MessageSquare size={17} />
              <span>Book on WhatsApp</span>
            </a>
            
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 text-white border border-white/40 px-6 py-3.5 text-sm font-semibold transition-colors flex-1 md:flex-initial"
            >
              <MapPin size={16} className="text-clinic-light" />
              <span>Clinic Location</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer in Clean Dark Medical Slate (#19221C) */}
      <div className="bg-[#19221C] text-gray-300 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
            
            {/* Col 1: Brand & Overview (4 cols) */}
            <div className="lg:col-span-4 space-y-5">
              <div className="bg-white px-3.5 py-2 rounded shadow-sm inline-flex items-center">
                <ClinicLogo isFooter={true} />
              </div>
              <p className="text-gray-300 text-sm leading-relaxed pr-4">
                Specialist medical practice providing evidence-guided outpatient care in Dermatology, Trichology, Orthopaedic Surgery, Arthroscopy, and Musculoskeletal Rehabilitation in Sinhagad Road, Pune.
              </p>
              <div className="pt-2 text-xs text-gray-400 space-y-1 bg-white/5 p-4 border border-white/10">
                <p className="font-bold text-white text-sm">Sinhagad Road Clinic:</p>
                <p>{clinicConfig.address.street}</p>
                <p>{clinicConfig.address.landmark}</p>
                <p>{clinicConfig.address.city}, {clinicConfig.address.state} - {clinicConfig.address.postalCode}</p>
              </div>
            </div>

            {/* Col 2: Specialities & Doctors (3 cols) */}
            <div className="lg:col-span-3 space-y-4">
              <h3 className="font-serif text-xl font-bold text-white tracking-wide">
                Clinical Departments
              </h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link
                    href="/specialities/dermatology"
                    className="hover:text-white transition-colors inline-flex items-center gap-2 text-gray-300"
                  >
                    <span className="w-2 h-2 bg-skin rounded-full"></span>
                    <span>Dermatology &amp; Trichology</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/specialities/orthopaedics"
                    className="hover:text-white transition-colors inline-flex items-center gap-2 text-gray-300"
                  >
                    <span className="w-2 h-2 bg-ortho rounded-full"></span>
                    <span>Orthopaedic Surgery &amp; Joint Care</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/specialities/physiotherapy"
                    className="hover:text-white transition-colors inline-flex items-center gap-2 text-gray-300"
                  >
                    <span className="w-2 h-2 bg-clinic rounded-full"></span>
                    <span>Physiotherapy &amp; Rehabilitation</span>
                  </Link>
                </li>
              </ul>

              <h3 className="font-serif text-xl font-bold text-white tracking-wide pt-4">
                Practicing Specialists
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href="/doctors/dr-vijayanand-lokhande"
                    className="block group hover:text-white transition-colors"
                  >
                    <span className="font-semibold text-white group-hover:text-ortho-light">Dr. Vijayanand Lokhande</span>
                    <span className="block text-xs text-gray-400">Consultant Orthopedic Surgeon</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/doctors/dr-rutuja-lokhande"
                    className="block group hover:text-white transition-colors"
                  >
                    <span className="font-semibold text-white group-hover:text-skin-light">Dr. Rutuja Lokhande</span>
                    <span className="block text-xs text-gray-400">Consultant Dermatologist &amp; Trichologist</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 3: Navigation & Verified Portals (2 cols) */}
            <div className="lg:col-span-2 space-y-4">
              <h3 className="font-serif text-xl font-bold text-white tracking-wide">
                Quick Links
              </h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/doctors" className="hover:text-white transition-colors">
                    Doctors Directory
                  </Link>
                </li>
                <li>
                  <Link href="/specialities" className="hover:text-white transition-colors">
                    All Specialities
                  </Link>
                </li>
                <li>
                  <Link href="/patient-feedback" className="hover:text-white transition-colors">
                    Patient Feedback &amp; Stories
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About Clinic
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact &amp; Map
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white transition-colors">
                    Terms &amp; Disclaimer
                  </Link>
                </li>
              </ul>

              <h3 className="font-serif text-xl font-bold text-white tracking-wide pt-4">
                Verified Reviews
              </h3>
              <ul className="space-y-2 text-xs text-gray-300">
                <li>
                  <a
                    href={clinicConfig.externalLinks.googleReviews}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 hover:text-white text-gray-300"
                  >
                    <span>Google Reviews</span>
                    <ExternalLink size={12} className="text-clinic-border" />
                  </a>
                </li>
                <li>
                  <a
                    href={clinicConfig.externalLinks.practoProfile}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 hover:text-white text-gray-300"
                  >
                    <span>Practo Profile</span>
                    <ExternalLink size={12} className="text-clinic-border" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4: Timings & Direct Contact (3 cols) */}
            <div className="lg:col-span-3 space-y-4">
              <h3 className="font-serif text-xl font-bold text-white tracking-wide">
                Clinic Timings
              </h3>
              <div className="bg-white/5 border border-white/10 p-4 text-xs space-y-2.5 text-gray-300">
                <div className="flex items-center gap-2 text-white font-bold">
                  <Clock size={15} className="text-clinic-light" />
                  <span>{clinicConfig.timings.days}</span>
                </div>
                <p className="pl-5 text-gray-300 font-medium">Morning: {clinicConfig.timings.morning}</p>
                <p className="pl-5 text-gray-300 font-medium">Evening: {clinicConfig.timings.evening}</p>
                <p className="pl-5 text-xs text-gray-400 border-t border-white/10 pt-1.5 mt-1.5">
                  Sunday: {clinicConfig.timings.sunday}
                </p>
              </div>

              <div className="space-y-2.5 pt-2">
                <a
                  href={`tel:${clinicConfig.contact.phoneCallable}`}
                  className="flex items-center gap-2.5 text-sm text-white font-medium hover:text-clinic-light transition-colors"
                >
                  <Phone size={16} className="text-clinic-light" />
                  <span>{clinicConfig.contact.phoneDisplay}</span>
                </a>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm text-white font-bold hover:underline"
                >
                  <MessageSquare size={16} className="text-[#25D366]" />
                  <span>WhatsApp: {clinicConfig.contact.whatsappDisplay}</span>
                </a>
              </div>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-4">
            <p>
              © {new Date().getFullYear()} {clinicConfig.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <span className="text-white/20">|</span>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms &amp; Medical Disclaimer
              </Link>
              <span className="text-white/20">|</span>
              <span className="text-gray-400">Sinhagad Road, Pune</span>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};
