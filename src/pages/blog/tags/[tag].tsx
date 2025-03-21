import React from "react"
import styled from 'styled-components'
import Layout from "../../../components/Layout"
import Link from "next/link"
import Seo from "../../../components/Seo"
import { GetStaticProps, GetStaticPaths } from "next"
import { getAllPosts, getPostsByTag, Post } from "@/lib/blog"

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
const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`
const Item = styled.li`
  margin-top: 24px;
`
const StyledLink = styled(Link)`
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
`
const LayoutLink = styled(Link)`
  text-decoration: none;
  font-size: 12px;
  cursor: pointer;
`
const Wrapper = styled.div`
  max-width: 768px;
  margin: 0 auto; 
`

interface TagPageProps {
  posts: Post[];
  tag: string;
}

export default function TagPage({ posts, tag }: TagPageProps) {
  return (
    <Layout content={<LayoutLink href="/blog">Blog</LayoutLink>}>
      <Seo title={`Posts tagged with #${tag}`} />
      <Wrapper>
        <StyledH1>#{tag}</StyledH1>
        <List>
          {posts.map((post) => (
            <Item key={post.slug}>
              <StyledLink href={`/blog/${post.slug}`}>
                {post.frontmatter.title}
              </StyledLink>
            </Item>
          ))}
        </List>
      </Wrapper>
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