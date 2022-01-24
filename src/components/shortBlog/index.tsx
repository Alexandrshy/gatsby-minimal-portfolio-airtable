import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import { Title } from "../title"
import { Annotation } from "../annotation"

import type {
  AllMarkdownRemarkBlogType,
  AnnotationType,
} from "../../types/tables"

export const ShortBlog: React.FC = () => {
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery<AllMarkdownRemarkBlogType>(graphql`
    {
      allMarkdownRemark(filter: { fields: { slug: { ne: null } } }, limit: 3) {
        edges {
          node {
            id
            html
            timeToRead
            frontmatter {
              title
              date(formatString: "MMMM DD, YYYY")
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

  const list = edges.map(
    ({
      node: {
        id,
        timeToRead,
        frontmatter: { title, date, description },
        fields: { slug },
      },
    }): AnnotationType => ({
      id,
      timeToRead,
      title,
      date,
      description,
      path: `/longread${slug}`,
    })
  )

  return edges?.length ? (
    <>
      <Title subtitle="Longreads">Latest publications</Title>
      <Annotation list={list} />
    </>
  ) : null
}
