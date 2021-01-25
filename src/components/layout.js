/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useSiteMetadata } from "../hooks/useSiteMetadata"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  // const isHome = window.location.pathname === '/';
  const { title } = useSiteMetadata()

  return (
    <>
      <div className="viewport">
        <div className="viewport-top">
          {/* The main header section on top of the screen */}
          <Header siteTitle={title} />
          <main className="site-main" style={{ minHeight: "50vh" }}>
            {children}
          </main>
        </div>
        <div className="viewport-bottom">
          {/* The footer at the very bottom of the screen */}
          <footer className="site-foot">
            <div className="site-foot-nav container">
              {/* Add footer nav links in this container */}
            </div>
            © {new Date().getFullYear()}
            {` `}
            Sisters by the Moon
          </footer>
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
