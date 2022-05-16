import React, { ReactNode } from 'react';
import * as styles from './animatedText.module.scss';

const AnimatedText = ({ children }: { children: ReactNode }) => {
  return <span className={styles.coming}>{children}</span>;
};

export default AnimatedText;
