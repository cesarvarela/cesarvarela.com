import React, { useContext, ReactNode } from "react"
import { GlobalStyles } from './Global'
import styled, { ThemeProvider } from 'styled-components'
import ThemeToggleBase from "./ThemeToggle"
import { SessionContext } from "@/hooks/session"
import useIsClient from "@/hooks/useIsClient"
import { Footer } from "./sections/Footer"

const Controls = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 12px 0;
  align-items: center;
  max-width: 768px;
  margin: 0 auto;
`

const ThemeToggle = styled(ThemeToggleBase)`
`

const Hello = styled.div`
  font-size: 12px;
`

interface LayoutProps {
  children: ReactNode;
  content?: ReactNode;
}

const Layout = ({ children, content = <Hello>Weeeelcome, stranger!</Hello> }: LayoutProps) => {
  const { theme } = useContext(SessionContext)
  const isClient = useIsClient()

  return (
    <ThemeProvider theme={theme}>
      {isClient && <GlobalStyles theme={theme} />}
      <main>
        <Controls>
          {content}
          <ThemeToggle />
        </Controls>
        {children}
        <Footer />
      </main>
    </ThemeProvider>
  )
}

export default Layout 