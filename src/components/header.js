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
        <h1
          style={{
            margin: 0,
            flex: "0 40%",
          }}
        >
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            <h1>Webiverse</h1>
          </Link>
        </h1>
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
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
