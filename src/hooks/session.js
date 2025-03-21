'use client';

import React, { useState, useEffect } from 'react'
import defaultTheme from '../lib/theme'

const SessionContext = React.createContext(null)
const { Consumer, Provider } = SessionContext

function SessionProvider({ children }) {

    const [value, setValue] = useState({
        theme: {
            ...defaultTheme,
            mode: 'dark'
        },
        toggleTheme: () => {
            setValue(value => {

                const mode = value.theme.mode === 'dark' ? 'light' : 'dark'
                if (typeof window !== 'undefined' && window.theme && window.theme.setMode) {
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
        if (typeof window !== 'undefined' && window.theme && 
            value.theme.mode !== window.theme.mode) {
            value.toggleTheme()
        }
    }, [value])

    return <Provider value={value}>{children}</Provider>
}

export { Consumer, SessionProvider, SessionContext }