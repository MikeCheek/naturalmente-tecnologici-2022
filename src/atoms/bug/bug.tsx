import React, { useEffect, useRef } from 'react';
import * as styles from './bug.module.scss';
import randInt from '../../utility/randInt';
import BugSvg from '../../assets/bug.svg';

interface BugProps {
  time?: number;
  left?: number;
  top?: number;
  click: () => void;
}

const Bug = ({ time = 5000, top = 100, left = -105, click }: BugProps) => {
  const [itime, itop, ileft, iclick] = [time, top, left, click];
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

  const handleClick = () => {
    const bug = bugRef.current;
    click();
    if (bug) {
      const bugStyle = bug.style;
      const child = bug.children[0];
      bug.removeChild(child);
      bugStyle.transition = '0s';
      bugStyle.left = `${ileft}px`;
      bugStyle.top = `${itop}px`;
      setTimeout(() => {
        bug.appendChild(child);
        bugStyle.removeProperty('transition');
      }, 2000);
    }
  };

  return (
    <div className={styles.bugWrap} ref={bugRef} style={style}>
      <BugSvg alt="bug" className={styles.bug} fill="var(--nt-purple)" onClick={handleClick} />
    </div>
  );
};

export default Bug;
