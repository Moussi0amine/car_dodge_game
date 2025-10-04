const gameArea = document.getElementById("gameArea");
const player = document.getElementById("player");
const startScreen = document.getElementById("startScreen");

let gameRunning = false;
let keys = { ArrowLeft: false, ArrowRight: false };
let playerPosition = 175;
let enemies = [];
let speed = 5;
let score = 0;

// Key controls
document.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !gameRunning) startGame();
    if (keys.hasOwnProperty(e.key)) keys[e.key] = true;
});

document.addEventListener("keydown", (e) =>{
    if (keys.hasOwnProperty(e.key)) keys[e.key] = false;
});

function startGame() {
    startScreen.style.display = "none";
    gameRunning = true;
    score = 0;
    enemies = [];
    playerPosition = 175;
    player.style.left = playerPosition + "px";
    gameArea.appendChild(player);
    spawnEnemis();
    window.requestAnimationFrame(gameLoop);
}

function spawnEnemis() {
    for (let i = 0; i < 3; i++){
        let enemy = documen.createElement("div");
        enemy.classList.add("enemy");
        resetEnemy(enemy);
        gameArea.appendChild(enemy);
        enemies.push(enemy);
    }
}

function resetEnemy(enemy) {
    enemy.style.top = Math.random() * -300 + "px";
    enemy.style.left = Math.floor(Math.random() * 120 + 40 + "px");
}