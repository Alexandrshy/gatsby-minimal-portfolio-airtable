import React from "react"
import { graphql } from "gatsby"
import SEO from "react-seo-component"

import { Title } from "../components/title"
import { Additional } from "../components/additional"
import { Typography } from "../components/typography"

import type { MarkdownRemarkType } from "../types/tables"

import { useSiteMetadata } from "../hooks/useSiteMetadata"

import * as s from "./index.module.css"

export default ({
  data: {
    markdownRemark: { html, timeToRead, frontmatter, fields },
  },
}: {
  data: {
    markdownRemark: MarkdownRemarkType
  }
}) => {
  const { titleTemplate, siteLanguage, siteLocale, twitterUsername } =
    useSiteMetadata()

  return (
    <article>
      <SEO
        title={frontmatter.title}
        titleSeparator="·"
        titleTemplate={titleTemplate}
        description={frontmatter.date}
        pathname={fields.slug}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={twitterUsername}
        article
      />
      <div className={s.wrapper}>
        <header className={s.header}>
          <Title isDecreased>{frontmatter.title}</Title>
          <Additional
            date={frontmatter.date}
            timeToRead={timeToRead}
            slug={`longread${fields.slug}`}
          />
        </header>
        <Typography>
          <div
            dangerouslySetInnerHTML={{
              __html: html,
            }}
          />
        </Typography>
      </div>
    </article>
  )
}

export const query = graphql`
  query GetLongRead($id: String!) {
    markdownRemark(id: { eq: $id }) {
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
`
