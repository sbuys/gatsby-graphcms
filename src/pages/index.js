import * as React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
// import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'
import Seo from '../components/seo'

const IndexPage = ({ data }) => {
  const products = data?.allGraphCmsProduct?.nodes || []

  return (
    <Layout>
      <ul>
        {products.map(product => {
          return (
            <li key={product.id}>
              <Link to={`products/${product.slug}`}>{product.name}</Link>
            </li>
          )
        })}
      </ul>

      <Seo title="Home" />
    </Layout>
  )
}

export const query = graphql`
  query {
    allGraphCmsProduct {
      nodes {
        id
        slug
        name
      }
    }
  }
`

export default IndexPage
