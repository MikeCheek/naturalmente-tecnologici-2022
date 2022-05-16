import React from 'react';
import AnimatedText from '../../atoms/animatedText/animatedText';
import Syskrack from '../../atoms/syskrack/syskrack';
import * as styles from './footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Syskrack />
      <p>
        Created with love by{' '}
        <AnimatedText>
          <a href="https://mikecheek.github.io/portfolio/">Michele Pulvirenti</a>
        </AnimatedText>
      </p>
    </div>
  );
};

export default Footer;
