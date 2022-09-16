import React from 'react';
import * as styles from './arrow.module.scss';

interface ArrowProps {
  left?: boolean;
}

const Arrow = ({ left }: ArrowProps) => {
  return (
    <span className={left ? styles.buttonLeft : styles.buttonRight}>
      <div className={styles.arrow} style={left ? { transform: 'rotate(-135deg)' } : {}}></div>
    </span>
  );
};

export default Arrow;
