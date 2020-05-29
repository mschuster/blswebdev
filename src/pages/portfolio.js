import React from "react";
import { graphql, useStaticQuery} from 'gatsby';
import Layout from "../components/layout";
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
  