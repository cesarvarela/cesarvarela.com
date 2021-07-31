import React, { useContext } from "react"
import { GlobalStyles } from './Global'
import styled, { ThemeProvider } from 'styled-components'
import ThemeToggleBase from "./ThemeToggle"
import { sessionContext } from "../hooks/session"
import LatestPosts from "./LatestPosts"

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
        {children}
        <h3>Latest posts</h3>
        <LatestPosts />
      </Wrapper>
    </main>
  </ThemeProvider>
}

export default PostLayout
