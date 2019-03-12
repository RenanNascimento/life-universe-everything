let theta = 0;
const diameter = 500;
const radius = diameter / 2;
const xCenter = window.innerWidth/2;
const yCenter = window.innerHeight/2;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
  background(0);
  noFill();
  stroke(255);
  ellipse(xCenter, yCenter, diameter, diameter);
  translate(xCenter, yCenter);

  let xPoint = radius * Math.cos(theta * Math.PI / 180);
  let yPoint = radius * Math.sin(theta * Math.PI / 180);
  line(0, -0, xPoint, -yPoint);
  theta = theta + 1;
}