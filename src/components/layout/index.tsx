import React from "react"

import { Header } from "../header"
import { Footer } from "../footer"

import "normalize.css"
import "../../css/variables.css"
import * as s from "./style.module.css"

const Layout: React.FC = ({ children }) => {
  return (
    <div className={s.layout}>
      <div className={s.wrapper}>
        <div className={s.container}>
          <Header />
          <main className={s.main}>{children}</main>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Layout
