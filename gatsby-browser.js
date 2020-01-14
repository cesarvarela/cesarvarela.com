const React = require("react")
const { SessionProvider } = require("./src/hooks/session")

exports.wrapRootElement = ({ element }) => {
    return <SessionProvider>
        {element}
    </SessionProvider>
}