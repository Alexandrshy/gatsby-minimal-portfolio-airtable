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
            tableName: process.env.TABLE_NAME,
            mapping: { description: "text/markdown" },
            separateMapType: true,
          },
        ],
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: ["JetBrains Mono:300,400,700"],
        display: "swap",
      },
    },
  ],
}
