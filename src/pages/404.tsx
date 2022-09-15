import React from 'react';
import { Link } from 'gatsby';
import '../styles/globals.scss';
import Logo from '../atoms/logo/logo';
import SEO from '../atoms/seo/seo';
import Layout from '../components/layout/layout';
import * as styled from '../styles/styled.module.scss';

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
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyItems: 'center',
            marginTop: '150px',
            width: '100%',
          }}
        >
          <Logo />
          <h1>Syskrack not found</h1>

          <Link to="/" className={styled.link}>
            <span>Go home</span>
          </Link>
        </div>
      </Layout>
    </div>
  );
};

export default NotFoundPage;
