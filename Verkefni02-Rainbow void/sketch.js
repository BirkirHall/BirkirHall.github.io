function setup() {
    createCanvas(480, 480);
}

function draw() {
    background(220);
    noStroke();
    colorMode(HSL);
    fill(173.02, 62.32, 27.06);
    triangle(0, 480, 0, 0, 480, 0);
    colorMode(HSL);
    fill(173.02, 62.32, 27.06);
    triangle(0, 0, 480, 0, 480, 480);
    colorMode(HSL);
    fill(173.02, 62.32, 27.06);
    triangle(0, 480, 0, 0, 480, 480);
    colorMode(HSL);
    fill(173.02, 62.32, 27.06);
    triangle(480, 0, 480, 480, 0, 480); //
    colorMode(HSL);
    fill(186.88, 81, 51);
    triangle(0, 420, 0, 0, 420, 0);
    colorMode(HSL);
    fill(186.88, 81, 51);
    triangle(60, 0, 480, 0, 480, 420);
    colorMode(HSL);
    fill(186.88, 81, 51);
    triangle(0, 480, 0, 60, 420, 480);
    colorMode(HSL);
    fill(186.88, 81, 51);
    triangle(420, 120, 480, 480, 60, 480); //
    colorMode(HSL);
    fill(300, 100, 68);
    triangle(0, 360, 0, 0, 360, 0);
    colorMode(HSL);
    fill(300, 100, 68);
    triangle(120, 0, 480, 0, 480, 360);
    colorMode(HSL);
    fill(300, 100, 68);
    triangle(0, 480, 0, 120, 360, 480);
    colorMode(HSL);
    fill(300, 100, 68);
    triangle(420, 180, 480, 480, 120, 480); //
    fill("yellow");
    triangle(0, 300, 0, 0, 300, 0);
    fill("yellow");
    triangle(180, 0, 480, 0, 480, 300);
    fill("yellow");
    triangle(0, 480, 0, 180, 300, 480);
    fill("yellow");
    triangle(480, 180, 480, 480, 180, 480);
    fill("purple");
    triangle(0, 240, 0, 0, 240, 0);
    fill("purple");
    triangle(240, 0, 480, 0, 480, 240);
    fill("purple");
    triangle(0, 480, 0, 240, 240, 480);
    fill("purple");
    triangle(480, 240, 480, 480, 240, 480);
    fill("red");
    triangle(0, 180, 0, 0, 180, 0);
    fill("red");
    triangle(300, 0, 480, 0, 480, 180);
    fill("red");
    triangle(0, 480, 0, 300, 180, 480);
    fill("red");
    triangle(480, 300, 480, 480, 300, 480);
    fill("blue");
    triangle(0, 0, 120, 0, 0, 120);
    fill("blue");
    triangle(360, 0, 480, 120, 480, 0);
    fill("blue");
    triangle(0, 360, 120, 480, 0, 480);
    fill("blue");
    triangle(480, 360, 360, 480, 480, 480);
    fill("green");
    triangle(0, 60, 0, 0, 60, 0);
    fill("green");
    triangle(420, 0, 480, 0, 480, 60);
    fill("green");
    triangle(0, 420, 60, 480, 0, 480);
    fill("green");
    triangle(480, 420, 480, 480, 420, 480);
    colorMode(HSL);
    fill(123.75, 50, 50);
    quad(240, 270, 270, 240, 240, 210, 210, 240);
}
