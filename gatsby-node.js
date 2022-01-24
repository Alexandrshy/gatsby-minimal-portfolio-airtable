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
  const Tag = path.resolve(`./src/templates/tag.tsx`)

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

    const tagsResult = await graphql(`
      {
        allMarkdownRemark(limit: 2000) {
          group(field: frontmatter___tags) {
            fieldValue
            totalCount
          }
        }
        allAirtable(limit: 2000) {
          group(field: data___tags) {
            fieldValue
          }
        }
      }
    `)

    tagsResult.data.allMarkdownRemark.group
      .concat(tagsResult.data.allAirtable.group)
      .forEach(({ fieldValue }) => {
        createPage({
          path: `/tag/${fieldValue}`,
          component: Tag,
          context: {
            tag: fieldValue,
          },
        })
      })

    result.data.allMarkdownRemark.nodes.forEach(({ id, fields: { slug } }) => {
      createPage({
        path: `longread${slug}`,
        component: LongRead,
        context: {
          id,
        },
      })
    })

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
