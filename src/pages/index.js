import React from "react"
import { Header } from '../components/sections/Header'
import { Contact } from '../components/sections/Contact'
import { About } from '../components/sections/About'
import { Social } from '../components/sections/Social'
import { Projects } from '../components/sections/Projects'
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import { FromTheBlog } from "../components/sections/FromTheBlog"

const IndexPage = () => (
  <Layout contet={null}>
    <Seo title="Home" />
    <Header />
    <Projects />
    <About />
    <Social />
    <Contact />
    <FromTheBlog />
  </Layout>
)

export default IndexPage
