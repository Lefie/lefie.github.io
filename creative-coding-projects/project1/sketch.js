
const Y_AXIS = 1;
const X_AXIS = 2;


function setup() {
    // set the background size of our canvas
    createCanvas(500, 500);
  
   //backgroound gradient
    setGradient(0, 0, 500, 500, color(6,52,77), color(68,6,77), Y_AXIS);
   
    //stars
    for(let i = 0; i < 1000; i++){
      star()
    }


    //portal
    strokeWeight(12)
    stroke(226, 252, 202)
    fill(226, 252, 202)
    ellipse(70,250,80,300)

    noStroke()
    fill(164, 232, 102)
    ellipse(85,250,50,270)
    fill("pink")
    ellipse(95,250,30)

    
    

   strokeWeight(1)
    stroke(1)
    //hair
    push()
    fill("brown")
    rotate(PI/10.0)
    ellipse(270,90,130,110)
    pop()

   //right sleeve
      push()
      fill("yellow")
      translate(-50,140)
      angleMode(degrees)
      rotate(-120)

       rect(170,260,20,40)
       fill(255,206,170)
       rect(170,290,20,40)
       pop()

  //left sleeve
  push()
  fill("yellow")
 translate(100,-50)
  angleMode(degrees)
  rotate(38)
  rect(170,260,20,40)
  fill(255,206,170)
  rect(170,290,20,40)
   pop()

    //yellow shirt
    fill("yellow")
   rect(190,240,70,140)


  

    //face
    fill(255,206,170)
    ellipse(220,200,120);

    //eyes
    fill(250,250,250)
    ellipse(170,200,40);
    strokeWeight(5)
    point(170,200)

    strokeWeight(1)
    fill(250,250,250)
    ellipse(230,200,40);
    strokeWeight(5)
    point(230,200)

    //eye brows
    strokeWeight(1)
    line(167,172,180,170)

    line(240,172,220,170)
    
    noFill()
    arc(200, 220, 20, 10, PI / 2, 3 * PI / 2, OPEN); 

    noFill()
    arc(202, 232, 6, 25, 0,  PI ); 
    arc(210, 235, 10, 25, 0,  PI ); 


    fill(52, 113, 145)
    rect(190,385,20,120)
    rect(240,385,20,120)
    rect(190,380,70,10)

    push();
    textSize(32);
    fill("white")
  let angle2 = radians(270);
  translate(360, 460);
  rotate(angle2);
  // Draw the letter to the screen
  text("RICK AND MORTY SEASON 7", -10, 0);


  pop();

    


  }

  function star(){
    r = random(0,255)
    g = random(0,255)
    b = random(0,255)
    
    stroke(r,g,b)
    strokeWeight(3)
    
    randx = random(0,500);
    randy = random(0,700);
    point(randx,randy)
  }


  function setGradient(x, y, w, h, c1, c2, axis) {
    noFill();
  
    if (axis === Y_AXIS) {
      // Top to bottom gradient
      for (let i = y; i <= y + h; i++) {
        let inter = map(i, y, y + h, 0, 1);
        let c = lerpColor(c1, c2, inter);
        stroke(c);
        line(x, i, x + w, i);
      }
    } else if (axis === X_AXIS) {
      // Left to right gradient
      for (let i = x; i <= x + w; i++) {
        let inter = map(i, x, x + w, 0, 1);
        let c = lerpColor(c1, c2, inter);
        stroke(c);
        line(i, y, i, y + h);
      }
    }
  }
  