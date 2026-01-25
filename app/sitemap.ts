import { MetadataRoute } from "next";
import { SITE_URL } from "../lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date()
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: new Date()
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: new Date()
    },
    {
      url: `${SITE_URL}/thank-you`,
      lastModified: new Date()
    }
  ];
}
