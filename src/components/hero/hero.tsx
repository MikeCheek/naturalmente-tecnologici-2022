import React, { useState } from 'react';
// import AnimatedText from '../../atoms/animatedText/animatedText';
import Logo from '../../atoms/logo/logo';
import Section from '../section/section';
import Timer from '../timer/timer';
import * as styles from './hero.module.scss';
import { sections } from '../../utility/sections';
import WhereWhen from '../whereWhen/whereWhen';
import Slider from '../slider/slider';
import Button from '../../atoms/button/button';
import { StaticImage } from 'gatsby-plugin-image';
import Guests from '../guests/guests';
import Program from '../program/program';

const Hero = () => {
  const [timer, setTimer] = useState<boolean>(true);
  const formLink = 'https://bit.ly/3nGnUBU';
  const formText = 'Iscriviti al Camping';

  return (
    <div className={styles.nt}>
      <div className={styles.first}>
        <Logo />
        {timer ? <Timer shutOffTimer={() => setTimer(false)} /> : <></>}
        <Button text={formText} href={formLink} />
        <WhereWhen />
      </div>

      <Section title={sections[0].title} content={sections[0].content} />
      <Section title={'<h2>Programma evento</h2>'} id={'programma'}>
        <Program />
      </Section>
      <Section title={sections[1].title} content={sections[1].content} />

      <Button
        text="Camping Location"
        href={`https://www.google.com/maps/place/40%C2%B037'56.6%22N+16%C2%B018'31.7%22E`}
      />
      <Button text={formText} href={formLink} />
      <Slider />
      <Section title={'<h2>Ospiti evento</h2>'}>
        <Guests />
      </Section>
    </div>
  );
};

export default Hero;
