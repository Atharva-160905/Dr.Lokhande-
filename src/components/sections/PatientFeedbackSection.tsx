import React from "react";
import { clinicConfig } from "@/data/clinic";
import { ExternalLink, Star } from "lucide-react";

export const PatientFeedbackSection: React.FC = () => {
  return (
    <section id="feedback" className="py-20 lg:py-28 bg-ivory border-b border-border/70 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center space-y-6">
          
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-clinic">
            <Star size={14} className="fill-amber-500 text-amber-500" />
            <span>Verified Public Reviews</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-primary tracking-tight">
            Patient Feedback &amp; Ratings
          </h2>

          <p className="text-secondary text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            We value transparent clinical communication. You can read verified patient reviews and consultation ratings directly on our official public profiles.
          </p>

          {/* External Review Links */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
            
            <a
              href={clinicConfig.externalLinks.googleReviews}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-between sm:justify-center gap-3 bg-white hover:bg-clinic hover:text-white border border-border px-7 py-3.5 rounded-full text-xs font-bold text-primary transition-all shadow-sm active:scale-95"
            >
              <span>Read 120+ Google Reviews (4.8 ★)</span>
              <ExternalLink size={14} />
            </a>

            <a
              href={clinicConfig.externalLinks.practoProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-between sm:justify-center gap-3 bg-white hover:bg-clinic hover:text-white border border-border px-7 py-3.5 rounded-full text-xs font-bold text-primary transition-all shadow-sm active:scale-95"
            >
              <span>View Practo Profile</span>
              <ExternalLink size={14} />
            </a>

          </div>

          <p className="text-xs text-secondary pt-2">
            Reviews are independently verified on Google Maps and medical directory listings.
          </p>

        </div>

      </div>
    </section>
  );
};
