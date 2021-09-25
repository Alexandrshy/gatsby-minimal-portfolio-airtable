import React from "react"
import { Link } from "gatsby"

import { preparationReadingTime } from "../../utils/preparationReadingTime"

import type { BlogNodesType } from "../../types/tables"

import * as s from "./style.module.css"

type PropsType = {
  list: BlogNodesType[]
  path: string
}

export const Publications: React.FC<PropsType> = ({ list, path }) => (
  <ul className={s.list}>
    {list.map(({ recordId, data }) => (
      <li key={recordId} className={s.item}>
        <h5 className={s.title}>
          <Link to={`${path}${data.slug}`}>{data.title}</Link>
        </h5>
        <div className={s.additional}>
          <span>{data.date}</span>
          <span>•</span>
          <span>
            {preparationReadingTime(
              data.description.childMarkdownRemark.timeToRead
            )}
          </span>
        </div>
        <p>{data.short_description}</p>
      </li>
    ))}
  </ul>
)
