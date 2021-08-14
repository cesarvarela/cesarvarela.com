import React from 'react'
import { useStaticQuery, graphql, Link as GastbyLink } from "gatsby"
import styled from 'styled-components'
import { useLocation } from '@reach/router'

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`
const Item = styled.li`
  margin-top: 12px;
`
const Link = styled(GastbyLink)`
  text-decoration: none;
`
const Wrapper = styled.div`
`
export default function LatestPosts({ className }) {

  const location = useLocation()

  const { allMdx } = useStaticQuery(graphql`
  query PostLayoutQuery {
    allMdx(sort: {fields: frontmatter___date, order: DESC}, filter: {slug: {glob: "!*wip*"}}, limit: 6) {
      edges {
        node {
          frontmatter {
            title
            date
          }
          slug
        }
      }
    }
  }`)

  const posts = allMdx.edges.filter(({ node }) => !location.pathname.includes(node.slug))

  return <Wrapper className={className}>
    <List>
      {posts.map(({ node }) => <Item key={node.slug}>
        <Link to={`/blog/${node.slug}`}>
          {node.frontmatter.title}
        </Link>
      </Item>)}
    </List>
  </Wrapper>

}