import React from 'react';
import * as styles from './paragraph.module.scss';

const Paragraph = ({ content }: { content: string }) => {
  return <p className={styles.pBase} dangerouslySetInnerHTML={{ __html: content }}></p>;
};

export default Paragraph;
