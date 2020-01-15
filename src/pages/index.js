import React from "react"
import { Header } from '../components/sections/Header'
import { Contact } from '../components/sections/Contact'
import { About } from '../components/sections/About'
import { Footer } from '../components/sections/Footer'
import { Social } from '../components/sections/Social'
import { Projects } from '../components/sections/Projects'
import Layout from "../components/Layout"
import SEO from "../components/Seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <Projects />
    <About />
    <Social />
    <Contact />
    <Footer />
  </Layout>
)

export default IndexPage
