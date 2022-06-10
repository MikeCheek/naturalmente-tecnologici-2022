import React from 'react';
import * as styles from './circle.module.scss';

const Circle = ({ value }: { value: number }) => {
  return <div className={styles.circle} style={{ marginTop: `calc(${value} * 20px - 5px)` }}></div>;
};

export default Circle;
