import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <h1>Kontaktformular</h1>

      <form
        name="contact"
        method="post"
        action="#"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <p style={{display:'none'}}>
          <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
        </p>
        <input name="name" placeholder="Name" id='name' type="text" />
        <br />
        <br />
        <input name="email" placeholder="Ihre E-mail Adresse" id='email' type="email" />
        <br />
        <br />
        <textarea name="message" id='message' />
        <br />
        <br />
        <button type='submit'>Senden</button>
      </form>

  </Layout>
)

export default ContactPage
