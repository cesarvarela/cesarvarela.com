import React, { useState, useEffect, createContext, ReactNode } from 'react'
import defaultTheme from '../lib/theme'
import useIsClient from './useIsClient'

interface SessionContextType {
  theme: {
    mode: 'dark' | 'light';
    [key: string]: any;
  };
  toggleTheme: () => void;
}

const initialContext: SessionContextType = {
  theme: {
    ...defaultTheme,
    mode: 'dark'
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
      ...defaultTheme,
      mode: 'dark'
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
    if (isClient && typeof window !== 'undefined' && window.theme && value.theme.mode !== window.theme.mode) {
      value.toggleTheme()
    }
  }, [isClient, value])

  return <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
}

// For backward compatibility
export const Consumer = SessionContext.Consumer 