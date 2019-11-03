var characterSelected = false;

// Has the user selected the defender
var defenderSelected = false;

// Variable to store the user's chosen character
var character = {};

// Variable to store the chosen enemy
var defender = {};

// Number of enemies defeated
var enemiesDefeated = 0;

// Boolean to indicate whether or not the game is over
gameOver = false;

// ----- Character Objects ----- //

var lukeSkywalker = {
  name: "Luke Skywalker",
  health: 130,
  baseAttack: 8,
  attack: 8
};

var V = {
  name: "V",
  health: 150,
  baseAttack: 5,
  attack: 5
};

var captianPrice = {
  name: "Captian Price",
  health: 100,
  baseAttack: 20,
  attack: 20
};

var Johnny = {
  name: "Johnny Silverhand",
  health: 180,
  baseAttack: 25,
  attack: 25
};

// ----- Helper Functions ----- //

// This function will initialize the character value from the global object variables defined above
function initializeCharacter(chosenCharacter) {
  character.name = chosenCharacter.name;
  character.health = chosenCharacter.health;
  character.baseAttack = chosenCharacter.baseAttack;
  character.attack = chosenCharacter.attack;
}

// This function will initialize the enemy's value from the global object variables defined above
function initializeDefender(chosenDefender) {
  defender.name = chosenDefender.name;
  defender.health = chosenDefender.health;
  defender.baseAttack = chosenDefender.baseAttack;
  defender.attack = chosenDefender.attack;
}

// This function will move the remaining characters to the enemies section
function moveToEnemies() {
  $(".available-character").removeClass("available-character").addClass("enemy-character");
  $("#enemies-available").append($(".enemy-character"));
}


function resetGame() {
  
  $("#luke-Skywalker").children(".health").html(lukeSkywalker.health);
  $("#V").children(".health").html(V.health);
  $("#captian-Price").children(".health").html(captianPrice.health);
  $("#Johnny").children(".health").html(Johnny.health);

  $(".character-image").removeClass("chosen-character enemy-character defender-character").addClass("available-character");
  var available = $(".available-character").show();
  $("#characters-available").html(available);

  $("#game-message").empty();
  $("#restart").hide();

  characterSelected = false;
  defenderSelected = false;
  enemiesDefeated = 0;
  gameOver = false;

  character = {};
  defender = {};
}

// ----- Main Routine ----- //

// Run Javascript when the HTML has finished loading
$(document).ready(function() {

  // Determine which character the user has clicked
  $("#luke-Skywalker").on("click", function () {
    console.log("Luke Skywalker is selected");

    // User is choosing the character
    if(characterSelected == false) {
      $("#game-message").empty();

      // Set the user's character
      initializeCharacter(lukeSkywalker);
      characterSelected = true;

      // Display the chosen character
      $("#luke-Skywalker").removeClass("available-character").addClass("chosen-character");
      $("#chosen-character").append(this);

      // Move the remaining characters to the enemies section
      moveToEnemies();
    } else if ((characterSelected == true) && (defenderSelected == false)) {
      // User is choosing the defender
      if($("#luke-Skywalker").hasClass("enemy-character")) {
        $("#game-message").empty();

        // Set the user's enemy
        initializeDefender(lukeSkywalker);
        defenderSelected = true;

        // Add the character to the defender section
        $("#luke-Skywalker").removeClass("enemy-character").addClass("defender-character");
        $("#defender-section").append(this);
      }
    }
  });

  $("#V").on("click", function () {
    console.log("V is selected");

    
    if(characterSelected == false) {
      $("#game-message").empty();

      
      initializeCharacter(V);
      characterSelected = true;

      
      $("#V").removeClass("available-character").addClass("chosen-character");
      $("#chosen-character").append(this);

      
      moveToEnemies();
    } else if ((characterSelected == true) && (defenderSelected == false)) {
      
      if($("#V").hasClass("enemy-character")) {
        $("#game-message").empty();

        
        initializeDefender(V);
        defenderSelected = true;

         
        $("#V").removeClass("enemy-character").addClass("defender-character");
        $("#defender-section").append(this);
      }
    }
  });

  $("#captian-Price").on("click", function () {
    console.log("Captian Price is selected");

    
    if(characterSelected == false) {
      $("#game-message").empty();

      
      initializeCharacter(captianPrice);
      characterSelected = true;

      
      $("#captian-Price").removeClass("available-character").addClass("chosen-character");
      $("#chosen-character").append(this);

      
      moveToEnemies();
    } else if ((characterSelected == true) && (defenderSelected == false)) {
      
      if($("#captian-Price").hasClass("enemy-character")) {
        $("#game-message").empty();

        
        initializeDefender(captianPrice);
        defenderSelected = true;

        // Add the character to the defender section 
        $("#captian-Price").removeClass("enemy-character").addClass("defender-character");
        $("#defender-section").append(this);
      }
    }
  });

//   $("#Johnny").on("click", function () {
//     console.log("Keannu Reeves is selected");

//     // User is choosing the character
//     if(characterSelected == false) {
//       $("#game-message").empty();

//       // Set the user's character
//       initializeCharacter(Johnny);
//       characterSelected = true;

//       // Display the chosen character
//       $("#Johnny").removeClass("available-character").addClass("chosen-character");
//       $("#chosen-character").append(this);

//       // Move the remaining characters to the enemies section
//       moveToEnemies();
//     } else if ((characterSelected == true) && (defenderSelected == false)) {
//       // User is choosing the defender
//       if($("Johnny").hasClass("enemy-character")) {
//         $("#game-message").empty();

//         // Set the user's enemy
//         initializeDefender(Johnny);
//         defenderSelected = true;

//         // Add the character to the defender section 
//         $("#Johnny").removeClass("enemy-character").addClass("defender-character");
//         $("#defender-section").append(this);
//       }
//     }
//   });

  $("#attack").on("click", function() {
    console.log("Attack selected");

    console.log("character = " + JSON.stringify(character));
    console.log("defender = " + JSON.stringify(defender));

    // User is ready to attack the defender
    if (characterSelected && defenderSelected && !gameOver) {
      // User attacks the defender and decreases the defender's health points
      defender.health = defender.health - character.attack;
      $(".defender-character").children(".health").html(defender.health);
      $("#game-message").html("<p>You attacked " + defender.name + " for " + character.attack + " damage.<p>");

      // User's attack power increases
      character.attack = character.attack + character.baseAttack;

      // If defender is still alive, they counter attack the user
      if (defender.health > 0) {
        character.health = character.health - defender.baseAttack;
        $(".chosen-character").children(".health").html(character.health);

        // Check if the user survives the attack
        if (character.health > 0) {
          $("#game-message").append("<p>" + defender.name + " attacked you back for " + defender.baseAttack + " damage.</p>");
        } else {
          gameOver = true;
          $("#game-message").html("<p>You were defeated... womp womp...</p><p>Play again?</p>");
          $("#restart").show();
        }
      } else {
        // Defender is defeated
        enemiesDefeated++;
        defenderSelected = false;
        $("#game-message").html("<p>You have defeated " + defender.name + ". Choose another enemy.</p>");
        $(".defender-character").hide();

        // Check if the user has won the game
        if (enemiesDefeated === 2) {
          gameOver = true;
          $("#game-message").html("<p>You have won the game!!!</p><p>Play again?</p>");
        }
      }
    } else if (!characterSelected && !gameOver) {
      $("#game-message").html("<p>You must first select your game character.</p>");
    } else if (!defenderSelected && !gameOver) {
      $("#game-message").html("<p>You must choose an enemy to fight.</p>");
    }

  });

});
