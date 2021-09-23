import { IGatsbyImageData } from "gatsby-plugin-image"

export type AirtableBlog = {
  allAirtable: {
    nodes: [
      {
        recordId: string
        data: {
          short_description: string
          title: string
          description: {
            childMarkdownRemark: {
              html: string
              timeToRead: number
            }
          }
          status: "Published" | "Draft"
          slug: string
          date: string
        }
      }
    ]
  }
}

export type AirtableProjects = {
  allAirtable: {
    nodes: [
      {
        recordId: string
        data: {
          short_description: string
          title: string
          description: {
            childMarkdownRemark: {
              html: string
              timeToRead: number
            }
          }
          cover: {
            localFiles: [
              { childImageSharp: { gatsbyImageData: IGatsbyImageData } }
            ]
          }
          status: "Published" | "Draft"
          slug: string
          date: string
        }
      }
    ]
  }
}
