let robot1;


function setup() {
  // set the background size of our canvas
  canvas = createCanvas(500, 500);
  robot1 = new Robot(20,20)
  robot1.display()


  }

  function draw(){
    
    
  
   
    
  }

  class Robot{
    constructor(x,y){
      this.x = x;
      this.y = y;
      this.headC = color(random(255),random(255),100)
      this.bodyC = color(100,random(255),random(255))
      this.headS = random(25,50)
      this.bodyS = random(this.headS + 10,this.headS+25)
      this.eye = int(random(1,3))
      
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
  }
  