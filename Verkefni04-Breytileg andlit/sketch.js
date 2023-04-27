var eyeSize = 20;
var faceWidth = 100;
var faceHeight = 150;
var mouthSize = 30;
var hatSize = 60;
var x = 150;
var y = 150;

function setup() {
  createCanvas(300, 300);
}

function draw() {
  background(180);
  fill("lightgreen");
  ellipse(x, y, faceWidth, faceHeight);
  fill("white");
  ellipse(x - 20, y - 10, eyeSize);
  ellipse(x + 20, y - 10, eyeSize);
  line(x + mouthSize, y + mouthSize, x - mouthSize, y + mouthSize);
  beginShape();
  fill("purple");
  vertex(x - hatSize, y - 20);
  vertex(x - 50, y - hatSize);
  vertex(x - 20, y - 100);
  vertex(x + 20, y - 100);
  vertex(x + 50, y - hatSize);
  vertex(x + hatSize, y - 20);
  endShape();
  fill("green");
  ellipse(170, 140, 8);
  ellipse(130, 140, 8);
}

function mousePressed() {
  faceWidth = random(100, 150);
  faceHeight = random(120, 200);
  eyeSize = random(10, 30);
  mouthSize = random(20, 35);
  hatSize = random(70, 90);
}
