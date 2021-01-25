import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About" />
      <div className="container" style={{ minHeight: "75vh" }}>
        <h1>About Page</h1>
      </div>
    </Layout>
  )
}

export default AboutPage
