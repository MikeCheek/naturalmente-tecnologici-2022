import React, { useEffect, useState } from 'react';
import * as styles from './gallery.module.scss';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Carousel from 'react-grid-carousel';
import Arrow from '../arrow/arrow';
import Button from '../button/button';
import { Data, Edge } from './gallery.types';

const Gallery = () => {
  const data: Data = useStaticQuery(graphql`
    query AssetsPhotos {
      allFile(filter: { extension: { regex: "/(jpg)|(jpeg)|(png)/" }, dir: { regex: "/images/gallery/" } }) {
        edges {
          node {
            id
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, width: 300)
            }
          }
        }
      }
    }
  `);

  const isBrowser = typeof window !== 'undefined';

  const [width, setWidth] = useState<number>(isBrowser ? window.innerWidth : 0);
  const [columns, setColumns] = useState<number>(1);
  const [remainings, setRemainings] = useState<number>(0);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    if (!isBrowser) return;

    window.addEventListener('resize', updateWidth);

    return () => window.removeEventListener('resize', () => {});
  }, []);

  useEffect(() => {
    setColumns((width / 400) | 0);
  }, [width]);

  useEffect(() => {
    calcRemainings();
  }, [columns]);

  const calcRemainings = () => {
    const col = columns > 0 ? columns : 1;
    const row = 2;
    const grid = row * col;
    const spare = 45 % grid;
    console.log(col, row, grid, spare);
    setRemainings(spare == 0 ? 0 : grid - spare);
  };

  return (
    <div className={styles.gallery}>
      <div className={styles.carousel}>
        <Carousel
          cols={columns > 0 ? columns : 1}
          rows={2}
          gap={5}
          loop
          showDots
          autoplay={5000}
          dotColorActive={'#014dfe'}
          mobileBreakpoint={768}
          arrowLeft={<Arrow left />}
          arrowRight={<Arrow />}
          className={styles.carousel}
          containerStyle={{ paddingBottom: '20px' }}
        >
          {data.allFile!.edges.map((edge: Edge, key: number) => {
            return (
              <Carousel.Item key={key}>
                <GatsbyImage
                  image={edge.node.childImageSharp.gatsbyImageData}
                  alt={'IMG' + key}
                  objectPosition={'center top'}
                  onError={() => {}}
                />
              </Carousel.Item>
            );
          })}
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
      </div>
      <span>
        <p>Tutte le foto sono disponibili sul Drive</p>
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
