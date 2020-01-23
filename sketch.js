let count = 0;
let o, a;
let length, angle;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(20);
  noLoop();

  o = createVector(0, 0);
  
  length = 1;
  angle = 0;
}

function draw() {
  stroke(255, 150);
  translate(windowWidth / 2, windowHeight / 2);
  
  while (count < 140) {
    nextVector();
    count++;
  }
}

function nextVector() {
  length += 0.1 * length;
  let a = createVector(1);
  a.setMag(length);
  a.rotate(angle);
  line(o.x, o.y, a.x, a.y);
  translate(a.x, a.y);
  angle -= 2.1530;
}