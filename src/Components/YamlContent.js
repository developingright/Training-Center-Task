import React from "react";
import preval from "babel-plugin-preval/macro";
import * as styles from '../styles/grid.module.css';
import * as filterstyle from '../styles/filter.module.css';
import Module from './Module.js';
import { useState } from "react";

//importing js-yaml
const YAML = require("js-yaml");

//using babel preval to load yaml file
const raw = preval`const fs = require('fs');
module.exports = fs.readFileSync(require.resolve('../data/training-modules.yaml'), 'utf8');`;

//using js-yaml for converting yaml into json format for parsing
const module_data = YAML.load(raw);

const raw_curricula = preval`const fs = require('fs');
module.exports = fs.readFileSync(require.resolve('../data/curriculum.yaml'), 'utf8');`;

const curricula_data = YAML.load(raw_curricula);

const Status = (props) => {
  const onSelectValueChanged = (event) =>{
    props.filterValueSelected(event.target.value);
  }
  return(
    <>
      <h4>Status</h4>
      <select className={filterstyle.dropdown} id="dropdown" onChange={onSelectValueChanged} defaultValue="none">
        <option value="none" >none</option>
        <option value="stable" >stable</option>
        <option value="alpha" >alpha</option>
        <option value="beta">beta</option>
      </select>
    </>
  )
}

const Curriculum = (props) => {
  const onCurriculaValueChanged = (event) =>{
    props.curriculaValueSelected(event.target.value);
  }
  return(
    <div className={styles.curriculum}>
      <h4>Curriculum: </h4>
      <select className={filterstyle.dropdown} id="dropdown" onChange={onCurriculaValueChanged} defaultValue="none">
        {props.curriculum.map( obj => <option value={obj.curricula} >{obj.curricula}</option> )};
      </select>
    </div>
  )
}

const Video = (props) => {
  const onCheckValueChanged = () =>{
    let checked = document.getElementById("video").checked;
    props.checkValueSelected(checked);
  }
  return(
    <>
      <h4>Video</h4>
      <input type="checkbox" id="video" className={filterstyle.checkbox} onChange={onCheckValueChanged}/>
    </>
  )
}

const Filters = (props) => {
  return(
    <div className={filterstyle.filter}>
      <h3>Filters: </h3>
      <Status filterValueSelected = {props.filterValueSelected} />
      <Video checkValueSelected = {props.checkValueSelected}/>
    </div>
  )
}


const YamlContent = () => {
  
  let [selectTextValue, updateSelectText] = useState('none');
  let [checkValue, updateCheckValue] = useState(false);
  let [curriculaValue, updateCurriculaValue] = useState('All');
  
  //Categorising the modules based on their curricula and output - selectedCurriculaList

  let selectedCurriculaList = [];
  if (curriculaValue ==='All' ){
    selectedCurriculaList = module_data;
  }
  else{
    let curricula_list = curricula_data.filter((obj)=> obj.curricula === curriculaValue);
    let test = curricula_list[0].name_list;
    for(let i = 0 ; i < test.length ; i++)
      selectedCurriculaList.push(...module_data.filter((obj)=> obj.name === test[i]))
    }
  
  
  
  //filtering the selectedCurriculaList list based on the status attribute and output - selectFilteredList
  
  let selectFilteredList = selectedCurriculaList.filter((obj) => {
    if(selectTextValue === "none"){
      return obj;
    }
    else{
      return obj.status === selectTextValue;
    }
  })

  //filtering the selectFilteredList based on video attribute and output - finalFilteredList 

  let finalFilteredList = selectFilteredList.filter((obj) => {
    if(checkValue){
      return obj.videos !== ''
    }
    else{
      return obj
    }
  })

  const onCheckValueSelected = (checked) =>{
    updateCheckValue(checked);
  }

  const onSelectValueSelected = (filterValue) => {
    updateSelectText(filterValue);
  }
  const onCurriculaValueSelected = (curriculaValue) =>{
    updateCurriculaValue(curriculaValue);
  }

  
  return(
    <>
      <div className={styles.container}>

      <Curriculum curriculum = {curricula_data} curriculaValueSelected={onCurriculaValueSelected} />

        {/* Filter options for training module */}
        <Filters filterValueSelected = {onSelectValueSelected} checkValueSelected = {onCheckValueSelected} />

        <div className={styles.flex_row}>

          {/* Displaying the content of each training module in yaml file through finalFilteredList */}
          {finalFilteredList.map(module => 
            <Module 
              title = {module.name} 
              desc = {module.description} 
              repo = {module.repository}
              webpage = {module.webpage}
              video = {module.videos}
              key = {module.name}
              status = {module.status}
            />
            )
          }
        </div>
      </div>
   </>
  )
}

export default YamlContent