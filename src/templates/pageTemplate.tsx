import React from "react"
import { graphql } from "gatsby"

export default ({ data }: { data: any }) => (
  <div>
    <h3>{data.airtable.data.title}</h3>
  </div>
)

export const query = graphql`
  query GetPage($slug: String!) {
    airtable(data: { slug: { eq: $slug } }) {
      data {
        title
      }
    }
  }
`
