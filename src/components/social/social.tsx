import React from 'react';
import * as styles from './social.module.scss';
import Facebook from '../../assets/social/facebook.svg';
import Instagram from '../../assets/social/instagram.svg';
import Internet from '../../assets/social/internet.svg';
import Linkedin from '../../assets/social/linkedin.svg';
import Telegram from '../../assets/social/telegram.svg';

interface SocialProps {
  reduce?: boolean;
}

const Social = ({ reduce }: SocialProps) => {
  return (
    <div className={`${styles.wrap} ${reduce ? styles.reduce : ''}`}>
      <a href="https://syskrack.org" title="Scopri il nostro sito" target="_blank" className={styles.discover}>
        Scopri la nostra associazione
      </a>
      <div className={styles.social}>
        <a href="https://syskrack.org" title="Scopri il nostro sito" target="_blank">
          <Internet fill="var(--nt-blue)" width={60} height={60} />
        </a>
        <a
          href="https://www.facebook.com/syskrackgiuseppeporsia/"
          title="Scopri l'associazione su Facebook"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Facebook fill="var(--nt-blue)" width={60} height={60} />
        </a>
        <a
          href="https://www.instagram.com/syskrack_giuseppeporsia/"
          title="Scopri l'associazione su Instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram fill="var(--nt-blue)" width={60} height={60} />
        </a>
        <a
          href="https://www.linkedin.com/company/syskrack-lab/"
          title="Scopri l'associazione su Linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin fill="var(--nt-blue)" width={60} height={60} style={{ borderRadius: '10px' }} />
        </a>
        <a
          href="https://t.me/+AYplGqMtentlOTE0"
          title="Scopri l'associazione su Telegram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Telegram fill="var(--nt-blue)" width={60} height={60} />
        </a>
      </div>
    </div>
  );
};

export default Social;
