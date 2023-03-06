import React from "react";
import preval from "babel-plugin-preval/macro";

//importing js-yaml
const YAML = require("js-yaml");

//using babel preval to load yaml file
const raw = preval`const fs = require('fs');
module.exports = fs.readFileSync(require.resolve('../data/training-modules.yaml'), 'utf8');`;

//using js-yaml for converting yaml into json format for parsing
const data = YAML.load(raw);

export default function YamlContent() {
  return (
    <div>
      {/* displaying the details of first module in input yaml file  */}
      <h1>{data[0].name}</h1>
      <h3>Repository : {data[0].repository}</h3>
      <h3>Web-page : {data[0].webpage}</h3>
      <h4>Description : {data[0].description}</h4>
      <h4>Video : {data[0].video}</h4>
    </div>
  );
}
