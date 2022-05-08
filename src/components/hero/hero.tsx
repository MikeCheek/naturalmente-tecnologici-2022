import React, { useState } from 'react';
import Bug from '../../atoms/bug/bug';
import AnimatedText from '../../atoms/comingSoon/animatedText';
import Logo from '../../atoms/logo/logo';
import Timer from '../timer/timer';
import * as styles from './hero.module.scss';

const Hero = () => {
  const [timer, setTimer] = useState<boolean>(true);
  return (
    <div className={styles.nt}>
      <Logo />
      {timer ? <Timer shutOffTimer={() => setTimer(false)} /> : null}
      <AnimatedText text={'COMING SOON'} />
      <Bug time={6500} top={-100} />
      <Bug time={5050} left={150} top={-100} />
      <Bug time={4500} left={50} top={-100} />
      <Bug time={7050} />
    </div>
  );
};

export default Hero;
