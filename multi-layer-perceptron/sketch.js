let lr_slider;

function setup() {
    createCanvas(400, 400);
    lr_slider = createSlider(0.01, 0.5, 0.1, 0.01);
}

function draw() {
    //background(0);

    if (mouseIsPressed) {
        fill(0);
      } else {
        fill(255);
      }
      ellipse(mouseX, mouseY, 80, 80);
}