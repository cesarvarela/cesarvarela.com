import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Link from "next/link"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <div 
      className="mt-3 mx-auto min-h-screen flex flex-col items-center text-center bg-center bg-no-repeat bg-cover text-gray-100 [&>p_a]:text-gray-100"
      style={{ backgroundImage: `url('/images/404.gif')` }}
    >
      <p>Not sure how you got here but you should probably <Link href="/">go home</Link></p>
    </div>
  </Layout>
)

export default NotFoundPage 