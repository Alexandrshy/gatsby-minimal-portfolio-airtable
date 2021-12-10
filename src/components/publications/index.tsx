import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import { Title } from "../title"
import { LongReads } from "../longreads"

import type { AllMarkdownRemarkBlogType } from "../../types/tables"

export const Publications: React.FC = () => {
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery<AllMarkdownRemarkBlogType>(graphql`
    {
      allMarkdownRemark(filter: { fields: { slug: { ne: null } } }) {
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
      {edges.length ? (
        <LongReads list={edges} />
      ) : (
        <p>
          Oops... No posts have been written yet, come back later when I get
          some inspiration
        </p>
      )}
    </>
  )
}
