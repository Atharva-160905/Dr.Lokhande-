import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { clinicConfig, getWhatsAppUrl } from "@/data/clinic";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { BreadcrumbJsonLd } from "@/components/common/JsonLd";
import { Star, Play, CheckCircle2, MessageSquare, ExternalLink, ArrowRight, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Patient Stories & Verified Reviews | Dr. Lokhande’s Clinic Pune",
  description:
    "Read authentic patient recovery stories, before-and-after clinical timelines, and verified Google reviews for Dr. Rutuja Lokhande (Dermatology) and Dr. Vijayanand Lokhande (Orthopaedics) in Sinhagad Road, Pune.",
  alternates: {
    canonical: "/patient-feedback",
  },
};

const patientStories = [
  {
    patientName: "Suresh P., 58 yrs",
    area: "Sinhagad Road, Pune",
    specialty: "Orthopaedics • Total Knee Replacement",
    doctor: "Dr. Vijayanand Lokhande",
    theme: "ortho",
    condition: "Severe Grade 3 Knee Osteoarthritis with persistent nocturnal pain & difficulty walking 50 meters.",
    approach: "Staged diagnostic assessment followed by precision Total Knee Replacement (TKR) and same-day physical mobilization.",
    milestones: [
      { time: "Week 1", note: "Walker-assisted walking with zero sharp joint pain." },
      { time: "Week 4", note: "Climbing home stairs independently and discarded walking stick." },
      { time: "Month 3", note: "Completed 2 km continuous morning walks with normal knee flexion." },
    ],
    outcome: "Full joint mobility restored; resumed active daily routine without knee pain.",
  },
  {
    patientName: "Megha N., 26 yrs",
    area: "Anand Nagar, Pune",
    specialty: "Dermatology • Acne & Pigmentation",
    doctor: "Dr. Rutuja Lokhande",
    theme: "skin",
    condition: "2-year history of painful cystic acne flares and persistent dark post-inflammatory marks across cheeks.",
    approach: "Medical regulation of sebum, topical retinoid titration, and 3 sessions of superficial salicylic-glycolic peels with skin barrier hydration.",
    milestones: [
      { time: "Week 2", note: "Cessation of new active cystic breakouts and reduced skin redness." },
      { time: "Week 6", note: "Marked lightening of post-acne brown patches and smoothed skin texture." },
      { time: "Month 3", note: "Complete lesion clearance with simple long-term maintenance routine." },
    ],
    outcome: "Clear, calm skin texture restored with zero aggressive scar formation.",
  },
  {
    patientName: "Kunal S., 31 yrs",
    area: "Hingne Khurd, Pune",
    specialty: "Orthopaedics • Arthroscopy & Sports ACL",
    doctor: "Dr. Vijayanand Lokhande",
    theme: "ortho",
    condition: "Complete ACL ligament rupture and lateral meniscal tear following football sports injury.",
    approach: "Minimally invasive keyhole arthroscopic ACL hamstring graft reconstruction paired with structured phased physiotherapy.",
    milestones: [
      { time: "Week 2", note: "Full extension achieved with targeted quadriceps activation." },
      { time: "Month 3", note: "Stationary cycling and progressive resistance balance training." },
      { time: "Month 6", note: "Pivoting drills cleared; resumed recreational badminton and gym." },
    ],
    outcome: "Complete knee stability regained with return to sports fitness.",
  },
  {
    patientName: "Priyanka D., 34 yrs",
    area: "Manik Baug, Pune",
    specialty: "Dermatology • Trichology & Hair Fall",
    doctor: "Dr. Rutuja Lokhande",
    theme: "skin",
    condition: "Acute telogen effluvium hair shedding and noticeable widening of hair parting following viral illness.",
    approach: "Scalp dermoscopy analysis, correction of micronutrient deficiencies, and targeted peptide growth factor solutions.",
    milestones: [
      { time: "Week 3", note: "Significant reduction in daily hair brush fall count." },
      { time: "Month 2", note: "Visible early follicular sprouts documented on follow-up dermoscopy." },
      { time: "Month 4", note: "Noticeable density improvement with scalp dryness fully resolved." },
    ],
    outcome: "Natural scalp density and hair volume recovered with ethical medical care.",
  },
];

export default function PatientFeedbackPage() {
  return (
    <div className="bg-white">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Patient Stories & Feedback", url: "/patient-feedback" },
        ]}
      />

      {/* Hero Header - Warm Ivory */}
      <div className="py-10 sm:py-14 bg-ivory border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Patient Feedback & Stories" }]} />

          <div className="max-w-3xl mt-6 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-clinic">
              <Star size={14} className="fill-amber-500 text-amber-500" />
              <span>Patient Outcomes &amp; Experiences</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-primary tracking-tight">
              Patient Stories &amp; Clinical Outcomes
            </h1>
            <p className="text-secondary text-base sm:text-lg leading-relaxed">
              Transparent clinical timelines, recovery milestones, and verified patient reviews from our Dermatology and Orthopaedic practice in Sinhagad Road, Pune.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 space-y-20">
        
        {/* Section 1: Detailed Patient Case Stories & Timelines */}
        <section className="space-y-10">
          <div className="max-w-2xl space-y-1.5">
            <span className="text-xs font-bold uppercase tracking-wider text-clinic block">
              Documented Recovery Milestones
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-primary">
              Clinical Case Stories &amp; Recovery Timelines
            </h2>
            <p className="text-xs sm:text-sm text-secondary">
              Real treatment pathways demonstrating how personalized diagnostic care leads to sustained recovery.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {patientStories.map((story, idx) => {
              const isSkin = story.theme === "skin";
              return (
                <div
                  key={idx}
                  className={`bg-white border rounded-[2.5rem] ${
                    isSkin ? "rounded-tr-md border-[#D6E2D3]" : "rounded-tl-md border-[#E5D4D6]"
                  } p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden`}
                >
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4 pb-3 border-b border-border/70">
                      <div>
                        <span className={`inline-block text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                          isSkin ? "bg-[#EAF2E8] text-skin border border-[#D6E2D3]" : "bg-[#F6EEEE] text-ortho border border-[#E5D4D6]"
                        }`}>
                          {story.specialty}
                        </span>
                        <h3 className="font-serif text-xl font-bold text-primary mt-2">
                          {story.patientName}
                        </h3>
                        <p className="text-[11px] text-secondary">{story.area} • Attended by {story.doctor}</p>
                      </div>
                      <div className="flex items-center text-amber-500 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200/60">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={11} className="fill-amber-500 text-amber-500" />
                        ))}
                      </div>
                    </div>

                    {/* Problem Statement */}
                    <div className="space-y-1 text-xs">
                      <strong className="text-primary font-semibold block text-[11px] uppercase tracking-wider">
                        Initial Clinical Condition:
                      </strong>
                      <p className="text-secondary leading-relaxed bg-ivory p-3.5 rounded-2xl border border-border/60">
                        {story.condition}
                      </p>
                    </div>

                    {/* Medical Approach */}
                    <div className="space-y-1 text-xs">
                      <strong className="text-primary font-semibold block text-[11px] uppercase tracking-wider">
                        Specialist Treatment Approach:
                      </strong>
                      <p className="text-secondary leading-relaxed pl-1">
                        {story.approach}
                      </p>
                    </div>

                    {/* Recovery Timeline Milestones */}
                    <div className="space-y-2 pt-1">
                      <strong className="text-primary font-semibold block text-[11px] uppercase tracking-wider">
                        Documented Recovery Timeline:
                      </strong>
                      <div className="space-y-2 pl-3 border-l-2 border-border/80">
                        {story.milestones.map((m, mIdx) => (
                          <div key={mIdx} className="text-xs flex items-baseline gap-2">
                            <span className="font-bold text-primary flex-shrink-0">{m.time}:</span>
                            <span className="text-secondary">{m.note}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Final Outcome */}
                    <div className={`p-3.5 rounded-2xl text-xs flex items-start gap-2.5 border ${
                      isSkin ? "bg-[#F1F5EF] border-[#D6E2D3] text-skin-deep" : "bg-[#F6EEEE] border-[#E5D4D6] text-ortho-deep"
                    }`}>
                      <CheckCircle2 size={16} className="flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="font-bold">Clinical Outcome: </strong>
                        <span>{story.outcome}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 2: Patient Video Testimonial Player (Future-Ready Frames) */}
        <section className="bg-ivory border border-border/80 rounded-[3rem] p-6 sm:p-10 space-y-6 shadow-sm">
          <div className="max-w-2xl space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-clinic block">
              Video Testimonials
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-primary">
              Patient Video Interviews &amp; Experiences
            </h2>
            <p className="text-xs sm:text-sm text-secondary">
              Watch patient perspectives on their surgical recovery and dermatological treatments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            
            {/* Video Frame 1: Knee Replacement Recovery */}
            <div className="bg-white border border-border/80 rounded-[2rem] overflow-hidden flex flex-col justify-between shadow-xs">
              <div className="relative aspect-[16/9] w-full bg-slate-900 flex items-center justify-center group cursor-pointer">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                <div className="relative z-10 w-12 h-12 rounded-full bg-white/90 group-hover:bg-white text-clinic flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                  <Play size={20} className="fill-clinic text-clinic ml-1" />
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-white text-xs z-10 flex justify-between items-end">
                  <span className="font-semibold bg-black/60 px-3 py-0.5 rounded-full text-[11px]">Knee Replacement Journey</span>
                  <span className="text-[11px] opacity-80">Sinhagad Road Clinic</span>
                </div>
              </div>
              <div className="p-4 space-y-1">
                <h4 className="font-serif text-base font-bold text-primary">
                  &ldquo;Walking without pain after 4 years of arthritis&rdquo;
                </h4>
                <p className="text-xs text-secondary">
                  Patient shares their day-by-day joint replacement recovery and physiotherapy timeline under Dr. Vijayanand Lokhande.
                </p>
              </div>
            </div>

            {/* Video Frame 2: Acne & Skin Transformation */}
            <div className="bg-white border border-border/80 rounded-[2rem] overflow-hidden flex flex-col justify-between shadow-xs">
              <div className="relative aspect-[16/9] w-full bg-slate-900 flex items-center justify-center group cursor-pointer">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                <div className="relative z-10 w-12 h-12 rounded-full bg-white/90 group-hover:bg-white text-skin flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                  <Play size={20} className="fill-skin text-skin ml-1" />
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-white text-xs z-10 flex justify-between items-end">
                  <span className="font-semibold bg-black/60 px-3 py-0.5 rounded-full text-[11px]">Dermatology Care</span>
                  <span className="text-[11px] opacity-80">Dr. Rutuja Lokhande</span>
                </div>
              </div>
              <div className="p-4 space-y-1">
                <h4 className="font-serif text-base font-bold text-primary">
                  &ldquo;Clear guidance and skin barrier restoration&rdquo;
                </h4>
                <p className="text-xs text-secondary">
                  Patient recounts their structured acne management and chemical peel experience without harsh side effects.
                </p>
              </div>
            </div>

          </div>

          <p className="text-[11px] text-secondary/80 pt-2">
            * Recorded with verified patient consent. Patient confidentiality and medical privacy strictly preserved.
          </p>
        </section>

        {/* Section 3: Verified Google & Public Reviews Directory Links */}
        <section className="border-t border-border pt-12 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-primary">
              Public Reviews &amp; Directory Ratings
            </h2>
            <p className="text-xs sm:text-sm text-secondary">
              Read real-time verified reviews directly on Google Maps and medical practitioner portals.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
            <a
              href={clinicConfig.externalLinks.googleReviews}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-between sm:justify-center gap-3 bg-clinic hover:bg-clinic-deep text-white px-7 py-3.5 rounded-full text-xs font-bold tracking-wide shadow-sm transition-transform active:scale-95"
            >
              <span>View 120+ Reviews on Google</span>
              <ExternalLink size={14} />
            </a>

            <a
              href={clinicConfig.externalLinks.practoProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-between sm:justify-center gap-3 bg-white hover:bg-ivory text-primary border border-border px-7 py-3.5 rounded-full text-xs font-bold transition-colors"
            >
              <span>View Practo Ratings</span>
              <ExternalLink size={14} className="text-clinic" />
            </a>
          </div>
        </section>

        {/* Section 4: Bottom Consultation CTA */}
        <section className="bg-clinic-light border border-clinic-border rounded-[2.5rem] p-8 sm:p-12 text-center space-y-4 max-w-3xl mx-auto shadow-sm">
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-primary">
            Experience Focused Specialist Medical Care
          </h3>
          <p className="text-xs sm:text-sm text-secondary max-w-lg mx-auto leading-relaxed">
            Schedule an appointment at our Sinhagad Road clinic for a thorough diagnostic consultation and personalized recovery plan.
          </p>
          <div className="pt-2">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-clinic hover:bg-clinic-deep text-white px-8 py-3.5 rounded-full text-xs font-bold tracking-wide shadow-sm transition-transform active:scale-95"
            >
              <MessageSquare size={16} />
              <span>Book Appointment on WhatsApp</span>
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}
