"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ClinicLogo } from "./ClinicLogo";
import { clinicConfig, getWhatsAppUrl } from "@/data/clinic";
import { Phone, Menu, X, MessageSquare, ChevronDown } from "lucide-react";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSpecialtiesOpen, setIsSpecialtiesOpen] = useState(false);
  const [isDoctorsOpen, setIsDoctorsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsSpecialtiesOpen(false);
    setIsDoctorsOpen(false);
  }, [pathname]);

  // Determine current active page theme
  const isDermatology =
    pathname.includes("dermatology") || pathname.includes("dr-rutuja");
  const isOrthopaedics =
    pathname.includes("orthopaedics") || pathname.includes("dr-vijayanand");

  const activeTheme = isDermatology
    ? {
        text: "text-skin",
        border: "border-skin",
        bgLight: "bg-skin-light",
        btn: "bg-skin hover:bg-skin-deep text-white",
      }
    : isOrthopaedics
    ? {
        text: "text-ortho",
        border: "border-ortho",
        bgLight: "bg-ortho-light",
        btn: "bg-ortho hover:bg-ortho-deep text-white",
      }
    : {
        text: "text-clinic",
        border: "border-clinic",
        bgLight: "bg-clinic-light",
        btn: "bg-clinic hover:bg-clinic-deep text-white",
      };

  const navLinks = [
    { name: "Home", href: "/" },
    {
      name: "Specialities",
      href: "/specialities",
      subItems: [
        { name: "Dermatology & Trichology", href: "/specialities/dermatology" },
        { name: "Orthopaedic Surgery & Joint Care", href: "/specialities/orthopaedics" },
        { name: "Physiotherapy & Rehabilitation", href: "/specialities/physiotherapy" },
      ],
    },
    {
      name: "Doctors",
      href: "/doctors",
      subItems: [
        { name: "Dr. Vijayanand Lokhande (Orthopaedics)", href: "/doctors/dr-vijayanand-lokhande" },
        { name: "Dr. Rutuja Lokhande (Dermatology)", href: "/doctors/dr-rutuja-lokhande" },
      ],
    },
    { name: "About Clinic", href: "/about" },
    { name: "Patient Feedback", href: "/#feedback" },
    { name: "Contact & Location", href: "/contact" },
  ];

  return (
    <>
      {/* Main Header */}
      <header
        className={`sticky top-0 z-40 bg-white transition-all duration-200 ${
          isScrolled
            ? "border-b border-border py-2.5"
            : "border-b border-border py-3.5 sm:py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <ClinicLogo />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6 flex-shrink-0" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href) && link.href !== "/#feedback";

              if (link.subItems) {
                return (
                  <div key={link.name} className="relative group py-2">
                    <button
                      type="button"
                      className={`inline-flex items-center gap-1 text-[13px] xl:text-[14px] tracking-wide font-medium whitespace-nowrap transition-colors ${
                        isActive
                          ? `${activeTheme.text} font-semibold border-b-2 ${activeTheme.border} pb-0.5`
                          : "text-primary hover:text-clinic"
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown size={14} className="text-secondary group-hover:text-primary transition-transform group-hover:rotate-180" />
                    </button>

                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-0 w-64 bg-white border border-border shadow-subtle py-1.5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
                      {link.subItems.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="block px-4 py-2.5 text-[13px] text-primary hover:bg-ivory hover:text-primary transition-colors whitespace-nowrap"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-[13px] xl:text-[14px] tracking-wide font-medium whitespace-nowrap transition-colors ${
                    isActive
                      ? `${activeTheme.text} font-semibold border-b-2 ${activeTheme.border} pb-0.5`
                      : "text-primary hover:text-clinic"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA (Specialty-Aware Color) */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-4 xl:px-5 py-2.5 text-[13px] font-semibold tracking-wide whitespace-nowrap transition-colors ${activeTheme.btn}`}
            >
              <MessageSquare size={15} />
              <span>Book Appointment</span>
            </a>
          </div>

          {/* Mobile Menu & Quick WhatsApp Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center p-2.5 ${activeTheme.btn}`}
              aria-label="Book Appointment"
            >
              <MessageSquare size={18} />
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-primary hover:text-clinic focus:outline-none border border-border bg-white"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-black/40" onClick={() => setIsMobileMenuOpen(false)}>
          <div
            className="fixed inset-y-0 right-0 max-w-xs w-full bg-white border-l border-border p-6 flex flex-col justify-between overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              {/* Header inside drawer */}
              <div className="flex items-center justify-between pb-4 border-b border-border">
                <ClinicLogo className="scale-90 origin-left" />
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1.5 text-secondary hover:text-primary border border-border"
                  aria-label="Close menu"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Navigation list */}
              <nav className="mt-4 space-y-1" aria-label="Mobile Navigation">
                <Link
                  href="/"
                  className="block py-2.5 px-3 text-[15px] font-medium text-primary hover:bg-ivory"
                >
                  Home
                </Link>

                {/* Specialties Submenu */}
                <div>
                  <button
                    onClick={() => setIsSpecialtiesOpen(!isSpecialtiesOpen)}
                    className="w-full flex items-center justify-between py-2.5 px-3 text-[15px] font-medium text-primary hover:bg-ivory text-left"
                  >
                    <span>Specialities</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${isSpecialtiesOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {isSpecialtiesOpen && (
                    <div className="pl-4 pr-2 py-1 space-y-1 bg-ivory border-l-2 border-clinic/30 my-1 ml-3">
                      <Link
                        href="/specialities/dermatology"
                        className="block py-2 text-[14px] text-skin font-semibold"
                      >
                        • Dermatology &amp; Trichology
                      </Link>
                      <Link
                        href="/specialities/orthopaedics"
                        className="block py-2 text-[14px] text-ortho font-semibold"
                      >
                        • Orthopaedics &amp; Joint Care
                      </Link>
                      <Link
                        href="/specialities/physiotherapy"
                        className="block py-2 text-[14px] text-clinic font-semibold"
                      >
                        • Physiotherapy &amp; Rehab
                      </Link>
                    </div>
                  )}
                </div>

                {/* Doctors Submenu */}
                <div>
                  <button
                    onClick={() => setIsDoctorsOpen(!isDoctorsOpen)}
                    className="w-full flex items-center justify-between py-2.5 px-3 text-[15px] font-medium text-primary hover:bg-ivory text-left"
                  >
                    <span>Doctors</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${isDoctorsOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {isDoctorsOpen && (
                    <div className="pl-4 pr-2 py-1 space-y-1 bg-ivory border-l-2 border-clinic/30 my-1 ml-3">
                      <Link
                        href="/doctors/dr-vijayanand-lokhande"
                        className="block py-2 text-[14px] text-primary"
                      >
                        Dr. Vijayanand Lokhande
                        <span className="block text-[11px] text-ortho font-semibold">Orthopaedic Surgeon</span>
                      </Link>
                      <Link
                        href="/doctors/dr-rutuja-lokhande"
                        className="block py-2 text-[14px] text-primary"
                      >
                        Dr. Rutuja Lokhande
                        <span className="block text-[11px] text-skin font-semibold">Dermatologist &amp; Trichologist</span>
                      </Link>
                    </div>
                  )}
                </div>

                <Link
                  href="/about"
                  className="block py-2.5 px-3 text-[15px] font-medium text-primary hover:bg-ivory"
                >
                  About Clinic
                </Link>

                <Link
                  href="/#feedback"
                  className="block py-2.5 px-3 text-[15px] font-medium text-primary hover:bg-ivory"
                >
                  Patient Feedback
                </Link>

                <Link
                  href="/contact"
                  className="block py-2.5 px-3 text-[15px] font-medium text-primary hover:bg-ivory"
                >
                  Contact &amp; Location
                </Link>
              </nav>
            </div>

            {/* Bottom Actions inside drawer */}
            <div className="pt-6 border-t border-border space-y-3">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold tracking-wide ${activeTheme.btn}`}
              >
                <MessageSquare size={16} />
                <span>Book on WhatsApp</span>
              </a>

              <a
                href={`tel:${clinicConfig.contact.phoneCallable}`}
                className="w-full flex items-center justify-center gap-2 bg-ivory text-primary border border-border py-2.5 text-sm font-medium"
              >
                <Phone size={15} className="text-clinic" />
                <span>Call Clinic</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
