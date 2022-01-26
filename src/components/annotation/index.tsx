import React from "react"
import { Link } from "gatsby"

import type { AnnotationType } from "../../types/tables"

import * as s from "./style.module.css"
import { Additional } from "../additional"

type PropsType = {
  list: AnnotationType[]
}

export const Annotation: React.FC<PropsType> = ({ list }) => (
  <ul className={s.list}>
    {list.map(({ id, timeToRead, title, date, description, path, tags }) => (
      <li key={id} className={s.item}>
        <h5 className={s.title}>
          <Link to={path}>{title}</Link>
        </h5>
        <Additional date={date} timeToRead={timeToRead} tags={tags} />
        <p>{description}</p>
      </li>
    ))}
  </ul>
)
