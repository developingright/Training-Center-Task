import React from 'react'
import { Link } from 'gatsby'
import * as styles from '../styles/navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <label className={styles.logo}>Training Center</label>
      <ul className={styles.nav_ul}>
        <li className={styles.nav_li}>
          <Link to='/' className={styles.nav_links}>About</Link>
        </li>
      </ul>
    </nav>
  )
}
