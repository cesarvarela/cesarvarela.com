// exports.createSchemaCustomization = ({ actions }) => {
//   const { createTypes } = actions
//   const typeDefs = `
//       type Mdx implements Node {
//         frontmatter: Frontmatter
//       }
  
//       type Frontmatter {
//         date: Date!
//       }
//     `
//   createTypes(typeDefs)
// }