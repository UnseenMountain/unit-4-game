
//determines if the user has choosen a chacater
var hasChossenCharacter = false;

//determines if the user has choosen a enemy.
var enemy = false;

//Stores the choosen character
var character = {};

//Stores the chossen enemy
var enemy = {};

//stores enemys defeated
var enemysDefeated = 0;

gameOver = false;



var luke = {
    name: "Luke Skywalker",
    health: 120,

    attack: 9,
    baseAttack: 9
};

var V = {
    name: "V",
    health: 120,

    attack: 12,
    baseAttack: 12
};

var captianPrice = {
    name: "Captian Price",
    health: 100,

    attack: 10,
    baseAttack: 10
};

var keanuReeves = {
    name: "Keanu Reeves",
    health: 160,

    attack: 15,
    baseAttack: 15
};

function getPlayerValues(chosenCharacter){
    character.name = chosenCharacter.name;
    character.health = chosenCharacter.health;
    character.attack = chosenCharacter.attack;
    character.baseAttack = chosenCharacter.baseAttack;


}

function getEnemyValues(chosenEnemy){
    enemy.name = chosenEnemy.name;
    enemy.health = chosenEnemy.health;
    enemy.attack = chosenEnemy.attack;
    enemy.baseAttack = chosenEnemy.baseAttack;
}

function moveEnemes{
    $(".avalible-character").removeClass("avaliable-character").addClass("enemy-character");
    $("#avilable-enemys").append($(".enemy-character"));
}

function resetGame{
    //gets the player health its children.
    $("#luke-Skywalker").children(".health").html(lukeSkywalker.health);
    $("#V").children(".health").html(V.health);
    $("#captian-Price").children(".health").html(captianPrice.health);
    $("#Jonney").children(".health").html(Jonney.health);

    $(".character-image").removeClass("chosen-character enemy-character defender-character").addClass("available-character");
    var avaliable = $(".avaliable-character").show();
    $("#characters-avaliable").html(avaliable);

    $("#game-message").empty();

    characterSelected = false;
    enemySelsected = false
    enemysDefeated = 0;
    gameOver = false;

    character = {};
    enemy = {};
}

$(document).ready(function(){

    $("#luke-Skywalker").on("click", function(){
        console.log("you have choosen Luke Skywalker");

        if(characterSelected == false){
            $("#game-message").empty();

            initializeCharacter(lukeSkywalker);
            characterSelected = true;

            $("#luke-Skywalker").removeClass("avaliable-character").addClass("defender-character");
            $("#defender-section").append(this);


        }else if(
            
        )
    })
});


