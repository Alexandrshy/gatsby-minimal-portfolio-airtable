import React from "react"

import * as s from "./style.module.css"

export const Typography: React.FC = ({ children }) => (
  <article className={s.typography}>{children}</article>
)
