import React from 'react'
import Layout from '../Components/Layout'
import * as styles from '../styles/about.module.css'

const About = () => {
    return(
        <Layout>
            <div className={styles.container}>
                <h1>About this site</h1>
                <p>This site has been built for the qualification task of HSF's "A new Training Center Website" project in GSoC'2023</p>
                <p>This submission has been made by Mohd.Shaheer - <a href='https://github.com/developingright'>Github</a></p>
            </div>
        </Layout>
    )
}

export default About