import React from 'react';
import Social from '../social/social';
import * as styles from './footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.wrap}>
      <Social />
      <div className={styles.footer}>
        <span>
          Developed by{' '}
          <a href="https://michelepulvirenti.vercel.app/?ref=nt" title="Michele Pulvirenti" target="_blank" rel="noopener noreferrer">
            Michele Pulvirenti
          </a>
        </span>
        <span>
          Designed by{' '}
          <a
            href="https://www.instagram.com/raffaellacip/"
            title="Raffaella Cipolla"
            target="_blank"
            rel="noopener noreferrer"
          >
            Raffaella Cipolla
          </a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
