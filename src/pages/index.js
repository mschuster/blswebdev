import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
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
  </Layout>
)

export default IndexPage


