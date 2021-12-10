require("dotenv").config()

const siteMetadata = {
  title: process.env.SITE_METADATA_TITLE,
  titleTemplate: process.env.SITE_METADATA_TEMPLATE,
  description: process.env.SITE_METADATA_DESCRIPTION,
  image: process.env.SITE_METADATA_IMAGE,
  siteUrl: process.env.SITE_METADATA_SITE_URL,
  siteLanguage: process.env.SITE_METADATA_SITE_LANG,
  siteLocale: process.env.SITE_METADATA_SITE_LOCALE,
  twitterUsername: process.env.SITE_METADATA_TWITTER_USERNAME,
  telegramUsername: process.env.SITE_METADATA_TELEGRAM_USERNAME,
}

module.exports = {
  siteMetadata,
  plugins: [
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: ["gatsby-remark-images-anywhere"],
      },
    },
    {
      resolve: "gatsby-source-airtable",
      options: {
        apiKey: process.env.AIRTABLE_KEY,
        tables: [
          {
            baseId: process.env.TABLES_ID,
            tableName: process.env.TABLE_BLOG_NAME,
            mapping: { description: "text/markdown", cover: "fileNode" },
            separateMapType: true,
          },
          {
            baseId: process.env.TABLES_ID,
            tableName: process.env.TABLE_PROJECTS_NAME,
            mapping: { description: "text/markdown", cover: "fileNode" },
            separateMapType: true,
          },
        ],
      },
    },
    "gatsby-plugin-image",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/static/img/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/blog`,
        name: "blog",
      },
    },
    {
      resolve: "gatsby-plugin-feed",
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                const siteUrl = site.siteMetadata.siteUrl
                // TODO: переписать на собственный
                const postText = `
                <div style="margin-top=55px; font-style: italic;">(This is an article posted to my blog at overreacted.io. You can read it online by <a href="${
                  siteUrl + "/longread" + edge.node.fields.slug
                }">clicking here</a>.)</div>
              `

                let html = edge.node.html
                html = html
                  .replace(/href="\//g, `href="${siteUrl}/`)
                  .replace(/src="\//g, `src="${siteUrl}/`)
                  .replace(/"\/static\//g, `"${siteUrl}/static/`)
                  .replace(/,\s*\/static\//g, `,${siteUrl}/static/`)

                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.frontmatter.description,
                  date: edge.node.frontmatter.date,
                  url:
                    site.siteMetadata.siteUrl +
                    "/longread" +
                    edge.node.fields.slug,
                  guid:
                    site.siteMetadata.siteUrl +
                    "/longread" +
                    edge.node.fields.slug,
                  custom_elements: [{ "content:encoded": html + postText }],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  limit: 1000,
                  sort: { order: DESC, fields: [frontmatter___date] }
                  filter: { fields: { slug: { ne: null } } }
                ) {
                  edges {
                    node {
                      excerpt(pruneLength: 250)
                      html
                      fields { 
                        slug   
                      }
                      frontmatter {
                        title
                        date
                        description
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: process.env.SITE_METADATA_RSS_DESCRIPTION,
          },
        ],
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: ["Inter:300,400,700,900"],
        display: "swap",
      },
    },
  ],
}
