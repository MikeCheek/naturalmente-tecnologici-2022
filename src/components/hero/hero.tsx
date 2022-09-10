import React, { useState } from 'react';
import Logo from '../../atoms/logo/logo';
import Section from '../section/section';
import Timer from '../timer/timer';
import * as styles from './hero.module.scss';
import { sections } from '../../utility/sections';
import WhereWhen from '../whereWhen/whereWhen';
import Slider from '../slider/slider';
import Button from '../../atoms/button/button';
import Guests from '../guests/guests';
import Program from '../program/program';
import Moderators from '../moderators/moderators';
import Sponsor from '../sponsor/sponsor';
import Social from '../social/social';

const Hero = () => {
  const [timer, setTimer] = useState<boolean>(true);
  const buttonLink = 'https://drive.google.com/drive/folders/1VvckPrYvLbHZmcW-NyCWzkoOKu8n-PFO?usp=sharing';
  const buttonText = 'Foto dell'evento';

  return (
    <div className={styles.nt}>
      <div className={styles.first}>
        <Logo />
        {/*timer ? <Timer shutOffTimer={() => setTimer(false)} /> : <></>*/}
        <Button text={buttonText} href={buttonLink} />
        <WhereWhen />
      </div>

      <Social reduce />

      <Section title={sections[0].title} content={sections[0].content} />

      <Section title={sections[1].title} content={sections[1].content} />

      <Button
        text="Camping Location"
        href={`https://www.google.com/maps/place/40%C2%B037'56.6%22N+16%C2%B018'31.7%22E`}
      />
      <Button text={formText} href={formLink} />
      <Section title={'<h2>Ospiti evento</h2>'} appearContent={false}>
        <Guests />
      </Section>
      <Section title={'<h2>Moderatori evento</h2>'} appearContent={false}>
        <Moderators />
      </Section>
      <Section title={'<h2>Programma evento</h2>'} id={'programma'} appearContent={false}>
        <Program />
      </Section>

      <Section title={'<h2>Galleria</h2>'} appearContent={false}>
        <Slider />
      </Section>

      <Section title={'<h2>Sponsor</h2>'} appearContent={false}>
        <Sponsor />
      </Section>
    </div>
  );
};

export default Hero;
