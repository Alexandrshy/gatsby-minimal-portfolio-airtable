import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import { Title } from "../title"
import { Publications } from "../publications"

import type { AirtableBlogType } from "../../types/tables"

export const ShortBlog: React.FC = () => {
  const data = useStaticQuery<AirtableBlogType>(graphql`
    {
      allAirtable(
        filter: { table: { eq: "blog" } }
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
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  `)

  return (
    <>
      <Title subtitle="blog">Some recent posts</Title>
      <Publications
        list={data.allAirtable.nodes}
        path={`${data.allAirtable.nodes[0].table}/`}
      />
    </>
  )
}
