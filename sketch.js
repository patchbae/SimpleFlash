var value = 0;

function setup() {
  createCanvas(displayWidth, displayHeight);
}

function draw() {
   background(0);

if (mouseIsPressed) {
  value = 255;
  fill (value);
  rect(0, 0, displayWidth, displayHeight);
  print(value);
 }
  else {
  value = 0;}
}

function touchStarted() {
  value = 255;
  fill (value);
  rect(0, 0, displayWidth, displayHeight);
}

function touchEnded() {
  value = 0;
  fill (value);
  rect(0, 0, displayWidth, displayHeight);
}
