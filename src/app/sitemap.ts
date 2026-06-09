import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://shanelka.com';

  return [
    {
      url: baseUrl,
      lastModified: new Date('2025-07-01'),
      changeFrequency: 'monthly',
      priority: 1
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date('2025-07-01'),
      changeFrequency: 'weekly',
      priority: 0.8
    }
  ];
}
