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
  const [remainings, setRemainings] = useState<number>(0);

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

  const updateWidth = () => {
    setWidth(window.innerWidth);
    calcRemainings();
  };

  useEffect(() => {
    if (!isBrowser) return;

    window.addEventListener('resize', updateWidth);

    return () => window.removeEventListener('resize', () => {});
  }, []);

  const calcRemainings = () => {
    const col = (width / 300) | 0;
    const row = 3;
    const grid = row * col;
    const spare = 45 % grid;
    setRemainings(spare == 0 ? 0 : grid - spare);
  };

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
        {new Array(remainings).fill(0).map((_entry, key) => {
          return (
            <Carousel.Item key={key}>
              <div className={styles.fakePhoto} style={{ opacity: 1 - key / 3 }}>
                {/* <a href="https://drive.google.com/drive/folders/1VvckPrYvLbHZmcW-NyCWzkoOKu8n-PFO?usp=sharing">
                  Guarda tutte le foto
                </a> */}
              </div>
            </Carousel.Item>
          );
        })}
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
