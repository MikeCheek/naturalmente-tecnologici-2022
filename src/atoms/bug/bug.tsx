import React, { useEffect, useRef } from 'react';
import * as styles from './bug.module.scss';
import { StaticImage } from 'gatsby-plugin-image';
import randInt from '../../utility/randInt';

interface BugProps {
  time?: number;
  left?: number;
  top?: number;
}

const Bug = ({ time = 5000, top = 100, left = -100 }: BugProps) => {
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

  const style: React.CSSProperties = {
    left: `${left}px`,
    top: `${top}px`,
  };

  return (
    <div className={styles.bugWrap} ref={bugRef} style={style}>
      <StaticImage src="../../images/bug.png" alt="bug" placeholder="blurred" className={styles.bug} />
    </div>
  );
};

export default Bug;
