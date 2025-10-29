import React from "react"
import { Header } from '../components/sections/Header'
import { Contact } from '../components/sections/Contact'
import { About } from '../components/sections/About'
import { Social } from '../components/sections/Social'
import { Projects } from '../components/sections/Projects'
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import { FromTheBlog } from "../components/sections/FromTheBlog"
import { WebSite } from "schema-dts"
import { GetStaticProps } from "next"
import { getAllPosts, Post } from "@/lib/blog"

interface IndexPageProps {
  posts: Post[]
}

const IndexPage = ({ posts }: IndexPageProps) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "datePublished": "2021-01-01",
    "dateModified": new Date().toISOString().split('T')[0],
    "name": "Cesar Varela's Homepage",
    "author": [{
      "@type": "Person",
      "name": "Cesar Varela",
      "url": "https://cesarvarela.com"
    }]
  }

  return (
    <Layout content={null}>
      <Seo 
        title="Cesar Varela" 
        script={[{
          type: 'application/ld+json',
          innerHTML: JSON.stringify(jsonLd)
        }]} 
      />
      <Header />
      <Projects />
      <About />
      <Social />
      <Contact />
      <FromTheBlog posts={posts} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPosts = getAllPosts()
  const posts = allPosts.slice(0, 3) // Get latest 3 posts
  
  return {
    props: {
      posts,
    },
  }
}

export default IndexPage
