const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const PageTemplate = path.resolve(`./src/templates/page-template.tsx`)

  return new Promise(async resolve => {
    const result = await graphql(`
      {
        allAirtable {
          edges {
            node {
              table
              data {
                Path
              }
            }
          }
        }
      }
    `)

    result.data.allAirtable.edges.forEach(
      ({
        node: {
          data: { Path },
        },
      }) => {
        createPage({
          path: Path,
          component: PageTemplate,
          context: {
            Path,
          },
        })
      }
    )

    resolve()
  })
}
