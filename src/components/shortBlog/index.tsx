import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import { Title } from "../title"
import { LongReads } from "../longreads"

import type { AllMarkdownRemarkBlogType } from "../../types/tables"

export const ShortBlog: React.FC = () => {
  const data = useStaticQuery<AllMarkdownRemarkBlogType>(graphql`
    {
      allMarkdownRemark(filter: { fields: { slug: { ne: null } } }, limit: 3) {
        edges {
          node {
            id
            html
            timeToRead
            frontmatter {
              title
              date(formatString: "DD-MM-YYYY")
              description
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <Title subtitle="Longreads">Latest publications</Title>
      <LongReads list={data.allMarkdownRemark.edges} />
    </>
  )
}
