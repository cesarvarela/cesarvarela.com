import React, { useContext } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GlobalStyles } from './Global'
import styled, { ThemeProvider } from 'styled-components'
import ThemeToggleBase from "./ThemeToggle"
import { sessionContext } from "../hooks/session"

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

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const { theme } = useContext(sessionContext)

  return <ThemeProvider theme={theme}>
    <GlobalStyles />
    <main>
      <Controls>
        <Hello>Weeeelcome, stranger!</Hello>
        <ThemeToggle />
      </Controls>
      {children}
    </main>
  </ThemeProvider>
}

export default Layout
