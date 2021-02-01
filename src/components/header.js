import React, { useContext } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import MoonLogo from "../images/night-mode.webp"
import FacebookLogo from "../images/facebook-2.webp"
import InstaLogo from "../images/instagram.webp"
import { CartContext } from "../context/CartContext"

const Header = ({ siteTitle }) => {
  const { cart } = useContext(CartContext)

  return (
    <header className="site-head">
      <div className="container">
        <div className="site-mast">
          <div className="site-mast-left">
            <Link to="/">
              <img
                src={MoonLogo}
                style={{ width: "40px", height: "40px", color: "white" }}
                alt={siteTitle}
              />
            </Link>
          </div>
          <div className="site-mast-right">
            {
              <a
                href="https://facebook.com"
                className="site-nav-item"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={FacebookLogo}
                  style={{ width: "40px", height: "40px", color: "white" }}
                  alt="Facebook"
                />
              </a>
            }
            {
              <a
                href="https://www.instagram.com/sistersbythemoon13/"
                className="site-nav-item"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={InstaLogo}
                  style={{ width: "40px", height: "40px", color: "white" }}
                  alt="Instagram"
                />
              </a>
            }
          </div>
        </div>
        <div className="site-banner">
          {/* <h1 className="site-banner-title">{siteTitle}</h1> */}
          {/* <p className="site-banner-desc">Welcome</p> */}
        </div>

        {/* TODO: Sticky Navigation for scrollable areas of the site */}
        <nav className="site-nav">
          <div className="site-nav-left">
            {/* The navigation items as setup in Ghost */}
            <Link className="site-nav-item" to="/">
              Home
            </Link>
            <Link className="site-nav-item" to="/store">
              Store
            </Link>
            <Link className="site-nav-item" to="/tarot">
              Tarot
            </Link>
            <Link className="site-nav-item" to="/runes">
              Runes
            </Link>
            {/* <Link className="site-nav-item" to="/cancel">Blog</Link> */}
          </div>
          <div className="site-nav-right">
            {cart && cart.length !== 0 && (
              <Link className="site-nav-button cart" to="/cart">
                Cart{" "}
                {cart && cart.reduce((acc, item) => (acc += item.quantity), 0)}
              </Link>
            )}

            <Link className="site-nav-button" to="/about">
              About
            </Link>
          </div>
        </nav>

        {/* Mobile Nav */}
        <div class="mobile-wrapper">
          <div class="mobile-container">
            <div class="content">
              <nav>
                <input type="checkbox" id="hamburger1" />
                <label htmlFor="hamburger1"></label>

                <ul class="nav-links">
                  <li>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>
                    <Link to="/store">Store</Link>
                  </li>
                  <li>
                    <Link to="/tarot">Tarot</Link>
                  </li>
                  <li>
                    <Link to="/runes">Runes</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {cart && cart.length !== 0 && (
                <>
                  <Link to="/cart">
                    <svg
                      height="30"
                      width="30"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="black"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1"
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>{" "}
                  </Link>
                  <span style={{ color: "black", padding: "0 10px 0 5px" }}>
                    {cart &&
                      cart.reduce((acc, item) => (acc += item.quantity), 0)}
                  </span>
                </>
              )}
              <Link to="/">
                <img
                  src={MoonLogo}
                  style={{ width: "30px", height: "30px", marginRight: "25px" }}
                  alt={siteTitle}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
