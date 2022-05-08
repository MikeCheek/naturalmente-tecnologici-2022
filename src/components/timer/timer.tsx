import React, { useEffect, useState } from 'react';
import * as styles from './timer.module.scss';

const Timer = ({ shutOffTimer }: { shutOffTimer: any }) => {
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  const countDownDate = new Date('August 11, 2022 09:00:00').getTime();

  useEffect(() => {
    setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const d = Math.floor(distance / (1000 * 60 * 60 * 24));
      const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((distance % (1000 * 60)) / 1000);
      days != d ? setDays(d) : null;
      hours != h ? setHours(h) : null;
      minutes != m ? setMinutes(m) : null;
      seconds != s ? setSeconds(s) : null;
      if (distance < 0) {
        shutOffTimer();
      }
    }, 1000);

    return clearInterval();
  }, []);
  return (
    <>
      <div className={styles.timerDesktop}>
        <div className={styles.circle} style={{ marginTop: 'calc(3.5 * 20px - 15px)' }}></div>
        <div className={styles.connection} style={{ marginTop: 'calc(3.5 * 20px)' }}></div>
        <div className={styles.timeWrap}>
          <p className={styles.time}>{days}</p>
          <p>Days</p>
        </div>
        <div className={styles.connection} style={{ marginTop: 'calc(1.5 * 20px)' }}></div>
        <div className={styles.timeWrap}>
          <p className={styles.time}>{hours}</p>
          <p>Hours</p>
        </div>
        <div className={styles.connection} style={{ marginTop: 'calc(3 * 20px)' }}></div>
        <div className={styles.timeWrap}>
          <p className={styles.time}>{minutes}</p>
          <p>Minutes</p>
        </div>
        <div className={styles.connection} style={{ marginTop: 'calc(2 * 20px)' }}></div>
        <div className={styles.timeWrap}>
          <p className={styles.time}>{seconds}</p>
          <p>Seconds</p>
        </div>
        <div className={styles.connection} style={{ marginTop: 'calc(1 * 20px)' }}></div>
        <div className={styles.circle} style={{ marginTop: 'calc(1 * 20px - 15px)' }}></div>
      </div>
      <div className={styles.timerMobile}>
        <div className={styles.timerRow}>
          <div className={styles.circle} style={{ marginTop: 'calc(3.5 * 20px - 5px)' }}></div>
          <div className={styles.connection} style={{ marginTop: 'calc(3.5 * 20px)' }}></div>
          <div className={styles.timeWrap}>
            <p className={styles.time}>{days}</p>
            <p>Days</p>
          </div>
          <div className={styles.connection} style={{ marginTop: 'calc(1.5 * 20px)' }}></div>
          <div className={styles.timeWrap}>
            <p className={styles.time}>{hours}</p>
            <p>Hours</p>
          </div>
          <div className={styles.connection} style={{ marginTop: 'calc(3 * 20px)' }}></div>
          <div className={styles.circle} style={{ marginTop: 'calc(3 * 20px - 5px)' }}></div>
        </div>

        <div className={styles.timerRow}>
          <div className={styles.circle} style={{ marginTop: 'calc(3 * 20px - 5px)' }}></div>
          <div className={styles.connection} style={{ marginTop: 'calc(3 * 20px)' }}></div>
          <div className={styles.timeWrap}>
            <p className={styles.time}>{minutes}</p>
            <p>Minutes</p>
          </div>
          <div className={styles.connection} style={{ marginTop: 'calc(2 * 20px)' }}></div>
          <div className={styles.timeWrap}>
            <p className={styles.time}>{seconds}</p>
            <p>Seconds</p>
          </div>
          <div className={styles.connection} style={{ marginTop: 'calc(1 * 20px)' }}></div>
          <div className={styles.circle} style={{ marginTop: 'calc(1 * 20px - 5px)' }}></div>
        </div>
      </div>
    </>
  );
};

export default Timer;
