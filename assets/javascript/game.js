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

var sonic = {
  name: "Sonic the Hedgehog",
  health: 160,
  baseAttack: 20,
  attack: 20
};

var johnnySilverhand = {
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
  $("#Sonic").children(".health").html(sonic.health);
  $("#johnny-Silverhand").children(".health").html(johnnySilverhand.health);

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
$(document).ready(function () {

  // Determine which character the user has clicked
  $("#luke-Skywalker").on("click", function () {
    console.log("Luke Skywalker is selected");

    // User is choosing the character
    if (characterSelected == false) {
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
      if ($("#luke-Skywalker").hasClass("enemy-character")) {
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


    if (characterSelected == false) {
      $("#game-message").empty();


      initializeCharacter(V);
      characterSelected = true;


      $("#V").removeClass("available-character").addClass("chosen-character");
      $("#chosen-character").append(this);


      moveToEnemies();
    } else if ((characterSelected == true) && (defenderSelected == false)) {

      if ($("#V").hasClass("enemy-character")) {
        $("#game-message").empty();


        initializeDefender(V);
        defenderSelected = true;


        $("#V").removeClass("enemy-character").addClass("defender-character");
        $("#defender-section").append(this);
      }
    }
  });

  $("#Sonic").on("click", function () {
    console.log("Sonic is selected");


    if (characterSelected == false) {
      $("#game-message").empty();


      initializeCharacter(sonic);
      characterSelected = true;


      $("#Sonic").removeClass("available-character").addClass("chosen-character");
      $("#chosen-character").append(this);


      moveToEnemies();
    } else if ((characterSelected == true) && (defenderSelected == false)) {

      if ($("#Sonic").hasClass("enemy-character")) {
        $("#game-message").empty();


        initializeDefender(sonic);
        defenderSelected = true;

        // Add the character to the defender section 
        $("#Sonic").removeClass("enemy-character").addClass("defender-character");
        $("#defender-section").append(this);
      }
    }
  });

    $("#johnney-Silverhand").on("click", function () {
      console.log("Keannu Reeves is selected");

      // User is choosing the character
      if(characterSelected == false) {
        $("#game-message").empty();

        // Set the user's character
        initializeCharacter(johnnySilverhand);
        characterSelected = true;

        // Display the chosen character
        $("#johnney-Silverhand").removeClass("available-character").addClass("chosen-character");
        $("#chosen-character").append(this);

        // Move the remaining characters to the enemies section
        moveToEnemies();
      } else if ((characterSelected == true) && (defenderSelected == false)) {
        // User is choosing the defender
        if($("#johnney-Silverhand").hasClass("enemy-character")) {
          $("#game-message").empty();

          // Set the user's enemy
          initializeDefender(johnnySilverhand);
          defenderSelected = true;

          // Add the character to the defender section 
          $("#johnney-Silverhand").removeClass("enemy-character").addClass("defender-character");
          $("#defender-section").append(this);
        }
      }
    });

  $("#attack").on("click", function () {
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
          $("#game-message").html("<p>You were defeated. </p><p>Reset the page to play again?</p>");
          $("#restart").show();
        }
      } else {
        // Defender is defeated
        enemiesDefeated++;
        defenderSelected = false;
        $("#game-message").html("<p>You have defeated " + defender.name + ". Choose another enemy.</p>");
        $(".defender-character").hide();

        // Check if the user has won the game
        if (enemiesDefeated === 3) {
          gameOver = true;
          $("#game-message").html("<p>You have Saved the Multiverse thank you warrior!!!</p><p>Please reset the site to play again?</p>");
        }
      }
    } else if (!characterSelected && !gameOver) {
      $("#game-message").html("<p>You must first select your game character.</p>");
    } else if (!defenderSelected && !gameOver) {
      $("#game-message").html("<p>You must choose an enemy to fight.</p>");
    }

  });

});
