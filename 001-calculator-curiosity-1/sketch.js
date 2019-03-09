const sizeRange = 10;

let font,
  fontsize = 40;

function preload() {
  font = loadFont('assets/SourceSansPro-Regular.otf');
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(0);

  strokeWeight(1);
  stroke(255);

  // Set text characteristics
  textFont(font);
  textSize(fontsize);
  textAlign(CENTER, CENTER);

 
  fill(255);
  let num = sumBy13(multiplyBy8(numOnlyDigitsEight(sizeRange)))+'';
  let digits = num.match(/\d/g);
  digits.forEach((d, index) => {
    text(char(d.charCodeAt(0)), index*100+100, window.innerHeight/2);
  });
  
}