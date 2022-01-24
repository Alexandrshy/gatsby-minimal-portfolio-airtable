import React from "react"
import { graphql } from "gatsby"
import SEO from "react-seo-component"

import { Title } from "../components/title"
import { Chapter } from "../components/chapter"
import { Annotation } from "../components/annotation"

import type { AllMarkdownRemarkType, BlogNodesType } from "../types/tables"

import { useSiteMetadata } from "../hooks/useSiteMetadata"

import * as s from "./index.module.css"
import { AnnotationType } from "../types/tables"

export default ({
  data: { allMarkdownRemark, allAirtable },
  pageContext: { tag },
}: {
  data: {
    allMarkdownRemark: { edges: AllMarkdownRemarkType[]; totalCount: number }
    allAirtable: { nodes: BlogNodesType[]; totalCount: number }
  }
  pageContext: { tag: string }
}) => {
  const { titleTemplate, siteLanguage, siteLocale, twitterUsername } =
    useSiteMetadata()

  console.log("1. allMarkdownRemarkallMarkdownRemark", allMarkdownRemark, tag)
  console.log("2. allAirtable", allAirtable, tag)

  const totalCount = allMarkdownRemark.totalCount + allAirtable.totalCount
  const listNotes = allAirtable.nodes.map(
    ({
      recordId: id,
      table,
      data: { slug, title, date, short_description, description },
    }): AnnotationType => ({
      id,
      timeToRead: description.childMarkdownRemark.timeToRead,
      title,
      date,
      description: short_description,
      path: `/${table}/${slug}`,
    })
  )
  const listLongReads = allMarkdownRemark.edges.map(
    ({
      node: {
        id,
        timeToRead,
        frontmatter: { title, date, description },
        fields: { slug },
      },
    }): AnnotationType => ({
      id,
      timeToRead,
      title,
      date,
      description,
      path: `/longread${slug}`,
    })
  )
  const list = [...listLongReads, ...listNotes]

  return (
    <article>
      <SEO
        title={`All posts by ${tag} tag`}
        titleSeparator="·"
        titleTemplate={titleTemplate}
        description={`All posts by ${tag} tag`}
        pathname={`/tag/${tag}`}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={twitterUsername}
        article
      />
      <div className={s.wrapper}>
        <Chapter>
          <Title>
            {tag} ({totalCount})
          </Title>
          <Annotation list={list} />
        </Chapter>
      </div>
    </article>
  )
}

export const query = graphql`
  query GetTag($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          id
          html
          timeToRead
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            description
          }
          fields {
            slug
          }
        }
      }
    }
    allAirtable(
      limit: 2000
      sort: { fields: [data___tags], order: DESC }
      filter: { table: { eq: "notes" }, data: { tags: { in: [$tag] } } }
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
      totalCount
    }
  }
`
