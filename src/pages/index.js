import React from "react"
import { graphql, useStaticQuery} from 'gatsby';
import Layout from "../components/layout"
import SEO from "../components/seo"
import PortfolioPreview from '../components/portfolio-preview';

export default () => {
  const data = useStaticQuery(graphql`
    {
      allPortfolioJson {
        edges {
          node {
            title
            slug
            url
            description
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `);

  const portfolioprojects = data.allPortfolioJson.edges;
  return (
    <Layout>

<SEO title="Home" />
    <div class="homepage">
      <div class="homepage-item">
        <img src={'../../dev_image.png'} Alt="Sinnbild"></img>
        
        </div>
      <div class="homepage-item">
        <div class="homepage-text" style ={{
          verticalAlign: 'middle',
          textAlign: 'middle'
        }}>
          <h1>Webiverse</h1>
          <hr></hr>
          <h3>INDIVIDUELLES WEBDESIGN</h3>
          <h5>ANGEPASST AN IHRE BEDÜRFNISSE</h5>
        </div>
      </div>
    </div>

    <h3>Portfolio Übersicht</h3>
      {portfolioprojects.map(({node: project}) => {
        const title = project.title;
        const description = project.description;
        const slug = project.slug;
        const imageData = project.image.childImageSharp.fluid;
        const url = project.url;

        return (
          <PortfolioPreview
            title={title}
            description={description}
            imageData={imageData}
            slug={slug}
            url={url}
          />
        );
      })}
      
    </Layout>
  );
}

