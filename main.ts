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
        choices: ["Pant shirt","Shalwar kameez","Coat pent","Shorts & sleeveless shirts"]
    }
]);

if(national_Dress.dress === "Shalwar kameez"){
    console.log(`Yes you are right.`)
} else {
    console.log("Try again :)")
}

let national_Leader = await inquirer.prompt([
    {
        name: "leader",
        type: "list",
        message: "Who is National leader of Pakistan?",
        choices: ["Liaquat Ali Khan","Allama Muhammad Iqbal","Quaid-e-Azam(Muhammad Ali Jinnah)","Muhammad Ali Johar"]
    }
]);

if(national_Leader.leader === "Quaid-e-Azam(Muhammad Ali Jinnah)"){
    console.log(`Yes you are right.`);
} else {
    console.log("Try again :)");
}

let national_Animal = await inquirer.prompt([
    {
        name: "animal",
        type: "list",
        message: "What is the National animal of Pakistan?",
        choices: ["Cow","Goat","Horses","Markhor"]
    }
]);

if(national_Animal.animal === "Markhor"){
    console.log(`Yes you are right.`)
} else {
    console.log("Try again :)")
};

let national_Drink = await inquirer.prompt([
    {
        name: "drink",
        type: "list",
        message: "What is the National drink of Pakistan?",
        choices: ["Sugar cane juice","Sattu","Doodh soda","Lasi"]
    }
]);

if(national_Drink.drink === "Sugar cane juice"){
    console.log(`Yes you are right.`)
} else {
    console.log("Try again :)")
};

let national_Vegetable = await inquirer.prompt([
    {
        name: "vegetable",
        type: "list",
        message: "What is the National vegetable of Pakistan?",
        choices: ["Potato","Tomato","Laddy finger","Corrot"]
    }
]);

if(national_Vegetable.vegetable === "Laddy finger"){
    console.log(`Yes you are right.`)
} else {
    console.log("Try again :)")
};

let national_Fruit = await inquirer.prompt([
    {
        name: "fruit",
        message: "what is the National fruit of Pakistan?",
        type: "list",
        choices: ["Strawberry","Water melon","Mango","Banana"]
    }
]);

if(national_Fruit.fruit === "Mango"){
    console.log(`Yes you are right.`)
} else {
    console.log("Try again :)")
};

let national_Dish = await inquirer.prompt([
    {
        name: "dish",
        type: "list",
        message: "What is the national dish of Pakistan?",
        choices: ["Biryani","Nihari","Pulao","Payye"]
    }
]);

if(national_Dish.dish === "Nihari"){
    console.log(`Yes you are right.`)
} else {
    console.log("Try again :)")
};

let national_Language = await inquirer.prompt([
    {
        name: "language",
        message: "What is the national language of Pakistan?",
        type: "list",
        choices: ["English","Urdu","Bangla","Hindi"]
    }
]);

if(national_Language.language === "Urdu"){
    console.log(`Yes you are right.`)
} else {
    console.log("Try again :)")
};

let national_Flower = await inquirer.prompt([
    {
        name: "flower",
        type: "list",
        message: "What is the national flower of Pakistan?",
        choices: ["Rose","Lily","Marie Gold","Jasmine"]
    }
]);

if(national_Flower.flower === "Jasmine"){
    console.log(`Yes you are right.`)
} else {
    console.log("Try again :)")
};

let national_Mosque = await inquirer.prompt([
    {
        name: "mosque",
        type: "list",
        message: "What is the National mosque of Pakistan?",
        choices: ["Badshahi Mosque","Faisal Mosque","Shah jahan Mosque","Wazir khan Mosque"]
    }
]);

if(national_Mosque.mosque === "Faisal Mosque"){
    console.log(`Yes you are right.`)
} else {
    console.log("Try again :)")
};