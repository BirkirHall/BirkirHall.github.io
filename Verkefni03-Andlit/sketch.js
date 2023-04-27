var x = 270;
var y = 210;

function setup() {
    createCanvas(420, 420);
}

function draw() {
    background(100);
    stroke(1);
    fill(225);
    circle(210, 210, 180);
    beginShape();
    fill("purple");
    vertex(x - 160, y - 10);
    vertex(x - 140, y - 90);
    vertex(x - 120, y - 110);
    vertex(x - 80, y - 110);
    vertex(x - 0, y - 110);
    vertex(x + 20, y - 90);
    vertex(x + 40, y - 10);
    endShape();
    fill(220);
    ellipse(160, 220, 30);
    fill("green");
    ellipse(160, 220, 15);
    fill(220);
    ellipse(255, 220, 30);
    fill("green");
    ellipse(255, 220, 15);
    line(150, 260, 260, 260);
}
