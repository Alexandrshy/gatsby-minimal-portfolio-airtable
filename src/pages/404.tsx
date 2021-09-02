import React from "react"
import { Link } from "gatsby"

import * as s from "./404.module.css"

const NotFound = () => (
  <div className={s.wrapper}>
    <h1 className={s.title}>404</h1>
    <h2 className={s.subTitle}>Page not found</h2>
    <Link to="/blog">Return and read articles</Link>
  </div>
)

export default NotFound
