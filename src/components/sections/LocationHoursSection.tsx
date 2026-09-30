import React from "react";
import { clinicConfig, getWhatsAppUrl } from "@/data/clinic";
import { MapPin, Clock, Phone, MessageSquare, ExternalLink, Navigation } from "lucide-react";

export const LocationHoursSection: React.FC<{ isPage?: boolean }> = ({ isPage = false }) => {
  return (
    <section className={`bg-white ${isPage ? "py-8" : "py-20 lg:py-28"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-14 space-y-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-clinic block">
            Location &amp; Hours
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-primary tracking-tight">
            Visit Dr. Lokhande’s Clinic
          </h2>
          <p className="text-secondary text-base leading-relaxed max-w-xl">
            Centrally situated at Monte Rosa on Sinhagad Road, accessible from Hingne Khurd, Manik Baug, Anand Nagar, and surrounding Pune areas.
          </p>
        </div>

        {/* 2-column layout: Info on left, Map on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Info Column (5 cols) with Curved Architectural Silhouettes */}
          <div className="lg:col-span-5 bg-ivory border border-border/80 rounded-[2.5rem] rounded-tr-md p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-sm">
            
            <div className="space-y-6">
              
              {/* Address block */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-primary font-bold text-sm">
                  <div className="w-8 h-8 rounded-full bg-white border border-border/70 flex items-center justify-center text-clinic shadow-xs">
                    <MapPin size={15} />
                  </div>
                  <span>Clinic Address</span>
                </div>
                <div className="pl-10 text-xs sm:text-sm text-secondary space-y-0.5">
                  <p className="font-bold text-primary">{clinicConfig.name}</p>
                  <p>{clinicConfig.address.street}</p>
                  <p>{clinicConfig.address.landmark}</p>
                  <p>{clinicConfig.address.city}, {clinicConfig.address.state} - {clinicConfig.address.postalCode}</p>
                </div>
              </div>

              {/* Consultation Hours */}
              <div className="space-y-2 border-t border-border/80 pt-5">
                <div className="flex items-center gap-2 text-primary font-bold text-sm">
                  <div className="w-8 h-8 rounded-full bg-white border border-border/70 flex items-center justify-center text-clinic shadow-xs">
                    <Clock size={15} />
                  </div>
                  <span>Consultation Timings</span>
                </div>
                <div className="pl-10 text-xs sm:text-sm text-secondary space-y-1.5">
                  <div className="flex justify-between py-1 border-b border-border/60">
                    <span className="font-semibold text-primary">Monday – Saturday:</span>
                    <span className="font-medium text-primary">9:00 AM – 1:00 PM</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-border/60">
                    <span className="font-semibold text-primary">Evening Session:</span>
                    <span className="font-medium text-primary">5:00 PM – 8:00 PM</span>
                  </div>
                  <div className="flex justify-between py-1 text-xs text-secondary/80">
                    <span>Sunday:</span>
                    <span className="italic">{clinicConfig.timings.sunday}</span>
                  </div>
                </div>
              </div>

              {/* Direct Contacts */}
              <div className="space-y-2 border-t border-border/80 pt-5">
                <div className="flex items-center gap-2 text-primary font-bold text-sm">
                  <div className="w-8 h-8 rounded-full bg-white border border-border/70 flex items-center justify-center text-clinic shadow-xs">
                    <Phone size={15} />
                  </div>
                  <span>Contact &amp; Appointments</span>
                </div>
                <div className="pl-10 text-xs sm:text-sm space-y-1.5">
                  <p>
                    <a
                      href={`tel:${clinicConfig.contact.phoneCallable}`}
                      className="text-primary hover:text-clinic font-semibold inline-flex items-center gap-1.5"
                    >
                      <span>Phone: {clinicConfig.contact.phoneDisplay}</span>
                    </a>
                  </p>
                  <p>
                    <a
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-clinic hover:text-clinic-deep font-semibold inline-flex items-center gap-1.5"
                    >
                      <MessageSquare size={14} />
                      <span>WhatsApp: {clinicConfig.contact.whatsappDisplay}</span>
                    </a>
                  </p>
                </div>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-border/80 flex flex-col sm:flex-row gap-3">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-clinic hover:bg-clinic-deep text-white px-6 py-3.5 rounded-full text-xs font-bold tracking-wide shadow-sm transition-transform active:scale-95 text-center"
              >
                <MessageSquare size={15} />
                <span>Book Appointment</span>
              </a>

              <a
                href={clinicConfig.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-ivory text-primary border border-border px-5 py-3.5 rounded-full text-xs font-semibold transition-colors text-center"
              >
                <Navigation size={14} className="text-clinic" />
                <span>Directions</span>
              </a>
            </div>

          </div>

          {/* Map Column (7 cols) with Curved Frame */}
          <div className="lg:col-span-7 border border-border/80 rounded-[2.5rem] rounded-tl-md min-h-[360px] sm:min-h-[440px] relative bg-ivory overflow-hidden flex flex-col shadow-sm">
            <iframe
              src={clinicConfig.address.embedMapUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "360px", flex: 1 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dr. Lokhande’s Skin & Orthopaedic Speciality Clinic Location Map Sinhagad Road Pune"
              className="w-full h-full min-h-[360px]"
            ></iframe>
            
            <div className="p-3.5 bg-white border-t border-border text-xs text-secondary flex flex-wrap justify-between items-center px-5 gap-2">
              <span>Third Floor, Office 305, Monte Rosa, Sinhagad Road, Pune</span>
              <a
                href={clinicConfig.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-clinic hover:text-clinic-deep font-semibold inline-flex items-center gap-1.5"
              >
                <span>Open in Google Maps</span>
                <ExternalLink size={13} />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
