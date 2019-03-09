let font,
  fontsize = 40;

function preload() {
  font = loadFont('assets/SourceSansPro-Regular.otf');
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(0);

  strokeWeight(5);
  stroke(255);

  // Set text characteristics
  textFont(font);
  textSize(fontsize);
  textAlign(CENTER, CENTER);

}

function draw() {
  fill(0);
  ellipse(200, 200, 80, 80);

  fill(255);
  let letter = char(48);
  text(letter, 200, 200);

}