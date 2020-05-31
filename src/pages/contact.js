import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <h1>Kontaktformular</h1>
    <p>
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Fusce vel dui. Praesent ac sem eget est egestas volutpat.

Vivamus euismod mauris. Fusce risus nisl, viverra et, tempor et, pretium in, sapien. Phasellus blandit leo ut odio.

Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Fusce commodo aliquam arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum.

Pellentesque commodo eros a enim. Nunc egestas, augue at pellentesque laoreet, felis eros vehicula leo, at malesuada velit leo quis pede. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris.

Integer tincidunt. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus.
      <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
        <input name="name" placeholder="Name" type="text"/><br/><br/>
        <input name="email" placeholder="Ihre E-mail Adresse" type="email"/><br/><br/>
        <textarea name="message"/><br/><br/>
        <button>Senden</button>
      </form>
    </p>
  </Layout>
)

export default ContactPage