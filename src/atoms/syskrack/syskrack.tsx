import React from 'react';
import * as styles from './syskrack.module.scss';
import { StaticImage } from 'gatsby-plugin-image';

const Syskrack = () => {
  return (
    <>
      <a
        href="https://syskrack.org"
        target="_blank"
        rel="noopener noreferrer"
        title="Syskrack"
        className={styles.syskrackMobile}
      >
        <StaticImage
          src="../../images/compactSyskrack.png"
          alt="Logo Syskrack"
          placeholder="tracedSVG"
          className={styles.syskrack}
          width={60}
          height={60}
          title="Logo Syskrack"
        />
      </a>
      <a
        href="https://syskrack.org"
        target="_blank"
        rel="noopener noreferrer"
        title="Syskrack"
        className={styles.syskrackDesktop}
      >
        <StaticImage
          src="../../images/compactSyskrack.png"
          alt="Logo Syskrack"
          placeholder="tracedSVG"
          className={styles.syskrack}
          width={90}
          height={90}
          title="Logo Syskrack"
        />
      </a>
    </>
  );
};

export default Syskrack;
