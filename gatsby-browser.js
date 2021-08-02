import React from "react"
import "@fontsource/inter"
import "@fontsource/inconsolata"

import { SessionProvider } from "./src/hooks/session"

export const wrapRootElement = ({ element }) => {
    return <SessionProvider>
        {element}
    </SessionProvider>
}