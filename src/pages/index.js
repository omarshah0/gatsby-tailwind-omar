import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Algolia from "../components/Algolia"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Algolia />
  </Layout>
)

export default IndexPage
