import React from 'react'
import { Link } from 'gatsby'
import * as styles from '../styles/navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <input type="checkbox" id= "check"className={styles.check}/>
      <label htmlFor="check">
        <FontAwesomeIcon icon={faBars} className={styles.icon}/>
      </label>
      <Link to='/' className={styles.logo}>Training Center</Link>
      <ul className={styles.nav_ul}>
        <li className={styles.nav_li}>
          <Link to='/About' className={styles.nav_links}>About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
