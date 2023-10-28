let robot1;
let alpha = 0;
let rate = 1;

let robot2;
let robot3;
let robot4;


function setup() {
  // set the background size of our canvas
  canvas = createCanvas(500, 500);
 
  robot1 = new Robot(250,500,"up")
  robot2 = new Robot(250,-100,"down");
  robot3 = new Robot(-50,250,"right");
  robot4 = new Robot(550,250,"left")
  

  }

  function draw(){
    background(0)
    robot1.display();
    robot2.display();
    robot3.display();
    robot4.display();
    robot1.move()
    robot2.move()
    robot3.move()
    robot4.move()
   
    
  }

  class Robot{
    constructor(x,y,dir){
      this.x = x;
      this.y = y;
      this.headC = color(random(255),random(255),100)
      this.bodyC = color(100,random(255),random(255))
      this.headS = random(25,50)
      this.bodyS = random(this.headS + 10,this.headS+25)
      this.eye = int(random(1,3))
      this.speedX = 1;
      this.speedY = 1;
      this.dir = dir;
      
    }

    display(){
    
      noStroke()
      //head
      fill(this.headC)
      rect(this.x,this.y,this.headS)

      //eye 
      if(this.eye === 1){
        fill("white")
        rect(this.x+this.headS/4,this.y+this.headS/5,this.headS/2,this.headS/4)
      }else{
        fill("white")
        rect(this.x+this.headS/8,this.y+this.headS/5,this.headS/8,this.headS/4)
        rect(this.x+this.headS/1.4,this.y+this.headS/5,this.headS/8,this.headS/4)

      }

      //body
      fill(this.bodyC)
      rect(this.x - this.bodyS/5.5, this.y + this.headS,this.bodyS)


    }

    move(){
      alpha += rate * 1;
      if(alpha >= 255 || alpha <= 0){
        rate *= -1;
      }

      fill(238,210,10,alpha)
     

      if(this.dir === "right"){
       
        arc(this.x - 10,this.y+this.headS+this.bodyS/2,30,30,HALF_PI, PI+HALF_PI,CHORD)
        this.x += this.speedX;
        
      }

      if (this.dir === "left"){
        arc(this.x +this.bodyS - 10,this.y+this.headS+this.bodyS/2,30,30, PI+HALF_PI, HALF_PI,CHORD)

        this.x -= this.speedX;
      }

      if(this.dir === "up"){
        arc(this.x + 17,this.y + this.headS + this.bodyS,30,30, 0,PI,CHORD)

        this.y  -= this.speedY
      }

      if(this.dir === "down"){
        arc(this.x + 17,this.y,30,30, PI,0,CHORD)

        this.y += this.speedY
      }
    }
  }

  /*
  arc(50, 55, 50, 50, PI+HALF_PI, HALF_PI,CHORD); left
  arc(50, 55, 50, 50,  HALF_PI, PI+HALF_PI, CHORD);//right
  arc(50, 55, 50, 50,  PI, 0,CHORD);
  arc(50, 55, 50, 50,  0, PI,CHORD);




  */
  