let gameManager = {
    setGameStart: function (classType) {
        this.resetPlayer(classType);
        this.setPreFight();

    },
    resetPlayer: function (classType) {
        switch (classType) {
            case "Warrior":
                player = new Player(classType, 250, 150, 0, 50, 100);
                break;

            case "Assassin":
                player = new Player(classType, 100, 75, 100, 150, 10);
                break;

            case "Hunter":
                player = new Player(classType, 250, 150, 0, 50, 50);
                break;
            default:

        }

        let getUI = document.querySelector(".UI");
        getUI.innerHTML = '<img src="assets/images/' +
            classType.toLowerCase() + '.png" class="img-avatar"><div><h3>'

            + classType + '</h3> <p>Health: ' + player.health + '</p><p>Power: ' + player.power +

            '</p><p> agility: ' + player.agility + '</p><p>Speed: ' + player.speed +

            '</p><p>Defence: ' + player.defence + '</p> </div>';

    },

    setPreFight: function () {
        let getTitle = document.querySelector(".title");
        let getActions = document.querySelector(".actions");
        let getArena = document.querySelector(".arena");

        getTitle.innerHTML = '<p>Task: Find an enemy </p>';
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="GameManager.setFight()">Search for an enemy! </a>';
        getArena.style.visibility = "visible";
    },

    setFight: function () {
        let getTitle = document.querySelector(".title");
        let getActions = document.querySelector(".actions");
        let getEnemy = document.querySelector(".enemy");
        // create enemy
        let enemy00 = new Enemy("Sith", 100, 0, 50, 100, 50);
        let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(2));
        switch (chooseRandomEnemy) {
            case 0:
                enemy = enemy00;
                break;
                // case 1:
                //     enemy = enemy01
                //     break;
        }
        
        getTitle.innerHTML = '<p> Task: attac your enemy </p>';
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick=PlayerMoves.calAttack()".setFight()">attack!!! </a>';
        getEnemy.innerHTML = '<img src="img/assets/images' + enemy.enemyType.toLowerCase() + '.png" alt="' + enemy.enemyType + class
    }

}


let getUI = document.querySelector(".UI");
        getUI.innerHTML = '<img src="assets/images/' +
            classType.toLowerCase() + '.png" class="img-avatar"><div><h3>'

            + classType + '</h3> <p>Health: ' + player.health + '</p><p>Power: ' + player.power +

            '</p><p> agility: ' + player.agility + '</p><p>Speed: ' + player.speed +

            '</p><p>Defence: ' + player.defence + '</p> </div>';