import React, { useState, useEffect, createContext, ReactNode } from 'react'
import defaultTheme, { Theme } from '../lib/theme'
import useIsClient from './useIsClient'

interface SessionContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const initialContext: SessionContextType = {
  theme: {
    ...defaultTheme
  },
  toggleTheme: () => {}
}

export const SessionContext = createContext<SessionContextType>(initialContext)

interface SessionProviderProps {
  children: ReactNode;
}

export function SessionProvider({ children }: SessionProviderProps) {
  const isClient = useIsClient()
  const [value, setValue] = useState<SessionContextType>({
    theme: {
      ...defaultTheme
    },
    toggleTheme: () => {
      setValue(value => {
        const mode = value.theme.mode === 'dark' ? 'light' : 'dark'
        
        if (typeof window !== 'undefined' && window.theme) {
          window.theme.setMode(mode)
        }

        return {
          ...value,
          theme: {
            ...value.theme,
            mode,
          }
        }
      })
    }
  })

  useEffect(() => {
    if (isClient && typeof window !== 'undefined' && window.theme) {
      // Initialize theme from window.theme
      const windowTheme = window.theme;
      setValue(prev => ({
        ...prev,
        theme: {
          ...prev.theme,
          mode: windowTheme.mode as 'dark' | 'light'
        }
      }))
    }
  }, [isClient])

  return <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
}

// For backward compatibility
export const Consumer = SessionContext.Consumer 