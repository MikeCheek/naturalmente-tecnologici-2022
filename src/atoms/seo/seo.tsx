import React from 'react';
import { Helmet } from 'react-helmet';
import { SEOProps } from './seo.types';

const SEO = ({ description = '', lang = 'it', meta = [], title }: SEOProps): JSX.Element => {
  const metaDescription: string = description;
  const defaultTitle: string = 'Syskrack';
  const image = 'https://nt22.syskrack.org/logo-og.jpg';

  const microData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@context': 'https://www.schema.org',
        '@type': 'Event',
        name: 'Naturalmente Tecnologici (2022)',
        url: 'https://nt22.syskrack.org/',
        description: "Il primo evento annuale di Syskrack, che vuole essere \"un'occasione per immaginare nuovi orizzonti di sviluppo tecnologico etico, socialmente e ambientalmente sostenibile\".",
        startDate: '2022-08-11T09:00:00.000Z',
        endDate: '2022-08-13T23:59:59.999Z',
        eventStatus: 'https://schema.org/EventScheduled',
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        isAccessibleForFree: false,
        inLanguage: 'IT',
        location: {
          '@type': 'Place',
          name: 'Tijuana Camp',
        },
        organizer: {
          '@type': 'Organization',
          name: 'Syskrack Giuseppe Porsia',
          url: 'https://www.syskrack.org/',
          sameAs: ['https://www.wikidata.org/wiki/Q116907424', 'https://syskrack.org/'],
        },
        sameAs: [
          'https://www.wikidata.org/wiki/Q118213385',
          'https://www.wikidata.org/wiki/Q117881465',
        ],
      },
    ],
  };

  return (
    <Helmet
      htmlAttributes={{
        lang: lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s - ${defaultTitle}` : undefined}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:locale`,
          content: 'it_IT',
        },
        {
          property: `og:image`,
          content: image,
        },
        {
          property: `og:image:type`,
          content: 'image/jpg',
        },
        {
          property: `og:image:alt`,
          content: title,
        },
        {
          property: `og:image:secure_url`,
          content: image,
        },
        {
          property: `og:image:width`,
          content: '1200',
        },
        {
          property: `og:image:height`,
          content: '630',
        },
        {
          property: `og:url`,
          content: `https://nt22.syskrack.org`,
        },
        {
          property: `og:site_name`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          /*
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        */
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          property: `twitter:image`,
          content: image,
        },
      ].concat(meta)}
    >
      <link rel="icon" href="/favicon.ico" />
      <script type="application/ld+json">{JSON.stringify(microData)}</script>
    </Helmet>
  );
};

export default SEO;
