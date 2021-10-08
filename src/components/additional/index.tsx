import React from "react"

import { preparationReadingTime } from "../../utils/preparationReadingTime"

import * as s from "./style.module.css"

type PropsType = {
  date: string
  description: {
    childMarkdownRemark: {
      html: string
      timeToRead: number
    }
  }
}

export const Additional: React.FC<PropsType> = ({ date, description }) => (
  <div className={s.box}>
    <span>{date}</span>
    <span>•</span>
    <span>
      {preparationReadingTime(description.childMarkdownRemark.timeToRead)}
    </span>
  </div>
)
