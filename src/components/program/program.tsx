import React, { useEffect } from 'react';
import Paragraph from '../../atoms/paragraph/paragraph';
import program from '../../utility/program';
import * as styles from './program.module.scss';

const Program = () => {
  const eventStarted = () => {
    const now = new Date();
    const eventStart = new Date(2022, 7, 11);
    return now >= eventStart;
  };

  useEffect(() => {
    if (eventStarted()) {
      console.log('event started');
    }
  }, []);

  return (
    <>
      <div className={styles.program}>
        {program.map((day, key) => {
          return (
            <div key={key} id={day.number.toString()}>
              <h3>
                {day.day} {day.number}/08
              </h3>
              {day.schedule.map((event, key) => {
                return (
                  <div
                    key={key}
                    className={styles.event}
                    style={event.count ? { height: `${event.count == 2 ? 319 : 495}px` } : undefined}
                  >
                    <p className={styles.time}>
                      {event.from} - {event.to}
                    </p>
                    {event.type ? <p className={styles.type}>{event.type}</p> : null}
                    <h4>{event.name}</h4>
                    <p className={styles.location}>{event.location}</p>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <div style={{ margin: '20px 0' }} id={'*'}>
        <Paragraph content="*Laboratori riservati a soci e iscritti Camping" />
      </div>
    </>
  );
};

export default Program;
