import React from "react"

import * as s from "./style.module.css"

export const Chapter: React.FC = ({ children }) => (
  <div className={s.wrapper}>{children}</div>
)
