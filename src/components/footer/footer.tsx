import React from 'react';
import * as styles from './footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <span>
        Developed by{' '}
        <a href="https://bit.ly/mikecheekgit" title="Michele Pulvirenti" target="_blank" rel="noopener noreferrer">
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
  );
};

export default Footer;
