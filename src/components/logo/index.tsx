import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import * as s from "./style.module.css"

export const Logo: React.FC = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      file {
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
        image={data.file.childImageSharp.gatsbyImageData}
        alt="Logo"
      />
    </Link>
  )
}
