import React, { useContext } from "react"
import { GlobalStyles } from './Global'
import styled, { ThemeProvider } from 'styled-components'
import ThemeToggleBase from "./ThemeToggle"
import { sessionContext } from "../hooks/session"
import LatestPosts from "./LatestPosts"
import { MDXProvider } from "@mdx-js/react"
import CodeWindow from "./CodeWindow"

const Controls = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 12px;
  align-items: center;
  max-width: 768px;
  margin: 0 auto;
`
const ThemeToggle = styled(ThemeToggleBase)`
`
const Hello = styled.div`
  font-size: 12px;
`
const Wrapper = styled.div`
  max-width: 768px;
  margin: 0 auto; 
`

function MDXCodeBlock({ children }) {

  const { props: { children: source, className: classLanguage } } = children
  const language = classLanguage ? classLanguage.replace(/language-/, '') : ''

  return <CodeWindow language={language} source={source} />
}

const Code = styled.code`
  padding: 3px;
  border-radius: 6px; 
`
const StyledP = styled.p`
  code {
    padding: 3px;
    border: 1px solid #aaa;
    border-radius: 6px; 
  }
`
const StyledH1 = styled.h1`
`

const StyledH2 = styled.h2`
`

const StyledH3 = styled.h3`
`

const components = {
  p: props => <StyledP {...props}>{props.children}</StyledP>,
  h1: props => <StyledH1 {...props}>{props.children}</StyledH1>,
  h2: props => <StyledH2 level="2" {...props}>{props.children}</StyledH2>,
  h3: props => <StyledH3 level="3" {...props}>{props.children}</StyledH3>,
  pre: props => <MDXCodeBlock {...props} />,
  code: props => <Code {...props}>{props.children}</Code>
}

const PostLayout = (props) => {

  const { children, pageContext: { frontmatter } } = props

  const { theme } = useContext(sessionContext)

  console.log(props)

  return <ThemeProvider theme={theme}>
    <GlobalStyles />
    <main>
      <Controls>
        <Hello>Weeeelcome, stranger!</Hello>
        <ThemeToggle />
      </Controls>
      <Wrapper>
        <StyledH1>{frontmatter.title}</StyledH1>
        <MDXProvider components={components}>
          {children}
        </MDXProvider>
        <h3>Latest posts</h3>
        <LatestPosts />
      </Wrapper>
    </main>
  </ThemeProvider>
}

export default PostLayout
