import { StaticImage } from 'gatsby-plugin-image';
import React, { useEffect, useRef, useState } from 'react';
import randInt from '../../utility/randInt';
import * as styles from './bug.module.scss';

interface BugProps {
  right?: boolean;
  bottom?: boolean;
  time?: number;
}

const Bug = ({ right = false, bottom = false, time = 5000 }: BugProps) => {
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

  const style = {
    left: right && typeof window !== 'undefined' ? window.innerWidth : '-100px',
    top: bottom && typeof window !== 'undefined' ? window.innerHeight : '180px',
  };
  return (
    <>
      <div className={styles.bugWrap} ref={bugRef} style={style}>
        <StaticImage
          src="https://syskrack.org/wp-content/uploads/2022/05/bug.png"
          alt="bug"
          placeholder="blurred"
          className={styles.bug}
        />
      </div>
    </>
  );
};

export default Bug;
