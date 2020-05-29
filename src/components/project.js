import React from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import ProjectTemplate from '../templates/project';

const Project = ({ title, description, url, imageData }) => (
    <div className="project">
        <h1>{title}</h1>
        <Image fluid={imageData} alt={title}/>
        <p>{description}</p>
        <p>
            <a href={url}>Webseite besuchen &rarr;</a>
        </p>
        <p>
            <Link to="/portfolio">&larr; Portfolio Ansicht aufrufen</Link>
        </p>
    </div>
);

export default Project;