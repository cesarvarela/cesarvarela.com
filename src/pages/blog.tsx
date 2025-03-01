import React from "react"
import styled from 'styled-components'
import Layout from "../components/Layout"
import Link from "next/link"
import Seo from "../components/Seo"
import { GetStaticProps } from "next"
import { getAllPosts, Post } from "@/lib/blog"

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
const StyledLink = styled.a`
  text-decoration: none;
  cursor: pointer;
`
const LayoutLink = styled.a`
  text-decoration: none;
  font-size: 12px;
  cursor: pointer;
`

const Wrapper = styled.div`
  max-width: 768px;
  margin: 0 auto; 
`

interface BlogPageProps {
  posts: Post[]
}

const BlogPage = ({ posts }: BlogPageProps) => {
  return (
    <Layout content={<Link href="/" passHref><LayoutLink>About me</LayoutLink></Link>}>
      <Seo title="Cesar Varela's Blog about Web3, Solidity Gatsby, React and more. " />
      <Wrapper>
        <StyledH1>Blog</StyledH1>
        <List>
          {posts.map((post) => (
            <Item key={post.slug}>
              <Link href={`/blog/${post.slug}`} passHref>
                <StyledLink>
                  {post.frontmatter.title}
                </StyledLink>
              </Link>
            </Item>
          ))}
        </List>
      </Wrapper>
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