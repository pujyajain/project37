class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
    contestant = new Contestant();
     var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
  // question.hide();
   background("yellow")
    
    Contestant.getPlayerInfo();
    textSize(30);
    fill("black")
    text("Result of the Quiz", 200, 170)
    if(allcontestants !== undefined){
    
      var display_answers = 500;
      
      textSize(30);
      fill ("black")
      text("note", 360, 500)

      for(var plr in allcontestants){
        var correctAns=" 2"
        if (correctAns === allcontestants[plr].answer)
          fill("green")
        else
          fill("red");

        display_answers+=20;
        textSize(15);
        fill("black")
        text(allcontestants[plr].name + ": " + allcontestants[plr].answer, 400, display_answers)
      }
    }

   
  }
}
