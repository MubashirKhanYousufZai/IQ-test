import inquirer from "inquirer";
console.log("<>".repeat(50));
console.log("Welcome to the IQ test made by Mubashir khan");
console.log("<>".repeat(50));
//National things:
let national_Dress = await inquirer.prompt([
    {
        name: "dress",
        type: "list",
        message: "What is the National dress of Pakistan?",
        choices: ["Pant shirt", "Shalwar kameez", "Coat pent", "Shorts & sleeveless shirts"]
    }
]);
if (national_Dress.dress === "Shalwar kameez") {
    console.log(`Yes you are right.`);
}
else {
    console.log("Try again :)");
}
let national_Leader = await inquirer.prompt([
    {
        name: "leader",
        type: "list",
        message: "Who is National leader of Pakistan?",
        choices: ["Liaquat Ali Khan", "Allama Muhammad Iqbal", "Quaid-e-Azam(Muhammad Ali Jinnah)", "Muhammad Ali Johar"]
    }
]);
if (national_Leader.leader === "Quaid-e-Azam(Muhammad Ali Jinnah)") {
    console.log(`Yes you are right.`);
}
else {
    console.log("Try again :)");
}
let national_Animal = await inquirer.prompt([
    {
        name: "animal",
        type: "list",
        message: "What is the National animal of Pakistan?",
        choices: ["Cow", "Goat", "Horses", "Markhor"]
    }
]);
if (national_Animal.animal === "Markhor") {
    console.log(`Yes you are right.`);
}
else {
    console.log("Try again :)");
}
;
let national_Drink = await inquirer.prompt([
    {
        name: "drink",
        type: "list",
        message: "What is the National drink of Pakistan?",
        choices: ["Sugar cane juice", "Sattu", "Doodh soda", "Lasi"]
    }
]);
if (national_Drink.drink === "Sugar cane juice") {
    console.log(`Yes you are right.`);
}
else {
    console.log("Try again :)");
}
;
let national_Vegetable = await inquirer.prompt([
    {
        name: "vegetable",
        type: "list",
        message: "What is the National vegetable of Pakistan?",
        choices: ["Potato", "Tomato", "Laddy finger", "Corrot"]
    }
]);
if (national_Vegetable.vegetable === "laddy finger") {
    console.log(`Yes you are right.`);
}
else {
    console.log("Try again :)");
}
;
let national_Dish = await inquirer.prompt([
    {
        name: "dish",
        type: "list",
        message: "What is the national dish of Pakistan?",
        choices: ["Biryani", "Nihari", "Pulao", "Payye"]
    }
]);
if (national_Dish.dish === "Nihari") {
    console.log(`Yes you are right.`);
}
else {
    console.log("Try again :)");
}
;
