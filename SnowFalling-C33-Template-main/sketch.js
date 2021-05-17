var bgImg
var bg

var playerImg
var player1

var player2Img
var player2

var player3Img
var player3
function preload() {
  bgImg = loadImage("snow2.jpg")
  playerImg = loadImage("player1.png")
  player2Img = loadImage("snow4.webp")
  player3Img = loadImage("snow5.webp")
}
function setup() {
  createCanvas(1200,700);
  player1 = createSprite(800,600,50,50)
  player1.addImage(playerImg)
  player1.scale = 0.05

  player2 = createSprite(200,200)
  player2.addImage(player2Img)
  player2.scale = 0.5

  player3 = createSprite(800,200)
  player3.addImage(player3Img)
  player3.scale = 0.4

}

function draw() {
  background(bgImg);  
  drawSprites();
}