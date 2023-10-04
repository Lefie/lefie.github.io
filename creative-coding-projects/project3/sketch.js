let progressX = 0;
let start = 0;
let stop = 0;
let circX = 300
let circY = 300
let width = 80;
let height = 80;

let start1 = 0;
let stop1 = 0;

let star1Y = 300
let star1X = 10;

let bird;
let bird1;

let snowflakes= [];


class Bird{
  constructor(headX,headY,color1){
    this.headX = headX
    this.headY = headY;
    this.color1 = color1;
    
    
    
  }
  
  display(){
    
    fill(this.color1)
    
    //head
    ellipse(this.headX,this.headY,30);
    
    //body
     ellipse(this.headX-30,this.headY,50,20);
    
     //mouth
  triangle(this.headX + 10,this.headY - 8,this.headX + 10,this.headY +5, this.headX + 20,this.headY+2)
  }
  
  move(){
    if(this.headX <= 500){
         this.headX += 1
    }else{
      this.headX = 0;
      this.headY = random(50,450)
    }
 
    
  }
  
 
}

class Snowflake{
  
  constructor(){
    this.x = random(15,480)
    this.y = 10;
    
  }
  
  display(){
    fill(255,255,255,50)
    ellipse(this.x, this.y,10)
    
  }
  
 
  
  move(){
    let speed = map(this.y,0,500,0.5,3)
    if(this.y <= 500){
      this.y += speed;
    }else{
      this.y = 0;
      this.x = random(40,450)
    }
  }
  
}


function setup() {
  createCanvas(500, 500);
  background(0)
  stop = PI;
  stop1 = PI;
  

  bird = new Bird(250,330,"black")
  bird1 = new Bird(0,330,"orange")
  
  

}

function draw() {
  let r = map(mouseX,0,200,100,50);
  let g = map(mouseX,0,200,200,100);
  let b = map(mouseX,0,200,250,200);
  background(color(r,g,b))
  

  
  if(mouseX <=250){
     noStroke()
    fill("yellow")
    ellipse(0,0,180,180)
    fill('red')
    ellipse(0,0,90,90)
    bird1.display()
   bird1.move()
    
    
  }
 
  
  if(mouseX > 250){
    noStroke()
    
    fill(246, 241, 213)
    ellipse(0,0,100)
    
     for (let i = 0; i < random(1); i++) {
    snowflakes.push(new Snowflake()); // append snowflake object
  }
    
    for(let flake of snowflakes){
      flake.display()
      flake.move();
    }
  
    
    bird.display()
    bird.move();
    
  }
  
  
  
  //progress bar 
  strokeWeight(10)
  stroke("white")
  fill("white")
  rect(10,200,200,30)
  
  noStroke()
  fill(10,200,50)
  rect(10,200,progressX,30)
  
  let k = map(progressX,0,150,0.5,0.05)
  let r1 = map(progressX,150,200,0.05,0.02)
  
  if(progressX < 150){
    progressX+= k
  }
  
   if(progressX < 185){
    progressX+= r1
  }
  
  fill("white")
  text("almost there...",50,220)
  
  
  
  //circle1
  stop+=PI/120;
  start += PI/120;
  
  stroke("white")
  noFill()
  arc(circX, circY, width*1.5, height*1.5, start, stop, OPEN);
  strokeWeight(1)
  text("loading...",280,300)
  
  //circle2
  strokeWeight(10)
  stroke(10,190,150)
  stop1 += PI/120
  //start1 =stop1-PI;
  arc(circX, circY-200, width*1.5, height*1.5, start1, stop1, OPEN);
  
  strokeWeight(1)
  fill("white")
  text("waiting...",280,100)
  
  
}

