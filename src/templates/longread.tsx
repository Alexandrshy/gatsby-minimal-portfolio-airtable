import React from "react"
import { graphql } from "gatsby"
import SEO from "react-seo-component"

import { Title } from "../components/title"
import { Additional } from "../components/additional"

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
        titleSeparator="|"
        titleTemplate={titleTemplate}
        description="data.short_description"
        pathname={fields.slug}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={twitterUsername}
        article
      />
      <div className={s.wrapper}>
        <header className={s.header}>
          <Title isDecreased>{frontmatter.title}</Title>
          <Additional date={frontmatter.date} timeToRead={timeToRead} />
        </header>
        <div
          dangerouslySetInnerHTML={{
            __html: html,
          }}
        />
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
        date(formatString: "DD-MM-YYYY")
        description
      }
      fields {
        slug
      }
    }
  }
`
