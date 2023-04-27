function setup() {
    createCanvas(420, 420);
    background(255, 215, 0);
    colorMode(HSB)
    frameRate(2);
    ellipseMode(CORNER);
    strokeWeight(2);
}

var r = 15;
var gap = 4;

function draw() {
    for (var x = 0; x < width; x += r + gap) {
        fill(random(180, 360), 75, 100);
        for (var y = 0; y < height; y += r + gap) {
            circle(x + gap, y + gap, r);
        }
    }
}