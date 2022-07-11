import React from 'react';
import * as styles from './whereWhen.module.scss';

const WhereWhen = () => {
  const handleClick = () => {
    document.getElementById('programma').scrollIntoView();
  };

  return (
    <div className={styles.date}>
      <span className={styles.calendar}>
        <p>Grassano - Agosto 2022</p>
        <span className={styles.days}>
          <p onClick={handleClick}>11</p>
          <p onClick={handleClick}>12</p>
          <p onClick={handleClick}>13</p>
        </span>
      </span>
      {/* <span className={styles.location}>
        <Insect
          fill="var(--nt-blue)"
          style={{ transform: 'rotate(40deg)' }}
          title="Location"
          alt="Insect Naturalmente Tecnologici"
          width="40"
          height="40"
          className={styles.mobile}
        />
        <Insect
          fill="var(--nt-blue)"
          style={{ transform: 'rotate(40deg)' }}
          title="Location"
          alt="Insect Naturalmente Tecnologici"
          width="60"
          height="60"
          className={styles.desktop}
        />
        <a
          href="https://goo.gl/maps/FpGSzc9JCwvoYRWk6"
          title="Grassano (Matera)"
          rel="noopener noreferrer"
          target="_blank"
          className={styles.grassano}
        >
          Grassano (MT)
        </a>
      </span> */}
    </div>
  );
};

export default WhereWhen;
