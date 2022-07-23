import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import * as styles from './sponsor.module.scss';

const Sponsor = () => {
  return (
    <div className={styles.sponsor}>
      <p>Con il supporto di</p>
      <div className={styles.wrap}>
        <a href="https://www.sweetnesssolution.com/" rel="noopener noreferrer" target="_blank">
          <StaticImage src="../../images/sponsor/sweetness.jpg" className={styles.logo} alt="Sweetness" width={200} />
        </a>
        <a href="https://www.parcodeicigni.it/" rel="noopener noreferrer" target="_blank">
          <StaticImage
            src="../../images/sponsor/parcocigni.jpg"
            className={styles.logo}
            alt="Parco dei Cigni"
            width={200}
          />
        </a>
        <a href="https://www.centrosanpaolo.net/" rel="noopener noreferrer" target="_blank">
          <StaticImage
            src="../../images/sponsor/sanpaolo.jpg"
            className={styles.logo}
            alt="Centro San Paolo"
            width={200}
          />
        </a>
        <a href="https://ristorante3colli.it/" rel="noopener noreferrer" target="_blank">
          <StaticImage src="../../images/sponsor/3colli.jpg" className={styles.logo} alt="3 Colli" width={200} />
        </a>
        <a href="https://verregioielli.com/" rel="noopener noreferrer" target="_blank">
          <StaticImage
            src="../../images/sponsor/verre.jpg"
            className={styles.logo}
            alt="Gioielleria Verre"
            width={200}
          />
        </a>
        <a href="https://biologicavignola.it" rel="noopener noreferrer" target="_blank">
          <StaticImage
            src="../../images/sponsor/vignola.jpg"
            className={styles.logo}
            alt="Biologica Vignola"
            width={200}
          />
        </a>
      </div>
      <p>Con il patrocinio di</p>
      <div className={styles.wrap}>
        <a href="http://www.comune.grassano.mt.it" rel="noopener noreferrer" target="_blank">
          <StaticImage
            src="../../images/sponsor/comune.jpg"
            className={styles.logo}
            alt="Comune di Grassano"
            width={200}
          />
        </a>
      </div>
      <p>Con la partecipazione di</p>
      <div className={styles.wrap}>
        <a href="https://csvnet.it/component/tags/tag/csv-basilicata" rel="noopener noreferrer" target="_blank">
          <StaticImage src="../../images/sponsor/csv.jpeg" className={styles.logo} alt="CSV Basilicata" width={200} />
        </a>
      </div>
      <p>Si ringrazia anche</p>
      <div className={styles.wrap}>
        <StaticImage
          src="../../images/sponsor/farmacia.png"
          className={styles.logo}
          alt="Farmacia Tortorelli"
          width={200}
          style={{ borderRadius: '50%' }}
        />
      </div>
    </div>
  );
};

export default Sponsor;
