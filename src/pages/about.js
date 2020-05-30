import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
    <Layout>
      <SEO title="About" />
      <h1>Über uns</h1>
      <div class='teambox'>
        <div class='teambox-item'>
          <img src={'../../hiclipart.com.png'} alt="Profile Pciture"></img>
          Susan Labude (Desing)
        </div>
        <div class='teambox-item'>
          <img src={'../../hiclipart.com.png'} alt="Profile Pciture"></img>
          Dominik Breck (Tech)
          </div>
        
        <div class='teambox-item'>
         <img src={'../../hiclipart.com.png'} alt="Profile Pciture"></img>
         Martin Schuster (Tech)
        </div>
      </div>


    </Layout>
  )
  
  export default AboutPage