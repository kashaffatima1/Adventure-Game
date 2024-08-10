import inquirer from "inquirer";
//Enemies Data 
let Enemies = ["Skeleton", "Zombie", "Warrior"];
let maxenemyhealth = 75;
let attackdamagetohero = 25;
//Hero Data
let herohealth = 100;
// let attackdamagetoenemy = 50;
let energypotion = 3;
let enemyhealpotionenergy = 30;
let defeatenemypotionenergy = 50;
//while loop
let gamerunning = true;
console.log("WELCOME TO DEADZONE!");
Game: while (gamerunning) {
    let enemyhealth = Math.floor(Math.random() * maxenemyhealth + 1);
    let enemyindex = Math.floor(Math.random() * Enemies.length);
    let enemy = Enemies[enemyindex];
    console.log(`${enemy} has appeared:`);
    if (enemyhealth > 0) {
        console.log(`Your Health: ${herohealth}`);
        console.log(`Enemy Health: ${enemyhealth}`);
        let option = await inquirer.prompt([
            {
                name: "ans",
                type: "list",
                message: "What would you like to do",
                choices: ["1. Attack", "2. Take Health Portion", "3. Running"],
            }
        ]);
        if (option.ans === "1. Attack") {
            let attackdamagetoenemy = 50;
            let DamageToEnemy = Math.floor(Math.random() * attackdamagetoenemy + 1);
            let DamageTohero = Math.floor(Math.random() * attackdamagetohero + 1);
            enemyhealth -= DamageToEnemy,
                herohealth -= DamageTohero,
                console.log(`You strike the ${enemy} for ${enemyhealth}`);
            console.log(`${enemy} strike you for ${DamageTohero} damage. `);
            if (herohealth < 1) {
                console.log(`You have taken to much damage. you are to weak to continue:`);
                break;
            }
        }
        else if (option.ans === "2. Take Health Portion") {
            if (energypotion > 0) {
                herohealth += enemyhealpotionenergy;
                energypotion--;
                console.log(`You use health portion for ${enemyhealpotionenergy}`);
                console.log(`You now have ${herohealth} health.`);
                console.log(`You have ${energypotion} healthy potion left. `);
            }
            else {
                console.log("You have no health potion left. Defeat enemy for a chance to get health potion");
            }
        }
        else if (option.ans === "3. Running") {
            console.log(`You ran away from ${enemy}`);
            continue Game;
        }
    }
    if (herohealth < 1) {
        console.log(`You are out from battle. you are to weak.`);
        break;
    }
    console.log(`${enemy} was defeated.`);
    console.log(`You have ${herohealth} health.`);
    let randomnumber = Math.floor(Math.random() * 100 + 1);
    if (randomnumber < defeatenemypotionenergy) {
        energypotion++;
        console.log(`Enemy give you health potion.`);
        console.log(`Your health is ${herohealth}.`);
        console.log(`Your health potion is ${energypotion}`);
    }
    let useroption = await inquirer.prompt([
        {
            name: "ans",
            type: "list",
            message: "What would you do now?",
            choices: ["1.Continue", "2.Exit"],
        }
    ]);
    if (useroption.ans === "1.Continue") {
        console.log("You are continue on your adventure.");
    }
    else {
        console.log("You are continue on your adventure.");
        break;
    }
    console.log(`Thank you for playing.\n`);
}
;
