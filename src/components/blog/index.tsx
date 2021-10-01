import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import { Title } from "../title"
import { Publications } from "../publications"

import type { AirtableBlogType } from "../../types/tables"

export const Blog: React.FC = () => {
  const {
    allAirtable: { nodes },
  } = useStaticQuery<AirtableBlogType>(graphql`
    {
      allAirtable(
        filter: { table: { eq: "blog" } }
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
          }
        }
      }
    }
  `)

  return (
    <>
      <Title subtitle="Publications">Recent articles</Title>
      {nodes.length ? (
        <Publications list={nodes} path={``} />
      ) : (
        <p>
          Oops... No posts have been written yet, come back later when I get
          some inspiration
        </p>
      )}
    </>
  )
}
