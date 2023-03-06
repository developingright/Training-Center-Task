import React from "react";
import preval from "babel-plugin-preval/macro";
import * as styles from '../styles/grid.module.css';
import Module from './Module.js';

//importing js-yaml
const YAML = require("js-yaml");

//using babel preval to load yaml file
const raw = preval`const fs = require('fs');
module.exports = fs.readFileSync(require.resolve('../data/training-modules.yaml'), 'utf8');`;

//using js-yaml for converting yaml into json format for parsing
const module_data = YAML.load(raw);

const YamlContent = () => {
  return(
    <>
    <div className={styles.container}>
      <div className={styles.flex_row}>

        {/* Displaying the content of each training module in yaml file */}
        
        {module_data.map(module => 
          <Module 
            title = {module.name} 
            desc = {module.description} 
            repo = {module.repository}
            webpage = {module.webpage}
            video = {module.videos}
          />
          )
        }
      </div>
    </div>
   </>
  )
}

export default YamlContent