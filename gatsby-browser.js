import React from "react"
import "@fontsource/inter"
import "@fontsource/inconsolata"
import './src/style.css'

import { SessionProvider } from "./src/hooks/session"

export const wrapRootElement = ({ element }) => {
    return <SessionProvider>
        {element}
    </SessionProvider>
}