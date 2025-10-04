const gameArea = document.getElementById("gameArea");
const player = document.getElementById("player");
const startScreen = document.getElementById("startScreen");

let gameRunning = false;
let keys = { ArrowLeft: false, ArrowRight: false };
let playerPosition = 175;
let enemies = [];
let speed = 5;
let score = 0;
