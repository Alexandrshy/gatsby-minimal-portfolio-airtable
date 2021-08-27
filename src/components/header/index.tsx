import React from "react"

import * as s from "./style.module.css"

type PropsType = {}

export const Header: React.FC<PropsType> = () => {
  return <header className={s.header}></header>
}
