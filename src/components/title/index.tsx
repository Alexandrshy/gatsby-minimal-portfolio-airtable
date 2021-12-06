import React from "react"
import classNames from "classnames"

import * as s from "./style.module.css"

type PropsType = {
  subtitle?: string
  isDecreased?: boolean
}

export const Title: React.FC<PropsType> = ({
  children,
  subtitle,
  isDecreased,
}) => (
  <>
    {subtitle && <h3 className={s.subtitle}>{subtitle}</h3>}
    <h4
      className={classNames(s.title, { [s.decreased]: Boolean(isDecreased) })}
    >
      {children}
    </h4>
  </>
)
