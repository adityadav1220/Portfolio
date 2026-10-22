import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: "https://portfolio-delta-hazel-98.vercel.app/", changeFrequency: "monthly", priority: 1 }];
}
