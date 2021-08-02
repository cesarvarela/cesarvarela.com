import React, { useContext } from "react"
import { GlobalStyles } from './Global'
import styled, { ThemeProvider } from 'styled-components'
import ThemeToggleBase from "./ThemeToggle"
import { sessionContext } from "../hooks/session"
import LatestPosts from "./LatestPosts"
import { MDXProvider } from "@mdx-js/react"
import CodeWindow from "./CodeWindow"
import thing from '../images/thing.svg'

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
const StyledCodeWindow = styled(CodeWindow)`
  margin: 48px auto;
`

function MDXCodeBlock({ children }) {

  const { props: { children: source, className: classLanguage } } = children
  const options = classLanguage ? classLanguage.replace(/language-/, '') : ''
  const [language, title = null] = options.split(':')

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

const components = {
  p: props => <StyledP {...props}>{props.children}</StyledP>,
  h1: props => <StyledH1 {...props}>{props.children}</StyledH1>,
  h2: props => <StyledH2 level="2" {...props}>{props.children}</StyledH2>,
  h3: props => <StyledH3 level="3" {...props}>{props.children}</StyledH3>,
  pre: props => <MDXCodeBlock {...props} />,
}

const PostLayout = (props) => {

  const { children, pageContext: { frontmatter } } = props
  const { theme } = useContext(sessionContext)

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
