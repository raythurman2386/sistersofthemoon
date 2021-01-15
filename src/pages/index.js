import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Product from "../components/product"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <div style={{ display: "flex" }}>
        <Product />
        <Product />
        <Product />
      </div>
    </Layout>
  )
}

export default IndexPage
