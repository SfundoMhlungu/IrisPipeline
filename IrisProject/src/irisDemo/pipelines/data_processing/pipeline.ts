import {createNode, createPipeline} from "kedrojs"
import {loadIrisData, finalPreprocess} from "./nodes"

export function create_data_processing_pl(){
  return createPipeline([
 
    createNode({
      func: loadIrisData, 
      inputs:["iris_dataset"],
      outputs: ["samples"],
      name: "load_irisData_node"
    }),
    createNode({
      func: finalPreprocess,
      inputs: ["samples"],
      outputs: ["data", "response"],
      name:"final_precocess_node"
    })
  ])
}

// used to read the correct parameters yml file under base\parameters
create_data_processing_pl.prototype.meta = function(){
  return {name: "data_processing"}
}
