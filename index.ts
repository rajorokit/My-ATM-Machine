#! /usr/bin/env node
import inquirer from "inquirer";

let myBalance = 5000;
let myPin = 1234;
console.log("Wellcome Tahira -ATM Machine");

let pinAnswer = await inquirer.prompt([
{
    name: "pin",
    type: "number",
    message: "Enter Your Pin Code:"
}
])
if (pinAnswer.pin === myPin){
    console.log("Pin is Correct,Login successfully!");

    //console.log(`current Amount Balance is ${myBalance}`)

let operationAns = await inquirer.prompt([
    {
        name: "operation",
        type: "list",
        message: "Select an Operation:",
        choices: ["Withdraw Amount", "Check Balance"]
    }
])
if(operationAns.operation === "Withdraw Amount"){
    let amountAns = await inquirer.prompt([
    {
        name: "amount",
        type: "number",
        message: "Enter the amount to withdraw:"
    }
    ])
if (amountAns.amount > myBalance){
    console.log("Insufficient Balance");
}
else {
    myBalance -= amountAns.amount;
    console.log(`${amountAns.amount} Withdraw successfully`);
    console.log(`Your Remaining Balance is: ${myBalance}`);
}
}
else if(operationAns.operation ==="Check Balance"){
    console.log(`Your Account Balance is: ${myBalance}`);
}
}
else {
    console.log("Pin is Incorrect, Try Again!");
}
