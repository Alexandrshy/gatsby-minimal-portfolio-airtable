import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

import type { ProjectsNodesType } from "../../types/tables"

import * as s from "./style.module.css"

type PropsType = {
  list: ProjectsNodesType[]
}

export const ProjectList: React.FC<PropsType> = ({ list }) => (
  <ul className={s.list}>
    {list.map(({ recordId, data }) => (
      <li key={recordId} className={s.item}>
        <a href={data.link} className={s.link} target="_blank" rel="noopener">
          <GatsbyImage
            image={data.cover.localFiles[0].childImageSharp.gatsbyImageData}
            alt={data.title}
            className={s.img}
          />
          <h5 className={s.title}>{data.title}</h5>
        </a>
      </li>
    ))}
  </ul>
)
