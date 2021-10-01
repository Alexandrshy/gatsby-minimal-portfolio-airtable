import React from "react"
import SEO from "react-seo-component"

import { Chapter } from "../components/chapter"
import { Projects } from "../components/projects"

import { useSiteMetadata } from "../hooks/useSiteMetadata"

import * as s from "./index.module.css"

export default () => {
  const { title, siteLanguage, siteLocale, twitterUsername } = useSiteMetadata()

  return (
    <>
      <SEO
        title={title}
        titleSeparator="|"
        titleTemplate="Projects"
        description="Pet projects in which I took part"
        pathname="/projects"
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={twitterUsername}
        article
      />
      <div className={s.wrapper}>
        <Chapter>
          <Projects />
        </Chapter>
      </div>
    </>
  )
}
