import React from "react"
import Head from "next/head"

interface SeoProps {
  title: string;
  description?: string;
  script?: any[];
}

const siteMetadata = {
  title: "Cesar Varela",
  description: "Web3, Solidity, Gatsby and React Development Tutorials",
  author: "@cesarvarela",
  url: "https://cesarvarela.com",
}

function Seo({ title, description = siteMetadata.description, script = [] }: SeoProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={`${siteMetadata.url}/po.png`} />
      <meta property="og:url" content={siteMetadata.url} />

      <meta property="twitter:card" content="summary" />
      <meta name="twitter:creator" content={siteMetadata.author} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {script.map((item, index) => (
        <script
          key={index}
          type={item.type}
          dangerouslySetInnerHTML={{ __html: item.innerHTML }}
        />
      ))}
    </Head>
  )
}

export default Seo
