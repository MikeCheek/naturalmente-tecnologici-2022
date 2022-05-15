import React, { useState } from 'react';
import AnimatedText from '../../atoms/animatedText/animatedText';
import Logo from '../../atoms/logo/logo';
import Timer from '../timer/timer';
import * as styles from './hero.module.scss';

const Hero = () => {
  const [timer, setTimer] = useState<boolean>(true);
  return (
    <div className={styles.nt}>
      <Logo />
      {timer ? <Timer shutOffTimer={() => setTimer(false)} /> : <></>}
      <AnimatedText text={'CATCH THE BUG'} />
    </div>
  );
};

export default Hero;
