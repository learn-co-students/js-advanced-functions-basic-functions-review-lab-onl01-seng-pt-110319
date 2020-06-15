// Your code here

function saturdayFun(activity = 'roller-skate'){
  return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = 'go to the office'){
  return `This Monday, I will ${activity}.`
}

let wrapAdjective = function(visualFlair = '*'){
  return function(adjective = 'special'){
    return `You are ${visualFlair}${adjective}${visualFlair}!`
  }
}
let encouragingPromptFunction = wrapAdjective("!!!")

const Calculator = {
  add: function(a, b) {
    return a + b;
  },
  subtract: function(a, b) {
    return a - b
  },
  multiply: function(a, b) {
    return a * b
  },
  divide: function(a, b) {
    return a / b;
  }
}
let actionApplyer = function(startingInt, arrayOfFunc){
 let start = startingInt
   for (let i = 0; i < arrayOfFunc.length; i++ ){
    start = arrayOfFunc[i](start)
  }

  return start

  
}
