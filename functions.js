/*
const drink = (size, type) =>{
    console.log(`you order of a size ${size} ${type} has been placed`)
}

drink("3","Coke")
//this is a function with two defined values attatched.

const addup = (num1, num2) =>{
    return num1 + num2
}

console.log (addup(7,3333))
//this is an example of a return function, which will return the result of the equation, amongst other things.


const nineFive = (celsius) =>{
    return celsius * (9/5)
}
const getFahrenheit = (celsius) =>{
    return nineFive(celsius) + 32
}
console.log("the current temperature is " +getFahrenheit(15) + "F")
//example of a function calling on another function

let orderCount = 1
const takeOrder = (topping, toppingTwo) =>{
    console.log(`Order ${orderCount}; Pizza with ${topping} and ${toppingTwo}`)
    orderCount++
}
takeOrder("Black Plague","Dead Rats")
takeOrder("the souls of the innocent", "Minecraft damonds")
takeOrder("900 Grilled Pidgeons", "An orphan child who was given a dog, and three months later lost the dog in an industrial fire that, unknown to the child, was started by the dog in order to fake his death and escape to madagascar.")
takeOrder("The tears of a fairy who was kicked in the groin 50 times", "a dead meme")

var correctAccnum = 5588314
var accBal = 30000
const withdrawl = (accnum,withnum) =>{
    if (accnum == correctAccnum && withnum <= accBal){
        accBal = (accBal - withnum)
        console.log(`withdrawing £${withnum} from account: ${accnum}, please wait...
        Thank you, your remaining balance is £${accBal}. have a nice day.`)
    }
    else if (accnum != correctAccnum){
        console.log("the account number entered is incorrect.")
    }
    else if (withnum > accBal){
        console.log("Insufficient funds.")
    }
    }
withdrawl(5588314, 1122)
withdrawl(5588214, 456)
withdrawl(5588314, 9999999999999999)
*/
let orderCount = 1
const takeOrder = (topping, toppingTwo, toppingThree, toppingFour, toppingFive) =>{
    console.log(`Order ${orderCount}; Pizza with ${topping}, ${toppingTwo}, ${toppingThree}, ${toppingFour} and ${toppingFive}`)
    orderCount++
}
takeOrder("Black Plague","Dead Rats", "Dead memes", "Big Smoke's order", "a dead Wasp")