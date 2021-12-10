import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import { Title } from "../title"
import { Notes } from "../notes"

import type { AirtableBlogType } from "../../types/tables"

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
            date(formatString: "DD-MM-YYYY")
          }
        }
      }
    }
  `)

  return (
    <>
      <Title subtitle="Notes">Recent notes from social media</Title>
      {nodes.length ? (
        <Notes list={nodes} path="" />
      ) : (
        <p>
          Oops... No posts have been written yet, come back later when I get
          some inspiration
        </p>
      )}
    </>
  )
}
