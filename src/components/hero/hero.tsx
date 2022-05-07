import { StaticImage } from 'gatsby-plugin-image';
import React, { useState } from 'react';
import Bug from '../../atoms/bug/bug';
import ComingSoon from '../../atoms/comingSoon/comingSoon';
import Timer from '../timer/timer';
import * as styles from './hero.module.scss';

const Hero = () => {
  const [timer, setTimer] = useState<boolean>(true);
  return (
    <div className={styles.nt}>
      <StaticImage
        src="../../images/logo.png"
        alt="Naturalmente Tecnologici Logo"
        placeholder="blurred"
        className={styles.logo}
      />
      {timer ? <Timer shutOffTimer={() => setTimer(false)} /> : null}
      <ComingSoon />
      <Bug time={6500} />
      <Bug time={5050} bottom />
      <Bug time={4500} right />
      <Bug time={7050} right bottom />
    </div>
  );
};

export default Hero;
