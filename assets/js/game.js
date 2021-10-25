
//player stats
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack= 10;
var playerMoney = 10;

// contain all names in one spot and enemy stats
var enemyNames = ["roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// create function
var fight = function(enemyName) {
    // alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    var promptFight = window.prompt("would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    // if player choses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
        //remove enemys health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log (
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );

        // check enemys health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        //remove players health by subtracting the amount of enemy attack variable
        playerHealth = playerHealth - enemyAttack;
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health left.");
        
        //check players health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }

        // if player choses to skip
        } else if (promptFight === "skip" || promptFight === "SKIP") {
            // confirm player wants to skip
            var confirmsSkip = window.confirm("are you sure you'd like to quit?");

            //if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                // subtract player money
                playerMoney = playerMoney - 2;
            }
            
            // if no (false), ask the question again by running fight()
            else {
                fight();
            }
        } 
        else {
            window.alert("You need to choose a valid option. Try again!");
        }
    }

    for(var i = 0; i < enemyNames.length; i++) {
        fight(enemyNames[i]);
    }

/*

//you can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);



//display all names
console.log(enemyNames);

//display individual names where the 0 is the first element in the array
console.log(enemyNames [0]);
console.log(enemyNames [1]);
console.log(enemyNames [2]);

//how many objects in the array
console.log(enemyNames.length);

// lists last name in the array
console.log(enemyNames[enemyNames.length -1]);



//loops
// for loop is called a control flow. it is the order in which the computer executes the statements they have conditions
// for([initial expression]; [condition]; [increment expression]) {statement}
//ex of initial expression var = 0;
// ex of condition i < 3; if true this will execute

// Robot enemies
var enemy1 = "Roborto";
var enemy2 = "Amy Android";
var enemy3 = "Robo Trumble";

//function declaration is when you use "function" first
//funtion expression is when you create a function by assigning it to a variable.

// game starts
for(var i = 0; i < enemyNames.length; i++) {
    console.log(enemyNames[i]);
    console.log(i);
    console.log(`${enemyNames[i]}is at ${i} index`);
}

//"win" - player robot has defeated all the enemy robots
//      *fight all enemy robots
//      * defeat all enemy robots
//"lose" - player robots health is zero or less

// create function
var fight = function(enemyName) {
    // alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    var promptFight = window.prompt("would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    // if player choses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
        //remove enemys health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log (
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );

        // check enemys health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        //remove players health by subtracting the amount of enemy attack variable
        playerHealth = playerHealth - enemyAttack;
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health left.");
        
        //check players health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }

        // if player choses to skip
        } else if (promptFight === "skip" || promptFight === "SKIP") {
            // confirm player wants to skip
            var confirmsSkip = window.confirm("are you sure you'd like to quit?");

            //if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                // subtract player money
                playerMoney = playerMoney - 2;
            }
            
            // if no (false), ask the question again by running fight()
            else {
                fight();
            }
        } 
        else {
            window.alert("You need to choose a valid option. Try again!");
        }
    }

    //fight();











    /* hide this code for now 

    //subtract the value of playerAttack from the value of enemyHealth and use that result to update values in the enemyHealth varable
    enemyHealth = enemyHealth - PlayerAttack;

    //log a resulting message to the console so we know that is worked.
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    ); 

    //Subtract the value of enemyattack from the value of playerhealth and us that result to upate the value in the playerhealth variable
    playerHealth = playerHealth - enemyAttack;

    //log a resulting message to the console so we know that it worked.
    console.log(
    enemyName + " attacked " + playerName + ". " +  playerName + " now has " + playerHealth + " health remaining."
    );

    // check player health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }

    // check enemy health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
};

// execute function
fight();

/* 
creates a variable that can be recalled at anypoint for this string
var playerName = window.prompt("What is your robots name?");

// note the lack of quotation marks around playerName
console.log(playerName);

console.log("this logs a string, gor for leaving yourself a message");

// this will do math and log 20
console.log(10 + 10);

// what is this?
console.log("Our robots name is " + playerName);

// this creates a function names "fight"
function fight() {
    window.alert("The fight has begun!");
}


//fight(); */