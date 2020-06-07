import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
    <Layout>
      <SEO title="About" />
      <div class='teambox'>
        <div class='teambox-item'>
          <img src={'../../Susi.jpeg'} alt="Profile Pciture"></img>
            <h2>Susan Labude</h2>
            Designer
            <hr
                style={{
                    backgroundColor: 'white'
                }}/>
            Co-founder spezialisiert in Usability. Liebt Cookies. <br/>
            Lieblingsfarbe: #22A892
        </div>
        <div class='teambox-item'>
          <img src={'../../Dominik.jpeg'} alt="Profile Pciture"></img>
            <h2>Dominik Breck</h2>
            Web Developer
            <hr
                style={{
                    backgroundColor: 'white'
                }}/>
            Co-founder spezialisiert in Probs bauen mit einer speziellen Vorliebe für Heißdrahtschneider. <br/>
            Lieblingsschriftart: Comic Sans
          </div>
        
        <div class='teambox-item'>
         <img src={'../../Martin.jpeg'} alt="Profile Pciture"></img>
            <h2>Martin Schuster</h2>
            Web Developer
            <hr
                style={{
                    backgroundColor: 'white'
                }}/>
            Co-founder und Mitarbeiter des Monats - jeden Monat. <br/>
            Lieblingsdrink: Tripple-M
        </div>
      </div>


    </Layout>
  )
  
  export default AboutPage