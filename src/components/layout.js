import React, { useContext } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { GlobalStyles } from './global'
import styled, { ThemeProvider } from 'styled-components'
import ThemeToggle from "./ThemeToggle"
import { sessionContext } from "./session"

const Controls = styled.div`
  margin: 12px auto 0;
  text-align: center;
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

  return <ThemeProvider theme={session.theme}>
    <GlobalStyles />
    <Controls>
      <ThemeToggle />
    </Controls>
    <main>{children}</main>
  </ThemeProvider>
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
