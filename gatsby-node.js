const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const Publication = path.resolve(`./src/templates/publication.tsx`)

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
          table,
          data: { slug },
        },
      }) => {
        createPage({
          path: `${table}/${slug}`,
          component: Publication,
          context: {
            slug,
          },
        })
      }
    )

    resolve()
  })
}
