import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import { Title } from "../title"

import type { AirtableProjectsType } from "../../types/tables"

import * as s from "./style.module.css"

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
            slug
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
      <ul className={s.list}>
        {data.allAirtable.nodes.map(({ recordId, data, table }) => (
          <li key={recordId} className={s.item}>
            <Link to={`${table}/${data.slug}`} className={s.link}>
              <GatsbyImage
                image={data.cover.localFiles[0].childImageSharp.gatsbyImageData}
                alt={data.title}
                className={s.img}
              />
              <h5 className={s.title}>{data.title}</h5>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
