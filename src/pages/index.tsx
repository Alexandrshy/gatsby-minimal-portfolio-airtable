import React from "react"
import { graphql } from "gatsby"

import { Description } from "../components/description"

import * as s from "./index.module.css"

export const query = graphql`
  {
    allAirtable(filter: { table: { eq: "blog" } }) {
      nodes {
        recordId
        data {
          Short_description
          Title
          Description
          Status
        }
      }
    }
  }
`

export default ({ data }: { data: any }) => (
  <div className={s.wrapper}>
    <Description />
    <ul>
      {data.allAirtable.nodes.map((node: any) => (
        <li key={node.recordId}>{node.data.Short_description}</li>
      ))}
    </ul>
  </div>
)
