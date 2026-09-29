import React from "react";
import { clinicConfig } from "@/data/clinic";
import { ExternalLink, Star } from "lucide-react";

export const PatientFeedbackSection: React.FC = () => {
  return (
    <section id="feedback" className="py-16 lg:py-20 bg-ivory border-b border-border scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="border border-border bg-white p-8 sm:p-12 max-w-4xl mx-auto">
          <div className="text-center space-y-4">
            
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-clinic-light border border-clinic-border text-xs font-bold text-clinic-deep uppercase tracking-wider">
              <Star size={13} className="fill-amber-400 text-amber-400" />
              <span>Patient Experiences &amp; Reviews</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-primary tracking-tight">
              Verified Public Patient Feedback
            </h2>

            <p className="text-secondary text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              We value transparent medical communication and constructive feedback. You can read verified patient reviews, ratings, and consultation experiences directly on our official public directory profiles.
            </p>

            {/* External Review Cards */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto">
              
              <a
                href={clinicConfig.externalLinks.googleReviews}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-ivory hover:bg-clinic-light border border-border hover:border-clinic text-primary transition-colors group"
              >
                <div className="text-left space-y-0.5">
                  <span className="block text-xs font-bold text-primary group-hover:text-clinic">
                    Google Reviews
                  </span>
                  <span className="block text-[11px] text-secondary">
                    Sinhagad Road Clinic Profile
                  </span>
                </div>
                <div className="flex items-center gap-1 text-clinic text-xs font-bold">
                  <span>View</span>
                  <ExternalLink size={14} />
                </div>
              </a>

              <a
                href={clinicConfig.externalLinks.practoProfile}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-ivory hover:bg-clinic-light border border-border hover:border-clinic text-primary transition-colors group"
              >
                <div className="text-left space-y-0.5">
                  <span className="block text-xs font-bold text-primary group-hover:text-clinic">
                    Practo Profile
                  </span>
                  <span className="block text-[11px] text-secondary">
                    Specialist Doctor Consultations
                  </span>
                </div>
                <div className="flex items-center gap-1 text-clinic text-xs font-bold">
                  <span>View</span>
                  <ExternalLink size={14} />
                </div>
              </a>

            </div>

            <p className="text-[11px] text-secondary pt-2">
              Note: Reviews are hosted and verified on third-party medical and local directories.
            </p>

          </div>
        </div>

      </div>
    </section>
  );
};
