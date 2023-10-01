let ballX = 250;
let ballY = 250;
let xSpeed = 0;
let ySpeed = 0;
let count = 0;
//left to right
let treasureX = -15;
let treasureY = Math.floor(Math.random() * (400 - 100 + 1) + 100);

//right to left
let treasureReverseX = 515;
let treasureReverseY = Math.floor(Math.random() * (400 - 100 + 1) + 100);
let userPoints = 0;

let treasure;

//sound
let boing;
let collect;
let loss;

//background : 500 x 1000
let bg;

//foreground: 500 x 1000
let fg;

let p1 = 0; //firstCopy of bg
let p2 = -500; // second copy of bg

let fg1 = 0; // first copy of fg
let fg2 = -500; // second copy of fg

function preload() {
  //image
  treasure = loadImage("treasure.png");
  bg = loadImage("background.png");
  fg = loadImage("foreground.png");

  //sound effects
  boing = loadSound("boing.mp3");
  collect = loadSound("collect.mp3");
  loss = loadSound("loss.mp3");
}

function setup() {
  let canvas = createCanvas(500, 500);
  canvas.id("game");
  canvas.parent("#score");

  background(0);
}

function draw() {
  background(0);

  //draw 2 backgrounds
  image(bg, 250, p1);
  image(bg, 250, p2);
  p1 += 1;
  p2 += 1;
  if (p1 >= 500) {
    // when this condition satisfies, p2 is 0
    p1 = p2 - 500;
  }

  if (p2 >= 500) {
    // when this condition satisfies, p1 is 0
    p2 = p1 - 500;
  }

  //draws 2 foregrounds
  image(fg, 250, fg1);
  image(fg, 250, fg2);

  fg1 += 2;
  fg2 += 2;

  if (fg1 >= 500) {
    fg1 = fg2 - 500;
  }

  if (fg2 >= 500) {
    fg2 = fg1 - 500;
  }

  //console.log(fg1,fg2);

  //from left to right
  imageMode(CENTER);
  image(treasure, treasureX, treasureY);
  treasureX += 1;

  if (treasureX >= 500) {
    treasureX = -15;
    treasureY = random(100, 400);
  }

  //from right to left
  image(treasure, treasureReverseX, treasureReverseY);
  treasureReverseX -= 1;
  if (treasureReverseX < 0) {
    treasureReverseX = 515;
    treasureReverseY = random(100, 400);
  }

  //adding visual borders
  stroke(128);
  strokeWeight(20);
  line(0, 0, 500, 0);
  line(0, 0, 0, 500);
  line(500, 0, 500, 500);

  //paddle
  strokeWeight(1);
  fill("white");

  //add a constraint so it does not go beyond border
  let paddleXC = constrain(mouseX, 60, 440);
  rectMode(CENTER);
  rect(paddleXC, 490, 100, 20);

  //add keys
  if (keyIsDown(65)) {
    mouseX -= 2;
  }
  if (keyIsDown(68)) {
    mouseX += 2;
  }

  let r = map(ballX, 0, 250, 100, 255);
  let g = map(ballX, 250, 500, 250, 150);
  let b = map(ballY, 0, 500, 100, 255);

  //ball
  fill(r, g, b);
  ellipse(ballX, ballY, 30, 30);
  ballX += xSpeed;
  ballY += ySpeed;

  //bouce left and right
  if (ballX < 0 || ballX > width) {
    xSpeed *= -1.05;
    boing.play();
  }

  if (ballY < 0) {
    ySpeed *= -1.05;
    boing.play();
  }

  //test
  let d = dist(ballX, ballY, paddleXC, 480);
  let d1 = dist(ballX, ballY, paddleXC - 40, 480);
  let d2 = dist(ballX, ballY, paddleXC + 40, 480);

  let d3WithTreasure1 = dist(treasureX, treasureY, ballX, ballY);
  let d3WithTreasure2 = dist(treasureReverseX, treasureReverseY, ballX, ballY);

  /*
  line(treasureX,treasureY,ballX,ballY)
  line(treasureReverseX,treasureReverseY,ballX,ballY)
  line(ballX,ballY,paddleXC,480)
  line(ballX,ballY,paddleXC -40,480)
  line(ballX,ballY,paddleXC + 40,480)
  */

  // text(d,50,50)
  // text("left to right: " + d3WithTreasure1,150,50)
  // text("right to left: "+d3WithTreasure2,150,100)

  fill(255);
  text("Points: " + userPoints, 30, 30);

  if (d < 30) {
    ySpeed *= -1.05;
    boing.play();
  }

  if (d1 < 30) {
    ySpeed *= -1.05;
    let addXSp = map(d1, paddleXC - 40, paddleXC, -1.5, -1);
    xSpeed *= addXSp;
    boing.play();
  }

  if (d2 < 30) {
    ySpeed *= -1.05;
    let anotherSpeed = map(d2, paddleXC, paddleXC + 40, -1, -1.5);
    xSpeed *= anotherSpeed;
    boing.play();
  }

  xSpeed = constrain(xSpeed, -8, 8);
  ySpeed = constrain(ySpeed, -8, 8);

  if (ballY > height) {
    loss.play();
    reset();
  }

  //collecting treasures
  if (d3WithTreasure1 < 50) {
    treasureX = -15;
    treasureY = random(100, 400);
    userPoints += 1;
    collect.play();
  }

  if (d3WithTreasure2 < 50) {
    treasureReverseX = 515;
    treasureReverseY = random(100, 400);
    userPoints += 1;
    collect.play();
  }
}

function randomizeSpeed() {
  if (random(0, 1) > 0.5) {
    xSpeed = random(-4, -1);
  } else {
    xSpeed = random(1, 4);
  }

  if (random(0, 1) > 0.5) {
    ySpeed = random(-4, -1);
  } else {
    ySpeed = random(1, 4);
  }
}

function mouseClicked() {
  if (count == 0) {
    randomizeSpeed();
    userPoints = 0;
  }
  count++;
}

function reset() {
  //ball
  ballX = width / 2;
  ballY = height / 2;
  xSpeed = 0;
  ySpeed = 0;
  count = 0;
}
