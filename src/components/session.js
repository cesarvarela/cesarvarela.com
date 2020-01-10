import React, { useState } from 'react'
import { lightTheme, darkTheme } from './theme'

const sessionContext = React.createContext(null)
const { Consumer, Provider } = sessionContext

function SessionProvider({ children }) {

    const [theme, setTheme] = useState(lightTheme)

    const value = {
        theme,
        toggleTheme() {

            setTheme(this.theme.name === 'light' ? darkTheme : lightTheme)
        }
    }

    return <Provider value={value}>{children}</Provider>
}

export { Consumer as SessionContext, SessionProvider, sessionContext }