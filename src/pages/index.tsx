import React, { useState } from 'react';
import SEO from '../atoms/seo/seo';
import Bugs from '../components/bugs/bugs';
import Hero from '../components/hero/hero';
import '../styles/globals.scss';
import Layout from '../components/layout/layout';

const IndexPage = () => {
  const [crushed, setCrushed] = useState<number>(0);
  const handleClick = () => {
    setCrushed(crushed + 1);
  };

  const crushedStyle = {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    margin: 'auto',
    width: '5px',
    padding: '5px',
  } as React.CSSProperties;

  return (
    <>
      <SEO title="Naturalmente Tecnologici" description="Naturalmente Tecnologici | Syskrack - Grassano (MT)" />
      <Layout>
        {crushed > 0 ? <p style={crushedStyle}>{crushed}</p> : null}
        <Hero />
        <Bugs handleClick={handleClick} />
      </Layout>
    </>
  );
};

export default IndexPage;
