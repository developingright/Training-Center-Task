import * as React from "react"
import Layout from "../Components/Layout"
import YamlContent from "../Components/YamlContent"
import '../styles/main.css'

const IndexPage = () => {
  return (
      <Layout>

        {/* Yaml Content Component */}
          <YamlContent/>

      </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
