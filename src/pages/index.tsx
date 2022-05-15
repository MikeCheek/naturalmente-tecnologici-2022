import * as React from 'react';
import { useState } from 'react';
import SEO from '../atoms/seo/seo';
import Bugs from '../components/bugs/bugs';
import Greenwood from '../components/greenwood/greenwood';
import Hero from '../components/hero/hero';
import '../styles/globals.scss';

const IndexPage = () => {
  const [crushed, setCrushed] = useState<number>(0);

  const handleClick = () => {
    setCrushed(crushed + 1);
    console.log(crushed);
  };

  return (
    <main>
      {crushed > 0 ? (
        <p style={{ position: 'absolute', left: 0, right: 0, margin: 'auto', width: '5px', padding: '5px' }}>
          {crushed}
        </p>
      ) : null}

      <SEO title="Naturalmente Tecnologici" description="Naturalmente Tecnologici Evento Grassano (MT)" />
      <Greenwood />
      <Hero />
      <Bugs handleClick={handleClick} />
    </main>
  );
};

export default IndexPage;
