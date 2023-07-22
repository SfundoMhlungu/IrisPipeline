







const map:Record<string, any> = {
    '"Setosa"\r': 1,
    '"Versicolor"\r': 2,
    '"Virginica"\r': 3,

}

export function loadIrisData(data:Array<Array<number | string>>): Array<Array<number | string>>{

    // const data = iris_dataset.split("\n")
    // const columns = data.shift()
    // data.shift()

    // const samples = data.map((row)=> {
    //     return [
    //                ...row.split(",").map((col)=> {
    //                 if(Number(col)){
    //                     return Number(col)
    //                 }else{
    //                     return map[col]
    //                 }
    //                })
    
    
    //            ]
    // })
    // samples.unshift(columns)
    // console.log(samples, "samples")
    return data
}


export function finalPreprocess(samples:Array<Array<number | string>>){
    const response: Array<number | string | undefined> = []
    const columns = samples.shift()
    // console.log(columns)
    samples.forEach(arr => {
            response.push(map[arr.pop()!])
    })
    response.unshift(columns?.pop())
    if(columns)
      samples.unshift(columns)
//    console.log(samples, response)
    return [samples, response]
}



