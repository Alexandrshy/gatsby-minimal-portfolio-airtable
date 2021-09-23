import React from "react"

import { Description } from "../components/description"
import { Chapter } from "../components/chapter"
import { ShortBlog } from "../components/shortBlog"
import { ShortProjects } from "../components/shortProjects"

import * as s from "./index.module.css"

export default () => (
  <div className={s.wrapper}>
    <Chapter>
      <Description />
    </Chapter>
    <Chapter>
      <ShortBlog />
    </Chapter>
    <Chapter>
      <ShortProjects />
    </Chapter>
  </div>
)
