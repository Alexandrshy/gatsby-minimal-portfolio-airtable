require("dotenv").config()

module.exports = {
  plugins: [
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [`gatsby-remark-images-anywhere`],
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
