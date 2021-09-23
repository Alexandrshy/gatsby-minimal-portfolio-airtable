import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import { Title } from "../title"
import { preparationReadingTime } from "../../utils/preparationReadingTime"

import type { AirtableBlog } from "../../types/tables"

import * as s from "./style.module.css"

export const ShortBlog: React.FC = () => {
  const data = useStaticQuery<AirtableBlog>(graphql`
    {
      allAirtable(
        filter: { table: { eq: "blog" } }
        limit: 3
        sort: { order: DESC, fields: data___date }
      ) {
        nodes {
          recordId
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
      <ul className={s.list}>
        {data.allAirtable.nodes.map(({ recordId, data }) => (
          <li key={recordId} className={s.item}>
            <h5 className={s.title}>
              <Link to={data.slug}>{data.title}</Link>
            </h5>
            <div className={s.additional}>
              <span>{data.date}</span>
              <span>•</span>
              <span>
                {preparationReadingTime(
                  data.description.childMarkdownRemark.timeToRead
                )}
              </span>
            </div>
            <p>{data.short_description}</p>
          </li>
        ))}
      </ul>
    </>
  )
}
