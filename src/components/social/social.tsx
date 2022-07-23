import React from 'react';
import * as styles from './social.module.scss';
import Facebook from '../../assets/social/facebook.svg';
import Instagram from '../../assets/social/instagram.svg';
import Internet from '../../assets/social/internet.svg';
import Linkedin from '../../assets/social/linkedin.svg';
import Telegram from '../../assets/social/telegram.svg';

const Social = () => {
  return (
    <>
      <p className={styles.discover}>Scopri la nostra associazione</p>
      <div className={styles.social}>
        <a href="https://syskrack.org" target="_blank">
          <Internet fill="var(--nt-blue)" width={60} />
        </a>
        <a href="https://www.facebook.com/syskrackgiuseppeporsia/" target="_blank" rel="noopener noreferrer">
          <Facebook fill="var(--nt-blue)" width={60} />
        </a>
        <a href="https://www.instagram.com/syskrack_giuseppeporsia/" target="_blank" rel="noopener noreferrer">
          <Instagram fill="var(--nt-blue)" width={60} />
        </a>
        <a href="https://www.linkedin.com/company/syskrack-lab/" target="_blank" rel="noopener noreferrer">
          <Linkedin fill="var(--nt-blue)" width={60} height={60} style={{ borderRadius: '10px' }} />
        </a>
        <a href="https://t.me/+AYplGqMtentlOTE0" target="_blank" rel="noopener noreferrer">
          <Telegram fill="var(--nt-blue)" width={60} />
        </a>
      </div>
    </>
  );
};

export default Social;
