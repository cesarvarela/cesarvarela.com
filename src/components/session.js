import React, { useState, useEffect } from 'react'
import { lightTheme, darkTheme } from './theme'

const sessionContext = React.createContext(null)
const { Consumer, Provider } = sessionContext

const themeFromBrowser = () => {

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return darkTheme
    }
    else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {

        return lightTheme
    }

    return null
}

const themeFromLocalStorage = () => {

    const stored = localStorage.getItem('theme')

    return stored ? stored === 'light' ? lightTheme : darkTheme : null
}

function SessionProvider({ children }) {

    const initialTheme = themeFromLocalStorage() || themeFromBrowser()

    const [theme, setTheme] = useState(initialTheme ? initialTheme : lightTheme)

    const value = {
        theme,
        toggleTheme() {

            const theme = this.theme.name === 'light' ? darkTheme : lightTheme

            setTheme(theme)
            localStorage.setItem('theme', theme.name)
        }
    }

    return <Provider value={value}>{children}</Provider>
}

export { Consumer as SessionContext, SessionProvider, sessionContext }