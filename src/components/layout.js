import React from 'react';

import Footer from './footer';

const Layout = ({ children }) => {

  return (
    <>
      <h1>Esto es un Layout</h1>

        {children}

      <Footer />
    </>
  )
}

export default Layout;
