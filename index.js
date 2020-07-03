function saturdayFun(act="roller-skate") {
return "This Saturday, I want to "+act+"!"
}
let mondayWork = function(act="go to the office"){
    return "This Monday, I will "+ act+"."
}

let wrapAdjective = function (flair="*"){
    return function(param="special"){
        return `You are ${flair}${param}${flair}!`

    }
}

let Calculator = {
    add: function(num1,num2){
        return num1 + num2
    },
    subtract: function(num1,num2){
        return num1 - num2
    },
    multiply: function(num1,num2){
        return num1 * num2
    },
    divide: function(num1,num2){
        return num1 / num2
    }
}
function actionApplyer(int,arr){
    
    for (let i=0; i< arr.length; i++){
        int = arr[i](int)
    }
    
    return int

}
