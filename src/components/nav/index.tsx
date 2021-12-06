import { Link } from "gatsby"
import React from "react"

import { Social } from "../social"

import * as s from "./style.module.css"

const MENU_LIST = [
  {
    title: "Publications",
    url: "/longreads",
  },
  {
    title: "Notes",
    url: "/notes",
  },
  {
    title: "Projects",
    url: "/projects",
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
          <Link className={s.link} to={url}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
    <Social list={SOCIAL_LIST} />
  </nav>
)
