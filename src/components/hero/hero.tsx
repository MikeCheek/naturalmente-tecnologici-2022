import React, { lazy, Suspense } from 'react';
import * as styles from './hero.module.scss';
import Button from '../../atoms/button/button';
import Guests from '../guests/guests';
import Logo from '../../atoms/logo/logo';
import Moderators from '../moderators/moderators';
import Program from '../program/program';
// import Timer from '../timer/timer';
import Section from '../section/section';
import Social from '../social/social';
import Sponsor from '../sponsor/sponsor';
import WhereWhen from '../whereWhen/whereWhen';
import { sections } from '../../utility/sections';
import Loading from '../../atoms/loading/loading';

const Hero = () => {
  // const [timer, setTimer] = useState<boolean>(true);
  // const formLink = 'https://bit.ly/3nGnUBU';
  // const formText = 'Iscriviti al Camping';
  const buttonLink = '#gallery';
  const buttonText = "Foto dell'evento";
  const isBrowser = typeof window !== 'undefined';

  const Gallery = lazy(() => import('../../atoms/gallery/gallery'));

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
      {/* <Button text={formText} href={formLink} /> */}

      <Section title={'<h2>Foto evento</h2>'} appearContent={false} id="gallery">
        {isBrowser && (
          <Suspense fallback={<Loading width={200} height={200} />}>
            <Gallery />
          </Suspense>
        )}
      </Section>

      <Section title={'<h2>Ospiti evento</h2>'} appearContent={false}>
        <Guests />
      </Section>
      <Section title={'<h2>Moderatori evento</h2>'} appearContent={false}>
        <Moderators />
      </Section>

      <Section title={'<h2>Programma evento</h2>'} id={'programma'} appearContent={false}>
        <Program />
      </Section>

      <Section title={'<h2>Sponsor</h2>'} appearContent={false}>
        <Sponsor />
      </Section>
    </div>
  );
};

export default Hero;
