/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)

  return (
    <>
      <Header
        menuLinks={data.site.siteMetadata.menuLinks}
        siteTitle={data.site.siteMetadata.title}
      />
      <div
        style={{
          background: 'dimgrey'
        }}
      >
        <main>{children}</main>
        <footer>
        <div className="footer">
            <img
                src={"../../Logo11.png"}
                alt="Webiverse"
                style={{height: "50px", alignSelf: "center"}}
            />
            <div>
              {/*
                <Link
                    to="/contact"
                    style={{ color: "white", textDecoration: "none" }}
                >
                    Kontakt
                </Link>
              */}
                &emsp;
                <Link
                    to="/impressum"
                    style={{ color: "white", textDecoration: "none" }}
                >
                    Impressum
                </Link>
            </div>
        </div>
      </footer>
      </div>
      
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
