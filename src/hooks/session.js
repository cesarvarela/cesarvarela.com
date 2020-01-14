import React, { useState, useEffect } from 'react'
import { lightTheme, darkTheme, ssrTheme } from '../lib/theme'

const sessionContext = React.createContext(null)
const { Consumer, Provider } = sessionContext

const themeFromBrowser = () => {

    if (window.matchMedia) {

        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return darkTheme
        }
        else if (window.matchMedia('(prefers-color-scheme: light)').matches) {

            return lightTheme
        }
    }

    return null
}

const themeFromLocalStorage = () => {

    const stored = window.localStorage.getItem('theme')

    return stored ? stored === 'light' ? lightTheme : darkTheme : null
}

function SessionProvider({ children }) {

    const [theme, setTheme] = useState(ssrTheme)

    const value = {
        theme,
        toggleTheme() {

            const newTheme = theme.name === 'light' ? darkTheme : lightTheme

            setTheme(newTheme)
            localStorage.setItem('theme', newTheme.name)
        }
    }

    useEffect(() => {

        const initialTheme = themeFromLocalStorage() || themeFromBrowser() || ssrTheme
        setTheme(initialTheme)
    }, [])

    return <Provider value={value}>{children}</Provider>
}

function SessionProviderSsr({ children }) {

    const theme = ssrTheme

    const value = {
        theme,
    }

    return <Provider value={value}>{children}</Provider>
}

export { Consumer as SessionContext, SessionProvider, SessionProviderSsr, sessionContext }