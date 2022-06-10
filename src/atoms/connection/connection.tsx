import React from 'react';
import * as styles from './connection.module.scss';

const Connection = ({ value }: { value: number }) => {
  return <div className={styles.connection} style={{ marginTop: `calc(${value} * 20px)` }}></div>;
};

export default Connection;
