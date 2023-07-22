import { CONFIG } from './CONSTANTS';
import { create_data_processing_pl} from "./pipelines/data_processing/pipeline"
import {create_data_science_pl} from "./pipelines/data_science/pipeline"
import { run } from "kedrojs"




const dp = create_data_processing_pl
const ds = create_data_science_pl




const pipelines= {
   "default": [dp,ds],
   "dp": dp,
   "ds":ds
   

}


run(pipelines, CONFIG)
