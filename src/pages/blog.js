import React from "react"
import styled from 'styled-components'
import Layout from "../components/Layout"
import { useStaticQuery, graphql, Link as GastbyLink } from "gatsby"
import Seo from "../components/Seo"

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
const Link = styled(GastbyLink)`
  text-decoration: none;
`
const LayoutLink = styled(GastbyLink)`
  text-decoration: none;
  font-size: 12px;
`

const Wrapper = styled.div`
  max-width: 768px;
  margin: 0 auto; 
`

const BlogPage = (props) => {

  const { allMdx } = useStaticQuery(graphql`
    query BlogQuery {
      allMdx(sort: {fields: frontmatter___date, order: DESC}, filter: {slug: {glob: "!*wip*"}}) {
        edges {
          node {
            frontmatter {
              title
              date
              tags
            }
            slug
          }
        }
      }
    }`)

  const posts = allMdx.edges

  return <Layout content={<LayoutLink to="/">About me</LayoutLink>}>
    <Seo title="Blog" />
    <Wrapper>
      <StyledH1>Blog</StyledH1>
      <List>
        {posts.map(({ node }) => <Item key={node.slug}>
          <Link to={`/blog/${node.slug}`}>
            {node.frontmatter.title}
          </Link>
        </Item>)}
      </List>
    </Wrapper>
  </Layout >
}

export default BlogPage