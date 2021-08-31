import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function Seo({ title, script = [] }: { title: string, script: [] | any }) {
  const { site: { siteMetadata } } = useStaticQuery(
    graphql`
      {
        site {
          siteMetadata {
            title
            description
            author
            url
          }
        }
      }
    `
  )

  return (
    <Helmet
      htmlAttributes={{ lang: "en" }}
      title={title}
      titleTemplate={`%s | ${siteMetadata.title}`}
      script={[].concat(script)}
    >
      <meta name="description" content={siteMetadata.description} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={siteMetadata.description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={`${siteMetadata.url}/po.png`} />
      <meta property="og:url" content={siteMetadata.url} />

      <meta property="twiter:card" content="summary" />
      <meta name="twitter:creator" content={siteMetadata.author} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={siteMetadata.description} />

    </Helmet>
  )
}

export default Seo
