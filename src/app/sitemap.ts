import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://omargaafer.vercel.app";
  const projects = [
    "specsense-ai",
    "foodverse",
    "edgmon-v4",
    "ecommerce-microservices",
    "huffman-compressor",
    "apexbank",
    "photographer-ms",
    "click-breaker",
    "edgmon-v3-1",
    "enterprise-network",
  ];

  const projectUrls = projects.map((id) => ({
    url: `${baseUrl}/projects/${id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    ...projectUrls,
  ];
}
