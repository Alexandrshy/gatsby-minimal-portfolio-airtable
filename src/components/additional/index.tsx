import React from "react"

import { preparationReadingTime } from "../../utils/preparationReadingTime"

import * as s from "./style.module.css"

type PropsType = {
  date: string
  slug?: string
  timeToRead?: number
}

export const Additional: React.FC<PropsType> = ({ date, timeToRead, slug }) => (
  <div className={s.box}>
    <span>{date}</span>
    {timeToRead && <span>•</span>}
    {timeToRead && <span>{preparationReadingTime(timeToRead)}</span>}
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
