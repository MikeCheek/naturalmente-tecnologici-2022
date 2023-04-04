import React from 'react';
import { Helmet } from 'react-helmet';
import { SEOProps } from './seo.types';

const SEO = ({ description = '', lang = 'it', meta = [], title }: SEOProps): JSX.Element => {
  const metaDescription: string = description;
  const defaultTitle: string = 'Syskrack';
  const image = 'https://nt22.syskrack.org/logo-og.jpg';

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
    </Helmet>
  );
};

export default SEO;
