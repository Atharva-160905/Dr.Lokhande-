import { MetadataRoute } from "next";
import { clinicConfig } from "@/data/clinic";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${clinicConfig.seo.siteUrl}/sitemap.xml`,
  };
}
