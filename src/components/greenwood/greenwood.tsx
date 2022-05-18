import React from 'react';
import Branch1 from '../../assets/branch1.svg';
import Branch2 from '../../assets/branch2.svg';
import Flower1 from '../../assets/flower1.svg';
import Flower2 from '../../assets/flower2.svg';
import * as styles from './greenwood.module.scss';

const Greenwood = () => {
  return (
    <div className={styles.greenwood}>
      <Branch1 fill="var(--svg-front)" style={{ left: '0%', transform: 'rotate(90deg)' }} />
      <Branch1 fill="var(--svg-front)" style={{ right: '0%', top: '30%', transform: 'rotate(-90deg)' }} />
      <Branch2 fill="var(--svg-front)" style={{ left: '0%', top: '30%', transform: 'rotate(90deg)' }} />
      <Branch2 fill="var(--svg-front)" style={{ right: '0%', transform: 'rotate(-90deg)' }} />
      <Flower1 fill="var(--svg-front)" style={{ bottom: '0%', left: '0%', transform: 'rotate(45deg)' }} />
      <Flower2 fill="var(--svg-front)" style={{ bottom: '0%', right: '0%', transform: 'rotate(-45deg)' }} />
    </div>
  );
};

export default Greenwood;
