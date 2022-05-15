import React from 'react';
import * as styles from './animatedText.module.scss';

const AnimatedText = ({ text }: { text: string }) => {
  return <h2 className={styles.coming}>{text}</h2>;
};

export default AnimatedText;
