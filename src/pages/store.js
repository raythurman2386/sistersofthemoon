import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Products from "../components/Products"

const StorePage = () => {
  return (
    <Layout>
      <SEO title="Store" />
      <Products />
    </Layout>
  )
}

export default StorePage
