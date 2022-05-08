import { StaticImage } from 'gatsby-plugin-image';
import React, { useEffect, useRef, useState } from 'react';
import randInt from '../../utility/randInt';
import * as styles from './bug.module.scss';

const Bug = ({ time = 5000 }: { time?: number }) => {
  const bugRef = useRef<HTMLDivElement>(null);

  const moveBugs = () => {
    const bug = bugRef.current;
    if (bug) {
      const bugStyle = bug.style;
      const bugRect = bug.getBoundingClientRect();
      const randLeft = randInt(0, window.innerWidth);
      const randTop = randInt(0, window.innerHeight);
      const offL = randLeft - bugRect.left;
      const offT = randTop - bugRect.top;

      let c = (Math.atan2(offT, offL) * 180) / Math.PI;

      bugStyle.left = randLeft + 'px';
      bugStyle.top = randTop + 'px';
      bugStyle.transform = 'rotate(0deg)';
      bugStyle.transform = 'rotate(' + c + 'deg)';
    }
  };
  useEffect(() => {
    setInterval(moveBugs, time);
  }, []);

  return (
    <span ref={bugRef}>
      <div className={styles.bugWrapDesktop} style={{ left: '500px', top: '100px' }}>
        <StaticImage src="../../images/bug.png" alt="bug" placeholder="blurred" className={styles.bug} />
      </div>
      <div className={styles.bugWrapMobile} style={{ left: '150px', top: '100px' }}>
        <StaticImage src="../../images/bug.png" alt="bug" placeholder="blurred" className={styles.bug} />
      </div>
    </span>
  );
};

export default Bug;
