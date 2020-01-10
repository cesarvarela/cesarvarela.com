const React = require("react")
const { SessionProviderSsr } = require("./src/components/session")

exports.wrapRootElement = ({ element }) => {
    return <SessionProviderSsr>
        {element}
    </SessionProviderSsr>
}