import React from 'react';;
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {

  return (
    <>
      <h1>Esto es un Layout</h1>

      {children}
    </>
  )
}

export default Layout;
