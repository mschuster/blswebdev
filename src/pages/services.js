import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ServicesPage = () => (
  <Layout>
    <SEO title="Services" />
    <h1>Dienstleistungen</h1>

    <div
      className="services"
      style={{
        background: "white",
        display: "inline-block",
        border: "dotted 3px black",
      }}
    >
      <img
        src={"../../webdesdev.png"}
        alt="pic"
        style={{ width: "20%", float: "left" }}
      />
      <div style={{ width: "70%", float: "right", marginTop:'1rem', marginRight: "1rem" }}>
        <h3>Web Design & Programmierung</h3>

        <p>
          Wir gestalten für Sie ein Individuelles Webdesign und setzen dieses
          für Sie um. Die Umsetzung kann dabei, je nach Bedarf, eine einfache
          Informationsseite bis hin zum Vollständigen Content-Management-System
          sein.
        </p>
      </div>
    </div>

    <div
      className="services"
      style={{
        background: "white",
        display: "inline-block",
        border: "dotted 3px black",
      }}
    >
      <img
        src={"../../seo.png"}
        alt="pic"
        style={{ width: "20%", float: "right" }}
      />
      <div style={{ width: "70%", float: "left", marginTop:'1rem', marginLeft: "1rem" }}>
        <h3>Suchmaschienen Optiemierung</h3>

        <p>
          Als Zusatzleistung zur Webentwicklung, bieten wir Ihnen an Ihre
          Webseite für Suchmachinen zu Optimieren. Damit Sie von Ihren
          potenziellen Kunden möglichst früh gefunden werden.
        </p>
      </div>
    </div>

    <div
      className="services"
      style={{
        background: "white",
        display: "inline-block",
        border: "dotted 3px black",
      }}
    >
      <img
        src={"../../appdev.png"}
        alt="pic"
        style={{ width: "20%", float: "left" }}
      />
      <div style={{ width: "70%", float: "right", marginTop:'1rem', marginRight: "1rem" }}>
        <h3>App Entwicklung</h3>

        <p>
          Sie benötigen eine Individuelle App für Ihr Unternehmen, diese können
          wir Ebenfalls für Sie Entwickeln.
        </p>
      </div>
    </div>

    <div
      className="services"
      style={{
        background: "white",
        display: "inline-block",
        border: "dotted 3px black",
      }}
    >
      <img
        src={"../../cd.png"}
        alt="pic"
        style={{ width: "20%", float: "right" }}
      />
      <div style={{ width: "70%", float: "left",marginTop:'1rem', marginLeft: "1rem" }}>
        <h3>Corporate Design Entwicklung</h3>

        <p>
          Ihr Unternehmen braucht ein neues Einheitliches Design, gerne Helfen
          wir Ihnen in einer engen Zusammenarbeit dabei Ihr neues Image zu
          Gestalten.
        </p>
      </div>
    </div>

    <div
      className="services"
      style={{
        background: "white",
        display: "inline-block",
        border: "dotted 3px black",
      }}
    >
      <img
        src={"../../support.png"}
        alt="pic"
        style={{ width: "20%", float: "left" }}
      />
      <div style={{ width: "70%", float: "right", marginTop:'1rem', marginRight: "1rem" }}>
        <h3>Support</h3>

        <p>
          Wenn Sie es wünschen bieten wir Ihnen, nach Erflogreichem Auftragsabschluss zusätzlichen Support an.
        </p>
      </div>
    </div>
  </Layout>
)

export default ServicesPage
