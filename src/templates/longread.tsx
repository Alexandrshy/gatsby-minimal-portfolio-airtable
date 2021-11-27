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
    markdownRemark: { html },
  },
}) => {
  console.log("100. html", html)

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: html,
      }}
    />
  )
}

export const query = graphql`
  query GetLongRead($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
    }
  }
`
