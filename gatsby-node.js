const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark" && node.fileAbsolutePath) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: "slug",
      node,
      value,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const Publication = path.resolve(`./src/templates/publication.tsx`)
  const LongRead = path.resolve(`./src/templates/longread.tsx`)

  return new Promise(async resolve => {
    const airtableResult = await graphql(`
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

    const result = await graphql(`
      {
        allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/blog/" } }) {
          nodes {
            id
            fields {
              slug
            }
          }
        }
      }
    `)

    console.log(
      "result.data.allMarkdownRemark.nodes231",
      result.data.allMarkdownRemark.nodes[0]
    )

    result.data.allMarkdownRemark.nodes.forEach(({ id, fields: { slug } }) => {
      createPage({
        path: `${slug}`,
        component: LongRead,
        context: {
          id,
        },
      })
    })

    airtableResult.data.allAirtable.edges.forEach(
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
