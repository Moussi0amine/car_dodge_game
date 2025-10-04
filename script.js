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

