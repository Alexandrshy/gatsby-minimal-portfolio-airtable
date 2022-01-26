import React from "react"
import { Link } from "gatsby"

import { preparationReadingTime } from "../../utils/preparationReadingTime"

import * as s from "./style.module.css"

type PropsType = {
  date: string
  slug?: string
  timeToRead?: number
  tags?: string[]
}

export const Additional: React.FC<PropsType> = ({
  date,
  timeToRead,
  slug,
  tags,
}) => (
  <div className={s.box}>
    <div className={s.wrapper}>
      <span>{date}</span>
      {timeToRead && <span>•</span>}
      {timeToRead && <span>{preparationReadingTime(timeToRead)}</span>}
    </div>
    {tags && (
      <ul className={s.list}>
        {tags.map(item => (
          <li key={item} className={s.item}>
            <Link to={`/tag/${item}`}>#{item}</Link>
          </li>
        ))}
      </ul>
    )}
    {slug && <span>•</span>}
    {slug && (
      <a
        href={`https://mobile.twitter.com/search?q=${encodeURIComponent(
          `https://alexandrshy.dev/${slug}`
        )}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Discuss on Twitter
      </a>
    )}
  </div>
)
