/*
 game states
 0 = default
 1 = mini game1
 2 = mini game2
 3 = mini game3
 4 = mini game4

*/

let gameState = 0;

let cat;
let cat2;
let cat3;
let cat4
let catIdle;
let catAttack;
let catRun;
let catIdlev2
let catAttackv2
let catRunv2
let catWalkv2
let catWalkv3
let catWalkv4


let cats1 = []
let cats2 = []
let cats3 = []

let mg1;
let mg2;
let mg3;
let mg4;

let mg1Points = 0;
let mg2Points = 0;
let mg3Points = 0;
let mg4Points = 0;

//overall score
let score = 0;
let scoreboard1
let scoreboard2
let scoreboard3
let scoreboard4

//exit button
let exit

//intruction btns
let btn1
let btn2
let btn3
let btn4
let show = false
let show2 = false
let show3 = false
let show4 = false



//game 1 variables
let groundX = 0;
let groundY = 600;
let ground2X = 1024;
let ground2Y = 600;
let ground1;
let ground2;
let obs1;
let obs2;
let award;
let timer3 = 60

//game 2 variables
let hole1;
let hole2;
let hole3;
let hole4;
let hole5;
let hole6;
let mouseImg;

let mousePosX = [170, 670];
let mousePosY = [540, 240, 840];
let clicked = false
let mouse2
let timer = 30
let clicks = 0

//game 3 variables
let enemyImg
let enemyArr = []
let timer2 = 60

//game 4
let mouse;
let award1
let ypos = [80,330,580,830,1080]
let timer4 = 60





function preload() {
  catIdle = loadImage("img/cat03_idle_blink_8fps.gif");
  catRun = loadImage("img/cat03_run_12fps.gif");
  catAttack = loadImage("img/cat03_attack_12fps.gif")
  catWalkv2 = loadImage("img/cat04_walk_8fps.gif")
  catWalkv3 = loadImage("img/cat02_walk_8fps.gif")
  catWalkv4 = loadImage("img/cat05_walk_8fps.gif")
  mouseImg = loadImage("img/mouse.png");
  enemyImg = loadImage("img/slime_black_idle_down.gif")
  

}

function setup() {
  createCanvas(1024, 1200);
  cat = new Cat(width / 2, height / 2);
  cat2 = new Cat(30, 570);
  cat3 = new Cat(30, 570)
  cat4 = new Cat(30,1170)
  noStroke();
  mg1 = new Square(100, 200, "Game 1");
  mg2 = new Square(700, 200, "Game 2");
  mg3 = new Square(100, 500, "Game 3");
  mg4 = new Square(700, 500, "Game 4");
  //game 1
  ground1 = new Ground(0, 600);
  ground2 = new Ground(1024, 600);
  obs1 = new Obstacle(random(1024, 1030), 550, random(10, 50), 100);
  obs2 = new Obstacle(random(1040, 1050), 550, random(10, 50), 100);
  award = new Award(random(100, 1000), 500);

  //game2
  hole1 = new Hole(250, 300);
  hole2 = new Hole(750, 300);

  hole3 = new Hole(250, 600);
  hole4 = new Hole(750, 600);

  hole5 = new Hole(250, 900);
  hole6 = new Hole(750, 900);
  mouse2 = new Mouse(random(mousePosX) + 90, random(mousePosY) + 50);
  //mouse = new Mouse(random(mousePosX) + 90, random(mousePosY) + 50)

  //game3
  for(let i = 0; i < 10; i++){
    enemyArr.push(new Enemy(random(100,1000),random(100,1200)))
  }

  //game 4
  mouse = new Mouse(80,80,20,20);
  award1 = new Treat(random(10,width),random(ypos))

  //for all
  scoreboard1 = new ScoreBoard(mg1);
  scoreboard2 = new ScoreBoard(mg2);
  scoreboard3 = new ScoreBoard(mg3);
  scoreboard4 = new ScoreBoard(mg4);

  //exit btn
  exit = new Exit()

  //instruction btns
  btn1 = new Instruction(mg1.x + 90, mg1.y - 40, mg1)
  btn2 = new Instruction(mg2.x + 90, mg2.y - 40, mg2)
  btn3 = new Instruction(mg3.x + 90, mg3.y - 40, mg3)
  btn4 = new Instruction(mg4.x + 90, mg4.y - 40, mg4)

  

  
}

function draw() {
  background("pink");
  //text("cat pos x : " + cat.x + " cat pos y: " + cat.y, 15,15)
  score = mg1.points + mg2.points + mg3.points + mg4.points
  text("score: "+score, 100,50)
  text("If you have a score > 30, press 'c' ",350,70)
  text("If you have a score > 60, press 'b' ",350,90)
  text("If you have a score > 90, press 'a' ",350,110)

  if (gameState === 0) {
    // the default map
    console.log("got here");

    mg1.display();
    mg2.display();
    mg3.display();
    mg4.display();
    cat.display();
    cat.move();

    if(score >= 90){
      
    
      if(keyIsPressed && key == "a"){
       let temp = new Cat(mouseX, mouseY)
       cats1.push(temp)
      }
     }else if(score >= 60){

      if(keyIsPressed && key == "b"){
        let temp = new Cat(mouseX, mouseY)
        cats2.push(temp)
       }
     }else if(score >= 30) {
      if(keyIsPressed && key == "c"){
        let temp = new Cat(mouseX, mouseY)
        cats3.push(temp)
       }

     }
   
     for(let i = 0; i < cats1.length; i++){
       cats1[i].move4()
     }
     
     for(let i = 0; i < cats2.length; i++){
      cats2[i].move5()
    }
    
    for(let i = 0; i < cats3.length; i++){
      cats3[i].move6()
    }
    

    /*
    instruction for game 1
    */
    if( show === false ){
      btn1.displayBtn()
    }else if(show === true){
      btn1.displayInstruction()
    }
   
    let dis = dist(mouseX,mouseY,btn1.x, btn1.y)
    let dis2 = dist(mouseX, mouseY, btn1.instructionX, btn2.instructionY)
    
    if(dis < 15 && mouseIsPressed){
      if(show === false){
        show = true
      }
    }

    if(dis2 < 15 && mouseIsPressed){
      if(show === true){
        show = false
      }
    }


    /*
    instruction for game 2
    */
    if( show2 === false ){
      btn2.displayBtn()
    }else if(show2 === true){
      btn2.displayInstruction()
    }
   
    let dis3 = dist(mouseX,mouseY,btn2.x, btn2.y)
    let dis4 = dist(mouseX, mouseY, btn2.instructionX, btn2.instructionY)
    
    if(dis3 < 15 && mouseIsPressed){
      if(show2 === false){
        show2 = true
      }
    }

    if(dis4 < 15 && mouseIsPressed){
      if(show2 === true){
        show2 = false
      }
    }

    /*
    instruction for game 3
    */
    if( show3 === false ){
      btn3.displayBtn()
    }else if(show3 === true){
      btn3.displayInstruction()
    }
   
    let dis5 = dist(mouseX,mouseY,btn3.x, btn3.y)
    let dis6 = dist(mouseX, mouseY, btn3.instructionX, btn3.instructionY)
    
    if(dis5 < 15 && mouseIsPressed){
      if(show3 === false){
        show3 = true
      }
    }

    if(dis6 < 15 && mouseIsPressed){
      if(show3 === true){
        show3 = false
      }
    }

     /*
    instruction for game 4
    */
    if( show4 === false ){
      btn4.displayBtn()
    }else if(show4 === true){
      btn4.displayInstruction()
    }
   
    let dis7 = dist(mouseX,mouseY,btn4.x, btn4.y)
    let dis8 = dist(mouseX, mouseY, btn4.instructionX, btn4.instructionY)
    
    if(dis7 < 15 && mouseIsPressed){
      if(show4 === false){
        show4 = true
      }
    }

    if(dis8 < 15 && mouseIsPressed){
      if(show4 === true){
        show4 = false
      }
    }

    let minigame1 = cat.detectMinigame(mg1);
    let minigame2 = cat.detectMinigame(mg2);
    let minigame3 = cat.detectMinigame(mg3);
    let minigame4 = cat.detectMinigame(mg4);


    //if game state is 1 : we enter into mini game1

    //if game state is 1 : we enter into mini game2

    //if game state is 1 : we enter into mini game3

    //if game state is 1 : we enter into mini game4

    if (minigame1) {
      gameState = 1;
      // one()
    }
    if (minigame2) {
      gameState = 2;
      //two()
    }
    if (minigame3) {
      gameState = 3;
      //three()
    }
    if (minigame4) {
      gameState = 4;
      //four()
    }
  }

  if (gameState === 1) {
    one();
  }

  if (gameState === 2) {
    two();
  }

  if (gameState === 3) {
    three();
  }

  if (gameState === 4) {
    four();
  }

  

  
   
    
  
}


/*
 cat oop
*/

class Cat {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.status = "idle";
    this.graphic = catIdle;
    this.speed = 5;
    this.jumpMode = false;
    this.jumpPower = 0;
    this.desiredX = random(100,900)
    this.desiredY = random(100,900)
  }

  display() {
    imageMode(CENTER);
    image(this.graphic, this.x, this.y, 100, 100);
  }

  move() {
    this.graphic = catIdle;
    if (keyIsDown(RIGHT_ARROW)) {
      this.graphic = catRun;
      this.x += this.speed;
    } else if (keyIsDown(LEFT_ARROW)) {
      this.graphic = catRun;
      this.x -= this.speed;
    } else if (keyIsDown(UP_ARROW)) {
      this.graphic = catRun;
      this.y -= this.speed;
    } else if (keyIsDown(DOWN_ARROW)) {
      this.graphic = catRun;
      this.y += this.speed;
    }
  }


  move2() {
    this.graphic = catIdle;
    if (keyIsDown(RIGHT_ARROW)) {
      this.graphic = catRun;
      this.x += this.speed;
    } else if (keyIsDown(LEFT_ARROW)) {
      this.graphic = catRun;
      this.x -= this.speed;
    }
  }

  move3(){
    this.graphic = catIdle;
    if (keyIsDown(RIGHT_ARROW)) {
      this.graphic = catRun;
      this.x += this.speed;
    } else if (keyIsDown(LEFT_ARROW)) {
      this.graphic = catRun;
      this.x -= this.speed;
    } else if (keyIsDown(UP_ARROW)) {
      this.graphic = catRun;
      this.y -= this.speed;
    } else if (keyIsDown(DOWN_ARROW)) {
      this.graphic = catRun;
      this.y += this.speed;
    }else if(key === "k" && keyIsPressed)(
        this.graphic = catAttack
    
    )
   
  }

  move4(){
    this.graphic = catWalkv2
    image(this.graphic,this.x,this.y,100,100)
    if(this.x < this.desiredX){
      this.x += 0.4
    }
    if(this.x > this.desiredX){
      this.x -= 0.4
    }

    if(this.y < this.desiredY){
      this.y += 0.4
    }

    if(this.y > this.desiredY){
      this.y -= 0.4
    }

    if(dist(this.x,this.y,this.desiredX,this.desiredY) < 10){
      this.desiredX = random(100,900)
      this.desiredY = random(100,900)
    }
  }

  move5(){
    this.graphic = catWalkv3
    image(this.graphic,this.x,this.y,100,100)
    if(this.x < this.desiredX){
      this.x += 0.4
    }
    if(this.x > this.desiredX){
      this.x -= 0.4
    }

    if(this.y < this.desiredY){
      this.y += 0.4
    }

    if(this.y > this.desiredY){
      this.y -= 0.4
    }

    if(dist(this.x,this.y,this.desiredX,this.desiredY) < 10){
      this.desiredX = random(100,900)
      this.desiredY = random(100,900)
    }
  }

  move6(){
    this.graphic = catWalkv4
    image(this.graphic,this.x,this.y,100,100)
    if(this.x < this.desiredX){
      this.x += 0.4
    }
    if(this.x > this.desiredX){
      this.x -= 0.4
    }

    if(this.y < this.desiredY){
      this.y += 0.4
    }

    if(this.y > this.desiredY){
      this.y -= 0.4
    }

    if(dist(this.x,this.y,this.desiredX,this.desiredY) < 10){
      this.desiredX = random(100,900)
      this.desiredY = random(100,900)
    }
  }

  detectEnemy(){
    for(let i = 0; i < enemyArr.length; i++){
        let dis = dist(enemyArr[i].x, enemyArr[i].y, this.x, this.y)
        if(dis < 25 && keyIsPressed && key === "k"){
            mg3Points += 1
            enemyArr.splice(i,1)
        }else if(dis < 25 ){
            enemyArr.push(new Enemy(random(100,1000), random(100,1000)))


        }
    }
    

  }

  detectMinigame(mg) {
    
    if (
      this.x >= mg.x + 50 &&
      this.x <= mg.x + (mg.s - 50) &&
      this.y >= mg.y + 50 &&
      this.y <= mg.y + (mg.s - 50)
    ) {
      // mg.color = color(128,128,128)

      mg.color = color(128, 128, 128);
      return true;
    } else {
      mg.color = color(255, 255, 255);

      return false;
    }
  }
}

class Square {
  constructor(x, y, txt) {
    this.x = x;
    this.y = y;
    this.s = 200;
    this.txt = txt;
    this.color = color(255, 255, 255);
    this.points = 0;
  }

  display() {
    rectMode(CORNER);
    noStroke();
    fill(this.color);
    rect(this.x, this.y, this.s, this.s);
    fill("pink");
    textSize(20);
    text(this.txt, this.x + 60, this.y + 100);

    if(this.txt === "Game 1"){
      if(mg1Points > this.points){
        this.points = mg1Points
      }
      
    }else if(this.txt === "Game 2"){
      if(mg2Points > this.points){
        this.points = mg2Points
      }
    }else if(this.txt === "Game 3"){
      if(mg3Points > this.points){
        this.points = mg3Points
      }
    }else if(this.txt === "Game 4"){
      if(mg4Points > this.points){
        this.points = mg4Points
      }
    }

    textSize(25)
    
    text(this.points, this.x + 80, this.y + 130);

    
    noFill();
    stroke(128);
    //text("x: " + this.x + " y: " + this.y, this.x + 60,this.y + 150)
    noFill();
  }
}

class Ground {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  display() {
    rectMode(CORNER);
    fill(128);
    rect(this.x, this.y, 1024, 1024);
  }
}

class Obstacle {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.speed = random(1, 3);
    this.color1 = color(random(255), random(255), random(255));
  }

  display() {
    rectMode(CENTER);
    fill(this.color1);
    rect(this.x, this.y, this.w, this.h);
  }

  move() {
    this.x -= this.speed;
  }

  detection(cat) {
    let dis = dist(cat.x, cat.y, this.x, this.y);
    //text(dis, 100, 100);
    if (dis < 40) {
      mg1Points -= 5;
      this.x = 0;
    }
  }
}

class Award {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  display() {
    fill(color(0, 200, 0));
    ellipse(this.x, this.y, 20, 20);
  }

  detectCollisionWithPlayer(cat) {
   
    let dis = dist(cat.x, cat.y, this.x, this.y);
    //text(dis,10,10)
    if (dis < 25) {
      this.x = random(100, 1000);
      //this.y = random(ypos)
      mg1Points += 1;
    }
  }
}



/*
game 2 classes
*/

class Hole {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  display() {
    ellipseMode(CENTER);
    fill("black");
    ellipse(this.x, this.y, 200, 200);
    fill("yellow");
    ellipse(this.x, this.y, 180, 180);
  }
}

class Mouse {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.graphic = mouseImg;
    this.time = int(random(50,100))
    this.num = 0
    
   
  }

  display() {
    imageMode(CENTER)
    image(this.graphic, this.x, this.y, 150, 150);
  }

  detectMouse() {
    stroke(128)
    this.num += 1

    if(this.num >= this.time){
      
        this.x = random(mousePosX) + 90
        this.y = random(mousePosY) + 50
        this.num = 0
        this.time = int(random(50,100))
    }
  
    //line(mouseX, mouseY, this.x, this.y);
    ellipse(mouseX ,mouseY,10,10)
    fill("pink")
    ellipse(this.x +15,this.y +15,20,20)
    
    
    fill("black")
    let dis = dist(mouseX, mouseY, this.x + 15, this.y + 15);
    text(dis,100,100)
    textSize(50)
    text("clicks: " + clicks, 50, 60);

    if(dis < 20 ){
      fill("green")
      ellipse(this.x + 15,this.y + 15,20,20)
    }
    
    if(dis < 20 && mouseIsPressed && !clicked){
        clicks += 1
        clicked = true
       
        this.x = random(mousePosX) + 90
        this.y = random(mousePosY) + 50

        
        
    }else {
      clicked = false
    }
  }

  move(){
    let ys = [80,330,580,830,1080]
    this.x += 10
   
    if(this.x > width){
        this.x = -50
        this.y = random(ys)
    }
  }

  detectCat(cat){
    let dis = dist(cat.x,cat.y,this.x,this.y)
    if( dis < 80){
        cat.y = 1170
        mg4Points -= 5
    }
    
  }



  
}

/*
game 3
*/

class Enemy{
    constructor(x,y){
        this.x = x
        this.y = y
        this.graphic = enemyImg
        this.randomPointX = random(100,1000);
        this.randomPointY = random(100,800);
        
    }

    display(){
        imageMode(CENTER)
        image(this.graphic, this.x, this.y,50,50)
        
    }

    move(){
       
        if(this.x < this.randomPointX){
            this.x += 0.5
        }
        if(this.x > this.randomPointX){
            this.x -= 0.5
        }

        if(this.y < this.randomPointY){
            this.y += 0.5
        }
         if(this.y > this.randomPointY){
            this.y -= 0.5
        }

        //(dist(this.x,this.y,this.randomPointX,this.randomPointY),10,10)

        if(dist(this.x,this.y,this.randomPointX,this.randomPointY) < 10){
            
            this.randomPointX = random(100,1000);
            this.randomPointY = random(100,800);
        }

    }


}

/*
game 4
*/
class Treat {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  display() {
    fill(color(0, 200, 0));
    ellipse(this.x, this.y, 20, 20);
  }

  detectCollisionWithPlayer(cat) {
    let dis = dist(cat.x, cat.y, this.x, this.y);
    //text(dis,10,10)
    if (dis < 25) {
      this.x = random(100, 1000);
      this.y = random(ypos)
      mg4Points += 2;
    }
  }

  detectCollisionMouse(mouse){
      let dis = dist(mouse.x, mouse.y, this.x, this.y);
    //text(dis,10,10)
    if (dis < 25) {
      this.x = random(100, 1000);
      this.y = random(ypos)
    }


  }


}


/*
logistics

*/

class ScoreBoard{
  constructor(mg){
    //show score
    this.mg = mg
    this.txtX = 250
    this.txtY = 350
    this.exitX = 300
    this.exitY = 550
    this.retryX = 800
    this.retryY = 550
  }

  display(){
    noStroke()
    rectMode(CENTER)
    textSize(30)
    fill("black")
    text("You have earned " + this.mg.points + " points for this game!",300,350)
    
    fill("orange");
    rect(this.exitX, this.exitY, 150, 150);
    fill("white");
    textSize(25);
    text("Exit", this.exitX-15, this.exitY +10);

    if (dist(this.exitX, this.exitY, mouseX, mouseY) < 20){
      fill("green");
      rect(this.exitX, this.exitY, 150, 150);
      fill("white");
      textSize(25);
      text("Exit", this.exitX-15, this.exitY +10);

    }

    if (dist(this.exitX, this.exitY, mouseX, mouseY) < 20 && mouseIsPressed) {
      cat.x = width / 2;
      cat.y = height / 2;
      gameState = 0;
    }

    fill("orange");
    rect(this.retryX, this.retryY, 150, 150);
    fill("white");
    textSize(25);
    text("Try Again", this.retryX - 50, this.retryY - 8);

    if (dist(this.retryX, this.retryY, mouseX, mouseY) < 20 ){

      fill("green");
      rect(this.retryX, this.retryY, 150, 150);
      fill("white");
      textSize(25);
      text("Try Again", this.retryX - 50, this.retryY - 8);

    }

    if (dist(this.retryX, this.retryY, mouseX, mouseY) < 20 && mouseIsPressed) {
      if(this.mg.txt === "Game 1"){
        resetMg1()
      }
      if(this.mg.txt === "Game 2"){
        resetMg2()
      }
      if(this.mg.txt === "Game 3"){
        resetMg3()
      }
      if(this.mg.txt === "Game 4"){
        resetMg4()
      }
    }


  }
}

/*
Exit btn for all games
*/

class Exit{
  constructor(){
    this.x = 950
    this.y = 50
    this.w = 100
    this.h = 50
  }

  display(){
    noStroke()
    fill("white")
    rectMode(CENTER)
    rect(this.x, this.y,this.w, this.h)
    fill("black")
    textSize(25)
    text("Exit", this.x-20 , this.y + 10)

  }

  detectClickOnExit(){
    noStroke()
    //text(dist(this.x,this.y, mouseX,mouseY),100,150)
    let dis = dist(this.x,this.y, mouseX,mouseY)
    if(dis < 20){
      fill(128)
      rectMode(CENTER)
      rect(this.x, this.y,this.w, this.h)
      fill("black")
      text("Exit", this.x-20 , this.y + 10)
      
      
    }

    if (dis < 20 && mouseIsPressed){
      noStroke()
      rectMode(CENTER)
      rect(this.x, this.y,this.w, this.h)
      fill("black")
      text("Exit", this.x-20 , this.y + 10)
      gameState = 0
      cat.x = width / 2;
      cat.y = height / 2;
    }
  }

  displayOptions(){
    noStroke()
    rectMode(CENTER)
    fill("white")
    rect(500,500,100,100)
  }

}

/*
instruction for each game

*/

class Instruction{
  constructor(x,y,mg){
    this.x = x
    this.y = y
    this.instructionX = 500
    this.instructionY = 900
    this.mg = mg 
  }

  displayBtn(){
    noStroke()
    textSize(20)
    noStroke()
    rectMode(CENTER)
    fill("white")
    rect(this.x,this.y,120,50)
    fill("black")
    text("instruction",this.x-40,this.y + 5)

    let dis = dist(mouseX,mouseY,this.x, this.y)
    if( dis <  15){
      fill(128)
      rect(this.x,this.y,120,50)
      fill("black")
      text("instruction",this.x-40,this.y + 5)

    }

  }

  displayInstruction(){
    noStroke()
    rectMode(CENTER)
    fill("white")
    rect(this.instructionX,this.instructionY,500,300)
    let dis = dist(mouseX, mouseY, this.instructionX, this.instructionY)
    textSize(20)
    if(dis < 15){
      fill(128)
      rect(this.instructionX,this.instructionY,500,300)
    }
    
    if(this.mg.txt === "Game 1"){
      fill("black")
      text(
        "instruction for game 1: \n press the" + 
        " up arrow key to jump over the blocks. \n Collect as many green points as possible",300,800
      )
    }

    if(this.mg.txt === "Game 2"){
      fill("black")
      text(
        "instruction for game 2: \n Click on as many rats as possible" + 
        " \n to earn the most points",300,800
      )
    }

    if(this.mg.txt === "Game 3"){
      fill("black")
      text(
        "instruction for game 3: \n navigate the cat using 4 arrows" + 
        "\n press the 'k' key to kill enemies. \n" + 
        " If you bump into an enemy without pressing 'k',\n the number of enemies increases. \n"+
        " Try to kill as many enemies as possible",300,800
      )
    }

    if(this.mg.txt === "Game 4"){
      fill("black")
      text(
        "instruction for game 4: \n Use the four arrow keys to \n" + 
        " navigate the cat \n Collect as many treats as possible! Avoid the rats!  ",300,800
      )
    }

    

  }
}



function one() {
  
  if (timer3 <= 0) {
    mg1.points = mg1Points;
    scoreboard1.display()
    
  } else {
    background("pink");
    exit.display()
    exit.detectClickOnExit()
    fill("black")
    text("Timer: " + timer3, 500,100)
    noStroke();
    rectMode(CENTER);
    fill("black");
    textSize(20);
    text("Score: " + mg1Points, 20, 20);
    //floor
    fill(128);
    //text("ground1 x " + ground1.x,100,20)
    //text("ground2 x " + ground2.x,100,40)

    ground1.display();
    ground2.display();

    ground1.x -= 2;
    ground2.x -= 2;

    if (ground1.x <= -1024) {
      ground1.x = 1024;
    }

    if (ground2.x <= -1024) {
      ground2.x = ground1.x + 1024;
    }

    //let obs = new Obstacle(random(100,400),500,10,10)
    obs1.display();
    obs1.move();
    obs1.detection(cat2);

    obs2.display();
    obs2.move();
    obs2.detection(cat2);

    if (obs1.x < 0) {
      obs1.x = random(cat2.x + 100, 1000);
      obs1.w = random(10, 100);
    }

    if (obs2.x < 0) {
      obs2.x = random(cat2.x + 200, 1000);
      obs2.w = random(10, 100);
    }

    cat2.display();
    cat2.move2();

    award.display();
    award.detectCollisionWithPlayer(cat2);

    if (keyIsDown(UP_ARROW) && cat2.jumpMode === false) {
      cat2.jumpPower = -9;
      cat2.jumpMode = true;
    }

    if (cat2.jumpMode === true) {
      cat2.y += cat2.jumpPower;
      cat2.jumpPower += 0.2;

      if (cat2.y >= groundY) {
        cat2.jumpMode = false;
        cat2.jumpPower = 0;
        cat2.y = groundY - 15;
      }
    }

    if(frameCount % 60 === 0 && timer3 > 0 ){
      timer3 -= 1
    
    }
    
  }
}

function two() {
  background("pink");

  if(timer > 0){
    exit.display()
    exit.detectClickOnExit()
    hole1.display();
    hole2.display();
  
    hole3.display();
    hole4.display();
  
    hole5.display();
    hole6.display();


    mouse2.display()
    mouse2.detectMouse()


    fill("black")
    textSize(30)
    text("Timer:" + timer,500,100)
    if(frameCount % 60 === 0 && timer > 0){
      timer -= 1
    }

  }else{
    
    mg2Points = clicks

    mg2.points = mg2Points

    scoreboard2.display()

  }
 
}

function three() {
  background("pink");

  //if timer has run out but there are still enemies left or if all enemies are elimnated but there's still time
  //end game and display score
  if((timer2 === 0 && enemyArr.length != 0) || (enemyArr.length === 0 && timer2 > 0)){
    
    mg3.points = mg3Points
    scoreboard3.display()

  }
  
  else if(timer2 > 0 && enemyArr.length > 0){
    textSize(20)
    text("Enemies Killed: " + mg3Points, 100,100)
    exit.display()
    exit.detectClickOnExit()
    cat3.display()
    cat3.move3()
    for(let i = 0; i < enemyArr.length;i++){
        enemyArr[i].display()
        enemyArr[i].move()
    }
    cat3.detectEnemy()
    textSize(30)
    text("Timer: " + timer2,500,150)
    if(frameCount % 60 === 0 && timer2 > 0){
        timer2 -= 1
    }

  }

}

function four() {
  background("pink");

  if(timer4 <= 0){
    mg4.points = mg4Points
    scoreboard4.display()

  }else{
    
    fill(128)
    rectMode(CORNER)
    rect(0,0,width,150)
    fill("white")
    textSize(30)
    text("score: "+mg4Points,50,40)
    fill(128)
    rect(0,250,width,150)

    rect(0,500,width,150)

    rect(0,750,width,150)

    rect(0,1000,width,150)
    fill("white")
    text("Timer: " + timer4, 50,100)

    exit.display()
    exit.detectClickOnExit()


    mouse.display()
    mouse.move()

    cat4.display()
    cat4.move()
    mouse.detectCat(cat4)
    

    award1.display()
    award1.detectCollisionWithPlayer(cat4)
    award1.detectCollisionMouse(mouse)

    if(frameCount % 60 === 0 && timer4 > 0){
      timer4 -= 1
    }

  }

}



/*
game reset functions
*/

function resetMg1() {

  mg1Points = 0;
  timer3 = 60
  cat2.x = 30;
  cat2.y = 570;

  obs1.x = random(cat2.x + 100, 1000);
  obs1.w = random(10, 100);

  obs2.x = random(cat2.x + 200, 1000);
  obs2.w = random(10, 100);
}

function resetMg2(){
    mg2Points = 0
    clicks = 0;
    timer = 30
}

function resetMg3(){
    mg3Points = 0
    timer2 = 60

    while(enemyArr.length > 10){
      enemyArr.pop()
    }
    
    while(enemyArr.length < 10){
        enemyArr.push(new Enemy(random(10,100), random(10,100)))
    }
}

function resetMg4(){
    mg4Points = 0;
    cat4.y = 1170
    timer4 = 60
}
