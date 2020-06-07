import React from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';

const Project = ({ title, description, url, imageData }) => (
    <div className="project" style={{color: 'white'}}>
        <h1>{title}</h1>
        <Image fluid={imageData} alt={title}/>
        <p>{description}</p>
        <p>
            <a href={url} style={{textDecoration:'none'}}>Webseite besuchen &rarr;</a>
        </p>
        <p>
            <Link to="/portfolio" style={{textDecoration:'none'}}>&larr; Portfolio Ansicht aufrufen</Link>
        </p>
    </div>
);

export default Project;