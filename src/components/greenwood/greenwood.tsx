import React from 'react';
import Branch1 from '../../assets/branch1.svg';
import Branch2 from '../../assets/branch2.svg';
import Flower1 from '../../assets/flower1.svg';
import Flower2 from '../../assets/flower2.svg';
import * as styles from './greenwood.module.scss';

const Greenwood = () => {
  return (
    <>
      <div className={styles.greenwoodMobile}>
        <Branch1 fill="var(--svg-front)" style={{ left: '-6%', transform: 'rotate(135deg)' }} />
        <Branch1 fill="var(--svg-front)" style={{ right: '-6%', transform: 'rotate(-135deg) rotateY(180deg)' }} />
        <Flower1
          fill="var(--svg-front)"
          style={{ bottom: '0%', left: '-2%', transform: 'rotate(45deg)', width: 'auto' }}
        />
        <Flower1
          fill="var(--svg-front)"
          style={{ bottom: '0%', right: '-2%', transform: 'rotate(-45deg) rotateY(180deg)', width: 'auto' }}
        />
      </div>
      <div className={styles.greenwoodDesktop}>
        <Branch1 fill="var(--svg-front)" style={{ left: '-1%', transform: 'rotate(135deg)' }} />
        <Branch1
          fill="var(--svg-front)"
          style={{ right: '-3%', top: 'calc(50% - 100px)', transform: 'rotate(-90deg)' }}
        />
        <Branch2
          fill="var(--svg-front)"
          style={{ left: '-1.5%', top: 'calc(50% - 100px)', transform: 'rotate(90deg)' }}
        />
        <Branch2 fill="var(--svg-front)" style={{ right: '0', transform: 'rotate(-135deg)' }} />
        <Flower1
          fill="var(--svg-front)"
          style={{ bottom: '0%', left: '-1.5%', transform: 'rotate(45deg)', width: 'auto' }}
        />
        <Flower2
          fill="var(--svg-front)"
          style={{ bottom: '0%', right: '-1.5%', transform: 'rotate(-45deg)', width: 'auto' }}
        />
      </div>
    </>
  );
};

export default Greenwood;
