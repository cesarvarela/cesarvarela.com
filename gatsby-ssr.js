import React from "react"
import { SessionProvider } from './src/hooks/session'

export const wrapRootElement = ({ element }) => {
    return <SessionProvider>
        {element}
    </SessionProvider>
}