import * as React from "react"
import Navbar from "../Components/Navbar"
import '../styles/main.css'

const IndexPage = () => {
  return (
    <main>
      {/* Navbar Component */}
      <Navbar/>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
