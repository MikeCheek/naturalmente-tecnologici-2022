import React from 'react';
import SEO from '../atoms/seo/seo';
import ArticlesHero from '../components/articlesHero/articlesHero';
import Layout from '../components/layout/layout';

const Articoli = () => {
  return (
    <>
      <SEO
        title="Naturalmente Tecnologici"
        description="L'evento si propone di essere occasione di ritrovo della community di Syskrack nonché strumento di disseminazione culturale sul territorio."
      />
      <Layout>
        <ArticlesHero />
      </Layout>
    </>
  );
};

export default Articoli;
