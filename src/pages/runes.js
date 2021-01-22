import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Runes from "../components/Runes"

const RunesPage = () => {
  return (
    <Layout>
      <SEO title="Runes" />
      <Runes />
    </Layout>
  )
}

export default RunesPage
