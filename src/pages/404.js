import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { SessionProvider } from "../components/session"

const NotFoundPage = () => (
  <SessionProvider>
    <Layout>
      <SEO title="404: Not found" />
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  </SessionProvider>
)

export default NotFoundPage
