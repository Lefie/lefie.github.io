
function setup() {
  createCanvas(400, 400);
  background(0)
  noStroke()
}

function draw() {
  background(0,5)
  fill(random(255),150,random(10))
  let x = random(40,360);
  let y = random(40,360);
 
  ellipse(x,y,30,30)
  x+=1
  y+=1
}