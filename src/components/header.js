import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import MoonLogo from '../images/night-mode.webp'
import FacebookLogo from '../images/facebook-2.webp'
import InstaLogo from '../images/instagram.webp'
import { CartContext } from '../context/CartContext'

const Header = ({ siteTitle }) => (
  <CartContext.Consumer>
    {({ cart = 0 }) => (
      <header className="site-head">
        <div className="container">
          <div className="site-mast">
            <div className="site-mast-left">
              <Link to="/">
                <img src={MoonLogo} style={{ width: "40px", height: "40px", color: "white" }} alt={siteTitle} />
              </Link>
            </div>
            <div className="site-mast-right">
              {<a href="https://facebook.com" className="site-nav-item" target="_blank" rel="noopener noreferrer"><img src={FacebookLogo} style={{ width: "40px", height: "40px", color: "white" }} alt="Facebook" /></a>}
              {<a href="https://www.instagram.com/sistersbythemoon13/" className="site-nav-item" target="_blank" rel="noopener noreferrer"><img src={InstaLogo} style={{ width: "40px", height: "40px", color: "white" }} alt="Instagram" /></a>}
            </div>
          </div>
          <div className="site-banner">
            <h1 className="site-banner-title">{siteTitle}</h1>
            {/* <p className="site-banner-desc">Welcome</p> */}
          </div>

          {/* TODO: Sticky Navigation for scrollable areas of the site */}
          <nav className="site-nav">
            <div className="site-nav-left">
              {/* The navigation items as setup in Ghost */}
              <Link className="site-nav-item" to="/">Home</Link>
              <Link className="site-nav-item" to="/store">Store</Link>
              <Link className="site-nav-item" to="/tarot">Tarot</Link>
              <Link className="site-nav-item" to="/runes">Runes</Link>
              {/* <Link className="site-nav-item" to="/cancel">Blog</Link> */}
            </div>
            <div className="site-nav-right">
              {cart.length !== 0 && <Link className="site-nav-button cart" to="/cart">Cart {cart.reduce((acc, item) => acc += item.quantity, 0)}</Link>}

              <Link className="site-nav-button" to="/about">About</Link>
            </div>
          </nav>
        </div>
      </header >
    )
    }
  </CartContext.Consumer>
)


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
