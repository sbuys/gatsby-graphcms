exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query {
      allGraphCmsProduct {
        nodes {
          id
          slug
        }
      }
    }
  `)

  data?.allGraphCmsProduct?.nodes.forEach(node => {
    const slug = node.slug
    actions.createPage({
      path: `products/${slug}`,
      component: require.resolve(`./src/templates/product.tsx`),
      context: { id: node.id },
    })
  })
}
