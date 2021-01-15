import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Success = () => (
  <Layout>
    <SEO title="Payment Complete" />
    <h1>Payment Success</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Success
