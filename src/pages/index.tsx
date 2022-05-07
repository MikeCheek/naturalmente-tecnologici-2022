import * as React from 'react';
import SEO from '../atoms/seo/seo';
import Hero from '../components/hero/hero';
import '../styles/globals.scss';

// styles
const pageStyles = {
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
};
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <SEO title="Naturalmente Tecnologici" description="Naturalmente Tecnologici Evento Grassano (MT)" />
      <Hero />
    </main>
  );
};

export default IndexPage;
