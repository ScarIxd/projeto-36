var canvas;
var backgroundImage;
var bgImg;
var database;
var form, game, player;
var playercount, gamestate;

function preload() {
  backgroundImage = loadImage("./assets/planodefundo.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

}

function draw() {
  background(backgroundImage);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
