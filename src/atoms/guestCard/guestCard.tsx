import React, { useState } from 'react';
import { GuestInfo } from '../../utility/guestsInfo';
import ImageTemp from '../imageTemp/imageTemp';
import Paragraph from '../paragraph/paragraph';
import * as styles from './guestCard.module.scss';

interface GuestCardProps extends GuestInfo {
  children?: React.ReactNode;
  reversed?: boolean;
}

const GuestCard = ({ children, name, field, theme, about, reversed }: GuestCardProps) => {
  const [more, setMore] = useState<boolean>(false);

  return (
    <div className={`${styles.card} ${reversed ? styles.cardReversed : ''}`}>
      {children ?? <ImageTemp name={name} />}
      <div className={styles.details}>
        <span className={`${styles.title} ${reversed ? styles.titleReversed : ''}`}>
          <h3>{name}</h3>
          {field ? <h4 className={styles.field}>{field}</h4> : null}
        </span>

        <div className={`${more ? styles.aboutMore : styles.about}`}>
          <Paragraph content={about} />
          <div className={styles.fade}></div>
        </div>

        <button className={styles.buttonMore} onClick={() => setMore((state) => !state)}>
          Read{more ? ' less' : ' more'}
        </button>

        {theme ? (
          <div className={styles.theme}>
            <span className={styles.pre}>Tema della conferenza</span>
            <div className={styles.quote}>
              <i>“{theme}„</i>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default GuestCard;
