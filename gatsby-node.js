const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const BlogPageTemplate = path.resolve(`./src/templates/blogPageTemplate.tsx`)

  return new Promise(async resolve => {
    const result = await graphql(`
      {
        allAirtable {
          edges {
            node {
              table
              data {
                slug
              }
            }
          }
        }
      }
    `)

    result.data.allAirtable.edges.forEach(
      ({
        node: {
          data: { slug },
        },
      }) => {
        createPage({
          path: slug,
          component: BlogPageTemplate,
          context: {
            slug,
          },
        })
      }
    )

    resolve()
  })
}
