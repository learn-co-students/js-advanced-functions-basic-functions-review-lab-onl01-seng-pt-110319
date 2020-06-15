// Your code here
function saturdayFun(arg="roller-skate") {
    return `This Saturday, I want to ${arg}!`
}


function mondayWork(arg="go to the office") {
    return `This Monday, I will ${arg}.`
}

function wrapAdjective(string="*") {
    return function(arg="special") {
        return `You are ${string}${arg}${string}!`
    }
}


let Calculator = new Object() 
    Calculator.add = function add() { return 1+3}
    Calculator.subtract = function subtract() { return 6 - 8 }
    Calculator.multiply = function multiply() { return 3 * 1 }
    Calculator.divide = function divide() { return 10 / 5 }

    function actionApplyer (integer, array) {
        // console.log(array)
        // if (array.length === 0) 
        // return integer 
        // else if (array.length === 12)
        // array.map(integer)
        // return array.slice(0,3)

        let a = integer
        let i;
        for (i = 0; i < array.length; i++) {
            a = array[i](a)
        }
        return a 
    }


