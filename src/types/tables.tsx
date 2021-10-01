import { IGatsbyImageData } from "gatsby-plugin-image"

export type BlogNodesType = {
  recordId: string
  table: string
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

export type ProjectsNodesType = {
  recordId: string
  table: string
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
      localFiles: [{ childImageSharp: { gatsbyImageData: IGatsbyImageData } }]
    }
    status: "Published" | "Draft"
    slug: string
    link: string
    date: string
  }
}

export type AirtableBlogType = {
  allAirtable: {
    nodes: BlogNodesType[]
  }
}

export type AirtableProjectsType = {
  allAirtable: {
    nodes: ProjectsNodesType[]
  }
}
