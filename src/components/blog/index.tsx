import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import { Title } from "../title"
import { Annotation } from "../annotation"

import type { AirtableBlogType, AnnotationType } from "../../types/tables"

export const Blog: React.FC = () => {
  const {
    allAirtable: { nodes },
  } = useStaticQuery<AirtableBlogType>(graphql`
    {
      allAirtable(
        filter: { table: { eq: "notes" } }
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
                html
                timeToRead
              }
            }
            status
            slug
            date(formatString: "MMMM DD, YYYY")
            tags
          }
        }
      }
    }
  `)

  const list = nodes.map(
    ({
      recordId: id,
      data: { slug, title, date, short_description, description, tags },
    }): AnnotationType => ({
      id,
      timeToRead: description.childMarkdownRemark.timeToRead,
      title,
      date,
      description: short_description,
      path: slug,
      tags,
    })
  )

  return (
    <>
      <Title subtitle="Notes">Recent notes from social media</Title>
      {nodes.length ? (
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
