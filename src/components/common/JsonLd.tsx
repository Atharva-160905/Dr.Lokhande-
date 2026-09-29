import React from "react";
import { clinicConfig } from "@/data/clinic";

interface MedicalClinicJsonLdProps {
  includeDoctors?: boolean;
}

export const MedicalClinicJsonLd: React.FC<MedicalClinicJsonLdProps> = ({
  includeDoctors = true,
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "@id": `${clinicConfig.seo.siteUrl}/#clinic`,
    "name": clinicConfig.name,
    "alternateName": clinicConfig.shortName,
    "description": clinicConfig.description,
    "url": clinicConfig.seo.siteUrl,
    "telephone": clinicConfig.contact.phoneCallable,
    "medicalSpecialty": [
      "https://schema.org/Dermatology",
      "https://schema.org/Orthopedic",
      "https://schema.org/Physiotherapy",
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": clinicConfig.address.street,
      "addressLocality": clinicConfig.address.landmark,
      "addressRegion": clinicConfig.address.state,
      "postalCode": clinicConfig.address.postalCode,
      "addressCountry": "IN",
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "13:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "17:00",
        "closes": "20:00",
      },
    ],
    ...(includeDoctors
      ? {
          "physician": [
            {
              "@type": "Physician",
              "name": clinicConfig.doctors.vijayanand.name,
              "jobTitle": clinicConfig.doctors.vijayanand.title,
              "medicalSpecialty": "Orthopedic Surgery",
              "description": clinicConfig.doctors.vijayanand.shortBio,
              "url": `${clinicConfig.seo.siteUrl}/doctors/dr-vijayanand-lokhande`,
            },
            {
              "@type": "Physician",
              "name": clinicConfig.doctors.rutuja.name,
              "jobTitle": clinicConfig.doctors.rutuja.title,
              "medicalSpecialty": "Dermatology",
              "description": clinicConfig.doctors.rutuja.shortBio,
              "url": `${clinicConfig.seo.siteUrl}/doctors/dr-rutuja-lokhande`,
            },
          ],
        }
      : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export const PhysicianJsonLd: React.FC<{ doctorKey: "vijayanand" | "rutuja" }> = ({
  doctorKey,
}) => {
  const doc = clinicConfig.doctors[doctorKey];
  const schema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": doc.name,
    "jobTitle": doc.title,
    "medicalSpecialty": doc.specialtyName,
    "description": doc.shortBio,
    "url": `${clinicConfig.seo.siteUrl}/doctors/${doc.slug}`,
    "worksFor": {
      "@type": "MedicalClinic",
      "name": clinicConfig.name,
      "url": clinicConfig.seo.siteUrl,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": clinicConfig.address.street,
        "addressLocality": clinicConfig.address.landmark,
        "addressRegion": clinicConfig.address.state,
        "postalCode": clinicConfig.address.postalCode,
        "addressCountry": "IN",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export const BreadcrumbJsonLd: React.FC<{
  items: { name: string; url: string }[];
}> = ({ items }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `${clinicConfig.seo.siteUrl}${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
