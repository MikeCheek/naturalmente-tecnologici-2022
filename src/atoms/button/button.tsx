import React from 'react';
import * as styles from './button.module.scss';

interface ButtonProps {
  href: string;
  text: string;
}

const Button = ({ href, text }: ButtonProps) => {
  return (
    <a className={styles.button} href={href} title={text} rel="noopener noreferrer" target={'_blank'}>
      {text}
    </a>
  );
};

export default Button;
