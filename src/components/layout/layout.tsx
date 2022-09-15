import React from 'react';
import Footer from '../footer/footer';
import Greenwood from '../greenwood/greenwood';
import Syskrack from '../../atoms/syskrack/syskrack';
import * as styles from './layout.module.scss';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Greenwood />
      <main className={styles.wrap}>
        <div className={styles.logo}>
          <Syskrack />
        </div>
        {children}
        <Footer />
      </main>
    </>
  );
};

export default Layout;
