import React from "react"
import { graphql } from "gatsby"

import { Description } from "../components/description"
import { Chapter } from "../components/chapter"
import { Title } from "../components/title"

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
    <Chapter>
      <Description />
    </Chapter>
    <Chapter>
      <Title subtitle="blog">Some recent posts</Title>
    </Chapter>
    <Chapter>
      <Title subtitle="projects">The last thing I did with my own hands</Title>
    </Chapter>
    <ul>
      {data.allAirtable.nodes.map((node: any) => (
        <li key={node.recordId}>{node.data.Short_description}</li>
      ))}
    </ul>
  </div>
)
