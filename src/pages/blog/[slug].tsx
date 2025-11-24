import React from "react"
import LatestPostsBase from "../../components/LatestPosts"
import CodeWindow from "../../components/CodeWindow"
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"
import Tags from "../../components/Tags"
import { GetStaticProps, GetStaticPaths } from "next"
import { getAllPosts } from "@/lib/blog"
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

function MDXCodeBlock({ children }: any) {
  const { props: { children: source, className: classLanguage, title } } = children
  const language = classLanguage ? classLanguage.replace(/language-/, '') : ''

  return <CodeWindow language={language} source={source} title={title} className="my-12 mx-auto" />
}

const components = {
  img: (props: any) => {
    // Transform relative blog image paths to absolute public paths
    let src = props.src;
    if (src?.startsWith('./images/')) {
      src = src.replace('./images/', '/images/blog/');
    }
    return <img {...props} src={src} className="mt-9 mx-auto rounded-lg" />;
  },
  p: (props: any) => (
    <p {...props} className="mt-9 mx-auto text-lg leading-relaxed [&_code]:font-mono [&_code]:p-1 [&_code]:border [&_code]:border-gray-400 [&_code]:rounded">
      {props.children}
    </p>
  ),
  h1: (props: any) => (
    <h1 {...props} className="text-6xl bg-gradient-to-r from-[#3FC5FF] to-[#FF3EC9] bg-clip-text text-transparent tracking-tight mt-8 mb-0 font-black leading-none pb-4">
      {props.children}
    </h1>
  ),
  h2: (props: any) => (
    <h2 {...props} className="text-3xl mt-32 mx-auto relative font-bold before:w-2 before:h-18 before:content-[''] before:left-1 before:absolute before:-bottom-5 before:-top-24 before:bg-no-repeat before:bg-[url('/images/thing.svg')]">
      {props.children}
    </h2>
  ),
  h3: (props: any) => (
    <h3 {...props} className="text-2xl mt-12 mx-auto font-bold">
      {props.children}
    </h3>
  ),
  pre: (props: any) => <MDXCodeBlock {...props} />,
  ul: (props: any) => <div {...props} className="mt-12" />,
  li: (props: any) => <li {...props} className="mt-3 leading-relaxed" />,
}


interface PostProps {
  source: any;
  frontmatter: {
    title: string;
    date: string;
    tags?: string;
  };
  slug: string;
  timeToRead: number;
  latestPosts: any[];
}

const PostLayout = ({ source, frontmatter, slug, timeToRead, latestPosts }: PostProps) => {
  const siteUrl = "https://cesarvarela.com";
  
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": frontmatter.title,
    "datePublished": frontmatter.date,
    "dateModified": new Date().toISOString().split('T')[0],
    "url": `${siteUrl}/blog/${slug}`,
    "author": [{
      "@type": "Person",
      "name": "Cesar Varela",
      "url": siteUrl,
    }]
  };

  return (
    <Layout content={<Link href="/blog" className="no-underline text-xs cursor-pointer">Blog</Link>}>
      <Seo 
        title={frontmatter.title} 
        script={[{
          type: 'application/ld+json',
          innerHTML: JSON.stringify(jsonLd)
        }]} 
      />
      <div className="max-w-3xl mx-auto">
        <h1 className="text-6xl bg-gradient-to-r from-[#3FC5FF] to-[#FF3EC9] bg-clip-text text-transparent tracking-tight mt-8 mb-0 font-black leading-none pb-4">
          {frontmatter.title}
        </h1>
        <div className="flex items-center justify-between text-xs">
          <div>{frontmatter.date}</div>
          <p className="m-0">{timeToRead} min.</p>
        </div>
        {frontmatter.tags && <Tags tags={frontmatter.tags} />}
        <MDXRemote {...source} components={components} />
        <h3 className="bg-gradient-to-r from-[#3FC5FF] to-[#FF3EC9] bg-clip-text text-transparent tracking-tight mt-14 mb-0">
          Latest posts
        </h3>
        <LatestPostsBase className="mt-6" posts={latestPosts} />
      </div>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts()
  
  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string
  const postsDirectory = path.join(process.cwd(), 'src/blog')
  const fullPath = path.join(postsDirectory, `${slug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  
  const { content, data } = matter(fileContents)
  const mdxSource = await serialize(content)
  
  // Estimate reading time (very simple calculation)
  const wordsPerMinute = 200
  const wordCount = content.split(/\s+/g).length
  const timeToRead = Math.ceil(wordCount / wordsPerMinute)
  
  // Ensure date is a string
  const frontmatter = { ...data }
  if (frontmatter.date instanceof Date) {
    frontmatter.date = frontmatter.date.toISOString().split('T')[0]
  }
  
  // Get latest posts for the sidebar
  const allPosts = getAllPosts()
  const latestPosts = allPosts.slice(0, 5) // Get latest 5 posts
  
  return {
    props: {
      source: mdxSource,
      frontmatter,
      slug,
      timeToRead,
      latestPosts,
    },
  }
}

export default PostLayout 