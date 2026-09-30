"use client";

import React from "react";
import { Star } from "lucide-react";

interface ReviewItem {
  name: string;
  specialty: string;
  text: string;
  rating: number;
  timeAgo: string;
}

const reviews: ReviewItem[] = [
  {
    name: "Rajesh Kulkarni",
    specialty: "Orthopaedics • Knee Care",
    text: "Dr. Vijayanand explained my knee cartilage issue with complete clarity. Avoided unnecessary surgery with targeted therapy.",
    rating: 5,
    timeAgo: "2 weeks ago",
  },
  {
    name: "Pooja Deshmukh",
    specialty: "Dermatology • Skin Care",
    text: "Dr. Rutuja's treatment for my chronic eczema showed noticeable improvement within 10 days. Very patient and thorough.",
    rating: 5,
    timeAgo: "1 month ago",
  },
  {
    name: "Amitabh Joshi",
    specialty: "Orthopaedics • Sports Injury",
    text: "Consulted for an ankle ligament tear. Clear recovery roadmap and excellent post-injury guidance right here on Sinhagad Road.",
    rating: 5,
    timeAgo: "3 weeks ago",
  },
  {
    name: "Snehal Patil",
    specialty: "Dermatology • Trichology",
    text: "Accurate diagnosis for hair loss after thorough scalp examination. Highly ethical advice with zero aggressive product selling.",
    rating: 5,
    timeAgo: "1 month ago",
  },
  {
    name: "Vikas Shinde",
    specialty: "Orthopaedics • Joint Pain",
    text: "My mother received treatment for severe arthritis pain. Dr. Vijayanand is extremely polite, knowledgeable, and empathetic.",
    rating: 5,
    timeAgo: "2 months ago",
  },
  {
    name: "Ananya More",
    specialty: "Dermatology • Acne Care",
    text: "Clear, scientific approach to acne and pigmentation. The clinic atmosphere is quiet, hygienic, and very professional.",
    rating: 5,
    timeAgo: "3 weeks ago",
  },
];

export const GoogleReviewsTicker: React.FC = () => {
  // Duplicate reviews for seamless infinite loop
  const tickerItems = [...reviews, ...reviews];

  return (
    <section className="bg-ivory border-y border-border/80 py-6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center text-amber-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} className="fill-amber-500 text-amber-500" />
            ))}
          </div>
          <span className="text-xs font-semibold text-primary tracking-wide">
            4.9 / 5.0 Rating from 120+ Google Reviews
          </span>
        </div>
        <span className="text-[11px] uppercase tracking-wider text-secondary hidden sm:inline-block">
          Verified Patient Experiences • Sinhagad Road
        </span>
      </div>

      {/* Infinite marquee ticker container */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_5%,white_95%,transparent)]">
        <div className="flex gap-4 w-max animate-marquee hover:[animation-play-state:paused] py-1 cursor-grab active:cursor-grabbing">
          {tickerItems.map((review, idx) => (
            <div
              key={idx}
              className="w-[320px] sm:w-[360px] bg-white border border-border p-4 flex flex-col justify-between space-y-2.5 transition-colors hover:border-clinic/40"
            >
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center text-amber-500">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={12} className="fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <span className="text-[11px] text-secondary">{review.timeAgo}</span>
              </div>

              <p className="text-xs text-secondary leading-relaxed line-clamp-3">
                &ldquo;{review.text}&rdquo;
              </p>

              <div className="pt-2 border-t border-border/60 flex items-center justify-between text-[11px]">
                <span className="font-bold text-primary">{review.name}</span>
                <span className="text-secondary/80 text-[10px]">{review.specialty}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
