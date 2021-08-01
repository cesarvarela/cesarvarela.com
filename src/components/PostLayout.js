import React, { useContext } from "react"
import { GlobalStyles } from './Global'
import styled, { css } from 'styled-components'
import ThemeToggleBase from "./ThemeToggle"
import { sessionContext } from "../hooks/session"
import LatestPosts from "./LatestPosts"
import { MDXProvider } from "@mdx-js/react"
import CodeWindow from "./CodeWindow"
import { Paragraph as GrommetParagraph, Grommet, Heading, grommet } from "grommet"

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

const Paragraph = styled(GrommetParagraph)`
  code {
    padding: 3px;
    border: 1px solid #aaa;
    border-radius: 6px; 
  }
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

const components = {
  p: props => <Paragraph fill {...props}>{props.children}</Paragraph>,
  h1: props => <Heading level="1" {...props}>{props.children}</Heading>,
  h2: props => <Heading level="2" {...props}>{props.children}</Heading>,
  h3: props => <Heading level="3" {...props}>{props.children}</Heading>,
  pre: props => <MDXCodeBlock {...props} />,
  code: props => <Code {...props}>{props.children}</Code>
}

const theme = {
  global: {
    font: {
      family: 'Inter',
      size: '14px',
      height: '20px',
    },
  },
  code: {
    background: {
      light: '#f5f5f5',
      dark: '#2c2c2c',
    }
  }
};

const PostLayout = ({ children, path }) => {

  const session = useContext(sessionContext)

  return <Grommet full theme={grommet} themeMode={session.theme.name !== 'ssr' ? session.theme.name : 'light'}>
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
  </Grommet>
}

export default PostLayout
