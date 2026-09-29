import React from "react";
import { clinicConfig, getWhatsAppUrl } from "@/data/clinic";
import { MapPin, Clock, Phone, MessageSquare, ExternalLink, Navigation } from "lucide-react";

export const LocationHoursSection: React.FC<{ isPage?: boolean }> = ({ isPage = false }) => {
  return (
    <section className={`bg-white ${isPage ? "py-8" : "py-16 lg:py-24"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-clinic bg-clinic-light px-3 py-1 border border-clinic-border inline-block">
            Clinic Accessibility
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-primary tracking-tight mt-2">
            Clinic Location &amp; Consultation Hours
          </h2>
          <p className="text-secondary text-sm sm:text-base mt-2">
            Centrally situated on Sinhagad Road, easily accessible from Hingne Khurd, Manik Baug, Anand Nagar, and surrounding Pune neighborhoods.
          </p>
          <div className="w-16 h-[2px] bg-clinic mt-3"></div>
        </div>

        {/* 2-column layout: Info on left, Map on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Info Card (5 cols) in Warm Ivory */}
          <div className="lg:col-span-5 bg-ivory border border-border p-6 sm:p-8 flex flex-col justify-between space-y-6">
            
            <div className="space-y-6">
              
              {/* Address block */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-primary font-bold text-sm">
                  <MapPin size={18} className="text-ortho" />
                  <span>Clinic Address</span>
                </div>
                <div className="pl-6 text-xs sm:text-sm text-secondary space-y-0.5">
                  <p className="font-bold text-primary">{clinicConfig.name}</p>
                  <p>{clinicConfig.address.street}</p>
                  <p>{clinicConfig.address.landmark}</p>
                  <p>{clinicConfig.address.city}, {clinicConfig.address.state} - {clinicConfig.address.postalCode}</p>
                </div>
              </div>

              {/* Consultation Hours */}
              <div className="space-y-2 border-t border-border pt-4">
                <div className="flex items-center gap-2 text-primary font-bold text-sm">
                  <Clock size={18} className="text-clinic" />
                  <span>Consultation Timings</span>
                </div>
                <div className="pl-6 text-xs sm:text-sm text-secondary space-y-1.5">
                  <div className="flex justify-between py-1 bg-white px-3 border border-border">
                    <span className="font-bold text-primary">{clinicConfig.timings.days}:</span>
                    <span className="font-medium text-primary">{clinicConfig.timings.morning}</span>
                  </div>
                  <div className="flex justify-between py-1 bg-white px-3 border border-border">
                    <span className="text-secondary font-medium">Evening Slot:</span>
                    <span className="font-medium text-primary">{clinicConfig.timings.evening}</span>
                  </div>
                  <div className="flex justify-between py-1 text-xs text-secondary px-3">
                    <span>Sunday:</span>
                    <span>{clinicConfig.timings.sunday}</span>
                  </div>
                </div>
              </div>

              {/* Direct Contacts */}
              <div className="space-y-2 border-t border-border pt-4">
                <div className="flex items-center gap-2 text-primary font-bold text-sm">
                  <Phone size={18} className="text-skin" />
                  <span>Direct Communication</span>
                </div>
                <div className="pl-6 text-xs sm:text-sm space-y-2">
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
                      className="text-[#128C7E] hover:underline font-semibold inline-flex items-center gap-1.5"
                    >
                      <MessageSquare size={15} />
                      <span>WhatsApp: {clinicConfig.contact.whatsappDisplay}</span>
                    </a>
                  </p>
                </div>
              </div>

            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-border flex flex-col sm:flex-row gap-3">
              <a
                href={clinicConfig.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-white hover:bg-ivory text-primary border border-border py-3 px-4 text-xs font-bold tracking-wide transition-colors"
              >
                <Navigation size={14} className="text-ortho" />
                <span>Google Maps</span>
              </a>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-clinic hover:bg-clinic-deep text-white py-3 px-4 text-xs font-bold tracking-wide transition-colors"
              >
                <MessageSquare size={15} />
                <span>Book on WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Interactive Map Embed (7 cols) */}
          <div className="lg:col-span-7 border border-border min-h-[380px] relative bg-white overflow-hidden flex flex-col">
            <iframe
              src={clinicConfig.address.embedMapUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "380px", flex: 1 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dr. Lokhande’s Skin & Orthopaedic Speciality Clinic Location Map Sinhagad Road Pune"
              className="w-full h-full"
            ></iframe>
            <div className="p-3 bg-white border-t border-border text-xs text-secondary flex justify-between items-center px-4">
              <span className="font-medium text-primary">Sinhagad Road, Hingne Khurd, Pune 411051</span>
              <a
                href={clinicConfig.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-clinic hover:underline font-bold inline-flex items-center gap-1"
              >
                <span>Larger Map</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
