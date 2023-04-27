function setup() {
    createCanvas(420, 420);
    background("cyan");
    colorMode(HSB);
    frameRate(2);
}

var r = 30;
var gap = 2;

function draw() {
    strokeWeight(10);
    for (var x = 0; x < width; x += r + gap) {
        fill(random(90, 120), 75, 100);
        for (var y = 280; y < height; y += r + gap) {
            circle(x + gap, y + gap, 18 + r);
        }
    }
    fill(55, 75, 100);
    ellipse(70, 70, 70);
    noStroke();
    fill("white");
    ellipse(260, 100, 60);
    ellipse(280, 100, 60);
    ellipse(300, 100, 60);
    ellipse(320, 100, 60);
    ellipse(340, 100, 60);
    ellipse(360, 100, 60);
    ellipse(280, 70, 80);
    ellipse(330, 80, 80);
}
