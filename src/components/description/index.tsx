import React from "react"
import { Link } from "gatsby"

import * as s from "./style.module.css"

export const Description: React.FC = () => (
  <div className={s.wrapper}>
    <p className={s.line}>
      Team lead at{" "}
      <a href="https://www.glassesusa.com/" target="_blank" rel="noopener">
        GlassesUSA
      </a>{" "}
      on the Product Labs team, doing A/B testing
    </p>
    <p className={s.line}>
      Writing <Link to="/blog">the blog</Link> about development and team
      management. In{" "}
      <a href="#" target="_blank" rel="noopener">
        Telegram
      </a>{" "}
      and{" "}
      <a href="#" target="_blank" rel="noopener">
        Twitter
      </a>
      , I write notes about everything that catches my eye
    </p>
    <p className={s.line}>
      I'm on the{" "}
      <a href="#" target="_blank" rel="noopener">
        Optimax Prime
      </a>{" "}
      podcast talking about IT topics. Ready to come on your podcast and talk
      about frontend!
    </p>
    <p className={s.line}>
      I want to try my hand at mentoring contact me if you're interested
    </p>
  </div>
)
