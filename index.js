// Your code here

function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office") {
return `This Monday, I will ${activity}.`
}

function wrapAdjective(string="*") {


    return function(param="special") {
        return `You are ${string}${param}${string}!`
    }
}

wrapAdjective("||")("a dedicated programmer||!")

let Calculator = {
    add: function() {
        return 1 + 3
    },
    subtract: function() {
        return 1 - 3
    },

    multiply: function() {
        return 1 * 3
    },

    divide: function() {
        return 10 / 5
    }
    
}

function actionApplyer(start, ray) {
    let a = start

    for (let i = 0; i < ray.length; i++ ){
      a = ray[i](a)
    }
  
    return a


}
 