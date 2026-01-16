import type { MetadataRoute } from "next";
import { getPageMap } from "nextra/page-map";
import { metadata } from "./layout";

const baseUrl = metadata.metadataBase?.toString().replace(/\/$/, "") || "https://redefine-docs.ohevan.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const enPageMap = await getPageMap("en");
  const zhPageMap = await getPageMap("zh");

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Helper function to process page map entries
  const processPageMap = (pageMap: any[], lang: string, parentRoute = "") => {
    pageMap.forEach(page => {
      // Skip meta entries, separators, and pages without names
      if (page.kind === 'Meta' || 
          !page.name || 
          page.name.startsWith('_') ||  // Skip separator entries
          page.type === 'separator' ||   // Skip explicit separators
          !page.route ||                 // Skip pages without routes
          page.display === 'hidden'      // Skip hidden pages
      ) return;
      
      // Skip external links and special routes
      if (page.route.startsWith('http') || 
          page.route.includes('[[') || 
          page.route.includes(']]')
      ) {
        return;
      }

      // Remove any double slashes and clean up the URL
      const cleanUrl = `${baseUrl}/${lang}${page.route}`.replace(/([^:]\/)\/+/g, "$1");

      sitemapEntries.push({
        url: cleanUrl,
        lastModified: new Date(),
        changeFrequency: page.route === '/' ? 'daily' : 'weekly',
        priority: page.route === '/' ? 1 : 0.8,
        alternates: {
          languages: {
            en: `${baseUrl}/en${page.route}`.replace(/([^:]\/)\/+/g, "$1"),
            zh: `${baseUrl}/zh${page.route}`.replace(/([^:]\/)\/+/g, "$1"),
          },
        },
      });

      // Recursively process children
      if (page.children) {
        processPageMap(page.children, lang, page.route);
      }
    });
  };

  // Process both language page maps
  processPageMap(enPageMap, 'en');
  processPageMap(zhPageMap, 'zh');

  // Add root URLs for each language
  sitemapEntries.push(
    {
      url: `${baseUrl}/en`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
      alternates: {
        languages: {
          en: `${baseUrl}/en`,
          zh: `${baseUrl}/zh`,
        },
      },
    },
    {
      url: `${baseUrl}/zh`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
      alternates: {
        languages: {
          en: `${baseUrl}/en`,
          zh: `${baseUrl}/zh`,
        },
      },
    }
  );

  return sitemapEntries;
}
