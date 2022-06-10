import React, { useState } from 'react';
// import AnimatedText from '../../atoms/animatedText/animatedText';
import Logo from '../../atoms/logo/logo';
import Section from '../section/section';
import Timer from '../timer/timer';
import * as styles from './hero.module.scss';
import { sections } from '../../utility/sections';

const Hero = () => {
  const [timer, setTimer] = useState<boolean>(true);
  return (
    <div className={styles.nt}>
      <div className={styles.first}>
        <Logo />
        {timer ? <Timer shutOffTimer={() => setTimer(false)} /> : <></>}
      </div>
      {/*<AnimatedText text={'CATCH THE BUG'} />*/}
      {sections.map((item, index) => (
        <Section key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default Hero;
