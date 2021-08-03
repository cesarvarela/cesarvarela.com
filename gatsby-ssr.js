import React from "react"
import { SessionProvider } from './src/hooks/session'
import { withPrefix } from "gatsby"

export const onRenderBody = ({ setHeadComponents }) => {
    setHeadComponents([
        <script key="theme" src={withPrefix('/theme.js')} />
    ])
}

export const wrapRootElement = ({ element }) => {
    return <SessionProvider>
        {element}
    </SessionProvider>
}