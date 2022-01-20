import React from "react"
import { graphql } from "gatsby"
import SEO from "react-seo-component"

import { Title } from "../components/title"
import { Additional } from "../components/additional"

import type { BlogDataType } from "../types/tables"

import { useSiteMetadata } from "../hooks/useSiteMetadata"

import * as s from "./index.module.css"

export default ({
  data: {
    airtable: { data },
  },
}: {
  data: { airtable: { data: BlogDataType } }
}) => {
  const { titleTemplate, siteLanguage, siteLocale, twitterUsername } =
    useSiteMetadata()

  return (
    <article>
      <SEO
        title={data.title}
        titleSeparator="|"
        titleTemplate={titleTemplate}
        description={data.short_description}
        pathname={`/${data.slug}`}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={twitterUsername}
        article
      />
      <div className={s.wrapper}>
        <header className={s.header}>
          <Title isDecreased>{data.title}</Title>
          <Additional date={data.date} slug={`notes/${data.slug}`} />
        </header>
        <div
          dangerouslySetInnerHTML={{
            __html: data.description.childMarkdownRemark.html,
          }}
        />
      </div>
    </article>
  )
}

export const query = graphql`
  query GetPublication($slug: String!) {
    airtable(data: { slug: { eq: $slug } }) {
      data {
        short_description
        title
        description {
          childMarkdownRemark {
            html
          }
        }
        status
        slug
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
