import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage } from 'gatsby-plugin-image'

interface ProductProps {
  data: any
}

export const Product = ({ data }: ProductProps) => {
  const product = data.graphCmsProduct

  const imageData = product?.image?.localFile?.childImageSharp?.gatsbyImageData

  return (
    <Layout>
      <div>
        <h1>{product.name}</h1>
        <MDXRenderer>{product.content.markdownNode.childMdx.body}</MDXRenderer>
        <GatsbyImage image={imageData} alt={product.name} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ProductQuery($id: String!) {
    graphCmsProduct(id: { eq: $id }) {
      id
      slug
      name
      image {
        localFile {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, quality: 90)
          }
        }
      }
      content {
        markdownNode {
          childMdx {
            id
            body
          }
        }
      }
    }
  }
`

export default Product
