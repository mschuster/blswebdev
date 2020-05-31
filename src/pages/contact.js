import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <h1>Kontaktformular</h1>
    <p>
      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <p class="hidden" style={{display:'none'}}>
          <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
        </p>
        <input name="name" placeholder="Name" type="text" />
        <br />
        <br />
        <input name="email" placeholder="Ihre E-mail Adresse" type="email" />
        <br />
        <br />
        <textarea name="message" />
        <br />
        <br />
        <button>Senden</button>
      </form>
    </p>
  </Layout>
)

export default ContactPage
