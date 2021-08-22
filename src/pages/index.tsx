import React from "react"
import { Header } from '../components/sections/Header'
import { Contact } from '../components/sections/Contact'
import { About } from '../components/sections/About'
import { Social } from '../components/sections/Social'
import { Projects } from '../components/sections/Projects'
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import { FromTheBlog } from "../components/sections/FromTheBlog"
import { WebSite } from "schema-dts";
import { helmetJsonLdProp } from "react-schemaorg";

const IndexPage = () => {

  const jsonLd = helmetJsonLdProp<WebSite>({
    "@context": "https://schema.org",
    "@type": "WebSite",
    "datePublished": "2021-01-01",
    "dateModified": "2021-08-22",
    "name": "Cesar Varela's Homepage",
    "author": [{
      "@type": "Person",
      "name": "Cesar Varela",
      "url": "https://cesarvarela.com"
    }]
  })

  return <Layout content={null}>
    <Seo title="Home" script={jsonLd} />
    <Header />
    <Projects />
    <About />
    <Social />
    <Contact />
    <FromTheBlog />
  </Layout>
}

export default IndexPage
