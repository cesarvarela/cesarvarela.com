const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions

    const result = await graphql(
        `{
            allMdx(filter: {slug: {glob: "!*wip*"}}) {
                edges {
                node {
                    slug
                    frontmatter {
                        tags
                    }
                }
            }
        }
      }
    `)

    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }

    const postTemplate = path.resolve(`src/templates/post.js`)

    result.data.allMdx.edges.forEach(({ node }) => {

        const postPath = `/blog/${node.slug}`

        createPage({
            path: postPath,
            component: postTemplate,
            context: {
                slug: node.slug
            },
        })
    })

    const tags = {}
    const tagTemplate = path.resolve(`src/templates/tag.js`)

    result.data.allMdx.edges.filter(({ node }) => node.frontmatter.tags).forEach(({ node }) => {

        const tagsList = node.frontmatter.tags.split(",").map(tag => tag.trim()).filter(tag => tag.length > 0)

        tagsList.forEach(tag => {
            if (!tags[tag]) {
                tags[tag] = []
            }
            tags[tag].push(node.slug)
        })
    })

    Object.keys(tags).forEach(tag => {
        createPage({
            path: `/blog/tags/${tag}`,
            component: tagTemplate,
            context: {
                tag,
                slugs: tags[tag]
            },
        })
    })
}

const LoadablePlugin = require('@loadable/webpack-plugin')

exports.onCreateWebpackConfig = ({
    stage,
    rules,
    loaders,
    plugins,
    actions,
}) => {
    actions.setWebpackConfig({
        module: {
        },
        plugins: [new LoadablePlugin()]
    })
}