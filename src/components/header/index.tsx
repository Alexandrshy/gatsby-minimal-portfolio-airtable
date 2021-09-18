import React from "react"
import { Link } from "gatsby"

import { Logo } from "../logo"
import { Nav } from "../nav"

import * as s from "./style.module.css"

export const Header: React.FC = () => {
  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <Logo />
        <div className={s.box}>
          <h1 className={s.title}>
            <Link to="/" className={s.link}>
              Alex Shulaev
            </Link>
          </h1>
          <Nav />
        </div>
      </div>
    </header>
  )
}
