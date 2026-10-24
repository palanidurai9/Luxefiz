import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  type?: string;
  image?: string;
  schema?: Record<string, any> | Array<Record<string, any>>;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonicalUrl,
  type = 'website',
  image = 'https://www.luxefiz.com/og-cover.jpg',
  schema,
}) => {
  const siteName = 'Luxefiz';
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
  const canonical = canonicalUrl || 'https://www.luxefiz.com/';

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD Schema markup */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
