import React from "react"

import * as s from "./style.module.css"

type PropsType = {
  list: {
    title: string
    url: string
  }[]
}

export const Social: React.FC<PropsType> = ({ list }) => (
  <ul className={s.list}>
    {list.map(({ url, title }) => (
      <li key={title} className={s.item}>
        <a href={url} className={s.link} target="_blank" rel="noopener">
          {title}
        </a>
      </li>
    ))}
  </ul>
)
