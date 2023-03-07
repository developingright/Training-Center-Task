import React from 'react'
import Navbar from "../Components/Navbar"

const Layout = ({children}) => {
    return(
        <main>

            {/* Navbar Component */}
                <Navbar/>

            {/* content of each page */}
                {children}

        </main>
    )
}

export default Layout
