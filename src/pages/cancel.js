import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Cancel = () => (
  <Layout>
    <SEO title="Payment Canceled" />
    <h1>Payment Canceled</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Cancel
