import React from 'react';
import { GuestInfo } from '../../utility/guestsInfo';
import * as styles from './guestCard.module.scss';

interface GuestCardProps extends GuestInfo {
  children: React.ReactNode;
  reversed?: boolean;
}

const GuestCard = ({ children, name, field, theme, about, reversed }: GuestCardProps) => {
  return (
    <div className={`${styles.card} ${reversed ? styles.cardReversed : ''}`}>
      <span>{children}</span>
      <div className={styles.details}>
        <span className={`${styles.title} ${reversed ? styles.titleReversed : ''}`}>
          <h3>{name}</h3>
          <h4 className={styles.field}>{field}</h4>
        </span>

        <p>{about}</p>
        {theme ? (
          <div className={styles.theme}>
            <span className={styles.pre}>Tema della conferenza</span>
            <div className={styles.quote}>
              <em>“{theme}„</em>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default GuestCard;
