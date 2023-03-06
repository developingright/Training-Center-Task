import React from "react";
import preval from "babel-plugin-preval/macro";
import * as styles from '../styles/grid.module.css';

//importing js-yaml
const YAML = require("js-yaml");

//using babel preval to load yaml file
const raw = preval`const fs = require('fs');
module.exports = fs.readFileSync(require.resolve('../data/training-modules.yaml'), 'utf8');`;

//using js-yaml for converting yaml into json format for parsing
const data = YAML.load(raw);

const YamlContent = () => {
  return(
    <>
    <div className={styles.container}>
      <div className={styles.flex_row}>
        <div className={styles.flex_col}>
          <div className={styles.inline}>
            <img className={styles.img} src="http://via.placeholder.com/80x80" alt="" />
            <div className={styles.title}>Version controlling with git</div>
          </div>
          <p className={styles.desc}>Description: Track code changes, undo mistakes, collaborate. This module is a must.</p>
          <p className={styles.link}>Repo: https://github.com/swcarpentry/git-novice</p>
          <p className={styles.link}>Webpage: https://github.com/swcarpentry/git-novice</p>
          <p className={styles.link}>Video: https://github.com/swcarpentry/git-novice</p>
        </div>
      </div>
    </div>
   </>
  )
}

export default YamlContent


 // <div>
    //   {/* displaying the details of first module in input yaml file  */}
    //   <h1>{data[0].name}</h1>
    //   <h3>Repository : {data[0].repository}</h3>
    //   <h3>Web-page : {data[0].webpage}</h3>
    //   <h4>Description : {data[0].description}</h4>
    //   <h4>Video : {data[0].video}</h4>
    // </div>