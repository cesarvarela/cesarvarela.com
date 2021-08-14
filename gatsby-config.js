module.exports = {
  flags: {
    DEV_SSR: true
  },
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog-images`,
        path: `${__dirname}/src/blog/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/blog`,
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

    `gatsby-plugin-styled-components`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        root: __dirname,
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 500,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg\/.*\.svg/,
        }
      }
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-K85HVFYR65",
        ],
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          head: false,
          respectDNT: true,
          exclude: ["/preview/**"],
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
