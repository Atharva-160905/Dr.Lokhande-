import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="py-3 text-xs text-secondary mb-6 border-b border-border/60">
      <ol className="flex items-center flex-wrap gap-1.5">
        <li>
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center gap-1.5">
              <ChevronRight size={12} className="text-secondary/60" />
              {isLast || !item.href ? (
                <span className="text-primary font-medium truncate max-w-xs sm:max-w-md" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className="hover:text-primary transition-colors">
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
