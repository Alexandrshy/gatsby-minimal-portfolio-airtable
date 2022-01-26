import React from "react"

import { Social } from "../social"

import * as s from "./style.module.css"

const SOCIAL_LIST = [
  {
    title: "Twitter",
    url: "https://twitter.com/",
  },
  {
    title: "GitHub",
    url: "https://github.com/",
  },
  {
    title: "Telegram",
    url: "https://t.me/alexandrshy",
  },
]

export const Footer: React.FC = () => (
  <footer className={s.footer}>
    <Social list={SOCIAL_LIST} />
    <a href="/rss.xml">RSS</a>
  </footer>
)
