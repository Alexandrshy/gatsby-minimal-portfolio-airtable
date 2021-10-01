import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import type { ProjectsNodesType } from "../../types/tables"

import * as s from "./style.module.css"

type PropsType = {
  list: ProjectsNodesType[]
  path: string
}

export const ProjectList: React.FC<PropsType> = ({ list, path }) => (
  <ul className={s.list}>
    {list.map(({ recordId, data }) => (
      <li key={recordId} className={s.item}>
        <Link to={`${path}${data.slug}`} className={s.link}>
          <GatsbyImage
            image={data.cover.localFiles[0].childImageSharp.gatsbyImageData}
            alt={data.title}
            className={s.img}
          />
          <h5 className={s.title}>{data.title}</h5>
        </Link>
      </li>
    ))}
  </ul>
)
