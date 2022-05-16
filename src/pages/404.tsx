import React from 'react';
import Greenwood from '../components/greenwood/greenwood';
import Logo from '../atoms/logo/logo';
import SEO from '../atoms/seo/seo';
import { Link } from 'gatsby';
import '../styles/globals.scss';
import Layout from '../components/layout/layout';
import * as styled from '../styles/styled.module.scss';
import AnimatedText from '../atoms/animatedText/animatedText';

const NotFoundPage = () => {
  const pageStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    fontSize: '1.5rem',
  };
  return (
    <div style={pageStyle}>
      <SEO title="404: Syskrack Not found" />
      <Layout>
        <Logo />
        <h1>Syskrack not found</h1>

        <Link to="/" className={styled.link}>
          <span>Go home</span>
        </Link>
      </Layout>
    </div>
  );
};

export default NotFoundPage;
