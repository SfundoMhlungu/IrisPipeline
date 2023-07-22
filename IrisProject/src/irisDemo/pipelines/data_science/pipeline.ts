import { createNode } from 'kedrojs';
import { createPipeline } from 'kedrojs';
import {splitData, KNNclassifier, Predict, AUC} from "./nodes"



export function create_data_science_pl(){
      return createPipeline([

        createNode({
            func: splitData,
            inputs: ["data", "response", "parameters:model_options"],
            outputs: ["X_train", "X_test", "Y_Train", "Y_test"],
            name: "train_test_split_node"
        }),
        createNode({
          func: KNNclassifier,
          inputs: ["X_train", "Y_Train"],
          outputs: ["model"],
          name: "KNNclassifier_node"
        }),
        createNode({
          func: Predict,
          inputs: ["X_test", "Y_test", "model"],
          outputs: ["y_pred"],
          name: "predict&evalnode"
        }),
        createNode({
          func: AUC,
          inputs: ['y_pred', 'Y_test'],
          name: "AUC_node"
        })
      ])

}


create_data_science_pl.prototype.meta = function(){
    return {name: "data_science"}
}
