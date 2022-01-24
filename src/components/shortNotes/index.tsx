import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import { Title } from "../title"
import { Annotation } from "../annotation"

import type { AirtableBlogType, AnnotationType } from "../../types/tables"

export const ShortNotes: React.FC = () => {
  const {
    allAirtable: { nodes },
  } = useStaticQuery<AirtableBlogType>(graphql`
    {
      allAirtable(
        filter: { table: { eq: "notes" } }
        limit: 3
        sort: { order: DESC, fields: data___date }
      ) {
        nodes {
          recordId
          table
          data {
            short_description
            title
            description {
              childMarkdownRemark {
                timeToRead
              }
            }
            slug
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  `)

  const list = nodes.map(
    ({
      recordId: id,
      table,
      data: { slug, title, date, short_description, description },
    }): AnnotationType => ({
      id,
      timeToRead: description.childMarkdownRemark.timeToRead,
      title,
      date,
      description: short_description,
      path: `${table}/${slug}`,
    })
  )

  return nodes?.length ? (
    <>
      <Title subtitle="Short notes">Some recent notes</Title>
      <Annotation list={list} />
    </>
  ) : null
}
