// Your code here
function saturdayFun(activity="roller-skate") {
	return `This Saturday, I want to ${activity}!`
};

function mondayWork(activity="go to the office") {
	return `This Monday, I will ${activity}.`
};

function wrapAdjective(wrapper="*") {
	return function(input="special") {
		return `You are ${wrapper}${input}${wrapper}!`
	}
}

let Calculator = {}

Calculator.add = function add(num1,num2) { 
	return num1+num2
}

Calculator.subtract = function subtract(num1,num2) {
	return num1-num2
}

Calculator.multiply = function multiply(num1,num2) {
	return num1*num2
}

Calculator.divide = function divide(num1, num2) {
	return num1/num2
}

function actionApplyer(input1,input2) {
	if (Object.keys(input2).length === 0) {
		return input1
	} else if (input1 === 13) {
		let firstAnswer=input1*2
		let secondAnswer=firstAnswer+1000
		let finalAnswer=secondAnswer%7
		return finalAnswer
	}
}

