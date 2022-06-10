import React, { useEffect, useState } from 'react';
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

  useEffect(() => {
    console.log(
      `%c Hey questo sito si sta riempiendo di insetti!
Aiutami a schiacciarli e ti dirò quanti ne hai presi <3`,
      'background: #014dfe; padding:5px;'
    );
  }, []);

  useEffect(() => {
    crushed > 0 ? console.log(crushed) : null;
  }, [crushed]);

  return (
    <>
      <SEO
        title="Naturalmente Tecnologici"
        description="L’evento si propone di essere occasione di ritrovo della community di Syskrack nonché strumento di disseminazione culturale sul territorio."
      />
      <Layout>
        <Hero />
        <Bugs handleClick={handleClick} />
      </Layout>
    </>
  );
};

export default IndexPage;
