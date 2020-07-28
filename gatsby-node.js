const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allContentfulCocktail {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  result.data.allContentfulCocktail.edges.forEach(({ node }) => {
    node.slug &&
      createPage({
        path: node.slug,
        component: path.resolve(`./src/templates/cocktailTemplate.js`),
        context: {
          slug: node.slug,
        },
      })
  })
}
