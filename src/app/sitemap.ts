import { MetadataRoute } from "next";
import { clinicConfig } from "@/data/clinic";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = clinicConfig.seo.siteUrl;

  const routes = [
    "",
    "/doctors",
    "/doctors/dr-vijayanand-lokhande",
    "/doctors/dr-rutuja-lokhande",
    "/specialities",
    "/specialities/dermatology",
    "/specialities/orthopaedics",
    "/specialities/physiotherapy",
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route.startsWith("/doctors") || route.startsWith("/specialities") ? 0.8 : 0.5,
  }));
}
