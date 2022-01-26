import React from "react"
import SEO from "react-seo-component"

import { Chapter } from "../components/chapter"
import { Publications } from "../components/publications"

import { useSiteMetadata } from "../hooks/useSiteMetadata"

import * as s from "./index.module.css"

export default () => {
  const { title, siteLanguage, siteLocale, twitterUsername } = useSiteMetadata()

  return (
    <>
      <SEO
        title={title}
        titleSeparator="·"
        titleTemplate="Blog"
        description="All articles from new to old on the topic of front-end development and team management"
        pathname="/longreads"
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={twitterUsername}
        article
      />
      <div className={s.wrapper}>
        <Chapter>
          <Publications />
        </Chapter>
      </div>
    </>
  )
}
