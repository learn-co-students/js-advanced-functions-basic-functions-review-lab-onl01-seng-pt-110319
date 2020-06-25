const saturdayFun = (activity = "roller-skate") => {
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = (activity = "go to the office") => {
    return `This Monday, I will ${activity}.`
}

const wrapAdjective = (flair = "*") => {
    return function(adjective = "special") {
        return `You are ${flair}${adjective}${flair}!`
    }
}

const Calculator = {
    add: (num1, num2) => {
        return num1 + num2 
    },
    subtract: (num1, num2) => {
        return num1 - num2
    },
    multiply: (num1, num2) => {
        return num1 * num2
    },
    divide: (num1, num2) => {
        return num1 / num2
    },
};

const actionApplyer = (startingInt, arrayOfFunctions) => {
    let a = startingInt
    
    for (let i = 0; i < arrayOfFunctions.length; i++){
        a = arrayOfFunctions[i](a)
        console.log(a);
    }
    
    return a
}
