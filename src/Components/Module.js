import React from 'react'
import * as styles from '../styles/grid.module.css';
import ReactMarkdown from 'react-markdown'
import rehypeRaw from "rehype-raw";

const Module = (props) => {
    return (
        <div className={styles.flex_col}>
            <div className={styles.inline}>
                <img className={styles.img} src="http://via.placeholder.com/80x80" alt="" />
                <div className={styles.title}><ReactMarkdown children={props.title} rehypePlugins={[rehypeRaw]}/></div>
            </div>
            <div className={styles.desc}>Description: <ReactMarkdown children={props.desc} rehypePlugins={[rehypeRaw]}/></div>
            <div className={styles.link}>Repo: <a href={props.repo}>{props.repo}</a></div>
            <div className={styles.link}>Webpage: <a href={props.webpage}>{props.webpage}</a></div>
            <div className={styles.link}>Video: <a href={props.video}>{props.video}</a></div>
        </div>
    )
}

export default Module