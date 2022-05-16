import React from 'react';
import * as styles from './syskrack.module.scss';
import { StaticImage } from 'gatsby-plugin-image';

const Syskrack = () => {
  return (
    <a href="https://syskrack.org" target="_blank" rel="noopener noreferrer" className={styles.syskrack}>
      <StaticImage
        src="../../images/logoSyskrack.png"
        alt="Logo Syskrack"
        placeholder="tracedSVG"
        className={styles.syskrack}
        width={300}
      />
    </a>
  );
};

export default Syskrack;
