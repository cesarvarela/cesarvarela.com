import React, { useState, useEffect } from 'react'
import defaultTheme from '../lib/theme'

const SessionContext = React.createContext(null)
const { Consumer, Provider } = SessionContext

const modeFromBrowser = () => {

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

const modeFromLocalStorage = () => {

    const stored = window.localStorage.getItem('theme')

    return stored ? stored : null
}

function SessionProvider({ children }) {

    const [value, setValue] = useState({
        theme: {
            ...defaultTheme,
            mode: 'dark'
        },
        toggleTheme: () => {
            setValue(value => {

                const mode = value.theme.mode === 'dark' ? 'light' : 'dark'
                localStorage.setItem('theme', mode)

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

        const preferredTheme = modeFromLocalStorage() || modeFromBrowser()

        if (value.theme.mode != preferredTheme) {

            value.toggleTheme()
        }

    }, [value])

    return <Provider value={value}>{children}</Provider>
}

export { Consumer, SessionProvider, SessionContext }