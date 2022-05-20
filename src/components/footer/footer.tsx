import React from 'react';
import AnimatedText from '../../atoms/animatedText/animatedText';
import Syskrack from '../../atoms/syskrack/syskrack';
import * as styles from './footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p>
        Developed by{' '}
        <AnimatedText>
          <a href="https://bit.ly/mikecheek">Michele Pulvirenti</a>
        </AnimatedText>
      </p>
      <p>
        Designed by{' '}
        <AnimatedText>
          <a href="https://www.instagram.com/raffaellacip/">Raffaella Cipolla</a>
        </AnimatedText>
      </p>
    </div>
  );
};

export default Footer;
