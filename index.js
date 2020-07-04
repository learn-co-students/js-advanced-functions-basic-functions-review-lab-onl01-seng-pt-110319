// Your code here

// First Challenge
function saturdayFun (activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

// Second Challenge
function mondayWork (activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

// Third Challenge
function wrapAdjective (flair = "*") {
    return (desc = "special") => `You are ${flair}${desc}${flair}!`
}

const Calculator = {
    add: () => 1 + 3,
    subtract: () => 1 - 3,
    multiply: () => 1 * 3,
    divide: () => 10 / 5
};

function actionApplyer (integer, arrayOfFunctions) {
    if (arrayOfFunctions.length === 0) {
        return integer;
    } else {
         arrayOfFunctions.forEach(func => integer = func(integer));
         return integer;
    }
}