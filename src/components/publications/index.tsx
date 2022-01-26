import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import { Title } from "../title"
import { Annotation } from "../annotation"

import type {
  AllMarkdownRemarkBlogType,
  AnnotationType,
} from "../../types/tables"

export const Publications: React.FC = () => {
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery<AllMarkdownRemarkBlogType>(graphql`
    {
      allMarkdownRemark(filter: { fields: { slug: { ne: null } } }) {
        edges {
          node {
            id
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

  return (
    <>
      <Title subtitle="Longreads">Latest publications</Title>
      {edges.length ? (
        <Annotation list={list} />
      ) : (
        <p>
          Oops... No posts have been written yet, come back later when I get
          some inspiration
        </p>
      )}
    </>
  )
}
