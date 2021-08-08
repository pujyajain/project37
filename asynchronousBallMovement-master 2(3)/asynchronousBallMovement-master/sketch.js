var canvas, backgroundImage;

var gameState = 0;
var contestantCount;
var allcontestants;
var answer = 2;
var database;

var question, contestant, quiz;


function setup(){
  canvas = createCanvas(900,900);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink")
  if(contestantCount === 2){
    quiz.update(1);
  }
  if(gameState === 1){
    clear();
    quiz.play();
  }
}