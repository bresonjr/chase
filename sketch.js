const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var players;
var police;
var terrorist1,terrorist2;
var weapons;
var obstacles;
var background1;
var background2;
var form, player, game;
function preload(){
    weapons=loadImage("weapon/123.png","weapon/shot.png","weapon/weapon.png","weapon/weapon1.png","weapon/shot1_2.png","weapon/shot1_4.png");
    pjump=loadImage("pJump/1.png","pJump/2.png","pJump/3.png","pJump/4.png","pJump/5.png","pJump/6.png");
    pRun=loadImage("pRun/1.png","pRun/2.png","pRun/3.png","pRun/4.png","pRun/5.png");
    pHurt=loadImage("pHurt/1.png","pHurt/2.png","pHurt/3.png","pHurt/4.png","pHurt/5.png");
    pAttack=loadImage("pAttack/1.png","pAttack/2.png");
    tRun=loadImage("tRun/1.png","tRun/2.png","tRun/3.png","tRun/4.png","tRun/5.png");
    t2Run=loadImage("t2Run/1.png","t2Run/2.png","t2Run/3.png","t2Run/4.png","t2Run/5.png");



}
function setup(){
  var  canvas = createCanvas(displayWidth - 20, displayHeight-30);
    engine = Engine.create();
    world = engine.world;
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();

}
function draw(){
    background(255);
    Engine.update(engine);
   
        if(playerCount === 3){
          game.update(1);
        }
        if(gameState === 1){
          clear();
          game.play();
        }
        if(gameState === 2){
          game.end();
        }
      }
