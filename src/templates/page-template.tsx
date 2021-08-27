import React from "react"
import { graphql } from "gatsby"

export default ({ data }: { data: any }) => (
  <div>
    <h3>{data.airtable.data.Title}</h3>
  </div>
)

export const query = graphql`
  query GetPage($Path: String!) {
    airtable(table: { eq: "blog" }, data: { Path: { eq: $Path } }) {
      data {
        Title
      }
    }
  }
`
