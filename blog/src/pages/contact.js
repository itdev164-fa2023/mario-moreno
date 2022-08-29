import React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

function about({ data }) {
  const { name, company, address } = data.site.siteMetadata.contact

  return (
    <Layout>
      <Seo title="Home" />
      <h1>Contact Us</h1>
      <p>Please send all creative inquiries to: </p>
      <div>{company}</div>
      <div>{`C/O ${name}`}</div>
      <div>{address}</div>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <StaticImage
          src="../images/example.png"
          width={300}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="Gatsby logo"
          style={{ marginBottom: `1.45rem` }}
        />
      </div>
      <Link to="/">Home</Link>
    </Layout>
  )
}

export default about

export const query = graphql`
  query {
    site {
      siteMetadata {
        contact {
          name
          company
          address
        }
      }
    }
  }
`
