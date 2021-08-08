class Question{

  constructor() {
    
    this.input1 = createInput("Name");
    this.button = createButton('play');
    this.input2 = createInput("choose an opption");
    this.title = createElement('h1')
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2= createElement('h4');
    this.option3= createElement('h4');
    this.option4 = createElement('h4');

  }
  hide(){
    
   //this.tittle.hide();
    this.button.hide();
    this.input1.hide();

    this.input2.hide();
  }

  display(){
    
    this.title.html("My quiz G");
    this.title.position(600, 90);
    this.question.html("Question:- What starts and ends with the letter'E ' , but has only one letter" );
      this.question.position(350, 250);
     
      this.option1.html("1:Everyone")
      this.option1.position(350, 300);
      
      this.option2.html("2:Envelope")
      this.option2.position(350, 350);
      
      this.option3.html("3:Estimate")
      this.option3.position(350, 400);
    
      this.option4.html("4:Example")
      this.option4.position(350, 450);

    this.input1.position(400, 550);
    this.input2.position(800, 550);
    this.button.position(600, 700);

    this.button.mousePressed(()=>{
   this.input1.hide();
    this.input2.hide();
    //this.tittle.hide();
     this.button.hide();
    contestant.name = this.input;
      contestantCount+=1;
      contestant.index = contestantCount;
      contestant.update();
      contestant.updateCount(contestantCount);
    });

  }
}
