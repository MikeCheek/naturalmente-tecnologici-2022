import React from 'react';
import * as styles from './syskrack.module.scss';
import { StaticImage } from 'gatsby-plugin-image';

const Syskrack = () => {
  return (
    <a href="https://syskrack.org" target="_blank" rel="noopener noreferrer" className={styles.syskrack}>
      <StaticImage
        src="../../images/compactSyskrack.png"
        alt="Logo Syskrack"
        placeholder="tracedSVG"
        className={styles.syskrackMobile}
        width={60}
      />
      <StaticImage
        src="../../images/compactSyskrack.png"
        alt="Logo Syskrack"
        placeholder="tracedSVG"
        className={styles.syskrackDesktop}
        width={90}
      />
    </a>
  );
};

export default Syskrack;
