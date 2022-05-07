import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import * as styles from './logo.module.scss';

const Logo = () => {
  return (
    <StaticImage
      src="../../images/logo.png"
      alt="Naturalmente Tecnologici Logo"
      placeholder="blurred"
      className={styles.logo}
    />
  );
};

export default Logo;
