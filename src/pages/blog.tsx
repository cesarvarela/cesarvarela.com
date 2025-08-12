import React from "react"
import Layout from "../components/Layout"
import Link from "next/link"
import Seo from "../components/Seo"
import { GetStaticProps } from "next"
import { getAllPosts, Post } from "@/lib/blog"

interface BlogPageProps {
  posts: Post[]
}

const BlogPage = ({ posts }: BlogPageProps) => {
  return (
    <Layout content={<Link href="/" className="no-underline text-xs cursor-pointer">About me</Link>}>
      <Seo title="Cesar Varela's Blog about Web3, Solidity Gatsby, React and more. " />
      <div className="max-w-3xl mx-auto">
        <h1 className="text-6xl bg-gradient-to-r from-[#3FC5FF] to-[#FF3EC9] bg-clip-text text-transparent tracking-tight mt-8 mb-0 font-black leading-none pb-4">
          Blog
        </h1>
        <ul className="list-none m-0 p-0">
          {posts.map((post) => (
            <li key={post.slug} className="mt-6">
              <Link href={`/blog/${post.slug}`} className="font-bold no-underline cursor-pointer">
                {post.frontmatter.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts()
  
  return {
    props: {
      posts,
    },
  }
}

export default BlogPage 