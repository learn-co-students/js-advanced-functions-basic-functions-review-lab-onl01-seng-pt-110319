// Your code here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
};

saturdayFun("bathe my dog");

let mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
};

mondayWork("work from home");

function wrapAdjective(flair = "*") {
    return function(adj = "special") {
        return `You are ${flair}${adj}${flair}!`
    }
}

let Calculator = {
    add: function(x, y) {
        return x + y;
    },
    subtract: function(x, y) {
        return x - y
    },
    multiply: function(x, y) {
        return x * y;
    },
    divide: function(x, y) {
        return x / y
    }

}

function actionApplyer(int, arr) {
    for (let i = 0; i < arr.length; i++) {
        int = arr[i](int)
    }
    return int
}