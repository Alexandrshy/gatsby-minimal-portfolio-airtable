import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import { Title } from "../title"
import { ProjectList } from "../projectList"

import type { AirtableProjectsType } from "../../types/tables"

export const ShortProjects: React.FC = () => {
  const data = useStaticQuery<AirtableProjectsType>(graphql`
    {
      allAirtable(
        filter: { table: { eq: "projects" } }
        limit: 2
        sort: { order: DESC, fields: data___date }
      ) {
        nodes {
          recordId
          table
          data {
            title
            link
            cover {
              localFiles {
                childImageSharp {
                  gatsbyImageData(
                    width: 746
                    height: 932
                    formats: WEBP
                    placeholder: BLURRED
                  )
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <Title subtitle="projects">My Open Source projects</Title>
      <ProjectList list={data.allAirtable.nodes} />
    </>
  )
}
