import React from 'react';
import Helmet from 'react-helmet';
import {Global, css} from '@emotion/react';

import Footer from './footer';
import Header from './header';

const Layout = ({ children }) => {

  return (
    <>
      <Global 
        styles={css`
          html {
            font-size: 62.5%;
            box-sizing: border-box;
          }
          *, *:before, *:after {
            box-sizing: inherit;
          }
          body {
            font-size: 16px;
            font-size: 1.6rem;
            line-height: 25px;
            background-color: #212020;
            font-family: 'Gidugu', sans-serif;
            color: #FFFFFF;
          }
          h1, h2, h3, h4 {
            margin: 0!important;
          }
          ul {
            list-style: none;
            margin: 0;
            padding: 0;
          }
        `}
      />
      <Helmet>
          <title>Autotramex</title>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Gidugu&family=Roboto:wght@100;300;400;700&display=swap" rel="stylesheet" />
      </Helmet>

      <Header />

        {children}

      <Footer />
    </>
  )
}

export default Layout;
