import React from 'react';
import * as styles from './syskrack.module.scss';
import { StaticImage } from 'gatsby-plugin-image';

const Syskrack = () => {
  return (
    <a href="https://syskrack.org" target="_blank" rel="noopener noreferrer" className={styles.syskrack}>
      <StaticImage
        src="../../images/compactSyskrack.jpg"
        alt="Logo Syskrack"
        placeholder="tracedSVG"
        className={styles.syskrack}
        width={100}
      />
    </a>
  );
};

export default Syskrack;
