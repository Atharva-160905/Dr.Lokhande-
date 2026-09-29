"use client";

import React from "react";
import { clinicConfig, getWhatsAppUrl } from "@/data/clinic";
import { Phone, MessageSquare, MapPin } from "lucide-react";

export const MobileActionBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-white border-t border-border shadow-lg lg:hidden px-3 py-2 flex items-center gap-2">
      {/* Call Button */}
      <a
        href={`tel:${clinicConfig.contact.phoneCallable}`}
        className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 text-primary hover:bg-surface-muted border border-border text-[11px] font-medium"
        aria-label="Call Clinic"
      >
        <Phone size={16} className="text-clinic mb-0.5" />
        <span>Call Clinic</span>
      </a>

      {/* Dominant WhatsApp Action Button */}
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-[2] flex items-center justify-center gap-2 py-2 px-3 bg-[#128C7E] active:bg-[#075E54] text-white text-[13px] font-semibold tracking-wide shadow-sm"
        aria-label="Book on WhatsApp"
      >
        <MessageSquare size={17} />
        <span>WhatsApp Book</span>
      </a>

      {/* Directions */}
      <a
        href={clinicConfig.address.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 text-primary hover:bg-surface-muted border border-border text-[11px] font-medium"
        aria-label="Get Clinic Directions on Map"
      >
        <MapPin size={16} className="text-ortho mb-0.5" />
        <span>Directions</span>
      </a>
    </div>
  );
};
