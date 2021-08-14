import React from "react"
import styled from 'styled-components'
import LatestPostsBase from "../components/LatestPosts"
import { MDXProvider } from "@mdx-js/react"
import CodeWindow from "../components/CodeWindow"
import thing from '../images/thing.svg'
import { graphql } from 'gatsby'
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/Layout"

const Wrapper = styled.div`
  max-width: 768px;
  margin: 0 auto; 
`
const StyledCodeWindow = styled(CodeWindow)`
  margin: 48px auto;
`

function MDXCodeBlock({ children }) {

  const { props: { children: source, className: classLanguage, title } } = children
  const language = classLanguage ? classLanguage.replace(/language-/, '') : ''

  return <StyledCodeWindow language={language} source={source} title={title} />
}

const StyledP = styled.p`
  margin: 36px auto 0;
  font-size: 18px;

  code {
    font-family:  Inconsolata, monospace;
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
    background: url(${thing});
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
`

const components = {
  p: props => <StyledP {...props}>{props.children}</StyledP>,
  h1: props => <StyledH1 {...props}>{props.children}</StyledH1>,
  h2: props => <StyledH2 level="2" {...props}>{props.children}</StyledH2>,
  h3: props => <StyledH3 level="3" {...props}>{props.children}</StyledH3>,
  pre: props => <MDXCodeBlock {...props} />,
  ul: props => <StyledUl {...props} />,
  li: props => <StyledLi {...props} />,
}

const LatestPosts = styled(LatestPostsBase)`
  padding: 48px 0;
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

const PostLayout = (props) => {

  const { mdx: { body, frontmatter, slug, timeToRead } } = props.data

  return <Layout>
    <Wrapper>
      <StyledH1>{frontmatter.title}</StyledH1>
      <PostInfo>
        <DatePublished>{frontmatter.date}</DatePublished>
        <TimeToRead>{timeToRead} min.</TimeToRead>
      </PostInfo>
      <MDXProvider components={components}>
        <MDXRenderer>
          {body}
        </MDXRenderer>
      </MDXProvider>
      <h3>Latest posts</h3>
      <LatestPosts />
    </Wrapper>
  </Layout >
}

export const query = graphql`
query($slug: String!) {
  mdx(slug: {eq: $slug}) {
    body
    frontmatter {
      date(formatString: "MMMM DD, YYYY")
      title
    }
    slug
    timeToRead
  }
}`

export default PostLayout