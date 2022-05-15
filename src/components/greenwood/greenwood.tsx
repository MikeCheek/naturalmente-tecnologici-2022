import React from 'react';
import * as styles from './greenwood.module.scss';

import BigBranch from '../../assets/bigBranch.svg';
import Branch1 from '../../assets/branch1.svg';
import Branch2 from '../../assets/branch2.svg';
import Flower1 from '../../assets/flower1.svg';
import Flower2 from '../../assets/flower2.svg';
import Insect from '../../assets/insect.svg';

const Greenwood = () => {
  return (
    <div className={styles.greenwood}>
      <Branch1 fill="var(--nt-green)" style={{ left: '0%', transform: 'rotate(90deg)' }} />
      <Branch1 fill="var(--nt-green)" style={{ right: '0%', top: '30%', transform: 'rotate(-90deg)' }} />
      <Branch2 fill="var(--nt-green)" style={{ left: '0%', top: '30%', transform: 'rotate(90deg)' }} />
      <Branch2 fill="var(--nt-green)" style={{ right: '0%', transform: 'rotate(-90deg)' }} />
      <Flower1 fill="var(--nt-green)" style={{ bottom: '0%', left: '0%', transform: 'rotate(45deg)' }} />
      <Flower2 fill="var(--nt-green)" style={{ bottom: '0%', right: '0%', transform: 'rotate(-45deg)' }} />
    </div>
  );
};

export default Greenwood;
