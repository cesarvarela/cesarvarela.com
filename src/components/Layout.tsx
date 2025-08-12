import React, { useContext, ReactNode, useEffect } from "react"
import ThemeToggle from "./ThemeToggle"
import { SessionContext } from "@/hooks/session"
import useIsClient from "@/hooks/useIsClient"
import { Footer } from "./sections/Footer"

interface LayoutProps {
  children: ReactNode;
  content?: ReactNode;
}

const Layout = ({ children, content = <div className="text-xs">Weeeelcome, stranger!</div> }: LayoutProps) => {
  const { theme } = useContext(SessionContext)
  const isClient = useIsClient()

  useEffect(() => {
    if (isClient) {
      if (theme.mode === 'dark') {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  }, [theme.mode, isClient])

  return (
    <main className="min-h-screen">
      <div className="flex flex-row justify-between items-center px-4 py-3 max-w-3xl mx-auto">
        {content}
        <ThemeToggle />
      </div>
      {children}
      <Footer />
    </main>
  )
}

export default Layout