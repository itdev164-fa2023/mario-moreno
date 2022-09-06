import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />

    <ul className={styles.list}>
      {data.allContentfulBlogPost.edges.map(edge => (
        <li key={edge.node.id} className={styles.listItem}>
          <Link to={edge.node.slug}>{edge.node.title}</Link>
        </li>
      ))}
    </ul>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage

export const query = graphql`
  {
    allContentfulBlogPost {
      edges {
        node {
          id
          title
          slug
        }
      }
    }
  }
`
