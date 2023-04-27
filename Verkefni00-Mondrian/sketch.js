function setup() {
    createCanvas(400, 400);
   
  }
  
  function draw() {
    background('white');
    line (170, 0, 170, 1000);
    line (400,200,-1000000, 1000);
    line (370,400,370,200);
    line (370,280,400,280);
    line (370,380,170,380);
    strokeWeight (5);
    fill('red');
    rect(0, 0, 170, 200);
    stroke (1);
    colorMode (RGB)
    fill(236, 227, 200)
    rect(170,200,200,180);
    stroke (1)
    fill('blue');
    rect(370,200,30,80);
    stroke(1);
    fill('yellow');
    rect(170,380,120,30);
    stroke(1)
    fill('black');
    rect(280,380,90,30);
    stroke(1);
  }
  
