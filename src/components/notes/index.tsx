import React from "react"
import { Link } from "gatsby"

import { Additional } from "../additional"

import type { BlogNodesType } from "../../types/tables"

import * as s from "./style.module.css"

type PropsType = {
  list: BlogNodesType[]
  path: string
}

export const Notes: React.FC<PropsType> = ({ list, path }) => (
  <ul className={s.list}>
    {list.map(({ recordId, data }) => (
      <li key={recordId} className={s.item}>
        <h5 className={s.title}>
          <Link to={`${path}${data.slug}`}>{data.title}</Link>
        </h5>
        <Additional
          date={data.date}
          timeToRead={data.description.childMarkdownRemark.timeToRead}
        />
        <p>{data.short_description}</p>
      </li>
    ))}
  </ul>
)
