// Your code here
function saturdayFun(arg="roller-skate"){
   return `This Saturday, I want to ${arg}!`; 
}

function mondayWork(arg="go to the office"){
    return `This Monday, I will ${arg}.`
}

function wrapAdjective(x="*"){
    return function(arg="special"){
        return `You are ${x}${arg}${x}!`
    }
}

const Calculator = {
    add: (x, y) => {
        return x + y 
    },
    subtract: (x, y) => {
        return x - y
    },
    multiply: (x, y) => {
        return x * y
    },
    divide: (x, y) => {
        return x / y
    },
};

function actionApplyer(int,arr){
    for (let i = 0; i< arr.length; i++){
        int = arr[i](int) //  array idex of 
    }
    return int
}