import { Link } from "gatsby"
import React from "react"

import { Social } from "../social"

import * as s from "./style.module.css"

const MENU_LIST = [
  {
    title: "Blog",
    url: "/blog",
  },
  {
    title: "Projects",
    url: "/projects",
  },
  {
    title: "Hire me",
    url: "/contact",
  },
]

const SOCIAL_LIST = [
  {
    title: "Twitter",
    url: "https://twitter.com/",
  },
  {
    title: "GitHub",
    url: "https://github.com/",
  },
]

export const Nav: React.FC = () => (
  <nav className={s.nav}>
    <ul className={s.list}>
      {MENU_LIST.map(({ url, title }) => (
        <li key={title} className={s.item}>
          <Link to={url}>{title}</Link>
        </li>
      ))}
    </ul>
    <Social list={SOCIAL_LIST} />
  </nav>
)
