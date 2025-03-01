import React from "react"
import styled from 'styled-components'
import LatestPostsBase from "../../components/LatestPosts"
import { MDXProvider } from "@mdx-js/react"
import CodeWindow from "../../components/CodeWindow"
import thing from '../../images/thing.svg'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"
import Tags from "../../components/Tags"
import { GetStaticProps, GetStaticPaths } from "next"
import { getAllPosts, getPostBySlug } from "@/lib/blog"
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const StyledCodeWindow = styled(CodeWindow)`
  margin: 48px auto;
`

function MDXCodeBlock({ children }: any) {
  const { props: { children: source, className: classLanguage, title } } = children
  const language = classLanguage ? classLanguage.replace(/language-/, '') : ''

  return <StyledCodeWindow language={language} source={source} title={title} />
}

const StyledP = styled.p`
  margin: 36px auto 0;
  font-size: 18px;
  line-height: 1.9;

  code {
    font-family: Inconsolata, monospace;
    padding: 3px;
    border: 1px solid #aaa;
    border-radius: 6px; 
  }
`
const StyledH1 = styled.h1`
  font-size: 60px;
  background: linear-gradient(266.96deg, #3FC5FF -21.03%, #FF3EC9 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -0.04em;
  margin: 30px auto 0;
  font-weight: 900;
  line-height: 1;
  padding-bottom: 1rem;
`

const StyledH2 = styled.h2`
  font-size: 30px;
  margin: 127px auto 0;
  position: relative;
  ::before {
    width: 7px;
    height: 72px;
    content: '';
    left: 3px;
    position: absolute;
    bottom: -20px;
    top: -98px;;
    background: url(${thing.src});
  }
`

const StyledH3 = styled.h3`
  font-size: 24px;
  margin: 48px auto 0;
`

const StyledUl = styled.div`
  margin: 48px 0 0;
`

const StyledLi = styled.li`
  margin: 12px 0 0;
  line-height: 1.9;
`

const components = {
  p: (props: any) => <StyledP {...props}>{props.children}</StyledP>,
  h1: (props: any) => <StyledH1 {...props}>{props.children}</StyledH1>,
  h2: (props: any) => <StyledH2 {...props}>{props.children}</StyledH2>,
  h3: (props: any) => <StyledH3 {...props}>{props.children}</StyledH3>,
  pre: (props: any) => <MDXCodeBlock {...props} />,
  ul: (props: any) => <StyledUl {...props} />,
  li: (props: any) => <StyledLi {...props} />,
}

const LatestPostHeading = styled.h3`
  background: linear-gradient(266.96deg, #3FC5FF -21.03%, #FF3EC9 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -0.04em;
  margin: 54px 0 0;
`

const LatestPosts = styled(LatestPostsBase)`
  margin: 24px 0 0;
`
const PostInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
`
const DatePublished = styled.div`
`
const TimeToRead = styled.p`
`
const LayoutLink = styled.a`
  text-decoration: none;
  font-size: 12px;
  cursor: pointer;
`

const StyledTags = styled(Tags)`
`

const Wrapper = styled.div`
  max-width: 768px;
  margin: 0 auto; 
`

interface PostProps {
  source: any;
  frontmatter: {
    title: string;
    date: string;
    tags?: string;
  };
  slug: string;
  timeToRead: number;
}

const PostLayout = ({ source, frontmatter, slug, timeToRead }: PostProps) => {
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
    <Layout content={<Link href="/blog" passHref><LayoutLink>Blog</LayoutLink></Link>}>
      <Seo 
        title={frontmatter.title} 
        script={[{
          type: 'application/ld+json',
          innerHTML: JSON.stringify(jsonLd)
        }]} 
      />
      <Wrapper>
        <StyledH1>{frontmatter.title}</StyledH1>
        <PostInfo>
          <DatePublished>{frontmatter.date}</DatePublished>
          <TimeToRead>{timeToRead} min.</TimeToRead>
        </PostInfo>
        {frontmatter.tags && <StyledTags tags={frontmatter.tags} />}
        <MDXProvider components={components}>
          <MDXRemote {...source} components={components} />
        </MDXProvider>
        <LatestPostHeading>Latest posts</LatestPostHeading>
        <LatestPosts />
      </Wrapper>
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
  
  return {
    props: {
      source: mdxSource,
      frontmatter,
      slug,
      timeToRead,
    },
  }
}

export default PostLayout 