// Your code here
function saturdayFun(message="roller-skate") {
    return `This Saturday, I want to ${message}!`
}

function mondayWork(work="go to the office") {
    return `This Monday, I will ${work}.`
}

function wrapAdjective(highlight="*") {
    return function(adjective) {
        return `You are ${highlight}${adjective}${highlight}!`
    }
}

const Calculator = {
    add: function(a,b) {
      return a + b;
    },
    subtract: function(a,b) {
        return a - b
      },
      multiply: function(a,b) {
        return a * b
      },
      divide: function(a,b) {
        return a / b;
      }
    }

    let actionApplyer = function(start, ray) {
        let a = start
      
        for (let i = 0; i < ray.length; i++ ){
          a = ray[i](a)
        }
      
        return a
      }