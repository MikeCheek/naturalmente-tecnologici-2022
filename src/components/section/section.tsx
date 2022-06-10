import React from 'react';
import { useInView } from 'react-intersection-observer';
import Circle from '../../atoms/circle/circle';
import Connection from '../../atoms/connection/connection';
import Paragraph from '../../atoms/paragraph/paragraph';
import * as styles from './section.module.scss';

interface SectionProps {
  title: string;
  content: Array<string>;
}

const Section = ({ title, content }: SectionProps) => {
  const [ref, inView, _entry] = useInView({
    threshold: 0,
    fallbackInView: true,
    rootMargin: '-10% 0px -10% 0px',
  });

  const [contentRef, contentInView, _contentEntry] = useInView({
    threshold: 0,
    fallbackInView: true,
    rootMargin: '-20% 0px -20% 0px',
  });

  const style = {
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateX(0)' : 'translateX(100px)',
    transition: 'opacity 0.7s ease-out, transform 0.7s ease-out',
  };
  const contentStyle = {
    opacity: contentInView ? 1 : 0,
    transform: contentInView ? 'translateX(0)' : 'translateX(100px)',
    transition: 'opacity 0.7s ease-out, transform 0.7s ease-out',
  };

  return (
    <div className={styles.section}>
      <div className={styles.title} style={style} ref={ref}>
        <Circle value={-1} />
        <Connection value={-1} />
        <span dangerouslySetInnerHTML={{ __html: title }}></span>
        <Connection value={-1} />
        <Circle value={-1} />
      </div>
      <div className={styles.contentWrap} ref={contentRef} style={contentStyle}>
        {content.map((item, index) => (
          <Paragraph key={index} content={item}></Paragraph>
        ))}
      </div>
    </div>
  );
};

export default Section;
