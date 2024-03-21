#! /usr/bin/env node  //SHAbANG
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter FirstNumber:", type: "number", name: "firstnumber" },
    { message: "Enter SecondNumber:", type: "number", name: "secondnumber" },
    { message: "select an operand",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subraction", "Multiplication", "Division"] }
]);
if (answer.operator === "Addition") {
    console.log(answer.firstnumber + answer.secondnumber);
}
else if (answer.operator === "Subraction") {
    console.log(answer.firstnumber - answer.secondnumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstnumber * answer.secondnumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstnumber / answer.secondnumber);
}
else {
    console.log("not operating");
}
