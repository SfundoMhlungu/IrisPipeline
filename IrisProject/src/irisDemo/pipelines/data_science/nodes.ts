import  {Scikit1D, Scikit2D, trainTestSplit, GaussianNB, setBackend, KNeighborsRegressor, metrics, fromObject, fromJSON} from 'scikitjs'

import * as tf from '@tensorflow/tfjs'
import { Tensor1D } from '@tensorflow/tfjs'
setBackend(tf)



export function splitData(samples:(string | number)[][], response: Array<number | string | undefined>, parameters: Record<any, any>){
  
   
// console.log(samples.length)
const columns = {X: samples.shift(), Y: response.shift()}
// console.log(columns)
// console.log(samples[150], response[150], samples.length)

const [X_train, X_test, Y_Train, Y_test] = trainTestSplit(samples as any as Scikit2D, response as any as Scikit1D, parameters["test_size"])

// console.log(X_test, Y_test, "Test daata")
return [X_train, X_test, Y_Train, Y_test]

}


export function KNNclassifier(X_train:Scikit2D, Y_train:Scikit1D){
    const clf = new KNeighborsRegressor({nNeighbors:5})
    return clf.fit(X_train, Y_train)


      
}


export async function Predict(X_test:Scikit2D, y_test:Scikit1D, model:Promise<KNeighborsRegressor>) {
    const y_pred: Tensor1D = await (await model).predict(X_test) 


   return y_pred
}


export async function AUC(y_pred: Promise<Tensor1D>, y_test: Scikit1D){
     const predection:Scikit1D = await y_pred as any as Scikit1D
     
    
     console.log("\t\tAccuracy: ", metrics.accuracyScore(y_test, predection))
     console.log("\t\tRecall :" ,metrics.accuracyScore(y_test, predection))
     console.log("\t\tPrecision :" ,metrics.precisionScore(y_test, predection))
     console.log("\t\tConfusion Matrix", metrics.confusionMatrix(y_test, predection))

     console.log("           ")

     console.log("\t\trocAUC score", metrics.rocAucScore(y_test, predection))
    
}



