import { graphql } from 'gatsby';
import React from 'react';
import { Data } from '../atoms/gallery/gallery.types';
import SEO from '../atoms/seo/seo';
import ArticlesHero from '../components/articlesHero/articlesHero';
import Layout from '../components/layout/layout';

const Articoli = ({ data }: { data: Data }) => {
  return (
    <>
      <SEO
        title="Parlano di Naturalmente Tecnologici (2022)"
        description="L'evento si propone di essere occasione di ritrovo della community di Syskrack nonché strumento di disseminazione culturale sul territorio."
      />
      <Layout>
        <ArticlesHero data={data} />
      </Layout>
    </>
  );
};

export default Articoli;

export const query = graphql`
  query Photos {
    allFile(
      filter: { extension: { regex: "/(jpg)|(jpeg)|(png)/" }, dir: { regex: "/images/articles/" } }
      sort: { fields: name }
    ) {
      edges {
        node {
          id
          name
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, width: 700, quality: 100)
          }
        }
      }
    }
  }
`;
