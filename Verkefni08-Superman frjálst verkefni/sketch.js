var ship;
var x = -100;
var y = 100;
var x_hradi = 5;
var x2 = -100;
var y2 = 200;
var x2_hradi = 4;
var x3 = -100;
var y3 = 300;
var x3_hradi = 8;

function preload() {
    ship = loadImage("Superman2.png");
}

function setup() {
    createCanvas(400, 400);
    ship.resize(300, 0);
}
function draw() {
    background(0);
    x = x + x_hradi;
    if (x > 550) {
        x = -50;
        y = random(20, 100);
    }

    x2 = x2 + x2_hradi;
    if (x2 > 550) {
        x2 = -50;
        y2 = random(150, 200);
    }

    x3 = x3 + x3_hradi;
    if (x3 > 550) {
        x3 = -50;
        y3 = random(250, 380);
    }

    beginShape();
    fill(185, 255, 255);
    vertex(x - 30, y);
    vertex(x - 8, y - 8);
    vertex(x, y - 30);
    vertex(x + 8, y - 8);
    vertex(x + 30, y);
    vertex(x + 8, y + 8);
    vertex(x, y + 30);
    vertex(x - 8, y + 8);
    endShape();

    beginShape();
    fill(185, 255, 255);
    vertex(x2 - 30, y2);
    vertex(x2 - 8, y2 - 8);
    vertex(x2, y2 - 30);
    vertex(x2 + 8, y2 - 8);
    vertex(x2 + 30, y2);
    vertex(x2 + 8, y2 + 8);
    vertex(x2, y2 + 30);
    vertex(x2 - 8, y2 + 8);
    endShape();

    beginShape();
    fill(185, 255, 255);
    vertex(x3 - 30, y3);
    vertex(x3 - 8, y3 - 8);
    vertex(x3, y3 - 30);
    vertex(x3 + 8, y3 - 8);
    vertex(x3 + 30, y3);
    vertex(x3 + 8, y3 + 8);
    vertex(x3, y3 + 30);
    vertex(x3 - 8, y3 + 8);
    endShape();

    imageMode(CENTER);
    image(ship, mouseX, mouseY);
}
