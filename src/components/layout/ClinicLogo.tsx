import Link from "next/link";
import Image from "next/image";
import React from "react";

interface ClinicLogoProps {
  className?: string;
  isFooter?: boolean;
}

export const ClinicLogo: React.FC<ClinicLogoProps> = ({
  className = "",
  isFooter = false,
}) => {
  return (
    <Link
      href="/"
      className={`inline-flex items-center group focus:outline-none flex-shrink-0 max-w-[70vw] sm:max-w-none ${className}`}
      aria-label="Dr. Lokhande’s Skin & Orthopaedic Speciality Clinic - Home"
    >
      <div
        className={`relative flex items-center ${
          isFooter
            ? "h-14 sm:h-16 w-[220px] sm:w-[260px] max-w-full"
            : "h-10 sm:h-13 md:h-14 lg:h-16 xl:h-[68px] w-[170px] sm:w-[220px] md:w-[280px] lg:w-[350px] xl:w-[380px]"
        }`}
      >
        <Image
          src="/WebsiteLogo.png"
          alt="Dr. Lokhande’s Skin & Orthopaedic Speciality Clinic"
          fill
          priority
          sizes={
            isFooter
              ? "(max-width: 640px) 220px, 260px"
              : "(max-width: 640px) 180px, (max-width: 1024px) 280px, 380px"
          }
          className={`object-contain object-left ${
            isFooter ? "" : "scale-[1.35] sm:scale-[1.45] lg:scale-[1.55] origin-left"
          }`}
        />
      </div>
    </Link>
  );
};
