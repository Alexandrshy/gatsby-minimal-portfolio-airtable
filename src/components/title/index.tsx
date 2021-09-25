import React from "react"

import * as s from "./style.module.css"

type PropsType = {
  subtitle?: string
}

export const Title: React.FC<PropsType> = ({ children, subtitle }) => (
  <>
    {subtitle && <h3 className={s.subtitle}>{subtitle}</h3>}
    <h4 className={s.title}>{children}</h4>
  </>
)
