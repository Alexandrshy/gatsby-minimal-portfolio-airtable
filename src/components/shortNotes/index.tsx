import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import { Title } from "../title"
import { Notes } from "../notes"

import type { AirtableBlogType } from "../../types/tables"

export const ShortNotes: React.FC = () => {
  const data = useStaticQuery<AirtableBlogType>(graphql`
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
                html
                timeToRead
              }
            }
            status
            slug
            date(formatString: "DD-MM-YYYY")
          }
        }
      }
    }
  `)

  return (
    <>
      <Title subtitle="Short notes">Some recent notes</Title>
      <Notes
        list={data.allAirtable.nodes}
        path={`${data.allAirtable.nodes[0].table}/`}
      />
    </>
  )
}
