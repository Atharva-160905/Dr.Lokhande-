"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { clinicConfig, getWhatsAppUrl } from "@/data/clinic";
import { MessageSquare, ArrowRight } from "lucide-react";
import gsap from "gsap";

export const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const textGroupRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !heroRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-anim-item", {
        opacity: 0,
        y: 28,
        duration: 0.9,
        stagger: 0.12,
      }).from(
        imageWrapperRef.current,
        {
          opacity: 0,
          scale: 0.97,
          duration: 1.1,
          ease: "power2.out",
        },
        "-=0.7"
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative bg-ivory pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24 border-b border-border/70 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Headline & Dual Specialties (7 cols) */}
          <div ref={textGroupRef} className="lg:col-span-7 space-y-7">
            
            {/* Minimal Location & Practice Tag */}
            <div className="hero-anim-item flex items-center gap-2.5 text-xs font-semibold uppercase tracking-widest text-clinic">
              <span className="w-1.5 h-1.5 rounded-full bg-clinic"></span>
              <span>Sinhagad Road, Pune</span>
              <span className="text-border">•</span>
              <span className="text-secondary font-medium">Specialist Practice</span>
            </div>

            {/* Grand Editorial Display Heading */}
            <div className="hero-anim-item space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-primary tracking-tight leading-[1.12]">
                Skin, Hair &amp; Joint Care Specialists in Pune
              </h1>
            </div>

            {/* Concise, impactful description */}
            <p className="hero-anim-item text-base sm:text-lg text-secondary leading-relaxed max-w-xl">
              Dedicated outpatient consultations by specialist doctors—delivering advanced clinical dermatology, joint preservation, arthroscopy, and trauma surgery under one trusted practice.
            </p>

            {/* Dual Specialty Showcase (Editorial Split instead of boxed cards) */}
            <div className="hero-anim-item grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 border-t border-border/70">
              
              {/* Dermatology Note */}
              <div className="border-l-2 border-skin pl-4 space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-skin block">
                  Dermatology &amp; Trichology
                </span>
                <p className="font-serif text-lg font-bold text-primary">
                  Dr. Rutuja Lokhande
                </p>
                <p className="text-xs text-secondary">
                  Clinical Skin, Acne, Pigmentation &amp; Hair Loss
                </p>
              </div>

              {/* Orthopaedics Note */}
              <div className="border-l-2 border-ortho pl-4 space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-ortho block">
                  Orthopaedic Surgery
                </span>
                <p className="font-serif text-lg font-bold text-primary">
                  Dr. Vijayanand Lokhande
                </p>
                <p className="text-xs text-secondary">
                  Knee &amp; Hip Care, Arthroscopy &amp; Trauma
                </p>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="hero-anim-item flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-clinic hover:bg-clinic-deep text-white px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide shadow-sm transition-transform active:scale-95 text-center"
              >
                <MessageSquare size={16} />
                <span>Book Consultation</span>
              </a>

              <Link
                href="/doctors"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-ivory text-primary border border-border px-7 py-3.5 rounded-full text-sm font-semibold transition-colors text-center"
              >
                <span>Consultant Profiles</span>
                <ArrowRight size={15} className="text-secondary" />
              </Link>
            </div>

            {/* Factual Timings Line */}
            <div className="hero-anim-item text-xs text-secondary flex flex-wrap items-center gap-x-6 gap-y-1.5 pt-1">
              <span className="inline-flex items-center gap-1.5 bg-white/80 px-3 py-1 rounded-full border border-border/60">
                <strong className="text-primary font-semibold">Hours:</strong> Mon – Sat: 9 AM – 1 PM &amp; 5 PM – 8 PM
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/80 px-3 py-1 rounded-full border border-border/60">
                <strong className="text-primary font-semibold">Location:</strong> Monte Rosa, Hingne Khurd
              </span>
            </div>

          </div>

          {/* Right Column: Architectural Framed Team Photography (5 cols) */}
          <div ref={imageWrapperRef} className="lg:col-span-5 relative">
            <div className="relative bg-white border border-border/80 rounded-[3rem] rounded-tr-md p-3 shadow-md overflow-hidden">
              <div className="relative aspect-[4/3] sm:aspect-[4/3] lg:aspect-[4/3] w-full overflow-hidden rounded-[2.25rem] rounded-tr-sm bg-ivory">
                <Image
                  src="/images/clinic/hero-team.jpg"
                  alt="Dr. Rutuja Lokhande and Dr. Vijayanand Lokhande at their Sinhagad Road Clinic in Pune"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 540px"
                  className="object-cover"
                />
              </div>
              
              <div className="px-4 py-3 bg-white flex items-center justify-between text-xs">
                <div>
                  <p className="font-serif font-bold text-primary text-sm">Dr. Lokhande’s Speciality Clinic</p>
                  <p className="text-[11px] text-secondary">Sinhagad Road, Pune</p>
                </div>
                <span className="inline-flex items-center gap-1 bg-[#EEF2F6] text-clinic text-[11px] font-bold px-3 py-1 rounded-full border border-[#D0DDEB]">
                  Outpatient Facility
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
