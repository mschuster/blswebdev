import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, menuLinks }) => (
  <header
    style={{
      background: `black`,
    }}
  >
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      <div id="navbar">
        <div>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
              <img
                src={"../../Logo11_white.png"}
                alt="Webiverse"
                style={{height: "100px"}}
                />
          </Link>
        </div>
        <div>
            <ul
              style={{
                display: "flex",
                flex: 1,
                fontFamily: "sans-serif",
                textDecoration: "none",
              }}
            >
              {menuLinks.map(link => (
                <li
                  key={link.name}
                  style={{
                    textDecoration: "none",
                    listStyleType: `none`,
                    padding: `1rem`,
                  }}
                >
                  <Link style={{ color: `white` }} to={link.link}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
        </div>
      </div>
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
