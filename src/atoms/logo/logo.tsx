import { StaticImage } from 'gatsby-plugin-image';
import React, { useRef } from 'react';
import * as styles from './logo.module.scss';

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
    <div
      ref={logoRef}
      className={styles.logoWrap}
      onMouseLeave={removeListener}
      onMouseOver={addListener}
      onMouseOut={removeListener}
      onTouchStart={() => {}}
    >
      <StaticImage
        src="../../images/logo.png"
        alt="Naturalmente Tecnologici Logo"
        placeholder="blurred"
        className={styles.logo}
      />
    </div>
  );
};

export default Logo;
