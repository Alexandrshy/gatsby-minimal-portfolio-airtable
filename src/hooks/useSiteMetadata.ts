import { graphql, useStaticQuery } from "gatsby"

type MetadataType = {
  title: string
  titleTemplate: string
  description: string
  image: string
  siteUrl: string
  siteLanguage: string
  siteLocale: string
  twitterUsername: string
  telegramUsername: string
}

export const useSiteMetadata = () => {
  const { site } = useStaticQuery<{ site: { siteMetadata: MetadataType } }>(
    graphql`
      query {
        site {
          siteMetadata {
            title
            titleTemplate
            description
            image
            siteUrl
            siteLanguage
            siteLocale
            twitterUsername
            telegramUsername
          }
        }
      }
    `
  )
  return site.siteMetadata
}
