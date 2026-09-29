import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  themeColor?: "skin" | "ortho" | "clinic" | "neutral";
  className?: string;
  as?: "h1" | "h2" | "h3";
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = "left",
  themeColor = "neutral",
  className = "",
  as: Component = "h2",
}) => {
  const eyebrowColors = {
    skin: "text-skin",
    ortho: "text-ortho",
    clinic: "text-clinic",
    neutral: "text-secondary",
  };

  const isCenter = align === "center";

  return (
    <div className={`space-y-2 mb-10 ${isCenter ? "text-center max-w-3xl mx-auto" : "max-w-3xl"} ${className}`}>
      {eyebrow && (
        <span
          className={`text-[11px] sm:text-[12px] font-semibold tracking-widest uppercase block ${eyebrowColors[themeColor]}`}
        >
          {eyebrow}
        </span>
      )}
      
      <Component className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-primary tracking-tight leading-tight">
        {title}
      </Component>

      {subtitle && (
        <p className="text-secondary text-sm sm:text-base leading-relaxed pt-1">
          {subtitle}
        </p>
      )}

      {/* Subtle thin separator line if needed */}
      {!isCenter && (
        <div className="pt-2">
          <div className="w-12 h-[1.5px] bg-border"></div>
        </div>
      )}
    </div>
  );
};
