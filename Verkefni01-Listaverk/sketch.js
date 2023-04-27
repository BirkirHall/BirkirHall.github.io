function setup() {
    createCanvas(480, 480);
}

function draw() {
    strokeWeight(0.02);
    background(220);
    colorMode(HSB);
    fill(255, 204, 100);
    rect(0, 0, 60, 60);
    colorMode(HSB);
    fill(255, 204, 100);
    rect(420, 420, 60, 60);
    colorMode(HSB);
    fill(255, 204, 100);
    rect(0, 420, 60, 60);
    colorMode(HSB);
    fill(255, 204, 100);
    rect(420, 0, 60, 60);

    fill("black");
    rect(0, 60, 60, 240);
    fill("red");
    rect(60, 0, 60, 180);
    fill("red");
    rect(60, 300, 60, 180);
    fill("white");
    rect(0, 300, 60, 120);
    fill("orange");
    rect(60, 240, 60, 60);
    fill("yellow");
    rect(120, 420, 60, 60);
    fill("white");
    rect(120, 240, 60, 180);
    fill("orange");
    rect(120, 180, 60, 60);
    fill("black");
    rect(120, 60, 60, 60);
    fill("white");
    rect(180, 240, 60, 180);
    fill("white");
    rect(240, 300, 60, 120);
    fill("black");
    rect(180, 60, 60, 180);
    fill("black");
    rect(240, 60, 60, 120);
    fill("green");
    rect(180, 0, 60, 60);
    fill("red");
    rect(240, 180, 60, 120);
    fill("orange");
    rect(300, 0, 60, 60);
    fill("red");
    rect(300, 120, 60, 240);
    fill("red");
    rect(360, 0, 60, 180);
    fill("red");
    rect(360, 300, 60, 180);
    fill("yellow");
    rect(300, 420, 60, 60);
    fill("brown");
    rect(360, 180, 60, 120);
    fill("brown");
    rect(420, 60, 60, 180);
    fill("white");
    rect(420, 240, 60, 180);

    fill("orange");
    triangle(180, 180, 120, 180, 180, 120);
    fill("orange");
    triangle(60, 240, 120, 180, 120, 240);
    fill("yellow");
    triangle(60, 180, 120, 180, 60, 240);
    fill("black");
    triangle(120, 180, 180, 120, 120, 120);
    fill("red");
    triangle(120, 60, 180, 0, 120, 0);
    fill("green");
    triangle(180, 60, 180, 0, 120, 60);
    fill("orange");
    triangle(300, 60, 300, 0, 240, 60);
    fill("black");
    triangle(240, 60, 300, 0, 240, 0);
    fill("orange");
    triangle(360, 60, 300, 120, 300, 60);
    fill("red");
    triangle(360, 60, 300, 120, 360, 120);
    fill("yellow");
    triangle(300, 360, 300, 420, 360, 420);
    fill("yellow");
    triangle(300, 480, 300, 420, 240, 420);
    fill("yellow");
    triangle(180, 480, 240, 420, 180, 420);
    fill("green");
    triangle(180, 480, 240, 420, 240, 480);
}

