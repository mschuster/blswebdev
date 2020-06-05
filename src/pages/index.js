import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PortfolioPreview from "../components/portfolio-preview"
import Carousel from "@brainhubeu/react-carousel"
import "@brainhubeu/react-carousel/lib/style.css"

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
  `)

  const portfolioprojects = data.allPortfolioJson.edges
  return (
    <Layout>
      <SEO title="Home" />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <img
          src={"../../dev_image.png"}
          alt="Sinnbild"
          style={{ width: "50%", float: "left" }}
        ></img>
        <div
          style={{
            width: "50%",
            float: "right",
            textAlign: "center",
            verticalAlign: "center",
            marginTop: "10rem",
            color: "white",
          }}
        >
          <h1>Webiverse</h1>
          <hr
            style={{
              height: "2px",
              borderWidth: "0",
              color: "white",
              backgroundColor: "white",
            }}
          />
          <h2>INDIVIDUELLES WEBDESIGN</h2>
          <h4>ANGEPASST AN IHRE BEDÜRFNISSE</h4>
        </div>
      </div>

      <div>
        <h3 style={{ color: "white" }}>UNSER PORTFOLIO</h3>
        <Carousel slidesPerPage={3} centered
  dots arrows infinite autoPlay={2000}
  animationSpeed={1000}>
          {portfolioprojects.map(({ node: project }) => {
            const title = project.title
            const description = project.description
            const slug = project.slug
            const imageData = project.image.childImageSharp.fluid
            const url = project.url

            return (
              <PortfolioPreview
                title={title}
                description={description}
                imageData={imageData}
                slug={slug}
                url={url}
              />
            )
          })}
        </Carousel>
      </div>
    </Layout>
  )
}
