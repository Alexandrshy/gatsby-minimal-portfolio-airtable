import React from "react"

import { preparationReadingTime } from "../../utils/preparationReadingTime"

import * as s from "./style.module.css"

type PropsType = {
  date: string
  timeToRead?: number
}

export const Additional: React.FC<PropsType> = ({ date, timeToRead }) => (
  <div className={s.box}>
    <span>{date}</span>
    {timeToRead && <span>•</span>}
    {timeToRead && <span>{preparationReadingTime(timeToRead)}</span>}
  </div>
)
