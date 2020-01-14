const React = require("react")
const { SessionProviderSsr } = require("./src/hooks/session")

exports.wrapRootElement = ({ element }) => {
    return <SessionProviderSsr>
        {element}
    </SessionProviderSsr>
}