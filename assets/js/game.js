var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);


// enemy stats
var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

// Creating Function by assigning it to a variable
var fight = function() {

    // alerts players of the start of the round
  window.alert("Welcome to Robot Gladiators!");
  // subtracts the value of 'playerAttack' from the value of 'enenemyHealth' and use that result to update the value in the 'enemyHealth' variable
    enemyHealth = enemyHealth - playerAttack;
  // Log a resulting message to the console so we know that it worked
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );
  // Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable.
    playerHealth = playerHealth - enemyAttack;
  // Log a resulting message to the console so we know that it worked.
    console.log(

    );
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
    }
    else {
      window.alert(playerName + " still had " + playerHealth + " health left.");
    }
};



// check enemy's health
if (enemyHealth <= 0){
  window.alert(enemyName + " has died!");
}
else {
  window.alert(enemyName + " still has " + enemyHealth + " health left.")
}


// Executing Function
fight();