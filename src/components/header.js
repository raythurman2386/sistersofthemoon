import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, isHome }) => (
  <header className="site-head">
    <div className="container">
      <div className="site-mast">
        <div className="site-mast-left">
          {/* Logo goes here */}
        </div>
      </div>
      {isHome && <div className="site-banner">
        <h1 className="site-banner-title">{siteTitle}</h1>
        <p className="site-banner-desc">Welcome</p>
      </div>}

      <nav className="site-nav">
        <div className="site-nav-left">
          {/* The navigation items as setup in Ghost */}
          <Link className="site-nav-item" to="/">Home</Link>
          <Link className="site-nav-item" to="/success">Store</Link>
          <Link className="site-nav-item" to="/cancel">Blog</Link>
        </div>
        <div className="site-nav-right">
          <Link className="site-nav-button" to="/about">About</Link>
        </div>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
