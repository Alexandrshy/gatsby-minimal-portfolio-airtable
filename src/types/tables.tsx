import { IGatsbyImageData } from "gatsby-plugin-image"

export type BlogDataType = {
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

export type BlogNodesType = {
  recordId: string
  table: string
  data: BlogDataType
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

export type MarkdownRemarkType = {
  id: string
  html: string
  timeToRead: number
  frontmatter: {
    title: string
    date: string
    description: string
  }
  fields: {
    slug: string
  }
}

export type AllMarkdownRemarkType = { node: MarkdownRemarkType }

export type AllMarkdownRemarkBlogType = {
  allMarkdownRemark: {
    edges: AllMarkdownRemarkType[]
  }
}

export type AnnotationType = {
  id: string
  timeToRead: number
  title: string
  date: string
  description: string
  path: string
}
