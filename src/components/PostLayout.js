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

const components = {
  pre: props => <MDXCodeBlock {...props} />,
  code: props => <pre style={{ color: 'tomato' }} {...props} />
}

const PostLayout = ({ children, path }) => {

  const session = useContext(sessionContext)

  return <ThemeProvider theme={session.theme}>
    <GlobalStyles />
    <main className={session.theme.name}>
      <Controls>
        <Hello>Weeeelcome, stranger!</Hello>
        <ThemeToggle />
      </Controls>
      <Wrapper>
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
