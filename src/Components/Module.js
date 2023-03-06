import React from 'react'
import * as styles from '../styles/grid.module.css';

const Module = (props) => {
    return (
        <div className={styles.flex_col}>
            <div className={styles.inline}>
                <img className={styles.img} src="http://via.placeholder.com/80x80" alt="" />
                <div className={styles.title}>{props.title}</div>
            </div>
            <p className={styles.desc}>Description: {props.desc}</p>
            <p className={styles.link}>Repo: {props.repo}</p>
            <p className={styles.link}>Webpage: {props.webpage}</p>
            <p className={styles.link}>Video: {props.video}</p>
        </div>
    )
}

export default Module