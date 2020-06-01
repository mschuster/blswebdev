import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"

const PortfolioPreview = ({ slug, url, title, imageData, description }) => (
  <div className="portfolio-previews" style={{margin:'0 1rem 1rem 1rem'}}>
    <Link to={`/${slug}/`}>
      <Image fluid={imageData} alt={title} />
    </Link>
    <h2>
      <Link to={`/${slug}/`} style={{color: 'white', textDecoration: 'none'}}>{title}</Link>
    </h2>
    <p style={{color: 'white', textDecoration: 'none'}}>{description}</p>
    <p>
      <a href={url} style={{color: 'white', textDecoration: 'none'}}>Link zur Webseite &rarr;</a>
    </p>
  </div>
)

export default PortfolioPreview
