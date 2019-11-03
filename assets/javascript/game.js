
//determines if the user has choosen a chacater
var characterSelected = false;

//determines if the user has choosen a enemy.
var defenderSelected = false;

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

function initializeCharacter(chosenCharacter){
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



    $(document).ready(function(){

    $("#luke-Skywalker").on("click", function(){
        console.log("you have choosen Luke Skywalker");

        if(characterSelected == false){
            $("#game-message").empty();

            initializeCharacter(lukeSkywalker);
            characterSelected = true;

            $("#luke-Skywalker").removeClass("avaliable-character").addClass("defender-character");
            $("#defender-section").append(this);


        }else if ((characterSelected == true) && (enemySelected == false)){
            //user chosing a character
            if($("#luke-Skywalker").hasClass("enemy-character").addClass("enemy-character")){
                $("#game-message").empty();

                //set the users enemy
                initializedefender(lukeSkywalker);
                defenderSelected = true;
                $("#luke-Skywalker").removeClass("enemy-character").addClass("defender-character");
                $("#defender-section").append(this);
            }
            
        }
    });

    $("#V").on("click", function(){
        console.log("you have choosen V");

        if(characterSelected == false){
            $("#game-message").empty();

            initializeCharacter(V);
            characterSelected = true;

            $("#V").removeClass("avaliable-character").addClass("defender-character");
            $("#defender-section").append(this);


        }else if ((characterSelected == true) && (enemySelected == false)){
            //user chosing a character
            if($("#V").hasClass("enemy-character").addClass("enemy-character")){
                $("#game-message").empty();

                //set the users enemy
                initializedefender(V);
                defenderSelected = true;
                $("#V").removeClass("enemy-character").addClass("defender-character");
                $("#defender-section").append(this);
            }
            
        }
    });

    $("#captian-Price").on("click", function(){
        console.log("you have choosen V");

        if(characterSelected == false){
            $("#game-message").empty();

            initializeCharacter(V);
            characterSelected = true;

            $("#captian-Price").removeClass("avaliable-character").addClass("defender-character");
            $("#defender-section").append(this);


        }else if ((characterSelected == true) && (enemySelected == false)){
            //user chosing a character
            if($("#captian-Price").hasClass("enemy-character").addClass("enemy-character")){
                $("#game-message").empty();

                //set the users enemy
                initializedefender(captian-Price);
                defenderSelected = true;
                $("#captian-Price").removeClass("enemy-character").addClass("defender-character");
                $("#defender-section").append(this);
            }
            
        }
    });



    $("#Jonney").on("click", function(){
        console.log("you have choosen Jonney");

        if(characterSelected == false){
            $("#game-message").empty();

            initializeCharacter(Jonney);
            characterSelected = true;

            $("#Jonney").removeClass("avaliable-character").addClass("defender-character");
            $("#defender-section").append(this);


        }else if ((characterSelected == true) && (enemySelected == false)){
            //user chosing a character
            if($("#Jonney").hasClass("enemy-character").addClass("enemy-character")){
                $("#game-message").empty();

                //set the users enemy
                initializedefender(V);
                defenderSelected = true;
                $("#Jonney").removeClass("enemy-character").addClass("defender-character");
                $("#defender-section").append(this);
            }
            
        }
    });

});





