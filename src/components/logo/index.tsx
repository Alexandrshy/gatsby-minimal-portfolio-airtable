import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import * as s from "./style.module.css"

export const Logo: React.FC = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      fileName: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          gatsbyImageData(
            height: 200
            width: 200
            formats: WEBP
            placeholder: BLURRED
          )
        }
      }
    }
  `)

  return (
    <Link className={s.logo} to="/">
      <GatsbyImage
        image={data.fileName.childImageSharp.gatsbyImageData}
        alt="Logo"
      />
    </Link>
  )
}
