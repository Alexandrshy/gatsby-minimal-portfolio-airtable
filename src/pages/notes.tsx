import React from "react"
import SEO from "react-seo-component"

import { Chapter } from "../components/chapter"
import { Blog } from "../components/blog"

import { useSiteMetadata } from "../hooks/useSiteMetadata"

import * as s from "./index.module.css"

export default () => {
  const { title, siteLanguage, siteLocale, twitterUsername } = useSiteMetadata()

  return (
    <>
      <SEO
        title={title}
        titleSeparator="·"
        titleTemplate="Notes"
        description="Storage of all the notes that I left for myself in one of the social networks"
        pathname="/notes"
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={twitterUsername}
        article
      />
      <div className={s.wrapper}>
        <Chapter>
          <Blog />
        </Chapter>
      </div>
    </>
  )
}
