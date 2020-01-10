import React, { useContext } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { GlobalStyles } from './global'
import styled, { ThemeProvider } from 'styled-components'
import ThemeToggle from "./ThemeToggle"
import { sessionContext } from "./session"

const Controls = styled.div`
  padding: 12px 0 0;
  display: flex;
  justify-content: center;
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

  const session = useContext(sessionContext)

  console.log('in layout theme', session)

  return <ThemeProvider theme={session.theme}>
    <GlobalStyles />
    <main className={session.theme.name}>
      <Controls>
        <ThemeToggle />
      </Controls>
      {children}
    </main>
  </ThemeProvider>
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
