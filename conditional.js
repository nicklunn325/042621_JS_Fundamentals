// TRUTHY vs FALSEY

if(true){           
    console.log(true, "is truthy!")                 //1
} else {
    console.log(true, "is falsey!")
}

if(false){
    console.log(false, "is truthy!")                //2
} else {
    console.log(false, "is falsey!")                    
}

if("Hello World"){
    console.log("Hello World", "is truthy!")        //3
} else {
    console.log("Hello World", "is falsey!")
}

if(""){
    console.log("an empty string", "is truthy!")    //4
} else {
    console.log("an empty string", "is falsey!")
}

if([1,2,3]){
    console.log("An array", "is truthy!")           //5
} else {
    console.log("An array", "is falsey!")
}

if([]){
    console.log("An empty array", "is truthy!")     //6
} else {
    console.log("An empty array", "is falsey!")
}

if({key: "object value"}){
    console.log("An object", "is truthy!")          //7
} else {
    console.log("An object", "is falsey!")
}

if({}){
    console.log("An empty object", "is truthy!")    //8
} else {
    console.log("An empty object", "is falsey!")
}

if(NaN){
    console.log(NaN, "is truthy!")                  //9
} else {
    console.log(NaN, "is falsey!")
}

if(undefined){
    console.log(undefined, "is truthy!")            //10
} else {
    console.log(undefined, "is falsey!")
}

if(null){                                           
    console.log(null, "is truthy!")                 //11
} else {
    console.log(null, "is falsey!")
}

if(123){                                            
    console.log(123, "is truthy!")                  //12
} else {
    console.log(123, "is falsey!")
}

if(0){
    console.log(0, "is truthy!")                    //13
} else {
    console.log(0, "is falsey!")
}