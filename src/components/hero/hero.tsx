import React, { useEffect, useState } from 'react';
// import AnimatedText from '../../atoms/animatedText/animatedText';
import Logo from '../../atoms/logo/logo';
import Section from '../section/section';
import Timer from '../timer/timer';
import * as styles from './hero.module.scss';
import { sections } from '../../utility/sections';
import WhereWhen from '../whereWhen/whereWhen';
import Slider from '../slider/slider';
import Button from '../../atoms/button/button';

const Hero = () => {
  const [timer, setTimer] = useState<boolean>(true);
  const [showButton, setShowButton] = useState<boolean>(false);
  const formLink = 'https://forms.gle/Sm1e566Z3Wn3NGTk9';
  const formAltText = 'Le iscrizioni al camping apriranno giorno 1 Luglio';
  const formText = 'Iscriviti al Camping';

  useEffect(() => {
    const now = new Date();
    const firstJuly = new Date('July 1, 2022 00:00:00');
    console.log(now.getTime(), firstJuly.getTime());
    if (now.getTime() > firstJuly.getTime()) {
      setShowButton(true);
    }
  }, []);

  return (
    <div className={styles.nt}>
      <div className={styles.first}>
        <Logo />
        {timer ? <Timer shutOffTimer={() => setTimer(false)} /> : <></>}
        {showButton ? (
          <Button text={formText} href={formLink} />
        ) : (
          <p style={{ fontSize: '1.2rem', textAlign: 'center' }}>{formAltText}</p>
        )}
        <WhereWhen />
      </div>

      {/*<AnimatedText text={'CATCH THE BUG'} />*/}
      {sections.map((item, index) => (
        <Section key={index} title={item.title} content={item.content} />
      ))}

      <Button
        text="Camping Location"
        href={`https://www.google.com/maps/place/40%C2%B037'56.6%22N+16%C2%B018'31.7%22E`}
      />
      {showButton ? (
        <Button text={formText} href={formLink} />
      ) : (
        <p style={{ fontSize: '1.2rem', textAlign: 'center' }}>{formAltText}</p>
      )}
      <Slider />
    </div>
  );
};

export default Hero;
