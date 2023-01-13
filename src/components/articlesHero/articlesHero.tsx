import React from 'react';
import ArticleLinks from '../../atoms/articleLinks/articleLinks';
import { Data } from '../../atoms/gallery/gallery.types';
import * as styles from './articlesHero.module.scss';

const ArticlesHero = ({ data }: { data: Data }) => {
  return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>Parlano di noi!</h1>
      <p>In questa sezione sono presenti gli articoli che parlano di Naturalmente Tecnologici 2022</p>
      <ArticleLinks data={data} />
    </div>
  );
};

export default ArticlesHero;
