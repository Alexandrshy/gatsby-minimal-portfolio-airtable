import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import { Title } from "../title"
import { ProjectList } from "../projectList"

import type { AirtableProjectsType } from "../../types/tables"

export const Projects: React.FC = () => {
  const {
    allAirtable: { nodes },
  } = useStaticQuery<AirtableProjectsType>(graphql`
    {
      allAirtable(
        filter: { table: { eq: "projects" } }
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
      <Title subtitle="Projects">The last projects I worked on</Title>
      {nodes.length ? (
        <ProjectList list={nodes} />
      ) : (
        <p>Oops... Projects are still in progress, I'll post this very soon</p>
      )}
    </>
  )
}
