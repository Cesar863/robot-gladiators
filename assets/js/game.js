//funtion to generate RNG
var randomNumber = function (min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
};

var fightOrSkip = function() {
  //ask the player if they would like to fight or skip using this function
  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? enter 'FIGHT' or 'SKIP' to choose.");

  

  //conditonal recursive function call
  if (promptFight === "" || promptFight === null) {
    window.alert("You need to provide a valid answer please try again.");
    return fightOrSkip();
  }

  promptFight = promptFight.toLowerCase();
  //if player picks to skip confirm and stop loop
  if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    //if yes leave fight
    if (confirmSkip) {
      window.alert(playerInfo.name + " has decided to skip the fight. Goodbye!");
      // subtract player money but cant go into negative
      playerInfo.playerMoney = Math.max(0, playerInfo.money - 10);

      //return true if player wants to leave
      return true;
    }
  }
}

// fight function (now with parameter for enemy's name)
var fight = function (enemy) {
  while (playerInfo.health > 0 && enemy.health > 0) {

    //ask player if they want to fight or skip
    if (fightOrSkip()) {
      // if true break loop
      break;
    }
    fightOrSkip(); // <-- Replace code with functional call

    // generate random damage value based on players attack power
    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

    enemy.health = Math.max(0, enemy.health - damage);
    console.log(
      playerInfo.name + ' attacked ' + enemy.name + '. ' + enemy.name + ' now has ' + enemy.health + ' health remaining.'
    );

    // check enemy's health
    if (enemy.health <= 0) {
      window.alert(enemy.name + ' has died!');

      // award player money for winning
      playerInfo.money = playerInfo.money + 20;

      // leave while() loop since enemy is dead
      break;
    } else {
      window.alert(enemy.name + ' still has ' + enemy.health + ' health left.');
    }

    // remove players's health by subtracting the amount set in the enemy.attack variable
    var damage = randomNumber(enemy.attack - 3, enemy.attack);

    playerInfo.health = Math.max(0, playerInfo.health - damage);
    console.log(
      enemy.name + ' attacked ' + playerInfo.name + '. ' + playerInfo.name + ' now has ' + playerInfo.health + ' health remaining.'
    );

    // check player's health
    if (playerInfo.health <= 0) {
      window.alert(playerInfo.name + ' has died!');
      // leave while() loop if player is dead
      break;
    } else {
      window.alert(playerInfo.name + ' still has ' + playerInfo.health + ' health left.');
    }
  }
};

//function to set player name
var getPlayerName = function() {
  var name = "";

  //****************************** */
  // ADD LOOP HERE WITH PROMPT AND CONDITION
  //****************************** */
  while (name === "" || name === null) {
    name = prompt("What is your robot's name?");
  }

  console.log("Your robot's name is " + name);
  return name;
};

var playerInfo = {
  name: getPlayerName(),
  health: 100,
  attack: 10,
  money: 10,
  reset: function () {
    this.health = 100;
    this.money = 10;
    this.attack = 10;
  }, // add a comma
  refillHealth: function () {
    if (this.money >= 7) {
      window.alert("Refilling player's health by 20 for 7 dollars.");
      this.health += 20;
      this.money -= 7;
    } else {
      window.alert("You don't have enough money!");
    }
  },
  upgradeAttack: function () {
    this.attack += 6;
    this.money -= 7;
  }
}

var enemyInfo = [{
    name: "roborto",
    attack: randomNumber(10, 14),
  },
  {
    name: "Amy Android",
    attack: randomNumber(10, 14),
  },
  {
    name: "Robo Trumble",
    attack: randomNumber(10, 14),
  }
];

// function to start new game
var startGame = function () {
  // reset player stats
  playerInfo.reset();
  playerInfo.health = 100;
  playerInfo.attack = 10;
  playerInfo.money = 10;


  // fight each enemy-robot by looping over them and fighting them one at a time
  for (var i = 0; i < enemyInfo.length; i++) {
    // if player is still alive, keep fighting
    if (playerInfo.health > 0) {

      // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it

      window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));

      // pick new enemy to fight based on the index of the enemy.names array
      var pickedEnemyObj = enemyInfo[i];

      // reset enemy.health before starting new fight
      pickedEnemyObj.health = randomNumber(40, 60);

      // use debugger to pause script from running and check what's going on at that moment in the code
      // debugger;

      // pass the pickedenemy.name variable's value into the fight function, where it will assume the value of the enemy.name parameter
      fight(pickedEnemyObj);

      // player is still alive and we arent at the last enemy in the array
      if (playerInfo.health > 0 && i < enemyInfo.length - 1) {

        var storeConfirm = window.confirm("The fight is over, visit the store beore the next round?");

        if (storeConfirm) {
          shop();
        }
      }
    }

    // if player isn't alive, stop the game
    else {
      window.alert('You have lost your robot in battle! Game Over!');
      break;
    }
  }

  endGame();
};

//function to end entire game
var endGame = function () {
  window.alert("The game has now ended. Let's see how you did!");

  // if player is still alive, Player wins
  if (playerInfo.health > 0) {
    window.alert("Great job, you've survived the game! You have a score of " + playerInfo.money + ".");
  } else {
    window.alert("You've lost your robot in battle.");
  }

  // ask player if they'd like to play again
  var playAgainConfirm = window.confirm("Would you like to play again?");
  if (playAgainConfirm) {
    // restart the game
    startGame();
  } else {
    window.alert("Thank you for Playing Robot Gladiators! Come back soon!");
  }
};

// go to shop between battles
var shop = function () {
  // ask player what they'd like to do
  var shopOptionPrompt = window.prompt(
    "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? please enter one 1 for 'REFILL', 2 for 'UPGRADE', or 3 for 'LEAVE'"
  );

  //useing switch to cary out an action
  shopOptionPrompt = parseInt(shopOptionPrompt);
  switch (shopOptionPrompt) {
    // using switch to cary our functions
    case 1:
      playerInfo.refillHealth();
      break;
    case 2:
      playerInfo.upgradeAttack();
      break;
    case 3:
      window.alert("Leaving the store.");
      break;
    default:
      window.alert("You did not pick a valid option. Try again.");
      shop();
      break;
  }
};

startGame();