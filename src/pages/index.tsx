import React from "react"
import SEO from "react-seo-component"

import { Description } from "../components/description"
import { Chapter } from "../components/chapter"
import { ShortBlog } from "../components/shortBlog"
import { ShortProjects } from "../components/shortProjects"

import { useSiteMetadata } from "../hooks/useSiteMetadata"

import * as s from "./index.module.css"

export default () => {
  const {
    title,
    titleTemplate,
    description,
    siteLanguage,
    siteLocale,
    twitterUsername,
  } = useSiteMetadata()

  return (
    <>
      <SEO
        title={title}
        titleSeparator="|"
        titleTemplate={titleTemplate}
        description={description}
        pathname="/"
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={twitterUsername}
        article
      />
      <div className={s.wrapper}>
        <Chapter>
          <Description />
        </Chapter>
        <Chapter>
          <ShortBlog />
        </Chapter>
        <Chapter>
          <ShortProjects />
        </Chapter>
      </div>
    </>
  )
}
