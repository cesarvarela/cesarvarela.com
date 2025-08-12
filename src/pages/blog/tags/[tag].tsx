import React from "react"
import Layout from "../../../components/Layout"
import Link from "next/link"
import Seo from "../../../components/Seo"
import { GetStaticProps, GetStaticPaths } from "next"
import { getAllPosts, getPostsByTag, Post } from "@/lib/blog"

interface TagPageProps {
  posts: Post[];
  tag: string;
}

export default function TagPage({ posts, tag }: TagPageProps) {
  return (
    <Layout content={<Link href="/blog" className="no-underline text-xs cursor-pointer">Blog</Link>}>
      <Seo title={`Posts tagged with #${tag}`} />
      <div className="max-w-3xl mx-auto">
        <h1 className="text-6xl bg-gradient-to-r from-[#3FC5FF] to-[#FF3EC9] bg-clip-text text-transparent tracking-tight mt-8 mb-0 font-black leading-none pb-4">
          #{tag}
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

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts()
  const tags = new Set<string>()
  
  posts.forEach(post => {
    if (post.frontmatter.tags) {
      const postTags = post.frontmatter.tags.split(',').map(tag => tag.trim())
      postTags.forEach(tag => tags.add(tag))
    }
  })
  
  return {
    paths: Array.from(tags).map(tag => ({
      params: { tag }
    })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const tag = params?.tag as string
  const posts = getPostsByTag(tag)
  
  return {
    props: {
      posts,
      tag
    }
  }
} 