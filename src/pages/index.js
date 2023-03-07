import * as React from "react"
import Navbar from "../Components/Navbar"
import YamlContent from "../Components/YamlContent"
import '../styles/main.css'

const IndexPage = () => {
  return (
    <main>
      
      {/* Navbar Component */}
      <Navbar/>
      
      {/* Yaml Content Component */}
      <YamlContent/>

    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
