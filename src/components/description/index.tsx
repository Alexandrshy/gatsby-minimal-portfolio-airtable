import React from "react"
import { Link } from "gatsby"

export const Description: React.FC = () => (
  <>
    <p>
      Team lead at{" "}
      <a href="https://www.glassesusa.com/" target="_blank" rel="noopener">
        GlassesUSA
      </a>{" "}
      on the Product Labs team, doing A/B testing
    </p>
    <p>
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
    <p>
      I'm on the{" "}
      <a href="#" target="_blank" rel="noopener">
        Optimax Prime
      </a>{" "}
      podcast talking about IT topics. Ready to come on your podcast and talk
      about frontend!
    </p>
    <p>I want to try my hand at mentoring contact me if you're interested</p>
  </>
)
