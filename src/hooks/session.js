import React, { useState, useEffect } from 'react'
import defaultTheme from '../lib/theme'

const sessionContext = React.createContext(null)
const { Consumer, Provider } = sessionContext

const themeFromBrowser = () => {

    if (window.matchMedia) {

        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark'
        }
        else if (window.matchMedia('(prefers-color-scheme: light)').matches) {

            return 'light'
        }
    }

    return null
}

const themeFromLocalStorage = () => {

    const stored = window.localStorage.getItem('theme')

    return stored ? stored : null
}

function SessionProvider({ children }) {

    const [themeMode, setThemeMode] = useState(themeFromLocalStorage() || themeFromBrowser() || 'dark')

    const toggleTheme = () => {

        setThemeMode(mode => mode === 'dark' ? 'light' : 'dark')
    }

    const [value, setValue] = useState({ theme: { ...defaultTheme, mode: themeMode }, toggleTheme })

    useEffect(() => {

        setValue({ theme: { ...defaultTheme, mode: themeMode }, toggleTheme })
        localStorage.setItem('theme', themeMode)

    }, [themeMode])

    return <Provider value={value}>{children}</Provider>
}

function SessionProviderSsr({ children }) {

    const value = { theme: { ...defaultTheme, mode: 'dark' } }

    return <Provider value={value}>{children}</Provider>
}

export { Consumer as SessionContext, SessionProvider, SessionProviderSsr, sessionContext }