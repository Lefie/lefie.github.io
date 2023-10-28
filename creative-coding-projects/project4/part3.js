
//load images
let arrowDown;
let arrowLeft;
let arrowRight;
let arrowUp;
let arrow
//

function preload(){
  arrowDown = loadImage("images/arrow_down.png");
  arrowLeft = loadImage("images/arrow_left.png")
  arrowRight = loadImage("images/arrow_right.png")
  arrowUp = loadImage("images/arrow_up.png")

}

function setup(){
  createCanvas(500,500)
  arrow = new Arrow(250,250);

}

function draw(){
  background(128)
  arrow.display()
  arrow.checkClick()

}

class Arrow{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.up = arrowUp
    this.down = arrowDown
    this.left = arrowLeft
    this.right = arrowRight
    this.arrows = [arrowUp,arrowRight,arrowDown,arrowLeft]
    this.graphic = this.arrows[int(random(4))]
    this.count = 0
  }

  display(){
    //frameRate(5)
    imageMode(CENTER)
    image(this.graphic,this.x,this.y)
  }

  checkClick(){
 
    let d = dist(mouseX,mouseY,this.x,this.y)
   //stroke("white")
    //line(mouseX,mouseY,this.x,this.y)
    if(d < 20){
      if(this.count > 3 ){
        this.count = 0
      }
      if(frameCount % 30 == 0){
        this.graphic = this.arrows[this.count++]
      } 
  
    }

  }
}

