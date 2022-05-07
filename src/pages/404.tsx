import * as React from 'react';
import Logo from '../atoms/logo/logo';
import { Link } from 'gatsby';
import '../styles/globals.scss';
import SEO from '../atoms/seo/seo';

const NotFoundPage = () => {
  const pageStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    color: 'var(--nt-blue)',
    fontSize: '1.5rem',
  };
  return (
    <main style={pageStyle}>
      <SEO title="404: Not found" />
      <Logo />
      <h1>Page not found</h1>
      <p>
        <Link to="/">Go home</Link>
      </p>
    </main>
  );
};

export default NotFoundPage;
