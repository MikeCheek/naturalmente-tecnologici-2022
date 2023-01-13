import { GatsbyImage } from 'gatsby-plugin-image';
import React, { useEffect } from 'react';
import links from '../../utility/links';
import { Data } from '../gallery/gallery.types';
import * as styles from './articleLinks.module.scss';

const ArticleLinks = ({ data }: { data: Data }) => {
  useEffect(() => {
    console.table(data.allFile?.edges);
  }, []);

  const reduce = (text: string) => {
    const max = 200;
    return text.length > max ? text.substring(0, max - 3) + '...' : text;
  };

  return (
    <div className={styles.wrap}>
      {links.map((link, key) => {
        return (
          <div className={styles.link} key={key}>
            <a className={styles.title} href={link.href} target="_blank" rel="noopener noreferrer" title={link.title}>
              {link.title}
            </a>
            <em>{reduce(link.description)}</em>
            {data.allFile && data.allFile.edges[key] ? (
              <GatsbyImage
                image={data.allFile.edges[key].node.childImageSharp.gatsbyImageData}
                className={styles.image}
                alt={'IMG ' + link.title}
                onError={() => {}}
              />
            ) : (
              <></>
            )}
            <a className={styles.button} href={link.href} target="_blank" rel="noopener noreferrer" title={link.title}>
              <span> Leggi l'articolo</span>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default ArticleLinks;
