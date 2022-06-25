import React from 'react';
import Insect from '../../assets/insect.svg';
import { ArrowInterface } from '../../components/slider/slider';
import * as styles from './arrow.module.scss';

interface ArrowProps extends ArrowInterface {
  left?: boolean;
}

const Arrow = ({ clickHandler, label, left }: ArrowProps) => {
  return (
    <button key={label} onClick={clickHandler} className={left ? styles.buttonLeft : styles.buttonRight}>
      <div className={styles.arrow} style={left ? { transform: 'rotate(-135deg)' } : {}}></div>
    </button>
  );
};

export default Arrow;
