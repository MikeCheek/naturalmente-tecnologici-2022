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
        <span style={{ left: '-25px' }} className={styles.enterTopLeft}>
          <Branch1
            fill="var(--svg-front)"
            style={{ transform: 'rotate(135deg)', height: '100%' }}
            alt={ntalt + ' ramo'}
          />
        </span>
        <span style={{ right: '-25px' }} className={styles.enterTopRight}>
          <Branch1
            fill="var(--svg-front)"
            style={{ transform: 'rotate(-135deg) rotateY(180deg)', height: '100%' }}
            alt={ntalt + ' ramo'}
          />
        </span>
        <span style={{ bottom: '0', left: '-38px', width: 'auto' }} className={styles.enterBottomLeft}>
          <Flower1
            fill="var(--svg-front)"
            style={{ transform: 'rotate(45deg)', height: '100%' }}
            alt={ntalt + ' fiore'}
          />
        </span>
        <span style={{ bottom: '0', right: '-38px', width: 'auto' }} className={styles.enterBottomRight}>
          <Flower1
            style={{ transform: 'rotate(-45deg) rotateY(180deg)', height: '100%' }}
            fill="var(--svg-front)"
            alt={ntalt + ' fiore'}
          />
        </span>
      </div>
      <div className={styles.greenwoodDesktop}>
        <span style={{ left: '-13px' }} className={styles.enterTopLeft}>
          <Branch1 style={{ transform: 'rotate(135deg)' }} fill="var(--svg-front)" alt={ntalt + ' ramo'} />
        </span>

        <span style={{ right: '-38px', top: 'calc(50% - 100px)' }} className={styles.enterRight}>
          <Branch1 fill="var(--svg-front)" style={{ transform: 'rotate(-90deg)' }} alt={ntalt + ' ramo'} />
        </span>

        <span style={{ left: '-22px', top: 'calc(50% - 100px)' }} className={styles.enterLeft}>
          <Branch2 style={{ transform: 'rotate(90deg)' }} fill="var(--svg-front)" alt={ntalt + ' ramo'} />
        </span>
        <span style={{ right: '-5px' }} className={styles.enterTopRight}>
          <Branch2 fill="var(--svg-front)" style={{ transform: 'rotate(-135deg)' }} alt={ntalt + ' ramo'} />
        </span>

        <span style={{ bottom: '0', left: '-23px', width: 'auto' }} className={styles.enterBottomLeft}>
          <Flower1 style={{ transform: 'rotate(45deg)' }} fill="var(--svg-front)" alt={ntalt + ' fiore'} />
        </span>
        <span style={{ bottom: '0', right: '-23px', width: 'auto' }} className={styles.enterBottomRight}>
          <Flower2 fill="var(--svg-front)" style={{ transform: 'rotate(-45deg)' }} alt={ntalt + ' fiore'} />
        </span>
      </div>
    </>
  );
};

export default Greenwood;
