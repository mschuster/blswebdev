import React from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';

const PortfolioPreview = ({ slug, url, title, imageData, description }) => (
    <div className="portfolio-preview">
        <Link to={`/${slug}/`}></Link>
        <Image fluid={imageData} alt={title} />
        <h2>
            <Link to={`/${slug}/`}>{title}</Link>
        </h2>
        <p>{description}</p>
        <p>
            <a href={url}>Link zur Webseite &rarr;</a>
        </p>
    </div>
)

export default PortfolioPreview