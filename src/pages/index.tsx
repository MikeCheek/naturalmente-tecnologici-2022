import * as React from 'react';
import SEO from '../atoms/seo/seo';
import Hero from '../components/hero/hero';
import '../styles/globals.scss';

const IndexPage = () => {
  return (
    <main>
      <SEO title="Naturalmente Tecnologici" description="Naturalmente Tecnologici Evento Grassano (MT)" />
      <Hero />
    </main>
  );
};

export default IndexPage;
