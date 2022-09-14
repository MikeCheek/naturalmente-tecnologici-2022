import React, { useRef } from 'react';
import * as styles from './logo.module.scss';
import LogoSvg from '../../assets/logo.svg';

const Logo = () => {
  const logoRef = useRef<HTMLDivElement>(null);

  const parallax = (event: MouseEvent): void => {
    const shift = logoRef.current;
    if (shift) {
      const rect: DOMRect = shift.getBoundingClientRect();
      const middleY: number = rect.top + rect.height / 2;
      const middleX: number = rect.left + rect.width / 2;
      const x: number = -(middleX - event.pageX) / 50;
      const y: number = (middleY - event.pageY) / 50;

      shift.style.transform = ` perspective(300px) rotateX(${y}deg) rotateY(${x}deg) scale(1.05)`;
    }
  };

  const addListener = (): void | null => document.addEventListener('mousemove', parallax);

  const removeListener = (): void => {
    document.removeEventListener('mousemove', parallax);
    const shift = logoRef.current;
    if (shift) shift.style.removeProperty('transform');
  };

  return (
    <>
      <div
        onMouseLeave={removeListener}
        onMouseOver={addListener}
        onMouseOut={removeListener}
        onTouchStart={() => {}}
        className={styles.logoMegaWrap}
      >
        <div ref={logoRef} className={styles.logoWrap}>
          <LogoSvg alt="Naturalmente Tecnologici logo" className={styles.logo} fill="var(--svg-front)" />
        </div>
      </div>
      <div className={styles.logoMegaWrap4K}>
        <div className={styles.logoWrap}>
          <LogoSvg alt="Naturalmente Tecnologici logo" className={styles.logo} fill="var(--svg-front)" />
        </div>
      </div>
    </>
  );
};

export default Logo;
