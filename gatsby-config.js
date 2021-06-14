module.exports = {
  siteMetadata: {
    title: `Cesar Varela`,
    description: `Cesar Varela's home page`,
    author: `@cesarvarela`,
    socialItems:
      [
        {
          key: 'stack-overflow',
          description: 'Stack Overflow',
          link: 'http://stackoverflow.com/users/1030208/cesar-varela'
        },
        {
          key: 'linkedin',
          description: 'Linkedin',
          link: 'https://www.linkedin.com/in/cesarluisvarela'
        },
        {
          key: 'github',
          description: 'Github',
          link: 'https://github.com/cesarvarela'
        },
        {
          key: 'lastfm',
          description: 'Lastfm',
          link: 'http://www.last.fm/user/elcesarpo'
        },
        {
          key: 'facebook',
          description: 'Facebook',
          link: 'https://www.facebook.com/cesarluis.varela'
        },
        {
          key: 'twitter',
          description: 'Twitter',
          link: 'https://twitter.com/cesarpo'
        },
      ],

    skills:
      [
        {
          name: "Languages",
          items:
            [
              {
                name: "Javascript"
              },
              {
                name: "Typescript"
              },
              {
                name: "Swift"
              },
              {
                name: "C#"
              },
              {
                name: "ActionScript 3"
              },
              {
                name: "PHP"
              },
              {
                name: "GO"
              },
            ]
        },
        {
          name: "Frameworks/Libraries",
          items:
            [
              {
                name: "React"
              },
              {
                name: "Angular"
              },
              {
                name: "Express"
              },
              {
                name: "Next.js"
              },
              {
                name: "GraphQL"
              }
            ]
        },

        {
          name: "Stacks/Platforms",
          items:
            [
              {
                name: "Node.js"
              },
              {
                name: "iOS"
              },
              {
                name: ".NET"
              },
              {
                name: "Unity 3D"
              },
              {
                name: "MERN"
              }
            ]
        },
        {
          name: "Software",
          items:
            [
              {
                name: "Visual Studio/ VSCode"
              },
              {
                name: "Xcode"
              },
              {
                name: "Photoshop"
              },
              {
                name: "Unity 3D"
              },
              {
                name: "Sketch"
              },
              {
                name: "Figma"
              },
              {
                name: "Chrome DEV tools"
              }
            ]
        }
      ]
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Cesar Varela`,
        short_name: `Cesar`,
        start_url: `/`,
        background_color: `#EFEFEF`,
        theme_color: `#333`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

    `gatsby-plugin-react-helmet`,

    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data`,
      },
    },

    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,

    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
