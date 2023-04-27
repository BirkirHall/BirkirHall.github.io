function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(225);
    fill(0, 0, 200, 20);

    if ((mouseX < 200) & (mouseY < 200)) {
        fill("yellow");
        rect(0, 0, 200, 200);
    }

    if ((mouseX > 200) & (mouseY < 200)) {
        fill("red");
        rect(200, 0, 200, 200);
    }

    if ((mouseX < 200) & (mouseY > 200)) {
        fill("green");
        rect(0, 200, 200, 200);
    }

    if ((mouseX > 200) & (mouseY > 200)) {
        fill("blue");
        rect(200, 200, 200, 200);
    }
}
