import React from "react"
import { Header } from '../components/sections/Header'
import { Contact } from '../components/sections/Contact'
import { About } from '../components/sections/About'
import { Footer } from '../components/sections/Footer'
import { Social } from '../components/sections/Social'
import { Projects } from '../components/Projects'
import Layout from "../components/layout"
import SEO from "../components/seo"

const socialItems =
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
  ]

const projectItems =
  [
    {
      key: 'ff',
      link: 'https://fb.gg/play/friendsfeud',
      img: './friendsfeud.png',
      title: 'Friends Feud',
      description: `A Facebook Instant game that lets you guess the most popular answer of a 100 person survey.`,
    },
    {
      key: 'botsfactory',
      link: 'https://www.botsfactory.io',
      img: './bf.png',
      title: 'BotsFactory',
      description: `A chatbots visual development platform built on top of Microsoft Bot Framework`,
    }
  ]

const skills =
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


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <Projects items={projectItems} />
    <About skills={skills} />
    <Social items={socialItems} />
    <Contact />
    <Footer />
  </Layout>
)

export default IndexPage
