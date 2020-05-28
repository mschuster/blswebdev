import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, menuLinks }) => (
  <header
    style={{
      background: `white`,
      marginBottom: `1rem`,
    }}
  >
    
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        padding: `1rem 1rem`,
      }}
    >
      <h1 style={{ 
        margin: 0,
        flex: '0 50%',
        }}>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
          }}
        >
          <img src={'../../logo.png'} alt="Logo"></img>
        </Link>
      </h1>
      <div>
          <nav>
            <ul style={{ display: "flex", flex: '0 50%' }}>
              {menuLinks.map(link => (
                <li
                  key={link.name}
                  style={{
                    listStyleType: `none`,
                    padding: `1rem`,
                  }}
                >
                  <Link style={{ color: `black` }} to={link.link}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
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
