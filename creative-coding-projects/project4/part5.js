//load images
let arrowDown;
let arrowLeft;
let arrowRight;
let arrowUp;
//

let arrow;
let alpha = 0;
let robots = []
let rate = 1
let robot

function preload(){
  arrowDown = loadImage("images/arrow_down.png");
  arrowLeft = loadImage("images/arrow_left.png")
  arrowRight = loadImage("images/arrow_right.png")
  arrowUp = loadImage("images/arrow_up.png")
}

function setup() {
  // set the background size of our canvas
  canvas = createCanvas(500, 500);
  arrow = new Arrow(250,250)
  //console.log("BORN COUTN", arrow.count)
  //arrow.graphic = arrow.arrows[1]
  

}

function draw(){
    background(128)

  
   if(frameCount % 100 == 0){
    robots.push(new Robot(0,150,"right"))
    //console.log(robots.length)
   }


    for(let i = 0; i < robots.length; i++){
        let status = robots[i].leftScreen()
        if(status == "used"){
            robots.splice(i,1)
        }
        robots[i].display();
        robots[i].move()
       
        console.log(robots.length)
        robots[i].checkArrow()
       
    }

   

    arrow.display()
    arrow.checkClick()
    
    
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
      let direction = this.identifyArrowDir()
     //console.log("DIRECTION",direction)
     

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

    leftScreen(){
        if(this.x > 500 || this.x < 0 || this.y > 500 || this.y < 0){
            return "used"

        }
        return "k"
    }

    checkArrow(){
        let d = dist(this.x+15,this.y + 50,arrow.x,arrow.y)
        if(d < 60){
            this.dir = this.identifyArrowDir()
        }
        //console.log("ARROW COUNT RN",arrow.count)
    }

    

    identifyArrowDir(){
        if(arrow && arrow.count == 1){
            //console.log("UP",arrow.count)
            return "up"
        }
        if(arrow && arrow.count == 3){
            //console.log("DOWN",arrow.count)
            return "down"
        }
        if(arrow && arrow.count == 0){
            //console.log("LEFT",arrow.count)
            return "left"
        }
        if(arrow && arrow.count == 2){
            //console.log("RIGHT",arrow.count)
            return "right"
        }
        

    }
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
      let rand = int(random(4))
      this.graphic = rand == 0 ? this.arrows[3] : this.arrows[rand-1]
      this.count = rand
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
            this.graphic = this.arrows[this.count]
            this.count ++;
          } 
          
      
        }
        
    
      }
  }



