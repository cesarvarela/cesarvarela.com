const React = require("react")
const { SessionProvider } = require("./src/components/session")

exports.wrapRootElement = ({ element }) => {
    return <SessionProvider>
        {element}
    </SessionProvider>
}