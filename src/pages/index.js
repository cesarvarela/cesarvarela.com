import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import { Header } from '../components/sections/Header'

import loadable from '@loadable/component'

// const Contact = loadable(() => import('../components/sections/Contact'))
// const About = loadable(() => import('../components/sections/About'))
// const Social = loadable(() => import('../components/sections/Social'))
const Projects = loadable(() => import('../components/sections/Projects'))
// const FromTheBlog = loadable(() => import('../components/sections/FromTheBlog'))

const IndexPage = () => (
  <Layout contet={null}>
    <Seo title="Home" />
    <Header />
    <Projects />
    {/* <About />
    <Social />
    <Contact />
    <FromTheBlog /> */}
  </Layout>
)

export default IndexPage
