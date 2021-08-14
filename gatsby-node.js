const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions

    const result = await graphql(
        `{
            allMdx(filter: {slug: {glob: "!*wip*"}}) {
                edges {
                node {
                    slug
                }
            }
        }
      }
    `)

    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }

    const component = path.resolve(`src/templates/post.js`)

    result.data.allMdx.edges.forEach(({ node }) => {

        const postPath = `/blog/${node.slug}`

        createPage({
            path: postPath,
            component,
            context: {
                slug: node.slug
            },
        })
    })
}