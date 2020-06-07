function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

let mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}

let wrapAdjective = function(type = "*") {
    return function(adj = "special") {
        return `You are ${type}${adj}${type}!`
    }
}

let Calculator = {

    add: function(x, y) {
        return x + y;
    },
    subtract: function(x, y) {
        return x - y;
    },
    multiply: function(x, y) {
        return x * y;
    },
    divide: function(x, y) {
        return x / y;
    }
}

function actionApplyer(int, arr) {
    for (let i = 0; i < arr.length; i++) {
        int = arr[i](int)
    }
    return int
}