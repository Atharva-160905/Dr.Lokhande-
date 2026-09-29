import React from "react";
import Image from "next/image";
import Link from "next/link";
import { clinicConfig, getWhatsAppUrl } from "@/data/clinic";
import { MessageSquare, MapPin, Clock, ArrowRight } from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-ivory pt-6 pb-12 sm:pt-8 sm:pb-16 lg:pt-12 lg:pb-20 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Semantic SEO & Editorial Content (7 cols) */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            
            {/* Trust & Location Eyebrow */}
            <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1.5 bg-white border border-border text-xs text-primary font-medium tracking-wide">
              <span className="w-2 h-2 rounded-full bg-clinic flex-shrink-0"></span>
              <span className="font-semibold text-clinic">Sinhagad Road, Pune</span>
              <span className="text-border hidden xs:inline">|</span>
              <span className="text-secondary">Specialist Outpatient Clinic</span>
            </div>

            {/* Primary SEO H1 */}
            <div className="space-y-2 sm:space-y-3">
              <span className="block font-serif text-base sm:text-lg lg:text-xl font-bold text-clinic tracking-normal">
                Dr. Lokhande’s Skin &amp; Orthopaedic Speciality Clinic
              </span>
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-primary tracking-tight leading-[1.2]">
                Skin &amp; Orthopaedic Specialists in Sinhagad Road, Pune
              </h1>
            </div>

            {/* Descriptive Copy */}
            <p className="text-sm sm:text-base lg:text-lg text-secondary leading-relaxed max-w-2xl">
              Specialist outpatient medical consultations for skin diseases, hair loss, joint arthritis, fractures, and sports trauma. Bringing together dedicated consultant specialists under one clinical practice in Pune.
            </p>

            {/* Specialty Badges (Flat color-coded indicators) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              
              {/* Dermatology Card */}
              <div className="border border-skin-border bg-skin-light p-3.5 sm:p-4 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-skin-deep">
                    Dermatology &amp; Trichology
                  </span>
                  <span className="w-2 h-2 rounded-full bg-skin"></span>
                </div>
                <p className="text-xs font-semibold text-primary">
                  Dr. Rutuja Lokhande
                </p>
                <p className="text-[11px] text-secondary">
                  MBBS, DDVL, DNB | Skin, Hair &amp; Minor Procedures
                </p>
              </div>

              {/* Orthopaedics Card */}
              <div className="border border-ortho-border bg-ortho-light p-3.5 sm:p-4 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-ortho-deep">
                    Orthopaedics &amp; Joint Surgery
                  </span>
                  <span className="w-2 h-2 rounded-full bg-ortho"></span>
                </div>
                <p className="text-xs font-semibold text-primary">
                  Dr. Vijayanand Lokhande
                </p>
                <p className="text-[11px] text-secondary">
                  MBBS, MS Ortho, DNB, FASM, FJRS | Joint &amp; Trauma Care
                </p>
              </div>

            </div>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-clinic hover:bg-clinic-deep text-white px-6 py-3.5 text-sm font-semibold tracking-wide transition-colors text-center"
              >
                <MessageSquare size={16} />
                <span>Book an Appointment</span>
              </a>

              <Link
                href="/doctors"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-surface-tint text-primary border border-border px-5 py-3.5 text-sm font-semibold transition-colors text-center"
              >
                <span>Meet Our Doctors</span>
                <ArrowRight size={15} className="text-secondary" />
              </Link>
            </div>

            {/* Timings and Landmark Quick Footer */}
            <div className="pt-4 border-t border-border flex flex-col sm:flex-row sm:items-center gap-y-2 gap-x-6 text-xs text-secondary">
              <div className="flex items-center gap-2 font-medium text-primary">
                <Clock size={15} className="text-clinic flex-shrink-0" />
                <span>Mon – Sat: 9:00 AM – 1:00 PM &amp; 5:00 PM – 8:00 PM</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={15} className="text-ortho flex-shrink-0" />
                <span>Monte Rosa, Hingne Khurd, Sinhagad Rd</span>
              </div>
            </div>

          </div>

          {/* Right Column: Editorial Framed Image (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative border border-border p-2 bg-white">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-white">
                <Image
                  src="/images/clinic/hero-team.jpg"
                  alt="Dr. Lokhande’s Skin and Orthopaedic Speciality Clinic Consultation Environment in Sinhagad Road, Pune"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 520px"
                  className="object-cover"
                />
              </div>
              
              {/* Bottom Card Caption */}
              <div className="p-3 bg-white border-t border-border flex items-center justify-between text-xs">
                <span className="font-serif font-bold text-primary text-xs sm:text-sm">Consultant Specialists</span>
                <span className="text-[11px] font-semibold text-clinic uppercase tracking-wider">
                  Sinhagad Road, Pune
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
