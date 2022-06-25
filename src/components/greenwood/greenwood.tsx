import React from 'react';
import Branch1 from '../../assets/branch1.svg';
import Branch2 from '../../assets/branch2.svg';
import Flower1 from '../../assets/flower1.svg';
import Flower2 from '../../assets/flower2.svg';
import * as styles from './greenwood.module.scss';

const ntalt = 'Naturalmente Tecnologici';

const Greenwood = () => {
  return (
    <>
      <div className={styles.greenwoodMobile}>
        <Branch1 fill="var(--svg-front)" style={{ left: '-6%', transform: 'rotate(135deg)' }} alt={ntalt + ' ramo'} />
        <Branch1
          fill="var(--svg-front)"
          style={{ right: '-6%', transform: 'rotate(-135deg) rotateY(180deg)' }}
          alt={ntalt + ' ramo'}
        />
        <Flower1
          fill="var(--svg-front)"
          style={{ bottom: '0%', left: '-2%', transform: 'rotate(45deg)', width: 'auto' }}
          alt={ntalt + ' fiore'}
        />
        <Flower1
          fill="var(--svg-front)"
          style={{ bottom: '0%', right: '-2%', transform: 'rotate(-45deg) rotateY(180deg)', width: 'auto' }}
          alt={ntalt + ' fiore'}
        />
      </div>
      <div className={styles.greenwoodDesktop}>
        <Branch1 fill="var(--svg-front)" style={{ left: '-1%', transform: 'rotate(135deg)' }} alt={ntalt + ' ramo'} />
        <Branch1
          fill="var(--svg-front)"
          style={{ right: '-3%', top: 'calc(50% - 100px)', transform: 'rotate(-90deg)', transition: 'top 1s ease' }}
          alt={ntalt + ' ramo'}
        />
        <Branch2
          fill="var(--svg-front)"
          style={{ left: '-1.5%', top: 'calc(50% - 100px)', transform: 'rotate(90deg)', transition: 'top 1s ease' }}
          alt={ntalt + ' ramo'}
        />
        <Branch2 fill="var(--svg-front)" style={{ right: '0', transform: 'rotate(-135deg)' }} alt={ntalt + ' ramo'} />
        <Flower1
          fill="var(--svg-front)"
          style={{ bottom: '0%', left: '-1.5%', transform: 'rotate(45deg)', width: 'auto' }}
          alt={ntalt + ' fiore'}
        />
        <Flower2
          fill="var(--svg-front)"
          style={{ bottom: '0%', right: '-1.5%', transform: 'rotate(-45deg)', width: 'auto' }}
          alt={ntalt + ' fiore'}
        />
      </div>
    </>
  );
};

export default Greenwood;
