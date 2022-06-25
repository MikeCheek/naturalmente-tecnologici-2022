import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { StaticImage } from 'gatsby-plugin-image';
import Arrow from '../../atoms/arrow/arrow';
import * as styles from './slider.module.scss';

export interface ArrowInterface {
  clickHandler: () => void;
  label: string;
  children?: (string | Element)[];
}

const placeholder = 'blurred';
const layout = 'constrained';
const height = 500;

const Slider = () => {
  return (
    <Carousel
      className={styles.slider}
      interval={5000}
      ariaLabel={'Foto area camping'}
      renderArrowNext={(clickHandler, _hasPrev, label) => <Arrow clickHandler={clickHandler} label={label} />}
      renderArrowPrev={(clickHandler, _hasPrev, label) => <Arrow clickHandler={clickHandler} label={label} left />}
      //@ts-ignore
      renderThumbs={() => null}
      autoPlay
      showArrows
      showThumbs
      showIndicators
      emulateTouch
      showStatus={false}
      infiniteLoop
      preventMovementUntilSwipeScrollTolerance
    >
      <div className={styles.imageWrap}>
        <StaticImage
          src={'../../images/camping/camp0.jpg'}
          alt={'Peps matto'}
          placeholder={placeholder}
          layout={layout}
          height={height}
          title={'Peps matto'}
          className={styles.image}
        />
      </div>

      <div className={styles.imageWrap}>
        <StaticImage
          src={'../../images/camping/camp1.jpg'}
          alt={'Camping tramonto'}
          placeholder={placeholder}
          layout={layout}
          height={height}
          title={'Camping tramonto'}
          className={styles.image}
        />
      </div>

      <div className={styles.imageWrap}>
        <StaticImage
          src={'../../images/camping/camp2.jpg'}
          alt={'Camping tramonto'}
          placeholder={placeholder}
          layout={layout}
          height={height}
          title={'Camping tramonto'}
          className={styles.image}
        />
      </div>

      <div className={styles.imageWrap}>
        <StaticImage
          src={'../../images/camping/camp3.jpg'}
          alt={'Camping tramonto'}
          placeholder={placeholder}
          layout={layout}
          height={height}
          title={'Camping tramonto'}
          className={styles.image}
        />
      </div>

      <div className={styles.imageWrap}>
        <StaticImage
          src={'../../images/camping/camp4.jpg'}
          alt={'Camping murales'}
          placeholder={placeholder}
          layout={layout}
          height={height}
          title={'Camping murales'}
          className={styles.image}
        />
      </div>
    </Carousel>
  );
};

export default Slider;
