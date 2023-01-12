import React from 'react';
import ArticleLinks from '../../atoms/articleLinks/articleLinks';
import * as styles from './articlesHero.module.scss';

const ArticlesHero = () => {
  return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>Parlano di noi!</h1>
      <p>In questa sezione sono presenti gli articoli che parlano del nostro evento!</p>
      <ArticleLinks />
    </div>
  );
};

export default ArticlesHero;
