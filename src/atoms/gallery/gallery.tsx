import React, { useEffect, useState } from 'react';
import * as styles from './gallery.module.scss';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import Carousel from 'react-grid-carousel';
import Arrow from '../arrow/arrow';
import Button from '../button/button';

const Gallery = () => {
  const isBrowser = typeof window !== 'undefined';

  const [width, setWidth] = useState<number>(isBrowser ? window.innerWidth : 0);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    if (!isBrowser) return;

    window.addEventListener('resize', updateWidth);

    return () => window.removeEventListener('resize', () => {});
  }, []);

  const data = useStaticQuery(graphql`
    query AssetsPhotos {
      allFile(filter: { extension: { regex: "/(jpg)|(jpeg)|(png)/" }, dir: { regex: "/images/gallery/" } }) {
        edges {
          node {
            id
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, width: 200)
            }
          }
        }
      }
    }
  `);

  return (
    <div className={styles.gallery}>
      <Carousel
        cols={(width / 300) | 0}
        rows={3}
        gap={5}
        loop
        showDots
        autoplay={5000}
        dotColorActive={'#014dfe'}
        mobileBreakpoint={0}
        responsiveLayout={[
          {
            breakpoint: 768,
            cols: 2,
            gap: 10,
          },
        ]}
        arrowLeft={<Arrow left />}
        arrowRight={<Arrow />}
      >
        {data.allFile.edges.map(
          (edge: { node: { childImageSharp: { gatsbyImageData: IGatsbyImageData } } }, key: number) => {
            return (
              <Carousel.Item key={key}>
                <GatsbyImage
                  image={edge.node.childImageSharp.gatsbyImageData}
                  alt={'IMG' + key}
                  objectPosition={'center top'}
                />
              </Carousel.Item>
            );
          }
        )}
      </Carousel>
      <span>
        <p>Tutte le altre foto sono disponibili sul Drive</p>
        <br />
        <Button
          href="https://drive.google.com/drive/folders/1VvckPrYvLbHZmcW-NyCWzkoOKu8n-PFO?usp=sharing"
          text="Vai al Drive"
        />
      </span>
    </div>
  );
};

export default Gallery;

// fluid(maxWidth: 300) {
//   ...GatsbyImageSharpFluid
// }
