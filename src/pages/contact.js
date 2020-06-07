import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <h1 style={{ marginLeft: "20vw", paddingTop: "10vh" }}>Kontaktformular</h1>

      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <p style={{display:'none'}}>
          <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
        </p>
        <input type="hidden" name="form-name" value="contact" />
        <input name="name" placeholder="Name" type="text" />
        <br />
        <br />
        <input name="email" placeholder="Ihre E-mail Adresse" type="email" />
        <br />
        <br />
        <textarea name="message" placeholder="Nachricht"/>
        <br />
        <br />
        <button type='submit'>Senden</button>
      </form>

  </Layout>
)

export default ContactPage
