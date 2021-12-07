import React from "react"
import { Link } from "gatsby"

import { Additional } from "../additional"

import type { AllMarkdownRemarkType } from "../../types/tables"

import * as s from "./style.module.css"

type PropsType = {
  list: AllMarkdownRemarkType[]
}

export const LongReads: React.FC<PropsType> = ({ list }) => (
  <ul className={s.list}>
    {list.map(({ node: { id, frontmatter, timeToRead, fields } }) => (
      <li key={id} className={s.item}>
        <h5 className={s.title}>
          <Link to={`/longread${fields.slug}`}>{frontmatter.title}</Link>
        </h5>
        <Additional date={frontmatter.date} timeToRead={timeToRead} />
        <p>{frontmatter.description}</p>
      </li>
    ))}
  </ul>
)
